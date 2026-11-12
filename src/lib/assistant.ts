export type AssistantReplyKind = 'text' | 'brief' | 'book'

export interface AssistantReply {
  messageKey: string
  prefixKey?: string
  kind: AssistantReplyKind
}

export interface AssistantKeywords {
  orders: string[]
  spreadsheets: string[]
  government: string[]
}

// Scripted stand-in. A live assistant replaces this with a call to /api/assistant,
// which must not ship until counsel updates the privacy policy.
export async function getAssistantReply(text: string, turn: number, keywords: AssistantKeywords): Promise<AssistantReply> {
  if (turn === 0) {
    const t = text.toLowerCase()
    const hit = (list: string[]) => list.some((k) => k && t.includes(k))
    const prefixKey = hit(keywords.orders)
      ? 'openOrders'
      : hit(keywords.spreadsheets)
        ? 'openSpreadsheets'
        : hit(keywords.government)
          ? 'openGovernment'
          : 'openGeneric'
    return { prefixKey, messageKey: 'followUp', kind: 'text' }
  }
  if (turn === 1) return { messageKey: 'briefIntro', kind: 'brief' }
  return { messageKey: 'handOff', kind: 'book' }
}

export type DesignNeed = 'brand' | 'interface' | 'system' | 'graphics'

export interface DesignReply {
  messageKey: string
  prefixKey?: string
  options?: 'exist' | 'audience'
  brief?: boolean
  book?: boolean
}

const DESIGN_WORDS: Record<DesignNeed, string[]> = {
  brand: ['brand', 'logo', 'marque', 'marca', 'identit'],
  interface: ['app', 'web', 'site', 'screen', 'ui', 'interface', 'portal', 'écran', 'pantalla'],
  system: ['system', 'component', 'token', 'système', 'sistema'],
  graphics: ['graphic', 'social', ' ad', 'banner', 'print', 'post', 'graphisme', 'gráfico', 'anuncio'],
}

export function matchDesignNeed(text: string): DesignNeed | undefined {
  const t = text.toLowerCase()
  return (Object.keys(DESIGN_WORDS) as DesignNeed[]).find((k) => DESIGN_WORDS[k].some((w) => t.includes(w)))
}

// Same scripted seam as getAssistantReply: two questions, then a brief the visitor keeps.
export async function getDesignAssistantReply(step: number, need: DesignNeed | undefined, text: string, priceWords: string[]): Promise<DesignReply> {
  const t = text.toLowerCase()
  if (priceWords.some((w) => w && t.includes(w))) return { messageKey: 'noPrice', book: true }
  if (step === 0) return { prefixKey: `ack.${need ?? 'generic'}`, messageKey: 'q1', options: 'exist' }
  if (step === 1) return { messageKey: 'q2', options: 'audience' }
  return { messageKey: 'briefIntro', brief: true }
}
