import type { Comparison } from './types'

const D = '2026-11-12'

const NS_ONEWORLD = { label: 'NetSuite Help: OneWorld overview', url: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N266701.html' }
const NS_INVENTORY = { label: 'NetSuite Help: Enabling inventory features', url: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_1111112400.html' }
const NS_SUITESCRIPT = { label: 'NetSuite Help: SuiteScript overview', url: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_163726005075.html' }
const ODOO_INVENTORY = { label: 'Odoo Inventory features', url: 'https://www.odoo.com/app/inventory-features' }
const ODOO_ACCOUNTING = { label: 'Odoo Accounting features', url: 'https://www.odoo.com/app/accounting-features' }
const ODOO_STUDIO = { label: 'Odoo Studio', url: 'https://www.odoo.com/app/studio' }

export const COMPARE_NETSUITE_VS_ODOO: Comparison = {
  slug: 'netsuite-vs-odoo',
  a: 'NetSuite',
  b: 'Odoo',
  hub: '/erp-crm',
  relatedTerms: ['erp', 'erp-implementation', 'warehouse-management-system', 'lot-tracking', 'multi-currency', 'fit-gap-analysis'],
  checked: D,
  facts: [
    {
      area: { en: 'Several legal entities', fr: 'Plusieurs entités juridiques', es: 'Varias entidades legales' },
      a: {
        en: 'NetSuite OneWorld runs multiple subsidiaries in one account, each treated as its own legal entity, with consolidated reports.',
        fr: 'NetSuite OneWorld gère plusieurs filiales dans un seul compte, chacune traitée comme une entité juridique distincte, avec des rapports consolidés.',
        es: 'NetSuite OneWorld gestiona varias filiales en una sola cuenta, cada una tratada como entidad legal propia, con informes consolidados.',
      },
      b: {
        en: 'Odoo manages multiple entities and subsidiaries under one subscription, with consolidated reporting and automated intercompany transactions.',
        fr: 'Odoo gère plusieurs entités et filiales sous un seul abonnement, avec des rapports consolidés et des transactions intersociétés automatisées.',
        es: 'Odoo gestiona varias entidades y filiales con una sola suscripción, con informes consolidados y transacciones entre empresas automatizadas.',
      },
      sources: [NS_ONEWORLD, ODOO_ACCOUNTING],
      asOf: D,
    },
    {
      area: { en: 'Currencies', fr: 'Devises', es: 'Monedas' },
      a: {
        en: 'Each OneWorld subsidiary has its own base currency, and results roll up into reports in the parent subsidiary currency.',
        fr: 'Chaque filiale OneWorld a sa propre devise de base, et les résultats sont regroupés dans la devise de la filiale mère.',
        es: 'Cada filial de OneWorld tiene su propia moneda base, y los resultados se consolidan en la moneda de la filial matriz.',
      },
      b: {
        en: 'Odoo handles transactions in foreign currencies with daily automated exchange rate updates.',
        fr: 'Odoo gère les transactions en devises étrangères avec une mise à jour automatique quotidienne des taux de change.',
        es: 'Odoo maneja transacciones en monedas extranjeras con actualización automática diaria de los tipos de cambio.',
      },
      sources: [NS_ONEWORLD, ODOO_ACCOUNTING],
      asOf: D,
    },
    {
      area: { en: 'Several warehouses', fr: 'Plusieurs entrepôts', es: 'Varios almacenes' },
      a: {
        en: 'Multi-Location Inventory tracks stock across locations; once turned on and items are distributed, turning it off needs Customer Support.',
        fr: 'Multi-Location Inventory suit le stock par emplacement; une fois activé et les articles répartis, le désactiver passe par le support client.',
        es: 'Multi-Location Inventory controla el stock por ubicación; una vez activado y repartidos los artículos, desactivarlo requiere al soporte.',
      },
      b: {
        en: 'Odoo manages stock and replenishment for all warehouses, with custom routes to plan transfers between locations.',
        fr: 'Odoo gère le stock et le réapprovisionnement de tous les entrepôts, avec des routes sur mesure pour planifier les transferts.',
        es: 'Odoo gestiona el stock y la reposición de todos los almacenes, con rutas propias para planificar traslados entre ubicaciones.',
      },
      sources: [NS_INVENTORY, ODOO_INVENTORY],
      asOf: D,
    },
    {
      area: { en: 'Storage locations and putaway', fr: 'Emplacements et rangement', es: 'Ubicaciones y ubicación de entrada' },
      a: {
        en: 'Bin Management tracks where stock sits in the warehouse and shows staff where to pick and where to put received items.',
        fr: 'Bin Management suit où se trouve le stock dans l\'entrepôt et indique au personnel où prélever et où ranger les réceptions.',
        es: 'Bin Management registra dónde está el stock en el almacén e indica al personal dónde recoger y dónde guardar lo recibido.',
      },
      b: {
        en: 'Odoo routes products to storage locations automatically based on real-time capacity.',
        fr: 'Odoo dirige automatiquement les produits vers les emplacements selon la capacité en temps réel.',
        es: 'Odoo dirige los productos a ubicaciones de forma automática según la capacidad en tiempo real.',
      },
      sources: [NS_INVENTORY, ODOO_INVENTORY],
      asOf: D,
    },
    {
      area: { en: 'Picking', fr: 'Préparation de commandes', es: 'Preparación de pedidos' },
      a: {
        en: 'Warehouse Management uses mobile devices and wave transactions from receiving to shipping, and needs the SCM Mobile and NetSuite WMS SuiteApps.',
        fr: 'Warehouse Management utilise des appareils mobiles et des vagues de la réception à l\'expédition, et demande les SuiteApps SCM Mobile et NetSuite WMS.',
        es: 'Warehouse Management usa dispositivos móviles y olas de la recepción al envío, y requiere las SuiteApps SCM Mobile y NetSuite WMS.',
      },
      b: {
        en: 'Odoo supports single, batch, cluster and wave picking, and barcode scanning across warehouse operations.',
        fr: 'Odoo prend en charge la préparation unitaire, par lot, groupée et par vague, et la lecture de codes-barres dans l\'entrepôt.',
        es: 'Odoo admite preparación individual, por lote, agrupada y por olas, y escaneo de códigos de barras en el almacén.',
      },
      sources: [NS_INVENTORY, ODOO_INVENTORY],
      asOf: D,
    },
    {
      area: { en: 'Lot and serial tracking', fr: 'Suivi des lots et numéros de série', es: 'Seguimiento de lotes y números de serie' },
      a: {
        en: 'Lot Tracking and Serialized Inventory are features you turn on; once tracked items exist, they cannot be turned off.',
        fr: 'Lot Tracking et Serialized Inventory sont des fonctions à activer; une fois des articles suivis créés, elles ne peuvent plus être désactivées.',
        es: 'Lot Tracking y Serialized Inventory son funciones que se activan; una vez creados artículos con seguimiento, no se pueden desactivar.',
      },
      b: {
        en: 'Odoo offers a dedicated report that traces lots and serial numbers from supplier to customer.',
        fr: 'Odoo propose un rapport dédié qui suit les lots et numéros de série du fournisseur au client.',
        es: 'Odoo ofrece un informe propio que sigue lotes y números de serie del proveedor al cliente.',
      },
      sources: [NS_INVENTORY, ODOO_INVENTORY],
      asOf: D,
    },
    {
      area: { en: 'Customization', fr: 'Personnalisation', es: 'Personalización' },
      a: {
        en: 'SuiteScript is a scripting language for client and server logic used to extend NetSuite and process its data.',
        fr: 'SuiteScript est un langage de script côté client et serveur qui sert à étendre NetSuite et à traiter ses données.',
        es: 'SuiteScript es un lenguaje de scripts de cliente y servidor para ampliar NetSuite y procesar sus datos.',
      },
      b: {
        en: 'Odoo Studio adds fields, changes views and sets automated actions without writing code.',
        fr: 'Odoo Studio ajoute des champs, modifie les vues et crée des actions automatisées sans écrire de code.',
        es: 'Odoo Studio añade campos, cambia vistas y crea acciones automáticas sin escribir código.',
      },
      sources: [NS_SUITESCRIPT, ODOO_STUDIO],
      asOf: D,
    },
  ],
  copy: {
    en: {
      title: 'NetSuite vs Odoo for a growing distributor',
      short: 'How two common ERP choices fit a distributor, by situation, with sourced facts from each vendor.',
      intro: 'There is no single winner here. NetSuite tends to fit distributors with several entities and a finance team that wants one controlled system, while Odoo tends to fit teams that want broad apps and room to adjust things themselves. Your process, partner and data matter more than the logo.',
      situations: [
        { label: 'Several legal entities or countries', verdict: 'NetSuite tends to fit, because OneWorld is built around a subsidiary hierarchy.', why: 'Each subsidiary keeps its own base currency and rolls up into the parent. Odoo also does multi-company, so test your real consolidation on both.' },
        { label: 'One warehouse, a small team that likes to adjust things', verdict: 'Odoo tends to fit, because Studio lets staff change fields and views without code.', why: 'Small teams often want to move fast without a developer. Keep changes documented so upgrades stay simple.' },
        { label: 'High-volume picking with scanners', verdict: 'Either can work; compare the warehouse flow on the floor, not in a demo.', why: 'NetSuite uses its WMS SuiteApps and waves, and Odoo offers batch, cluster and wave picking with barcodes. Run a real order day through both.' },
        { label: 'Stock numbers nobody trusts today', verdict: 'Neither yet; fix counting and receiving first.', why: 'A new ERP copies the habits you bring into it. Clean item data and a steady cycle count make either system work better.' },
      ],
      framing: [
        'What usually decides this is not features. Both handle multiple warehouses, lots and serials, and currencies. The real questions are how many entities you run, how much your team wants to change the system on its own, and who will implement and support it after go-live.',
        'Ask about the costs around the licence. Implementation partner hours, data migration from your current system, integrations with your shipping, e-commerce and EDI tools, and the add-ons your warehouse flow needs can each be larger than the software itself. Some settings, like lot tracking in NetSuite, cannot be switched off later, so plan them before migration.',
        'Questions to ask both vendors: what is included in the base subscription and what is an add-on? Who will be our partner, and how many distributors like us have they launched? How do upgrades treat our custom fields and scripts? Can we run a test with our own items, orders and a real receiving day before signing?',
      ],
      faq: [
        { q: 'Is Odoo only for small businesses?', a: 'No. Odoo supports multiple companies and warehouses. Fit depends more on your process and partner than on company size.' },
        { q: 'Does NetSuite need extra apps for warehouse scanning?', a: 'Yes. NetSuite says its Warehouse Management feature needs the SCM Mobile and NetSuite WMS SuiteApps.' },
        { q: 'Which is cheaper?', a: 'It depends on users, apps, hosting and partner work. Get written quotes from both that include implementation and migration.' },
      ],
    },
    fr: {
      title: 'NetSuite ou Odoo pour un distributeur en croissance',
      short: 'Comment deux ERP courants conviennent à un distributeur, selon la situation, avec des faits sourcés chez chaque éditeur.',
      intro: 'Il n\'y a pas de gagnant unique. NetSuite convient souvent aux distributeurs avec plusieurs entités et une équipe finance qui veut un système encadré, tandis qu\'Odoo convient aux équipes qui veulent beaucoup d\'applications et la liberté d\'ajuster elles-mêmes. Vos processus, votre partenaire et vos données comptent plus que la marque.',
      situations: [
        { label: 'Plusieurs entités juridiques ou pays', verdict: 'NetSuite convient souvent, car OneWorld repose sur une hiérarchie de filiales.', why: 'Chaque filiale garde sa devise de base et remonte vers la société mère. Odoo gère aussi le multisociété, alors testez votre vraie consolidation sur les deux.' },
        { label: 'Un entrepôt, une petite équipe qui aime ajuster', verdict: 'Odoo convient souvent, car Studio permet de changer champs et vues sans code.', why: 'Les petites équipes veulent souvent avancer sans développeur. Documentez les changements pour garder les mises à jour simples.' },
        { label: 'Préparation à fort volume avec lecteurs', verdict: 'Les deux peuvent convenir; comparez le flux sur le plancher, pas en démo.', why: 'NetSuite utilise ses SuiteApps WMS et des vagues, et Odoo propose la préparation par lot, groupée et par vague avec codes-barres. Faites passer une vraie journée de commandes dans les deux.' },
        { label: 'Des stocks auxquels personne ne se fie', verdict: 'Aucun pour l\'instant; réglez d\'abord le comptage et la réception.', why: 'Un nouvel ERP reprend les habitudes que vous y apportez. Des données articles propres et un inventaire tournant régulier aident les deux systèmes.' },
      ],
      framing: [
        'Ce qui tranche, ce ne sont pas les fonctions. Les deux gèrent plusieurs entrepôts, les lots et numéros de série, et les devises. Les vraies questions sont le nombre d\'entités, le degré d\'autonomie que votre équipe veut sur le système, et qui fera la mise en place et le soutien après le démarrage.',
        'Demandez les coûts autour de la licence. Les heures du partenaire, la migration des données, les intégrations avec vos outils d\'expédition, de commerce en ligne et EDI, et les modules dont votre entrepôt a besoin peuvent chacun dépasser le logiciel. Certains réglages, comme le suivi des lots dans NetSuite, ne se désactivent pas ensuite, donc planifiez-les avant la migration.',
        'Questions à poser aux deux éditeurs : qu\'est-ce qui est inclus dans l\'abonnement de base et qu\'est-ce qui est en option? Qui sera notre partenaire, et combien de distributeurs comme nous a-t-il lancés? Comment les mises à jour traitent-elles nos champs et scripts sur mesure? Pouvons-nous tester avec nos articles, nos commandes et une vraie journée de réception avant de signer?',
      ],
      faq: [
        { q: 'Odoo est-il réservé aux petites entreprises?', a: 'Non. Odoo gère plusieurs sociétés et entrepôts. L\'adéquation dépend davantage de vos processus et de votre partenaire que de la taille.' },
        { q: 'NetSuite demande-t-il des applications de plus pour la lecture en entrepôt?', a: 'Oui. NetSuite indique que Warehouse Management demande les SuiteApps SCM Mobile et NetSuite WMS.' },
        { q: 'Lequel coûte le moins?', a: 'Cela dépend des utilisateurs, des applications, de l\'hébergement et du travail du partenaire. Demandez aux deux une soumission écrite incluant mise en place et migration.' },
      ],
    },
    es: {
      title: 'NetSuite o Odoo para un distribuidor en crecimiento',
      short: 'Cómo encajan dos ERP habituales en un distribuidor, según la situación, con datos de cada proveedor.',
      intro: 'No hay un ganador único. NetSuite suele encajar con distribuidores que tienen varias entidades y un equipo de finanzas que quiere un sistema controlado, mientras que Odoo suele encajar con equipos que quieren muchas aplicaciones y margen para ajustar por su cuenta. Su proceso, su socio y sus datos pesan más que la marca.',
      situations: [
        { label: 'Varias entidades legales o países', verdict: 'NetSuite suele encajar, porque OneWorld se basa en una jerarquía de filiales.', why: 'Cada filial mantiene su moneda base y se consolida en la matriz. Odoo también es multiempresa, así que pruebe su consolidación real en ambos.' },
        { label: 'Un almacén, un equipo pequeño que le gusta ajustar', verdict: 'Odoo suele encajar, porque Studio permite cambiar campos y vistas sin código.', why: 'Los equipos pequeños suelen querer avanzar sin un programador. Documente los cambios para que las actualizaciones sigan siendo sencillas.' },
        { label: 'Preparación de alto volumen con escáneres', verdict: 'Ambos pueden servir; compare el flujo en el almacén, no en una demo.', why: 'NetSuite usa sus SuiteApps WMS y olas, y Odoo ofrece preparación por lote, agrupada y por olas con códigos de barras. Pase un día real de pedidos por ambos.' },
        { label: 'Un inventario en el que nadie confía', verdict: 'Ninguno todavía; arregle primero el conteo y la recepción.', why: 'Un ERP nuevo copia los hábitos que lleva a él. Datos de artículos limpios y un conteo cíclico constante ayudan a cualquiera de los dos.' },
      ],
      framing: [
        'Lo que suele decidir no son las funciones. Ambos manejan varios almacenes, lotes y números de serie, y monedas. Las preguntas reales son cuántas entidades opera, cuánto quiere su equipo cambiar el sistema por su cuenta, y quién lo implementará y dará soporte después del arranque.',
        'Pregunte por los costes alrededor de la licencia. Las horas del socio de implementación, la migración de datos, las integraciones con sus herramientas de envío, comercio electrónico y EDI, y los complementos que necesita su almacén pueden superar cada uno al software. Algunos ajustes, como el seguimiento de lotes en NetSuite, no se pueden desactivar después, así que planifíquelos antes de migrar.',
        'Preguntas para ambos proveedores: ¿qué incluye la suscripción base y qué es un complemento? ¿Quién será nuestro socio y cuántos distribuidores como nosotros ha puesto en marcha? ¿Cómo tratan las actualizaciones nuestros campos y scripts propios? ¿Podemos probar con nuestros artículos, pedidos y un día real de recepción antes de firmar?',
      ],
      faq: [
        { q: '¿Odoo es solo para pequeñas empresas?', a: 'No. Odoo admite varias empresas y almacenes. El encaje depende más de su proceso y su socio que del tamaño.' },
        { q: '¿NetSuite necesita aplicaciones extra para escanear en el almacén?', a: 'Sí. NetSuite indica que Warehouse Management requiere las SuiteApps SCM Mobile y NetSuite WMS.' },
        { q: '¿Cuál es más barato?', a: 'Depende de usuarios, aplicaciones, alojamiento y trabajo del socio. Pida a ambos una cotización escrita que incluya implementación y migración.' },
      ],
    },
  },
}
