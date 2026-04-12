/**
 * Solution pages data. Each solution maps to a URL slug and contains
 * structured content for the dynamic solution detail page.
 */

export interface SolutionData {
  slug: string
  titleKey: string
  descriptionKey: string
  problemHeadline: string
  category: string
  seoSummary: string
  painPoints: string[]
  whatWeDo: string[]
  aiOpportunities: string[]
  outcomes: string[]
  ctaText: string
  relatedSlugs: string[]
  relatedInsightSlugs: string[]
  translations?: Partial<Record<'fr' | 'es', Omit<SolutionData, 'slug' | 'titleKey' | 'descriptionKey' | 'relatedSlugs' | 'relatedInsightSlugs' | 'translations'>>>
}

export const solutions: SolutionData[] = [
  {
    slug: 'ai-operations',
    titleKey: 'solutions.cards.aiOperations.title',
    descriptionKey: 'solutions.cards.aiOperations.description',
    problemHeadline: 'You want AI to create leverage, not more operational chaos',
    category: 'AI & Automation',
    seoSummary:
      'AI operations consulting for growing teams adopting RAG assistants, workflow agents, and AI copilots on top of real operational foundations.',
    painPoints: [
      `You're getting pitched AI tools but no one can explain how they fit your actual workflows`,
      `Your data is spread across systems, files, and tribal knowledge, so AI outputs would be unreliable today`,
      `You want to use RAG, copilots, or agents, but you don't know what should be automated and what needs human review`,
      `Your leadership team wants an AI roadmap, but your operations team is already overloaded`,
      `You're worried about governance, permissions, hallucinations, and vendor hype`,
    ],
    whatWeDo: [
      'Assess your operational and data readiness for AI adoption across systems, documentation, and workflows',
      'Identify the highest-ROI use cases for RAG assistants, AI copilots, and agentic workflow automation',
      'Define the source systems, retrieval layers, permissions, and human-in-the-loop controls each use case requires',
      'Design and implement practical pilots that connect AI to your real operating environment',
      'Document governance, monitoring, and rollout plans so the solution is usable and trusted after launch',
    ],
    aiOpportunities: [
      'RAG assistants that answer SOP, policy, training, account, and process questions using approved internal sources',
      'Agentic workflows that classify, summarize, and route repetitive operational work with human oversight',
      'AI copilots for reporting, customer context, ERP support, sales handoffs, and exception management',
    ],
    outcomes: [
      'A clear AI roadmap tied to operational value, not generic experimentation',
      'Safer AI deployment built on trustworthy data, permissions, and source-of-truth decisions',
      'Faster internal search, better decision support, and less time lost to knowledge gaps',
      'Focused automation in repetitive workflows without creating governance blind spots',
      'Executive confidence that AI investments are grounded in operational reality',
    ],
    ctaText: 'Plan Your AI Roadmap',
    relatedSlugs: ['systems-audit', 'system-integration', 'api-integrations'],
    relatedInsightSlugs: ['ai-operations-readiness', 'building-rag-agents-for-operations'],
    translations: {
      fr: {
        problemHeadline: "Vous voulez que l'IA crée un effet de levier, pas plus de chaos opérationnel",
        category: 'IA et automatisation',
        seoSummary:
          "Conseil en opérations IA pour les équipes du marché intermédiaire qui adoptent des assistants RAG, des agents de workflow et des copilotes IA sur de vraies bases opérationnelles.",
        painPoints: [
          "On vous présente des outils d'IA, mais personne ne peut expliquer comment ils s'intègrent à vos flux de travail réels",
          "Vos données sont réparties entre plusieurs systèmes, fichiers et connaissances informelles, donc les résultats de l'IA seraient peu fiables aujourd'hui",
          "Vous voulez utiliser le RAG, des copilotes ou des agents, mais vous ne savez pas ce qui doit être automatisé et ce qui exige une validation humaine",
          "Votre direction veut une feuille de route IA, mais votre équipe des opérations est déjà surchargée",
          "Vous vous inquiétez de la gouvernance, des permissions, des hallucinations et du battage des fournisseurs",
        ],
        whatWeDo: [
          "Évaluer votre préparation opérationnelle et vos données pour l'adoption de l'IA dans les systèmes, la documentation et les workflows",
          "Identifier les cas d'usage à plus fort ROI pour les assistants RAG, les copilotes IA et l'automatisation agentique des workflows",
          "Définir les systèmes sources, les couches de recherche, les permissions et les contrôles humains requis pour chaque cas d'usage",
          "Concevoir et mettre en oeuvre des pilotes pratiques qui connectent l'IA à votre environnement opérationnel réel",
          "Documenter la gouvernance, la surveillance et le plan de déploiement pour que la solution soit fiable après lancement",
        ],
        aiOpportunities: [
          'Des assistants RAG qui répondent aux questions sur les SOP, politiques, formations, comptes et processus à partir de sources internes approuvées',
          'Des workflows agentiques qui classent, résument et acheminent le travail opérationnel répétitif avec supervision humaine',
          'Des copilotes IA pour le reporting, le contexte client, le support ERP, les relais commerciaux et la gestion des exceptions',
        ],
        outcomes: [
          "Une feuille de route IA claire liée à la valeur opérationnelle, pas à l'expérimentation générique",
          "Un déploiement IA plus sûr fondé sur des données fiables, des permissions claires et des sources de vérité définies",
          'Une recherche interne plus rapide, une meilleure aide à la décision et moins de temps perdu à cause des lacunes de connaissance',
          "Une automatisation ciblée dans les workflows répétitifs sans créer d'angles morts de gouvernance",
          "Une direction confiante que les investissements IA reposent sur une réalité opérationnelle solide",
        ],
        ctaText: 'Planifier votre feuille de route IA',
      },
      es: {
        problemHeadline: 'Quieres que la IA genere ventaja, no más caos operativo',
        category: 'IA y automatización',
        seoSummary:
          'Consultoría de operaciones con IA para equipos del mercado medio que adoptan asistentes RAG, agentes de flujo de trabajo y copilotos de IA sobre bases operativas reales.',
        painPoints: [
          'Te están ofreciendo herramientas de IA, pero nadie puede explicar cómo encajan en tus flujos de trabajo reales',
          'Tus datos están repartidos entre sistemas, archivos y conocimiento informal, así que las respuestas de la IA hoy serían poco fiables',
          'Quieres usar RAG, copilotos o agentes, pero no sabes qué debe automatizarse y qué requiere revisión humana',
          'Tu equipo directivo quiere una hoja de ruta de IA, pero operaciones ya está sobrecargado',
          'Te preocupan la gobernanza, los permisos, las alucinaciones y el marketing vacío de los proveedores',
        ],
        whatWeDo: [
          'Evaluar tu preparación operativa y de datos para adoptar IA en sistemas, documentación y flujos de trabajo',
          'Identificar los casos de uso con mayor ROI para asistentes RAG, copilotos de IA y automatización agéntica',
          'Definir los sistemas fuente, capas de recuperación, permisos y controles humanos necesarios para cada caso de uso',
          'Diseñar e implementar pilotos prácticos que conecten la IA con tu entorno operativo real',
          'Documentar la gobernanza, el monitoreo y el plan de despliegue para que la solución sea confiable después del lanzamiento',
        ],
        aiOpportunities: [
          'Asistentes RAG que responden preguntas sobre SOP, políticas, capacitación, cuentas y procesos con fuentes internas aprobadas',
          'Flujos agénticos que clasifican, resumen y enrutan trabajo operativo repetitivo con supervisión humana',
          'Copilotos de IA para reportes, contexto del cliente, soporte ERP, traspasos comerciales y gestión de excepciones',
        ],
        outcomes: [
          'Una hoja de ruta de IA clara, vinculada al valor operativo y no a la experimentación genérica',
          'Un despliegue de IA más seguro, basado en datos confiables, permisos claros y fuentes de verdad definidas',
          'Búsqueda interna más rápida, mejor soporte a decisiones y menos tiempo perdido por vacíos de conocimiento',
          'Automatización enfocada en flujos repetitivos sin crear puntos ciegos de gobernanza',
          'Confianza ejecutiva en que las inversiones en IA están basadas en una realidad operativa sólida',
        ],
        ctaText: 'Planifica tu hoja de ruta de IA',
      },
    },
  },
  {
    slug: 'ops-outgrown-tools',
    titleKey: 'solutions.cards.opsOutgrown.title',
    descriptionKey: 'solutions.cards.opsOutgrown.description',
    problemHeadline: "Your systems can't keep up with your growth",
    category: 'Infrastructure',
    seoSummary:
      'Operations consulting for growing companies that have outgrown disconnected tools, manual workflows, and fragile reporting.',
    painPoints: [
      `You're managing more SKUs, customers, and transactions than your current systems were designed for`,
      'Your team is filling gaps with spreadsheets, emails, and manual workarounds',
      'Data lives in too many places and no one fully trusts it',
      `Onboarding new employees takes forever because there's no documented process`,
      `You're turning down growth because you know your ops can't handle it`,
    ],
    whatWeDo: [
      'Map your current operational state: tools, workflows, data flows, team structure',
      'Identify the biggest points of friction and highest-cost inefficiencies',
      'Design a connected system architecture for your next growth stage',
      'Build a phased implementation roadmap with clear ROI milestones',
      'Manage the full implementation and ensure a clean handoff to your team',
    ],
    aiOpportunities: [
      'Deploy AI copilots that answer operational questions using approved SOPs, ERP data, and team documentation through a secure RAG layer',
      'Use agentic workflows to triage exceptions, summarize bottlenecks, and route follow-up tasks to the right teams',
      'Turn fragmented tribal knowledge into searchable operational playbooks for faster onboarding and fewer repeat mistakes',
    ],
    outcomes: [
      'A connected operational infrastructure that scales with your business',
      'Dramatically reduced manual work and human error',
      'Real-time visibility into your operations without building custom reports',
      `A team that's confident in the systems they're using`,
      `The operational capacity to take on growth you've been avoiding`,
    ],
    ctaText: 'Get a Free Systems Audit',
    relatedSlugs: ['systems-audit', 'system-integration', 'erp-implementation', 'ai-operations'],
    relatedInsightSlugs: ['ai-operations-readiness', 'system-integration-guide'],
    translations: {
      fr: {
        problemHeadline: 'Vos systèmes ne suivent plus votre croissance',
        category: 'Infrastructure',
        seoSummary:
          "Conseil en opérations pour les entreprises du marché intermédiaire qui ont dépassé des outils déconnectés, des workflows manuels et des rapports fragiles.",
        painPoints: [
          "Vous gérez plus de SKU, de clients et de transactions que vos systèmes actuels ne peuvent supporter",
          "Votre équipe compense avec des feuilles de calcul, des emails et des contournements manuels",
          "Les données vivent dans trop d'endroits et personne ne leur fait totalement confiance",
          "L'intégration des nouveaux employés prend trop de temps faute de processus documenté",
          "Vous refusez de nouvelles opportunités de croissance parce que vos opérations ne tiendront pas la charge",
        ],
        whatWeDo: [
          'Cartographier votre situation opérationnelle actuelle, vos outils, workflows, flux de données et structure d’équipe',
          'Identifier les plus gros points de friction et les inefficacités les plus coûteuses',
          'Concevoir une architecture de systèmes connectés pour votre prochaine phase de croissance',
          'Construire une feuille de route de mise en oeuvre progressive avec des jalons de ROI clairs',
          "Piloter l'implémentation complète et assurer une transition propre vers votre équipe",
        ],
        aiOpportunities: [
          'Déployer des copilotes IA qui répondent aux questions opérationnelles à partir des SOP approuvées, des données ERP et de la documentation d’équipe via une couche RAG sécurisée',
          'Utiliser des workflows agentiques pour trier les exceptions, résumer les goulets d’étranglement et router les actions de suivi',
          'Transformer les connaissances dispersées en playbooks opérationnels consultables pour accélérer l’intégration et réduire les erreurs répétées',
        ],
        outcomes: [
          'Une infrastructure opérationnelle connectée qui évolue avec votre entreprise',
          'Beaucoup moins de travail manuel et moins d’erreurs humaines',
          'Une visibilité en temps réel sur vos opérations sans rapports manuels',
          "Une équipe en confiance avec les systèmes qu'elle utilise",
          'La capacité opérationnelle de prendre la croissance que vous évitiez jusqu’ici',
        ],
        ctaText: 'Obtenir un audit gratuit des systèmes',
      },
      es: {
        problemHeadline: 'Tus sistemas ya no pueden seguir el ritmo de tu crecimiento',
        category: 'Infraestructura',
        seoSummary:
          'Consultoría operativa para empresas del mercado medio que han superado herramientas desconectadas, flujos manuales e informes frágiles.',
        painPoints: [
          'Gestionas más SKU, clientes y transacciones de los que tus sistemas actuales fueron diseñados para soportar',
          'Tu equipo tapa huecos con hojas de cálculo, correos y soluciones manuales',
          'Los datos viven en demasiados lugares y nadie confía del todo en ellos',
          'Incorporar a nuevos empleados tarda demasiado porque no existe un proceso documentado',
          'Estás frenando crecimiento porque sabes que tus operaciones no lo soportan',
        ],
        whatWeDo: [
          'Mapear tu estado operativo actual, herramientas, flujos de trabajo, flujos de datos y estructura del equipo',
          'Identificar los mayores puntos de fricción y las ineficiencias más costosas',
          'Diseñar una arquitectura de sistemas conectados para tu siguiente etapa de crecimiento',
          'Construir una hoja de ruta por fases con hitos claros de ROI',
          'Gestionar toda la implementación y asegurar una transición limpia a tu equipo',
        ],
        aiOpportunities: [
          'Desplegar copilotos de IA que respondan preguntas operativas con SOP aprobados, datos ERP y documentación interna mediante una capa RAG segura',
          'Usar flujos agénticos para clasificar excepciones, resumir cuellos de botella y enrutar acciones de seguimiento',
          'Convertir conocimiento disperso en playbooks operativos consultables para acelerar la incorporación y reducir errores repetidos',
        ],
        outcomes: [
          'Una infraestructura operativa conectada que escala con tu negocio',
          'Mucho menos trabajo manual y menos error humano',
          'Visibilidad en tiempo real de tus operaciones sin construir reportes manuales',
          'Un equipo que confía en los sistemas que usa',
          'La capacidad operativa para asumir el crecimiento que venías evitando',
        ],
        ctaText: 'Obtén una auditoría gratuita de sistemas',
      },
    },
  },
  {
    slug: 'spreadsheet-operations',
    titleKey: 'solutions.cards.spreadsheetOps.title',
    descriptionKey: 'solutions.cards.spreadsheetOps.description',
    problemHeadline: "You're running a growing company on spreadsheets",
    category: 'Operations Infrastructure',
    seoSummary:
      'Spreadsheet replacement consulting for operations teams that need scalable systems, cleaner data, and less manual risk.',
    painPoints: [
      'Critical business processes,  inventory, orders, production planning,  live in Excel',
      'No one person has a complete picture because the data is spread across dozens of files',
      'Spreadsheets break, get corrupted, get emailed to the wrong person',
      'Onboarding a new team member means teaching them which spreadsheet does what',
      "You've outgrown the tool but you don't know what to replace it with",
    ],
    whatWeDo: [
      'Audit every spreadsheet-dependent process in your operation',
      'Identify the right system to replace each workflow category',
      'Migrate your data and business logic into the appropriate tools',
      'Build automation to eliminate manual re-entry between systems',
      'Train your team and document every process we implement',
    ],
    aiOpportunities: [
      'Convert spreadsheet logic into governed workflows that AI agents can monitor, summarize, and flag for exceptions',
      'Use retrieval-backed assistants to help teams find the right version of process rules, pricing assumptions, and operating procedures',
      'Layer AI forecasting and anomaly detection on top of cleaned operational data once it is no longer trapped in Excel files',
    ],
    outcomes: [
      'Core processes running on purpose-built tools, not Excel',
      'Single source of truth for inventory, orders, and operational data',
      'Eliminated risk of spreadsheet corruption or version conflicts',
      'Faster onboarding because systems are intuitive and documented',
      'Hours per week saved on data management tasks',
    ],
    ctaText: 'Replace Your Spreadsheets',
    relatedSlugs: ['ops-outgrown-tools', 'erp-implementation', 'system-integration', 'ai-operations'],
    relatedInsightSlugs: ['spreadsheet-to-erp-migration', 'ai-operations-readiness'],
    translations: {
      fr: {
        problemHeadline: 'Vous gérez une entreprise du marché intermédiaire sur des feuilles de calcul',
        category: 'Infrastructure opérationnelle',
        seoSummary: "Conseil en remplacement des feuilles de calcul pour les équipes opérationnelles qui ont besoin de systèmes évolutifs et de données plus propres.",
        painPoints: ['Des processus critiques vivent dans Excel', 'Les données sont dispersées dans des dizaines de fichiers', 'Les feuilles se cassent, se corrompent ou partent au mauvais destinataire', "Former un nouvel arrivant revient à lui expliquer quel fichier sert à quoi", "Vous avez dépassé l'outil sans savoir quoi mettre à la place"],
        whatWeDo: ['Auditer chaque processus dépendant des feuilles de calcul', 'Identifier le bon système pour chaque catégorie de workflow', 'Migrer vos données et votre logique métier vers les bons outils', 'Construire des automatisations pour supprimer les ressaisies manuelles', 'Former votre équipe et documenter chaque processus mis en place'],
        aiOpportunities: ['Transformer la logique des feuilles en workflows gouvernés que des agents IA peuvent surveiller et résumer', 'Utiliser des assistants basés sur la recherche pour retrouver les bonnes règles de processus et hypothèses métier', "Ajouter de la prévision IA et de la détection d'anomalies une fois les données sorties d'Excel"],
        outcomes: ['Des processus clés exécutés sur de vrais systèmes', 'Une source unique de vérité pour les données opérationnelles', 'La fin des conflits de versions et des corruptions de fichiers', 'Une intégration plus rapide grâce à des systèmes intuitifs', 'Des heures gagnées chaque semaine sur la gestion des données'],
        ctaText: 'Remplacer vos feuilles de calcul',
      },
      es: {
        problemHeadline: 'Estás operando una empresa del mercado medio con hojas de cálculo',
        category: 'Infraestructura operativa',
        seoSummary: 'Consultoría para reemplazar hojas de cálculo por sistemas escalables, confiables y con datos más limpios.',
        painPoints: ['Procesos críticos viven en Excel', 'Los datos están repartidos en decenas de archivos', 'Las hojas se rompen, se corrompen o se envían a la persona equivocada', 'Incorporar a alguien nuevo significa explicarle qué hace cada archivo', 'Ya superaste la herramienta pero no sabes con qué reemplazarla'],
        whatWeDo: ['Auditar cada proceso dependiente de hojas de cálculo', 'Identificar el sistema correcto para cada tipo de flujo', 'Migrar tus datos y lógica de negocio a las herramientas adecuadas', 'Construir automatizaciones para eliminar la recaptura manual', 'Capacitar al equipo y documentar cada proceso implementado'],
        aiOpportunities: ['Convertir la lógica de las hojas en flujos gobernados que agentes de IA puedan supervisar y resumir', 'Usar asistentes de recuperación para encontrar reglas operativas y supuestos correctos', 'Agregar pronóstico con IA y detección de anomalías cuando los datos ya no estén atrapados en Excel'],
        outcomes: ['Procesos clave funcionando en herramientas de verdad', 'Una única fuente de verdad para inventario, pedidos y datos operativos', 'Eliminación del riesgo de corrupción o conflicto de versiones', 'Onboarding más rápido gracias a sistemas intuitivos', 'Horas ahorradas cada semana en tareas de datos'],
        ctaText: 'Reemplaza tus hojas de cálculo',
      },
    },
  },
  {
    slug: 'system-integration',
    titleKey: 'solutions.cards.systemIntegration.title',
    descriptionKey: 'solutions.cards.systemIntegration.description',
    problemHeadline: "Your systems don't talk to each other",
    category: 'Integration',
    seoSummary:
      'System integration consulting to connect ERP, CRM, WMS, ecommerce, and finance platforms across growing operations.',
    painPoints: [
      `You have good software but it's all siloed,  ERP, CRM, WMS, and ecommerce don't share data`,
      'Your team re-keys the same data into 2–4 systems every day',
      'Orders, inventory, and financial data are always slightly out of sync',
      'Reporting requires pulling data from multiple systems and manually combining it',
      'Every new system you add makes the problem worse',
    ],
    whatWeDo: [
      'Map all existing systems and their current data flows (or lack thereof)',
      'Design an integration architecture that connects your core platforms',
      'Build native integrations where available, middleware solutions where needed',
      'Set up automated data sync, error handling, and monitoring',
      'Provide documentation and runbooks for your IT team',
    ],
    aiOpportunities: [
      'Prepare your stack for AI by creating clean, governed data pipelines that retrieval systems and agents can trust',
      'Use AI monitoring to classify sync failures, summarize root causes, and recommend the next operational action',
      'Create unified data access layers that support chat-based reporting and cross-system operational assistants',
    ],
    outcomes: [
      'Data flows automatically between your systems without manual intervention',
      'Single source of truth for orders, inventory, customers, and financials',
      'Hours saved per week on manual data entry and reconciliation',
      'Reduced errors from manual re-keying',
      'Ability to add new systems without creating new silos',
    ],
    ctaText: 'Connect Your Systems',
    relatedSlugs: ['api-integrations', 'erp-implementation', 'ops-outgrown-tools', 'ai-operations'],
    relatedInsightSlugs: ['system-integration-guide', 'building-rag-agents-for-operations'],
    translations: {
      fr: {
        problemHeadline: 'Vos systèmes ne se parlent pas',
        category: 'Intégration',
        seoSummary: 'Conseil en intégration de systèmes pour connecter ERP, CRM, WMS, ecommerce et finance dans des opérations du marché intermédiaire.',
        painPoints: ['Vous avez de bons logiciels mais ils sont en silos', 'Votre équipe ressaisit les mêmes données dans plusieurs systèmes', 'Les commandes, stocks et données financières sont désynchronisés', 'Le reporting exige des consolidations manuelles', 'Chaque nouveau système aggrave le problème'],
        whatWeDo: ['Cartographier les systèmes existants et leurs flux de données', 'Concevoir une architecture d’intégration entre les plateformes clés', 'Construire des intégrations natives ou middleware selon le besoin', 'Mettre en place synchronisation, gestion des erreurs et monitoring', 'Fournir la documentation et les runbooks à votre équipe IT'],
        aiOpportunities: ['Préparer votre stack pour l’IA avec des pipelines de données propres et gouvernés', 'Utiliser l’IA pour classifier les erreurs de synchronisation et recommander la prochaine action', 'Créer des couches d’accès aux données pour le reporting conversationnel et les assistants inter-systèmes'],
        outcomes: ['Des données qui circulent automatiquement entre vos systèmes', 'Une source unique de vérité pour commandes, stocks, clients et finances', 'Des heures gagnées chaque semaine sur la saisie et la réconciliation', 'Moins d’erreurs dues à la ressaisie manuelle', 'La capacité d’ajouter de nouveaux systèmes sans créer de nouveaux silos'],
        ctaText: 'Connecter vos systèmes',
      },
      es: {
        problemHeadline: 'Tus sistemas no se comunican entre sí',
        category: 'Integración',
        seoSummary: 'Consultoría de integración para conectar ERP, CRM, WMS, ecommerce y finanzas en operaciones del mercado medio.',
        painPoints: ['Tienes buen software pero está aislado', 'Tu equipo recaptura los mismos datos en varios sistemas', 'Pedidos, inventario y finanzas siempre están desincronizados', 'Los reportes requieren consolidación manual', 'Cada sistema nuevo empeora el problema'],
        whatWeDo: ['Mapear los sistemas existentes y sus flujos de datos', 'Diseñar una arquitectura de integración entre tus plataformas clave', 'Construir integraciones nativas o middleware según corresponda', 'Configurar sincronización, manejo de errores y monitoreo', 'Entregar documentación y runbooks al equipo interno'],
        aiOpportunities: ['Preparar tu stack para IA con pipelines limpios y gobernados', 'Usar IA para clasificar fallos de sincronización y recomendar la siguiente acción', 'Crear capas de acceso a datos para reportes conversacionales y asistentes entre sistemas'],
        outcomes: ['Los datos fluyen automáticamente entre tus sistemas', 'Una sola fuente de verdad para pedidos, inventario, clientes y finanzas', 'Horas ahorradas cada semana en captura y conciliación', 'Menos errores por recaptura manual', 'La capacidad de añadir nuevos sistemas sin crear nuevos silos'],
        ctaText: 'Conecta tus sistemas',
      },
    },
  },
  {
    slug: 'erp-implementation',
    titleKey: 'solutions.cards.erpImplementation.title',
    descriptionKey: 'solutions.cards.erpImplementation.description',
    problemHeadline: 'You need an ERP that actually fits your operations',
    category: 'ERP',
    seoSummary:
      'ERP implementation support for growing operations teams that need objective selection, clean rollout, and strong adoption.',
    painPoints: [
      `You bought an ERP and it was never fully implemented, or it's barely used`,
      `You're evaluating ERP options but don't know how to compare them objectively`,
      `You've heard horror stories about ERP projects going over budget and timeline`,
      `Your vendor is pushing you toward features you don't need and underselling the complexity`,
      'Your team is resistant because the last software change was a disaster',
    ],
    whatWeDo: [
      'Define your requirements from your operational reality, not from vendor demos',
      'Run a structured vendor selection process across 3–5 shortlisted platforms',
      'Negotiate contracts on your behalf (we know where vendors flex)',
      'Lead the full implementation: configuration, data migration, testing, training',
      'Manage change management and ensure adoption across your team',
    ],
    aiOpportunities: [
      'Use the ERP rollout to establish the data discipline needed for AI forecasting, reporting copilots, and document retrieval',
      'Create role-based AI assistants that help users navigate ERP processes, training content, and exception handling without guesswork',
      'Pair ERP workflows with agentic support for follow-ups, approvals, and operational alerts after go-live',
    ],
    outcomes: [
      `An ERP that's configured for your actual processes, not the default setup`,
      'Full team adoption and confidence in the new system',
      'Clean, migrated historical data with validation',
      'Documented processes and a trained team',
      'An implementation that came in on time and on budget',
    ],
    ctaText: 'Get ERP Implementation Help',
    relatedSlugs: ['systems-audit', 'vendor-management', 'system-integration', 'ai-operations'],
    relatedInsightSlugs: ['why-erp-projects-fail', 'ai-operations-readiness'],
    translations: {
      fr: {
        problemHeadline: 'Vous avez besoin d’un ERP vraiment adapté à vos opérations',
        category: 'ERP',
        seoSummary: 'Accompagnement ERP pour les équipes du marché intermédiaire qui ont besoin d’une sélection objective, d’un déploiement propre et d’une adoption forte.',
        painPoints: ['Vous avez acheté un ERP jamais réellement déployé', 'Vous comparez des ERP sans grille objective', 'Vous avez peur des dépassements de budget et de délais', 'Le fournisseur pousse des fonctionnalités inutiles', 'Votre équipe résiste à cause d’un précédent échec logiciel'],
        whatWeDo: ['Définir vos besoins à partir de la réalité opérationnelle', 'Mener une sélection structurée entre plusieurs plateformes', 'Négocier les contrats en votre nom', 'Piloter configuration, migration, tests et formation', 'Gérer le changement et assurer l’adoption'],
        aiOpportunities: ['Utiliser le projet ERP pour établir la discipline de données requise pour les copilotes IA et le reporting', 'Créer des assistants IA par rôle pour naviguer les processus ERP', 'Ajouter des soutiens agentiques pour les suivis, approbations et alertes après go-live'],
        outcomes: ['Un ERP configuré pour vos vrais processus', 'Une adoption complète par l’équipe', 'Des données historiques propres et validées', 'Des processus documentés et une équipe formée', 'Un projet livré à temps et dans le budget'],
        ctaText: "Obtenir de l'aide pour votre ERP",
      },
      es: {
        problemHeadline: 'Necesitas un ERP que realmente se adapte a tus operaciones',
        category: 'ERP',
        seoSummary: 'Apoyo en implementación ERP para equipos del mercado medio que necesitan selección objetiva, despliegue limpio y adopción real.',
        painPoints: ['Compraste un ERP que nunca quedó bien implementado', 'Estás evaluando ERP sin una comparación objetiva', 'Te preocupan los sobrecostos y retrasos', 'El proveedor empuja funciones que no necesitas', 'Tu equipo se resiste por una mala experiencia anterior'],
        whatWeDo: ['Definir requisitos desde tu realidad operativa', 'Dirigir una selección estructurada entre varias plataformas', 'Negociar contratos en tu nombre', 'Liderar configuración, migración, pruebas y capacitación', 'Gestionar el cambio y asegurar adopción'],
        aiOpportunities: ['Aprovechar el proyecto ERP para establecer la disciplina de datos necesaria para copilotos y reportes con IA', 'Crear asistentes de IA por rol para apoyar procesos ERP', 'Sumar soporte agéntico para seguimientos, aprobaciones y alertas después de la salida en vivo'],
        outcomes: ['Un ERP configurado para tus procesos reales', 'Adopción completa del equipo', 'Datos históricos limpios y validados', 'Procesos documentados y equipo capacitado', 'Una implementación entregada a tiempo y dentro del presupuesto'],
        ctaText: 'Obtén ayuda con tu ERP',
      },
    },
  },
  {
    slug: 'crm-implementation',
    titleKey: 'solutions.cards.crmImplementation.title',
    descriptionKey: 'solutions.cards.crmImplementation.description',
    problemHeadline: 'Your sales team is flying blind',
    category: 'CRM',
    seoSummary:
      'CRM implementation for teams that need pipeline visibility, better forecasting, and stronger sales-to-operations handoffs.',
    painPoints: [
      'Deal tracking lives in individual spreadsheets or email inboxes',
      `You can't accurately forecast revenue because you don't know what's in the pipeline`,
      'Customer history is scattered,  no one person has the full picture',
      'Your CRM was set up years ago and no one actually uses it as intended',
      `Sales and operations are constantly surprised by each other's reality`,
    ],
    whatWeDo: [
      'Define your actual sales process and what your CRM needs to support it',
      'Select and configure a CRM that matches how your team actually sells',
      'Migrate existing contact and deal data',
      'Build the reports and dashboards your leadership team actually needs',
      'Train your sales team and create adoption incentives',
      'Integrate your CRM with your ERP so sales and operations share the same source of truth',
    ],
    aiOpportunities: [
      'Enable AI sales copilots that summarize accounts, surface next-best actions, and retrieve customer context from approved data sources',
      'Use agents to draft follow-ups, identify stalled deals, and escalate handoff risks before they hit operations',
      'Connect CRM knowledge with operational systems so teams can answer customer questions with current inventory, lead time, and project status data',
    ],
    outcomes: [
      'Accurate pipeline visibility for leadership',
      'Sales team using the CRM because it actually helps them, not just for management reporting',
      'Connected customer data between sales and operations',
      'Reliable revenue forecasting',
      'Shorter sales cycles because reps have the context they need',
    ],
    ctaText: 'Fix Your CRM',
    relatedSlugs: ['system-integration', 'ops-outgrown-tools', 'api-integrations', 'ai-operations'],
    relatedInsightSlugs: ['vendor-selection-process', 'building-rag-agents-for-operations'],
    translations: {
      fr: {
        problemHeadline: 'Votre équipe commerciale pilote à vue',
        category: 'CRM',
        seoSummary: 'Implémentation CRM pour les équipes qui ont besoin de visibilité pipeline, de prévisions fiables et de meilleurs relais vers les opérations.',
        painPoints: ['Le suivi des opportunités vit dans des feuilles et boîtes mail', 'Vous ne pouvez pas prévoir le revenu correctement', 'L’historique client est dispersé', 'Votre CRM n’est plus utilisé comme prévu', 'Les ventes et les opérations se surprennent mutuellement'],
        whatWeDo: ['Définir votre vrai processus commercial', 'Choisir et configurer un CRM adapté à votre façon de vendre', 'Migrer les contacts et opportunités existants', 'Construire les rapports et tableaux de bord utiles à la direction', 'Former les équipes et soutenir l’adoption'],
        aiOpportunities: ['Activer des copilotes commerciaux qui résument les comptes et suggèrent les prochaines actions', 'Utiliser des agents pour rédiger des suivis et détecter les opportunités bloquées', 'Relier la connaissance CRM aux systèmes opérationnels pour répondre avec des données actuelles'],
        outcomes: ['Une visibilité pipeline fiable pour la direction', 'Une équipe commerciale qui utilise réellement le CRM', 'Des données client connectées entre ventes et opérations', 'Des prévisions plus fiables', 'Des cycles de vente plus courts grâce à un meilleur contexte'],
        ctaText: 'Corriger votre CRM',
      },
      es: {
        problemHeadline: 'Tu equipo comercial está operando a ciegas',
        category: 'CRM',
        seoSummary: 'Implementación CRM para equipos que necesitan visibilidad del pipeline, mejores pronósticos y mejores handoffs hacia operaciones.',
        painPoints: ['El seguimiento de oportunidades vive en hojas y correos', 'No puedes pronosticar ingresos con precisión', 'El historial del cliente está disperso', 'Tu CRM ya no se usa como fue diseñado', 'Ventas y operaciones se sorprenden mutuamente'],
        whatWeDo: ['Definir tu proceso comercial real', 'Seleccionar y configurar un CRM alineado con tu forma de vender', 'Migrar contactos y oportunidades existentes', 'Construir reportes y tableros útiles para dirección', 'Capacitar al equipo y reforzar la adopción'],
        aiOpportunities: ['Habilitar copilotos comerciales que resuman cuentas y sugieran siguientes acciones', 'Usar agentes para redactar seguimientos y detectar oportunidades estancadas', 'Conectar el conocimiento del CRM con sistemas operativos para responder con datos actuales'],
        outcomes: ['Visibilidad confiable del pipeline para la dirección', 'Un equipo comercial que realmente usa el CRM', 'Datos de clientes conectados entre ventas y operaciones', 'Pronósticos más confiables', 'Ciclos de venta más cortos gracias a un mejor contexto'],
        ctaText: 'Arregla tu CRM',
      },
    },
  },
  {
    slug: 'api-integrations',
    titleKey: 'solutions.cards.apiIntegrations.title',
    descriptionKey: 'solutions.cards.apiIntegrations.description',
    problemHeadline: 'Manual data transfer is killing your productivity',
    category: 'Integration',
    seoSummary:
      'API integration services that automate repetitive data movement and support reliable, scalable operational workflows.',
    painPoints: [
      'Someone on your team spends hours every day copying data between systems',
      `Orders placed on one platform don't automatically appear in your fulfillment system`,
      `Inventory counts are always slightly off because updates don't sync in real time`,
      `You've looked at integration tools but don't know how to evaluate them`,
      `Your IT team doesn't have bandwidth to build and maintain custom integrations`,
    ],
    whatWeDo: [
      'Identify every manual data transfer happening across your operation',
      'Design an integration architecture using the right tools for your stack',
      'Build integrations using native connectors, iPaaS platforms, or custom APIs',
      'Implement error handling, logging, and monitoring so nothing silently fails',
      'Document everything and train whoever will own it going forward',
    ],
    aiOpportunities: [
      'Use API-first architecture to feed RAG systems and agents with current operational data instead of stale exports',
      'Add AI-based classification for inbound requests, tickets, order exceptions, and integration error queues',
      'Create lightweight agents that trigger workflows across systems while preserving approvals and human oversight',
    ],
    outcomes: [
      'Zero manual data re-entry for high-volume, repetitive workflows',
      'Real-time or near-real-time data sync across your core systems',
      'Reduced errors from human data entry',
      'Hours per week saved per team member',
      'Confidence that your data is accurate without manual reconciliation',
    ],
    ctaText: 'Automate Your Data Flows',
    relatedSlugs: ['system-integration', 'erp-implementation', 'ops-outgrown-tools', 'ai-operations'],
    relatedInsightSlugs: ['system-integration-guide', 'building-rag-agents-for-operations'],
    translations: {
      fr: {
        problemHeadline: 'Le transfert manuel de données détruit votre productivité',
        category: 'Intégration',
        seoSummary: 'Services d’intégration API pour automatiser les flux de données répétitifs et soutenir des opérations fiables et évolutives.',
        painPoints: ['Quelqu’un copie des données entre systèmes tous les jours', 'Les commandes ne remontent pas automatiquement vers la logistique', 'Les stocks sont faux faute de synchronisation temps réel', 'Vous ne savez pas comment évaluer les outils d’intégration', 'Votre équipe IT manque de bande passante pour développer et maintenir le tout'],
        whatWeDo: ['Identifier chaque transfert manuel de données', 'Concevoir une architecture adaptée à votre stack', 'Construire des intégrations natives, iPaaS ou API custom', 'Mettre en place gestion des erreurs, logs et monitoring', 'Documenter et former les équipes qui reprendront la main'],
        aiOpportunities: ['Utiliser une architecture API-first pour alimenter des systèmes RAG avec des données à jour', 'Ajouter de la classification IA aux demandes entrantes et files d’exceptions', 'Créer des agents légers qui déclenchent des workflows entre systèmes avec supervision'],
        outcomes: ['Zéro ressaisie sur les flux à fort volume', 'Synchronisation en temps réel ou quasi temps réel', 'Moins d’erreurs humaines', 'Des heures gagnées chaque semaine', 'Une confiance plus élevée dans la qualité des données'],
        ctaText: 'Automatiser vos flux de données',
      },
      es: {
        problemHeadline: 'La transferencia manual de datos está destruyendo tu productividad',
        category: 'Integración',
        seoSummary: 'Servicios de integración API para automatizar movimientos repetitivos de datos y soportar operaciones confiables y escalables.',
        painPoints: ['Alguien copia datos entre sistemas todos los días', 'Los pedidos no llegan automáticamente al sistema de cumplimiento', 'El inventario está desfasado por falta de sincronización', 'No sabes cómo evaluar herramientas de integración', 'Tu equipo de TI no tiene capacidad para construir y mantener integraciones'],
        whatWeDo: ['Identificar cada transferencia manual de datos', 'Diseñar una arquitectura adecuada para tu stack', 'Construir integraciones nativas, iPaaS o APIs personalizadas', 'Implementar manejo de errores, logs y monitoreo', 'Documentar y capacitar a quienes operarán la solución'],
        aiOpportunities: ['Usar una arquitectura API-first para alimentar sistemas RAG con datos actuales', 'Agregar clasificación con IA a solicitudes, tickets y colas de excepción', 'Crear agentes ligeros que disparen flujos entre sistemas con supervisión'],
        outcomes: ['Cero recaptura manual en flujos repetitivos de alto volumen', 'Sincronización en tiempo real o casi real', 'Menos errores humanos', 'Horas ahorradas cada semana', 'Más confianza en la calidad de los datos'],
        ctaText: 'Automatiza tus flujos de datos',
      },
    },
  },
  {
    slug: 'vendor-management',
    titleKey: 'solutions.cards.vendorManagement.title',
    descriptionKey: 'solutions.cards.vendorManagement.description',
    problemHeadline: 'Software selection is a black box',
    category: 'Strategy',
    seoSummary:
      'Software selection and negotiation support for operations leaders making ERP, CRM, and systems decisions.',
    painPoints: [
      `You're evaluating software and every vendor says they can do everything`,
      `You don't have internal expertise to evaluate technical claims objectively`,
      `You're worried about choosing the wrong platform and being locked in`,
      `You've been burned before by a vendor who oversold and underdelivered`,
      `You don't know how to structure contracts or what to negotiate`,
    ],
    whatWeDo: [
      'Define your actual requirements from your workflows, not from RFP templates',
      'Build a shortlist of 3–5 platforms that genuinely match your requirements',
      'Run structured demos focused on your specific use cases, not the standard pitch',
      'Score vendors against your requirements with documented rationale',
      'Support contract negotiations with market knowledge',
    ],
    aiOpportunities: [
      'Evaluate vendor AI claims with the same rigor as core workflow claims so you do not buy vague “AI-ready” promises',
      'Define where RAG, copilots, or agentic automation would create real value before software vendors lock you into their roadmap',
      'Choose platforms with the APIs, permissions, and data models needed for future AI initiatives and governance',
    ],
    outcomes: [
      'A confident, well-documented vendor selection decision',
      'A contract with protections and terms that actually reflect your requirements',
      'A clear implementation plan before any money changes hands',
      'An internal team that understands why they chose what they chose',
      'Avoided cost of choosing the wrong platform',
    ],
    ctaText: 'Get Vendor Selection Help',
    relatedSlugs: ['erp-implementation', 'crm-implementation', 'systems-audit', 'ai-operations'],
    relatedInsightSlugs: ['vendor-selection-process', 'ai-operations-readiness'],
    translations: {
      fr: {
        problemHeadline: 'La sélection de logiciels est une boîte noire',
        category: 'Stratégie',
        seoSummary: 'Accompagnement de sélection et négociation logicielle pour les responsables opérations qui évaluent ERP, CRM et autres systèmes.',
        painPoints: ['Chaque fournisseur dit pouvoir tout faire', 'Vous manquez d’expertise interne pour valider les promesses techniques', 'Vous craignez un mauvais choix et un verrouillage', 'Vous avez déjà été déçus par un fournisseur', 'Vous ne savez pas comment structurer ou négocier les contrats'],
        whatWeDo: ['Définir vos besoins à partir de vos workflows réels', 'Construire une shortlist crédible de plateformes', 'Organiser des démos structurées basées sur vos cas d’usage', 'Noter les fournisseurs avec une logique documentée', 'Soutenir la négociation contractuelle avec un regard marché'],
        aiOpportunities: ['Évaluer les promesses IA des fournisseurs avec la même rigueur que les promesses fonctionnelles', 'Définir où RAG, copilotes ou automatisation agentique créent une vraie valeur', 'Choisir des plateformes avec les API, permissions et modèles de données adaptés à vos futurs projets IA'],
        outcomes: ['Une décision fournisseur confiante et documentée', 'Un contrat mieux aligné avec vos besoins', 'Un plan d’implémentation clair avant la signature', 'Une équipe interne qui comprend le choix réalisé', 'Le coût évité d’un mauvais logiciel'],
        ctaText: "Obtenir de l'aide pour la sélection fournisseur",
      },
      es: {
        problemHeadline: 'La selección de software es una caja negra',
        category: 'Estrategia',
        seoSummary: 'Apoyo en selección y negociación de software para líderes operativos que evalúan ERP, CRM y sistemas críticos.',
        painPoints: ['Cada proveedor dice que puede hacerlo todo', 'No tienes experiencia interna para validar promesas técnicas', 'Te preocupa elegir mal y quedar atrapado', 'Ya te ha fallado un proveedor que prometió de más', 'No sabes cómo estructurar o negociar contratos'],
        whatWeDo: ['Definir requisitos desde tus flujos reales', 'Construir una shortlist creíble de plataformas', 'Dirigir demos estructuradas basadas en tus casos de uso', 'Puntuar a cada proveedor con criterios documentados', 'Apoyar la negociación contractual con criterio de mercado'],
        aiOpportunities: ['Evaluar las promesas de IA con el mismo rigor que las funciones centrales', 'Definir dónde RAG, copilotos o automatización agéntica generan valor real', 'Elegir plataformas con APIs, permisos y modelos de datos aptos para futuras iniciativas de IA'],
        outcomes: ['Una decisión de proveedor más segura y documentada', 'Un contrato mejor alineado con tus requisitos', 'Un plan de implementación claro antes de firmar', 'Un equipo interno que entiende por qué se eligió esa plataforma', 'El costo evitado de elegir la herramienta equivocada'],
        ctaText: 'Obtén ayuda con la selección de proveedores',
      },
    },
  },
  {
    slug: 'custom-api-development',
    titleKey: 'solutions.cards.customApiDevelopment.title',
    descriptionKey: 'solutions.cards.customApiDevelopment.description',
    problemHeadline: 'Off-the-shelf integrations are not enough for how your operation actually works',
    category: 'Custom Development',
    seoSummary:
      'Custom API development for operations teams that need middleware, workflow endpoints, custom data sync, and bespoke integration logic between core systems.',
    painPoints: [
      `Your systems need to exchange data, but the native connectors don't support the business logic you actually need`,
      `You've hit the limits of no-code tools and brittle middleware hacks`,
      'Your workflows require custom validation, transformation, routing, or exception handling',
      `Your team needs stable API infrastructure, not one-off scripts no one wants to maintain`,
      'Every new requirement forces your team back into manual work because the integration layer was never designed properly',
    ],
    whatWeDo: [
      'Design custom API architecture around your actual operational workflows and dependencies',
      'Build middleware, sync services, and workflow endpoints that connect your systems reliably',
      'Handle authentication, error handling, retries, logging, and monitoring so the solution is supportable',
      'Implement the business logic that off-the-shelf connectors cannot represent cleanly',
      'Document the integration layer so your internal team is not trapped by black-box custom code',
    ],
    aiOpportunities: [
      'Create API layers that give RAG systems and AI agents governed access to current operational data',
      'Build custom endpoints that let agents trigger operational workflows with proper approvals and auditability',
      'Use structured API middleware to prepare cleaner event streams for AI monitoring, exception handling, and reporting copilots',
    ],
    outcomes: [
      'An integration layer built around your real process logic instead of connector compromises',
      'Less manual work where custom workflows previously fell between systems',
      'More reliable sync, better observability, and fewer hidden failures',
      'A cleaner foundation for future automation, reporting, and AI use cases',
      'Custom development your team can actually support after launch',
    ],
    ctaText: 'Build Custom API Infrastructure',
    relatedSlugs: ['api-integrations', 'system-integration', 'ecommerce-development', 'ai-operations'],
    relatedInsightSlugs: ['system-integration-guide', 'building-rag-agents-for-operations'],
    translations: {
      fr: {
        problemHeadline:
          "Les intégrations standard ne suffisent pas à la réalité de vos opérations",
        category: 'Développement sur mesure',
        seoSummary:
          'Développement API sur mesure pour équipes opérations ayant besoin de middleware, endpoints métier et logique d’intégration personnalisée.',
        painPoints: [
          'Vos systèmes doivent échanger des données mais les connecteurs natifs ne couvrent pas la logique métier nécessaire',
          'Vous avez atteint les limites des outils no-code et des bricolages middleware',
          'Vos workflows exigent validation, transformation, routage ou gestion d’exceptions sur mesure',
          "Votre équipe a besoin d'une infrastructure API stable, pas de scripts ponctuels",
          'Chaque nouvelle exigence renvoie le travail vers des tâches manuelles',
        ],
        whatWeDo: [
          'Concevoir une architecture API sur mesure autour de vos workflows réels',
          'Construire middleware, services de synchronisation et endpoints métiers',
          'Gérer authentification, erreurs, retries, logs et monitoring',
          'Implémenter la logique métier que les connecteurs standards ne couvrent pas',
          "Documenter l'ensemble pour éviter le code boîte noire",
        ],
        aiOpportunities: [
          'Créer des couches API qui donnent aux systèmes RAG un accès gouverné aux données',
          'Construire des endpoints permettant à des agents IA de déclencher des workflows avec validations',
          'Préparer des flux d’événements plus propres pour monitoring IA et copilotes de reporting',
        ],
        outcomes: [
          'Une couche d’intégration alignée sur votre logique métier réelle',
          'Moins de travail manuel dans les workflows sur mesure',
          'Des synchronisations plus fiables et moins d’échecs cachés',
          "Une meilleure base pour l'automatisation, le reporting et l'IA",
          'Un développement sur mesure que votre équipe peut réellement supporter',
        ],
        ctaText: 'Construire une infrastructure API sur mesure',
      },
      es: {
        problemHeadline:
          'Las integraciones estándar no alcanzan para cómo realmente opera tu negocio',
        category: 'Desarrollo a medida',
        seoSummary:
          'Desarrollo API personalizado para equipos operativos que necesitan middleware, endpoints de flujo y lógica de integración propia.',
        painPoints: [
          'Tus sistemas necesitan intercambiar datos, pero los conectores nativos no cubren la lógica real del negocio',
          'Ya llegaste al límite de herramientas no-code y hacks frágiles de middleware',
          'Tus flujos requieren validación, transformación, enrutamiento o manejo de excepciones personalizado',
          'Tu equipo necesita infraestructura API estable, no scripts aislados',
          'Cada nuevo requerimiento devuelve trabajo manual porque la capa de integración nunca se diseñó bien',
        ],
        whatWeDo: [
          'Diseñar arquitectura API personalizada alrededor de tus flujos reales',
          'Construir middleware, servicios de sincronización y endpoints operativos',
          'Resolver autenticación, errores, reintentos, logs y monitoreo',
          'Implementar la lógica de negocio que los conectores estándar no representan bien',
          'Documentar la capa de integración para que no quede como código caja negra',
        ],
        aiOpportunities: [
          'Crear capas API que den a sistemas RAG y agentes acceso gobernado a datos actuales',
          'Construir endpoints que permitan a agentes activar flujos con aprobaciones y trazabilidad',
          'Preparar eventos más limpios para monitoreo con IA y copilotos de reporting',
        ],
        outcomes: [
          'Una capa de integración basada en tu lógica real de procesos',
          'Menos trabajo manual donde los flujos a medida quedaban entre sistemas',
          'Sincronización más confiable y menos fallos ocultos',
          'Una mejor base para automatización, reporting e IA',
          'Desarrollo personalizado que tu equipo sí puede soportar después del lanzamiento',
        ],
        ctaText: 'Construye infraestructura API personalizada',
      },
    },
  },
  {
    slug: 'ecommerce-development',
    titleKey: 'solutions.cards.ecommerceDevelopment.title',
    descriptionKey: 'solutions.cards.ecommerceDevelopment.description',
    problemHeadline: 'You need ecommerce that works operationally, not just visually',
    category: 'Ecommerce',
    seoSummary:
      'End-to-end ecommerce development for operationally complex businesses needing storefront build, replatforming, backend integrations, and fulfillment-ready workflows.',
    painPoints: [
      `Your current ecommerce setup looks acceptable on the front end but creates chaos for inventory, fulfillment, customer service, and finance`,
      `You're planning a new storefront or replatform but don't want another agency that only thinks about design`,
      'Orders, products, pricing, and customer data need to flow cleanly into the rest of your operation',
      `You've outgrown a simple catalog site and now need a true ecommerce system tied to operational reality`,
      'You need one partner who can think through storefront UX and backend operational consequences at the same time',
    ],
    whatWeDo: [
      'Design and build ecommerce experiences around the operational workflows behind them',
      'Handle replatforming, storefront build, information architecture, and commerce configuration',
      'Connect ecommerce with ERP, CRM, inventory, fulfillment, reporting, and finance systems',
      'Build the workflow logic needed for products, pricing, orders, exceptions, and customer communication',
      'Launch with documentation, stabilization support, and a plan for ongoing maintenance',
    ],
    aiOpportunities: [
      'Use AI copilots to support catalog operations, customer context, exception handling, and internal search across ecommerce data',
      'Create agentic workflows for order triage, support escalation, and fulfillment exception routing with human oversight',
      'Prepare ecommerce and operational data for future AI reporting, forecasting, and customer-service support layers',
    ],
    outcomes: [
      'An ecommerce system built for the way your business actually fulfills and serves customers',
      'A stronger connection between storefront experience and backend operations',
      'Cleaner data flow across orders, inventory, pricing, and customer records',
      'Less manual patchwork after launch and fewer operational surprises',
      'A platform your team can grow without constantly fighting the underlying setup',
    ],
    ctaText: 'Build Your Ecommerce Platform',
    relatedSlugs: ['system-integration', 'custom-api-development', 'api-integrations', 'crm-implementation'],
    relatedInsightSlugs: ['system-integration-guide', 'vendor-selection-process'],
    translations: {
      fr: {
        problemHeadline:
          'Vous avez besoin d’un ecommerce qui fonctionne aussi sur le plan opérationnel',
        category: 'Ecommerce',
        seoSummary:
          'Développement ecommerce de bout en bout pour entreprises ayant besoin de storefront, replatforming et intégrations backend solides.',
        painPoints: [
          'Votre ecommerce paraît correct côté front mais crée du chaos pour stocks, fulfillment, service client et finance',
          'Vous préparez une nouvelle boutique ou une replatforming sans vouloir une agence seulement design',
          'Commandes, produits, prix et données clients doivent circuler proprement dans le reste de vos opérations',
          'Vous avez dépassé un site catalogue simple et avez besoin d’un vrai système ecommerce',
          'Vous cherchez un partenaire capable de penser UX storefront et conséquences backend en même temps',
        ],
        whatWeDo: [
          'Concevoir et construire une expérience ecommerce autour des workflows opérationnels',
          'Gérer replatforming, storefront, architecture de l’information et configuration commerce',
          'Connecter ecommerce à ERP, CRM, inventaire, fulfillment, reporting et finance',
          'Construire la logique de workflow pour produits, prix, commandes, exceptions et communication client',
          'Lancer avec documentation, stabilisation et plan de maintenance',
        ],
        aiOpportunities: [
          'Utiliser des copilotes IA pour opérations catalogue, contexte client et gestion des exceptions',
          'Créer des workflows agentiques pour triage de commandes et escalade de support',
          'Préparer les données ecommerce pour reporting IA, prévision et support client futur',
        ],
        outcomes: [
          'Un système ecommerce construit pour votre réalité de fulfillment et de service',
          'Un lien plus fort entre storefront et backend',
          'Des flux de données plus propres sur commandes, stocks, prix et clients',
          'Moins de bricolage manuel après lancement',
          'Une plateforme que votre équipe peut faire évoluer sans subir sa base technique',
        ],
        ctaText: 'Construire votre plateforme ecommerce',
      },
      es: {
        problemHeadline:
          'Necesitas ecommerce que funcione operativamente, no solo visualmente',
        category: 'Ecommerce',
        seoSummary:
          'Desarrollo ecommerce de extremo a extremo para empresas con complejidad operativa que necesitan storefront, replatforming e integraciones backend.',
        painPoints: [
          'Tu ecommerce puede verse bien al frente, pero crea caos en inventario, fulfillment, servicio al cliente y finanzas',
          'Estás planeando una nueva tienda o replatform sin querer otra agencia que solo piense en diseño',
          'Pedidos, productos, precios y datos de clientes deben fluir bien al resto de la operación',
          'Ya superaste un sitio catálogo simple y ahora necesitas un sistema ecommerce real',
          'Necesitas un partner que piense UX de storefront y consecuencias operativas al mismo tiempo',
        ],
        whatWeDo: [
          'Diseñar y construir experiencias ecommerce alrededor de los flujos operativos reales',
          'Gestionar replatforming, storefront, arquitectura de información y configuración comercial',
          'Conectar ecommerce con ERP, CRM, inventario, fulfillment, reporting y finanzas',
          'Construir la lógica necesaria para productos, precios, pedidos, excepciones y comunicación al cliente',
          'Lanzar con documentación, soporte de estabilización y plan de mantenimiento',
        ],
        aiOpportunities: [
          'Usar copilotos de IA para catálogo, contexto del cliente y manejo de excepciones',
          'Crear flujos agénticos para triage de pedidos y escalado de soporte',
          'Preparar datos ecommerce para reporting, pronóstico y soporte con IA',
        ],
        outcomes: [
          'Un sistema ecommerce diseñado para cómo realmente cumples y atiendes clientes',
          'Una conexión más fuerte entre storefront y operaciones backend',
          'Flujos de datos más limpios entre pedidos, inventario, precios y clientes',
          'Menos parches manuales después del lanzamiento',
          'Una plataforma que tu equipo puede escalar sin pelear con la base técnica',
        ],
        ctaText: 'Construye tu plataforma ecommerce',
      },
    },
  },
  {
    slug: 'systems-audit',
    titleKey: 'solutions.cards.systemsAudit.title',
    descriptionKey: 'solutions.cards.systemsAudit.description',
    problemHeadline: "You don't know where to start",
    category: 'Strategy',
    seoSummary:
      'Operational systems audit for companies that need a clear roadmap across ERP, integrations, spreadsheets, and AI readiness.',
    painPoints: [
      `You know your operations have problems but you're not sure which ones to fix first`,
      'You have a list of system improvement ideas but no way to prioritize them',
      `Leadership has different opinions on what's broken and what to do about it`,
      `You've gotten advice from vendors but you know they're biased`,
      'You want an objective outside view before committing to a large investment',
    ],
    whatWeDo: [
      'Interview key stakeholders across operations, finance, and sales',
      'Map your current systems, workflows, and data flows',
      'Identify gaps, redundancies, and high-cost inefficiencies',
      'Benchmark against what best-in-class operations look like at your size',
      'Deliver a prioritized roadmap with effort estimates and ROI projections',
    ],
    aiOpportunities: [
      'Assess AI readiness across data quality, permissions, documentation maturity, and process stability before any rollout begins',
      'Identify the highest-ROI use cases for RAG assistants, workflow agents, and AI-enabled reporting inside your current stack',
      'Build an implementation roadmap that sequences foundations first so AI investments land on stable operational ground',
    ],
    outcomes: [
      'A complete map of your operational tech stack and where it breaks down',
      'A prioritized list of improvements ranked by impact and implementation complexity',
      'Alignment across leadership on what to fix and in what order',
      `Clear business cases for the investments you're considering`,
      'A confident starting point,  no more analysis paralysis',
    ],
    ctaText: 'Book a Systems Audit',
    relatedSlugs: ['ops-outgrown-tools', 'erp-implementation', 'vendor-management', 'ai-operations'],
    relatedInsightSlugs: ['ai-operations-readiness', 'vendor-selection-process'],
    translations: {
      fr: {
        problemHeadline: 'Vous ne savez pas par où commencer',
        category: 'Stratégie',
        seoSummary: 'Audit des systèmes opérationnels pour les entreprises qui ont besoin d’une feuille de route claire sur ERP, intégrations, feuilles de calcul et préparation IA.',
        painPoints: ['Vous savez que vos opérations ont des problèmes mais pas lesquels traiter en premier', 'Vous avez des idées d’amélioration sans moyen de prioriser', 'La direction n’est pas alignée sur ce qui est cassé', 'Les conseils fournisseurs vous semblent biaisés', 'Vous voulez une vision externe avant un investissement important'],
        whatWeDo: ['Interviewer les parties prenantes clés', 'Cartographier les systèmes, workflows et flux de données actuels', 'Identifier les écarts, doublons et inefficacités coûteuses', 'Comparer votre situation aux meilleures pratiques de votre taille', 'Livrer une feuille de route priorisée avec effort et ROI estimés'],
        aiOpportunities: ['Évaluer votre préparation IA sur la qualité des données, les permissions, la documentation et la stabilité des processus', 'Identifier les cas d’usage à plus fort ROI pour assistants RAG, agents et reporting IA', 'Construire une feuille de route qui séquence les fondations avant les investissements IA'],
        outcomes: ['Une carte complète de votre stack opérationnelle et de ses ruptures', 'Une liste priorisée d’améliorations classées par impact et complexité', 'Un meilleur alignement de la direction sur les priorités', 'Des business cases plus clairs pour les investissements envisagés', 'Un point de départ solide sans paralysie analytique'],
        ctaText: 'Réserver un audit des systèmes',
      },
      es: {
        problemHeadline: 'No sabes por dónde empezar',
        category: 'Estrategia',
        seoSummary: 'Auditoría de sistemas operativos para empresas que necesitan una hoja de ruta clara sobre ERP, integraciones, hojas de cálculo y preparación para IA.',
        painPoints: ['Sabes que tus operaciones tienen problemas pero no cuáles atacar primero', 'Tienes ideas de mejora sin forma de priorizarlas', 'La dirección no está alineada sobre qué está roto', 'Los consejos de proveedores te parecen sesgados', 'Quieres una visión externa antes de una inversión grande'],
        whatWeDo: ['Entrevistar a las partes interesadas clave', 'Mapear sistemas, flujos de trabajo y flujos de datos actuales', 'Identificar vacíos, redundancias e ineficiencias costosas', 'Comparar tu situación con buenas prácticas según tu tamaño', 'Entregar una hoja de ruta priorizada con esfuerzo y ROI estimado'],
        aiOpportunities: ['Evaluar tu preparación para IA en calidad de datos, permisos, documentación y estabilidad de procesos', 'Identificar los casos de uso con mayor ROI para asistentes RAG, agentes y reporting con IA', 'Construir una hoja de ruta que ordene primero las bases y luego las inversiones en IA'],
        outcomes: ['Un mapa completo de tu stack operativo y de dónde falla', 'Una lista priorizada de mejoras según impacto y complejidad', 'Mayor alineación directiva sobre qué corregir y en qué orden', 'Casos de negocio más claros para las inversiones consideradas', 'Un punto de partida confiable sin parálisis por análisis'],
        ctaText: 'Reserva una auditoría de sistemas',
      },
    },
  },
  {
    slug: 'mobile-warehouse-barcoding',
    titleKey: 'solutions.cards.mobileWarehouse.title',
    descriptionKey: 'solutions.cards.mobileWarehouse.description',
    problemHeadline: 'Your warehouse is running on paper and guesswork',
    category: 'Infrastructure',
    seoSummary:
      'Mobile warehouse and barcoding solutions integrated with your ERP for real-time inventory accuracy, faster throughput, and error-proof operations.',
    painPoints: [
      "Inventory counts don't match what's actually on the shelf",
      'Picking errors lead to wrong shipments and customer complaints',
      'Receiving is slow, manual, and prone to mistakes',
      'Staff rely on paper, spreadsheets, or memory to move inventory',
      "You don't know where items are within the warehouse",
      'Cycle counts are disruptive and rarely trusted',
      "Warehouse updates lag behind what's happening in real life",
    ],
    whatWeDo: [
      'Map your warehouse workflows across receiving, putaway, picking, production, and shipping',
      'Define barcode and labeling standards that support consistent, reliable scanning',
      'Set up location and bin structures to enable accurate inventory tracking',
      'Lead the full implementation end-to-end, from setup through to rollout on the floor',
      'Manage change management and ensure adoption across your team',
    ],
    aiOpportunities: [
      'Use AI to optimize pick paths and warehouse slotting based on order patterns',
      'Deploy agents that flag inventory discrepancies and suggest cycle count priorities',
      'Enable voice-assisted picking and receiving workflows using mobile devices',
    ],
    outcomes: [
      'Real-time inventory accuracy from the floor',
      'Faster warehouse throughput with less effort',
      'Full location-level visibility',
      'Error-proof picking, receiving, and shipping',
      'Documented processes and a trained team',
    ],
    ctaText: 'Modernize Your Warehouse',
    relatedSlugs: ['erp-implementation', 'system-integration', 'ops-outgrown-tools'],
    relatedInsightSlugs: [],
    translations: {
      fr: {
        problemHeadline: "Votre entrepôt fonctionne au papier et à l'intuition",
        category: 'Infrastructure',
        seoSummary:
          "Solutions d'entrepôt mobile et de codes-barres intégrées à votre ERP pour une précision d'inventaire en temps réel et des opérations sans erreurs.",
        painPoints: [
          'Les comptages d\'inventaire ne correspondent pas à ce qui est réellement en rayon',
          'Les erreurs de préparation entraînent des expéditions erronées et des plaintes clients',
          'La réception est lente, manuelle et sujette aux erreurs',
          'Le personnel s\'appuie sur le papier, les feuilles de calcul ou la mémoire',
          'Vous ne savez pas où se trouvent les articles dans l\'entrepôt',
          'Les comptages cycliques sont perturbants et rarement fiables',
          'Les mises à jour de l\'entrepôt sont en retard sur la réalité',
        ],
        whatWeDo: [
          'Cartographier vos flux d\'entrepôt : réception, rangement, préparation, production et expédition',
          'Définir les normes de codes-barres et d\'étiquetage',
          'Mettre en place les structures d\'emplacements et de bacs pour un suivi précis',
          'Piloter l\'implémentation complète de bout en bout',
          'Gérer le changement et assurer l\'adoption par l\'équipe',
        ],
        aiOpportunities: [
          'Utiliser l\'IA pour optimiser les parcours de prélèvement et le rangement',
          'Déployer des agents qui signalent les écarts d\'inventaire',
          'Activer la préparation et la réception assistées par la voix',
        ],
        outcomes: [
          'Précision d\'inventaire en temps réel depuis le terrain',
          'Débit d\'entrepôt plus rapide avec moins d\'effort',
          'Visibilité complète au niveau des emplacements',
          'Préparation, réception et expédition sans erreurs',
          'Processus documentés et équipe formée',
        ],
        ctaText: 'Moderniser votre entrepôt',
      },
      es: {
        problemHeadline: 'Tu almacén funciona con papel y suposiciones',
        category: 'Infraestructura',
        seoSummary:
          'Soluciones de almacén móvil y códigos de barras integradas con tu ERP para precisión de inventario en tiempo real y operaciones sin errores.',
        painPoints: [
          'Los conteos de inventario no coinciden con lo que realmente hay en el estante',
          'Los errores de picking llevan a envíos incorrectos y quejas de clientes',
          'La recepción es lenta, manual y propensa a errores',
          'El personal depende del papel, hojas de cálculo o la memoria',
          'No sabes dónde están los artículos dentro del almacén',
          'Los conteos cíclicos son disruptivos y raramente confiables',
          'Las actualizaciones del almacén van detrás de lo que pasa en la realidad',
        ],
        whatWeDo: [
          'Mapear tus flujos de almacén: recepción, almacenamiento, picking, producción y envío',
          'Definir estándares de códigos de barras y etiquetado',
          'Configurar estructuras de ubicación y bins para un seguimiento preciso',
          'Liderar la implementación completa de principio a fin',
          'Gestionar el cambio y asegurar la adopción del equipo',
        ],
        aiOpportunities: [
          'Usar IA para optimizar rutas de picking y ubicación de productos',
          'Desplegar agentes que detecten discrepancias de inventario',
          'Habilitar picking y recepción asistidos por voz',
        ],
        outcomes: [
          'Precisión de inventario en tiempo real desde el piso',
          'Mayor rendimiento del almacén con menos esfuerzo',
          'Visibilidad completa a nivel de ubicación',
          'Picking, recepción y envío sin errores',
          'Procesos documentados y equipo capacitado',
        ],
        ctaText: 'Moderniza tu almacén',
      },
    },
  },
  {
    slug: 'project-management',
    titleKey: 'solutions.cards.projectManagement.title',
    descriptionKey: 'solutions.cards.projectManagement.description',
    problemHeadline: 'Your software project exists but nobody really owns it',
    category: 'Delivery',
    seoSummary:
      'Project management for software implementations that need structure, accountability, and someone to drive them forward.',
    painPoints: [
      "The project exists… but no one really owns it",
      "You should have a PM, but don't have the capacity",
      'Things keep moving, but not necessarily forward',
      'Requirements keep changing or getting lost in translation',
      'Meetings happen, but decisions and next steps are unclear',
    ],
    whatWeDo: [
      'Act as your dedicated project manager across internal teams and software companies',
      'Provide structure through regular updates, status reporting, and decision tracking',
      'Step in to support or execute technical work when needed — bridging strategy and delivery',
      'Adapt to your situation — whether you need full project leadership or supplemental support',
    ],
    aiOpportunities: [
      'Use AI to auto-generate status reports from project tracking tools and meeting notes',
      'Deploy agents that flag at-risk tasks and suggest reprioritization based on dependencies',
      'Enable natural-language project queries so stakeholders get instant answers without digging through tools',
    ],
    outcomes: [
      'A clear, structured project plan with defined timelines and ownership',
      'Projects that move forward — on time and with clarity',
      'A single point of accountability across teams and software companies',
      'Reduced internal burden on your staff',
      'Confidence that both the project and execution are in good hands',
    ],
    ctaText: 'Get Project Support',
    relatedSlugs: ['erp-implementation', 'crm-implementation', 'system-integration'],
    relatedInsightSlugs: [],
    translations: {
      fr: {
        problemHeadline: 'Votre projet logiciel existe mais personne ne le porte vraiment',
        category: 'Livraison',
        seoSummary:
          'Gestion de projet pour les implémentations logicielles qui ont besoin de structure, de responsabilité et de quelqu\'un pour les faire avancer.',
        painPoints: [
          'Le projet existe… mais personne ne le porte vraiment',
          'Vous devriez avoir un chef de projet mais vous n\'avez pas la capacité',
          'Les choses avancent, mais pas nécessairement dans la bonne direction',
          'Les exigences changent constamment ou se perdent en traduction',
          'Les réunions ont lieu mais les décisions et prochaines étapes sont floues',
        ],
        whatWeDo: [
          'Agir comme votre chef de projet dédié entre équipes internes et éditeurs logiciels',
          'Apporter de la structure via des mises à jour régulières et le suivi des décisions',
          'Intervenir sur le volet technique quand nécessaire — entre stratégie et livraison',
          'S\'adapter à votre situation — pilotage complet ou support ponctuel',
        ],
        aiOpportunities: [
          'Utiliser l\'IA pour générer automatiquement des rapports d\'avancement',
          'Déployer des agents qui signalent les tâches à risque',
          'Permettre des requêtes projet en langage naturel pour les parties prenantes',
        ],
        outcomes: [
          'Un plan de projet clair avec des délais et responsabilités définis',
          'Des projets qui avancent — dans les temps et avec clarté',
          'Un seul point de responsabilité entre équipes et éditeurs',
          'Moins de charge pour votre équipe interne',
          'La confiance que le projet et l\'exécution sont entre de bonnes mains',
        ],
        ctaText: 'Obtenir un soutien projet',
      },
      es: {
        problemHeadline: 'Tu proyecto de software existe pero nadie realmente lo lidera',
        category: 'Entrega',
        seoSummary:
          'Gestión de proyectos para implementaciones de software que necesitan estructura, responsabilidad y alguien que los impulse.',
        painPoints: [
          'El proyecto existe… pero nadie realmente lo lidera',
          'Deberías tener un PM, pero no tienes la capacidad',
          'Las cosas se mueven, pero no necesariamente hacia adelante',
          'Los requisitos cambian constantemente o se pierden en la traducción',
          'Las reuniones suceden, pero las decisiones y próximos pasos no quedan claros',
        ],
        whatWeDo: [
          'Actuar como tu gerente de proyecto dedicado entre equipos internos y empresas de software',
          'Aportar estructura con actualizaciones regulares y seguimiento de decisiones',
          'Intervenir en el trabajo técnico cuando sea necesario — entre estrategia y entrega',
          'Adaptarnos a tu situación — liderazgo completo o soporte puntual',
        ],
        aiOpportunities: [
          'Usar IA para generar automáticamente reportes de avance',
          'Desplegar agentes que señalen tareas en riesgo',
          'Habilitar consultas de proyecto en lenguaje natural para stakeholders',
        ],
        outcomes: [
          'Un plan de proyecto claro con plazos y responsabilidades definidos',
          'Proyectos que avanzan — a tiempo y con claridad',
          'Un solo punto de responsabilidad entre equipos y proveedores',
          'Menor carga para tu equipo interno',
          'Confianza en que el proyecto y la ejecución están en buenas manos',
        ],
        ctaText: 'Obtén soporte de proyecto',
      },
    },
  },
  {
    slug: 'operational-process-foundations',
    titleKey: 'solutions.cards.processFoundations.title',
    descriptionKey: 'solutions.cards.processFoundations.description',
    problemHeadline: "The issue isn't your system — it's how it's being used",
    category: 'Operations',
    seoSummary:
      'Operational process and system foundations consulting to standardize workflows, improve data quality, and get more from your existing tools.',
    painPoints: [
      'Your system is in place, but your team uses it inconsistently',
      "Inventory or order data isn't reliable, but the root cause is unclear",
      "Processes live in people's heads — not documented or standardized",
      'Workarounds and manual steps have become the norm',
      "You're not sure what 'good' looks like for your operations",
    ],
    whatWeDo: [
      'Assess your current workflows and identify key problem areas',
      'Identify gaps between current processes and best practices',
      'Define clear, practical workflows your team can actually follow',
      'Provide hands-on training tailored to your team and systems',
      'Guide you on how to better use the tools you already have',
    ],
    aiOpportunities: [
      'Use AI to monitor process adherence and flag deviations from standard workflows',
      'Deploy agents that detect data quality issues and suggest corrections in real time',
      'Enable AI-assisted onboarding and training for new team members on standardized processes',
    ],
    outcomes: [
      'Clear, standardized processes your team can rely on',
      'Improved accuracy and consistency across operations',
      'A team that understands how and why things should be done',
      'Better use of your existing systems — without needing to replace them',
      'A stronger operational foundation to support growth',
    ],
    ctaText: 'Strengthen Your Operations',
    relatedSlugs: ['ops-outgrown-tools', 'erp-implementation', 'systems-audit'],
    relatedInsightSlugs: [],
    translations: {
      fr: {
        problemHeadline: "Le problème n'est pas votre système — c'est comment il est utilisé",
        category: 'Opérations',
        seoSummary:
          'Conseil en processus opérationnels et fondations système pour standardiser les workflows, améliorer la qualité des données et mieux utiliser vos outils existants.',
        painPoints: [
          'Votre système est en place mais votre équipe l\'utilise de façon incohérente',
          'Les données d\'inventaire ou de commandes ne sont pas fiables sans cause claire',
          'Les processus vivent dans la tête des gens — pas documentés ni standardisés',
          'Les solutions de contournement et étapes manuelles sont devenues la norme',
          'Vous n\'êtes pas sûr de ce à quoi de bonnes opérations ressemblent',
        ],
        whatWeDo: [
          'Évaluer vos workflows actuels et identifier les zones problématiques',
          'Identifier les écarts entre processus actuels et meilleures pratiques',
          'Définir des workflows clairs et pratiques que votre équipe peut suivre',
          'Fournir une formation pratique adaptée à votre équipe et vos systèmes',
          'Vous guider pour mieux utiliser les outils que vous avez déjà',
        ],
        aiOpportunities: [
          'Utiliser l\'IA pour surveiller le respect des processus et signaler les écarts',
          'Déployer des agents qui détectent les problèmes de qualité de données',
          'Permettre l\'intégration et la formation assistées par IA pour les nouveaux membres',
        ],
        outcomes: [
          'Des processus clairs et standardisés sur lesquels votre équipe peut compter',
          'Une meilleure précision et cohérence dans les opérations',
          'Une équipe qui comprend comment et pourquoi les choses doivent être faites',
          'Une meilleure utilisation de vos systèmes existants — sans les remplacer',
          'Des fondations opérationnelles plus solides pour soutenir la croissance',
        ],
        ctaText: 'Renforcer vos opérations',
      },
      es: {
        problemHeadline: 'El problema no es tu sistema — es cómo se está usando',
        category: 'Operaciones',
        seoSummary:
          'Consultoría de procesos operativos y fundamentos de sistemas para estandarizar flujos, mejorar calidad de datos y aprovechar mejor tus herramientas existentes.',
        painPoints: [
          'Tu sistema está implementado pero tu equipo lo usa de forma inconsistente',
          'Los datos de inventario o pedidos no son confiables sin causa clara',
          'Los procesos viven en la cabeza de las personas — no documentados ni estandarizados',
          'Las soluciones provisionales y pasos manuales se han vuelto la norma',
          'No estás seguro de cómo se ven unas buenas operaciones',
        ],
        whatWeDo: [
          'Evaluar tus flujos de trabajo actuales e identificar áreas problemáticas',
          'Identificar brechas entre procesos actuales y mejores prácticas',
          'Definir flujos claros y prácticos que tu equipo pueda seguir',
          'Proporcionar capacitación práctica adaptada a tu equipo y sistemas',
          'Guiarte para aprovechar mejor las herramientas que ya tienes',
        ],
        aiOpportunities: [
          'Usar IA para monitorear la adherencia a procesos y señalar desviaciones',
          'Desplegar agentes que detecten problemas de calidad de datos',
          'Habilitar onboarding y capacitación asistidos por IA para nuevos miembros',
        ],
        outcomes: [
          'Procesos claros y estandarizados en los que tu equipo puede confiar',
          'Mayor precisión y consistencia en las operaciones',
          'Un equipo que entiende cómo y por qué se deben hacer las cosas',
          'Mejor uso de tus sistemas existentes — sin necesidad de reemplazarlos',
          'Una base operativa más sólida para soportar el crecimiento',
        ],
        ctaText: 'Fortalece tus operaciones',
      },
    },
  },
]

export function getSolutionBySlug(slug: string): SolutionData | undefined {
  return solutions.find((s) => s.slug === slug)
}

export function getAllSolutionSlugs(): string[] {
  return solutions.map((s) => s.slug)
}

export function getLocalizedSolutionBySlug(
  slug: string,
  locale: string
): SolutionData | undefined {
  const solution = getSolutionBySlug(slug)
  if (!solution) return undefined

  if (locale !== 'fr' && locale !== 'es') return solution

  const translated = solution.translations?.[locale]
  if (!translated) return solution

  return {
    ...solution,
    ...translated,
  }
}
