import { chromium, devices } from 'playwright'

async function profile(name, browserType, deviceName, url) {
  const browser = await browserType.launch({ headless: true })
  const device = devices[deviceName]
  const ctx = await browser.newContext({ ...device })
  const page = await ctx.newPage()
  // Real CPU throttle via CDP only works on Chromium. WebKit can't throttle CPU.
  if (browserType === chromium) {
    const client = await ctx.newCDPSession(page)
    await client.send('Emulation.setCPUThrottlingRate', { rate: 4 })
    await client.send('Network.enable')
    await client.send('Network.emulateNetworkConditions', {
      offline: false,
      latency: 150,
      downloadThroughput: (1.6 * 1024 * 1024) / 8,
      uploadThroughput: (750 * 1024) / 8,
    })
  }

  await page.addInitScript(() => {
    window.__lt = []
    try {
      new PerformanceObserver((list) => {
        for (const e of list.getEntries()) window.__lt.push({ d: e.duration, s: e.startTime })
      }).observe({ type: 'longtask', buffered: true })
    } catch {}
  })

  console.log(`\n=== ${name} :: ${url} ===`)
  const t0 = Date.now()
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 })
  } catch (e) {
    console.log('  goto error:', e.message)
  }
  const dcl = Date.now() - t0
  await page.waitForLoadState('load', { timeout: 90000 }).catch(() => {})
  const load = Date.now() - t0
  // Wait for any post-load stragglers
  await page.waitForTimeout(2000)

  const m = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0]
    const paints = performance.getEntriesByType('paint')
    const lcp = (performance.getEntriesByType('largest-contentful-paint').slice(-1)[0] || {}).startTime
    const lt = (window).__lt || []
    const totalBlock = lt.reduce((a, x) => a + Math.max(0, x.d - 50), 0)
    return {
      ttfb: nav?.responseStart,
      fcp: paints.find(p => p.name === 'first-contentful-paint')?.startTime,
      lcp,
      domInteractive: nav?.domInteractive,
      domContentLoaded: nav?.domContentLoadedEventEnd,
      loadEvent: nav?.loadEventEnd,
      longTaskCount: lt.length,
      longTaskTotal: lt.reduce((a, x) => a + x.d, 0),
      totalBlockingTime: totalBlock,
      longestTask: Math.max(0, ...lt.map(x => x.d)),
      resourceCount: performance.getEntriesByType('resource').length,
      transferBytes: performance.getEntriesByType('resource').reduce((a, r) => a + (r.transferSize || 0), 0),
    }
  })

  console.log('  wallDCL', dcl, 'wallLoad', load)
  console.log('  perf', JSON.stringify(m, null, 2))

  // Now simulate a client-side navigation: click first solutions link
  if (url.includes('/en') && !url.includes('/solutions')) {
    console.log('\n  -- client nav to /en/solutions --')
    const navStart = Date.now()
    try {
      await page.evaluate(() => {
        const a = document.querySelector('a[href*="/solutions"]')
        if (a) (a).click()
      })
      await page.waitForURL(/\/solutions/, { timeout: 30000 })
      const navTime = Date.now() - navStart
      await page.waitForLoadState('domcontentloaded', { timeout: 30000 }).catch(() => {})
      const navDcl = Date.now() - navStart
      console.log(`  click->urlChange ${navTime}ms, click->dcl ${navDcl}ms`)
    } catch (e) {
      console.log('  nav error:', e.message)
    }
  }

  await browser.close()
}

await profile('Chromium iPhone13 4xCPU Slow4G', chromium, 'iPhone 13', 'https://www.awesoontechnologies.com/en')
await profile('Chromium iPhone13 4xCPU Slow4G', chromium, 'iPhone 13', 'https://www.awesoontechnologies.com/en/solutions')
