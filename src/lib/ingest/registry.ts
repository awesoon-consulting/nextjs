import { absEarnings } from './connectors/abs-earnings'
import { apisGuru } from './connectors/apis-guru'
import { austender } from './connectors/austender'
import { blsOews } from './connectors/bls-oews'
import { canadabuys } from './connectors/canadabuys'
import { codesCpv } from './connectors/codes-cpv'
import { codesGsin } from './connectors/codes-gsin'
import { codesNaics } from './connectors/codes-naics'
import { codesPsc } from './connectors/codes-psc'
import { keyedStubs } from './connectors/keyed-stubs'
import { onsAshe } from './connectors/ons-ashe'
import { statcanWages } from './connectors/statcan-wages'
import { ukContractsFinder } from './connectors/uk-contracts-finder'
import { ukFindATender } from './connectors/uk-find-a-tender'
import { usaspending } from './connectors/usaspending'
import { vendorFeeds } from './connectors/vendor-feeds'
import type { Connector } from './types'

export const CONNECTORS: Connector[] = [
  usaspending,
  canadabuys,
  ukContractsFinder,
  ukFindATender,
  austender,
  blsOews,
  statcanWages,
  onsAshe,
  absEarnings,
  codesNaics,
  codesPsc,
  codesCpv,
  codesGsin,
  apisGuru,
  ...vendorFeeds,
  ...keyedStubs,
]
