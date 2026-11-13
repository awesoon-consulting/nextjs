import type { Comparison } from './types'

const EXCEL_LIMITS = { label: 'Microsoft Excel specifications and limits', url: 'https://support.microsoft.com/en-us/office/excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3' }
const SHEETS_LIMITS = { label: 'Google Drive: files you can store', url: 'https://support.google.com/drive/answer/37603' }
const SHEETS_PRODUCT = { label: 'Google Sheets', url: 'https://workspace.google.com/products/sheets/' }
const ODOO_PRICING = { label: 'Odoo pricing', url: 'https://www.odoo.com/pricing' }
const ODOO_INVENTORY = { label: 'Odoo Inventory', url: 'https://www.odoo.com/app/inventory' }
const BC_PRICING = { label: 'Dynamics 365 Business Central pricing', url: 'https://www.microsoft.com/en-us/dynamics-365/products/business-central/pricing' }
const BC_PRODUCT = { label: 'Dynamics 365 Business Central', url: 'https://www.microsoft.com/en-us/dynamics-365/products/business-central' }

export const COMPARE_SPREADSHEETS_VS_ERP: Comparison = {
  slug: 'spreadsheets-vs-erp',
  a: 'Spreadsheets',
  b: 'An ERP',
  hub: '/erp-crm',
  relatedTerms: ['erp', 'erp-implementation', 'single-source-of-truth', 'data-migration', 'system-of-record', 'audit-trail'],
  checked: '2026-11-12',
  facts: [
    {
      area: { en: 'Size and scope', fr: 'Taille et portée', es: 'Tamaño y alcance' },
      a: {
        en: 'An Excel worksheet holds up to 1,048,576 rows by 16,384 columns. A Google Sheets file holds up to 20 million cells.',
        fr: "Une feuille Excel contient jusqu'à 1 048 576 lignes et 16 384 colonnes. Un fichier Google Sheets contient jusqu'à 20 millions de cellules.",
        es: 'Una hoja de Excel admite hasta 1.048.576 filas por 16.384 columnas. Un archivo de Google Sheets admite hasta 20 millones de celdas.',
      },
      b: {
        en: 'Business Central describes one solution that connects finance, sales, service and operations, rather than separate files.',
        fr: 'Business Central se décrit comme une seule solution qui relie finances, ventes, service et opérations, plutôt que des fichiers séparés.',
        es: 'Business Central se describe como una sola solución que conecta finanzas, ventas, servicio y operaciones, en lugar de archivos separados.',
      },
      sources: [EXCEL_LIMITS, SHEETS_LIMITS, BC_PRODUCT],
      asOf: '2026-11-12',
    },
    {
      area: { en: 'Getting started', fr: 'Pour commencer', es: 'Para empezar' },
      a: {
        en: 'Anyone with a Google Account can create in Sheets.',
        fr: 'Toute personne ayant un compte Google peut créer dans Sheets.',
        es: 'Cualquier persona con una cuenta de Google puede crear en Sheets.',
      },
      b: {
        en: 'Odoo offers a free plan with one app and unlimited users. Microsoft directs buyers to a partner to purchase Business Central.',
        fr: 'Odoo offre un forfait gratuit avec une application et des utilisateurs illimités. Microsoft dirige les acheteurs vers un partenaire pour acheter Business Central.',
        es: 'Odoo ofrece un plan gratuito con una app y usuarios ilimitados. Microsoft remite a los compradores a un socio para comprar Business Central.',
      },
      sources: [SHEETS_PRODUCT, ODOO_PRICING, BC_PRICING],
      asOf: '2026-11-12',
    },
    {
      area: { en: 'Pricing model', fr: 'Modèle de prix', es: 'Modelo de precios' },
      a: {
        en: 'Sheets is available with a Google Account; some features need a Google Workspace plan.',
        fr: 'Sheets est accessible avec un compte Google; certaines fonctions exigent un forfait Google Workspace.',
        es: 'Sheets está disponible con una cuenta de Google; algunas funciones requieren un plan de Google Workspace.',
      },
      b: {
        en: 'Odoo and Business Central both publish per-user, per-month prices. Odoo states implementation services are not included.',
        fr: "Odoo et Business Central publient tous deux des prix par utilisateur et par mois. Odoo précise que l'implantation n'est pas incluse.",
        es: 'Odoo y Business Central publican precios por usuario y por mes. Odoo indica que los servicios de implementación no están incluidos.',
      },
      sources: [SHEETS_PRODUCT, ODOO_PRICING, BC_PRICING],
      asOf: '2026-11-12',
    },
    {
      area: { en: 'Working together', fr: 'Travail en équipe', es: 'Trabajo en equipo' },
      a: {
        en: 'In Sheets, several people can edit the same file at once. Excel lists a 256-user limit only for its legacy shared workbook setting.',
        fr: "Dans Sheets, plusieurs personnes peuvent modifier le même fichier en même temps. Excel indique une limite de 256 utilisateurs seulement pour son ancien mode de classeur partagé.",
        es: 'En Sheets, varias personas pueden editar el mismo archivo a la vez. Excel indica un límite de 256 usuarios solo para su modo heredado de libro compartido.',
      },
      b: {
        en: 'Business Central works with Microsoft Teams, Outlook and Excel, with cloud access to real-time data.',
        fr: 'Business Central fonctionne avec Microsoft Teams, Outlook et Excel, avec un accès infonuagique aux données en temps réel.',
        es: 'Business Central funciona con Microsoft Teams, Outlook y Excel, con acceso en la nube a datos en tiempo real.',
      },
      sources: [SHEETS_PRODUCT, EXCEL_LIMITS, BC_PRODUCT],
      asOf: '2026-11-12',
    },
    {
      area: { en: 'Inventory', fr: 'Inventaire', es: 'Inventario' },
      a: {
        en: 'A blank grid. Stock tracking is whatever columns and formulas the team builds.',
        fr: "Une grille vide. Le suivi des stocks dépend des colonnes et formules que l'équipe construit.",
        es: 'Una cuadrícula en blanco. El control de inventario es lo que el equipo construya con columnas y fórmulas.',
      },
      b: {
        en: 'Odoo Inventory covers multiple warehouses, barcode scanning, and serial and lot tracking.',
        fr: "Odoo Inventaire couvre plusieurs entrepôts, la lecture de codes-barres et le suivi par numéro de série et par lot.",
        es: 'Odoo Inventario cubre varios almacenes, escaneo de códigos de barras y seguimiento por número de serie y lote.',
      },
      sources: [SHEETS_PRODUCT, ODOO_INVENTORY],
      asOf: '2026-11-12',
    },
    {
      area: { en: 'Linking processes', fr: 'Liens entre processus', es: 'Vínculo entre procesos' },
      a: {
        en: 'Sheets connects to outside data such as BigQuery through Connected Sheets, and extends with add-ons and Apps Script.',
        fr: 'Sheets se relie à des données externes comme BigQuery avec Connected Sheets, et se prolonge avec des modules et Apps Script.',
        es: 'Sheets se conecta a datos externos como BigQuery con Connected Sheets y se amplía con complementos y Apps Script.',
      },
      b: {
        en: 'Odoo ties inventory to accounting with automated valuation and to purchasing with automated replenishment.',
        fr: "Odoo relie l'inventaire à la comptabilité par une valorisation automatique et aux achats par un réapprovisionnement automatique.",
        es: 'Odoo vincula el inventario con la contabilidad mediante valoración automática y con compras mediante reabastecimiento automático.',
      },
      sources: [SHEETS_PRODUCT, ODOO_INVENTORY],
      asOf: '2026-11-12',
    },
  ],
  copy: {
    en: {
      title: 'Spreadsheets vs an ERP for running operations',
      short: 'When spreadsheets still do the job, and when one connected system is worth it.',
      intro:
        'Spreadsheets tend to fit a small team with simple, stable processes. An ERP tends to fit when several people, locations or steps depend on the same numbers and the copies start to disagree. There is no single winner; it depends on where the business is today.',
      situations: [
        { label: 'Small team, one location, simple stock', verdict: 'Spreadsheets tend to fit, because they are flexible and already known.', why: 'When a few people own the files and the steps rarely change, a well-kept sheet is cheap and fast. The key is clear ownership of each file.' },
        { label: 'Several files that must agree every day', verdict: 'An ERP tends to fit, because orders, stock and accounting share one record.', why: 'When sales, purchasing and finance each keep their own copy, time goes into reconciling them. One system of record removes that step.' },
        { label: 'Multiple warehouses, lots or serial numbers', verdict: 'An ERP tends to fit, because this tracking is built in.', why: 'Lot and serial tracking across locations is hard to keep accurate by hand. ERP inventory modules handle it as part of each transaction.' },
        { label: 'Processes that differ by person', verdict: 'Neither yet; settle the process first.', why: 'An ERP will encode whatever process you give it. Agree on the steps and owners, then choose.' },
      ],
      framing: [
        'What decides this is not file size. It is how many people and steps depend on the same numbers, and how much time goes into checking that copies agree. If month-end means chasing versions of a sheet, or stock counts never match the books, the cost is already there; it is just hidden in staff hours.',
        'The hidden costs of an ERP sit around the licence. Ask about implementation, which some vendors state is not included in plan prices, and whether you will work with a partner. Ask what data migration involves: cleaning item lists, customers and open balances from your sheets takes real time. Ask about integrations with your store, bank and shipping tools, and about training. Spreadsheets have hidden costs too: manual rework, errors from copied formulas, and knowledge that leaves with one person.',
        'Questions for any ERP vendor: what is included in the plan, and what needs a partner or add-on? How do we move our current data in? How do roles and permissions work? Can we keep using Excel for reporting? Questions for yourself: which sheets are the real source of truth, who owns them, and what breaks if that person is away?',
      ],
      faq: [
        { q: 'At what size should we move off spreadsheets?', a: 'There is no fixed size. The usual signal is time spent reconciling copies, stock that does not match the books, or one person being the only one who understands the file.' },
        { q: 'Can we keep using Excel with an ERP?', a: 'Often, yes. Microsoft states that Business Central works with Excel, and many ERPs export data for reporting in a spreadsheet.' },
        { q: 'Is an ERP only for large companies?', a: 'No. Several vendors publish per-user pricing aimed at smaller teams, and Odoo offers a free one-app plan. The bigger cost is usually setup and data cleanup.' },
      ],
    },
    fr: {
      title: 'Tableurs ou ERP pour gérer vos opérations',
      short: "Quand les tableurs suffisent encore, et quand un système unique en vaut la peine.",
      intro:
        "Les tableurs conviennent souvent à une petite équipe aux processus simples et stables. Un ERP convient souvent quand plusieurs personnes, sites ou étapes dépendent des mêmes chiffres et que les copies commencent à diverger. Il n'y a pas de gagnant unique; tout dépend de l'entreprise aujourd'hui.",
      situations: [
        { label: 'Petite équipe, un site, stock simple', verdict: 'Les tableurs conviennent souvent, car ils sont souples et déjà connus.', why: "Quand quelques personnes gèrent les fichiers et que les étapes changent peu, une feuille bien tenue est économique et rapide. L'essentiel est un responsable clair pour chaque fichier." },
        { label: 'Plusieurs fichiers qui doivent concorder chaque jour', verdict: 'Un ERP convient souvent, car commandes, stock et comptabilité partagent un même registre.', why: "Quand ventes, achats et finances gardent chacun leur copie, le temps passe à les rapprocher. Un système de référence unique supprime cette étape." },
        { label: 'Plusieurs entrepôts, lots ou numéros de série', verdict: 'Un ERP convient souvent, car ce suivi est intégré.', why: "Le suivi des lots et numéros de série sur plusieurs sites est difficile à tenir à la main. Les modules d'inventaire ERP le gèrent à chaque transaction." },
        { label: 'Des processus qui varient selon la personne', verdict: "Ni l'un ni l'autre pour l'instant; fixez d'abord le processus.", why: "Un ERP reproduit le processus qu'on lui donne. Entendez-vous sur les étapes et les responsables, puis choisissez." },
      ],
      framing: [
        "Ce qui tranche, ce n'est pas la taille des fichiers. C'est le nombre de personnes et d'étapes qui dépendent des mêmes chiffres, et le temps passé à vérifier que les copies concordent. Si la fin de mois consiste à courir après des versions de feuille, ou si les stocks ne concordent jamais avec les livres, le coût existe déjà; il est caché dans les heures du personnel.",
        "Les coûts cachés d'un ERP entourent la licence. Demandez ce qu'il en est de l'implantation, que certains éditeurs excluent de leurs prix, et si vous travaillerez avec un partenaire. Demandez ce qu'implique la migration des données : nettoyer les listes d'articles, de clients et les soldes ouverts prend du temps. Demandez les intégrations avec votre boutique, votre banque et vos outils d'expédition, et la formation. Les tableurs ont aussi des coûts cachés : reprises manuelles, erreurs de formules copiées et savoir qui part avec une seule personne.",
        "Questions pour tout éditeur d'ERP : qu'est-ce qui est inclus, et qu'est-ce qui exige un partenaire ou un module? Comment importer nos données actuelles? Comment fonctionnent les rôles et permissions? Peut-on garder Excel pour les rapports? Questions pour vous : quelles feuilles sont la vraie source de vérité, qui en est responsable, et que se passe-t-il si cette personne est absente?",
      ],
      faq: [
        { q: 'À quelle taille faut-il quitter les tableurs?', a: "Il n'y a pas de taille fixe. Le signal habituel est le temps passé à rapprocher des copies, des stocks qui ne concordent pas avec les livres, ou une seule personne qui comprend le fichier." },
        { q: 'Peut-on garder Excel avec un ERP?', a: "Souvent, oui. Microsoft indique que Business Central fonctionne avec Excel, et beaucoup d'ERP exportent des données pour les rapports dans un tableur." },
        { q: 'Un ERP est-il réservé aux grandes entreprises?', a: "Non. Plusieurs éditeurs publient des prix par utilisateur adaptés aux petites équipes, et Odoo offre un forfait gratuit à une application. Le coût principal est souvent la mise en place et le nettoyage des données." },
      ],
    },
    es: {
      title: 'Hojas de cálculo o un ERP para gestionar sus operaciones',
      short: 'Cuándo las hojas de cálculo todavía bastan y cuándo vale la pena un sistema conectado.',
      intro:
        'Las hojas de cálculo suelen encajar en un equipo pequeño con procesos simples y estables. Un ERP suele encajar cuando varias personas, sedes o pasos dependen de los mismos números y las copias empiezan a no coincidir. No hay un ganador único; depende de dónde está el negocio hoy.',
      situations: [
        { label: 'Equipo pequeño, una sede, inventario simple', verdict: 'Las hojas de cálculo suelen encajar, porque son flexibles y ya se conocen.', why: 'Cuando pocas personas manejan los archivos y los pasos casi no cambian, una hoja bien llevada es barata y rápida. La clave es un responsable claro para cada archivo.' },
        { label: 'Varios archivos que deben coincidir cada día', verdict: 'Un ERP suele encajar, porque pedidos, inventario y contabilidad comparten un solo registro.', why: 'Cuando ventas, compras y finanzas guardan cada uno su copia, el tiempo se va en conciliarlas. Un sistema de registro único elimina ese paso.' },
        { label: 'Varios almacenes, lotes o números de serie', verdict: 'Un ERP suele encajar, porque ese seguimiento viene integrado.', why: 'El seguimiento de lotes y series entre sedes es difícil de mantener a mano. Los módulos de inventario de un ERP lo hacen en cada transacción.' },
        { label: 'Procesos que cambian según la persona', verdict: 'Ninguno todavía; primero defina el proceso.', why: 'Un ERP reproduce el proceso que usted le dé. Acuerden los pasos y responsables, y luego elijan.' },
      ],
      framing: [
        'Lo que decide no es el tamaño del archivo. Es cuántas personas y pasos dependen de los mismos números y cuánto tiempo se va en verificar que las copias coincidan. Si el cierre de mes significa perseguir versiones de una hoja, o el inventario nunca cuadra con los libros, el costo ya existe; solo está oculto en horas de personal.',
        'Los costos ocultos de un ERP están alrededor de la licencia. Pregunte por la implementación, que algunos proveedores excluyen de sus precios, y si trabajará con un socio. Pregunte qué implica la migración de datos: limpiar listas de artículos, clientes y saldos abiertos toma tiempo. Pregunte por integraciones con su tienda, banco y herramientas de envío, y por la capacitación. Las hojas de cálculo también tienen costos ocultos: retrabajo manual, errores de fórmulas copiadas y conocimiento que se va con una sola persona.',
        'Preguntas para cualquier proveedor de ERP: ¿qué incluye el plan y qué requiere un socio o complemento? ¿Cómo migramos nuestros datos actuales? ¿Cómo funcionan los roles y permisos? ¿Podemos seguir usando Excel para informes? Preguntas para usted: ¿qué hojas son la verdadera fuente de verdad, quién es responsable y qué falla si esa persona no está?',
      ],
      faq: [
        { q: '¿A qué tamaño conviene dejar las hojas de cálculo?', a: 'No hay un tamaño fijo. La señal habitual es el tiempo dedicado a conciliar copias, un inventario que no cuadra con los libros o una sola persona que entiende el archivo.' },
        { q: '¿Podemos seguir usando Excel con un ERP?', a: 'A menudo, sí. Microsoft indica que Business Central funciona con Excel, y muchos ERP exportan datos para informes en una hoja de cálculo.' },
        { q: '¿Un ERP es solo para empresas grandes?', a: 'No. Varios proveedores publican precios por usuario pensados para equipos pequeños, y Odoo ofrece un plan gratuito de una app. El costo mayor suele ser la puesta en marcha y la limpieza de datos.' },
      ],
    },
  },
}
