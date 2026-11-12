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
