/**
 * The ten Awesoon games. Each entry drives /games and /games/[slug]:
 * hero, screenshots, how to play, who it is for, age rating and FAQ.
 *
 * Copy comes from the shipping store listings, so the site and the App Store
 * never drift apart. Screenshots are real captures from the shipping builds.
 */

export interface GameStep {
  title: string
  body: string
}

export interface GameFaq {
  q: string
  a: string
}

export interface GameScreenshot {
  src: string
  alt: string
}

export type GameTranslation = Pick<
  GameData,
  | 'tagline'
  | 'category'
  | 'sessionLength'
  | 'heroBlurb'
  | 'howToPlay'
  | 'features'
  | 'whoFor'
  | 'faq'
  | 'seoSummary'
  | 'screenshots'
>

export interface GameData {
  slug: string
  name: string
  bundleId: string
  accent: string
  icon: string
  category: string
  ageRating: string
  players: string
  price: string
  sessionLength: string
  tagline: string
  heroBlurb: string
  howToPlay: GameStep[]
  features: string[]
  whoFor: string[]
  faq: GameFaq[]
  seoSummary: string
  keywords: string[]
  screenshots: GameScreenshot[]
  translations?: Partial<Record<'fr' | 'es', GameTranslation>>
}

export const games: GameData[] = [
  {
    slug: 'stack-snap',
    name: 'Stack Snap',
    bundleId: 'com.awesoontechnologies.stacksnap',
    accent: '#1E3A5F',
    icon: '/images/games/stack-snap/icon.webp',
    category: 'One-tap arcade',
    ageRating: '4+',
    players: 'One player',
    price: 'Free',
    sessionLength: 'About 20 seconds a run',
    tagline: 'One tap. Build it true.',
    heroBlurb:
      "A one-tap stacker drawn as an architect's drafting sheet. A block slides across the page, you tap to drop it, and anything hanging over the edge is sliced off for good.",
    howToPlay: [
      {
        title: 'Tap to drop',
        body: 'A block slides left and right above the tower. Tap anywhere to drop it.',
      },
      {
        title: 'Watch the overhang',
        body: 'Whatever misses the block below is cut away, so the tower gets narrower with every sloppy drop.',
      },
      {
        title: 'Keep the rhythm',
        body: 'The slide speeds up as you climb. Land a few blocks dead on and the next one earns a little width back.',
      },
    ],
    features: [
      'A daily height target with a streak, so there is a reason to come back tomorrow',
      'Drafting stamps that unlock new sheet tints: Trace, Blueprint and Mylar',
      'Your height, your best and the width you have left, dimensioned as you build',
      'Sound and haptics you can switch off, and a How to Play sheet drawn as figures',
    ],
    whoFor: [
      'Anyone who likes a game they can finish while the kettle boils',
      'Players who want precision rather than button mashing',
      'People who would rather look at a drafting sheet than a cartoon',
    ],
    faq: [
      {
        q: 'How long is a game?',
        a: 'About twenty seconds. The tower narrows quickly, and one bad drop ends it.',
      },
      {
        q: 'Does it work offline?',
        a: 'Yes. There is no account and no connection needed, ever.',
      },
      {
        q: 'What is the daily challenge?',
        a: 'A new target height every day. Clear it to earn a stamp and keep your streak going.',
      },
    ],
    seoSummary:
      "Stack Snap is a free one-tap stacking game drawn as an architect's drafting sheet. Drop blocks, keep the tower true, and clear a new height target every day. Offline, no account.",
    keywords: ['stacking game', 'one tap game', 'tower builder', 'daily challenge', 'offline game'],
    screenshots: [
      {
        src: '/images/games/stack-snap/01-home.webp',
        alt: 'The Stack Snap title sheet, with a dimensioned tower on graph paper',
      },
      {
        src: '/images/games/stack-snap/02-revision.webp',
        alt: 'A run ending, with the overhang marked in orange on a revision cloud',
      },
      {
        src: '/images/games/stack-snap/03-how-to-play.webp',
        alt: 'The How to Play sheet showing three annotated figures',
      },
      {
        src: '/images/games/stack-snap/04-sheets.webp',
        alt: 'The sheet tints screen with Vellum, Trace, Blueprint and Mylar',
      },
    ],
    translations: {
      fr: {
        tagline: 'Une touche. Bâtissez juste.',
        category: 'Arcade à une touche',
        sessionLength: 'Environ 20 secondes par partie',
        heroBlurb:
          "Un jeu d'empilement à une touche dessiné comme une planche d'architecte. Un bloc glisse sur la page, vous touchez pour le déposer, et tout ce qui dépasse est coupé définitivement.",
        howToPlay: [
          {
            title: 'Touchez pour déposer',
            body: "Un bloc glisse de gauche à droite au-dessus de la tour. Touchez n'importe où pour le laisser tomber.",
          },
          {
            title: 'Surveillez le débord',
            body: 'Tout ce qui manque le bloc du dessous est coupé : chaque dépôt approximatif rétrécit la tour.',
          },
          {
            title: 'Gardez le rythme',
            body: "La glissade accélère à mesure que vous montez. Quelques dépôts parfaits d'affilée redonnent un peu de largeur.",
          },
        ],
        features: [
          'Un objectif de hauteur quotidien et une série à entretenir',
          'Des tampons de dessin qui débloquent de nouvelles teintes de papier : Trace, Blueprint et Mylar',
          'Votre hauteur, votre record et la largeur restante, cotés pendant que vous bâtissez',
          'Sons et vibrations désactivables, et une fiche Comment jouer dessinée en figures',
        ],
        whoFor: [
          'Ceux qui aiment une partie qui se termine avant que la bouilloire siffle',
          'Les joueurs qui préfèrent la précision au matraquage de boutons',
          'Les amateurs de planches à dessin plutôt que de dessins animés',
        ],
        faq: [
          {
            q: 'Combien de temps dure une partie ?',
            a: 'Une vingtaine de secondes. La tour rétrécit vite et un mauvais dépôt suffit.',
          },
          {
            q: 'Le jeu fonctionne-t-il hors ligne ?',
            a: 'Oui. Aucun compte et aucune connexion, jamais.',
          },
          {
            q: "Qu'est-ce que le défi quotidien ?",
            a: 'Une nouvelle hauteur cible chaque jour. Atteignez-la pour gagner un tampon et prolonger votre série.',
          },
        ],
        seoSummary:
          "Stack Snap est un jeu d'empilement gratuit à une touche, dessiné comme une planche d'architecte. Déposez les blocs, gardez la tour droite et relevez un défi de hauteur chaque jour. Hors ligne, sans compte.",
        screenshots: [
          {
            src: '/images/games/stack-snap/01-home.webp',
            alt: "L'écran titre de Stack Snap, avec une tour cotée sur papier millimétré",
          },
          {
            src: '/images/games/stack-snap/02-revision.webp',
            alt: 'Une partie qui se termine, le débord marqué en orange dans un nuage de révision',
          },
          {
            src: '/images/games/stack-snap/03-how-to-play.webp',
            alt: 'La fiche Comment jouer avec trois figures annotées',
          },
          {
            src: '/images/games/stack-snap/04-sheets.webp',
            alt: "L'écran des teintes de papier : Vellum, Trace, Blueprint et Mylar",
          },
        ],
      },
      es: {
        tagline: 'Un toque. Constrúyela recta.',
        category: 'Arcade de un toque',
        sessionLength: 'Unos 20 segundos por partida',
        heroBlurb:
          'Un juego de apilar de un solo toque dibujado como un plano de arquitecto. Un bloque se desliza por la hoja, tocas para soltarlo y todo lo que sobresale se recorta para siempre.',
        howToPlay: [
          {
            title: 'Toca para soltar',
            body: 'Un bloque se desliza de lado a lado sobre la torre. Toca en cualquier parte para soltarlo.',
          },
          {
            title: 'Vigila el saliente',
            body: 'Lo que no cae sobre el bloque de abajo se recorta, así que cada suelta descuidada estrecha la torre.',
          },
          {
            title: 'Mantén el ritmo',
            body: 'El deslizamiento se acelera según subes. Unas cuantas sueltas perfectas seguidas devuelven algo de anchura.',
          },
        ],
        features: [
          'Un objetivo de altura diario con una racha que mantener',
          'Sellos de dibujo que desbloquean nuevos tonos de papel: Trace, Blueprint y Mylar',
          'Tu altura, tu récord y la anchura que te queda, acotados mientras construyes',
          'Sonido y vibración desactivables, y una hoja de Cómo jugar dibujada con figuras',
        ],
        whoFor: [
          'Quien quiera una partida que termina antes de que hierva el agua',
          'Jugadores que prefieren la precisión al aporreo de botones',
          'Quien prefiera mirar un plano antes que un dibujo animado',
        ],
        faq: [
          {
            q: '¿Cuánto dura una partida?',
            a: 'Unos veinte segundos. La torre se estrecha rápido y basta una mala suelta.',
          },
          {
            q: '¿Funciona sin conexión?',
            a: 'Sí. No hay cuenta ni hace falta conexión, nunca.',
          },
          {
            q: '¿Qué es el reto diario?',
            a: 'Una altura objetivo nueva cada día. Supérala para ganar un sello y mantener la racha.',
          },
        ],
        seoSummary:
          'Stack Snap es un juego gratuito de apilar de un toque dibujado como un plano de arquitecto. Suelta bloques, mantén la torre recta y supera un objetivo de altura cada día. Sin conexión y sin cuenta.',
        screenshots: [
          {
            src: '/images/games/stack-snap/01-home.webp',
            alt: 'La pantalla de título de Stack Snap, con una torre acotada sobre papel milimetrado',
          },
          {
            src: '/images/games/stack-snap/02-revision.webp',
            alt: 'Una partida que termina, con el saliente marcado en naranja en una nube de revisión',
          },
          {
            src: '/images/games/stack-snap/03-how-to-play.webp',
            alt: 'La hoja de Cómo jugar con tres figuras anotadas',
          },
          {
            src: '/images/games/stack-snap/04-sheets.webp',
            alt: 'La pantalla de tonos de papel: Vellum, Trace, Blueprint y Mylar',
          },
        ],
      },
    },
  },
  {
    slug: 'loop-weaver',
    name: 'Loop Weaver',
    bundleId: 'com.awesoontechnologies.loopweaver',
    accent: '#1F5FA8',
    icon: '/images/games/loop-weaver/icon.webp',
    category: 'Line puzzle',
    ageRating: '4+',
    players: 'One player',
    price: 'Free',
    sessionLength: 'A few minutes a board, no timer',
    tagline: 'Draw the line. Cross nothing.',
    heroBlurb:
      'A line puzzle drawn as a printed metro map. Connect every pair of stations without two lines ever sharing track, and fill the whole grid for three stars.',
    howToPlay: [
      {
        title: 'Drag between stations',
        body: 'Start at a station and drag a route to its matching pair. Lines bend at forty-five degrees, like a real transit map.',
      },
      {
        title: 'Never share track',
        body: 'Cross another route and it is cut back to where you entered. Every pair has to be connected at once.',
      },
      {
        title: 'Fill the grid',
        body: 'Connecting all pairs solves the board. Covering every square earns the third star.',
      },
    ],
    features: [
      'Levels generated from the line number, so they never run out and never repeat',
      'Boards grow from five by five up to nine by nine as you go',
      'Undo, plus a hint that lays part of a route when you are stuck',
      'Route Symbols marks every station with a shape as well as a colour',
    ],
    whoFor: [
      'Puzzle players who want to think, not react',
      'Anyone who finds timers stressful; this game has none and no way to lose',
      'People who like transit maps, wiring diagrams and tidy solutions',
    ],
    faq: [
      {
        q: 'Is there a timer?',
        a: 'No. There is no clock and no fail state. A board waits as long as you do.',
      },
      {
        q: 'Do the levels run out?',
        a: 'No. They are generated from the line number, so line 200 exists and is the same for everyone.',
      },
      {
        q: 'I am colour blind. Can I play?',
        a: 'Yes. Route Symbols adds a distinct shape to every station and legend row.',
      },
    ],
    seoSummary:
      'Loop Weaver is a free connect-the-stations puzzle drawn as a metro map. No timer, no fail state, endless generated boards, and a colour-blind mode. Plays offline.',
    keywords: ['line puzzle', 'connect puzzle', 'metro map game', 'relaxing puzzle', 'no timer'],
    screenshots: [
      {
        src: '/images/games/loop-weaver/01-home.webp',
        alt: 'The Loop Weaver title screen with a hand-drawn transit map',
      },
      {
        src: '/images/games/loop-weaver/02-routing.webp',
        alt: 'A six by six board part routed, with a station legend below',
      },
      {
        src: '/images/games/loop-weaver/03-line-complete.webp',
        alt: 'A solved board with three stars and full grid coverage',
      },
      {
        src: '/images/games/loop-weaver/04-line-index.webp',
        alt: 'The Line Index listing solved lines and their stars',
      },
    ],
    translations: {
      fr: {
        tagline: 'Tracez la ligne. Ne croisez rien.',
        category: 'Casse-tête de tracés',
        sessionLength: 'Quelques minutes par plan, sans chrono',
        heroBlurb:
          "Un casse-tête de tracés dessiné comme un plan de métro imprimé. Reliez chaque paire de stations sans qu'aucune ligne n'en croise une autre, et remplissez toute la grille pour trois étoiles.",
        howToPlay: [
          {
            title: 'Glissez entre les stations',
            body: "Partez d'une station et tracez jusqu'à sa jumelle. Les lignes plient à quarante-cinq degrés, comme sur un vrai plan.",
          },
          {
            title: 'Ne partagez jamais la voie',
            body: "Croisez un autre tracé et il est coupé à l'endroit où vous êtes entré. Toutes les paires doivent être reliées en même temps.",
          },
          {
            title: 'Remplissez la grille',
            body: 'Relier toutes les paires résout le plan. Couvrir chaque case donne la troisième étoile.',
          },
        ],
        features: [
          'Des niveaux générés à partir du numéro de ligne : jamais épuisés, jamais répétés',
          'Des grilles qui passent de cinq sur cinq à neuf sur neuf',
          'Annulation, plus un indice qui pose une partie du tracé quand vous bloquez',
          'Le mode Symboles ajoute une forme à chaque station en plus de la couleur',
        ],
        whoFor: [
          'Les amateurs de casse-tête qui veulent réfléchir, pas réagir',
          "Ceux que les chronos stressent : il n'y en a aucun et on ne peut pas perdre",
          'Les amoureux des plans de métro, des schémas et des solutions propres',
        ],
        faq: [
          {
            q: 'Y a-t-il un chronomètre ?',
            a: 'Non. Aucune horloge, aucune défaite possible. Le plan vous attend.',
          },
          {
            q: "Les niveaux s'épuisent-ils ?",
            a: 'Non. Ils sont générés à partir du numéro de ligne, donc la ligne 200 existe et elle est identique pour tout le monde.',
          },
          {
            q: 'Je suis daltonien, puis-je jouer ?',
            a: 'Oui. Le mode Symboles ajoute une forme distincte à chaque station et à chaque ligne de la légende.',
          },
        ],
        seoSummary:
          "Loop Weaver est un casse-tête gratuit où l'on relie des stations sur un plan de métro. Sans chrono, sans défaite, avec des grilles générées à l'infini et un mode daltonien. Fonctionne hors ligne.",
        screenshots: [
          {
            src: '/images/games/loop-weaver/01-home.webp',
            alt: "L'écran titre de Loop Weaver avec un plan de transport dessiné à la main",
          },
          {
            src: '/images/games/loop-weaver/02-routing.webp',
            alt: 'Une grille de six sur six partiellement tracée, avec la légende des lignes',
          },
          {
            src: '/images/games/loop-weaver/03-line-complete.webp',
            alt: 'Un plan résolu avec trois étoiles et la grille entièrement couverte',
          },
          {
            src: '/images/games/loop-weaver/04-line-index.webp',
            alt: "L'index des lignes résolues et de leurs étoiles",
          },
        ],
      },
      es: {
        tagline: 'Traza la línea. No cruces nada.',
        category: 'Puzle de trazados',
        sessionLength: 'Unos minutos por plano, sin reloj',
        heroBlurb:
          'Un puzle de trazados dibujado como un plano de metro impreso. Conecta cada pareja de estaciones sin que dos líneas compartan vía, y cubre toda la cuadrícula para conseguir tres estrellas.',
        howToPlay: [
          {
            title: 'Arrastra entre estaciones',
            body: 'Empieza en una estación y arrastra hasta su pareja. Las líneas giran a cuarenta y cinco grados, como en un plano real.',
          },
          {
            title: 'Nunca compartas vía',
            body: 'Si cruzas otro trazado, este se recorta hasta donde entraste. Todas las parejas deben estar conectadas a la vez.',
          },
          {
            title: 'Cubre la cuadrícula',
            body: 'Conectar todas las parejas resuelve el plano. Cubrir cada casilla da la tercera estrella.',
          },
        ],
        features: [
          'Niveles generados a partir del número de línea: nunca se acaban ni se repiten',
          'Cuadrículas que crecen de cinco por cinco a nueve por nueve',
          'Deshacer, y una pista que coloca parte del trazado cuando te atascas',
          'El modo Símbolos marca cada estación con una forma además del color',
        ],
        whoFor: [
          'Aficionados a los puzles que quieren pensar, no reaccionar',
          'Quien se agobia con los cronómetros: aquí no hay ninguno ni se puede perder',
          'Quien disfruta de los planos de metro, los esquemas y las soluciones limpias',
        ],
        faq: [
          {
            q: '¿Hay cronómetro?',
            a: 'No. No hay reloj ni forma de perder. El plano espera lo que haga falta.',
          },
          {
            q: '¿Se acaban los niveles?',
            a: 'No. Se generan a partir del número de línea, así que la línea 200 existe y es igual para todo el mundo.',
          },
          {
            q: 'Soy daltónico, ¿puedo jugar?',
            a: 'Sí. El modo Símbolos añade una forma distinta a cada estación y a cada fila de la leyenda.',
          },
        ],
        seoSummary:
          'Loop Weaver es un puzle gratuito de conectar estaciones en un plano de metro. Sin reloj, sin derrota, con cuadrículas generadas infinitas y modo para daltonismo. Funciona sin conexión.',
        screenshots: [
          {
            src: '/images/games/loop-weaver/01-home.webp',
            alt: 'La pantalla de título de Loop Weaver con un plano de transporte dibujado a mano',
          },
          {
            src: '/images/games/loop-weaver/02-routing.webp',
            alt: 'Una cuadrícula de seis por seis a medio trazar, con la leyenda de líneas',
          },
          {
            src: '/images/games/loop-weaver/03-line-complete.webp',
            alt: 'Un plano resuelto con tres estrellas y la cuadrícula cubierta',
          },
          {
            src: '/images/games/loop-weaver/04-line-index.webp',
            alt: 'El índice de líneas resueltas y sus estrellas',
          },
        ],
      },
    },
  },
  {
    slug: 'tidy-tiles',
    name: 'Tidy Tiles',
    bundleId: 'com.awesoontechnologies.tidytiles',
    accent: '#B08A3E',
    icon: '/images/games/tidy-tiles/icon.webp',
    category: 'Sorting puzzle',
    ageRating: '4+',
    players: 'One player',
    price: 'Free',
    sessionLength: 'A few minutes a ledger, no timer',
    tagline: 'An apothecary sorting puzzle',
    heroBlurb:
      'Pour coloured tinctures between apothecary bottles until each colour stands alone. Every shelf is built backwards from a finished one, so every puzzle can be solved.',
    howToPlay: [
      {
        title: 'Lift a bottle',
        body: 'Tap a vessel to pick it up. Tap it again to put it back.',
      },
      {
        title: 'Pour it',
        body: 'Tap a second vessel to pour. The whole run of matching tincture on top moves, as far as there is room.',
      },
      {
        title: 'Seal the ledger',
        body: 'When every colour sits alone in one bottle, the ledger is sealed in red wax and the next shelf is drawn.',
      },
    ],
    features: [
      'Every level generated backwards from a solved shelf, so none of them are impossible',
      'Shelves grow from three tinctures up to nine',
      'Undo a pour, restart the shelf, or add one extra empty vessel',
      'Inked Symbols marks every tincture with its own symbol for colour-blind play',
    ],
    whoFor: [
      'Players who like water sort and ball sort puzzles but want a setting with some character',
      'Anyone who wants a calm puzzle with no timer and no lives',
      'People who have been burned by sorting games that hand out unsolvable boards',
    ],
    faq: [
      {
        q: 'Can a shelf be impossible?',
        a: 'No. Each one is generated backwards from a finished shelf, so a solution always exists.',
      },
      {
        q: 'Are there lives or energy?',
        a: 'No. Play as long as you like, and restart a shelf as often as you like.',
      },
      {
        q: 'Does it need an internet connection?',
        a: 'No. Everything runs on the device and nothing is uploaded.',
      },
    ],
    seoSummary:
      "Tidy Tiles is a free colour sorting puzzle set in an old chemist's shop. Every shelf is provably solvable, there is no timer and no lives, and it plays offline.",
    keywords: [
      'color sort puzzle',
      'water sort',
      'sorting game',
      'relaxing puzzle',
      'offline puzzle',
    ],
    screenshots: [
      {
        src: '/images/games/tidy-tiles/01-home.webp',
        alt: 'The Tidy Tiles shop sign with three sorted tincture bottles',
      },
      {
        src: '/images/games/tidy-tiles/02-shelf-pour.webp',
        alt: 'A shelf of nine bottles mid-puzzle with one vessel lifted',
      },
      {
        src: '/images/games/tidy-tiles/03-the-shelf.webp',
        alt: 'The Shelf, a ledger of sealed puzzles with wax seals',
      },
      {
        src: '/images/games/tidy-tiles/04-how-to-mix.webp',
        alt: 'How to Mix, three annotated prescription tags explaining the rules',
      },
    ],
    translations: {
      fr: {
        tagline: "Un casse-tête de tri d'apothicaire",
        category: 'Casse-tête de tri',
        sessionLength: 'Quelques minutes par registre, sans chrono',
        heroBlurb:
          "Versez des teintures colorées entre des flacons d'apothicaire jusqu'à ce que chaque couleur soit seule. Chaque étagère est construite à rebours depuis une étagère finie : tous les casse-têtes ont une solution.",
        howToPlay: [
          {
            title: 'Soulevez un flacon',
            body: 'Touchez un flacon pour le prendre. Touchez-le de nouveau pour le reposer.',
          },
          {
            title: 'Versez',
            body: 'Touchez un second flacon pour verser. Toute la série de teinture identique du dessus se déplace, dans la limite de la place.',
          },
          {
            title: 'Scellez le registre',
            body: "Quand chaque couleur occupe un seul flacon, le registre est scellé à la cire rouge et l'étagère suivante est dressée.",
          },
        ],
        features: [
          "Chaque niveau généré à rebours depuis une étagère résolue : aucun n'est impossible",
          'Des étagères qui passent de trois teintures à neuf',
          "Annulez une transvasion, recommencez l'étagère ou ajoutez un flacon vide",
          "Le mode Symboles encrés marque chaque teinture d'un signe pour le daltonisme",
        ],
        whoFor: [
          'Les amateurs de tri de liquides qui veulent un décor avec du caractère',
          'Ceux qui cherchent un casse-tête calme, sans chrono ni vies',
          'Ceux qui en ont assez des jeux de tri qui distribuent des grilles insolubles',
        ],
        faq: [
          {
            q: 'Une étagère peut-elle être impossible ?',
            a: 'Non. Chacune est générée à rebours depuis une étagère finie : une solution existe toujours.',
          },
          {
            q: "Y a-t-il des vies ou de l'énergie ?",
            a: 'Non. Jouez autant que vous voulez et recommencez une étagère aussi souvent que nécessaire.',
          },
          {
            q: 'Faut-il une connexion Internet ?',
            a: "Non. Tout se passe sur l'appareil et rien n'est téléversé.",
          },
        ],
        seoSummary:
          'Tidy Tiles est un casse-tête de tri de couleurs gratuit dans une vieille pharmacie. Chaque étagère a une solution garantie, sans chrono ni vies, et fonctionne hors ligne.',
        screenshots: [
          {
            src: '/images/games/tidy-tiles/01-home.webp',
            alt: "L'enseigne de Tidy Tiles avec trois flacons de teinture triés",
          },
          {
            src: '/images/games/tidy-tiles/02-shelf-pour.webp',
            alt: 'Une étagère de neuf flacons en cours de tri, un flacon soulevé',
          },
          {
            src: '/images/games/tidy-tiles/03-the-shelf.webp',
            alt: "L'Étagère, un registre des casse-têtes scellés à la cire",
          },
          {
            src: '/images/games/tidy-tiles/04-how-to-mix.webp',
            alt: 'Comment mélanger : trois étiquettes annotées expliquant les règles',
          },
        ],
      },
      es: {
        tagline: 'Un puzle de clasificación de botica',
        category: 'Puzle de clasificación',
        sessionLength: 'Unos minutos por registro, sin reloj',
        heroBlurb:
          'Vierte tinturas de colores entre frascos de botica hasta que cada color quede solo. Cada estante se construye hacia atrás desde uno terminado, así que todos los puzles tienen solución.',
        howToPlay: [
          {
            title: 'Levanta un frasco',
            body: 'Toca un frasco para cogerlo. Tócalo otra vez para dejarlo.',
          },
          {
            title: 'Viértelo',
            body: 'Toca un segundo frasco para verter. Se mueve toda la serie de tintura igual que está arriba, hasta donde haya sitio.',
          },
          {
            title: 'Sella el registro',
            body: 'Cuando cada color ocupa un solo frasco, el registro se sella con lacre rojo y se prepara el siguiente estante.',
          },
        ],
        features: [
          'Cada nivel generado hacia atrás desde un estante resuelto: ninguno es imposible',
          'Estantes que crecen de tres tinturas a nueve',
          'Deshaz un vertido, reinicia el estante o añade un frasco vacío',
          'El modo Símbolos entintados marca cada tintura con su propio signo',
        ],
        whoFor: [
          'A quien le gustan los puzles de ordenar líquidos pero quiere un escenario con carácter',
          'Quien busca un puzle tranquilo, sin reloj ni vidas',
          'Quien se ha hartado de juegos de ordenar que reparten tableros imposibles',
        ],
        faq: [
          {
            q: '¿Puede ser imposible un estante?',
            a: 'No. Cada uno se genera hacia atrás desde un estante terminado, así que siempre existe solución.',
          },
          {
            q: '¿Hay vidas o energía?',
            a: 'No. Juega lo que quieras y reinicia un estante tantas veces como quieras.',
          },
          {
            q: '¿Necesita conexión a internet?',
            a: 'No. Todo ocurre en el dispositivo y no se sube nada.',
          },
        ],
        seoSummary:
          'Tidy Tiles es un puzle gratuito de ordenar colores ambientado en una vieja botica. Cada estante tiene solución garantizada, no hay reloj ni vidas y funciona sin conexión.',
        screenshots: [
          {
            src: '/images/games/tidy-tiles/01-home.webp',
            alt: 'El cartel de Tidy Tiles con tres frascos de tintura ordenados',
          },
          {
            src: '/images/games/tidy-tiles/02-shelf-pour.webp',
            alt: 'Un estante de nueve frascos a medio ordenar, con un frasco levantado',
          },
          {
            src: '/images/games/tidy-tiles/03-the-shelf.webp',
            alt: 'La Estantería, un registro de puzles sellados con lacre',
          },
          {
            src: '/images/games/tidy-tiles/04-how-to-mix.webp',
            alt: 'Cómo mezclar: tres etiquetas anotadas con las reglas',
          },
        ],
      },
    },
  },
  {
    slug: 'idle-bakery',
    name: 'Idle Bakery Empire',
    bundleId: 'com.awesoontechnologies.idlebakery',
    accent: '#6E1A20',
    icon: '/images/games/idle-bakery/icon.webp',
    category: 'Idle simulation',
    ageRating: '4+',
    players: 'One player',
    price: 'Free',
    sessionLength: 'Thirty second visits, earns while closed',
    tagline: 'Tap, bake, franchise, repeat',
    heroBlurb:
      'A 1920s enamel-sign bakery you run in short visits and leave running in between. Customers queue for loaves, pastries and cakes, and the shop keeps earning while the app is closed.',
    howToPlay: [
      {
        title: 'Serve the counter',
        body: 'Customers arrive asking for a loaf, a pastry or a cake, each with a patience bar. Press the matching station to bake it.',
      },
      {
        title: 'Bank the tips',
        body: 'Serve quickly for a tip and a growing streak. Let someone wait too long and they walk out, and the streak resets.',
      },
      {
        title: 'Grow the shop',
        body: 'Hire help, build better ovens, and move from a market stall to a Grand Patisserie. Then franchise for a permanent multiplier.',
      },
    ],
    features: [
      'Customer orders with tips and a streak multiplier, not just a number going up',
      'Six kinds of help, five oven tiers and three storefront upgrades',
      'Earns at half rate for up to eight hours while closed, with a Welcome Back summary',
      'The Books keeps a lifetime ledger, including orders served and your best streak',
    ],
    whoFor: [
      'Idle and clicker players who want something to do when they check in',
      'Anyone who likes watching numbers compound over a week',
      'People who want a tycoon game with no energy timers and no paywall',
    ],
    faq: [
      {
        q: 'Does it keep earning when closed?',
        a: 'Yes, at half rate for up to eight hours. You are shown exactly what came in.',
      },
      {
        q: 'What does franchising do?',
        a: 'It restarts the shop with a permanent multiplier, so each run is faster than the last.',
      },
      {
        q: 'Are there in-app purchases?',
        a: 'No. There is nothing to buy.',
      },
    ],
    seoSummary:
      'Idle Bakery Empire is a free idle bakery tycoon with customer orders, tips and streaks, offline earnings and franchising. No in-app purchases, plays offline.',
    keywords: [
      'idle game',
      'bakery tycoon',
      'clicker game',
      'offline earnings',
      'incremental game',
    ],
    screenshots: [
      {
        src: '/images/games/idle-bakery/01-counter.webp',
        alt: 'The bakery counter with two cake orders waiting and three baking stations',
      },
      {
        src: '/images/games/idle-bakery/02-upgrades.webp',
        alt: 'The upgrades price board listing ovens and staff',
      },
      {
        src: '/images/games/idle-bakery/03-welcome-back.webp',
        alt: 'The Welcome Back card showing coins earned while away',
      },
      {
        src: '/images/games/idle-bakery/04-the-books.webp',
        alt: 'The Books, a lifetime ledger of coins, orders and streaks',
      },
    ],
    translations: {
      fr: {
        tagline: 'Touchez, cuisez, franchisez, recommencez',
        category: 'Simulation idle',
        sessionLength: 'Des visites de trente secondes, gagne même fermé',
        heroBlurb:
          "Une boulangerie en émail des années 1920 que l'on gère par courtes visites et qui tourne entre-temps. Les clients font la file pour des pains, des viennoiseries et des gâteaux, et la boutique continue de gagner pendant que l'application est fermée.",
        howToPlay: [
          {
            title: 'Servez le comptoir',
            body: 'Les clients arrivent pour un pain, une viennoiserie ou un gâteau, chacun avec une barre de patience. Appuyez sur le poste correspondant pour cuire.',
          },
          {
            title: 'Encaissez les pourboires',
            body: "Servez vite pour un pourboire et une série croissante. Faites trop attendre quelqu'un et il repart, la série retombe.",
          },
          {
            title: 'Agrandissez la boutique',
            body: "Embauchez, installez de meilleurs fours et passez de l'étal à la grande pâtisserie. Puis franchisez pour un multiplicateur permanent.",
          },
        ],
        features: [
          'Des commandes clients avec pourboires et multiplicateur de série, pas seulement un chiffre qui monte',
          "Six types d'aide, cinq niveaux de four et trois agrandissements de boutique",
          "Des gains à demi-tarif jusqu'à huit heures hors ligne, avec un récapitulatif au retour",
          'Les Livres tiennent le registre complet, commandes servies et meilleure série comprises',
        ],
        whoFor: [
          'Les amateurs de jeux idle qui veulent quelque chose à faire en se connectant',
          'Ceux qui aiment voir les chiffres composer sur une semaine',
          "Ceux qui veulent un jeu de gestion sans minuteur d'énergie ni mur payant",
        ],
        faq: [
          {
            q: 'La boutique gagne-t-elle pendant la fermeture ?',
            a: "Oui, à demi-tarif jusqu'à huit heures. Le montant exact vous est présenté.",
          },
          {
            q: 'À quoi sert la franchise ?',
            a: 'Elle relance la boutique avec un multiplicateur permanent : chaque partie va plus vite que la précédente.',
          },
          {
            q: 'Y a-t-il des achats intégrés ?',
            a: "Non. Il n'y a rien à acheter.",
          },
        ],
        seoSummary:
          'Idle Bakery Empire est un jeu de gestion idle gratuit avec commandes clients, pourboires, séries, gains hors ligne et franchises. Sans achats intégrés, fonctionne hors ligne.',
        screenshots: [
          {
            src: '/images/games/idle-bakery/01-counter.webp',
            alt: 'Le comptoir avec deux commandes de gâteau en attente et trois postes de cuisson',
          },
          {
            src: '/images/games/idle-bakery/02-upgrades.webp',
            alt: 'Le tableau des prix listant fours et personnel',
          },
          {
            src: '/images/games/idle-bakery/03-welcome-back.webp',
            alt: "La carte Bon retour indiquant les pièces gagnées pendant l'absence",
          },
          {
            src: '/images/games/idle-bakery/04-the-books.webp',
            alt: 'Les Livres, registre des pièces, des commandes et des séries',
          },
        ],
      },
      es: {
        tagline: 'Toca, hornea, franquicia, repite',
        category: 'Simulación idle',
        sessionLength: 'Visitas de treinta segundos, gana incluso cerrado',
        heroBlurb:
          'Una panadería de los años veinte con rótulos esmaltados que se lleva en visitas cortas y sigue funcionando entre ellas. Los clientes hacen cola por panes, bollos y pasteles, y la tienda sigue ganando con la aplicación cerrada.',
        howToPlay: [
          {
            title: 'Atiende el mostrador',
            body: 'Llegan clientes pidiendo pan, bollo o pastel, cada uno con una barra de paciencia. Pulsa la estación correspondiente para hornear.',
          },
          {
            title: 'Cobra las propinas',
            body: 'Atiende rápido para conseguir propina y una racha creciente. Si alguien espera demasiado, se va y la racha se pierde.',
          },
          {
            title: 'Haz crecer la tienda',
            body: 'Contrata ayuda, instala mejores hornos y pasa del puesto de mercado a una gran pastelería. Después franquicia para un multiplicador permanente.',
          },
        ],
        features: [
          'Pedidos de clientes con propinas y multiplicador de racha, no solo un número que sube',
          'Seis tipos de ayuda, cinco niveles de horno y tres mejoras de local',
          'Gana a mitad de ritmo hasta ocho horas sin conexión, con un resumen al volver',
          'Los Libros guardan el registro completo, incluidos pedidos servidos y mejor racha',
        ],
        whoFor: [
          'Aficionados a los juegos idle que quieren algo que hacer al entrar',
          'Quien disfruta viendo los números componerse a lo largo de una semana',
          'Quien quiere un juego de gestión sin temporizadores de energía ni muros de pago',
        ],
        faq: [
          {
            q: '¿Sigue ganando con la aplicación cerrada?',
            a: 'Sí, a mitad de ritmo hasta ocho horas. Se te muestra exactamente lo que entró.',
          },
          {
            q: '¿Para qué sirve franquiciar?',
            a: 'Reinicia la tienda con un multiplicador permanente, así cada partida va más rápido que la anterior.',
          },
          {
            q: '¿Hay compras dentro de la aplicación?',
            a: 'No. No hay nada que comprar.',
          },
        ],
        seoSummary:
          'Idle Bakery Empire es un juego idle gratuito de panadería con pedidos de clientes, propinas, rachas, ganancias sin conexión y franquicias. Sin compras integradas y sin conexión.',
        screenshots: [
          {
            src: '/images/games/idle-bakery/01-counter.webp',
            alt: 'El mostrador con dos pedidos de pastel esperando y tres estaciones de horneado',
          },
          {
            src: '/images/games/idle-bakery/02-upgrades.webp',
            alt: 'El tablón de precios con hornos y personal',
          },
          {
            src: '/images/games/idle-bakery/03-welcome-back.webp',
            alt: 'La tarjeta de Bienvenido de nuevo con las monedas ganadas durante la ausencia',
          },
          {
            src: '/images/games/idle-bakery/04-the-books.webp',
            alt: 'Los Libros, registro de monedas, pedidos y rachas',
          },
        ],
      },
    },
  },
  {
    slug: 'trivia-blitz',
    name: 'Quick Trivia Blitz',
    bundleId: 'com.awesoontechnologies.triviablitz',
    accent: '#B08A3E',
    icon: '/images/games/trivia-blitz/icon.webp',
    category: 'Trivia',
    ageRating: '4+',
    players: 'One player',
    price: 'Free',
    sessionLength: 'One minute a round',
    tagline: 'Sixty seconds, six categories',
    heroBlurb:
      'A pub quiz on a chalkboard, sixty seconds at a time. Answer as many questions as you can before the bell, with a multiplier that climbs while you keep getting them right.',
    howToPlay: [
      {
        title: 'Pick a category',
        body: 'Six categories plus a Mixed Bag. One is the Category of the Day and pays a quarter more.',
      },
      {
        title: 'Answer against the clock',
        body: 'Four beer mats, one right answer. A wrong tap costs three seconds off a sixty second clock.',
      },
      {
        title: 'Build the chain',
        body: 'Right answers in a row raise your multiplier, up to five times. Quick answers earn a bonus on top.',
      },
    ],
    features: [
      '360 questions across General Knowledge, History, Geography, Science & Nature, Sport, and Screen & Song',
      'Questions you have not seen come up first',
      'A daily streak, with one chance to revive it if it breaks',
      'Your best score kept for every category',
    ],
    whoFor: [
      'Pub quiz regulars and anyone who shouts answers at the television',
      'Players with exactly one minute free',
      'People who want general knowledge, not obscure trivia about one franchise',
    ],
    faq: [
      {
        q: 'How many questions are there?',
        a: '360, sixty in each of six categories, all written for this game.',
      },
      {
        q: 'Is it multiplayer?',
        a: 'No. You play against the clock and your own best scores.',
      },
      {
        q: 'Does it need a connection?',
        a: 'No. The whole question bank ships inside the app.',
      },
    ],
    seoSummary:
      'Quick Trivia Blitz is a free sixty second pub quiz with 360 questions across six categories, a daily category and a daily streak. No account, plays offline.',
    keywords: ['trivia game', 'pub quiz', 'general knowledge', 'quiz game', 'timed quiz'],
    screenshots: [
      {
        src: '/images/games/trivia-blitz/01-home.webp',
        alt: 'The Quick Trivia Blitz chalkboard home screen',
      },
      {
        src: '/images/games/trivia-blitz/02-round.webp',
        alt: 'A question with four beer mat answers and the clock running',
      },
      {
        src: '/images/games/trivia-blitz/03-result.webp',
        alt: 'A result card showing score, correct answers and the longest chain',
      },
      {
        src: '/images/games/trivia-blitz/04-categories.webp',
        alt: 'The category list with the Category of the Day marked',
      },
    ],
    translations: {
      fr: {
        tagline: 'Soixante secondes, six catégories',
        category: 'Quiz',
        sessionLength: 'Une minute par manche',
        heroBlurb:
          'Un quiz de pub sur ardoise, soixante secondes à la fois. Répondez à un maximum de questions avant la cloche, avec un multiplicateur qui grimpe tant que vous enchaînez les bonnes réponses.',
        howToPlay: [
          {
            title: 'Choisissez une catégorie',
            body: "Six catégories et un panier mixte. L'une est la catégorie du jour et rapporte un quart de plus.",
          },
          {
            title: 'Répondez contre la montre',
            body: 'Quatre sous-bocks, une seule bonne réponse. Une erreur coûte trois secondes sur une horloge de soixante.',
          },
          {
            title: 'Enchaînez',
            body: "Les bonnes réponses consécutives font monter le multiplicateur, jusqu'à cinq fois. Les réponses rapides ajoutent un bonus.",
          },
        ],
        features: [
          '360 questions en Culture générale, Histoire, Géographie, Sciences et nature, Sport, et Écran et chanson',
          'Les questions jamais vues passent en premier',
          'Une série quotidienne, avec une chance de la ranimer si elle se rompt',
          'Votre meilleur score conservé pour chaque catégorie',
        ],
        whoFor: [
          'Les habitués des quiz de pub et ceux qui crient les réponses devant la télé',
          'Les joueurs qui ont exactement une minute',
          'Ceux qui veulent de la culture générale, pas des détails obscurs sur une seule franchise',
        ],
        faq: [
          {
            q: 'Combien y a-t-il de questions ?',
            a: '360, soixante dans chacune des six catégories, toutes écrites pour ce jeu.',
          },
          {
            q: 'Est-ce multijoueur ?',
            a: "Non. Vous jouez contre l'horloge et contre vos propres records.",
          },
          {
            q: 'Faut-il une connexion ?',
            a: "Non. Toute la banque de questions est dans l'application.",
          },
        ],
        seoSummary:
          'Quick Trivia Blitz est un quiz de pub gratuit de soixante secondes : 360 questions, six catégories, une catégorie du jour et une série quotidienne. Sans compte, hors ligne.',
        screenshots: [
          {
            src: '/images/games/trivia-blitz/01-home.webp',
            alt: "L'écran d'accueil sur ardoise de Quick Trivia Blitz",
          },
          {
            src: '/images/games/trivia-blitz/02-round.webp',
            alt: "Une question avec quatre sous-bocks et l'horloge qui tourne",
          },
          {
            src: '/images/games/trivia-blitz/03-result.webp',
            alt: 'Une carte de résultat : score, bonnes réponses et plus longue série',
          },
          {
            src: '/images/games/trivia-blitz/04-categories.webp',
            alt: 'La liste des catégories avec celle du jour mise en avant',
          },
        ],
      },
      es: {
        tagline: 'Sesenta segundos, seis categorías',
        category: 'Preguntas y respuestas',
        sessionLength: 'Un minuto por ronda',
        heroBlurb:
          'Un concurso de bar sobre pizarra, de sesenta segundos. Responde a cuantas preguntas puedas antes de la campana, con un multiplicador que sube mientras sigas acertando.',
        howToPlay: [
          {
            title: 'Elige una categoría',
            body: 'Seis categorías y una mezcla. Una es la categoría del día y paga una cuarta parte más.',
          },
          {
            title: 'Responde contra el reloj',
            body: 'Cuatro posavasos, una sola respuesta correcta. Un fallo cuesta tres segundos de un reloj de sesenta.',
          },
          {
            title: 'Encadena aciertos',
            body: 'Los aciertos seguidos suben el multiplicador hasta cinco veces. Responder rápido añade un extra.',
          },
        ],
        features: [
          '360 preguntas de Cultura general, Historia, Geografía, Ciencia y naturaleza, Deporte, y Pantalla y canción',
          'Las preguntas que no has visto salen primero',
          'Una racha diaria, con una oportunidad de recuperarla si se rompe',
          'Tu mejor puntuación guardada en cada categoría',
        ],
        whoFor: [
          'Habituales de los concursos de bar y de gritarle respuestas a la tele',
          'Jugadores que tienen exactamente un minuto',
          'Quien quiere cultura general y no datos oscuros de una sola saga',
        ],
        faq: [
          {
            q: '¿Cuántas preguntas hay?',
            a: '360, sesenta en cada una de las seis categorías, escritas para este juego.',
          },
          {
            q: '¿Es multijugador?',
            a: 'No. Juegas contra el reloj y contra tus propios récords.',
          },
          {
            q: '¿Necesita conexión?',
            a: 'No. Todo el banco de preguntas viene dentro de la aplicación.',
          },
        ],
        seoSummary:
          'Quick Trivia Blitz es un concurso gratuito de sesenta segundos con 360 preguntas, seis categorías, una categoría del día y una racha diaria. Sin cuenta y sin conexión.',
        screenshots: [
          {
            src: '/images/games/trivia-blitz/01-home.webp',
            alt: 'La pantalla de inicio en pizarra de Quick Trivia Blitz',
          },
          {
            src: '/images/games/trivia-blitz/02-round.webp',
            alt: 'Una pregunta con cuatro posavasos y el reloj corriendo',
          },
          {
            src: '/images/games/trivia-blitz/03-result.webp',
            alt: 'Una tarjeta de resultado con puntuación, aciertos y racha más larga',
          },
          {
            src: '/images/games/trivia-blitz/04-categories.webp',
            alt: 'La lista de categorías con la del día destacada',
          },
        ],
      },
    },
  },
  {
    slug: 'dodge-rush',
    name: 'Dodge Rush',
    bundleId: 'com.awesoontechnologies.dodgerush',
    accent: '#14439B',
    icon: '/images/games/dodge-rush/icon.webp',
    category: 'Arcade racing',
    ageRating: '4+',
    players: 'One player',
    price: 'Free',
    sessionLength: 'Fifteen to forty five seconds a run',
    tagline: 'Three lanes, one life',
    heroBlurb:
      'A three lane dodger with one life and a road that keeps speeding up until it beats you. Swipe between lanes, collect coins, and spend them on motorsport liveries.',
    howToPlay: [
      {
        title: 'Swipe to change lane',
        body: 'Swipe left or right anywhere on screen. The car moves one lane at a time.',
      },
      {
        title: 'Read the gaps',
        body: 'Obstacles block one or two lanes, never all three. There is always a way through if you spot it early.',
      },
      {
        title: 'Bank your coins',
        body: 'Coins sit in the open lanes. Spend them in the Garage on six liveries.',
      },
    ],
    features: [
      'Speed that climbs every second until the run ends',
      'One collision ends it, and one revive per run is offered',
      'Six liveries, cosmetic only, so nothing you buy makes the car faster',
      'Swipe sensitivity you can tune to your thumb',
    ],
    whoFor: [
      'Players who want a high score to beat on a commute',
      'Anyone who likes reflex games with one clear rule',
      'People tired of runners that sell power-ups',
    ],
    faq: [
      {
        q: 'Can I buy my way to a better car?',
        a: 'No. Every livery is cosmetic and every car has the same handling and hitbox.',
      },
      {
        q: 'How long is a run?',
        a: 'Usually fifteen to forty five seconds. The speed ramp makes sure of it.',
      },
      {
        q: 'Is there a revive?',
        a: 'One per run, and only if you want it.',
      },
    ],
    seoSummary:
      'Dodge Rush is a free three lane dodging game with one life, climbing speed and six motorsport liveries earned with coins. Cosmetics only, plays offline.',
    keywords: ['lane dodge game', 'endless runner', 'reflex game', 'arcade racing', 'high score'],
    screenshots: [
      {
        src: '/images/games/dodge-rush/01-home.webp',
        alt: 'The Dodge Rush home screen with best distance and the current livery',
      },
      {
        src: '/images/games/dodge-rush/02-run.webp',
        alt: 'A run in progress between obstacles on the asphalt',
      },
      {
        src: '/images/games/dodge-rush/03-game-over.webp',
        alt: 'The game over card showing distance, coins and top speed',
      },
      {
        src: '/images/games/dodge-rush/04-garage.webp',
        alt: 'The Garage with six motorsport liveries',
      },
    ],
    translations: {
      fr: {
        tagline: 'Trois voies, une seule vie',
        category: 'Course arcade',
        sessionLength: 'De quinze à quarante-cinq secondes par partie',
        heroBlurb:
          "Un jeu d'esquive à trois voies, une seule vie, et une route qui accélère jusqu'à vous avoir. Changez de voie, ramassez des pièces et dépensez-les en livrées de compétition.",
        howToPlay: [
          {
            title: 'Balayez pour changer de voie',
            body: "Balayez à gauche ou à droite n'importe où à l'écran. La voiture se déplace d'une voie à la fois.",
          },
          {
            title: 'Lisez les trouées',
            body: 'Les obstacles bloquent une ou deux voies, jamais les trois. Il y a toujours un passage si vous le voyez tôt.',
          },
          {
            title: 'Encaissez vos pièces',
            body: 'Les pièces se trouvent dans les voies libres. Dépensez-les au garage pour six livrées.',
          },
        ],
        features: [
          "Une vitesse qui grimpe chaque seconde jusqu'à la fin de la partie",
          'Une seule collision met fin à la partie, avec une réanimation offerte par partie',
          'Six livrées purement cosmétiques : rien de ce que vous obtenez ne rend la voiture plus rapide',
          'Une sensibilité de balayage réglable',
        ],
        whoFor: [
          'Les joueurs qui veulent un record à battre dans les transports',
          'Les amateurs de jeux de réflexe avec une seule règle claire',
          'Ceux qui en ont assez des runners qui vendent des bonus',
        ],
        faq: [
          {
            q: 'Puis-je acheter une meilleure voiture ?',
            a: 'Non. Chaque livrée est cosmétique et toutes les voitures ont la même conduite et la même hitbox.',
          },
          {
            q: 'Combien de temps dure une partie ?',
            a: "En général de quinze à quarante-cinq secondes. La montée en vitesse s'en charge.",
          },
          {
            q: 'Y a-t-il une réanimation ?',
            a: 'Une par partie, et seulement si vous la voulez.',
          },
        ],
        seoSummary:
          "Dodge Rush est un jeu d'esquive gratuit à trois voies : une seule vie, une vitesse croissante et six livrées de compétition achetées avec des pièces. Cosmétique seulement, hors ligne.",
        screenshots: [
          {
            src: '/images/games/dodge-rush/01-home.webp',
            alt: "L'écran d'accueil de Dodge Rush avec la meilleure distance et la livrée choisie",
          },
          {
            src: '/images/games/dodge-rush/02-run.webp',
            alt: "Une partie en cours entre les obstacles sur l'asphalte",
          },
          {
            src: '/images/games/dodge-rush/03-game-over.webp',
            alt: 'La carte de fin de partie : distance, pièces et vitesse de pointe',
          },
          {
            src: '/images/games/dodge-rush/04-garage.webp',
            alt: 'Le garage et ses six livrées de compétition',
          },
        ],
      },
      es: {
        tagline: 'Tres carriles, una vida',
        category: 'Carreras arcade',
        sessionLength: 'De quince a cuarenta y cinco segundos por partida',
        heroBlurb:
          'Un juego de esquivar de tres carriles con una sola vida y una carretera que acelera hasta ganarte. Cambia de carril, recoge monedas y gástalas en decoraciones de competición.',
        howToPlay: [
          {
            title: 'Desliza para cambiar de carril',
            body: 'Desliza a izquierda o derecha en cualquier parte de la pantalla. El coche se mueve un carril cada vez.',
          },
          {
            title: 'Lee los huecos',
            body: 'Los obstáculos bloquean uno o dos carriles, nunca los tres. Siempre hay paso si lo ves a tiempo.',
          },
          {
            title: 'Guarda tus monedas',
            body: 'Las monedas están en los carriles libres. Gástalas en el garaje en seis decoraciones.',
          },
        ],
        features: [
          'Una velocidad que sube cada segundo hasta que la partida acaba',
          'Un solo choque termina la partida, con una reanimación por partida',
          'Seis decoraciones puramente estéticas: nada de lo que consigues acelera el coche',
          'Sensibilidad del deslizamiento ajustable',
        ],
        whoFor: [
          'Quien quiere un récord que batir en el transporte',
          'Aficionados a los juegos de reflejos con una regla clara',
          'Quien está cansado de los runners que venden potenciadores',
        ],
        faq: [
          {
            q: '¿Puedo comprar un coche mejor?',
            a: 'No. Todas las decoraciones son estéticas y todos los coches tienen el mismo manejo y la misma caja de colisión.',
          },
          {
            q: '¿Cuánto dura una partida?',
            a: 'Normalmente de quince a cuarenta y cinco segundos. La subida de velocidad se encarga.',
          },
          {
            q: '¿Hay reanimación?',
            a: 'Una por partida, y solo si la quieres.',
          },
        ],
        seoSummary:
          'Dodge Rush es un juego gratuito de esquivar en tres carriles con una sola vida, velocidad creciente y seis decoraciones de competición compradas con monedas. Solo estética, sin conexión.',
        screenshots: [
          {
            src: '/images/games/dodge-rush/01-home.webp',
            alt: 'La pantalla de inicio de Dodge Rush con la mejor distancia y la decoración elegida',
          },
          {
            src: '/images/games/dodge-rush/02-run.webp',
            alt: 'Una partida en curso entre obstáculos sobre el asfalto',
          },
          {
            src: '/images/games/dodge-rush/03-game-over.webp',
            alt: 'La tarjeta de fin de partida con distancia, monedas y velocidad máxima',
          },
          {
            src: '/images/games/dodge-rush/04-garage.webp',
            alt: 'El garaje con seis decoraciones de competición',
          },
        ],
      },
    },
  },
  {
    slug: 'word-chain-dash',
    name: 'Word Chain Dash',
    bundleId: 'com.awesoontechnologies.wordchaindash',
    accent: '#C1272D',
    icon: '/images/games/word-chain-dash/icon.webp',
    category: 'Word game',
    ageRating: '4+',
    players: 'One player',
    price: 'Free',
    sessionLength: 'Under a minute a run',
    tagline: 'A daily tap-to-spell chain',
    heroBlurb:
      'A timed word chain set in a letterpress print shop. Every word starts with the letter the last one ended on, and every word you set buys time for the next.',
    howToPlay: [
      {
        title: 'Start from the seed word',
        body: 'Each day gives one seed word, the same for everyone. Your first word starts with its last letter.',
      },
      {
        title: 'Spell with wooden type',
        body: 'Tap letters from the case to build a word. No keyboard, one hand, tiles are reusable.',
      },
      {
        title: 'Keep the clock alive',
        body: 'Longer words score more and buy more time. One misprint is forgiven; the second ends the run.',
      },
    ],
    features: [
      'One shared seed word every day, and one attempt at it',
      'Free Play with unlimited runs from random seed words',
      'A Proof Sheet of your chain that you can share',
      'The Ledger keeps your streak, best score, best chain and recent runs',
    ],
    whoFor: [
      'Daily word puzzle players who want something quicker than a crossword',
      'Anyone who plays one-handed on a bus',
      'People who like comparing the same daily puzzle with friends',
    ],
    faq: [
      {
        q: 'Is the daily word the same for everyone?',
        a: 'Yes. Every player gets the same seed word each day, and one attempt at it.',
      },
      {
        q: 'Can I keep playing after the daily?',
        a: 'Yes. Free Play gives unlimited runs from random seed words.',
      },
      {
        q: 'Is there a keyboard?',
        a: 'No. You tap wooden type blocks, which is what makes it one-handed.',
      },
    ],
    seoSummary:
      'Word Chain Dash is a free daily word game where each word starts where the last ended. Tap-to-spell with no keyboard, one shared daily word, and unlimited free play.',
    keywords: [
      'word game',
      'daily word puzzle',
      'word chain',
      'spelling game',
      'offline word game',
    ],
    screenshots: [
      {
        src: '/images/games/word-chain-dash/01-press-room.webp',
        alt: "The Press Room with today's seed word set in wooden type",
      },
      {
        src: '/images/games/word-chain-dash/02-composing.webp',
        alt: 'A word being composed from wooden letter tiles',
      },
      {
        src: '/images/games/word-chain-dash/03-proof-sheet.webp',
        alt: 'The Proof Sheet result card listing the chain and score',
      },
      {
        src: '/images/games/word-chain-dash/04-how-it-works.webp',
        alt: 'How It Works, four numbered rules with a worked example',
      },
    ],
    translations: {
      fr: {
        tagline: 'Une chaîne de mots quotidienne',
        category: 'Jeu de mots',
        sessionLength: "Moins d'une minute par partie",
        heroBlurb:
          "Une chaîne de mots chronométrée dans un atelier de typographie. Chaque mot commence par la lettre où le précédent s'est arrêté, et chaque mot posé achète du temps pour le suivant.",
        howToPlay: [
          {
            title: 'Partez du mot du jour',
            body: 'Chaque jour fournit un mot de départ, le même pour tout le monde. Votre premier mot commence par sa dernière lettre.',
          },
          {
            title: 'Composez en caractères de bois',
            body: 'Touchez les lettres de la casse pour former un mot. Pas de clavier, une seule main, et les caractères sont réutilisables.',
          },
          {
            title: "Gardez l'horloge en vie",
            body: 'Les mots longs rapportent plus et achètent plus de temps. Une coquille est pardonnée, la seconde met fin à la partie.',
          },
        ],
        features: [
          'Un mot de départ partagé chaque jour, et une seule tentative',
          'Le mode libre, avec des parties illimitées à partir de mots tirés au hasard',
          'Une épreuve imprimée de votre chaîne, que vous pouvez partager',
          'Le registre garde votre série, votre meilleur score, votre plus longue chaîne et vos parties récentes',
        ],
        whoFor: [
          "Les amateurs de jeu de mots quotidien qui veulent plus court qu'une grille",
          "Ceux qui jouent d'une seule main dans le bus",
          'Ceux qui aiment comparer la même énigme quotidienne entre amis',
        ],
        faq: [
          {
            q: 'Le mot du jour est-il le même pour tous ?',
            a: 'Oui. Chaque joueur reçoit le même mot de départ chaque jour, et une seule tentative.',
          },
          {
            q: 'Puis-je continuer après la partie du jour ?',
            a: 'Oui. Le mode libre offre des parties illimitées à partir de mots tirés au hasard.',
          },
          {
            q: 'Y a-t-il un clavier ?',
            a: "Non. Vous touchez des caractères en bois, et c'est ce qui rend le jeu jouable d'une main.",
          },
        ],
        seoSummary:
          "Word Chain Dash est un jeu de mots quotidien gratuit où chaque mot commence là où le précédent s'arrête. Composition tactile sans clavier, un mot partagé chaque jour et un mode libre illimité.",
        screenshots: [
          {
            src: '/images/games/word-chain-dash/01-press-room.webp',
            alt: "L'atelier avec le mot du jour composé en caractères de bois",
          },
          {
            src: '/images/games/word-chain-dash/02-composing.webp',
            alt: 'Un mot en cours de composition à partir des caractères',
          },
          {
            src: '/images/games/word-chain-dash/03-proof-sheet.webp',
            alt: "L'épreuve imprimée : la chaîne et le score",
          },
          {
            src: '/images/games/word-chain-dash/04-how-it-works.webp',
            alt: 'Comment ça marche : quatre règles numérotées et un exemple',
          },
        ],
      },
      es: {
        tagline: 'Una cadena de palabras diaria',
        category: 'Juego de palabras',
        sessionLength: 'Menos de un minuto por partida',
        heroBlurb:
          'Una cadena de palabras contrarreloj en una imprenta de tipos. Cada palabra empieza por la letra en la que acabó la anterior, y cada palabra que compones compra tiempo para la siguiente.',
        howToPlay: [
          {
            title: 'Parte de la palabra del día',
            body: 'Cada día hay una palabra inicial, la misma para todo el mundo. Tu primera palabra empieza por su última letra.',
          },
          {
            title: 'Compón con tipos de madera',
            body: 'Toca letras de la caja para formar una palabra. Sin teclado, con una mano, y los tipos se reutilizan.',
          },
          {
            title: 'Mantén vivo el reloj',
            body: 'Las palabras largas puntúan más y dan más tiempo. Se perdona una errata; la segunda termina la partida.',
          },
        ],
        features: [
          'Una palabra inicial compartida cada día, y un único intento',
          'Juego libre con partidas ilimitadas a partir de palabras al azar',
          'Una prueba de imprenta de tu cadena que puedes compartir',
          'El registro guarda tu racha, tu mejor puntuación, tu cadena más larga y tus partidas recientes',
        ],
        whoFor: [
          'Aficionados al puzle diario de palabras que quieren algo más corto que un crucigrama',
          'Quien juega con una sola mano en el autobús',
          'Quien disfruta comparando el mismo reto diario con sus amigos',
        ],
        faq: [
          {
            q: '¿La palabra del día es igual para todos?',
            a: 'Sí. Cada jugador recibe la misma palabra inicial cada día, y un único intento.',
          },
          {
            q: '¿Puedo seguir jugando después del reto diario?',
            a: 'Sí. El juego libre ofrece partidas ilimitadas con palabras al azar.',
          },
          {
            q: '¿Hay teclado?',
            a: 'No. Tocas tipos de madera, y por eso se juega con una mano.',
          },
        ],
        seoSummary:
          'Word Chain Dash es un juego de palabras diario y gratuito donde cada palabra empieza donde acabó la anterior. Se escribe tocando tipos, sin teclado, con una palabra compartida al día y juego libre ilimitado.',
        screenshots: [
          {
            src: '/images/games/word-chain-dash/01-press-room.webp',
            alt: 'La imprenta con la palabra del día compuesta en tipos de madera',
          },
          {
            src: '/images/games/word-chain-dash/02-composing.webp',
            alt: 'Una palabra componiéndose a partir de los tipos',
          },
          {
            src: '/images/games/word-chain-dash/03-proof-sheet.webp',
            alt: 'La prueba de imprenta con la cadena y la puntuación',
          },
          {
            src: '/images/games/word-chain-dash/04-how-it-works.webp',
            alt: 'Cómo funciona: cuatro reglas numeradas y un ejemplo',
          },
        ],
      },
    },
  },
  {
    slug: 'color-match-frenzy',
    name: 'Color Match Frenzy',
    bundleId: 'com.awesoontechnologies.colormatchfrenzy',
    accent: '#0B5FD1',
    icon: '/images/games/color-match-frenzy/icon.webp',
    category: 'Focus and reaction',
    ageRating: '4+',
    players: 'One player',
    price: 'Free',
    sessionLength: 'Forty five seconds a test',
    tagline: 'Beat your own reaction time',
    heroBlurb:
      'The Stroop test as a short game. A colour word appears in the wrong ink. Read the word, ignore the ink, and tap the matching lens before the window closes.',
    howToPlay: [
      {
        title: 'Read the word',
        body: 'The word names one colour and is printed in another. The word is what counts.',
      },
      {
        title: 'Tap the lens',
        body: 'Six trial lenses sit below. Tap the one matching the word, not the ink.',
      },
      {
        title: 'Beat the window',
        body: 'The window starts at two seconds and narrows as you go. One wrong lens ends the run.',
      },
    ],
    features: [
      'Every run records your median reaction time and an interference score',
      'An Exam Record of your last fifty runs with a trend line',
      'A warm-up mode that is never recorded',
      'High contrast mode and four card stock themes',
    ],
    whoFor: [
      'Anyone curious how their focus shifts with sleep, coffee and time of day',
      'Players who like a number that moves for real reasons',
      'People who want a short test rather than a long game',
    ],
    faq: [
      {
        q: 'What is the interference score?',
        a: 'How much slower you answer when the word and the ink disagree. It is the cost of overriding what you see.',
      },
      {
        q: 'Is this a medical or clinical test?',
        a: 'No. It is a self-comparison focus game and nothing more. It is not a medical, clinical or diagnostic tool.',
      },
      {
        q: 'Am I compared with other people?',
        a: 'Never. Every figure is from your own runs, and nothing leaves your device.',
      },
    ],
    seoSummary:
      'Color Match Frenzy is a free Stroop-style focus game. Each 45 second run records your median reaction time and interference score, compared only with your own history.',
    keywords: ['reaction time game', 'stroop test', 'focus game', 'attention game', 'reflex test'],
    screenshots: [
      {
        src: '/images/games/color-match-frenzy/01-home.webp',
        alt: 'The Color Match Frenzy title screen set like an eye chart',
      },
      {
        src: '/images/games/color-match-frenzy/02-test.webp',
        alt: 'A prompt where the word and the ink disagree, with six lens discs',
      },
      {
        src: '/images/games/color-match-frenzy/03-record.webp',
        alt: 'The Exam Record with a trend line across recent runs',
      },
      {
        src: '/images/games/color-match-frenzy/04-how-the-test-works.webp',
        alt: 'How the test works, with a worked example of the interference score',
      },
    ],
    translations: {
      fr: {
        tagline: 'Battez votre propre temps de réaction',
        category: 'Concentration et réflexes',
        sessionLength: 'Quarante-cinq secondes par test',
        heroBlurb:
          "Le test de Stroop sous forme de jeu court. Un nom de couleur apparaît dans la mauvaise encre. Lisez le mot, ignorez l'encre et touchez la lentille correspondante avant la fin du délai.",
        howToPlay: [
          {
            title: 'Lisez le mot',
            body: "Le mot nomme une couleur et il est imprimé dans une autre. C'est le mot qui compte.",
          },
          {
            title: 'Touchez la lentille',
            body: "Six lentilles d'essai se trouvent en bas. Touchez celle qui correspond au mot, pas à l'encre.",
          },
          {
            title: 'Devancez le délai',
            body: 'Le délai part de deux secondes et se resserre. Une seule erreur met fin à la partie.',
          },
        ],
        features: [
          "Chaque partie enregistre votre temps de réaction médian et un score d'interférence",
          "Un dossier d'examen de vos cinquante dernières parties, avec une courbe de tendance",
          "Un mode d'échauffement qui n'est jamais enregistré",
          'Un mode contraste élevé et quatre habillages de papier',
        ],
        whoFor: [
          "Ceux qui veulent voir comment leur concentration varie selon le sommeil, le café et l'heure",
          'Les joueurs qui aiment un chiffre qui bouge pour de vraies raisons',
          'Ceux qui préfèrent un test court à un long jeu',
        ],
        faq: [
          {
            q: "Qu'est-ce que le score d'interférence ?",
            a: "L'écart de vitesse quand le mot et l'encre se contredisent. C'est le coût de passer outre ce que vous voyez.",
          },
          {
            q: 'Est-ce un test médical ou clinique ?',
            a: "Non. C'est un jeu de concentration à comparaison personnelle, rien de plus. Ce n'est ni un outil médical, ni clinique, ni diagnostique.",
          },
          {
            q: "Suis-je comparé à d'autres personnes ?",
            a: 'Jamais. Chaque chiffre vient de vos propres parties et rien ne quitte votre appareil.',
          },
        ],
        seoSummary:
          "Color Match Frenzy est un jeu de concentration gratuit inspiré du test de Stroop. Chaque partie de 45 secondes enregistre votre temps de réaction médian et votre score d'interférence, comparés à votre seul historique.",
        screenshots: [
          {
            src: '/images/games/color-match-frenzy/01-home.webp',
            alt: "L'écran titre de Color Match Frenzy composé comme une échelle d'acuité",
          },
          {
            src: '/images/games/color-match-frenzy/02-test.webp',
            alt: "Une consigne où le mot et l'encre se contredisent, avec six lentilles",
          },
          {
            src: '/images/games/color-match-frenzy/03-record.webp',
            alt: "Le dossier d'examen et sa courbe de tendance",
          },
          {
            src: '/images/games/color-match-frenzy/04-how-the-test-works.webp',
            alt: "Comment fonctionne le test, avec un exemple de score d'interférence",
          },
        ],
      },
      es: {
        tagline: 'Supera tu propio tiempo de reacción',
        category: 'Concentración y reflejos',
        sessionLength: 'Cuarenta y cinco segundos por prueba',
        heroBlurb:
          'El test de Stroop convertido en un juego breve. Aparece el nombre de un color impreso en otra tinta. Lee la palabra, ignora la tinta y toca la lente correspondiente antes de que se cierre la ventana.',
        howToPlay: [
          {
            title: 'Lee la palabra',
            body: 'La palabra nombra un color y está impresa en otro. Lo que cuenta es la palabra.',
          },
          {
            title: 'Toca la lente',
            body: 'Abajo hay seis lentes de prueba. Toca la que coincide con la palabra, no con la tinta.',
          },
          {
            title: 'Gana a la ventana',
            body: 'La ventana empieza en dos segundos y se estrecha. Una sola lente equivocada termina la partida.',
          },
        ],
        features: [
          'Cada partida registra tu tiempo de reacción mediano y una puntuación de interferencia',
          'Un historial de tus últimas cincuenta partidas con línea de tendencia',
          'Un modo de calentamiento que nunca se registra',
          'Modo de alto contraste y cuatro acabados de papel',
        ],
        whoFor: [
          'Quien siente curiosidad por cómo cambia su concentración con el sueño, el café y la hora',
          'Jugadores que disfrutan de un número que se mueve por razones reales',
          'Quien prefiere una prueba corta a un juego largo',
        ],
        faq: [
          {
            q: '¿Qué es la puntuación de interferencia?',
            a: 'Cuánto más lento respondes cuando la palabra y la tinta no coinciden. Es el coste de imponerte a lo que ves.',
          },
          {
            q: '¿Es una prueba médica o clínica?',
            a: 'No. Es un juego de concentración de comparación personal, nada más. No es una herramienta médica, clínica ni diagnóstica.',
          },
          {
            q: '¿Se me compara con otras personas?',
            a: 'Nunca. Cada cifra sale de tus propias partidas y nada sale de tu dispositivo.',
          },
        ],
        seoSummary:
          'Color Match Frenzy es un juego gratuito de concentración basado en el test de Stroop. Cada partida de 45 segundos registra tu tiempo de reacción mediano y tu puntuación de interferencia, comparados solo con tu historial.',
        screenshots: [
          {
            src: '/images/games/color-match-frenzy/01-home.webp',
            alt: 'La pantalla de título de Color Match Frenzy compuesta como una tabla optométrica',
          },
          {
            src: '/images/games/color-match-frenzy/02-test.webp',
            alt: 'Una consigna donde la palabra y la tinta no coinciden, con seis lentes',
          },
          {
            src: '/images/games/color-match-frenzy/03-record.webp',
            alt: 'El historial de pruebas con su línea de tendencia',
          },
          {
            src: '/images/games/color-match-frenzy/04-how-the-test-works.webp',
            alt: 'Cómo funciona la prueba, con un ejemplo de puntuación de interferencia',
          },
        ],
      },
    },
  },
  {
    slug: 'knot-untangle',
    name: 'Knot Untangle',
    bundleId: 'com.awesoontechnologies.knotuntangle',
    accent: '#3E7C7C',
    icon: '/images/games/knot-untangle/icon.webp',
    category: 'Logic puzzle',
    ageRating: '4+',
    players: 'One player',
    price: 'Free',
    sessionLength: 'A few minutes a board, no timer',
    tagline: 'Pins, threads, no crossings',
    heroBlurb:
      'Drag the pins on a corkboard until no thread crosses another. Every board is generated, always solvable, and they get properly knotty as you go.',
    howToPlay: [
      {
        title: 'Drag a pin',
        body: 'Pins move freely. The threads between them follow.',
      },
      {
        title: 'Clear the snags',
        body: 'Every crossing is marked with a red snag, and a counter shows how many are left.',
      },
      {
        title: 'Beat the par',
        body: 'Each board has a move par. Solve it at or under par for three stars.',
      },
    ],
    features: [
      'Generated boards that are always solvable and never repeat',
      'Boards grow from five pins up to eighteen',
      'A move par and three star scoring, so solved boards are worth replaying',
      'A hint that places a pin for you, and a reduce motion setting',
    ],
    whoFor: [
      'Logic puzzle players who like an untangling or planarity puzzle',
      'Anyone who wants one clear goal and no clock',
      'People who replay a puzzle to do it in fewer moves',
    ],
    faq: [
      {
        q: 'Can a board be impossible?',
        a: 'No. Each one is built so that a crossing-free arrangement exists.',
      },
      {
        q: 'What is par?',
        a: 'The number of moves a clean solution takes. Match it or beat it for three stars.',
      },
      {
        q: 'Is there a timer?',
        a: 'No. Take as long as you want.',
      },
    ],
    seoSummary:
      'Knot Untangle is a free planarity puzzle. Drag pins on a corkboard until no thread crosses, with generated boards up to eighteen pins, move par and three star scoring.',
    keywords: [
      'untangle game',
      'planarity puzzle',
      'logic puzzle',
      'brain teaser',
      'offline puzzle',
    ],
    screenshots: [
      {
        src: '/images/games/knot-untangle/01-home.webp',
        alt: 'The Knot Untangle home card showing level, stars and streak',
      },
      {
        src: '/images/games/knot-untangle/02-tangled.webp',
        alt: 'A tangled twelve pin board with red snag marks at every crossing',
      },
      {
        src: '/images/games/knot-untangle/03-untangling.webp',
        alt: 'The same board half untangled, with far fewer snags',
      },
      {
        src: '/images/games/knot-untangle/04-untangled.webp',
        alt: 'A solved board with the UNTANGLED stamp and two stars',
      },
    ],
    translations: {
      fr: {
        tagline: 'Des épingles, des fils, aucun croisement',
        category: 'Casse-tête logique',
        sessionLength: 'Quelques minutes par tableau, sans chrono',
        heroBlurb:
          "Déplacez les épingles sur un tableau de liège jusqu'à ce qu'aucun fil n'en croise un autre. Chaque tableau est généré, toujours soluble, et devient franchement emmêlé.",
        howToPlay: [
          {
            title: 'Déplacez une épingle',
            body: 'Les épingles bougent librement. Les fils suivent.',
          },
          {
            title: 'Éliminez les accrocs',
            body: "Chaque croisement est marqué d'un accroc rouge, et un compteur indique combien il en reste.",
          },
          {
            title: 'Visez le par',
            body: 'Chaque tableau a un nombre de coups de référence. Faites aussi bien ou mieux pour trois étoiles.',
          },
        ],
        features: [
          'Des tableaux générés, toujours solubles et jamais identiques',
          'Des tableaux qui passent de cinq épingles à dix-huit',
          'Un par de coups et trois étoiles, pour donner envie de refaire un tableau',
          'Un indice qui place une épingle, et un réglage de réduction des animations',
        ],
        whoFor: [
          'Les amateurs de casse-tête logique et de planarité',
          'Ceux qui veulent un objectif clair et aucune horloge',
          'Ceux qui refont une énigme pour la résoudre en moins de coups',
        ],
        faq: [
          {
            q: 'Un tableau peut-il être insoluble ?',
            a: "Non. Chacun est construit de façon qu'une disposition sans croisement existe.",
          },
          {
            q: "Qu'est-ce que le par ?",
            a: "Le nombre de coups d'une solution propre. Égalez-le ou faites mieux pour trois étoiles.",
          },
          {
            q: 'Y a-t-il un chronomètre ?',
            a: 'Non. Prenez tout votre temps.',
          },
        ],
        seoSummary:
          "Knot Untangle est un casse-tête de planarité gratuit. Déplacez des épingles sur un tableau de liège jusqu'à ce qu'aucun fil ne se croise, avec des tableaux jusqu'à dix-huit épingles et un par de coups.",
        screenshots: [
          {
            src: '/images/games/knot-untangle/01-home.webp',
            alt: "La carte d'accueil de Knot Untangle : niveau, étoiles et série",
          },
          {
            src: '/images/games/knot-untangle/02-tangled.webp',
            alt: 'Un tableau emmêlé de douze épingles, chaque croisement marqué en rouge',
          },
          {
            src: '/images/games/knot-untangle/03-untangling.webp',
            alt: "Le même tableau à moitié démêlé, avec bien moins d'accrocs",
          },
          {
            src: '/images/games/knot-untangle/04-untangled.webp',
            alt: 'Un tableau résolu avec le tampon UNTANGLED et deux étoiles',
          },
        ],
      },
      es: {
        tagline: 'Alfileres, hilos, ningún cruce',
        category: 'Puzle de lógica',
        sessionLength: 'Unos minutos por tablero, sin reloj',
        heroBlurb:
          'Arrastra los alfileres de un tablero de corcho hasta que ningún hilo cruce otro. Cada tablero es generado, siempre tiene solución y se enreda de verdad según avanzas.',
        howToPlay: [
          {
            title: 'Arrastra un alfiler',
            body: 'Los alfileres se mueven libremente. Los hilos los siguen.',
          },
          {
            title: 'Elimina los enganches',
            body: 'Cada cruce se marca con un enganche rojo, y un contador indica cuántos quedan.',
          },
          {
            title: 'Iguala el par',
            body: 'Cada tablero tiene un par de movimientos. Iguálalo o mejóralo para conseguir tres estrellas.',
          },
        ],
        features: [
          'Tableros generados, siempre con solución y nunca repetidos',
          'Tableros que crecen de cinco alfileres a dieciocho',
          'Un par de movimientos y tres estrellas, para que apetezca repetir',
          'Una pista que coloca un alfiler, y un ajuste para reducir el movimiento',
        ],
        whoFor: [
          'Aficionados a los puzles de lógica y de planaridad',
          'Quien quiere un objetivo claro y ningún reloj',
          'Quien repite un puzle para resolverlo en menos movimientos',
        ],
        faq: [
          {
            q: '¿Puede un tablero no tener solución?',
            a: 'No. Cada uno se construye de modo que exista una disposición sin cruces.',
          },
          {
            q: '¿Qué es el par?',
            a: 'Los movimientos que necesita una solución limpia. Iguálalo o mejóralo para tres estrellas.',
          },
          {
            q: '¿Hay cronómetro?',
            a: 'No. Tómate el tiempo que quieras.',
          },
        ],
        seoSummary:
          'Knot Untangle es un puzle gratuito de planaridad. Arrastra alfileres por un tablero de corcho hasta que ningún hilo se cruce, con tableros de hasta dieciocho alfileres y par de movimientos.',
        screenshots: [
          {
            src: '/images/games/knot-untangle/01-home.webp',
            alt: 'La tarjeta de inicio de Knot Untangle con nivel, estrellas y racha',
          },
          {
            src: '/images/games/knot-untangle/02-tangled.webp',
            alt: 'Un tablero enredado de doce alfileres con cada cruce marcado en rojo',
          },
          {
            src: '/images/games/knot-untangle/03-untangling.webp',
            alt: 'El mismo tablero a medio desenredar, con muchos menos enganches',
          },
          {
            src: '/images/games/knot-untangle/04-untangled.webp',
            alt: 'Un tablero resuelto con el sello UNTANGLED y dos estrellas',
          },
        ],
      },
    },
  },
  {
    slug: 'bounce-blitz',
    name: 'Bounce Blitz',
    bundleId: 'com.awesoontechnologies.bounceblitz',
    accent: '#3E7A4E',
    icon: '/images/games/bounce-blitz/icon.webp',
    category: 'Physics puzzle',
    ageRating: '4+',
    players: 'One player',
    price: 'Free',
    sessionLength: 'A minute a hole, forty holes',
    tagline: 'Retro trick-shot mini golf',
    heroBlurb:
      'Trick-shot mini golf on a painted retro course. Pull back, let go, and bank the ball off walls, pegs and bumpers into the cup in as few bounces as you can.',
    howToPlay: [
      {
        title: 'Pull back to aim',
        body: 'Touch anywhere and drag away from the tee. A preview shows your line and the power.',
      },
      {
        title: 'Let the physics work',
        body: 'Release and watch. The ball does exactly what you aimed, off every wall and peg.',
      },
      {
        title: 'Shave a bounce',
        body: 'Every hole has a par bounce count. Match or beat it for three stars, then come back to do it in one fewer.',
      },
    ],
    features: [
      'Forty hand-built holes in four packs, unlocked with stars',
      'Replays of your shots at full speed or in slow motion, which you can share',
      'An aim preview while you pull back, and a full flight path assist after a few misses',
      'Left-handed controls and a reduce motion setting',
    ],
    whoFor: [
      'Players who like trick shots and bank shots more than power meters',
      'Anyone who replays a level to do it more cleanly',
      'People who want hand-designed holes rather than endless random ones',
    ],
    faq: [
      {
        q: 'Are the holes randomly generated?',
        a: "No. All forty are hand-built, with a designer's bounce count on each one.",
      },
      {
        q: 'How do I unlock the later packs?',
        a: 'With stars earned on earlier holes.',
      },
      {
        q: 'Can I see my shot again?',
        a: 'Yes. Every shot can be replayed in slow motion and shared.',
      },
    ],
    seoSummary:
      'Bounce Blitz is a free trick-shot mini golf game with forty hand-built holes, honest physics, par bounce counts, three star scoring and slow motion replays.',
    keywords: ['mini golf game', 'trick shot', 'physics puzzle', 'bank shot', 'putting game'],
    screenshots: [
      {
        src: '/images/games/bounce-blitz/01-clubhouse.webp',
        alt: 'The Bounce Blitz clubhouse sign with stars earned',
      },
      {
        src: '/images/games/bounce-blitz/02-aim.webp',
        alt: 'Aiming a shot with the pull-back band and a dotted preview line',
      },
      {
        src: '/images/games/bounce-blitz/03-bank-shot.webp',
        alt: 'The ball in flight mid bank shot toward the cup',
      },
      {
        src: '/images/games/bounce-blitz/04-hole-complete.webp',
        alt: 'Hole Complete with three stars and the bounce count against par',
      },
      {
        src: '/images/games/bounce-blitz/05-course-map.webp',
        alt: 'The course map with four packs and a hole by hole scorecard',
      },
    ],
    translations: {
      fr: {
        tagline: "Mini-golf rétro de coups d'adresse",
        category: 'Casse-tête de physique',
        sessionLength: 'Une minute par trou, quarante trous',
        heroBlurb:
          "Du mini-golf d'adresse sur un parcours peint rétro. Tirez vers l'arrière, lâchez, et faites rebondir la balle sur les murs, les plots et les butoirs jusqu'au trou, en un minimum de rebonds.",
        howToPlay: [
          {
            title: 'Tirez pour viser',
            body: "Touchez n'importe où et éloignez le doigt du départ. Un aperçu montre la trajectoire et la puissance.",
          },
          {
            title: 'Laissez la physique agir',
            body: 'Lâchez et regardez. La balle fait exactement ce que vous avez visé, sur chaque mur et chaque plot.',
          },
          {
            title: 'Gagnez un rebond',
            body: 'Chaque trou a un nombre de rebonds de référence. Égalez-le ou faites mieux pour trois étoiles, puis revenez en retrancher un.',
          },
        ],
        features: [
          'Quarante trous conçus à la main, en quatre séries débloquées avec des étoiles',
          'Des rediffusions de vos coups en vitesse normale ou au ralenti, à partager',
          'Un aperçu de visée pendant la traction, et une trajectoire complète après quelques échecs',
          'Des commandes pour gaucher et un réglage de réduction des animations',
        ],
        whoFor: [
          "Les joueurs qui préfèrent les coups d'adresse aux jauges de puissance",
          'Ceux qui refont un niveau pour le réussir plus proprement',
          "Ceux qui veulent des trous dessinés à la main plutôt qu'une infinité de trous aléatoires",
        ],
        faq: [
          {
            q: 'Les trous sont-ils générés au hasard ?',
            a: 'Non. Les quarante sont conçus à la main, avec un nombre de rebonds défini par le concepteur.',
          },
          {
            q: 'Comment débloquer les séries suivantes ?',
            a: 'Avec les étoiles gagnées sur les trous précédents.',
          },
          {
            q: 'Puis-je revoir mon coup ?',
            a: 'Oui. Chaque coup peut être rejoué au ralenti et partagé.',
          },
        ],
        seoSummary:
          "Bounce Blitz est un jeu de mini-golf d'adresse gratuit : quarante trous conçus à la main, une physique honnête, un par de rebonds, trois étoiles et des rediffusions au ralenti.",
        screenshots: [
          {
            src: '/images/games/bounce-blitz/01-clubhouse.webp',
            alt: "L'enseigne du club-house de Bounce Blitz et les étoiles gagnées",
          },
          {
            src: '/images/games/bounce-blitz/02-aim.webp',
            alt: "Une visée avec la bande de traction et la ligne d'aperçu",
          },
          {
            src: '/images/games/bounce-blitz/03-bank-shot.webp',
            alt: 'La balle en vol pendant un rebond vers le trou',
          },
          {
            src: '/images/games/bounce-blitz/04-hole-complete.webp',
            alt: 'Trou terminé : trois étoiles et le nombre de rebonds face au par',
          },
          {
            src: '/images/games/bounce-blitz/05-course-map.webp',
            alt: 'La carte du parcours avec quatre séries et la feuille de score',
          },
        ],
      },
      es: {
        tagline: 'Minigolf retro de tiros de precisión',
        category: 'Puzle de física',
        sessionLength: 'Un minuto por hoyo, cuarenta hoyos',
        heroBlurb:
          'Minigolf de tiros de precisión sobre un campo pintado retro. Tira hacia atrás, suelta y haz rebotar la bola en muros, topes y parachoques hasta el hoyo con los menos rebotes posibles.',
        howToPlay: [
          {
            title: 'Tira hacia atrás para apuntar',
            body: 'Toca en cualquier parte y arrastra alejándote del tee. Una vista previa muestra la línea y la potencia.',
          },
          {
            title: 'Deja actuar a la física',
            body: 'Suelta y observa. La bola hace exactamente lo que apuntaste, en cada muro y cada tope.',
          },
          {
            title: 'Ahorra un rebote',
            body: 'Cada hoyo tiene un par de rebotes. Iguálalo o mejóralo para tres estrellas, y vuelve para quitarle uno más.',
          },
        ],
        features: [
          'Cuarenta hoyos hechos a mano en cuatro paquetes que se desbloquean con estrellas',
          'Repeticiones de tus tiros a velocidad normal o a cámara lenta, para compartir',
          'Vista previa de puntería al tirar, y trayectoria completa tras varios fallos',
          'Controles para zurdos y un ajuste para reducir el movimiento',
        ],
        whoFor: [
          'Quien prefiere los tiros de precisión a las barras de potencia',
          'Quien repite un nivel para hacerlo más limpio',
          'Quien quiere hoyos diseñados a mano y no infinitos hoyos aleatorios',
        ],
        faq: [
          {
            q: '¿Los hoyos son aleatorios?',
            a: 'No. Los cuarenta están hechos a mano, con un número de rebotes fijado por el diseñador.',
          },
          {
            q: '¿Cómo desbloqueo los paquetes siguientes?',
            a: 'Con las estrellas ganadas en los hoyos anteriores.',
          },
          {
            q: '¿Puedo volver a ver mi tiro?',
            a: 'Sí. Cada tiro se puede repetir a cámara lenta y compartir.',
          },
        ],
        seoSummary:
          'Bounce Blitz es un juego gratuito de minigolf de precisión con cuarenta hoyos hechos a mano, física honesta, par de rebotes, tres estrellas y repeticiones a cámara lenta.',
        screenshots: [
          {
            src: '/images/games/bounce-blitz/01-clubhouse.webp',
            alt: 'El cartel del club de Bounce Blitz con las estrellas conseguidas',
          },
          {
            src: '/images/games/bounce-blitz/02-aim.webp',
            alt: 'Apuntando un tiro con la banda de tensión y la línea de vista previa',
          },
          {
            src: '/images/games/bounce-blitz/03-bank-shot.webp',
            alt: 'La bola en vuelo durante un rebote hacia el hoyo',
          },
          {
            src: '/images/games/bounce-blitz/04-hole-complete.webp',
            alt: 'Hoyo completado con tres estrellas y los rebotes frente al par',
          },
          {
            src: '/images/games/bounce-blitz/05-course-map.webp',
            alt: 'El mapa del campo con cuatro paquetes y la tarjeta de puntuación',
          },
        ],
      },
    },
  },
]

export function getGameBySlug(slug: string): GameData | undefined {
  return games.find((g) => g.slug === slug)
}

export function getAllGameSlugs(): string[] {
  return games.map((g) => g.slug)
}

export function getLocalizedGameBySlug(slug: string, locale: string): GameData | undefined {
  const game = getGameBySlug(slug)
  if (!game) return undefined
  if (locale !== 'fr' && locale !== 'es') return game

  const translated = game.translations?.[locale]
  if (!translated) return game

  return { ...game, ...translated }
}

export function getLocalizedGames(locale: string): GameData[] {
  return games.map((game) => {
    if (locale !== 'fr' && locale !== 'es') return game
    const translated = game.translations?.[locale]
    return translated ? { ...game, ...translated } : game
  })
}
