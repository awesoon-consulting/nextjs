import type { Comparison } from './types'

const D = '2026-11-12'

const BC_CONSOL = { label: 'Microsoft Learn: Consolidate data from multiple companies', url: 'https://learn.microsoft.com/en-us/dynamics365/business-central/finance-consolidated-company-reporting' }
const BC_WAREHOUSE = { label: 'Microsoft Learn: Configure warehouse processes', url: 'https://learn.microsoft.com/en-us/dynamics365/business-central/warehouse-setup-warehouse' }
const BC_AL = { label: 'Microsoft Learn: Developing extensions in AL', url: 'https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-dev-overview' }
const NS_ONEWORLD = { label: 'NetSuite Help: OneWorld overview', url: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N266701.html' }
const NS_INVENTORY = { label: 'NetSuite Help: Enabling inventory features', url: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_1111112400.html' }
const NS_SUITESCRIPT = { label: 'NetSuite Help: SuiteScript overview', url: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_163726005075.html' }

export const COMPARE_BUSINESS_CENTRAL_VS_NETSUITE: Comparison = {
  slug: 'business-central-vs-netsuite',
  a: 'Microsoft Dynamics 365 Business Central',
  b: 'NetSuite',
  hub: '/erp-crm',
  relatedTerms: ['erp', 'erp-implementation', 'intercompany-transactions', 'warehouse-management-system', 'customization-vs-configuration', 'data-migration'],
  checked: D,
  facts: [
    {
      area: { en: 'Several legal entities', fr: 'Plusieurs entités juridiques', es: 'Varias entidades legales' },
      a: {
        en: 'Each company is a business unit whose ledger entries are transferred into a separate consolidated company, even across environments.',
        fr: 'Chaque société est une unité dont les écritures sont transférées dans une société de consolidation distincte, même entre environnements.',
        es: 'Cada empresa es una unidad cuyos asientos se transfieren a una empresa de consolidación aparte, incluso entre entornos.',
      },
      b: {
        en: 'OneWorld manages multiple subsidiaries in a single account, organized in one hierarchy, with consolidated reports.',
        fr: 'OneWorld gère plusieurs filiales dans un seul compte, organisées en une hiérarchie, avec des rapports consolidés.',
        es: 'OneWorld gestiona varias filiales en una sola cuenta, organizadas en una jerarquía, con informes consolidados.',
      },
      sources: [BC_CONSOL, NS_ONEWORLD],
      asOf: D,
    },
    {
      area: { en: 'Currencies in consolidation', fr: 'Devises en consolidation', es: 'Monedas en la consolidación' },
      a: {
        en: 'Companies with different currencies, fiscal years and charts of accounts can be consolidated, using exchange rates set up for consolidation.',
        fr: 'Des sociétés aux devises, exercices et plans comptables différents peuvent être consolidées, avec des taux de change prévus pour la consolidation.',
        es: 'Se pueden consolidar empresas con monedas, ejercicios y planes de cuentas distintos, usando tipos de cambio definidos para la consolidación.',
      },
      b: {
        en: 'Each subsidiary has its own base currency, and consolidated reports translate results into the parent subsidiary currency.',
        fr: 'Chaque filiale a sa devise de base, et les rapports consolidés convertissent les résultats dans la devise de la filiale mère.',
        es: 'Cada filial tiene su moneda base, y los informes consolidados convierten los resultados a la moneda de la filial matriz.',
      },
      sources: [BC_CONSOL, NS_ONEWORLD],
      asOf: D,
    },
    {
      area: { en: 'Intercompany eliminations', fr: 'Éliminations intersociétés', es: 'Eliminaciones entre empresas' },
      a: {
        en: 'Microsoft describes processing consolidation eliminations as a manual process, supported by an eliminations report.',
        fr: 'Microsoft décrit le traitement des éliminations de consolidation comme un processus manuel, appuyé par un rapport dédié.',
        es: 'Microsoft describe el proceso de eliminaciones de consolidación como manual, con apoyo de un informe de eliminaciones.',
      },
      b: {
        en: 'OneWorld supports transactions between subsidiaries in local and foreign currencies within the same account.',
        fr: 'OneWorld prend en charge les transactions entre filiales en devise locale et étrangère dans le même compte.',
        es: 'OneWorld admite transacciones entre filiales en moneda local y extranjera dentro de la misma cuenta.',
      },
      sources: [BC_CONSOL, NS_ONEWORLD],
      asOf: D,
    },
    {
      area: { en: 'Bins and putaway', fr: 'Emplacements et rangement', es: 'Ubicaciones y ubicación de entrada' },
      a: {
        en: 'Warehouses can use bins, bin types and put-away templates, up to directed put-away and pick where activities follow a strict workflow.',
        fr: 'Les entrepôts peuvent utiliser emplacements, types d\'emplacement et modèles de rangement, jusqu\'au rangement et prélèvement dirigés avec un flux strict.',
        es: 'Los almacenes pueden usar ubicaciones, tipos de ubicación y plantillas de entrada, hasta la ubicación y preparación dirigidas con un flujo estricto.',
      },
      b: {
        en: 'Bin Management tracks where stock sits in the warehouse and shows staff where to pick and where to put received items.',
        fr: 'Bin Management suit où se trouve le stock dans l\'entrepôt et indique au personnel où prélever et où ranger les réceptions.',
        es: 'Bin Management registra dónde está el stock en el almacén e indica al personal dónde recoger y dónde guardar lo recibido.',
      },
      sources: [BC_WAREHOUSE, NS_INVENTORY],
      asOf: D,
    },
    {
      area: { en: 'Picking', fr: 'Préparation de commandes', es: 'Preparación de pedidos' },
      a: {
        en: 'Warehouse setup includes picking by FEFO, so the items that expire first are suggested first.',
        fr: 'La configuration d\'entrepôt inclut le prélèvement FEFO, qui propose d\'abord les articles qui expirent en premier.',
        es: 'La configuración de almacén incluye la preparación FEFO, que sugiere primero los artículos que caducan antes.',
      },
      b: {
        en: 'Warehouse Management uses mobile devices and wave transactions, and needs the SCM Mobile and NetSuite WMS SuiteApps.',
        fr: 'Warehouse Management utilise des appareils mobiles et des vagues, et demande les SuiteApps SCM Mobile et NetSuite WMS.',
        es: 'Warehouse Management usa dispositivos móviles y olas, y requiere las SuiteApps SCM Mobile y NetSuite WMS.',
      },
      sources: [BC_WAREHOUSE, NS_INVENTORY],
      asOf: D,
    },
    {
      area: { en: 'Customization', fr: 'Personnalisation', es: 'Personalización' },
      a: {
        en: 'Extensions are written in AL with Visual Studio Code, and an in-client Designer lets you rearrange and add fields on pages.',
        fr: 'Les extensions s\'écrivent en AL avec Visual Studio Code, et un Designer intégré permet de déplacer et d\'ajouter des champs.',
        es: 'Las extensiones se escriben en AL con Visual Studio Code, y un Designer en el cliente permite mover y añadir campos.',
      },
      b: {
        en: 'SuiteScript is a scripting language for client and server logic used to extend NetSuite and process its data.',
        fr: 'SuiteScript est un langage de script côté client et serveur qui sert à étendre NetSuite et à traiter ses données.',
        es: 'SuiteScript es un lenguaje de scripts de cliente y servidor para ampliar NetSuite y procesar sus datos.',
      },
      sources: [BC_AL, NS_SUITESCRIPT],
      asOf: D,
    },
  ],
  copy: {
    en: {
      title: 'Business Central vs NetSuite for a growing company',
      short: 'How Microsoft Dynamics 365 Business Central and NetSuite fit, by situation, with sourced facts from each vendor.',
      intro: 'There is no single winner. Business Central tends to fit companies already deep in Microsoft tools that want a partner-led setup, while NetSuite tends to fit groups that want many subsidiaries inside one account. The partner and the fit to your process decide more than the product.',
      situations: [
        { label: 'Your team lives in Microsoft 365', verdict: 'Business Central tends to fit, because it sits in the same Microsoft world.', why: 'Sign-in, licences and partners come through Microsoft channels. Developers extend it in AL with Visual Studio Code.' },
        { label: 'Many subsidiaries growing across borders', verdict: 'NetSuite tends to fit, because OneWorld keeps every subsidiary in one account.', why: 'Each subsidiary has its own base currency and rolls up into the parent. Business Central consolidates separate companies instead, which also works, so test month-end on both.' },
        { label: 'A strict, scanner-led warehouse', verdict: 'Either can work; walk a real day of receiving and picking on both.', why: 'Business Central offers directed put-away and pick, and NetSuite uses WMS SuiteApps with waves. The floor team should judge it, not the demo.' },
        { label: 'Month-end takes weeks on spreadsheets', verdict: 'Neither yet; agree your chart of accounts and close steps first.', why: 'Both systems mirror the process you give them. A clean chart of accounts and a written close make either launch faster.' },
      ],
      framing: [
        'What usually decides this is your structure and your partner. Count your legal entities and how often you add one. Look at how your team already works: Microsoft tools, or a mix. Then ask who will implement and support you, because both products reach most customers through partners.',
        'Ask about the costs around the subscription. Partner hours, data migration from your current system, integrations with banking, shipping and e-commerce, and the add-ons your warehouse or industry needs can each outweigh the licence. Ask how custom code is handled at each upgrade, since both rely on extensions or scripts for anything special.',
        'Questions to ask both vendors: what is in the base subscription and what is extra? Which partner will we work with, and what similar companies have they launched? How are consolidation and intercompany eliminations done in practice? Can we test with our own data, including a full month-end, before we sign?',
      ],
      faq: [
        { q: 'Can Business Central handle more than one company?', a: 'Yes. Microsoft documents consolidating several companies, even ones with different currencies and charts of accounts.' },
        { q: 'Does NetSuite need extra apps for warehouse scanning?', a: 'Yes. NetSuite says its Warehouse Management feature needs the SCM Mobile and NetSuite WMS SuiteApps.' },
        { q: 'Which one is cheaper?', a: 'It depends on users, modules and partner work. Get written quotes from both that include implementation and migration.' },
      ],
    },
    fr: {
      title: 'Business Central ou NetSuite pour une entreprise en croissance',
      short: 'Comment Microsoft Dynamics 365 Business Central et NetSuite conviennent, selon la situation, avec des faits sourcés chez chaque éditeur.',
      intro: 'Il n\'y a pas de gagnant unique. Business Central convient souvent aux entreprises déjà ancrées dans les outils Microsoft qui veulent une mise en place par un partenaire, tandis que NetSuite convient aux groupes qui veulent de nombreuses filiales dans un seul compte. Le partenaire et l\'adéquation à vos processus comptent plus que le produit.',
      situations: [
        { label: 'Votre équipe vit dans Microsoft 365', verdict: 'Business Central convient souvent, car il fait partie du même univers Microsoft.', why: 'Connexion, licences et partenaires passent par les canaux Microsoft. Les développeurs l\'étendent en AL avec Visual Studio Code.' },
        { label: 'Plusieurs filiales qui grandissent à l\'international', verdict: 'NetSuite convient souvent, car OneWorld garde chaque filiale dans un seul compte.', why: 'Chaque filiale a sa devise de base et remonte vers la société mère. Business Central consolide plutôt des sociétés séparées, ce qui fonctionne aussi, donc testez la fin de mois sur les deux.' },
        { label: 'Un entrepôt strict, piloté par lecteurs', verdict: 'Les deux peuvent convenir; faites une vraie journée de réception et de préparation sur chacun.', why: 'Business Central offre le rangement et prélèvement dirigés, et NetSuite utilise les SuiteApps WMS avec des vagues. L\'équipe de plancher doit juger, pas la démo.' },
        { label: 'La fin de mois prend des semaines sur tableur', verdict: 'Aucun pour l\'instant; fixez d\'abord votre plan comptable et vos étapes de clôture.', why: 'Les deux systèmes reflètent le processus que vous leur donnez. Un plan comptable propre et une clôture écrite accélèrent le lancement.' },
      ],
      framing: [
        'Ce qui tranche, c\'est votre structure et votre partenaire. Comptez vos entités juridiques et la fréquence à laquelle vous en ajoutez. Regardez comment votre équipe travaille déjà : outils Microsoft ou mélange. Puis demandez qui fera la mise en place et le soutien, car les deux produits passent surtout par des partenaires.',
        'Demandez les coûts autour de l\'abonnement. Les heures du partenaire, la migration des données, les intégrations bancaires, d\'expédition et de commerce en ligne, et les modules dont votre entrepôt ou votre secteur a besoin peuvent chacun dépasser la licence. Demandez comment le code sur mesure est traité à chaque mise à jour, puisque les deux reposent sur des extensions ou des scripts.',
        'Questions à poser aux deux éditeurs : qu\'est-ce qui est inclus dans l\'abonnement de base et qu\'est-ce qui est en sus? Avec quel partenaire travaillerons-nous, et quelles entreprises semblables a-t-il lancées? Comment la consolidation et les éliminations intersociétés se font-elles en pratique? Pouvons-nous tester avec nos données, y compris une fin de mois complète, avant de signer?',
      ],
      faq: [
        { q: 'Business Central peut-il gérer plus d\'une société?', a: 'Oui. Microsoft documente la consolidation de plusieurs sociétés, même avec des devises et plans comptables différents.' },
        { q: 'NetSuite demande-t-il des applications de plus pour la lecture en entrepôt?', a: 'Oui. NetSuite indique que Warehouse Management demande les SuiteApps SCM Mobile et NetSuite WMS.' },
        { q: 'Lequel coûte le moins?', a: 'Cela dépend des utilisateurs, des modules et du travail du partenaire. Demandez aux deux une soumission écrite incluant mise en place et migration.' },
      ],
    },
    es: {
      title: 'Business Central o NetSuite para una empresa en crecimiento',
      short: 'Cómo encajan Microsoft Dynamics 365 Business Central y NetSuite, según la situación, con datos de cada proveedor.',
      intro: 'No hay un ganador único. Business Central suele encajar con empresas que ya usan mucho las herramientas de Microsoft y quieren una implantación con un socio, mientras que NetSuite suele encajar con grupos que quieren muchas filiales en una sola cuenta. El socio y el encaje con su proceso deciden más que el producto.',
      situations: [
        { label: 'Su equipo vive en Microsoft 365', verdict: 'Business Central suele encajar, porque está en el mismo entorno de Microsoft.', why: 'El acceso, las licencias y los socios pasan por canales de Microsoft. Los programadores lo amplían en AL con Visual Studio Code.' },
        { label: 'Varias filiales creciendo en otros países', verdict: 'NetSuite suele encajar, porque OneWorld mantiene cada filial en una sola cuenta.', why: 'Cada filial tiene su moneda base y se consolida en la matriz. Business Central consolida empresas separadas, lo que también funciona, así que pruebe el cierre de mes en ambos.' },
        { label: 'Un almacén estricto, con escáneres', verdict: 'Ambos pueden servir; haga un día real de recepción y preparación en cada uno.', why: 'Business Central ofrece ubicación y preparación dirigidas, y NetSuite usa SuiteApps WMS con olas. Debe juzgarlo el equipo del almacén, no la demo.' },
        { label: 'El cierre de mes tarda semanas en hojas de cálculo', verdict: 'Ninguno todavía; acuerde primero su plan de cuentas y los pasos de cierre.', why: 'Ambos sistemas reflejan el proceso que les da. Un plan de cuentas limpio y un cierre por escrito aceleran cualquier arranque.' },
      ],
      framing: [
        'Lo que suele decidir es su estructura y su socio. Cuente sus entidades legales y con qué frecuencia añade una. Mire cómo trabaja ya su equipo: herramientas de Microsoft o una mezcla. Después pregunte quién lo implementará y le dará soporte, porque ambos productos llegan a la mayoría de clientes a través de socios.',
        'Pregunte por los costes alrededor de la suscripción. Las horas del socio, la migración de datos, las integraciones con banca, envíos y comercio electrónico, y los complementos que necesita su almacén o su sector pueden superar cada uno a la licencia. Pregunte cómo se trata el código propio en cada actualización, ya que ambos dependen de extensiones o scripts.',
        'Preguntas para ambos proveedores: ¿qué incluye la suscripción base y qué es extra? ¿Con qué socio trabajaremos y qué empresas parecidas ha puesto en marcha? ¿Cómo se hacen en la práctica la consolidación y las eliminaciones entre empresas? ¿Podemos probar con nuestros datos, incluido un cierre de mes completo, antes de firmar?',
      ],
      faq: [
        { q: '¿Business Central puede manejar más de una empresa?', a: 'Sí. Microsoft documenta la consolidación de varias empresas, incluso con monedas y planes de cuentas distintos.' },
        { q: '¿NetSuite necesita aplicaciones extra para escanear en el almacén?', a: 'Sí. NetSuite indica que Warehouse Management requiere las SuiteApps SCM Mobile y NetSuite WMS.' },
        { q: '¿Cuál es más barato?', a: 'Depende de usuarios, módulos y trabajo del socio. Pida a ambos una cotización escrita que incluya implementación y migración.' },
      ],
    },
  },
}
