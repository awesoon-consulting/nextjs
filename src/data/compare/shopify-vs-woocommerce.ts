import type { Comparison } from './types'

const SH_PRICING = { label: 'Shopify pricing', url: 'https://www.shopify.com/pricing' }
const SH_APPS = { label: 'Shopify App Store', url: 'https://apps.shopify.com/' }
const SH_API = { label: 'Shopify GraphQL Admin API', url: 'https://shopify.dev/docs/api/admin-graphql' }
const SH_HOOKS = { label: 'Shopify webhooks docs', url: 'https://shopify.dev/docs/apps/build/webhooks' }
const WC_HOME = { label: 'WooCommerce home', url: 'https://woocommerce.com/' }
const WC_HOSTING = { label: 'WooCommerce hosting', url: 'https://woocommerce.com/hosting-solutions/' }
const WC_API = { label: 'WooCommerce REST API docs', url: 'https://developer.woocommerce.com/docs/apis/rest-api/' }
const WC_REF = { label: 'WooCommerce REST API reference', url: 'https://woocommerce.github.io/woocommerce-rest-api-docs/' }
const AS_OF = '2026-11-12'

export const COMPARE_SHOPIFY_VS_WOOCOMMERCE: Comparison = {
  slug: 'shopify-vs-woocommerce',
  a: 'Shopify',
  b: 'WooCommerce',
  hub: '/software-development',
  relatedTerms: ['saas', 'api', 'webhook', 'system-of-record', 'rate-limit', 'erp'],
  checked: AS_OF,
  facts: [
    {
      area: { en: 'Platform model', fr: 'Modèle de plateforme', es: 'Modelo de plataforma' },
      a: {
        en: 'Hosted commerce platform sold as monthly plans.',
        fr: 'Plateforme de commerce hébergée, vendue en forfaits mensuels.',
        es: 'Plataforma de comercio alojada, vendida en planes mensuales.',
      },
      b: {
        en: 'Open source commerce platform for WordPress.',
        fr: 'Plateforme de commerce libre pour WordPress.',
        es: 'Plataforma de comercio de código abierto para WordPress.',
      },
      sources: [SH_PRICING, WC_HOME],
      asOf: AS_OF,
    },
    {
      area: { en: 'Hosting', fr: 'Hébergement', es: 'Alojamiento' },
      a: {
        en: 'Hosting is included in every plan.',
        fr: 'L\'hébergement est inclus dans chaque forfait.',
        es: 'El alojamiento está incluido en todos los planes.',
      },
      b: {
        en: 'You choose your own host; WooCommerce lists recommended hosts.',
        fr: 'Vous choisissez votre hébergeur; WooCommerce en recommande plusieurs.',
        es: 'Usted elige su proveedor de alojamiento; WooCommerce recomienda varios.',
      },
      sources: [SH_PRICING, WC_HOSTING],
      asOf: AS_OF,
    },
    {
      area: { en: 'Pricing model', fr: 'Modèle de prix', es: 'Modelo de precios' },
      a: {
        en: 'Publishes plan prices (Basic, Grow, Advanced, Plus), lower with yearly billing.',
        fr: 'Publie les prix des forfaits (Basic, Grow, Advanced, Plus), plus bas avec facturation annuelle.',
        es: 'Publica precios de planes (Basic, Grow, Advanced, Plus), más bajos con facturación anual.',
      },
      b: {
        en: 'Core download is free; hosting and extensions are separate costs.',
        fr: 'Le téléchargement de base est gratuit; l\'hébergement et les extensions sont des coûts à part.',
        es: 'La descarga base es gratuita; alojamiento y extensiones son costos aparte.',
      },
      sources: [SH_PRICING, WC_HOME, WC_HOSTING],
      asOf: AS_OF,
    },
    {
      area: { en: 'Payments', fr: 'Paiements', es: 'Pagos' },
      a: {
        en: 'Shopify Payments included; third-party providers add a transaction fee from 2% (Basic) to 0.2% (Plus).',
        fr: 'Shopify Payments inclus; les fournisseurs tiers ajoutent des frais de transaction de 2 % (Basic) à 0,2 % (Plus).',
        es: 'Shopify Payments incluido; los proveedores externos añaden una comisión de 2 % (Basic) a 0,2 % (Plus).',
      },
      b: {
        en: 'Promotes choice of any payment provider.',
        fr: 'Met de l\'avant le libre choix du fournisseur de paiement.',
        es: 'Promueve la libre elección del proveedor de pagos.',
      },
      sources: [SH_PRICING, WC_HOME],
      asOf: AS_OF,
    },
    {
      area: { en: 'Trying it', fr: 'Essai', es: 'Prueba' },
      a: {
        en: '3 days free, then CA$1 per month for 3 months, no credit card for the trial.',
        fr: '3 jours gratuits, puis 1 $ CA par mois pendant 3 mois, sans carte de crédit pour l\'essai.',
        es: '3 días gratis, luego 1 CA$ al mes durante 3 meses, sin tarjeta de crédito para la prueba.',
      },
      b: {
        en: 'Free to download and install on your own host.',
        fr: 'Téléchargement gratuit, à installer chez votre hébergeur.',
        es: 'Descarga gratuita para instalar en su propio alojamiento.',
      },
      sources: [SH_PRICING, WC_HOME],
      asOf: AS_OF,
    },
    {
      area: { en: 'Add-ons', fr: 'Modules complémentaires', es: 'Complementos' },
      a: {
        en: 'Shopify App Store lists over 16,000 apps.',
        fr: 'La Shopify App Store compte plus de 16 000 applications.',
        es: 'La Shopify App Store ofrece más de 16 000 aplicaciones.',
      },
      b: {
        en: 'Marketplace of hundreds of extensions and themes.',
        fr: 'Boutique de centaines d\'extensions et de thèmes.',
        es: 'Tienda con cientos de extensiones y temas.',
      },
      sources: [SH_APPS, WC_HOME],
      asOf: AS_OF,
    },
    {
      area: { en: 'API for ERP integration', fr: 'API pour intégrer un ERP', es: 'API para integrar un ERP' },
      a: {
        en: 'GraphQL Admin API, rate limited by calculated query cost; bulk operations for large data.',
        fr: 'API Admin GraphQL, limitée selon le coût calculé des requêtes; opérations en masse pour les gros volumes.',
        es: 'API Admin GraphQL, limitada por el costo calculado de cada consulta; operaciones masivas para grandes volúmenes.',
      },
      b: {
        en: 'REST API (v3) with endpoints for orders, products and customers.',
        fr: 'API REST (v3) avec des points d\'accès pour commandes, produits et clients.',
        es: 'API REST (v3) con endpoints para pedidos, productos y clientes.',
      },
      sources: [SH_API, WC_API, WC_REF],
      asOf: AS_OF,
    },
    {
      area: { en: 'Webhooks', fr: 'Webhooks', es: 'Webhooks' },
      a: {
        en: 'Apps can subscribe to event topics such as order creation.',
        fr: 'Les applications peuvent s\'abonner à des événements comme la création de commande.',
        es: 'Las aplicaciones pueden suscribirse a eventos como la creación de pedidos.',
      },
      b: {
        en: 'REST API includes endpoints to create and manage webhooks by topic.',
        fr: 'L\'API REST permet de créer et gérer des webhooks par sujet.',
        es: 'La API REST permite crear y gestionar webhooks por tema.',
      },
      sources: [SH_HOOKS, WC_REF],
      asOf: AS_OF,
    },
  ],
  copy: {
    en: {
      title: 'Shopify vs WooCommerce when you run an ERP',
      short: 'With an ERP behind your store, the choice turns on who runs the stack and how orders and stock sync.',
      intro: 'If you want hosting, security and updates handled for you, Shopify often fits. If you already run WordPress and want full control over code and hosting, WooCommerce often fits. There is no single winner; with an ERP in the picture, the integration matters more than the storefront.',
      situations: [
        { label: 'No in-house developer, want the store to just run', verdict: 'Shopify tends to fit, because hosting and platform updates are part of the plan.', why: 'Someone has to patch and host a store. With Shopify that is the vendor; with WooCommerce it is you or your host.' },
        { label: 'Content-heavy site already on WordPress', verdict: 'WooCommerce tends to fit, because the store lives inside the site you already run.', why: 'Keeping content and commerce in one WordPress install avoids a second system. You keep control of hosting and code.' },
        { label: 'ERP is the system of record for stock and pricing', verdict: 'Either can work; choose based on the connector or middleware your ERP supports.', why: 'Both offer APIs and webhooks for orders. The quality of the ERP side connector usually decides how smooth sync feels.' },
        { label: 'Stock counts never match today', verdict: 'Neither fixes this; decide which system owns stock and fix the sync rules first.', why: 'Mismatched stock usually comes from unclear ownership of data. A new storefront will copy the same errors.' },
      ],
      framing: [
        'When an ERP runs behind the store, what decides this is the integration, not the theme. Decide which system owns products, prices, stock and customers, and which direction each one syncs. Then ask whether a proven connector exists between your ERP and each platform, or whether you need middleware or custom work.',
        'Ask about hidden costs. On Shopify, check plan level, app subscriptions and payment fees if you use a third-party provider. On WooCommerce, check hosting, paid extensions, security and the developer time to keep WordPress and plugins updated. On both, budget for data migration, mapping SKUs and testing order sync before go live.',
        'Questions to ask both: which ERP connectors do you support, and who maintains them? How are API limits handled during busy sales periods? What happens to an order if the sync fails? Who do we call when the store and the ERP disagree?',
      ],
      faq: [
        { q: 'Is WooCommerce free?', a: 'The core software is a free download. Hosting, paid extensions and upkeep still cost money and time.' },
        { q: 'Does Shopify connect to ERPs?', a: 'Shopify offers an Admin API and webhooks, and its app store lists integrations. Check that a connector exists for your specific ERP.' },
        { q: 'Which syncs better with an ERP?', a: 'Both expose APIs for orders and products. The connector and the data rules you set usually matter more than the platform.' },
      ],
    },
    fr: {
      title: 'Shopify ou WooCommerce quand vous avez un ERP',
      short: 'Avec un ERP derrière la boutique, le choix dépend de qui gère la technique et de la synchronisation des commandes et des stocks.',
      intro: 'Si vous voulez que l\'hébergement, la sécurité et les mises à jour soient gérés pour vous, Shopify convient souvent. Si vous utilisez déjà WordPress et voulez garder le contrôle du code et de l\'hébergement, WooCommerce convient souvent. Il n\'y a pas de gagnant unique; avec un ERP, l\'intégration compte plus que la vitrine.',
      situations: [
        { label: 'Pas de développeur à l\'interne, la boutique doit simplement fonctionner', verdict: 'Shopify convient souvent, car l\'hébergement et les mises à jour font partie du forfait.', why: 'Quelqu\'un doit héberger et mettre à jour une boutique. Avec Shopify, c\'est l\'éditeur; avec WooCommerce, c\'est vous ou votre hébergeur.' },
        { label: 'Site riche en contenu déjà sur WordPress', verdict: 'WooCommerce convient souvent, car la boutique vit dans le site que vous gérez déjà.', why: 'Garder contenu et commerce dans un seul WordPress évite un deuxième système. Vous gardez le contrôle de l\'hébergement et du code.' },
        { label: 'L\'ERP est la source de vérité pour stocks et prix', verdict: 'Les deux peuvent convenir; choisissez selon le connecteur ou l\'intergiciel que votre ERP prend en charge.', why: 'Les deux offrent des API et des webhooks pour les commandes. La qualité du connecteur côté ERP décide surtout de la fluidité.' },
        { label: 'Les stocks ne concordent jamais aujourd\'hui', verdict: 'Aucun ne règle ce problème; décidez quel système possède les stocks et corrigez d\'abord les règles de synchronisation.', why: 'Les écarts de stock viennent souvent d\'une propriété floue des données. Une nouvelle boutique copiera les mêmes erreurs.' },
      ],
      framing: [
        'Quand un ERP tourne derrière la boutique, c\'est l\'intégration qui tranche, pas le thème. Décidez quel système possède les produits, les prix, les stocks et les clients, et dans quel sens chacun se synchronise. Demandez ensuite s\'il existe un connecteur éprouvé entre votre ERP et chaque plateforme, ou s\'il faut un intergiciel ou du développement sur mesure.',
        'Demandez les coûts cachés. Chez Shopify, vérifiez le niveau de forfait, les abonnements aux applications et les frais si vous utilisez un fournisseur de paiement tiers. Chez WooCommerce, vérifiez l\'hébergement, les extensions payantes, la sécurité et le temps de développeur pour garder WordPress et les extensions à jour. Dans les deux cas, prévoyez la migration des données, l\'arrimage des SKU et les tests de synchronisation avant la mise en ligne.',
        'Questions à poser aux deux : quels connecteurs ERP prenez vous en charge, et qui les entretient? Comment les limites d\'API sont elles gérées en période de pointe? Que devient une commande si la synchronisation échoue? Qui appeler quand la boutique et l\'ERP ne concordent pas?',
      ],
      faq: [
        { q: 'WooCommerce est il gratuit?', a: 'Le logiciel de base se télécharge gratuitement. L\'hébergement, les extensions payantes et l\'entretien coûtent quand même du temps et de l\'argent.' },
        { q: 'Shopify se connecte il aux ERP?', a: 'Shopify offre une API Admin et des webhooks, et sa boutique d\'applications liste des intégrations. Vérifiez qu\'un connecteur existe pour votre ERP.' },
        { q: 'Lequel se synchronise le mieux avec un ERP?', a: 'Les deux exposent des API pour commandes et produits. Le connecteur et vos règles de données comptent généralement plus que la plateforme.' },
      ],
    },
    es: {
      title: 'Shopify o WooCommerce cuando usa un ERP',
      short: 'Con un ERP detrás de la tienda, la elección depende de quién gestiona la tecnología y cómo se sincronizan pedidos y stock.',
      intro: 'Si quiere que el alojamiento, la seguridad y las actualizaciones estén resueltos, Shopify suele encajar. Si ya usa WordPress y quiere control total del código y el alojamiento, WooCommerce suele encajar. No hay un ganador único; con un ERP de por medio, la integración importa más que la tienda.',
      situations: [
        { label: 'Sin desarrollador interno, la tienda solo debe funcionar', verdict: 'Shopify suele encajar, porque el alojamiento y las actualizaciones vienen en el plan.', why: 'Alguien tiene que alojar y actualizar una tienda. Con Shopify es el proveedor; con WooCommerce es usted o su proveedor de alojamiento.' },
        { label: 'Sitio con mucho contenido ya en WordPress', verdict: 'WooCommerce suele encajar, porque la tienda vive dentro del sitio que ya gestiona.', why: 'Tener contenido y comercio en un solo WordPress evita un segundo sistema. Usted mantiene el control del alojamiento y el código.' },
        { label: 'El ERP es el sistema de registro de stock y precios', verdict: 'Ambos pueden servir; elija según el conector o middleware que admita su ERP.', why: 'Ambos ofrecen API y webhooks para pedidos. La calidad del conector del lado del ERP suele decidir lo fluida que es la sincronización.' },
        { label: 'Hoy el stock nunca cuadra', verdict: 'Ninguno lo resuelve; decida qué sistema es dueño del stock y corrija primero las reglas de sincronización.', why: 'Los desajustes de stock suelen venir de no tener claro quién es dueño de los datos. Una tienda nueva copiará los mismos errores.' },
      ],
      framing: [
        'Cuando un ERP funciona detrás de la tienda, lo que decide es la integración, no el tema visual. Decida qué sistema es dueño de productos, precios, stock y clientes, y en qué dirección se sincroniza cada uno. Luego pregunte si existe un conector probado entre su ERP y cada plataforma, o si necesita middleware o desarrollo a medida.',
        'Pregunte por los costos ocultos. En Shopify, revise el nivel del plan, las suscripciones a aplicaciones y las comisiones si usa un proveedor de pagos externo. En WooCommerce, revise alojamiento, extensiones de pago, seguridad y el tiempo de desarrollo para mantener WordPress y los plugins al día. En ambos, presupueste la migración de datos, el mapeo de SKU y las pruebas de sincronización antes del lanzamiento.',
        'Preguntas para ambos: ¿qué conectores de ERP admiten y quién los mantiene? ¿Cómo se manejan los límites de la API en temporadas de muchas ventas? ¿Qué pasa con un pedido si falla la sincronización? ¿A quién llamamos cuando la tienda y el ERP no coinciden?',
      ],
      faq: [
        { q: '¿WooCommerce es gratis?', a: 'El software base se descarga gratis. El alojamiento, las extensiones de pago y el mantenimiento siguen costando tiempo y dinero.' },
        { q: '¿Shopify se conecta con ERP?', a: 'Shopify ofrece una API Admin y webhooks, y su tienda de aplicaciones incluye integraciones. Confirme que existe un conector para su ERP.' },
        { q: '¿Cuál se sincroniza mejor con un ERP?', a: 'Ambos exponen API para pedidos y productos. El conector y las reglas de datos suelen importar más que la plataforma.' },
      ],
    },
  },
}
