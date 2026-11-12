export type Locale = 'en' | 'fr' | 'es'
export type L = Record<Locale, string>
export type WorkCategory = 'software' | 'automation' | 'games' | 'design'

export function tr(text: L, locale: string): string {
  return text[(locale as Locale) in text ? (locale as Locale) : 'en']
}

export interface WorkProject {
  id: string
  visual: 'website' | 'factory' | 'pipeline' | 'design' | 'games'
  categories: WorkCategory[]
  href: string
  name: L
  line: L
  system: L
  tags: string[]
}

export interface CaseFlowStep {
  label: L
  note: L
}

export interface CaseSection {
  id: string
  title: L
  body: L
  points?: L[]
}

export interface CaseStudy {
  slug: string
  kind: 'own' | 'client'
  visual: 'website' | 'factory'
  categories: WorkCategory[]
  name: L
  summary: L
  facts: { value: string; label: L }[]
  problem: L
  system: L
  flowTitle: L
  flow: CaseFlowStep[]
  sections: CaseSection[]
  stack: string[]
  links: { label: L; href: string }[]
}

export const categories: { id: 'all' | WorkCategory; label: L }[] = [
  { id: 'all', label: { en: 'All', fr: 'Tout', es: 'Todo' } },
  { id: 'software', label: { en: 'Software', fr: 'Logiciel', es: 'Software' } },
  { id: 'automation', label: { en: 'Automation', fr: 'Automatisation', es: 'Automatización' } },
  { id: 'games', label: { en: 'Games', fr: 'Jeux', es: 'Juegos' } },
  { id: 'design', label: { en: 'Design', fr: 'Design', es: 'Diseño' } },
]

export const projects: WorkProject[] = [
  {
    id: 'website',
    visual: 'website',
    categories: ['software', 'design'],
    href: '/work/this-website',
    name: { en: 'This website', fr: 'Ce site web', es: 'Este sitio web' },
    line: {
      en: 'A site that starts with a conversation, not a menu, in three languages.',
      fr: 'Un site qui commence par une conversation, pas un menu, en trois langues.',
      es: 'Un sitio que empieza con una conversación, no con un menú, en tres idiomas.',
    },
    system: {
      en: 'One fact lives in one file. Every page, language and card reads from it.',
      fr: 'Chaque fait vit dans un seul fichier. Pages, langues et cartes le lisent.',
      es: 'Cada dato vive en un solo archivo. Páginas, idiomas y tarjetas lo leen.',
    },
    tags: ['Next.js', 'next-intl', 'Tailwind'],
  },
  {
    id: 'factory',
    visual: 'factory',
    categories: ['games', 'automation'],
    href: '/work/games-factory',
    name: { en: 'The games factory', fr: 'L’usine à jeux', es: 'La fábrica de juegos' },
    line: {
      en: 'One repeatable system that shipped ten mobile games.',
      fr: 'Un système reproductible qui a livré dix jeux mobiles.',
      es: 'Un sistema repetible que publicó diez juegos móviles.',
    },
    system: {
      en: 'Same template, same checks, same release path for every game.',
      fr: 'Même modèle, mêmes contrôles, même chemin de sortie pour chaque jeu.',
      es: 'La misma plantilla, las mismas pruebas y la misma salida para cada juego.',
    },
    tags: ['Mobile', 'Design kit', 'Release path'],
  },
  {
    id: 'pipeline',
    visual: 'pipeline',
    categories: ['automation', 'software'],
    href: '/work/this-website#pipeline',
    name: { en: 'Public data pipeline', fr: 'Pipeline de données publiques', es: 'Canal de datos públicos' },
    line: {
      en: 'Contract notices and wage data from four countries, pulled in on a schedule.',
      fr: 'Avis de marchés et données salariales de quatre pays, récupérés selon un calendrier.',
      es: 'Licitaciones y datos salariales de cuatro países, recogidos con un calendario.',
    },
    system: {
      en: 'Each source is one small connector. Adding a country is adding a file.',
      fr: 'Chaque source est un petit connecteur. Ajouter un pays, c’est ajouter un fichier.',
      es: 'Cada fuente es un conector pequeño. Sumar un país es sumar un archivo.',
    },
    tags: ['Postgres', 'Drizzle', 'Scheduled jobs'],
  },
  {
    id: 'design',
    visual: 'design',
    categories: ['design'],
    href: '/work/this-website#design',
    name: { en: 'Design system', fr: 'Système de design', es: 'Sistema de diseño' },
    line: {
      en: 'Colour, type, hover and focus rules shared by every page on this site.',
      fr: 'Couleurs, typographie, survol et focus partagés par toutes les pages du site.',
      es: 'Color, tipografía, hover y foco compartidos por todas las páginas del sitio.',
    },
    system: {
      en: 'Design run as a system: a new page starts from shared parts, not a blank file.',
      fr: 'Le design comme système : une page part de pièces communes, pas d’une page blanche.',
      es: 'El diseño como sistema: cada página parte de piezas comunes, no de cero.',
    },
    tags: ['Tokens', 'WCAG AA', 'Motion'],
  },
  {
    id: 'games',
    visual: 'games',
    categories: ['games'],
    href: '/games',
    name: { en: 'Ten Awesoon games', fr: 'Dix jeux Awesoon', es: 'Diez juegos de Awesoon' },
    line: {
      en: 'Short, calm mobile games for all ages. No account, nothing to sign up for.',
      fr: 'Des jeux mobiles courts et calmes pour tous les âges. Sans compte.',
      es: 'Juegos móviles cortos y tranquilos para todas las edades. Sin cuenta.',
    },
    system: {
      en: 'Built on the games factory. One privacy policy and one support page cover all ten.',
      fr: 'Construits par l’usine à jeux. Une politique et une page d’aide pour les dix.',
      es: 'Hechos con la fábrica de juegos. Una política y una página de ayuda para los diez.',
    },
    tags: ['10 games', 'All ages', 'Offline first'],
  },
]

export const caseStudies: CaseStudy[] = [
  {
    slug: 'this-website',
    kind: 'own',
    visual: 'website',
    categories: ['software', 'automation', 'design'],
    name: { en: 'This website', fr: 'Ce site web', es: 'Este sitio web' },
    summary: {
      en: 'A conversation-first site with a shared design system, a public data pipeline and three languages, built and run by Awesoon.',
      fr: 'Un site qui commence par une conversation, avec un système de design commun, un pipeline de données publiques et trois langues, construit et géré par Awesoon.',
      es: 'Un sitio que empieza con una conversación, con un sistema de diseño común, un canal de datos públicos y tres idiomas, hecho y operado por Awesoon.',
    },
    facts: [
      { value: '3', label: { en: 'languages, one source', fr: 'langues, une source', es: 'idiomas, una fuente' } },
      { value: '13', label: { en: 'public data sources', fr: 'sources de données publiques', es: 'fuentes de datos públicos' } },
      { value: '4', label: { en: 'scheduled jobs', fr: 'tâches planifiées', es: 'tareas programadas' } },
    ],
    problem: {
      en: 'Most service sites open with a menu of everything the company does. A visitor has to translate their own problem into the company’s words before they learn anything. We wanted the opposite: say your problem in plain words and get a first answer straight away.',
      fr: 'La plupart des sites de services s’ouvrent sur un menu de tout ce que fait l’entreprise. Le visiteur doit traduire son problème dans les mots de l’entreprise avant d’apprendre quoi que ce soit. Nous voulions l’inverse : décrire son problème simplement et recevoir une première réponse tout de suite.',
      es: 'La mayoría de los sitios de servicios abren con un menú de todo lo que hace la empresa. El visitante tiene que traducir su problema a las palabras de la empresa antes de aprender algo. Quisimos lo contrario: contar tu problema con tus palabras y recibir una primera respuesta enseguida.',
    },
    system: {
      en: 'The site is built as one system. Content lives in data files, one fact in one place. Pages, languages and cards are views of that data, so a change made once shows up everywhere. Behind it, a pipeline pulls public contract and wage data into a database on a schedule.',
      fr: 'Le site est construit comme un seul système. Le contenu vit dans des fichiers de données, un fait à un seul endroit. Pages, langues et cartes sont des vues de ces données : un changement fait une fois apparaît partout. En coulisse, un pipeline charge des données publiques de marchés et de salaires dans une base selon un calendrier.',
      es: 'El sitio está hecho como un solo sistema. El contenido vive en archivos de datos, cada dato en un solo lugar. Páginas, idiomas y tarjetas son vistas de esos datos, así que un cambio hecho una vez aparece en todas partes. Detrás, un canal carga datos públicos de licitaciones y salarios en una base de datos con un calendario.',
    },
    flowTitle: { en: 'How a visit becomes a brief', fr: 'Comment une visite devient un brief', es: 'Cómo una visita se vuelve un brief' },
    flow: [
      { label: { en: 'You describe it', fr: 'Vous décrivez', es: 'Lo describes' }, note: { en: 'In your own words, in any of three languages.', fr: 'Avec vos mots, dans l’une des trois langues.', es: 'Con tus palabras, en cualquiera de tres idiomas.' } },
      { label: { en: 'The assistant answers', fr: 'L’assistant répond', es: 'El asistente responde' }, note: { en: 'A first answer and one follow-up question.', fr: 'Une première réponse et une question de suivi.', es: 'Una primera respuesta y una pregunta de seguimiento.' } },
      { label: { en: 'A brief takes shape', fr: 'Un brief prend forme', es: 'Se arma un brief' }, note: { en: 'The problem, the likely fix, the first step.', fr: 'Le problème, la piste, la première étape.', es: 'El problema, la solución probable, el primer paso.' } },
      { label: { en: 'Ray takes it from there', fr: 'Ray prend le relais', es: 'Ray sigue desde ahí' }, note: { en: 'A 30-minute call to check it against how the work really runs.', fr: 'Un appel de 30 minutes pour le confronter au terrain.', es: 'Una llamada de 30 minutos para contrastarlo con el trabajo real.' } },
    ],
    sections: [
      {
        id: 'conversation',
        title: { en: 'Conversation first', fr: 'La conversation d’abord', es: 'Primero la conversación' },
        body: {
          en: 'The home page opens with a question, not a menu. Starter prompts cover the common cases, and the reply ends in a short brief and a way to book Ray. Nothing you type is stored.',
          fr: 'La page d’accueil s’ouvre sur une question, pas un menu. Des suggestions couvrent les cas courants, et la réponse se termine par un court brief et un moyen de réserver Ray. Rien de ce que vous tapez n’est conservé.',
          es: 'La portada abre con una pregunta, no con un menú. Las sugerencias cubren los casos comunes y la respuesta termina en un brief corto y una forma de agendar con Ray. Nada de lo que escribes se guarda.',
        },
      },
      {
        id: 'design',
        title: { en: 'A design system, not a set of pages', fr: 'Un système de design, pas une pile de pages', es: 'Un sistema de diseño, no un montón de páginas' },
        body: {
          en: 'Colour, type, spacing, hover and focus states are shared tokens. Every new page starts from the same parts, so it looks finished on day one and stays readable for everyone.',
          fr: 'Couleurs, typographie, espacement, survol et focus sont des jetons partagés. Chaque nouvelle page part des mêmes pièces : elle a l’air finie dès le premier jour et reste lisible pour tous.',
          es: 'Color, tipografía, espacios, hover y foco son tokens compartidos. Cada página nueva parte de las mismas piezas, así que se ve terminada desde el primer día y sigue siendo legible para todos.',
        },
        points: [
          { en: 'Contrast checked to WCAG AA', fr: 'Contraste vérifié au niveau WCAG AA', es: 'Contraste revisado a nivel WCAG AA' },
          { en: 'One hover and focus system for every control', fr: 'Un seul système de survol et de focus', es: 'Un solo sistema de hover y foco' },
          { en: 'Calm fallbacks when reduced motion is on', fr: 'Version calme si le mouvement réduit est activé', es: 'Versión tranquila con movimiento reducido' },
        ],
      },
      {
        id: 'pipeline',
        title: { en: 'A public data pipeline', fr: 'Un pipeline de données publiques', es: 'Un canal de datos públicos' },
        body: {
          en: 'Small connectors read public sources and write them to one database. Each runs on its own schedule, and adding a source is adding one file.',
          fr: 'De petits connecteurs lisent des sources publiques et les écrivent dans une seule base. Chacun tourne selon son calendrier, et ajouter une source, c’est ajouter un fichier.',
          es: 'Conectores pequeños leen fuentes públicas y las escriben en una sola base de datos. Cada uno corre con su propio calendario y sumar una fuente es sumar un archivo.',
        },
        points: [
          { en: 'Contract notices: United States, Canada, United Kingdom, Australia', fr: 'Avis de marchés : États-Unis, Canada, Royaume-Uni, Australie', es: 'Licitaciones: Estados Unidos, Canadá, Reino Unido, Australia' },
          { en: 'Wage data from the four national statistics offices', fr: 'Données salariales des quatre instituts statistiques', es: 'Datos salariales de las cuatro oficinas de estadística' },
          { en: 'Industry and product code lists to match them up', fr: 'Listes de codes de secteurs et de produits pour les relier', es: 'Listas de códigos de industria y producto para cruzarlos' },
        ],
      },
      {
        id: 'languages',
        title: { en: 'Three languages from one source', fr: 'Trois langues, une seule source', es: 'Tres idiomas desde una fuente' },
        body: {
          en: 'English, French and Spanish share one set of keys. A page cannot ship with a missing string, and search engines see every language version.',
          fr: 'Anglais, français et espagnol partagent les mêmes clés. Une page ne peut pas sortir avec un texte manquant, et les moteurs de recherche voient chaque version.',
          es: 'Inglés, francés y español comparten las mismas claves. Una página no puede salir con un texto faltante y los buscadores ven cada versión.',
        },
      },
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'next-intl', 'Three.js', 'Postgres', 'Drizzle ORM', 'Vercel cron'],
    links: [
      { label: { en: 'Try the home page assistant', fr: 'Essayer l’assistant de l’accueil', es: 'Probar el asistente de la portada' }, href: '/' },
    ],
  },
  {
    slug: 'games-factory',
    kind: 'own',
    visual: 'factory',
    categories: ['games', 'automation', 'design'],
    name: { en: 'The games factory', fr: 'L’usine à jeux', es: 'La fábrica de juegos' },
    summary: {
      en: 'One repeatable system, ten mobile games. The same template, design kit, checks and release path behind every title.',
      fr: 'Un système reproductible, dix jeux mobiles. Le même modèle, le même kit de design, les mêmes contrôles et le même chemin de sortie pour chaque titre.',
      es: 'Un sistema repetible, diez juegos móviles. La misma plantilla, el mismo kit de diseño, las mismas pruebas y la misma salida detrás de cada título.',
    },
    facts: [
      { value: '10', label: { en: 'games shipped', fr: 'jeux livrés', es: 'juegos publicados' } },
      { value: '1', label: { en: 'shared design kit', fr: 'kit de design commun', es: 'kit de diseño común' } },
      { value: '1', label: { en: 'privacy policy for all', fr: 'politique pour tous', es: 'política para todos' } },
    ],
    problem: {
      en: 'Building one game is a project. Building ten the same way is a system. Without one, every title reinvents its menus, settings, privacy, store listing and release steps, and quality drifts from game to game.',
      fr: 'Faire un jeu est un projet. En faire dix de la même façon est un système. Sans système, chaque titre réinvente ses menus, réglages, confidentialité, fiche de magasin et étapes de sortie, et la qualité varie d’un jeu à l’autre.',
      es: 'Hacer un juego es un proyecto. Hacer diez de la misma forma es un sistema. Sin uno, cada título reinventa sus menús, ajustes, privacidad, ficha de tienda y pasos de salida, y la calidad cambia de un juego a otro.',
    },
    system: {
      en: 'We built the factory first, then the games. Each new game starts from the same template and design kit, passes the same checks and leaves by the same release path. Only the idea and the play are new.',
      fr: 'Nous avons construit l’usine d’abord, puis les jeux. Chaque nouveau jeu part du même modèle et du même kit, passe les mêmes contrôles et sort par le même chemin. Seuls l’idée et le jeu changent.',
      es: 'Primero hicimos la fábrica, luego los juegos. Cada juego nuevo parte de la misma plantilla y el mismo kit, pasa las mismas pruebas y sale por el mismo camino. Solo la idea y la jugabilidad son nuevas.',
    },
    flowTitle: { en: 'One path, every game', fr: 'Un chemin, chaque jeu', es: 'Un camino, cada juego' },
    flow: [
      { label: { en: 'Idea', fr: 'Idée', es: 'Idea' }, note: { en: 'One sentence: what you tap and why it feels good.', fr: 'Une phrase : ce qu’on touche et pourquoi c’est agréable.', es: 'Una frase: qué tocas y por qué se siente bien.' } },
      { label: { en: 'Template', fr: 'Modèle', es: 'Plantilla' }, note: { en: 'Menus, settings, saves and age question come built in.', fr: 'Menus, réglages, sauvegarde et question d’âge inclus.', es: 'Menús, ajustes, guardado y pregunta de edad incluidos.' } },
      { label: { en: 'Design kit', fr: 'Kit de design', es: 'Kit de diseño' }, note: { en: 'Shared shapes, motion and type make it look finished.', fr: 'Formes, mouvement et typo communs.', es: 'Formas, movimiento y tipografía comunes.' } },
      { label: { en: 'Checks', fr: 'Contrôles', es: 'Pruebas' }, note: { en: 'The same review on every screen before it ships.', fr: 'La même revue sur chaque écran avant la sortie.', es: 'La misma revisión en cada pantalla antes de salir.' } },
      { label: { en: 'Release', fr: 'Sortie', es: 'Salida' }, note: { en: 'One store listing format, one privacy policy, one support page.', fr: 'Un format de fiche, une politique, une page d’aide.', es: 'Un formato de ficha, una política, una página de ayuda.' } },
    ],
    sections: [
      {
        id: 'template',
        title: { en: 'Start from the template', fr: 'Partir du modèle', es: 'Partir de la plantilla' },
        body: {
          en: 'Every game opens on the same bones: a home screen, settings, saved progress on the device and a one-time age question. No accounts and no servers of ours, so nothing personal leaves the phone.',
          fr: 'Chaque jeu repose sur la même base : un écran d’accueil, des réglages, une progression enregistrée sur l’appareil et une question d’âge unique. Pas de compte ni de serveur à nous : rien de personnel ne quitte le téléphone.',
          es: 'Cada juego parte de la misma base: pantalla de inicio, ajustes, progreso guardado en el dispositivo y una pregunta de edad única. Sin cuentas ni servidores propios, así que nada personal sale del teléfono.',
        },
      },
      {
        id: 'kit',
        title: { en: 'One design kit', fr: 'Un seul kit de design', es: 'Un solo kit de diseño' },
        body: {
          en: 'Shared shapes, motion and type sit behind all ten games, while each one keeps its own world: a drafting sheet, a bakery, a press room. The kit is why a new game looks finished early.',
          fr: 'Formes, mouvement et typographie communs sous les dix jeux, chacun gardant son univers : une planche à dessin, une boulangerie, une salle de presse. Le kit explique pourquoi un nouveau jeu paraît fini tôt.',
          es: 'Formas, movimiento y tipografía comunes detrás de los diez juegos, cada uno con su propio mundo: una hoja de dibujo, una panadería, una imprenta. El kit es la razón de que un juego nuevo se vea terminado pronto.',
        },
      },
      {
        id: 'release',
        title: { en: 'One release path', fr: 'Un seul chemin de sortie', es: 'Un solo camino de salida' },
        body: {
          en: 'Store listings follow one format, and this website reads the same copy, so the store and the site never disagree. One privacy policy and one support page cover all ten games.',
          fr: 'Les fiches suivent un seul format et ce site lit le même texte : le magasin et le site ne se contredisent jamais. Une politique de confidentialité et une page d’aide couvrent les dix jeux.',
          es: 'Las fichas de tienda siguen un formato y este sitio lee el mismo texto, así que la tienda y el sitio nunca se contradicen. Una política de privacidad y una página de ayuda cubren los diez juegos.',
        },
      },
    ],
    stack: ['Mobile', 'Shared game template', 'Design kit', 'Screen review', 'Google AdMob', 'Store listing data'],
    links: [
      { label: { en: 'See all ten games', fr: 'Voir les dix jeux', es: 'Ver los diez juegos' }, href: '/games' },
    ],
  },
]

export const clientCaseStudies: CaseStudy[] = []

export function getAllCaseStudies(): CaseStudy[] {
  return [...caseStudies, ...clientCaseStudies]
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return getAllCaseStudies().find((c) => c.slug === slug)
}

export const method: { title: L; text: L }[] = [
  { title: { en: 'Settle the pain', fr: 'Cerner le problème', es: 'Entender el problema' }, text: { en: 'Write down what hurts and who it hurts, before any screen.', fr: 'Écrire ce qui coince et pour qui, avant tout écran.', es: 'Escribir qué duele y a quién, antes de cualquier pantalla.' } },
  { title: { en: 'Shape the system', fr: 'Dessiner le système', es: 'Dar forma al sistema' }, text: { en: 'One fact in one place. Decide what to delete.', fr: 'Un fait à un seul endroit. Décider quoi retirer.', es: 'Cada dato en un solo lugar. Decidir qué quitar.' } },
  { title: { en: 'Make it', fr: 'Le construire', es: 'Construirlo' }, text: { en: 'Build from shared parts so it looks finished early.', fr: 'Construire avec des pièces communes.', es: 'Construir con piezas comunes.' } },
  { title: { en: 'Test with real people', fr: 'Tester avec de vraies personnes', es: 'Probar con personas reales' }, text: { en: 'One change at a time, checked against real use.', fr: 'Un changement à la fois, vérifié sur le terrain.', es: 'Un cambio a la vez, contrastado con el uso real.' } },
  { title: { en: 'Run it', fr: 'Le faire tourner', es: 'Operarlo' }, text: { en: 'Ship, watch, keep or cut. The system stays reusable.', fr: 'Livrer, observer, garder ou couper.', es: 'Publicar, observar, mantener o cortar.' } },
]

export const workCopy = {
  eyebrow: { en: 'Our work', fr: 'Nos réalisations', es: 'Nuestro trabajo' },
  title: { en: 'Systems we have built, and how', fr: 'Les systèmes que nous avons construits, et comment', es: 'Los sistemas que hemos construido, y cómo' },
  subtitle: {
    en: 'Software, automation, design and ten mobile games, all made with one way of working. Here is the work we can show in full.',
    fr: 'Logiciel, automatisation, design et dix jeux mobiles, faits avec une seule méthode. Voici le travail que nous pouvons montrer en entier.',
    es: 'Software, automatización, diseño y diez juegos móviles, hechos con una sola forma de trabajar. Este es el trabajo que podemos mostrar completo.',
  },
  cta: { en: 'Book a 30-minute discovery call', fr: 'Réserver un appel découverte de 30 minutes', es: 'Reservar una llamada de 30 minutos' },
  seeWork: { en: 'See the work', fr: 'Voir les réalisations', es: 'Ver el trabajo' },
  filterLabel: { en: 'Filter projects', fr: 'Filtrer les projets', es: 'Filtrar proyectos' },
  caseStudy: { en: 'Read the case study', fr: 'Lire l’étude de cas', es: 'Leer el caso' },
  open: { en: 'Open', fr: 'Ouvrir', es: 'Abrir' },
  systemLabel: { en: 'The system', fr: 'Le système', es: 'El sistema' },
  shown: { en: 'projects shown', fr: 'projets affichés', es: 'proyectos visibles' },
  methodTitle: { en: 'How we build: one system, many products', fr: 'Notre méthode : un système, plusieurs produits', es: 'Cómo construimos: un sistema, muchos productos' },
  methodText: {
    en: 'Every project on this page went through the same five steps. That is the proof: the system repeats.',
    fr: 'Chaque projet de cette page est passé par les mêmes cinq étapes. C’est la preuve : le système se répète.',
    es: 'Cada proyecto de esta página pasó por los mismos cinco pasos. Esa es la prueba: el sistema se repite.',
  },
  clientsTitle: { en: 'Client work', fr: 'Travaux pour des clients', es: 'Trabajo para clientes' },
  clientsText: {
    en: 'Client case studies are shared on request, with the client’s permission.',
    fr: 'Les études de cas clients sont partagées sur demande, avec l’accord du client.',
    es: 'Los casos de clientes se comparten a pedido, con el permiso del cliente.',
  },
  clientsHint: {
    en: 'Tell us what you are working on and we will share the closest example we are allowed to.',
    fr: 'Dites-nous sur quoi vous travaillez et nous partagerons l’exemple le plus proche que nous pouvons.',
    es: 'Cuéntanos en qué trabajas y compartiremos el ejemplo más cercano que podamos.',
  },
  askTitle: { en: 'Ask about work like yours', fr: 'Demandez un travail comme le vôtre', es: 'Pregunta por un trabajo como el tuyo' },
  askIntro: {
    en: 'Ask about any project here, or how the same system could build yours. I explain; Ray scopes and prices.',
    fr: 'Posez une question sur un projet, ou sur la façon dont le même système construirait le vôtre. J’explique ; Ray chiffre.',
    es: 'Pregunta por cualquier proyecto, o cómo el mismo sistema haría el tuyo. Yo explico; Ray define y cotiza.',
  },
  askPlaceholder: { en: 'Describe your project', fr: 'Décrivez votre projet', es: 'Describe tu proyecto' },
  askSend: { en: 'Send', fr: 'Envoyer', es: 'Enviar' },
  askLog: { en: 'Conversation', fr: 'Conversation', es: 'Conversación' },
  askNote: { en: 'Nothing you type is stored.', fr: 'Rien de ce que vous tapez n’est conservé.', es: 'Nada de lo que escribes se guarda.' },
  backToWork: { en: 'All work', fr: 'Toutes les réalisations', es: 'Todo el trabajo' },
  problemTitle: { en: 'The problem', fr: 'Le problème', es: 'El problema' },
  systemTitle: { en: 'The system', fr: 'Le système', es: 'El sistema' },
  whatTitle: { en: 'What it does', fr: 'Ce qu’il fait', es: 'Qué hace' },
  stackTitle: { en: 'Stack', fr: 'Technologies', es: 'Tecnología' },
  moreTitle: { en: 'More work', fr: 'Autres réalisations', es: 'Más trabajo' },
  ownWork: { en: 'Built and run by Awesoon', fr: 'Construit et géré par Awesoon', es: 'Hecho y operado por Awesoon' },
  clientWork: { en: 'Client project', fr: 'Projet client', es: 'Proyecto de cliente' },
  gamesTitle: { en: 'Ten games from one system', fr: 'Dix jeux, un système', es: 'Diez juegos, un sistema' },
}

export interface AskTopic {
  id: string
  chip: L
  keywords: L
  reply: L
  link?: { label: L; href: string }
}

export const askTopics: AskTopic[] = [
  {
    id: 'portal',
    chip: { en: 'Could you build a system like this for us?', fr: 'Pourriez-vous construire un système comme celui-ci ?', es: '¿Podrían hacer un sistema así para nosotros?' },
    keywords: { en: 'build,portal,system,app,software,website,site', fr: 'construire,portail,système,application,logiciel,site', es: 'construir,portal,sistema,aplicación,software,sitio,web' },
    reply: {
      en: 'Yes. We start by writing down the pain and who it hurts, then shape one source of truth and build from shared parts. The first step is a 30-minute call with Ray to check fit.',
      fr: 'Oui. Nous commençons par écrire ce qui coince et pour qui, puis nous dessinons une source unique et construisons avec des pièces communes. La première étape est un appel de 30 minutes avec Ray.',
      es: 'Sí. Empezamos por escribir qué duele y a quién, luego definimos una sola fuente de verdad y construimos con piezas comunes. El primer paso es una llamada de 30 minutos con Ray.',
    },
    link: { label: { en: 'Read how this website was built', fr: 'Voir comment ce site a été construit', es: 'Ver cómo se hizo este sitio' }, href: '/work/this-website' },
  },
  {
    id: 'automation',
    chip: { en: 'We re-type data between tools', fr: 'Nous ressaisissons des données entre outils', es: 'Copiamos datos a mano entre herramientas' },
    keywords: { en: 'spreadsheet,excel,retype,re-type,manual,data,automate,integration,erp,crm', fr: 'tableur,excel,ressaisir,manuel,données,automatiser,intégration,erp,crm', es: 'hoja,excel,copiar,manual,datos,automatizar,integración,erp,crm' },
    reply: {
      en: 'That is the kind of work our data pipeline does: small connectors that read each source and write to one place, on a schedule, with a person on the exceptions.',
      fr: 'C’est le travail de notre pipeline de données : de petits connecteurs qui lisent chaque source et écrivent au même endroit, selon un calendrier, avec une personne pour les exceptions.',
      es: 'Ese es el trabajo de nuestro canal de datos: conectores pequeños que leen cada fuente y escriben en un solo lugar, con calendario, y una persona para las excepciones.',
    },
    link: { label: { en: 'See the pipeline', fr: 'Voir le pipeline', es: 'Ver el canal de datos' }, href: '/work/this-website#pipeline' },
  },
  {
    id: 'clients',
    chip: { en: 'Can I see client work?', fr: 'Puis-je voir des travaux clients ?', es: '¿Puedo ver trabajo de clientes?' },
    keywords: { en: 'client,case,example,reference,portfolio', fr: 'client,cas,exemple,référence,portfolio', es: 'cliente,caso,ejemplo,referencia,portafolio' },
    reply: {
      en: 'Client case studies are shared on request, with the client’s permission. Tell Ray what you are working on and he will share the closest example he is allowed to.',
      fr: 'Les études de cas clients sont partagées sur demande, avec l’accord du client. Dites à Ray sur quoi vous travaillez et il partagera l’exemple le plus proche possible.',
      es: 'Los casos de clientes se comparten a pedido, con el permiso del cliente. Cuéntale a Ray en qué trabajas y compartirá el ejemplo más cercano que pueda.',
    },
  },
  {
    id: 'games',
    chip: { en: 'How did you ship ten games?', fr: 'Comment avez-vous livré dix jeux ?', es: '¿Cómo publicaron diez juegos?' },
    keywords: { en: 'game,games,mobile,app store,ten', fr: 'jeu,jeux,mobile,dix', es: 'juego,juegos,móvil,diez' },
    reply: {
      en: 'We built the factory before the games: one template, one design kit, the same checks and one release path. Only the idea and the play change from game to game.',
      fr: 'Nous avons construit l’usine avant les jeux : un modèle, un kit de design, les mêmes contrôles et un chemin de sortie. Seuls l’idée et le jeu changent.',
      es: 'Hicimos la fábrica antes que los juegos: una plantilla, un kit de diseño, las mismas pruebas y un camino de salida. Solo cambian la idea y la jugabilidad.',
    },
    link: { label: { en: 'Read the games factory story', fr: 'Lire l’histoire de l’usine à jeux', es: 'Leer la historia de la fábrica' }, href: '/work/games-factory' },
  },
]

export const askFallback: L = {
  en: 'Good question for Ray. The assistant explains how we work; Ray scopes, prices and commits on a 30-minute call, with no obligation.',
  fr: 'Bonne question pour Ray. L’assistant explique notre méthode ; Ray définit, chiffre et s’engage lors d’un appel de 30 minutes, sans obligation.',
  es: 'Buena pregunta para Ray. El asistente explica cómo trabajamos; Ray define, cotiza y se compromete en una llamada de 30 minutos, sin compromiso.',
}
