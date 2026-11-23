// A store link is added only once its listing is live; until then the page shows the launch date.
export const towerDraftStores: { appStore: string | null; googlePlay: string | null } = {
  appStore: null,
  googlePlay: null,
}

export const towerDraftPlayPath = '/play/tower-draft'

export const towerDraftShots = [
  '/images/games/tower-draft/02-fall.webp',
  '/images/games/tower-draft/05-road.webp',
  '/images/games/tower-draft/01-town.webp',
  '/images/games/tower-draft/06-path.webp',
] as const
