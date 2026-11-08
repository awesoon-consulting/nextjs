export interface SupportData {
  slug: string
  title: string
  description: string
  problemHeadline: string
  category: string
  seoSummary: string
  painPoints: string[]
  whatWeDo: string[]
  platformMentions: string[]
  outcomes: string[]
  ctaText: string
  relatedSolutionSlugs: string[]
  translations?: Partial<
    Record<
      'fr' | 'es',
      Omit<SupportData, 'slug' | 'relatedSolutionSlugs' | 'translations'>
    >
  >
}

export const supportItems: SupportData[] = [
  {
    slug: 'systems-operations-support',
    title: 'Systems & Operations Support',
    description:
      'Post-launch support for operational systems, integrations, reporting workflows, and the day-to-day issues that pile up after go-live.',
    problemHeadline: "The project ended, but your systems still need an adult in the room",
    category: 'Support',
    seoSummary:
      'Operations systems support for post-launch stabilization, provider transitions, workflow fixes, reporting cleanup, and ongoing improvement.',
    painPoints: [
      'Your implementation partner delivered the project, then disappeared when real-world issues started showing up',
      "You have a live stack, but nobody owns the backlog of fixes, process changes, and operational cleanup work",
      "Your current support provider is slow, generic, or doesn't understand how your business actually runs",
      'Every small workflow change turns into a drawn-out ticket thread with no real accountability',
      "Your internal team needs a practical support partner, not another vendor who only knows their own software",
    ],
    whatWeDo: [
      'Take over post-launch stabilization and support for the systems already running your operation',
      'Triage issues across workflows, integrations, reporting, permissions, and data quality',
      'Handle change requests, process refinements, and operational improvements without creating chaos',
      'Step in as the replacement support partner when your current provider is not delivering',
      'Document fixes, train your team, and leave your operation in a more stable state every month',
    ],
    platformMentions: [
      'Support coverage can include ERP, CRM, inventory, finance, reporting, middleware, and custom operational workflows',
      'Ideal for teams that need help after implementation, after provider turnover, or during a messy handoff period',
      'Especially valuable when your operation spans multiple systems and no single vendor owns the full picture',
    ],
    outcomes: [
      'Faster issue resolution from a team that understands operational dependencies',
      'A cleaner backlog, fewer recurring problems, and less fire-fighting from your internal team',
      'A support partner who can improve workflows, not just close tickets',
      'More stability after go-live and fewer surprises during day-to-day operations',
      'Confidence that support does not vanish the moment the project is over',
    ],
    ctaText: 'Get Ongoing Support',
    relatedSolutionSlugs: [
      'systems-audit',
      'system-integration',
      'erp-implementation',
      'crm-implementation',
    ],
    translations: {
      fr: {
        title: 'Support systèmes et opérations',
        description:
          'Support post-lancement pour les systèmes opérationnels, les intégrations, le reporting et les problèmes qui apparaissent après le go-live.',
        problemHeadline:
          "Le projet est terminé, mais vos systèmes ont encore besoin d'un adulte dans la pièce",
        category: 'Support',
        seoSummary:
          'Support des systèmes opérationnels pour stabilisation post-lancement, transition de prestataire, corrections de workflows et amélioration continue.',
        painPoints: [
          'Votre partenaire de mise en oeuvre a livré puis a disparu quand les vrais problèmes ont commencé',
          "Vous avez une stack en production, mais personne ne prend en charge le backlog de correctifs et d'améliorations",
          "Votre prestataire actuel est lent, générique ou ne comprend pas votre réalité opérationnelle",
          'Chaque petit changement de workflow devient un long ticket sans vraie responsabilité',
          "Votre équipe interne a besoin d'un partenaire support pratique, pas d'un simple éditeur logiciel",
        ],
        whatWeDo: [
          'Prendre en charge la stabilisation et le support post-lancement des systèmes qui font tourner vos opérations',
          'Trier les problèmes liés aux workflows, intégrations, reportings, permissions et qualité de données',
          'Gérer les demandes de changement et améliorations sans recréer du chaos',
          'Remplacer un partenaire support qui ne livre pas',
          "Documenter les correctifs, former l'équipe et rendre l'opération plus stable chaque mois",
        ],
        platformMentions: [
          'Le support peut couvrir ERP, CRM, inventaire, finance, reporting, middleware et workflows sur mesure',
          "Particulièrement utile après mise en oeuvre, après changement de prestataire ou pendant une transition difficile",
          'Très pertinent lorsque plusieurs systèmes se croisent et qu’aucun fournisseur ne porte la vue globale',
        ],
        outcomes: [
          "Résolution plus rapide grâce à une équipe qui comprend les dépendances opérationnelles",
          "Moins de problèmes récurrents et moins d'incendies pour votre équipe interne",
          'Un partenaire support qui améliore les workflows au lieu de seulement fermer des tickets',
          'Plus de stabilité après le go-live',
          'La certitude que le support ne disparaît pas une fois le projet terminé',
        ],
        ctaText: 'Obtenir un support continu',
      },
      es: {
        title: 'Soporte de sistemas y operaciones',
        description:
          'Soporte post-lanzamiento para sistemas operativos, integraciones, reportes y problemas diarios que aparecen después del go-live.',
        problemHeadline:
          'El proyecto terminó, pero tus sistemas todavía necesitan a alguien que realmente los cuide',
        category: 'Soporte',
        seoSummary:
          'Soporte de sistemas operativos para estabilización post-lanzamiento, cambio de proveedor, mejoras de flujo y mantenimiento continuo.',
        painPoints: [
          'Tu partner de implementación entregó el proyecto y desapareció cuando empezaron los problemas reales',
          'Tienes una stack en producción, pero nadie gestiona el backlog de ajustes y correcciones',
          'Tu proveedor actual es lento, genérico o no entiende cómo opera tu negocio',
          'Cada cambio pequeño se convierte en un ticket eterno sin responsabilidad clara',
          'Tu equipo interno necesita un socio práctico de soporte, no otro proveedor de software',
        ],
        whatWeDo: [
          'Tomar la estabilización y soporte post-lanzamiento de los sistemas que ya operan tu negocio',
          'Clasificar problemas de flujos, integraciones, reportes, permisos y calidad de datos',
          'Gestionar cambios y mejoras sin crear más caos',
          'Entrar como proveedor de reemplazo cuando el soporte actual no responde',
          'Documentar arreglos, capacitar al equipo y dejar la operación más estable cada mes',
        ],
        platformMentions: [
          'La cobertura puede incluir ERP, CRM, inventario, finanzas, reporting, middleware y flujos personalizados',
          'Ideal después de una implementación, un cambio de proveedor o un handoff complicado',
          'Especialmente útil cuando varias plataformas se cruzan y ningún proveedor ve la operación completa',
        ],
        outcomes: [
          'Resolución más rápida de problemas con un equipo que entiende dependencias operativas',
          'Menos incendios y menos problemas repetitivos para tu equipo interno',
          'Un partner de soporte que mejora flujos, no solo cierra tickets',
          'Más estabilidad después del go-live',
          'La tranquilidad de tener soporte continuo después del proyecto',
        ],
        ctaText: 'Obtén soporte continuo',
      },
    },
  },
  {
    slug: 'crm-support',
    title: 'CRM Support',
    description:
      'Hands-on CRM support for teams using Salesforce, HubSpot, or Zoho and needing cleanup, admin help, workflow changes, reporting fixes, and adoption support.',
    problemHeadline: 'Your CRM is live, but it is not helping your team the way it should',
    category: 'CRM Support',
    seoSummary:
      'CRM support for Salesforce, HubSpot, and Zoho environments that need admin help, cleanup, reporting fixes, workflow support, and provider replacement.',
    painPoints: [
      'Your Salesforce, HubSpot, or Zoho setup has drifted away from how your team actually sells',
      'Automation, pipelines, and reports were set up once and then never maintained properly',
      'Your CRM admin support is too reactive, too junior, or too slow to keep up with the business',
      'Sales and operations do not trust the CRM data enough to use it for forecasting or handoffs',
      "You want to switch CRM support providers without creating another mess inside the system",
    ],
    whatWeDo: [
      'Provide ongoing Salesforce support, HubSpot support, and Zoho support for daily admin and change requests',
      'Clean up pipelines, fields, permissions, automations, dashboards, and duplicate data',
      'Improve handoffs between sales, customer success, and operations so the CRM reflects reality',
      'Stabilize reporting so leadership can trust the pipeline and forecast again',
      'Take over from your current CRM support provider when they are no longer a fit',
    ],
    platformMentions: [
      'Salesforce support for workflow cleanup, reporting fixes, admin support, and ongoing optimization',
      'HubSpot support for lifecycle automation, deal pipeline cleanup, dashboards, and team adoption',
      'Zoho support for CRM administration, process alignment, reporting, and operational handoffs',
    ],
    outcomes: [
      'A CRM that matches how your team really works today',
      'Fewer broken automations, cleaner reporting, and better data discipline',
      'Faster turnaround on CRM support requests and operational changes',
      'Stronger sales-to-operations visibility and fewer handoff surprises',
      'A support partner who can own both system details and business context',
    ],
    ctaText: 'Get CRM Support',
    relatedSolutionSlugs: ['crm-implementation', 'system-integration', 'ai-operations'],
    translations: {
      fr: {
        title: 'Support CRM',
        description:
          'Support CRM opérationnel pour les équipes sur Salesforce, HubSpot ou Zoho qui ont besoin de nettoyage, administration, reporting et adoption.',
        problemHeadline:
          "Votre CRM est en place, mais il n'aide pas votre équipe comme il le devrait",
        category: 'Support CRM',
        seoSummary:
          'Support CRM pour Salesforce, HubSpot et Zoho avec administration, nettoyage, reporting, évolutions et reprise de prestataire.',
        painPoints: [
          'Votre environnement Salesforce, HubSpot ou Zoho ne reflète plus la réalité commerciale',
          'Automatisations, pipelines et rapports ont été configurés puis laissés sans entretien',
          'Votre support CRM est trop réactif, trop junior ou trop lent',
          'Les ventes et les opérations ne font plus confiance aux données du CRM',
          'Vous voulez changer de prestataire support sans recréer du désordre',
        ],
        whatWeDo: [
          'Assurer le support quotidien sur Salesforce, HubSpot et Zoho',
          'Nettoyer pipelines, champs, permissions, automatisations, tableaux de bord et doublons',
          'Améliorer les handoffs entre ventes, customer success et opérations',
          'Stabiliser les reportings pour redonner confiance à la direction',
          "Reprendre le support quand votre prestataire actuel n'est plus adapté",
        ],
        platformMentions: [
          'Support Salesforce pour workflows, reporting, administration et optimisation',
          'Support HubSpot pour automatisation, pipeline, tableaux de bord et adoption',
          'Support Zoho pour administration CRM, alignement process et reporting',
        ],
        outcomes: [
          'Un CRM aligné avec le fonctionnement réel de votre équipe',
          'Moins d’automatisations cassées et des données plus fiables',
          'Un délai de traitement plus rapide pour les demandes support CRM',
          'De meilleurs relais entre ventes et opérations',
          'Un partenaire qui comprend le système et le contexte métier',
        ],
        ctaText: 'Obtenir du support CRM',
      },
      es: {
        title: 'Soporte CRM',
        description:
          'Soporte práctico de CRM para equipos en Salesforce, HubSpot o Zoho que necesitan limpieza, administración, reportes y mejoras continuas.',
        problemHeadline:
          'Tu CRM está en producción, pero no está ayudando a tu equipo como debería',
        category: 'Soporte CRM',
        seoSummary:
          'Soporte CRM para Salesforce, HubSpot y Zoho con ayuda administrativa, limpieza, reporting, optimización y cambio de proveedor.',
        painPoints: [
          'Tu entorno de Salesforce, HubSpot o Zoho ya no refleja cómo vende realmente tu equipo',
          'Automatizaciones, pipelines y reportes se configuraron una vez y luego se abandonaron',
          'El soporte CRM actual es demasiado reactivo, demasiado junior o demasiado lento',
          'Ventas y operaciones no confían en los datos del CRM',
          'Quieres cambiar de proveedor de soporte sin generar otro caos',
        ],
        whatWeDo: [
          'Brindar soporte continuo para Salesforce, HubSpot y Zoho en cambios y administración diaria',
          'Limpiar pipelines, campos, permisos, automatizaciones, dashboards y datos duplicados',
          'Mejorar handoffs entre ventas, customer success y operaciones',
          'Estabilizar reportes para que la dirección vuelva a confiar en el pipeline',
          'Asumir el soporte cuando tu proveedor actual ya no encaja',
        ],
        platformMentions: [
          'Soporte Salesforce para limpieza de workflows, reportes, administración y optimización',
          'Soporte HubSpot para automatización, pipeline, dashboards y adopción',
          'Soporte Zoho para administración CRM, alineación de procesos y reporting',
        ],
        outcomes: [
          'Un CRM alineado con la forma real de trabajar del equipo',
          'Menos automatizaciones rotas y datos más confiables',
          'Respuesta más rápida a solicitudes de soporte CRM',
          'Mejores handoffs entre ventas y operaciones',
          'Un partner que entiende sistema y contexto del negocio',
        ],
        ctaText: 'Obtén soporte CRM',
      },
    },
  },
  {
    slug: 'erp-support',
    title: 'ERP Support',
    description:
      'ERP support for live systems that need post-go-live stabilization, workflow fixes, reporting cleanup, admin help, and a better support partner.',
    problemHeadline: 'Your ERP is live, but the implementation pain never really ended',
    category: 'ERP Support',
    seoSummary:
      'ERP support for NetSuite, Odoo, Epicor, and similar platforms needing stabilization, admin help, cleanup, and provider replacement.',
    painPoints: [
      'Your ERP went live, but users still struggle with broken processes, unclear ownership, and recurring issues',
      'Your current ERP support provider only responds to tickets and does not improve the operation behind them',
      'Reports, permissions, workflows, and data quality still need ongoing cleanup after implementation',
      'Your internal team needs help navigating change requests without destabilizing the system',
      'You want a smoother switch away from a weak ERP support provider',
    ],
    whatWeDo: [
      'Provide post-go-live ERP support focused on stabilization, cleanup, and operational improvement',
      'Support workflow changes, user issues, reporting fixes, permissions, and process refinement',
      'Help your team prioritize ERP changes based on business impact, not just who shouts loudest',
      'Step in as an independent support partner when your implementation vendor is no longer the right long-term fit',
      'Reduce operational friction while keeping documentation and ownership clearer over time',
    ],
    platformMentions: [
      'NetSuite support for post-launch cleanup, workflow changes, admin requests, and reporting fixes',
      'Odoo support for module stabilization, process changes, user support, and ongoing optimization',
      'Epicor support for issue triage, role support, workflow tuning, and provider transition',
    ],
    outcomes: [
      'A more stable ERP environment with fewer recurring operational issues',
      'Better support response on the changes that actually matter to the business',
      'Cleaner reporting, clearer permissions, and more usable workflows',
      'An easier path away from a support provider that is no longer serving you well',
      'A team that feels supported after go-live instead of stranded by it',
    ],
    ctaText: 'Get ERP Support',
    relatedSolutionSlugs: ['erp-implementation', 'vendor-management', 'systems-audit'],
    translations: {
      fr: {
        title: 'Support ERP',
        description:
          'Support ERP pour systèmes en production ayant besoin de stabilisation post-go-live, corrections de workflows, reporting et aide admin.',
        problemHeadline:
          "Votre ERP est en production, mais la douleur de l'implémentation n'a jamais vraiment cessé",
        category: 'Support ERP',
        seoSummary:
          'Support ERP pour NetSuite, Odoo, Epicor et plateformes similaires nécessitant stabilisation, support admin et reprise de prestataire.',
        painPoints: [
          'Votre ERP est lancé, mais les utilisateurs vivent encore des problèmes récurrents',
          'Votre support ERP actuel répond aux tickets sans améliorer les opérations',
          'Reporting, permissions, workflows et qualité de données ont encore besoin de nettoyage',
          "Votre équipe interne a besoin d'aide pour traiter les demandes de changement sans déstabiliser le système",
          'Vous voulez quitter un prestataire support ERP insuffisant sans nouveau chaos',
        ],
        whatWeDo: [
          'Assurer un support ERP post-go-live orienté stabilisation et amélioration',
          'Traiter changements de workflow, incidents utilisateurs, reporting et permissions',
          'Aider à prioriser les changements selon leur impact opérationnel',
          "Intervenir comme partenaire indépendant quand l'intégrateur n'est plus le bon soutien",
          'Réduire la friction opérationnelle tout en clarifiant documentation et ownership',
        ],
        platformMentions: [
          'Support NetSuite pour nettoyage post-lancement, changements de workflow et reporting',
          'Support Odoo pour stabilisation des modules, support utilisateurs et optimisation continue',
          'Support Epicor pour triage, ajustement des workflows et transition de prestataire',
        ],
        outcomes: [
          'Un environnement ERP plus stable avec moins de problèmes récurrents',
          'Un support plus utile sur les sujets qui comptent vraiment',
          'Des reportings plus propres et des workflows plus utilisables',
          'Une sortie plus fluide d’un prestataire devenu insuffisant',
          'Une équipe mieux soutenue après le go-live',
        ],
        ctaText: 'Obtenir du support ERP',
      },
      es: {
        title: 'Soporte ERP',
        description:
          'Soporte ERP para sistemas en producción que necesitan estabilización post-go-live, ajustes de flujo, reportes y ayuda administrativa.',
        problemHeadline:
          'Tu ERP está en vivo, pero el dolor de la implementación realmente nunca terminó',
        category: 'Soporte ERP',
        seoSummary:
          'Soporte ERP para NetSuite, Odoo, Epicor y plataformas similares que necesitan estabilización, ayuda administrativa y cambio de proveedor.',
        painPoints: [
          'Tu ERP salió en vivo, pero los usuarios siguen lidiando con problemas recurrentes',
          'Tu proveedor actual de soporte ERP solo responde tickets y no mejora la operación',
          'Reportes, permisos, flujos y calidad de datos todavía necesitan trabajo',
          'Tu equipo necesita ayuda para manejar cambios sin desestabilizar el sistema',
          'Quieres salir de un proveedor débil de soporte ERP sin crear otro caos',
        ],
        whatWeDo: [
          'Brindar soporte ERP post-go-live enfocado en estabilización, limpieza y mejora operativa',
          'Atender cambios de flujo, problemas de usuario, reportes, permisos y refinamiento de procesos',
          'Ayudar a priorizar cambios por impacto de negocio',
          'Entrar como partner independiente cuando el implementador ya no es el soporte adecuado',
          'Reducir fricción operativa mientras mejora la documentación y ownership',
        ],
        platformMentions: [
          'Soporte NetSuite para limpieza post-lanzamiento, cambios de flujo y reportes',
          'Soporte Odoo para estabilización de módulos, soporte de usuarios y optimización continua',
          'Soporte Epicor para triage, ajuste de flujos y transición de proveedor',
        ],
        outcomes: [
          'Un entorno ERP más estable con menos problemas repetitivos',
          'Mejor soporte en los cambios que realmente importan',
          'Reportes más limpios y flujos más utilizables',
          'Una salida más ordenada de un proveedor que ya no sirve',
          'Un equipo que se siente acompañado después del go-live',
        ],
        ctaText: 'Obtén soporte ERP',
      },
    },
  },
  {
    slug: 'ecommerce-support-maintenance',
    title: 'Ecommerce Support & Maintenance',
    description:
      'Ongoing ecommerce support for storefront changes, operational fixes, integration issues, maintenance, and provider transitions after launch.',
    problemHeadline: 'Your store is live, but ecommerce operations still need constant attention',
    category: 'Ecommerce Support',
    seoSummary:
      'Ecommerce support and maintenance for storefront updates, platform changes, integration issues, fulfillment workflows, and ongoing operational support.',
    painPoints: [
      'Your ecommerce store needs constant updates, but every change currently moves too slowly',
      'Catalog, checkout, fulfillment, or integration issues keep disrupting day-to-day operations',
      'Your current ecommerce support provider can tweak pages but cannot solve the operational problems underneath',
      'You need a partner who can support both the storefront and the systems behind it',
      'You want maintenance and support after launch without rebuilding the whole site relationship from scratch',
    ],
    whatWeDo: [
      'Handle ongoing ecommerce maintenance, support, optimization, and change requests after launch',
      'Fix issues involving catalog structure, storefront content, integrations, fulfillment, and customer workflows',
      'Support businesses that want to move away from a slow or low-context ecommerce support provider',
      'Coordinate ecommerce changes with ERP, CRM, inventory, fulfillment, and reporting dependencies',
      'Keep the storefront evolving while protecting operational stability behind the scenes',
    ],
    platformMentions: [
      'Shopify support for day-to-day maintenance, storefront changes, app coordination, and operational fixes',
      'Support for ecommerce environments that depend on ERP, CRM, shipping, warehouse, and custom API connections',
      'Best fit for businesses that need operationally aware maintenance, not just front-end edits',
    ],
    outcomes: [
      'Faster turnaround on ecommerce fixes and maintenance work',
      'A stronger connection between storefront changes and operational reality',
      'Fewer recurring issues across catalog, checkout, integrations, and fulfillment',
      'A support relationship that can handle both maintenance and meaningful operational change',
      'More confidence in your ecommerce stack after launch, not just at launch',
    ],
    ctaText: 'Get Ecommerce Support',
    relatedSolutionSlugs: ['ecommerce-development', 'system-integration', 'custom-api-development'],
    translations: {
      fr: {
        title: 'Support et maintenance ecommerce',
        description:
          'Support ecommerce continu pour évolutions storefront, corrections opérationnelles, intégrations et maintenance après lancement.',
        problemHeadline:
          'Votre boutique est en ligne, mais les opérations ecommerce demandent encore une attention constante',
        category: 'Support ecommerce',
        seoSummary:
          'Support et maintenance ecommerce pour mises à jour storefront, intégrations, fulfillment et accompagnement continu après lancement.',
        painPoints: [
          'Votre boutique demande des mises à jour permanentes mais chaque changement prend trop de temps',
          'Catalogue, checkout, fulfillment ou intégrations perturbent les opérations',
          'Votre prestataire actuel sait modifier des pages mais pas résoudre les problèmes opérationnels',
          'Vous avez besoin d’un partenaire qui comprend la boutique et les systèmes derrière',
          'Vous voulez une maintenance post-lancement sans repartir de zéro',
        ],
        whatWeDo: [
          'Prendre en charge maintenance, support, optimisation et demandes de changement ecommerce',
          'Corriger les problèmes de catalogue, storefront, intégrations, fulfillment et parcours client',
          'Accompagner les entreprises qui veulent changer de prestataire support ecommerce',
          'Coordonner les changements avec ERP, CRM, inventaire, logistique et reporting',
          'Faire évoluer la boutique sans fragiliser les opérations en arrière-plan',
        ],
        platformMentions: [
          'Support Shopify pour maintenance quotidienne, évolutions storefront et corrections opérationnelles',
          'Support pour environnements ecommerce liés à ERP, CRM, expédition, entrepôt et APIs sur mesure',
          'Adapté aux entreprises qui ont besoin d’une maintenance consciente des réalités opérationnelles',
        ],
        outcomes: [
          'Des corrections et évolutions ecommerce plus rapides',
          'Un meilleur lien entre storefront et réalité opérationnelle',
          'Moins de problèmes récurrents sur catalogue, checkout et fulfillment',
          'Une relation support capable de gérer maintenance et changements structurants',
          'Plus de confiance dans votre stack ecommerce après lancement',
        ],
        ctaText: 'Obtenir du support ecommerce',
      },
      es: {
        title: 'Soporte y mantenimiento ecommerce',
        description:
          'Soporte ecommerce continuo para cambios de storefront, ajustes operativos, integraciones y mantenimiento después del lanzamiento.',
        problemHeadline:
          'Tu tienda está en vivo, pero la operación ecommerce todavía exige atención constante',
        category: 'Soporte ecommerce',
        seoSummary:
          'Soporte y mantenimiento ecommerce para actualizaciones de storefront, integraciones, fulfillment y soporte continuo después del lanzamiento.',
        painPoints: [
          'Tu tienda necesita cambios constantes, pero hoy todo se mueve demasiado lento',
          'Catálogo, checkout, fulfillment o integraciones siguen generando problemas',
          'Tu proveedor actual puede tocar páginas, pero no resolver los problemas operativos debajo',
          'Necesitas un partner que entienda la tienda y los sistemas conectados',
          'Quieres mantenimiento post-lanzamiento sin reiniciar toda la relación',
        ],
        whatWeDo: [
          'Gestionar mantenimiento, soporte, optimización y cambios ecommerce después del lanzamiento',
          'Corregir problemas de catálogo, storefront, integraciones, fulfillment y flujos de cliente',
          'Acompañar negocios que quieren salir de un proveedor de soporte lento o con poco contexto',
          'Coordinar cambios ecommerce con ERP, CRM, inventario, fulfillment y reporting',
          'Mantener la tienda evolucionando sin romper la estabilidad operativa',
        ],
        platformMentions: [
          'Soporte Shopify para mantenimiento diario, cambios de storefront y correcciones operativas',
          'Soporte para entornos ecommerce conectados con ERP, CRM, envíos, almacén y APIs personalizadas',
          'Ideal para empresas que necesitan mantenimiento con criterio operativo, no solo ediciones visuales',
        ],
        outcomes: [
          'Más velocidad en fixes y mantenimiento ecommerce',
          'Mejor conexión entre cambios de storefront y realidad operativa',
          'Menos problemas repetitivos en catálogo, checkout, integraciones y fulfillment',
          'Una relación de soporte capaz de manejar mantenimiento y cambios relevantes',
          'Más confianza en tu stack ecommerce después del lanzamiento',
        ],
        ctaText: 'Obtén soporte ecommerce',
      },
    },
  },
]

export function getSupportBySlug(slug: string): SupportData | undefined {
  return supportItems.find((item) => item.slug === slug)
}

export function getAllSupportSlugs(): string[] {
  return supportItems.map((item) => item.slug)
}

export function getLocalizedSupportBySlug(
  slug: string,
  locale: string
): SupportData | undefined {
  const supportItem = getSupportBySlug(slug)
  if (!supportItem) return undefined

  if (locale !== 'fr' && locale !== 'es') return supportItem

  const translated = supportItem.translations?.[locale]
  if (!translated) return supportItem

  return {
    ...supportItem,
    ...translated,
  }
}

export function getLocalizedSupportItems(locale: string): SupportData[] {
  return supportItems.map((item) => getLocalizedSupportBySlug(item.slug, locale) ?? item)
}
