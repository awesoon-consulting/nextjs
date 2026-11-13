import type { Comparison } from './types'

const HS_PRICING = { label: 'HubSpot CRM pricing', url: 'https://www.hubspot.com/pricing/crm' }
const HS_CRM = { label: 'HubSpot CRM product page', url: 'https://www.hubspot.com/products/crm' }
const HS_MARKET = { label: 'HubSpot App Marketplace', url: 'https://ecosystem.hubspot.com/marketplace/apps' }
const SF_PRICING = { label: 'Salesforce Sales Cloud pricing', url: 'https://www.salesforce.com/sales/pricing/' }
const SF_SMB = { label: 'Salesforce small business', url: 'https://www.salesforce.com/small-business/' }
const SF_EXCHANGE = { label: 'Salesforce AgentExchange (formerly AppExchange)', url: 'https://appexchange.salesforce.com/' }
const AS_OF = '2026-11-12'

export const COMPARE_HUBSPOT_VS_SALESFORCE: Comparison = {
  slug: 'hubspot-vs-salesforce',
  a: 'HubSpot',
  b: 'Salesforce',
  hub: '/erp-crm',
  relatedTerms: ['crm', 'sales-pipeline', 'marketing-automation', 'crm-adoption', 'data-migration', 'duplicate-records'],
  checked: AS_OF,
  facts: [
    {
      area: { en: 'Free plan', fr: 'Forfait gratuit', es: 'Plan gratuito' },
      a: {
        en: 'Free CRM for up to 2 users, no credit card, described as having no expiration date.',
        fr: 'CRM gratuit pour 2 utilisateurs au plus, sans carte de crédit, présenté comme sans date d\'expiration.',
        es: 'CRM gratuito para hasta 2 usuarios, sin tarjeta de crédito, descrito como sin fecha de vencimiento.',
      },
      b: {
        en: 'Pricing page lists a Free Suite at $0 per user per month.',
        fr: 'La page de prix indique une Free Suite à 0 $ par utilisateur par mois.',
        es: 'La página de precios muestra una Free Suite a 0 $ por usuario al mes.',
      },
      sources: [HS_PRICING, HS_CRM, SF_PRICING],
      asOf: AS_OF,
    },
    {
      area: { en: 'Pricing model', fr: 'Modèle de prix', es: 'Modelo de precios' },
      a: {
        en: 'Publishes per-seat prices for Starter; higher tiers go through sales.',
        fr: 'Publie des prix par siège pour Starter; les niveaux supérieurs passent par les ventes.',
        es: 'Publica precios por puesto para Starter; los niveles superiores pasan por ventas.',
      },
      b: {
        en: 'Publishes per-user monthly prices for Starter, Pro, Core and Advanced; Max is contact us.',
        fr: 'Publie des prix mensuels par utilisateur pour Starter, Pro, Core et Advanced; Max se fait sur demande.',
        es: 'Publica precios mensuales por usuario para Starter, Pro, Core y Advanced; Max es bajo consulta.',
      },
      sources: [HS_PRICING, SF_PRICING],
      asOf: AS_OF,
    },
    {
      area: { en: 'Billing terms', fr: 'Facturation', es: 'Facturación' },
      a: {
        en: 'Starter can be paid month to month or annually, with a lower rate for annual.',
        fr: 'Starter se paie au mois ou à l\'année, avec un tarif plus bas à l\'année.',
        es: 'Starter se paga mes a mes o anualmente, con una tarifa menor si es anual.',
      },
      b: {
        en: 'Starter Suite is billed monthly or annually; Pro Suite and above are billed annually.',
        fr: 'Starter Suite est facturée au mois ou à l\'année; Pro Suite et plus sont facturées à l\'année.',
        es: 'Starter Suite se factura mensual o anualmente; Pro Suite y superiores se facturan anualmente.',
      },
      sources: [HS_PRICING, SF_PRICING],
      asOf: AS_OF,
    },
    {
      area: { en: 'Trying it first', fr: 'Essai', es: 'Prueba' },
      a: {
        en: 'Start on the free plan with no credit card.',
        fr: 'On commence avec le forfait gratuit, sans carte de crédit.',
        es: 'Se empieza con el plan gratuito, sin tarjeta de crédito.',
      },
      b: {
        en: 'Free trials offered for Starter through Advanced editions.',
        fr: 'Essais gratuits offerts pour les éditions Starter à Advanced.',
        es: 'Pruebas gratuitas para las ediciones Starter a Advanced.',
      },
      sources: [HS_CRM, SF_PRICING],
      asOf: AS_OF,
    },
    {
      area: { en: 'Scope', fr: 'Portée', es: 'Alcance' },
      a: {
        en: 'Marketing, sales, service, content and data hubs on one platform.',
        fr: 'Modules marketing, ventes, service, contenu et données sur une seule plateforme.',
        es: 'Módulos de marketing, ventas, servicio, contenido y datos en una sola plataforma.',
      },
      b: {
        en: 'Small business suites bundle sales, service and marketing with guided onboarding.',
        fr: 'Les suites pour petites entreprises regroupent ventes, service et marketing avec une mise en route guidée.',
        es: 'Las suites para pequeñas empresas agrupan ventas, servicio y marketing con incorporación guiada.',
      },
      sources: [HS_CRM, SF_SMB],
      asOf: AS_OF,
    },
    {
      area: { en: 'App marketplace', fr: 'Boutique d\'applications', es: 'Tienda de aplicaciones' },
      a: {
        en: 'HubSpot App Marketplace for third-party apps, connectors and partners.',
        fr: 'HubSpot App Marketplace pour applications tierces, connecteurs et partenaires.',
        es: 'HubSpot App Marketplace para aplicaciones de terceros, conectores y socios.',
      },
      b: {
        en: 'AppExchange, now renamed AgentExchange.',
        fr: 'AppExchange, désormais renommé AgentExchange.',
        es: 'AppExchange, ahora renombrado AgentExchange.',
      },
      sources: [HS_MARKET, SF_EXCHANGE],
      asOf: AS_OF,
    },
  ],
  copy: {
    en: {
      title: 'HubSpot vs Salesforce for small teams',
      short: 'Which CRM fits a small team depends on who uses it daily and how much you expect to customise.',
      intro: 'If marketing and sales share one small team and want to start quickly, HubSpot often fits. If you expect complex processes, many custom rules or a larger sales org soon, Salesforce often fits. There is no single winner; the right pick depends on your team and your process.',
      situations: [
        { label: 'Under 10 people, marketing and sales together', verdict: 'HubSpot tends to fit, because the free plan and shared hubs let you start without a project.', why: 'Small teams rarely have an admin to run the system. A tool people can set up themselves is more likely to get used.' },
        { label: 'Complex sales process with many approval steps', verdict: 'Salesforce tends to fit, because it is built to be shaped around detailed processes.', why: 'Multi-step approvals, territories and custom records are common in its larger editions. Budget for an admin or partner to set it up well.' },
        { label: 'Growing fast toward a large sales team', verdict: 'Either can work; compare the cost of the tier you will need in two years, not today.', why: 'Both publish prices, and the jump between tiers is where costs change. Price the future team size before you sign.' },
        { label: 'Nobody updates the current CRM', verdict: 'Neither fixes this; agree on the sales process and who owns the data first.', why: 'Low adoption is usually a process problem, not a tool problem. A new CRM on a messy process brings the mess with it.' },
      ],
      framing: [
        'What usually decides this is who will live in the CRM every day and who will maintain it. HubSpot is built to be set up by the people using it. Salesforce rewards a team that has, or will pay for, an admin who shapes it around a detailed process. Be honest about which team you are.',
        'Ask about costs beyond the licence. Implementation and partner fees, data migration from spreadsheets or an old CRM, cleaning duplicate records, and integrations with your accounting or ERP system can all cost more than the first year of seats. Also check which features sit in which tier, since a needed feature can move you up a level.',
        'Questions to ask both vendors: what will this cost at twice our current team size? Which features we listed are in the tier you are quoting? How do we export all our data if we leave? Who sets this up, and what does that cost? How does it connect to the accounting and order systems we already run?',
      ],
      faq: [
        { q: 'Is HubSpot really free?', a: 'HubSpot publishes a free CRM for up to 2 users with core tools. Paid features and more seats cost extra, so check the tier you will actually need.' },
        { q: 'Is Salesforce too big for a small team?', a: 'Salesforce sells suites aimed at small teams. The bigger question is whether you have someone to configure and maintain it.' },
        { q: 'Can we switch later?', a: 'Yes, but migration takes work. Ask each vendor how to export all records and history before you commit.' },
      ],
    },
    fr: {
      title: 'HubSpot ou Salesforce pour une petite équipe',
      short: 'Le bon CRM pour une petite équipe dépend de qui l\'utilise chaque jour et du niveau de personnalisation attendu.',
      intro: 'Si le marketing et les ventes forment une petite équipe qui veut démarrer vite, HubSpot convient souvent. Si vous prévoyez des processus complexes, beaucoup de règles sur mesure ou une grande équipe de vente bientôt, Salesforce convient souvent. Il n\'y a pas de gagnant unique; le bon choix dépend de votre équipe et de votre processus.',
      situations: [
        { label: 'Moins de 10 personnes, marketing et ventes ensemble', verdict: 'HubSpot convient souvent, car le forfait gratuit et les modules partagés permettent de démarrer sans projet.', why: 'Les petites équipes ont rarement un administrateur pour gérer le système. Un outil que les gens configurent eux-mêmes a plus de chances d\'être utilisé.' },
        { label: 'Processus de vente complexe avec plusieurs approbations', verdict: 'Salesforce convient souvent, car il est conçu pour s\'adapter à des processus détaillés.', why: 'Approbations en plusieurs étapes, territoires et enregistrements sur mesure sont courants dans ses éditions supérieures. Prévoyez un administrateur ou un partenaire pour bien le configurer.' },
        { label: 'Croissance rapide vers une grande équipe de vente', verdict: 'Les deux peuvent convenir; comparez le coût du niveau requis dans deux ans, pas aujourd\'hui.', why: 'Les deux publient leurs prix, et c\'est le passage d\'un niveau à l\'autre qui change les coûts. Chiffrez la taille future de l\'équipe avant de signer.' },
        { label: 'Personne ne met à jour le CRM actuel', verdict: 'Aucun ne règle ce problème; entendez-vous d\'abord sur le processus de vente et sur qui gère les données.', why: 'Une faible adoption vient surtout du processus, pas de l\'outil. Un nouveau CRM sur un processus désordonné garde le désordre.' },
      ],
      framing: [
        'Ce qui tranche, c\'est qui vivra dans le CRM chaque jour et qui l\'entretiendra. HubSpot est conçu pour être configuré par ses utilisateurs. Salesforce récompense une équipe qui a, ou paiera, un administrateur pour l\'adapter à un processus détaillé. Soyez honnête sur le type d\'équipe que vous êtes.',
        'Demandez les coûts au delà de la licence. Mise en place et honoraires de partenaire, migration depuis des tableurs ou un ancien CRM, nettoyage des doublons et intégrations avec la comptabilité ou l\'ERP peuvent coûter plus que la première année de licences. Vérifiez aussi quelles fonctions sont dans quel niveau, car une fonction nécessaire peut vous faire monter d\'un cran.',
        'Questions à poser aux deux éditeurs : combien cela coûtera avec une équipe deux fois plus grande? Les fonctions demandées sont elles dans le niveau proposé? Comment exporter toutes nos données si nous partons? Qui fait la configuration, et à quel coût? Comment cela se connecte à nos systèmes de comptabilité et de commandes?',
      ],
      faq: [
        { q: 'HubSpot est il vraiment gratuit?', a: 'HubSpot publie un CRM gratuit pour 2 utilisateurs avec les outils de base. Les fonctions payantes et les sièges supplémentaires coûtent plus, alors vérifiez le niveau dont vous aurez besoin.' },
        { q: 'Salesforce est il trop gros pour une petite équipe?', a: 'Salesforce vend des suites pensées pour les petites équipes. La vraie question est de savoir si quelqu\'un pourra le configurer et l\'entretenir.' },
        { q: 'Peut on changer plus tard?', a: 'Oui, mais la migration demande du travail. Demandez à chaque éditeur comment exporter tous les enregistrements et l\'historique avant de vous engager.' },
      ],
    },
    es: {
      title: 'HubSpot o Salesforce para equipos pequeños',
      short: 'El CRM adecuado para un equipo pequeño depende de quién lo usa cada día y de cuánto piensa personalizarlo.',
      intro: 'Si marketing y ventas son un equipo pequeño que quiere empezar rápido, HubSpot suele encajar. Si prevé procesos complejos, muchas reglas a medida o un equipo de ventas grande pronto, Salesforce suele encajar. No hay un ganador único; la elección depende de su equipo y su proceso.',
      situations: [
        { label: 'Menos de 10 personas, marketing y ventas juntos', verdict: 'HubSpot suele encajar, porque el plan gratuito y los módulos compartidos permiten empezar sin un proyecto.', why: 'Los equipos pequeños rara vez tienen un administrador para el sistema. Una herramienta que la gente configura sola tiene más probabilidad de usarse.' },
        { label: 'Proceso de venta complejo con varias aprobaciones', verdict: 'Salesforce suele encajar, porque está hecho para adaptarse a procesos detallados.', why: 'Aprobaciones en varios pasos, territorios y registros a medida son comunes en sus ediciones mayores. Presupueste un administrador o socio para configurarlo bien.' },
        { label: 'Crecimiento rápido hacia un gran equipo de ventas', verdict: 'Ambos pueden servir; compare el costo del nivel que necesitará en dos años, no hoy.', why: 'Ambos publican precios, y el salto entre niveles es donde cambian los costos. Calcule el tamaño futuro del equipo antes de firmar.' },
        { label: 'Nadie actualiza el CRM actual', verdict: 'Ninguno lo resuelve; acuerde primero el proceso de ventas y quién es dueño de los datos.', why: 'La baja adopción suele ser un problema de proceso, no de herramienta. Un CRM nuevo sobre un proceso desordenado hereda el desorden.' },
      ],
      framing: [
        'Lo que suele decidir es quién vivirá en el CRM cada día y quién lo mantendrá. HubSpot está hecho para que lo configuren sus propios usuarios. Salesforce premia a un equipo que tiene, o pagará, un administrador que lo adapte a un proceso detallado. Sea honesto sobre qué tipo de equipo es.',
        'Pregunte por los costos más allá de la licencia. Implementación y honorarios de socios, migración desde hojas de cálculo o un CRM antiguo, limpieza de duplicados e integraciones con contabilidad o ERP pueden costar más que el primer año de licencias. Revise también qué funciones hay en cada nivel, porque una función necesaria puede subirle de nivel.',
        'Preguntas para ambos proveedores: ¿cuánto costará con el doble de equipo? ¿Las funciones que pedimos están en el nivel cotizado? ¿Cómo exportamos todos los datos si nos vamos? ¿Quién lo configura y cuánto cuesta? ¿Cómo se conecta con los sistemas de contabilidad y pedidos que ya usamos?',
      ],
      faq: [
        { q: '¿HubSpot es realmente gratis?', a: 'HubSpot publica un CRM gratuito para hasta 2 usuarios con herramientas básicas. Las funciones de pago y más puestos cuestan aparte, así que revise el nivel que realmente necesitará.' },
        { q: '¿Salesforce es demasiado grande para un equipo pequeño?', a: 'Salesforce vende suites pensadas para equipos pequeños. La pregunta real es si tiene a alguien que lo configure y mantenga.' },
        { q: '¿Podemos cambiar después?', a: 'Sí, pero la migración requiere trabajo. Pregunte a cada proveedor cómo exportar todos los registros y el historial antes de comprometerse.' },
      ],
    },
  },
}
