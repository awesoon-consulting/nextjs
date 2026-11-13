import type { GlossaryTerm } from './types'

export const TERMS_C: GlossaryTerm[] = [
  {
    slug: "erp",
    category: "erp",
    hub: "/erp-crm",
    related: ["erp-implementation", "system-of-record", "order-to-cash", "procure-to-pay", "crm"],
    copy: {
      en: {
        term: "ERP",
        definition: "An ERP (enterprise resource planning) system is one shared software platform that runs a company's core operations, such as finance, inventory, purchasing and sales, on a single database.",
        explanation: "Without an ERP, a business often keeps orders in one tool, stock in a spreadsheet and the books in an accounting package. Every handoff between them is typed in again by someone, and the numbers drift apart.\n\nAn ERP puts those jobs in one place. When a building supply distributor ships an order, the stock count drops, the invoice is created and the revenue lands in the ledger, all from the same record.\n\nThe real value is not the software itself. It is that everyone looks at the same numbers, so the warehouse, sales and accounting stop arguing about whose spreadsheet is right.",
        breaks: [
          { title: "Old habits survive next to the new system.", detail: "Staff keep their side spreadsheets because they trust them more. The ERP then holds half the truth and nobody fully believes it." },
          { title: "The software is bent to match every old process.", detail: "Heavy custom code makes upgrades slow and costly. Some old steps were only there because the old tools were weak." },
          { title: "Master data is messy from day one.", detail: "Duplicate customers, wrong units and old item codes get loaded as is. Every report built on top inherits the mess." },
          { title: "Nobody owns the system after go-live.", detail: "Without a named owner, small issues pile up and users quietly build workarounds." }
        ],
        faq: [
          { q: "What is the difference between ERP and accounting software?", a: "Accounting software tracks money. An ERP also runs the operations that create those numbers, such as inventory, purchasing, production and order fulfillment." },
          { q: "When does a small business need an ERP?", a: "Usually when the same data is retyped across several tools, month-end takes too long, or nobody can trust stock levels. Growth in locations, products or staff tends to force the question." }
        ]
      },
      fr: {
        term: "ERP (PGI)",
        definition: "Un ERP (progiciel de gestion intégré) est une plateforme logicielle commune qui gère les opérations clés d'une entreprise, comme la finance, les stocks, les achats et les ventes, dans une seule base de données.",
        explanation: "Sans ERP, une entreprise garde souvent les commandes dans un outil, les stocks dans un chiffrier et la comptabilité dans un logiciel à part. Chaque transfert entre eux est ressaisi à la main, et les chiffres finissent par diverger.\n\nUn ERP regroupe ces tâches. Quand un distributeur de matériaux de construction expédie une commande, le stock baisse, la facture est créée et le revenu entre au grand livre, à partir du même enregistrement.\n\nLa vraie valeur n'est pas le logiciel. C'est que tout le monde voit les mêmes chiffres, et l'entrepôt, les ventes et la comptabilité cessent de se disputer sur le bon chiffrier.",
        breaks: [
          { title: "Les vieilles habitudes survivent à côté du nouveau système.", detail: "Le personnel garde ses chiffriers parce qu'il leur fait plus confiance. L'ERP ne contient alors qu'une partie de la vérité et personne n'y croit vraiment." },
          { title: "Le logiciel est plié à chaque ancien processus.", detail: "Beaucoup de code sur mesure rend les mises à niveau lentes et coûteuses. Certaines étapes n'existaient que parce que les anciens outils étaient faibles." },
          { title: "Les données de base sont désordonnées dès le départ.", detail: "Clients en double, mauvaises unités et vieux codes d'articles sont chargés tels quels. Chaque rapport hérite du désordre." },
          { title: "Personne ne s'occupe du système après la mise en service.", detail: "Sans responsable nommé, les petits problèmes s'accumulent et les utilisateurs créent des contournements en silence." }
        ],
        faq: [
          { q: "Quelle est la différence entre un ERP et un logiciel comptable?", a: "Un logiciel comptable suit l'argent. Un ERP gère aussi les opérations qui produisent ces chiffres, comme les stocks, les achats, la production et l'exécution des commandes." },
          { q: "Quand une petite entreprise a-t-elle besoin d'un ERP?", a: "Souvent quand les mêmes données sont ressaisies dans plusieurs outils, que la fin de mois est trop longue ou que personne ne se fie aux niveaux de stock. La croissance en sites, produits ou employés pose généralement la question." }
        ]
      },
      es: {
        term: "ERP",
        definition: "Un ERP (planificación de recursos empresariales) es una plataforma de software compartida que gestiona las operaciones centrales de una empresa, como finanzas, inventario, compras y ventas, en una sola base de datos.",
        explanation: "Sin un ERP, una empresa suele tener los pedidos en una herramienta, el inventario en una hoja de cálculo y la contabilidad en otro programa. Cada traspaso entre ellos se vuelve a escribir a mano y los números terminan sin coincidir.\n\nUn ERP reúne esas tareas. Cuando un distribuidor de materiales de construcción envía un pedido, baja el inventario, se crea la factura y el ingreso entra al libro mayor, todo desde el mismo registro.\n\nEl valor real no es el software. Es que todos ven los mismos números, y el almacén, ventas y contabilidad dejan de discutir sobre qué hoja de cálculo tiene la razón.",
        breaks: [
          { title: "Los viejos hábitos sobreviven junto al sistema nuevo.", detail: "El personal conserva sus hojas de cálculo porque confía más en ellas. El ERP solo tiene la mitad de la verdad y nadie le cree del todo." },
          { title: "El software se adapta a cada proceso antiguo.", detail: "Mucho código a medida vuelve las actualizaciones lentas y caras. Algunos pasos solo existían porque las herramientas anteriores eran débiles." },
          { title: "Los datos maestros están desordenados desde el primer día.", detail: "Clientes duplicados, unidades erróneas y códigos viejos se cargan tal cual. Cada reporte hereda el desorden." },
          { title: "Nadie se hace cargo del sistema tras la puesta en marcha.", detail: "Sin un responsable, los pequeños problemas se acumulan y los usuarios crean soluciones alternas en silencio." }
        ],
        faq: [
          { q: "¿Cuál es la diferencia entre un ERP y un software contable?", a: "El software contable registra el dinero. Un ERP también gestiona las operaciones que generan esas cifras, como inventario, compras, producción y despacho de pedidos." },
          { q: "¿Cuándo necesita un ERP una pequeña empresa?", a: "Por lo general cuando los mismos datos se capturan en varias herramientas, el cierre de mes tarda demasiado o nadie confía en el inventario. El crecimiento en sedes, productos o personal suele forzar la decisión." }
        ]
      }
    }
  },
  {
    slug: "erp-implementation",
    category: "erp",
    hub: "/erp-crm",
    related: ["fit-gap-analysis", "data-migration", "go-live", "customization-vs-configuration", "erp"],
    copy: {
      en: {
        term: "ERP implementation",
        definition: "An ERP implementation is the project of choosing, setting up, loading data into and launching an ERP system so a business can run on it.",
        explanation: "An ERP implementation is mostly about people and processes, not installing software. The team maps how work is done today, decides how it should work in the new system, sets it up, moves the data and trains staff.\n\nPicture a food manufacturer moving off spreadsheets and an old accounting tool. They decide how lots are tracked, how purchase orders get approved and which reports finance needs. Then they test real orders end to end before switching over.\n\nThe projects that go well keep the scope tight, make decisions fast and put a person from the business, not just IT, in charge.",
        breaks: [
          { title: "Scope keeps growing during the project.", detail: "Every department adds wish list items. The timeline slips and the launch date loses meaning." },
          { title: "Key staff are not given time for the project.", detail: "The people who know the processes still have full day jobs. Decisions stall and testing gets rushed." },
          { title: "Testing uses neat sample data instead of real cases.", detail: "Odd orders, returns and partial shipments only show up after launch, when they cost the most to fix." },
          { title: "Training happens too early or too thin.", detail: "Staff forget what they learned weeks before go-live, or only see slides instead of doing their real tasks." }
        ],
        diagram: ["Map current process", "Design and configure", "Migrate and test", "Train and go live"],
        faq: [
          { q: "How long does an ERP implementation take?", a: "It depends on scope, data quality and how fast decisions get made. A small, focused rollout is measured in months, while a multi-site rollout with heavy integration takes much longer." },
          { q: "Should we go live all at once or in phases?", a: "A single cutover is simpler to manage but riskier. A phased rollout by module or location lowers risk but means running temporary links between old and new systems." }
        ]
      },
      fr: {
        term: "Implantation d'un ERP",
        definition: "L'implantation d'un ERP est le projet qui consiste à choisir, configurer, alimenter en données et lancer un système ERP pour que l'entreprise puisse fonctionner avec.",
        explanation: "L'implantation d'un ERP touche surtout les personnes et les processus, pas l'installation du logiciel. L'équipe décrit le travail actuel, décide comment il fonctionnera dans le nouveau système, le configure, migre les données et forme le personnel.\n\nPrenons un fabricant alimentaire qui quitte ses chiffriers et un vieux logiciel comptable. Il décide comment suivre les lots, comment approuver les bons de commande et quels rapports la finance exige. Ensuite, il teste de vraies commandes du début à la fin avant de basculer.\n\nLes projets réussis gardent une portée serrée, prennent des décisions rapidement et confient la direction à une personne du métier, pas seulement aux TI.",
        breaks: [
          { title: "La portée grossit pendant le projet.", detail: "Chaque service ajoute ses souhaits. L'échéancier glisse et la date de lancement perd son sens." },
          { title: "Le personnel clé n'a pas de temps pour le projet.", detail: "Ceux qui connaissent les processus gardent leur plein emploi. Les décisions traînent et les tests sont bâclés." },
          { title: "Les tests utilisent des données propres plutôt que de vrais cas.", detail: "Les commandes inhabituelles, les retours et les expéditions partielles n'apparaissent qu'après le lancement, quand ils coûtent le plus cher." },
          { title: "La formation arrive trop tôt ou est trop mince.", detail: "Le personnel oublie ce qu'il a appris des semaines avant le lancement, ou ne voit que des diapositives au lieu de faire ses vraies tâches." }
        ],
        diagram: ["Décrire l'existant", "Concevoir et configurer", "Migrer et tester", "Former et lancer"],
        faq: [
          { q: "Combien de temps dure l'implantation d'un ERP?", a: "Cela dépend de la portée, de la qualité des données et de la vitesse des décisions. Un petit déploiement ciblé se compte en mois; un déploiement multisite avec beaucoup d'intégrations prend bien plus de temps." },
          { q: "Faut-il lancer tout d'un coup ou par étapes?", a: "Un basculement unique est plus simple à gérer mais plus risqué. Un déploiement par module ou par site réduit le risque, mais exige des liens temporaires entre l'ancien et le nouveau système." }
        ]
      },
      es: {
        term: "Implementación de ERP",
        definition: "Una implementación de ERP es el proyecto de elegir, configurar, cargar datos y poner en marcha un sistema ERP para que la empresa pueda operar con él.",
        explanation: "Una implementación de ERP trata sobre todo de personas y procesos, no de instalar software. El equipo describe cómo se trabaja hoy, decide cómo funcionará en el nuevo sistema, lo configura, migra los datos y capacita al personal.\n\nPiense en un fabricante de alimentos que deja las hojas de cálculo y un programa contable viejo. Decide cómo rastrear lotes, cómo aprobar órdenes de compra y qué reportes necesita finanzas. Luego prueba pedidos reales de principio a fin antes del cambio.\n\nLos proyectos que salen bien mantienen el alcance acotado, deciden rápido y ponen al frente a alguien del negocio, no solo de TI.",
        breaks: [
          { title: "El alcance crece durante el proyecto.", detail: "Cada área agrega deseos. El cronograma se retrasa y la fecha de lanzamiento pierde sentido." },
          { title: "El personal clave no tiene tiempo para el proyecto.", detail: "Quienes conocen los procesos siguen con su trabajo diario completo. Las decisiones se frenan y las pruebas se apuran." },
          { title: "Las pruebas usan datos limpios en lugar de casos reales.", detail: "Pedidos raros, devoluciones y envíos parciales aparecen después del lanzamiento, cuando más cuesta corregirlos." },
          { title: "La capacitación llega muy temprano o es muy escasa.", detail: "El personal olvida lo aprendido semanas antes, o solo ve diapositivas en vez de hacer sus tareas reales." }
        ],
        diagram: ["Mapear proceso actual", "Diseñar y configurar", "Migrar y probar", "Capacitar y lanzar"],
        faq: [
          { q: "¿Cuánto tarda una implementación de ERP?", a: "Depende del alcance, la calidad de los datos y la rapidez de las decisiones. Un despliegue pequeño y enfocado se mide en meses; uno con varias sedes e integraciones toma mucho más." },
          { q: "¿Conviene lanzar todo de una vez o por fases?", a: "Un solo cambio es más simple de gestionar pero más riesgoso. Un despliegue por módulo o sede reduce el riesgo, pero exige enlaces temporales entre el sistema viejo y el nuevo." }
        ]
      }
    }
  },
  {
    slug: "go-live",
    category: "erp",
    hub: "/erp-crm",
    related: ["erp-implementation", "data-migration", "sandbox-environment", "crm-adoption"],
    copy: {
      en: {
        term: "Go-live",
        definition: "Go-live is the moment a new system is switched on for real work and the business stops using the old one for those tasks.",
        explanation: "Go-live is when the new ERP, CRM or tool starts handling live orders, invoices or customers. Before it, everything is a test. After it, mistakes affect real money and real customers.\n\nA regional distributor might plan go-live for a quiet weekend after month-end. On Friday they freeze the old system, load the final balances and open stock, check the numbers match, and on Monday staff start taking orders in the new system with extra support on hand.\n\nThe first few weeks after go-live, often called hypercare, matter as much as the launch day. That is when small gaps show up and need quick fixes.",
        breaks: [
          { title: "The date is fixed even when the system is not ready.", detail: "Teams launch to hit a deadline with known gaps. The cleanup takes longer than a short delay would have." },
          { title: "Final data loads are not reconciled.", detail: "If opening balances or stock counts are off, nobody trusts the new system from the first day." },
          { title: "There is no rollback plan.", detail: "When something critical fails, nobody knows whether to push forward or switch back, so time is lost deciding." },
          { title: "Support thins out right after launch.", detail: "Consultants and project staff move on while users still have daily questions." }
        ],
        diagram: ["Freeze old system", "Load final data", "Reconcile balances", "Switch users over", "Hypercare support"],
        faq: [
          { q: "What is a go-live checklist?", a: "It is a list of tasks and sign-offs needed before switching over, such as final data loads, user access, printed forms, integrations and a rollback decision point." },
          { q: "What is hypercare?", a: "Hypercare is the period right after go-live when extra support is on hand to fix issues fast and help users settle into the new system." }
        ]
      },
      fr: {
        term: "Mise en service",
        definition: "La mise en service est le moment où un nouveau système est activé pour le vrai travail et où l'entreprise cesse d'utiliser l'ancien pour ces tâches.",
        explanation: "La mise en service, c'est quand le nouvel ERP, CRM ou outil commence à traiter de vraies commandes, factures ou clients. Avant, tout est un test. Après, les erreurs touchent de l'argent et des clients réels.\n\nUn distributeur régional peut prévoir la mise en service lors d'une fin de semaine calme après la fin de mois. Le vendredi, il gèle l'ancien système, charge les soldes finaux et les stocks d'ouverture, vérifie que les chiffres concordent, et le lundi le personnel prend les commandes dans le nouveau système avec du soutien sur place.\n\nLes premières semaines après le lancement, souvent appelées soutien renforcé, comptent autant que le jour même. C'est là que les petits écarts apparaissent et doivent être corrigés vite.",
        breaks: [
          { title: "La date est fixée même si le système n'est pas prêt.", detail: "Les équipes lancent pour respecter l'échéance malgré des lacunes connues. Le ménage prend plus de temps qu'un court report." },
          { title: "Les chargements finaux ne sont pas rapprochés.", detail: "Si les soldes d'ouverture ou les stocks sont faux, personne ne fait confiance au nouveau système dès le premier jour." },
          { title: "Il n'y a pas de plan de retour en arrière.", detail: "Quand un élément critique échoue, personne ne sait s'il faut continuer ou revenir, et on perd du temps à décider." },
          { title: "Le soutien diminue juste après le lancement.", detail: "Les consultants et l'équipe de projet passent à autre chose alors que les utilisateurs ont encore des questions chaque jour." }
        ],
        diagram: ["Geler l'ancien système", "Charger les données finales", "Rapprocher les soldes", "Basculer les utilisateurs", "Soutien renforcé"],
        faq: [
          { q: "Qu'est-ce qu'une liste de contrôle de mise en service?", a: "C'est la liste des tâches et approbations nécessaires avant de basculer : chargements finaux, accès des utilisateurs, formulaires imprimés, intégrations et un point de décision pour revenir en arrière." },
          { q: "Qu'est-ce que le soutien renforcé (hypercare)?", a: "C'est la période juste après la mise en service où du soutien supplémentaire est disponible pour corriger rapidement les problèmes et aider les utilisateurs à s'adapter." }
        ]
      },
      es: {
        term: "Puesta en marcha (go-live)",
        definition: "La puesta en marcha es el momento en que un sistema nuevo se activa para el trabajo real y la empresa deja de usar el anterior para esas tareas.",
        explanation: "La puesta en marcha es cuando el nuevo ERP, CRM o herramienta empieza a manejar pedidos, facturas o clientes reales. Antes, todo es prueba. Después, los errores afectan dinero y clientes reales.\n\nUn distribuidor regional puede planear el arranque para un fin de semana tranquilo después del cierre de mes. El viernes congela el sistema viejo, carga los saldos finales y el inventario inicial, verifica que cuadren, y el lunes el personal toma pedidos en el sistema nuevo con apoyo adicional.\n\nLas primeras semanas después del arranque, a menudo llamadas soporte intensivo, importan tanto como el día del lanzamiento. Ahí aparecen los pequeños huecos que hay que corregir rápido.",
        breaks: [
          { title: "La fecha se mantiene aunque el sistema no esté listo.", detail: "Los equipos lanzan para cumplir el plazo con fallas conocidas. La limpieza tarda más que un breve retraso." },
          { title: "Las cargas finales no se concilian.", detail: "Si los saldos iniciales o el inventario están mal, nadie confía en el sistema nuevo desde el primer día." },
          { title: "No hay plan para volver atrás.", detail: "Cuando algo crítico falla, nadie sabe si seguir o regresar, y se pierde tiempo decidiendo." },
          { title: "El soporte baja justo después del lanzamiento.", detail: "Los consultores y el equipo del proyecto pasan a otra cosa mientras los usuarios aún tienen dudas diarias." }
        ],
        diagram: ["Congelar sistema viejo", "Cargar datos finales", "Conciliar saldos", "Cambiar usuarios", "Soporte intensivo"],
        faq: [
          { q: "¿Qué es una lista de verificación de puesta en marcha?", a: "Es la lista de tareas y aprobaciones necesarias antes del cambio, como cargas finales, accesos de usuarios, formatos impresos, integraciones y un punto de decisión para revertir." },
          { q: "¿Qué es el soporte intensivo (hypercare)?", a: "Es el periodo justo después del arranque en que hay apoyo extra para resolver problemas rápido y ayudar a los usuarios a adaptarse al sistema nuevo." }
        ]
      }
    }
  },
  {
    slug: "data-migration",
    category: "erp",
    hub: "/erp-crm",
    related: ["data-quality", "data-mapping", "go-live", "master-data", "etl"],
    copy: {
      en: {
        term: "Data migration",
        definition: "Data migration is the work of moving records such as customers, items, balances and history from an old system into a new one, in a form the new system can use.",
        explanation: "Data migration sounds like copy and paste, but it rarely is. The old system stores things its own way, and the new one expects different fields, codes and formats. Each field has to be mapped, cleaned and checked.\n\nA hardware retailer moving to a new ERP might find three versions of the same supplier, items with no unit of measure and years of closed orders nobody needs. The team decides what to bring over, fixes what they can, and runs trial loads until the totals match.\n\nA good rule: migrate what you need to run the business, and archive the rest where people can still look it up.",
        breaks: [
          { title: "Cleanup starts too late.", detail: "Teams leave data cleaning until the last weeks. There is no time to fix duplicates or bad codes properly." },
          { title: "Too much history is moved.", detail: "Bringing over every old transaction adds risk and load time. Most of it is never opened again." },
          { title: "Totals are never checked after the load.", detail: "If nobody compares counts and balances between old and new, errors stay hidden until a customer or auditor finds them." },
          { title: "Mapping decisions live in one person's head.", detail: "When that person is away, nobody knows why a field was transformed a certain way." }
        ],
        diagram: ["Extract old data", "Clean and map", "Trial load", "Reconcile totals", "Final load"],
        faq: [
          { q: "How much historical data should we migrate?", a: "Usually open transactions, current balances and enough history for reporting and returns. Older records are often archived in a read-only form instead." },
          { q: "What is a trial migration?", a: "It is a practice load into a test copy of the new system. Running several of them finds errors early and shows how long the final load will take." }
        ]
      },
      fr: {
        term: "Migration de données",
        definition: "La migration de données est le travail qui consiste à transférer des enregistrements comme les clients, les articles, les soldes et l'historique d'un ancien système vers un nouveau, dans une forme utilisable par celui-ci.",
        explanation: "La migration de données semble être un simple copier-coller, mais c'est rarement le cas. L'ancien système range les choses à sa façon, et le nouveau attend d'autres champs, codes et formats. Chaque champ doit être associé, nettoyé et vérifié.\n\nUne quincaillerie qui passe à un nouvel ERP peut trouver trois versions du même fournisseur, des articles sans unité de mesure et des années de commandes fermées inutiles. L'équipe décide quoi transférer, corrige ce qu'elle peut et fait des chargements d'essai jusqu'à ce que les totaux concordent.\n\nBonne règle : migrez ce qu'il faut pour faire rouler l'entreprise et archivez le reste là où on peut encore le consulter.",
        breaks: [
          { title: "Le nettoyage commence trop tard.", detail: "Les équipes repoussent le nettoyage aux dernières semaines. Il ne reste plus de temps pour bien corriger les doublons ou les mauvais codes." },
          { title: "On transfère trop d'historique.", detail: "Apporter chaque vieille transaction ajoute du risque et du temps de chargement. La plupart ne sera jamais rouverte." },
          { title: "Les totaux ne sont jamais vérifiés après le chargement.", detail: "Si personne ne compare les comptes et les soldes entre l'ancien et le nouveau, les erreurs restent cachées jusqu'à ce qu'un client ou un vérificateur les trouve." },
          { title: "Les choix de correspondance restent dans la tête d'une seule personne.", detail: "Quand elle est absente, personne ne sait pourquoi un champ a été transformé de telle façon." }
        ],
        diagram: ["Extraire les données", "Nettoyer et associer", "Chargement d'essai", "Rapprocher les totaux", "Chargement final"],
        faq: [
          { q: "Combien d'historique faut-il migrer?", a: "Habituellement les transactions ouvertes, les soldes actuels et assez d'historique pour les rapports et les retours. Les plus vieux enregistrements sont souvent archivés en lecture seule." },
          { q: "Qu'est-ce qu'une migration d'essai?", a: "C'est un chargement de pratique dans une copie de test du nouveau système. En faire plusieurs permet de trouver les erreurs tôt et de savoir combien de temps prendra le chargement final." }
        ]
      },
      es: {
        term: "Migración de datos",
        definition: "La migración de datos es el trabajo de mover registros como clientes, artículos, saldos e historial de un sistema viejo a uno nuevo, en una forma que el nuevo sistema pueda usar.",
        explanation: "La migración de datos parece copiar y pegar, pero casi nunca lo es. El sistema viejo guarda la información a su manera y el nuevo espera otros campos, códigos y formatos. Cada campo debe mapearse, limpiarse y revisarse.\n\nUna ferretería que cambia de ERP puede encontrar tres versiones del mismo proveedor, artículos sin unidad de medida y años de pedidos cerrados que nadie necesita. El equipo decide qué llevar, corrige lo que puede y hace cargas de prueba hasta que los totales cuadren.\n\nUna buena regla: migre lo que necesita para operar y archive el resto donde todavía se pueda consultar.",
        breaks: [
          { title: "La limpieza empieza demasiado tarde.", detail: "Los equipos dejan la limpieza para las últimas semanas. No queda tiempo para corregir bien duplicados o códigos erróneos." },
          { title: "Se migra demasiado historial.", detail: "Llevar cada transacción antigua agrega riesgo y tiempo de carga. La mayoría nunca se vuelve a abrir." },
          { title: "Nadie revisa los totales después de la carga.", detail: "Si nadie compara cantidades y saldos entre el sistema viejo y el nuevo, los errores siguen ocultos hasta que un cliente o auditor los encuentra." },
          { title: "Las decisiones de mapeo viven en la cabeza de una sola persona.", detail: "Cuando esa persona falta, nadie sabe por qué un campo se transformó de cierta manera." }
        ],
        diagram: ["Extraer datos viejos", "Limpiar y mapear", "Carga de prueba", "Conciliar totales", "Carga final"],
        faq: [
          { q: "¿Cuánto historial conviene migrar?", a: "Por lo general las transacciones abiertas, los saldos actuales y suficiente historial para reportes y devoluciones. Los registros más viejos suelen archivarse en modo de solo lectura." },
          { q: "¿Qué es una migración de prueba?", a: "Es una carga de práctica en una copia de prueba del sistema nuevo. Hacer varias permite encontrar errores temprano y saber cuánto tardará la carga final." }
        ]
      }
    }
  },
  {
    slug: "customization-vs-configuration",
    category: "erp",
    hub: "/erp-crm",
    related: ["fit-gap-analysis", "erp-implementation", "technical-debt", "low-code"],
    copy: {
      en: {
        term: "Customization vs configuration",
        definition: "Customization vs configuration is the choice between changing a system with its built-in settings (configuration) or by writing new code that alters how it works (customization).",
        explanation: "Configuration uses the switches the vendor already provides: approval limits, custom fields, tax rules, document layouts. It survives upgrades because the vendor supports it.\n\nCustomization means writing code to make the system do something it was not built to do. Sometimes that is worth it. A specialty manufacturer might need a pricing calculation that no standard setting can handle, and it is central to how they win work.\n\nThe trouble is that every custom piece has to be tested, documented and maintained at each upgrade. A good test is to ask whether the need makes you different from competitors, or whether you could simply adopt the standard way.",
        breaks: [
          { title: "Old processes are copied instead of questioned.", detail: "Teams customize to keep a familiar step that the standard system already handles another way." },
          { title: "Upgrades become expensive projects.", detail: "Each custom change has to be retested and sometimes rewritten when the vendor releases a new version." },
          { title: "Custom code is poorly documented.", detail: "When the developer who wrote it leaves, nobody knows how it works or what depends on it." }
        ],
        faq: [
          { q: "Is customization always bad?", a: "No. It makes sense when the need is core to how you compete and no setting can meet it. The cost is the ongoing upkeep, so it should be a deliberate choice." },
          { q: "What counts as configuration?", a: "Anything done through the system's own setup screens, such as fields, workflows, roles, forms and rules, without writing code that changes the product itself." }
        ]
      },
      fr: {
        term: "Personnalisation ou configuration",
        definition: "La personnalisation ou configuration désigne le choix entre modifier un système à l'aide de ses paramètres intégrés (configuration) ou en écrivant du nouveau code qui change son fonctionnement (personnalisation).",
        explanation: "La configuration utilise les réglages déjà fournis par l'éditeur : limites d'approbation, champs personnalisés, règles de taxes, mises en page de documents. Elle survit aux mises à niveau parce que l'éditeur la prend en charge.\n\nLa personnalisation consiste à écrire du code pour que le système fasse ce qu'il n'était pas conçu pour faire. Parfois, ça vaut la peine. Un fabricant spécialisé peut avoir besoin d'un calcul de prix qu'aucun réglage standard ne permet, et qui est au cœur de sa façon de gagner des contrats.\n\nLe problème : chaque pièce sur mesure doit être testée, documentée et maintenue à chaque mise à niveau. Bonne question à se poser : ce besoin vous distingue-t-il de vos concurrents, ou pourriez-vous adopter la façon standard?",
        breaks: [
          { title: "Les anciens processus sont copiés au lieu d'être remis en question.", detail: "Les équipes personnalisent pour garder une étape familière que le système standard gère déjà autrement." },
          { title: "Les mises à niveau deviennent de gros projets.", detail: "Chaque modification sur mesure doit être retestée et parfois réécrite quand l'éditeur publie une nouvelle version." },
          { title: "Le code sur mesure est mal documenté.", detail: "Quand le développeur qui l'a écrit part, personne ne sait comment il fonctionne ni ce qui en dépend." }
        ],
        faq: [
          { q: "La personnalisation est-elle toujours une mauvaise idée?", a: "Non. Elle a du sens quand le besoin est central à votre façon de concurrencer et qu'aucun réglage ne suffit. Le coût est l'entretien continu, alors ce doit être un choix réfléchi." },
          { q: "Qu'est-ce qui compte comme de la configuration?", a: "Tout ce qui se fait par les écrans de paramétrage du système, comme les champs, flux de travail, rôles, formulaires et règles, sans écrire de code qui modifie le produit lui-même." }
        ]
      },
      es: {
        term: "Personalización vs configuración",
        definition: "Personalización vs configuración es la elección entre cambiar un sistema con sus ajustes incorporados (configuración) o escribiendo código nuevo que altera su funcionamiento (personalización).",
        explanation: "La configuración usa los ajustes que el proveedor ya ofrece: límites de aprobación, campos adicionales, reglas de impuestos, formatos de documentos. Sobrevive a las actualizaciones porque el proveedor la soporta.\n\nLa personalización implica escribir código para que el sistema haga algo para lo que no fue diseñado. A veces vale la pena. Un fabricante especializado puede necesitar un cálculo de precios que ningún ajuste estándar permite, y que es clave para ganar negocios.\n\nEl problema es que cada pieza a medida debe probarse, documentarse y mantenerse en cada actualización. Una buena prueba es preguntarse si la necesidad lo diferencia de la competencia o si podría adoptar la forma estándar.",
        breaks: [
          { title: "Se copian procesos viejos en lugar de cuestionarlos.", detail: "Los equipos personalizan para conservar un paso conocido que el sistema estándar ya resuelve de otra forma." },
          { title: "Las actualizaciones se vuelven proyectos caros.", detail: "Cada cambio a medida debe volver a probarse y a veces reescribirse cuando sale una nueva versión." },
          { title: "El código a medida está mal documentado.", detail: "Cuando se va el desarrollador que lo escribió, nadie sabe cómo funciona ni qué depende de él." }
        ],
        faq: [
          { q: "¿Personalizar siempre es malo?", a: "No. Tiene sentido cuando la necesidad es central para competir y ningún ajuste la cubre. El costo es el mantenimiento continuo, así que debe ser una decisión consciente." },
          { q: "¿Qué cuenta como configuración?", a: "Todo lo que se hace desde las pantallas de ajustes del sistema, como campos, flujos, roles, formularios y reglas, sin escribir código que cambie el producto." }
        ]
      }
    }
  },
  {
    slug: "mrp",
    category: "erp",
    hub: "/erp-crm",
    related: ["bill-of-materials", "demand-planning", "safety-stock", "reorder-point", "erp"],
    copy: {
      en: {
        term: "MRP",
        definition: "MRP (material requirements planning) is a method, usually built into an ERP, that works out which materials a manufacturer needs, how many and by when, based on what it plans to build.",
        explanation: "MRP starts with what you plan to make, then breaks each product down using its bill of materials. It subtracts what is already in stock or on order and tells you what to buy or make, and when, to finish on time.\n\nSay a furniture maker plans 200 chairs for next month. Each chair needs four legs, one seat and a set of screws. MRP checks stock, sees 300 legs on hand, and suggests a purchase order for the other 500 with enough lead time to arrive before assembly.\n\nMRP is only as good as its inputs. Wrong lead times or bills of materials give confident but wrong suggestions.",
        breaks: [
          { title: "Bills of materials are out of date.", detail: "If engineering changes a part but the BOM is not updated, MRP orders the wrong components." },
          { title: "Lead times in the system are guesses.", detail: "Suppliers that take longer than the recorded lead time cause late materials, even when MRP ran correctly." },
          { title: "Planners ignore the suggestions.", detail: "After a few bad runs, staff stop trusting MRP and go back to ordering by feel." },
          { title: "Stock records are inaccurate.", detail: "MRP assumes the inventory counts are right. If they are not, it overbuys some items and runs short on others." }
        ],
        diagram: ["Production plan", "Explode BOM", "Net against stock", "Suggest orders"],
        faq: [
          { q: "What is the difference between MRP and ERP?", a: "MRP is the planning piece that calculates material needs. ERP is the wider system that also covers finance, sales, purchasing and more, and usually includes MRP as a module." },
          { q: "What is MRP II?", a: "MRP II (manufacturing resource planning) extends MRP to also plan machine capacity, labour and costs, not just materials." }
        ]
      },
      fr: {
        term: "MRP (calcul des besoins)",
        definition: "Le MRP (planification des besoins en matières) est une méthode, souvent intégrée à un ERP, qui calcule quelles matières un fabricant doit avoir, en quelle quantité et pour quand, selon ce qu'il prévoit produire.",
        explanation: "Le MRP part de ce que vous prévoyez fabriquer, puis décompose chaque produit grâce à sa nomenclature. Il retire ce qui est déjà en stock ou commandé et indique quoi acheter ou fabriquer, et quand, pour finir à temps.\n\nDisons qu'un fabricant de meubles prévoit 200 chaises le mois prochain. Chaque chaise exige quatre pattes, un siège et un jeu de vis. Le MRP vérifie le stock, voit 300 pattes disponibles et suggère un bon de commande pour les 500 autres avec assez de délai pour qu'elles arrivent avant l'assemblage.\n\nLe MRP ne vaut que ses données. De mauvais délais ou nomenclatures donnent des suggestions sûres d'elles, mais fausses.",
        breaks: [
          { title: "Les nomenclatures ne sont pas à jour.", detail: "Si l'ingénierie change une pièce sans mettre à jour la nomenclature, le MRP commande les mauvais composants." },
          { title: "Les délais dans le système sont des estimations.", detail: "Les fournisseurs plus lents que le délai inscrit causent des retards de matières, même si le MRP a bien fonctionné." },
          { title: "Les planificateurs ignorent les suggestions.", detail: "Après quelques mauvais calculs, le personnel cesse de faire confiance au MRP et recommence à commander au jugé." },
          { title: "Les registres de stock sont inexacts.", detail: "Le MRP suppose que les inventaires sont justes. Sinon, il achète trop de certains articles et manque d'autres." }
        ],
        diagram: ["Plan de production", "Décomposer la nomenclature", "Déduire le stock", "Suggérer les commandes"],
        faq: [
          { q: "Quelle est la différence entre MRP et ERP?", a: "Le MRP est la partie planification qui calcule les besoins en matières. L'ERP est le système plus large qui couvre aussi la finance, les ventes, les achats et plus, et qui inclut souvent le MRP comme module." },
          { q: "Qu'est-ce que le MRP II?", a: "Le MRP II (planification des ressources de fabrication) élargit le MRP pour planifier aussi la capacité des machines, la main-d'œuvre et les coûts, pas seulement les matières." }
        ]
      },
      es: {
        term: "MRP",
        definition: "El MRP (planificación de requerimientos de materiales) es un método, normalmente incluido en un ERP, que calcula qué materiales necesita un fabricante, cuántos y para cuándo, según lo que planea producir.",
        explanation: "El MRP parte de lo que usted planea fabricar y desglosa cada producto con su lista de materiales. Resta lo que ya está en inventario o pedido e indica qué comprar o fabricar, y cuándo, para terminar a tiempo.\n\nDigamos que un fabricante de muebles planea 200 sillas el próximo mes. Cada silla necesita cuatro patas, un asiento y un juego de tornillos. El MRP revisa el inventario, ve 300 patas disponibles y sugiere una orden de compra por las otras 500 con tiempo suficiente para que lleguen antes del ensamble.\n\nEl MRP solo es tan bueno como sus datos. Tiempos de entrega o listas de materiales erróneos dan sugerencias seguras pero equivocadas.",
        breaks: [
          { title: "Las listas de materiales están desactualizadas.", detail: "Si ingeniería cambia una pieza y no actualiza la lista, el MRP pide componentes equivocados." },
          { title: "Los tiempos de entrega del sistema son suposiciones.", detail: "Los proveedores que tardan más de lo registrado causan faltantes, aunque el MRP haya funcionado bien." },
          { title: "Los planificadores ignoran las sugerencias.", detail: "Después de algunas corridas malas, el personal deja de confiar en el MRP y vuelve a pedir a ojo." },
          { title: "Los registros de inventario son inexactos.", detail: "El MRP asume que los conteos son correctos. Si no, compra de más algunos artículos y se queda corto en otros." }
        ],
        diagram: ["Plan de producción", "Desglosar lista", "Restar inventario", "Sugerir órdenes"],
        faq: [
          { q: "¿Cuál es la diferencia entre MRP y ERP?", a: "El MRP es la parte de planificación que calcula las necesidades de materiales. El ERP es el sistema más amplio que también cubre finanzas, ventas y compras, y suele incluir el MRP como módulo." },
          { q: "¿Qué es el MRP II?", a: "El MRP II (planificación de recursos de manufactura) amplía el MRP para planear también capacidad de máquinas, mano de obra y costos, no solo materiales." }
        ]
      }
    }
  },
  {
    slug: "warehouse-management-system",
    category: "erp",
    hub: "/erp-crm",
    related: ["cycle-count", "lot-tracking", "goods-receipt", "erp", "sku"],
    copy: {
      en: {
        term: "Warehouse management system (WMS)",
        definition: "A warehouse management system (WMS) is software that directs and records the physical work inside a warehouse, such as receiving, putaway, picking, packing and shipping, down to the bin location.",
        explanation: "An ERP usually knows how many units you own. A WMS knows exactly where each one sits and tells staff what to do next. Workers scan barcodes as they receive, move and pick goods, so the counts stay current.\n\nPicture an auto parts distributor with thousands of small items. Without a WMS, pickers walk the aisles from memory and new hires get lost. With one, the handheld scanner sends them along an efficient route, confirms each pick, and flags the wrong part before it reaches the box.\n\nA WMS pays off most when the warehouse has many items, many orders per day, or strict lot and expiry rules.",
        breaks: [
          { title: "Bin locations are not kept up to date.", detail: "If staff move stock without scanning, the system sends pickers to empty shelves." },
          { title: "The WMS and ERP disagree on stock.", detail: "A weak or delayed integration leaves two sets of numbers, and sales promises stock that is not really there." },
          { title: "Scanning steps get skipped when it is busy.", detail: "In rush periods workers bypass scans to save time, and the records fall behind the floor." }
        ],
        diagram: ["Receive and scan", "Put away to bin", "Pick by route", "Pack and ship"],
        faq: [
          { q: "Do I need a WMS if my ERP has inventory?", a: "Not always. ERP inventory is often enough for a small warehouse. A WMS helps when you need bin-level tracking, directed picking, scanning or high order volume." },
          { q: "What is directed putaway?", a: "It is when the WMS tells the worker which bin to place received goods in, based on rules like space, item size or how often the item is picked." }
        ]
      },
      fr: {
        term: "Système de gestion d'entrepôt (WMS)",
        definition: "Un système de gestion d'entrepôt (WMS) est un logiciel qui dirige et enregistre le travail physique dans un entrepôt, comme la réception, le rangement, la préparation, l'emballage et l'expédition, jusqu'à l'emplacement précis.",
        explanation: "Un ERP sait habituellement combien d'unités vous possédez. Un WMS sait exactement où se trouve chacune et dit au personnel quoi faire ensuite. Les employés lisent les codes-barres en recevant, déplaçant et préparant la marchandise, ce qui garde les comptes à jour.\n\nImaginez un distributeur de pièces d'auto avec des milliers de petits articles. Sans WMS, les préparateurs parcourent les allées de mémoire et les nouveaux se perdent. Avec un WMS, le lecteur portatif les guide sur un trajet efficace, confirme chaque prélèvement et signale la mauvaise pièce avant qu'elle n'arrive dans la boîte.\n\nUn WMS est le plus utile quand l'entrepôt compte beaucoup d'articles, beaucoup de commandes par jour ou des règles strictes de lots et de dates de péremption.",
        breaks: [
          { title: "Les emplacements ne sont pas tenus à jour.", detail: "Si le personnel déplace du stock sans le lire, le système envoie les préparateurs vers des tablettes vides." },
          { title: "Le WMS et l'ERP ne s'entendent pas sur le stock.", detail: "Une intégration faible ou lente laisse deux séries de chiffres, et les ventes promettent du stock qui n'existe pas vraiment." },
          { title: "Les lectures sont sautées dans les périodes chargées.", detail: "En pleine pointe, les employés évitent de lire les codes pour gagner du temps, et les registres prennent du retard sur le plancher." }
        ],
        diagram: ["Recevoir et lire", "Ranger à l'emplacement", "Préparer selon le trajet", "Emballer et expédier"],
        faq: [
          { q: "Ai-je besoin d'un WMS si mon ERP gère les stocks?", a: "Pas toujours. Le module de stocks d'un ERP suffit souvent pour un petit entrepôt. Un WMS aide quand il faut suivre les emplacements, diriger la préparation, lire des codes ou traiter beaucoup de commandes." },
          { q: "Qu'est-ce que le rangement dirigé?", a: "C'est quand le WMS indique à l'employé dans quel emplacement ranger la marchandise reçue, selon des règles comme l'espace, la taille de l'article ou sa fréquence de préparation." }
        ]
      },
      es: {
        term: "Sistema de gestión de almacenes (WMS)",
        definition: "Un sistema de gestión de almacenes (WMS) es un software que dirige y registra el trabajo físico dentro de un almacén, como recepción, ubicación, surtido, empaque y envío, hasta el nivel de cada ubicación.",
        explanation: "Un ERP normalmente sabe cuántas unidades tiene. Un WMS sabe exactamente dónde está cada una y le dice al personal qué hacer después. Los trabajadores escanean códigos de barras al recibir, mover y surtir, y así los conteos se mantienen al día.\n\nPiense en un distribuidor de autopartes con miles de artículos pequeños. Sin WMS, los surtidores recorren los pasillos de memoria y los nuevos se pierden. Con uno, el escáner los guía por una ruta eficiente, confirma cada pieza y detecta la equivocada antes de que llegue a la caja.\n\nUn WMS rinde más cuando el almacén tiene muchos artículos, muchos pedidos al día o reglas estrictas de lotes y caducidad.",
        breaks: [
          { title: "Las ubicaciones no se mantienen al día.", detail: "Si el personal mueve mercancía sin escanear, el sistema manda a los surtidores a estantes vacíos." },
          { title: "El WMS y el ERP no coinciden en el inventario.", detail: "Una integración débil o lenta deja dos juegos de cifras, y ventas promete mercancía que en realidad no está." },
          { title: "Se saltan los escaneos cuando hay mucho trabajo.", detail: "En temporadas pico los trabajadores omiten escaneos para ahorrar tiempo, y los registros se quedan atrás." }
        ],
        diagram: ["Recibir y escanear", "Ubicar en estante", "Surtir por ruta", "Empacar y enviar"],
        faq: [
          { q: "¿Necesito un WMS si mi ERP maneja inventario?", a: "No siempre. El inventario del ERP suele bastar para un almacén pequeño. Un WMS ayuda cuando necesita control por ubicación, surtido dirigido, escaneo o mucho volumen de pedidos." },
          { q: "¿Qué es la ubicación dirigida?", a: "Es cuando el WMS indica en qué ubicación guardar la mercancía recibida, según reglas como espacio, tamaño del artículo o frecuencia de surtido." }
        ]
      }
    }
  },
  {
    slug: "inventory-valuation",
    category: "erp",
    hub: "/erp-crm",
    related: ["fifo", "cost-of-goods-sold", "landed-cost", "general-ledger", "cycle-count"],
    copy: {
      en: {
        term: "Inventory valuation",
        definition: "Inventory valuation is the method a business uses to put a dollar value on the stock it holds, which also sets the cost recorded when that stock is sold.",
        explanation: "Prices change. If you bought the same item at three different costs over the year, which cost do you use when you sell one? Inventory valuation answers that. Common methods are first in, first out (FIFO), weighted average cost and standard cost.\n\nA kitchen supply retailer buys mixing bowls at one price in spring and a higher price in fall. Under FIFO, the first bowls sold carry the spring cost. Under average cost, every bowl carries a blended cost. Each choice changes reported margin and the stock value on the balance sheet.\n\nThe method should match the business and the accounting rules that apply, and it should stay consistent from period to period.",
        breaks: [
          { title: "Landed costs are left out.", detail: "If freight and duties are not added to item cost, margins look better than they really are." },
          { title: "Stock counts are wrong.", detail: "Any valuation method gives the wrong answer if the quantities themselves are off." },
          { title: "Cost corrections are posted late.", detail: "When supplier invoices arrive after goods are sold, the cost of goods sold for that month is understated." }
        ],
        faq: [
          { q: "Which inventory valuation method is best?", a: "There is no single best one. FIFO, average cost and standard cost each suit different businesses. Your accountant should confirm which methods are allowed under the accounting and tax rules you follow." },
          { q: "Is LIFO allowed in Canada?", a: "It depends on your accounting framework and tax rules. LIFO is used mainly in the United States. Confirm with your accountant before choosing a method." }
        ]
      },
      fr: {
        term: "Évaluation des stocks",
        definition: "L'évaluation des stocks est la méthode qu'utilise une entreprise pour donner une valeur en dollars au stock qu'elle détient, ce qui fixe aussi le coût inscrit quand ce stock est vendu.",
        explanation: "Les prix changent. Si vous avez acheté le même article à trois coûts différents pendant l'année, lequel utilisez-vous quand vous en vendez un? L'évaluation des stocks répond à cette question. Les méthodes courantes sont le premier entré, premier sorti (PEPS), le coût moyen pondéré et le coût standard.\n\nUn détaillant d'articles de cuisine achète des bols à un prix au printemps et à un prix plus élevé à l'automne. Selon le PEPS, les premiers bols vendus portent le coût du printemps. Selon le coût moyen, chaque bol porte un coût combiné. Chaque choix modifie la marge déclarée et la valeur du stock au bilan.\n\nLa méthode doit convenir à l'entreprise et aux règles comptables applicables, et rester la même d'une période à l'autre.",
        breaks: [
          { title: "Les coûts au débarquement sont oubliés.", detail: "Si le transport et les droits ne sont pas ajoutés au coût de l'article, les marges semblent meilleures qu'elles ne le sont." },
          { title: "Les comptes de stock sont faux.", detail: "Toute méthode d'évaluation donne une mauvaise réponse si les quantités elles-mêmes sont erronées." },
          { title: "Les corrections de coût sont inscrites en retard.", detail: "Quand les factures des fournisseurs arrivent après la vente, le coût des ventes du mois est sous-évalué." }
        ],
        faq: [
          { q: "Quelle méthode d'évaluation des stocks est la meilleure?", a: "Il n'y en a pas une seule. Le PEPS, le coût moyen et le coût standard conviennent à des entreprises différentes. Votre comptable doit confirmer les méthodes permises selon vos règles comptables et fiscales." },
          { q: "Le DEPS (LIFO) est-il permis au Canada?", a: "Cela dépend de votre référentiel comptable et des règles fiscales. Le DEPS est surtout utilisé aux États-Unis. Vérifiez avec votre comptable avant de choisir une méthode." }
        ]
      },
      es: {
        term: "Valuación de inventario",
        definition: "La valuación de inventario es el método que usa una empresa para asignar un valor en dinero a la mercancía que tiene, lo que también fija el costo registrado cuando esa mercancía se vende.",
        explanation: "Los precios cambian. Si compró el mismo artículo a tres costos distintos durante el año, ¿cuál usa cuando vende uno? La valuación de inventario responde eso. Los métodos comunes son primeras entradas, primeras salidas (PEPS o FIFO), costo promedio ponderado y costo estándar.\n\nUn minorista de artículos de cocina compra tazones a un precio en primavera y a uno más alto en otoño. Con PEPS, los primeros tazones vendidos llevan el costo de primavera. Con costo promedio, cada tazón lleva un costo combinado. Cada opción cambia el margen reportado y el valor del inventario en el balance.\n\nEl método debe ajustarse al negocio y a las normas contables aplicables, y mantenerse igual de un periodo a otro.",
        breaks: [
          { title: "Se omiten los costos de importación.", detail: "Si el flete y los aranceles no se suman al costo del artículo, los márgenes parecen mejores de lo que son." },
          { title: "Los conteos de inventario están mal.", detail: "Cualquier método de valuación da un resultado erróneo si las cantidades mismas están mal." },
          { title: "Las correcciones de costo se registran tarde.", detail: "Cuando las facturas de proveedores llegan después de la venta, el costo de ventas del mes queda subestimado." }
        ],
        faq: [
          { q: "¿Cuál es el mejor método de valuación de inventario?", a: "No hay uno solo. PEPS, costo promedio y costo estándar se adaptan a negocios distintos. Su contador debe confirmar qué métodos permiten las normas contables y fiscales que aplica." },
          { q: "¿Se permite UEPS (LIFO)?", a: "Depende de tu marco contable y de las reglas fiscales. UEPS se usa sobre todo en Estados Unidos. Confírmalo con tu contador antes de elegir un método." }
        ]
      }
    }
  },
  {
    slug: "demand-planning",
    category: "erp",
    hub: "/erp-crm",
    related: ["mrp", "safety-stock", "reorder-point", "backorder", "business-intelligence"],
    copy: {
      en: {
        term: "Demand planning",
        definition: "Demand planning is the process of estimating how much customers will buy, and when, so a business can stock, staff and produce the right amount.",
        explanation: "Demand planning blends sales history with what you know about the future: promotions, seasons, new customers and lost ones. The result is a forecast that drives purchasing and production.\n\nA garden centre supplier knows spring is busy, but how busy? The planner looks at past springs, adjusts for a new big-box customer and a planned price change, then shares the forecast with buying. Buying orders seed and soil earlier than usual to beat supplier lead times.\n\nForecasts are always wrong to some degree. The goal is to be less wrong, check the forecast against actual sales often, and adjust quickly.",
        breaks: [
          { title: "History is used without context.", detail: "A one-time big order or a stockout distorts past sales, and the forecast repeats the distortion." },
          { title: "Sales and operations do not talk.", detail: "Sales knows about a new account or promotion, but planning hears about it too late to react." },
          { title: "Forecast accuracy is never measured.", detail: "Without comparing forecasts to actuals, nobody knows whether the method is improving or drifting." }
        ],
        diagram: ["Review sales history", "Add market input", "Agree forecast", "Compare to actuals"],
        faq: [
          { q: "What is the difference between demand planning and forecasting?", a: "Forecasting is the number. Demand planning is the wider process of building that number with input from sales and operations, agreeing on it, and acting on it." },
          { q: "How often should a forecast be updated?", a: "Many businesses review monthly, and fast-moving or seasonal items more often. The right rhythm depends on supplier lead times and how quickly demand shifts." }
        ]
      },
      fr: {
        term: "Planification de la demande",
        definition: "La planification de la demande est le processus qui estime combien les clients achèteront, et quand, pour que l'entreprise prévoie les bons stocks, effectifs et volumes de production.",
        explanation: "La planification de la demande combine l'historique des ventes et ce qu'on sait de l'avenir : promotions, saisons, nouveaux clients et clients perdus. Le résultat est une prévision qui oriente les achats et la production.\n\nUn fournisseur de centres jardin sait que le printemps est occupé, mais à quel point? Le planificateur examine les printemps passés, ajuste pour un nouveau client à grande surface et un changement de prix prévu, puis transmet la prévision aux achats. Ceux-ci commandent les semences et le terreau plus tôt que d'habitude pour devancer les délais des fournisseurs.\n\nUne prévision est toujours un peu fausse. Le but est de se tromper moins, de la comparer souvent aux ventes réelles et de l'ajuster vite.",
        breaks: [
          { title: "L'historique est utilisé sans contexte.", detail: "Une grosse commande ponctuelle ou une rupture de stock fausse les ventes passées, et la prévision répète l'erreur." },
          { title: "Les ventes et les opérations ne se parlent pas.", detail: "Les ventes connaissent un nouveau compte ou une promotion, mais la planification l'apprend trop tard pour réagir." },
          { title: "La justesse des prévisions n'est jamais mesurée.", detail: "Sans comparer les prévisions aux résultats, personne ne sait si la méthode s'améliore ou dérive." }
        ],
        diagram: ["Revoir l'historique", "Ajouter l'info du marché", "S'entendre sur la prévision", "Comparer aux résultats"],
        faq: [
          { q: "Quelle est la différence entre planification de la demande et prévision?", a: "La prévision est le chiffre. La planification de la demande est le processus plus large qui bâtit ce chiffre avec les ventes et les opérations, l'approuve et agit en conséquence." },
          { q: "À quelle fréquence faut-il mettre à jour une prévision?", a: "Beaucoup d'entreprises la revoient chaque mois, et plus souvent pour les articles saisonniers ou à forte rotation. Le bon rythme dépend des délais des fournisseurs et de la vitesse des changements de demande." }
        ]
      },
      es: {
        term: "Planificación de la demanda",
        definition: "La planificación de la demanda es el proceso de estimar cuánto comprarán los clientes, y cuándo, para que la empresa tenga el inventario, el personal y la producción adecuados.",
        explanation: "La planificación de la demanda combina el historial de ventas con lo que se sabe del futuro: promociones, temporadas, clientes nuevos y perdidos. El resultado es un pronóstico que guía compras y producción.\n\nUn proveedor de viveros sabe que la primavera es intensa, pero ¿cuánto? El planificador revisa primaveras anteriores, ajusta por un nuevo cliente de una gran cadena y un cambio de precio previsto, y comparte el pronóstico con compras. Compras pide semillas y tierra antes de lo normal para ganarle a los tiempos de entrega.\n\nLos pronósticos siempre fallan en algo. La meta es fallar menos, compararlos seguido con las ventas reales y ajustar rápido.",
        breaks: [
          { title: "Se usa el historial sin contexto.", detail: "Un pedido grande excepcional o un faltante distorsionan las ventas pasadas, y el pronóstico repite la distorsión." },
          { title: "Ventas y operaciones no se comunican.", detail: "Ventas sabe de una cuenta nueva o una promoción, pero planificación se entera muy tarde para reaccionar." },
          { title: "Nunca se mide la precisión del pronóstico.", detail: "Sin comparar pronósticos con ventas reales, nadie sabe si el método mejora o empeora." }
        ],
        diagram: ["Revisar historial", "Sumar info del mercado", "Acordar pronóstico", "Comparar con ventas"],
        faq: [
          { q: "¿Cuál es la diferencia entre planificación de la demanda y pronóstico?", a: "El pronóstico es el número. La planificación de la demanda es el proceso más amplio de construir ese número con ventas y operaciones, acordarlo y actuar con base en él." },
          { q: "¿Cada cuánto se debe actualizar un pronóstico?", a: "Muchas empresas lo revisan cada mes, y más seguido para artículos de temporada o alta rotación. El ritmo correcto depende de los tiempos de entrega y de qué tan rápido cambia la demanda." }
        ]
      }
    }
  },
  {
    slug: "order-to-cash",
    category: "erp",
    hub: "/erp-crm",
    related: ["accounts-receivable", "procure-to-pay", "revenue-recognition", "backorder", "erp"],
    copy: {
      en: {
        term: "Order to cash (O2C)",
        definition: "Order to cash (O2C) is the full business process from receiving a customer's order to collecting payment for it, including fulfillment, invoicing and cash application.",
        explanation: "Order to cash covers every step a sale takes: entering the order, checking credit, picking and shipping, invoicing, collecting and matching the payment to the invoice. Several teams touch it, which is why delays hide in the handoffs.\n\nA plumbing wholesaler gets an order by email. Someone retypes it, the warehouse ships two days later, but the invoice waits until the end of the week. The customer pays in 30 days from the invoice date, not the ship date, so cash arrives a week later than it could have.\n\nLooking at O2C as one flow, rather than as separate departments, shows where time and money leak.",
        breaks: [
          { title: "Orders are retyped from email or PDF.", detail: "Manual entry causes wrong items, prices and addresses that come back as credits and returns." },
          { title: "Invoices go out late.", detail: "Billing waits on paperwork from the warehouse, so the payment clock starts later than it should." },
          { title: "Payments cannot be matched to invoices.", detail: "Customers pay several invoices at once with little detail, and unapplied cash piles up." }
        ],
        diagram: ["Order received", "Ship goods", "Send invoice", "Collect payment", "Apply cash"],
        faq: [
          { q: "What is the difference between order to cash and quote to cash?", a: "Quote to cash starts earlier, with the price quote and contract, and then follows the same path through the order, invoice and payment." },
          { q: "How do you speed up order to cash?", a: "Common fixes are capturing orders without retyping, invoicing at shipment, offering easier payment options and matching payments to invoices automatically." }
        ]
      },
      fr: {
        term: "De la commande à l'encaissement (O2C)",
        definition: "De la commande à l'encaissement (O2C) est le processus complet qui va de la réception de la commande d'un client jusqu'à l'encaissement du paiement, y compris l'exécution, la facturation et l'affectation des paiements.",
        explanation: "Le cycle de la commande à l'encaissement couvre chaque étape d'une vente : saisir la commande, vérifier le crédit, préparer et expédier, facturer, percevoir et associer le paiement à la facture. Plusieurs équipes y touchent, et c'est pourquoi les retards se cachent dans les transferts.\n\nUn grossiste en plomberie reçoit une commande par courriel. Quelqu'un la ressaisit, l'entrepôt expédie deux jours plus tard, mais la facture attend la fin de la semaine. Le client paie 30 jours après la date de facture, pas d'expédition, alors l'argent arrive une semaine plus tard que possible.\n\nVoir l'O2C comme un seul flux plutôt que comme des services séparés montre où se perdent le temps et l'argent.",
        breaks: [
          { title: "Les commandes sont ressaisies à partir de courriels ou de PDF.", detail: "La saisie manuelle cause de mauvais articles, prix et adresses qui reviennent en crédits et en retours." },
          { title: "Les factures partent en retard.", detail: "La facturation attend les documents de l'entrepôt, et le délai de paiement commence plus tard qu'il le devrait." },
          { title: "Les paiements ne peuvent pas être associés aux factures.", detail: "Les clients paient plusieurs factures d'un coup avec peu de détails, et les montants non affectés s'accumulent." }
        ],
        diagram: ["Commande reçue", "Expédier", "Facturer", "Percevoir", "Affecter le paiement"],
        faq: [
          { q: "Quelle est la différence entre O2C et Quote to Cash?", a: "Le cycle Quote to Cash commence plus tôt, avec la soumission de prix et le contrat, puis suit le même chemin par la commande, la facture et le paiement." },
          { q: "Comment accélérer le cycle de la commande à l'encaissement?", a: "Les solutions courantes : saisir les commandes sans ressaisie, facturer à l'expédition, offrir des modes de paiement plus simples et associer les paiements aux factures automatiquement." }
        ]
      },
      es: {
        term: "Del pedido al cobro (O2C)",
        definition: "Del pedido al cobro (O2C) es el proceso completo desde que se recibe el pedido de un cliente hasta que se cobra, incluyendo despacho, facturación y aplicación de pagos.",
        explanation: "El ciclo del pedido al cobro cubre cada paso de una venta: capturar el pedido, revisar el crédito, surtir y enviar, facturar, cobrar y aplicar el pago a la factura. Varios equipos participan, y por eso los retrasos se esconden en los traspasos.\n\nUn mayorista de plomería recibe un pedido por correo. Alguien lo vuelve a capturar, el almacén envía dos días después, pero la factura espera hasta el fin de semana. El cliente paga a 30 días de la fecha de factura, no de envío, así que el dinero llega una semana después de lo posible.\n\nVer el O2C como un solo flujo, y no como áreas separadas, muestra dónde se pierden tiempo y dinero.",
        breaks: [
          { title: "Los pedidos se recapturan desde correos o PDF.", detail: "La captura manual causa artículos, precios y direcciones erróneos que regresan como notas de crédito y devoluciones." },
          { title: "Las facturas salen tarde.", detail: "Facturación espera papeles del almacén, y el plazo de pago empieza más tarde de lo debido." },
          { title: "Los pagos no se pueden relacionar con facturas.", detail: "Los clientes pagan varias facturas juntas con poco detalle, y se acumulan pagos sin aplicar." }
        ],
        diagram: ["Pedido recibido", "Enviar mercancía", "Emitir factura", "Cobrar", "Aplicar pago"],
        faq: [
          { q: "¿Cuál es la diferencia entre del pedido al cobro y de la cotización al cobro?", a: "De la cotización al cobro empieza antes, con la cotización y el contrato, y luego sigue el mismo camino por pedido, factura y pago." },
          { q: "¿Cómo se acelera el ciclo del pedido al cobro?", a: "Las soluciones comunes son capturar pedidos sin recapturar, facturar al enviar, ofrecer formas de pago más fáciles y aplicar pagos a facturas de forma automática." }
        ]
      }
    }
  },
  {
    slug: "procure-to-pay",
    category: "erp",
    hub: "/erp-crm",
    related: ["purchase-order", "three-way-match", "accounts-payable", "goods-receipt", "approval-workflow"],
    copy: {
      en: {
        term: "Procure to pay (P2P)",
        definition: "Procure to pay (P2P) is the full business process from deciding to buy something to paying the supplier, including requisitions, purchase orders, receiving and invoice approval.",
        explanation: "Procure to pay links purchasing, receiving and accounts payable. Someone requests an item, a buyer issues a purchase order, the warehouse records what arrived, and accounts payable checks the supplier's invoice against both before paying.\n\nA small manufacturer orders steel from a regular supplier. If the order lives in an email, the delivery is noted on paper and the invoice lands in someone's inbox, nobody can easily tell whether they were billed for what they actually got.\n\nA clean P2P process gives control over spending, catches billing errors and helps the business pay on time, and take early payment discounts when suppliers offer them.",
        breaks: [
          { title: "Purchases are made without a purchase order.", detail: "Invoices show up with nothing to check them against, so approval becomes guesswork." },
          { title: "Receipts are not recorded in the system.", detail: "Accounts payable cannot confirm delivery and has to chase the warehouse before paying." },
          { title: "Approvals sit in someone's inbox.", detail: "Invoices wait for sign-off, suppliers get paid late and relationships suffer." }
        ],
        diagram: ["Request item", "Issue PO", "Receive goods", "Match invoice", "Pay supplier"],
        faq: [
          { q: "What is the difference between procurement and procure to pay?", a: "Procurement often refers to sourcing and buying. Procure to pay covers the whole path through receiving, invoice checking and payment." },
          { q: "What is a three-way match in P2P?", a: "It checks that the purchase order, the goods receipt and the supplier invoice agree on items, quantities and prices before the invoice is paid." }
        ]
      },
      fr: {
        term: "De l'achat au paiement (P2P)",
        definition: "De l'achat au paiement (P2P) est le processus complet qui va de la décision d'acheter jusqu'au paiement du fournisseur, y compris les demandes d'achat, les bons de commande, la réception et l'approbation des factures.",
        explanation: "Le cycle de l'achat au paiement relie les achats, la réception et les comptes fournisseurs. Quelqu'un demande un article, un acheteur émet un bon de commande, l'entrepôt enregistre ce qui est arrivé, et les comptes fournisseurs comparent la facture aux deux avant de payer.\n\nUn petit fabricant commande de l'acier à un fournisseur habituel. Si la commande vit dans un courriel, que la livraison est notée sur papier et que la facture arrive dans une boîte de réception, personne ne peut facilement savoir s'il a été facturé pour ce qu'il a vraiment reçu.\n\nUn bon processus P2P donne le contrôle des dépenses, attrape les erreurs de facturation et aide à payer à temps, et à profiter des escomptes de paiement hâtif quand ils sont offerts.",
        breaks: [
          { title: "Des achats sont faits sans bon de commande.", detail: "Les factures arrivent sans rien pour les vérifier, et l'approbation devient une devinette." },
          { title: "Les réceptions ne sont pas enregistrées dans le système.", detail: "Les comptes fournisseurs ne peuvent pas confirmer la livraison et doivent relancer l'entrepôt avant de payer." },
          { title: "Les approbations dorment dans une boîte de réception.", detail: "Les factures attendent une signature, les fournisseurs sont payés en retard et la relation en souffre." }
        ],
        diagram: ["Demander l'article", "Émettre le bon", "Recevoir", "Rapprocher la facture", "Payer"],
        faq: [
          { q: "Quelle est la différence entre approvisionnement et P2P?", a: "L'approvisionnement désigne souvent la recherche de fournisseurs et l'achat. Le P2P couvre tout le chemin jusqu'à la réception, la vérification de la facture et le paiement." },
          { q: "Qu'est-ce que le rapprochement à trois dans le P2P?", a: "Il vérifie que le bon de commande, la réception et la facture du fournisseur concordent sur les articles, les quantités et les prix avant de payer." }
        ]
      },
      es: {
        term: "De la compra al pago (P2P)",
        definition: "De la compra al pago (P2P) es el proceso completo desde que se decide comprar algo hasta que se paga al proveedor, incluyendo solicitudes, órdenes de compra, recepción y aprobación de facturas.",
        explanation: "El ciclo de la compra al pago une compras, recepción y cuentas por pagar. Alguien solicita un artículo, un comprador emite una orden de compra, el almacén registra lo que llegó y cuentas por pagar compara la factura con ambos antes de pagar.\n\nUn pequeño fabricante pide acero a su proveedor habitual. Si la orden vive en un correo, la entrega se anota en papel y la factura cae en una bandeja de entrada, nadie puede saber con facilidad si le cobraron lo que realmente recibió.\n\nUn proceso P2P ordenado da control sobre el gasto, detecta errores de facturación y ayuda a pagar a tiempo, y a aprovechar descuentos por pronto pago cuando el proveedor los ofrece.",
        breaks: [
          { title: "Se compra sin orden de compra.", detail: "Las facturas llegan sin nada contra qué revisarlas, y la aprobación se vuelve adivinanza." },
          { title: "Las recepciones no se registran en el sistema.", detail: "Cuentas por pagar no puede confirmar la entrega y tiene que perseguir al almacén antes de pagar." },
          { title: "Las aprobaciones se quedan en una bandeja de entrada.", detail: "Las facturas esperan firma, los proveedores cobran tarde y la relación se deteriora." }
        ],
        diagram: ["Solicitar artículo", "Emitir orden", "Recibir mercancía", "Cotejar factura", "Pagar proveedor"],
        faq: [
          { q: "¿Cuál es la diferencia entre abastecimiento y P2P?", a: "El abastecimiento suele referirse a buscar proveedores y comprar. El P2P cubre todo el camino hasta la recepción, la revisión de la factura y el pago." },
          { q: "¿Qué es el cotejo de tres vías en P2P?", a: "Verifica que la orden de compra, la recepción y la factura del proveedor coincidan en artículos, cantidades y precios antes de pagar." }
        ]
      }
    }
  },
  {
    slug: "fit-gap-analysis",
    category: "erp",
    hub: "/erp-crm",
    related: ["customization-vs-configuration", "erp-implementation", "process-mapping", "request-for-proposal"],
    copy: {
      en: {
        term: "Fit-gap analysis",
        definition: "A fit-gap analysis compares a business's requirements with what a software product does out of the box, to show which needs it meets (fits) and which it does not (gaps).",
        explanation: "Before choosing or setting up a system, a fit-gap analysis lists each requirement and asks: does the standard product handle this? If yes, it is a fit. If not, it is a gap, and the team decides how to close it.\n\nA wholesale distributor might list needs like customer-specific pricing, lot tracking and EDI orders from big retailers. The new ERP handles the first two out of the box. EDI is a gap, so they plan an add-on rather than custom code.\n\nEach gap has a few options: change the process, configure the system, buy an add-on, build something custom, or accept the gap. Writing down which option was chosen, and why, saves arguments later.",
        breaks: [
          { title: "Requirements are vague.", detail: "Lines like the system must be easy to use cannot be tested, so everything looks like a fit." },
          { title: "Every gap is treated as must fix.", detail: "Teams close gaps with custom code instead of asking whether the process should change." },
          { title: "The analysis is done from demos only.", detail: "A polished demo hides limits that show up only when your own data and edge cases are tried." }
        ],
        diagram: ["List requirements", "Test against product", "Mark fit or gap", "Choose gap response"],
        faq: [
          { q: "When should a fit-gap analysis be done?", a: "Ideally during software selection and again early in implementation, once detailed processes are known." },
          { q: "What do you do with gaps?", a: "Each gap is closed by changing the process, configuring the system, adding a third-party tool, building custom work, or consciously accepting it." }
        ]
      },
      fr: {
        term: "Analyse des écarts",
        definition: "Une analyse des écarts compare les exigences d'une entreprise à ce que fait un logiciel de base, pour montrer les besoins qu'il couvre (correspondances) et ceux qu'il ne couvre pas (écarts).",
        explanation: "Avant de choisir ou de configurer un système, l'analyse des écarts dresse la liste de chaque exigence et pose la question : le produit standard s'en occupe-t-il? Si oui, c'est une correspondance. Sinon, c'est un écart, et l'équipe décide comment le combler.\n\nUn distributeur de gros peut inscrire des besoins comme des prix propres à chaque client, le suivi des lots et les commandes EDI des grands détaillants. Le nouvel ERP gère les deux premiers de base. L'EDI est un écart, alors on prévoit un module complémentaire plutôt que du code sur mesure.\n\nChaque écart a quelques options : changer le processus, configurer le système, acheter un module, développer sur mesure ou accepter l'écart. Noter l'option retenue, et pourquoi, évite des débats plus tard.",
        breaks: [
          { title: "Les exigences sont floues.", detail: "Des phrases comme le système doit être facile à utiliser ne se testent pas, et tout semble correspondre." },
          { title: "Chaque écart est traité comme à corriger absolument.", detail: "Les équipes comblent les écarts avec du code sur mesure au lieu de se demander si le processus devrait changer." },
          { title: "L'analyse repose seulement sur des démos.", detail: "Une démo soignée cache des limites qui n'apparaissent qu'avec vos propres données et cas particuliers." }
        ],
        diagram: ["Lister les exigences", "Tester le produit", "Correspondance ou écart", "Choisir la réponse"],
        faq: [
          { q: "Quand faut-il faire une analyse des écarts?", a: "Idéalement pendant le choix du logiciel, puis au début de l'implantation, une fois les processus détaillés connus." },
          { q: "Que fait-on avec les écarts?", a: "Chaque écart est comblé en changeant le processus, en configurant le système, en ajoutant un outil tiers, en développant sur mesure ou en l'acceptant consciemment." }
        ]
      },
      es: {
        term: "Análisis de brechas (fit-gap)",
        definition: "Un análisis de brechas compara los requisitos de una empresa con lo que un software hace de fábrica, para mostrar qué necesidades cubre (ajustes) y cuáles no (brechas).",
        explanation: "Antes de elegir o configurar un sistema, el análisis de brechas lista cada requisito y pregunta: ¿el producto estándar lo resuelve? Si sí, es un ajuste. Si no, es una brecha, y el equipo decide cómo cerrarla.\n\nUn distribuidor mayorista puede listar necesidades como precios por cliente, rastreo de lotes y pedidos EDI de grandes cadenas. El nuevo ERP resuelve las dos primeras de fábrica. El EDI es una brecha, así que se planea un complemento en vez de código a medida.\n\nCada brecha tiene opciones: cambiar el proceso, configurar el sistema, comprar un complemento, desarrollar a medida o aceptar la brecha. Anotar la opción elegida, y por qué, evita discusiones después.",
        breaks: [
          { title: "Los requisitos son vagos.", detail: "Frases como el sistema debe ser fácil de usar no se pueden probar, así que todo parece ajustarse." },
          { title: "Cada brecha se trata como obligatoria.", detail: "Los equipos cierran brechas con código a medida en lugar de preguntarse si el proceso debería cambiar." },
          { title: "El análisis se basa solo en demostraciones.", detail: "Una demo pulida oculta límites que solo aparecen con sus propios datos y casos especiales." }
        ],
        diagram: ["Listar requisitos", "Probar el producto", "Marcar ajuste o brecha", "Elegir respuesta"],
        faq: [
          { q: "¿Cuándo se hace un análisis de brechas?", a: "Idealmente durante la selección del software y otra vez al inicio de la implementación, cuando ya se conocen los procesos en detalle." },
          { q: "¿Qué se hace con las brechas?", a: "Cada brecha se cierra cambiando el proceso, configurando el sistema, agregando una herramienta externa, desarrollando a medida o aceptándola de forma consciente." }
        ]
      }
    }
  },
  {
    slug: "crm",
    category: "crm",
    hub: "/erp-crm",
    related: ["sales-pipeline", "crm-adoption", "duplicate-records", "erp", "marketing-automation"],
    copy: {
      en: {
        term: "CRM",
        definition: "A CRM (customer relationship management) system is software that keeps a shared record of every customer and prospect, and every call, email, quote and deal with them.",
        explanation: "A CRM replaces the scattered notes, inboxes and spreadsheets where customer knowledge usually lives. Anyone on the team can open an account and see who the contacts are, what was last discussed and which deals are open.\n\nThink of an industrial supply company where each sales rep keeps their own contact list. When a rep leaves, their relationships leave too. With a CRM, the history stays with the company, and a new rep can pick up where the last one stopped.\n\nA CRM is only useful if people actually log their work in it. The best setups keep data entry light and give reps something back, like reminders and ready-made quotes.",
        breaks: [
          { title: "Reps see it as a reporting chore.", detail: "If the CRM only serves managers, salespeople log the bare minimum and the data goes stale." },
          { title: "Too many required fields.", detail: "Long forms slow down every entry, so people skip it or fill fields with junk." },
          { title: "It is not connected to the ERP.", detail: "Reps cannot see orders, invoices or stock, so they keep calling the office or opening a second system." }
        ],
        faq: [
          { q: "What is the difference between a CRM and an ERP?", a: "A CRM focuses on customers, sales and marketing activity before and around the sale. An ERP runs operations and finance, such as orders, inventory and accounting. Many businesses connect the two." },
          { q: "Do small businesses need a CRM?", a: "Once more than one or two people deal with the same customers, or follow-ups start slipping, a simple CRM usually helps more than another spreadsheet." }
        ]
      },
      fr: {
        term: "CRM (GRC)",
        definition: "Un CRM (gestion de la relation client) est un logiciel qui tient un registre commun de chaque client et prospect, et de chaque appel, courriel, soumission et affaire avec eux.",
        explanation: "Un CRM remplace les notes, boîtes de réception et chiffriers éparpillés où se trouve habituellement la connaissance des clients. Tout membre de l'équipe peut ouvrir un compte et voir les contacts, la dernière discussion et les affaires en cours.\n\nPensez à une entreprise de fournitures industrielles où chaque représentant garde sa propre liste de contacts. Quand un représentant part, ses relations partent aussi. Avec un CRM, l'historique reste dans l'entreprise, et un nouveau représentant peut reprendre là où l'autre s'est arrêté.\n\nUn CRM n'est utile que si les gens y inscrivent vraiment leur travail. Les meilleures configurations gardent la saisie légère et redonnent quelque chose aux représentants, comme des rappels et des soumissions prêtes.",
        breaks: [
          { title: "Les représentants y voient une corvée de rapport.", detail: "Si le CRM ne sert qu'aux gestionnaires, les vendeurs inscrivent le strict minimum et les données vieillissent." },
          { title: "Trop de champs obligatoires.", detail: "Les longs formulaires ralentissent chaque saisie, alors les gens sautent l'étape ou remplissent n'importe quoi." },
          { title: "Il n'est pas relié à l'ERP.", detail: "Les représentants ne voient ni commandes, ni factures, ni stocks, et continuent d'appeler le bureau ou d'ouvrir un deuxième système." }
        ],
        faq: [
          { q: "Quelle est la différence entre un CRM et un ERP?", a: "Un CRM se concentre sur les clients, les ventes et le marketing avant et autour de la vente. Un ERP gère les opérations et la finance, comme les commandes, les stocks et la comptabilité. Beaucoup d'entreprises relient les deux." },
          { q: "Les petites entreprises ont-elles besoin d'un CRM?", a: "Dès que plus d'une ou deux personnes traitent avec les mêmes clients, ou que les suivis commencent à glisser, un CRM simple aide souvent plus qu'un autre chiffrier." }
        ]
      },
      es: {
        term: "CRM",
        definition: "Un CRM (gestión de relaciones con clientes) es un software que guarda un registro compartido de cada cliente y prospecto, y de cada llamada, correo, cotización y negocio con ellos.",
        explanation: "Un CRM reemplaza las notas, bandejas de entrada y hojas de cálculo dispersas donde suele vivir el conocimiento de los clientes. Cualquiera del equipo puede abrir una cuenta y ver quiénes son los contactos, qué se habló la última vez y qué negocios están abiertos.\n\nPiense en una empresa de suministros industriales donde cada vendedor tiene su propia lista de contactos. Cuando un vendedor se va, sus relaciones se van con él. Con un CRM, el historial queda en la empresa y un vendedor nuevo puede continuar donde quedó el anterior.\n\nUn CRM solo sirve si la gente registra su trabajo en él. Las mejores configuraciones mantienen la captura ligera y le dan algo a cambio al vendedor, como recordatorios y cotizaciones listas.",
        breaks: [
          { title: "Los vendedores lo ven como una tarea de reporte.", detail: "Si el CRM solo sirve a los gerentes, los vendedores registran lo mínimo y los datos envejecen." },
          { title: "Demasiados campos obligatorios.", detail: "Los formularios largos frenan cada registro, así que la gente lo omite o llena campos con basura." },
          { title: "No está conectado al ERP.", detail: "Los vendedores no ven pedidos, facturas ni inventario, y siguen llamando a la oficina o abriendo otro sistema." }
        ],
        faq: [
          { q: "¿Cuál es la diferencia entre un CRM y un ERP?", a: "Un CRM se enfoca en clientes, ventas y marketing antes y alrededor de la venta. Un ERP gestiona operaciones y finanzas, como pedidos, inventario y contabilidad. Muchas empresas conectan ambos." },
          { q: "¿Las pequeñas empresas necesitan un CRM?", a: "Cuando más de una o dos personas atienden a los mismos clientes, o los seguimientos empiezan a fallar, un CRM sencillo suele ayudar más que otra hoja de cálculo." }
        ]
      }
    }
  },
  {
    slug: "lead",
    category: "crm",
    hub: "/erp-crm",
    related: ["lead-scoring", "opportunity", "sales-pipeline", "crm", "marketing-automation"],
    copy: {
      en: {
        term: "Lead",
        definition: "A lead is a person or company that has shown some interest in what you sell but has not yet been qualified as a real sales opportunity.",
        explanation: "Leads come from many places: a website form, a trade show badge scan, a phone inquiry or a referral. At this point you know little more than a name and how they found you.\n\nA commercial cleaning supplier might get twenty web inquiries a week. Some are large facilities managers with a budget; others are students doing research. Treating every lead the same wastes sales time, so the team first checks fit, need and timing.\n\nOnce a lead is qualified, it usually becomes an opportunity in the CRM, with a value and an expected close date. Leads that are not ready can be nurtured until they are.",
        breaks: [
          { title: "Leads are never followed up.", detail: "Inquiries sit in a shared inbox and go cold before anyone calls back." },
          { title: "There is no shared definition of a qualified lead.", detail: "Marketing and sales argue about lead quality because they are using different rules." },
          { title: "The source is not recorded.", detail: "Without knowing where leads come from, you cannot tell which marketing actually works." }
        ],
        faq: [
          { q: "What is the difference between a lead and a prospect?", a: "Usage varies, but a lead is often an unqualified contact, while a prospect has been checked and looks like a good fit to sell to." },
          { q: "What is lead qualification?", a: "It is the step of checking whether a lead has a real need, the budget, the authority to buy and a reasonable timeline, before sales spends serious time on it." }
        ]
      },
      fr: {
        term: "Piste (lead)",
        definition: "Une piste est une personne ou une entreprise qui a montré un certain intérêt pour ce que vous vendez, mais qui n'a pas encore été qualifiée comme une vraie occasion de vente.",
        explanation: "Les pistes viennent de partout : un formulaire Web, un badge lu dans un salon, un appel ou une recommandation. À ce stade, on ne connaît guère plus qu'un nom et la façon dont la personne vous a trouvé.\n\nUn fournisseur de produits d'entretien commercial peut recevoir vingt demandes Web par semaine. Certaines viennent de gestionnaires d'immeubles avec un budget; d'autres d'étudiants qui font une recherche. Traiter toutes les pistes de la même façon gaspille le temps des ventes, alors l'équipe vérifie d'abord le profil, le besoin et le moment.\n\nUne fois qualifiée, la piste devient habituellement une occasion dans le CRM, avec une valeur et une date de conclusion prévue. Les pistes pas encore prêtes peuvent être entretenues jusqu'à ce qu'elles le soient.",
        breaks: [
          { title: "Les pistes ne sont jamais suivies.", detail: "Les demandes dorment dans une boîte commune et refroidissent avant que quelqu'un rappelle." },
          { title: "Il n'y a pas de définition commune d'une piste qualifiée.", detail: "Le marketing et les ventes se disputent sur la qualité des pistes parce qu'ils n'appliquent pas les mêmes règles." },
          { title: "La source n'est pas inscrite.", detail: "Sans savoir d'où viennent les pistes, impossible de dire quel marketing fonctionne vraiment." }
        ],
        faq: [
          { q: "Quelle est la différence entre une piste et un prospect?", a: "L'usage varie, mais une piste est souvent un contact non qualifié, alors qu'un prospect a été vérifié et semble être un bon client potentiel." },
          { q: "Qu'est-ce que la qualification des pistes?", a: "C'est l'étape qui vérifie si une piste a un vrai besoin, un budget, le pouvoir d'acheter et un échéancier raisonnable, avant que les ventes y consacrent du temps." }
        ]
      },
      es: {
        term: "Lead (prospecto)",
        definition: "Un lead es una persona o empresa que ha mostrado algo de interés en lo que usted vende, pero que todavía no ha sido calificada como una oportunidad de venta real.",
        explanation: "Los leads llegan de muchos lados: un formulario web, un gafete escaneado en una feria, una llamada o una recomendación. En este punto se sabe poco más que un nombre y cómo lo encontraron.\n\nUn proveedor de limpieza comercial puede recibir veinte consultas web por semana. Algunas son de administradores de edificios con presupuesto; otras, de estudiantes que investigan. Tratar todos los leads igual desperdicia tiempo de ventas, así que el equipo revisa primero perfil, necesidad y momento.\n\nCuando un lead se califica, normalmente se convierte en una oportunidad en el CRM, con un valor y una fecha estimada de cierre. Los que aún no están listos se pueden nutrir hasta que lo estén.",
        breaks: [
          { title: "Nadie da seguimiento a los leads.", detail: "Las consultas se quedan en una bandeja compartida y se enfrían antes de que alguien llame." },
          { title: "No hay una definición común de lead calificado.", detail: "Marketing y ventas discuten sobre la calidad porque usan reglas distintas." },
          { title: "No se registra el origen.", detail: "Sin saber de dónde vienen los leads, no se puede saber qué marketing funciona." }
        ],
        faq: [
          { q: "¿Cuál es la diferencia entre un lead y un prospecto?", a: "El uso varía, pero un lead suele ser un contacto sin calificar, mientras que un prospecto ya fue revisado y parece un buen candidato para venderle." },
          { q: "¿Qué es la calificación de leads?", a: "Es el paso de verificar si un lead tiene una necesidad real, presupuesto, autoridad para comprar y un plazo razonable, antes de que ventas le dedique tiempo en serio." }
        ]
      }
    }
  },
  {
    slug: "opportunity",
    category: "crm",
    hub: "/erp-crm",
    related: ["deal-stage", "sales-pipeline", "lead", "crm"],
    copy: {
      en: {
        term: "Opportunity",
        definition: "An opportunity is a qualified potential sale tracked in a CRM, with an estimated value, an expected close date and a current stage.",
        explanation: "An opportunity is a lead that has turned into a real chance to sell. It has a specific need, a rough dollar amount and someone working to close it.\n\nA packaging distributor learns that a local bakery chain wants new boxes for three locations. The rep creates an opportunity, estimates the annual value, sets the stage to quote sent, and adds a close date for next month. Now the manager can see it in the forecast.\n\nOpportunities are the building blocks of a sales pipeline. Their accuracy depends on reps updating value, stage and dates honestly, including closing them as lost when a deal dies.",
        breaks: [
          { title: "Dead deals are never closed out.", detail: "Old opportunities stay open for months, which inflates the pipeline and the forecast." },
          { title: "Close dates keep sliding.", detail: "Reps push dates forward without updating stage or value, hiding real problems." },
          { title: "Values are guesses with no basis.", detail: "Without a quote or clear scope, the amount is a placeholder that nobody revisits." }
        ],
        faq: [
          { q: "When does a lead become an opportunity?", a: "Usually once it has been qualified, meaning there is a real need, a likely budget and a decision maker engaged. Each business should write its own rule." },
          { q: "Why record lost opportunities?", a: "Lost deals and their reasons show where you lose on price, timing or fit, which helps sales and product decisions." }
        ]
      },
      fr: {
        term: "Occasion de vente",
        definition: "Une occasion de vente est une vente potentielle qualifiée suivie dans un CRM, avec une valeur estimée, une date de conclusion prévue et une étape actuelle.",
        explanation: "Une occasion est une piste devenue une vraie chance de vendre. Elle a un besoin précis, un montant approximatif et quelqu'un qui travaille à la conclure.\n\nUn distributeur d'emballages apprend qu'une chaîne de boulangeries locale veut de nouvelles boîtes pour trois succursales. Le représentant crée une occasion, estime la valeur annuelle, met l'étape à soumission envoyée et ajoute une date de conclusion le mois prochain. Le gestionnaire la voit maintenant dans la prévision.\n\nLes occasions sont les blocs qui forment le pipeline de ventes. Leur justesse dépend de représentants qui mettent à jour honnêtement la valeur, l'étape et les dates, et qui ferment comme perdues les affaires mortes.",
        breaks: [
          { title: "Les affaires mortes ne sont jamais fermées.", detail: "De vieilles occasions restent ouvertes des mois, ce qui gonfle le pipeline et la prévision." },
          { title: "Les dates de conclusion reculent sans cesse.", detail: "Les représentants repoussent les dates sans changer l'étape ou la valeur, ce qui cache les vrais problèmes." },
          { title: "Les valeurs sont des devinettes.", detail: "Sans soumission ni portée claire, le montant est un chiffre provisoire que personne ne revoit." }
        ],
        faq: [
          { q: "Quand une piste devient-elle une occasion?", a: "Habituellement une fois qualifiée : il y a un vrai besoin, un budget probable et un décideur engagé. Chaque entreprise devrait écrire sa propre règle." },
          { q: "Pourquoi inscrire les occasions perdues?", a: "Les affaires perdues et leurs raisons montrent où l'on perd sur le prix, le moment ou le profil, ce qui aide les décisions de vente et de produit." }
        ]
      },
      es: {
        term: "Oportunidad",
        definition: "Una oportunidad es una venta potencial calificada que se sigue en un CRM, con un valor estimado, una fecha esperada de cierre y una etapa actual.",
        explanation: "Una oportunidad es un lead que se convirtió en una posibilidad real de venta. Tiene una necesidad concreta, un monto aproximado y alguien trabajando para cerrarla.\n\nUn distribuidor de empaques se entera de que una cadena local de panaderías quiere cajas nuevas para tres sucursales. El vendedor crea una oportunidad, estima el valor anual, pone la etapa en cotización enviada y agrega una fecha de cierre para el próximo mes. Ahora el gerente la ve en el pronóstico.\n\nLas oportunidades son las piezas del embudo de ventas. Su precisión depende de que los vendedores actualicen con honestidad el valor, la etapa y las fechas, y cierren como perdidos los negocios que mueren.",
        breaks: [
          { title: "Los negocios muertos nunca se cierran.", detail: "Oportunidades viejas siguen abiertas por meses e inflan el embudo y el pronóstico." },
          { title: "Las fechas de cierre se siguen moviendo.", detail: "Los vendedores corren las fechas sin cambiar la etapa ni el valor, y esconden problemas reales." },
          { title: "Los valores son suposiciones sin base.", detail: "Sin una cotización o un alcance claro, el monto es un número provisional que nadie revisa." }
        ],
        faq: [
          { q: "¿Cuándo un lead se convierte en oportunidad?", a: "Por lo general cuando ya se calificó: hay una necesidad real, un presupuesto probable y un tomador de decisiones involucrado. Cada empresa debe escribir su propia regla." },
          { q: "¿Por qué registrar oportunidades perdidas?", a: "Los negocios perdidos y sus motivos muestran dónde se pierde por precio, tiempo o perfil, lo que ayuda a decidir en ventas y producto." }
        ]
      }
    }
  },
  {
    slug: "sales-pipeline",
    category: "crm",
    hub: "/erp-crm",
    related: ["deal-stage", "opportunity", "lead", "crm", "kpi"],
    copy: {
      en: {
        term: "Sales pipeline",
        definition: "A sales pipeline is the set of all open opportunities, arranged by the stage each one has reached on the way from first contact to a closed sale.",
        explanation: "A sales pipeline shows at a glance how many deals you have, how much they are worth and where they are stuck. It is usually shown as columns, one per stage, with deals moving left to right.\n\nA signage company might use stages like discovery, site visit, quote sent, negotiation and won or lost. On Monday the owner sees ten deals at quote sent but none in negotiation, which tells her quotes are not getting answered and someone should follow up.\n\nA healthy pipeline is not just a big total. It has deals spread across stages, moving at a steady pace, with stale ones cleared out.",
        breaks: [
          { title: "Stages mean different things to different reps.", detail: "One rep's quote sent is another's verbal yes, so the pipeline cannot be compared or trusted." },
          { title: "The pipeline is only reviewed at quarter end.", detail: "Problems like stuck deals are found too late to act on." },
          { title: "It is padded with deals that will never close.", detail: "A large but unrealistic pipeline gives false comfort and poor forecasts." }
        ],
        diagram: ["New lead", "Qualified", "Proposal sent", "Negotiation", "Won or lost"],
        faq: [
          { q: "What is the difference between a sales pipeline and a sales funnel?", a: "The pipeline tracks individual deals and what the seller does at each stage. The funnel usually describes how many buyers drop off from awareness to purchase, often from a marketing view." },
          { q: "How many stages should a pipeline have?", a: "Enough to show real progress, often five to seven. Each stage should have a clear exit rule that anyone could check." }
        ]
      },
      fr: {
        term: "Pipeline de ventes",
        definition: "Un pipeline de ventes est l'ensemble des occasions ouvertes, classées selon l'étape que chacune a atteinte entre le premier contact et la vente conclue.",
        explanation: "Un pipeline de ventes montre d'un coup d'œil combien d'affaires vous avez, leur valeur et où elles bloquent. Il est souvent affiché en colonnes, une par étape, avec des affaires qui avancent de gauche à droite.\n\nUne entreprise d'enseignes peut utiliser des étapes comme découverte, visite des lieux, soumission envoyée, négociation et gagnée ou perdue. Le lundi, la propriétaire voit dix affaires à soumission envoyée mais aucune en négociation : les soumissions ne reçoivent pas de réponse et quelqu'un doit faire un suivi.\n\nUn pipeline sain n'est pas seulement un gros total. Il a des affaires réparties entre les étapes, qui avancent à un rythme régulier, sans affaires périmées.",
        breaks: [
          { title: "Les étapes veulent dire des choses différentes selon le représentant.", detail: "La soumission envoyée de l'un est le oui verbal de l'autre, alors le pipeline ne peut être ni comparé ni cru." },
          { title: "Le pipeline n'est revu qu'en fin de trimestre.", detail: "Les problèmes comme les affaires bloquées sont découverts trop tard pour agir." },
          { title: "Il est gonflé d'affaires qui ne se concluront jamais.", detail: "Un gros pipeline irréaliste donne un faux confort et de mauvaises prévisions." }
        ],
        diagram: ["Nouvelle piste", "Qualifiée", "Proposition envoyée", "Négociation", "Gagnée ou perdue"],
        faq: [
          { q: "Quelle est la différence entre un pipeline et un entonnoir de ventes?", a: "Le pipeline suit chaque affaire et ce que fait le vendeur à chaque étape. L'entonnoir décrit plutôt combien d'acheteurs abandonnent entre la notoriété et l'achat, souvent du point de vue marketing." },
          { q: "Combien d'étapes un pipeline devrait-il avoir?", a: "Assez pour montrer un vrai progrès, souvent de cinq à sept. Chaque étape devrait avoir une règle de sortie claire que n'importe qui peut vérifier." }
        ]
      },
      es: {
        term: "Embudo de ventas (pipeline)",
        definition: "Un embudo de ventas es el conjunto de oportunidades abiertas, ordenadas según la etapa que cada una alcanzó entre el primer contacto y la venta cerrada.",
        explanation: "El embudo de ventas muestra de un vistazo cuántos negocios tiene, cuánto valen y dónde están detenidos. Suele verse en columnas, una por etapa, con negocios que avanzan de izquierda a derecha.\n\nUna empresa de letreros puede usar etapas como descubrimiento, visita al sitio, cotización enviada, negociación y ganado o perdido. El lunes la dueña ve diez negocios en cotización enviada y ninguno en negociación, lo que le dice que las cotizaciones no reciben respuesta y alguien debe dar seguimiento.\n\nUn embudo sano no es solo un total grande. Tiene negocios repartidos entre etapas, avanzando a buen ritmo y sin negocios estancados.",
        breaks: [
          { title: "Las etapas significan cosas distintas para cada vendedor.", detail: "La cotización enviada de uno es el sí verbal de otro, y el embudo no se puede comparar ni creer." },
          { title: "Solo se revisa al final del trimestre.", detail: "Problemas como negocios atorados se descubren demasiado tarde para actuar." },
          { title: "Está inflado con negocios que nunca cerrarán.", detail: "Un embudo grande pero irreal da falsa tranquilidad y malos pronósticos." }
        ],
        diagram: ["Lead nuevo", "Calificado", "Propuesta enviada", "Negociación", "Ganado o perdido"],
        faq: [
          { q: "¿Cuál es la diferencia entre pipeline y embudo de conversión?", a: "El pipeline sigue cada negocio y lo que hace el vendedor en cada etapa. El embudo de conversión suele describir cuántos compradores se pierden desde que conocen la marca hasta que compran, desde la vista de marketing." },
          { q: "¿Cuántas etapas debe tener?", a: "Las suficientes para mostrar avance real, a menudo de cinco a siete. Cada etapa debe tener una regla de salida clara que cualquiera pueda comprobar." }
        ]
      }
    }
  },
  {
    slug: "lead-scoring",
    category: "crm",
    hub: "/erp-crm",
    related: ["lead", "marketing-automation", "account-based-marketing", "crm"],
    copy: {
      en: {
        term: "Lead scoring",
        definition: "Lead scoring is a method of ranking leads with points based on who they are and what they do, so sales can call the most promising ones first.",
        explanation: "Lead scoring gives each lead a number. Points come from fit, such as industry, company size or location, and from behaviour, such as visiting the pricing page, opening emails or asking for a quote.\n\nAn equipment rental company might give points for being a contractor in its service area and more points for requesting a quote. A student who downloaded a guide scores low. When a lead crosses a set score, it is sent to a sales rep.\n\nScoring rules are a best guess at first. Compare scores against which leads actually became customers, and adjust the points every few months.",
        breaks: [
          { title: "Points are set once and never reviewed.", detail: "Buying behaviour changes, but the model does not, so scores lose meaning." },
          { title: "Activity is overweighted.", detail: "Someone who opens every newsletter scores high even if they could never buy." },
          { title: "Sales does not trust the scores.", detail: "If high scores keep turning out to be poor leads, reps ignore the system entirely." }
        ],
        faq: [
          { q: "Do small businesses need lead scoring?", a: "If you only get a handful of leads, a person can judge each one. Scoring helps when the volume is too high to review by hand." },
          { q: "What is negative scoring?", a: "It subtracts points for signs of poor fit, such as a competitor's email domain or a job seeker visiting the careers page." }
        ]
      },
      fr: {
        term: "Notation des pistes",
        definition: "La notation des pistes est une méthode qui classe les pistes avec des points selon qui elles sont et ce qu'elles font, pour que les ventes appellent d'abord les plus prometteuses.",
        explanation: "La notation des pistes donne un chiffre à chaque piste. Les points viennent du profil, comme le secteur, la taille de l'entreprise ou l'emplacement, et du comportement, comme la visite de la page des prix, l'ouverture des courriels ou une demande de soumission.\n\nUne entreprise de location d'équipement peut donner des points à un entrepreneur dans sa zone de service, et plus de points s'il demande une soumission. Un étudiant qui a téléchargé un guide obtient un faible pointage. Quand une piste dépasse un seuil, elle est envoyée à un représentant.\n\nLes règles de notation sont d'abord une estimation. Comparez les pointages aux pistes devenues clientes et ajustez les points à quelques mois d'intervalle.",
        breaks: [
          { title: "Les points sont fixés une fois et jamais revus.", detail: "Le comportement d'achat change, mais pas le modèle, et les pointages perdent leur sens." },
          { title: "L'activité pèse trop lourd.", detail: "Quelqu'un qui ouvre chaque infolettre obtient un pointage élevé même s'il ne pourra jamais acheter." },
          { title: "Les ventes ne font pas confiance aux pointages.", detail: "Si les pointages élevés se révèlent souvent de mauvaises pistes, les représentants ignorent le système." }
        ],
        faq: [
          { q: "Les petites entreprises ont-elles besoin de noter les pistes?", a: "Si vous recevez peu de pistes, une personne peut juger chacune. La notation aide quand le volume est trop grand pour un examen manuel." },
          { q: "Qu'est-ce que la notation négative?", a: "Elle retire des points pour des signes de mauvais profil, comme le domaine de courriel d'un concurrent ou un chercheur d'emploi qui visite la page carrières." }
        ]
      },
      es: {
        term: "Calificación de leads (lead scoring)",
        definition: "La calificación de leads es un método para ordenar leads con puntos según quiénes son y qué hacen, para que ventas llame primero a los más prometedores.",
        explanation: "El lead scoring le da un número a cada lead. Los puntos vienen del perfil, como industria, tamaño de empresa o ubicación, y del comportamiento, como visitar la página de precios, abrir correos o pedir una cotización.\n\nUna empresa de renta de equipo puede dar puntos por ser contratista en su zona de servicio y más puntos por pedir una cotización. Un estudiante que descargó una guía obtiene un puntaje bajo. Cuando un lead pasa cierto puntaje, se envía a un vendedor.\n\nLas reglas son al principio una suposición. Compare los puntajes con los leads que de verdad se volvieron clientes y ajuste los puntos cada pocos meses.",
        breaks: [
          { title: "Los puntos se fijan una vez y nunca se revisan.", detail: "El comportamiento de compra cambia pero el modelo no, y los puntajes pierden sentido." },
          { title: "La actividad pesa demasiado.", detail: "Alguien que abre cada boletín tiene un puntaje alto aunque nunca pueda comprar." },
          { title: "Ventas no confía en los puntajes.", detail: "Si los puntajes altos resultan ser malos leads, los vendedores ignoran el sistema." }
        ],
        faq: [
          { q: "¿Las pequeñas empresas necesitan lead scoring?", a: "Si recibe pocos leads, una persona puede evaluar cada uno. La calificación ayuda cuando el volumen es demasiado para revisar a mano." },
          { q: "¿Qué es la puntuación negativa?", a: "Resta puntos por señales de mal perfil, como el dominio de correo de un competidor o alguien que busca empleo en la página de vacantes." }
        ]
      }
    }
  },
  {
    slug: "deal-stage",
    category: "crm",
    hub: "/erp-crm",
    related: ["sales-pipeline", "opportunity", "crm", "kpi"],
    copy: {
      en: {
        term: "Deal stage",
        definition: "A deal stage is a named step in the sales process, such as qualified or proposal sent, that shows how far an opportunity has progressed.",
        explanation: "Deal stages break a sale into clear steps so everyone can see where each deal stands. Each stage should have an exit rule: a fact that must be true before the deal can move on.\n\nA commercial HVAC contractor might say a deal moves from site assessment to proposal only after a technician has visited and written up the scope. That rule stops reps from skipping ahead because they feel good about a call.\n\nMany CRMs attach a win probability to each stage, which feeds the forecast. Those percentages should come from your own past results, not from a template.",
        breaks: [
          { title: "Stages describe what the seller did, not what the buyer agreed to.", detail: "Sending a proposal does not mean the buyer is closer to saying yes." },
          { title: "There are no exit rules.", detail: "Reps move deals forward based on gut feel, so the pipeline looks further along than it is." },
          { title: "Stage probabilities are copied from a default template.", detail: "The forecast then reflects someone else's business, not yours." }
        ],
        diagram: ["Qualify need", "Assess scope", "Send proposal", "Negotiate", "Close"],
        faq: [
          { q: "What are common deal stages?", a: "Typical stages are qualified, discovery, proposal, negotiation, and closed won or lost. The right set depends on how your customers actually buy." },
          { q: "Can a deal skip a stage?", a: "It can, but it should still meet the exit rules of the skipped stages. Frequent skipping suggests the stages do not match reality." }
        ]
      },
      fr: {
        term: "Étape de vente",
        definition: "Une étape de vente est un jalon nommé du processus de vente, comme qualifiée ou proposition envoyée, qui montre jusqu'où une occasion a progressé.",
        explanation: "Les étapes de vente découpent une vente en jalons clairs pour que tout le monde voie où en est chaque affaire. Chaque étape devrait avoir une règle de sortie : un fait qui doit être vrai avant de passer à la suivante.\n\nUn entrepreneur en CVC commercial peut décider qu'une affaire passe de l'évaluation sur place à la proposition seulement après la visite d'un technicien et la rédaction de la portée. Cette règle empêche les représentants de sauter des étapes parce qu'un appel s'est bien passé.\n\nBeaucoup de CRM associent une probabilité de gain à chaque étape, ce qui alimente la prévision. Ces pourcentages devraient venir de vos propres résultats passés, pas d'un modèle.",
        breaks: [
          { title: "Les étapes décrivent ce que le vendeur a fait, pas ce que l'acheteur a accepté.", detail: "Envoyer une proposition ne veut pas dire que l'acheteur est plus près de dire oui." },
          { title: "Il n'y a pas de règles de sortie.", detail: "Les représentants avancent les affaires selon leur intuition, et le pipeline paraît plus avancé qu'il ne l'est." },
          { title: "Les probabilités sont copiées d'un modèle par défaut.", detail: "La prévision reflète alors l'entreprise de quelqu'un d'autre, pas la vôtre." }
        ],
        diagram: ["Qualifier le besoin", "Évaluer la portée", "Envoyer la proposition", "Négocier", "Conclure"],
        faq: [
          { q: "Quelles sont les étapes de vente courantes?", a: "Les étapes typiques sont qualifiée, découverte, proposition, négociation, puis gagnée ou perdue. Le bon ensemble dépend de la façon dont vos clients achètent vraiment." },
          { q: "Une affaire peut-elle sauter une étape?", a: "Oui, mais elle devrait quand même respecter les règles de sortie des étapes sautées. Des sauts fréquents montrent que les étapes ne collent pas à la réalité." }
        ]
      },
      es: {
        term: "Etapa del negocio",
        definition: "Una etapa del negocio es un paso con nombre dentro del proceso de venta, como calificado o propuesta enviada, que muestra cuánto ha avanzado una oportunidad.",
        explanation: "Las etapas dividen una venta en pasos claros para que todos vean dónde está cada negocio. Cada etapa debe tener una regla de salida: un hecho que debe cumplirse antes de avanzar.\n\nUn contratista de climatización comercial puede decidir que un negocio pasa de evaluación en sitio a propuesta solo después de que un técnico visitó y escribió el alcance. Esa regla evita que los vendedores se adelanten porque una llamada salió bien.\n\nMuchos CRM asignan una probabilidad de cierre a cada etapa, que alimenta el pronóstico. Esos porcentajes deben salir de sus propios resultados pasados, no de una plantilla.",
        breaks: [
          { title: "Las etapas describen lo que hizo el vendedor, no lo que aceptó el comprador.", detail: "Enviar una propuesta no significa que el comprador esté más cerca de decir que sí." },
          { title: "No hay reglas de salida.", detail: "Los vendedores avanzan negocios por intuición, y el embudo parece más avanzado de lo que está." },
          { title: "Las probabilidades se copian de una plantilla.", detail: "El pronóstico refleja entonces el negocio de otro, no el suyo." }
        ],
        diagram: ["Calificar necesidad", "Evaluar alcance", "Enviar propuesta", "Negociar", "Cerrar"],
        faq: [
          { q: "¿Cuáles son las etapas comunes?", a: "Las típicas son calificado, descubrimiento, propuesta, negociación y cerrado ganado o perdido. El conjunto correcto depende de cómo compran realmente sus clientes." },
          { q: "¿Un negocio puede saltarse una etapa?", a: "Puede, pero debe cumplir las reglas de salida de las etapas saltadas. Si se saltan seguido, las etapas no reflejan la realidad." }
        ]
      }
    }
  },
  {
    slug: "customer-lifetime-value",
    category: "crm",
    hub: "/erp-crm",
    related: ["churn", "account-based-marketing", "kpi", "crm", "business-intelligence"],
    copy: {
      en: {
        term: "Customer lifetime value (CLV)",
        definition: "Customer lifetime value (CLV) is an estimate of the total profit a business can expect from one customer over the whole relationship.",
        explanation: "CLV shifts the question from what did this order earn to what is this customer worth over time. A simple version multiplies average order margin by how often they buy and how many years they tend to stay.\n\nA janitorial supply distributor might find that small office customers order little but stay for years, while one-time event buyers spend more once and never return. Knowing that changes where it spends sales effort and how much it is willing to pay to win each type.\n\nCLV is an estimate, not a fact. It works best when built from your own order history and revisited as customer behaviour changes.",
        breaks: [
          { title: "Revenue is used instead of margin.", detail: "High-revenue customers with thin margins look more valuable than they are." },
          { title: "Customer records are split across systems.", detail: "Duplicate accounts break one customer into several, so their real value is hidden." },
          { title: "One average is used for every customer.", detail: "Different segments behave very differently, and a single number hides that." }
        ],
        faq: [
          { q: "How do you calculate customer lifetime value?", a: "A basic method is average margin per order, times orders per year, times expected years as a customer. More detailed models also account for retention rates and the cost of serving the customer." },
          { q: "Why compare CLV with acquisition cost?", a: "If it costs more to win a customer than they will ever return in profit, growth loses money. Comparing the two shows whether marketing spend makes sense." }
        ]
      },
      fr: {
        term: "Valeur à vie du client (VVC)",
        definition: "La valeur à vie du client (VVC) est une estimation du profit total qu'une entreprise peut attendre d'un client pendant toute la durée de la relation.",
        explanation: "La VVC remplace la question combien cette commande a-t-elle rapporté par combien vaut ce client avec le temps. Une version simple multiplie la marge moyenne par commande par la fréquence d'achat et le nombre d'années que les clients restent habituellement.\n\nUn distributeur de produits d'entretien peut découvrir que les petits bureaux commandent peu mais restent des années, alors que les acheteurs ponctuels pour des événements dépensent plus une fois et ne reviennent jamais. Cela change où il met l'effort de vente et combien il accepte de payer pour gagner chaque type de client.\n\nLa VVC est une estimation, pas un fait. Elle fonctionne mieux bâtie sur votre propre historique de commandes et revue quand le comportement des clients change.",
        breaks: [
          { title: "On utilise le revenu au lieu de la marge.", detail: "Les clients à gros revenus mais à faible marge semblent valoir plus qu'en réalité." },
          { title: "Les fiches clients sont réparties entre plusieurs systèmes.", detail: "Les comptes en double divisent un client en plusieurs, ce qui cache sa vraie valeur." },
          { title: "Une seule moyenne sert pour tous les clients.", detail: "Les segments se comportent très différemment, et un seul chiffre le cache." }
        ],
        faq: [
          { q: "Comment calcule-t-on la valeur à vie du client?", a: "Une méthode de base multiplie la marge moyenne par commande par le nombre de commandes par année et par le nombre d'années prévu. Les modèles plus détaillés tiennent aussi compte de la fidélisation et du coût de service." },
          { q: "Pourquoi comparer la VVC au coût d'acquisition?", a: "S'il coûte plus cher de gagner un client que le profit qu'il rapportera, la croissance perd de l'argent. La comparaison montre si les dépenses marketing ont du sens." }
        ]
      },
      es: {
        term: "Valor de vida del cliente (CLV)",
        definition: "El valor de vida del cliente (CLV) es una estimación de la ganancia total que una empresa puede esperar de un cliente durante toda la relación.",
        explanation: "El CLV cambia la pregunta de cuánto dejó este pedido a cuánto vale este cliente con el tiempo. Una versión sencilla multiplica el margen promedio por pedido por la frecuencia de compra y los años que suele quedarse.\n\nUn distribuidor de productos de limpieza puede descubrir que las oficinas pequeñas piden poco pero se quedan años, mientras que los compradores de eventos gastan más una vez y no vuelven. Saberlo cambia dónde pone el esfuerzo de ventas y cuánto está dispuesto a pagar por ganar cada tipo de cliente.\n\nEl CLV es una estimación, no un hecho. Funciona mejor si se construye con su propio historial de pedidos y se revisa cuando cambia el comportamiento de los clientes.",
        breaks: [
          { title: "Se usa el ingreso en lugar del margen.", detail: "Clientes con mucho ingreso pero poco margen parecen valer más de lo que valen." },
          { title: "Los registros de clientes están repartidos entre sistemas.", detail: "Las cuentas duplicadas dividen a un cliente en varios y ocultan su valor real." },
          { title: "Se usa un solo promedio para todos.", detail: "Los segmentos se comportan muy distinto, y una sola cifra lo oculta." }
        ],
        faq: [
          { q: "¿Cómo se calcula el valor de vida del cliente?", a: "Un método básico es margen promedio por pedido, por pedidos al año, por años esperados como cliente. Los modelos más detallados también consideran la retención y el costo de atender al cliente." },
          { q: "¿Por qué comparar el CLV con el costo de adquisición?", a: "Si cuesta más ganar un cliente de lo que dejará en ganancia, crecer pierde dinero. Comparar ambos muestra si el gasto en marketing tiene sentido." }
        ]
      }
    }
  },
  {
    slug: "churn",
    category: "crm",
    hub: "/erp-crm",
    related: ["customer-lifetime-value", "kpi", "crm", "dashboard"],
    copy: {
      en: {
        term: "Churn",
        definition: "Churn is the loss of customers, or of recurring revenue, over a given period, usually shown as a rate.",
        explanation: "Churn tells you how many customers stopped buying. For subscription businesses it is clear: someone cancels. For distributors and wholesalers it is quieter: a customer just orders less, then stops.\n\nA restaurant supply company may not notice that a regular account has not ordered in two months until the year-end review. By then, the customer has moved to a competitor. Setting a rule, such as no order in twice the usual interval, lets the CRM flag accounts that are drifting away while there is still time to call.\n\nKeeping a customer is usually cheaper than finding a new one, so even a small drop in churn can matter a lot.",
        breaks: [
          { title: "Nobody defines when a customer counts as lost.", detail: "Without a rule, churn is noticed only after it is too late to win them back." },
          { title: "Churn is measured but not explained.", detail: "Tracking the rate without asking customers why they left gives no clue what to fix." },
          { title: "Revenue churn hides behind new sales.", detail: "Strong new business can mask a steady loss of existing customers." }
        ],
        faq: [
          { q: "How do you calculate churn rate?", a: "Divide the number of customers lost during a period by the number you had at the start of it. Revenue churn uses lost recurring revenue instead of customer counts." },
          { q: "What is the opposite of churn?", a: "Retention. Retention rate is the share of customers you keep over a period." }
        ]
      },
      fr: {
        term: "Attrition (churn)",
        definition: "L'attrition est la perte de clients, ou de revenus récurrents, sur une période donnée, habituellement exprimée sous forme de taux.",
        explanation: "L'attrition indique combien de clients ont cessé d'acheter. Pour une entreprise à abonnement, c'est clair : quelqu'un annule. Pour un distributeur ou un grossiste, c'est plus discret : un client commande moins, puis arrête.\n\nUne entreprise de fournitures pour restaurants peut ne pas remarquer qu'un compte régulier n'a rien commandé depuis deux mois avant la revue de fin d'année. Le client est déjà parti chez un concurrent. Une règle, comme aucune commande pendant deux fois l'intervalle habituel, permet au CRM de signaler les comptes qui s'éloignent pendant qu'il est encore temps d'appeler.\n\nGarder un client coûte généralement moins cher que d'en trouver un nouveau, alors même une petite baisse d'attrition peut beaucoup compter.",
        breaks: [
          { title: "Personne ne définit quand un client est perdu.", detail: "Sans règle, on remarque l'attrition seulement quand il est trop tard pour reconquérir le client." },
          { title: "L'attrition est mesurée, mais pas expliquée.", detail: "Suivre le taux sans demander aux clients pourquoi ils partent ne dit pas quoi corriger." },
          { title: "La perte de revenus se cache derrière les nouvelles ventes.", detail: "De bonnes nouvelles affaires peuvent masquer une perte régulière de clients existants." }
        ],
        faq: [
          { q: "Comment calcule-t-on le taux d'attrition?", a: "Divisez le nombre de clients perdus pendant une période par le nombre de clients au début de celle-ci. L'attrition des revenus utilise les revenus récurrents perdus au lieu du nombre de clients." },
          { q: "Quel est le contraire de l'attrition?", a: "La fidélisation. Le taux de fidélisation est la part des clients que vous gardez sur une période." }
        ]
      },
      es: {
        term: "Abandono de clientes (churn)",
        definition: "El abandono de clientes es la pérdida de clientes, o de ingresos recurrentes, en un periodo dado, normalmente expresada como tasa.",
        explanation: "El churn indica cuántos clientes dejaron de comprar. En un negocio de suscripción es claro: alguien cancela. En distribuidores y mayoristas es más silencioso: un cliente pide menos y luego deja de pedir.\n\nUna empresa de suministros para restaurantes puede no notar que una cuenta habitual lleva dos meses sin pedir hasta la revisión de fin de año. Para entonces, el cliente ya se fue con la competencia. Una regla, como ningún pedido en el doble del intervalo normal, permite que el CRM marque las cuentas que se alejan mientras todavía hay tiempo de llamar.\n\nConservar un cliente suele costar menos que conseguir uno nuevo, así que incluso una baja pequeña del churn puede importar mucho.",
        breaks: [
          { title: "Nadie define cuándo un cliente se considera perdido.", detail: "Sin regla, el abandono se nota cuando ya es tarde para recuperarlo." },
          { title: "Se mide pero no se explica.", detail: "Seguir la tasa sin preguntar a los clientes por qué se fueron no dice qué corregir." },
          { title: "La pérdida de ingresos se esconde detrás de ventas nuevas.", detail: "Un buen ritmo de negocios nuevos puede ocultar una pérdida constante de clientes existentes." }
        ],
        faq: [
          { q: "¿Cómo se calcula la tasa de abandono?", a: "Divida el número de clientes perdidos en un periodo entre el número que tenía al inicio. El churn de ingresos usa el ingreso recurrente perdido en vez de la cantidad de clientes." },
          { q: "¿Qué es lo contrario del churn?", a: "La retención. La tasa de retención es la proporción de clientes que conserva en un periodo." }
        ]
      }
    }
  },
  {
    slug: "account-based-marketing",
    category: "crm",
    hub: "/erp-crm",
    related: ["lead-scoring", "marketing-automation", "crm", "customer-lifetime-value", "retargeting"],
    copy: {
      en: {
        term: "Account-based marketing (ABM)",
        definition: "Account-based marketing (ABM) is a business-to-business approach where sales and marketing pick a short list of target companies and tailor outreach to the people inside each one.",
        explanation: "Most marketing casts a wide net and waits for leads. ABM flips that. You start with the accounts you most want, research who makes and influences the decision, and build messages just for them.\n\nA software firm that serves municipal water utilities might choose twenty utilities in its region. For each, it learns who runs operations, who handles procurement and what upgrades are planned. Sales and marketing then coordinate emails, events and visits around those people.\n\nABM suits businesses with large deal sizes and a limited number of possible buyers. It needs close teamwork between sales and marketing and good account data in the CRM.",
        breaks: [
          { title: "The target list is too long.", detail: "Trying to personalize for hundreds of accounts turns ABM back into regular mass marketing." },
          { title: "Sales and marketing work separately.", detail: "Marketing warms up an account, but sales does not follow up, or the other way around." },
          { title: "Contact data in the CRM is thin or outdated.", detail: "Without knowing the real decision makers, tailored messages go to the wrong people." }
        ],
        faq: [
          { q: "Is ABM only for large companies?", a: "No. It suits any business-to-business seller with a short list of high-value prospects, including small firms selling to public buyers or large distributors." },
          { q: "How is ABM measured?", a: "Usually by engagement and progress within target accounts, such as meetings booked, deals opened and revenue won, rather than raw lead counts." }
        ]
      },
      fr: {
        term: "Marketing axé sur les comptes (ABM)",
        definition: "Le marketing axé sur les comptes (ABM) est une approche interentreprises où les ventes et le marketing choisissent une courte liste d'entreprises cibles et adaptent leurs démarches aux personnes de chacune.",
        explanation: "La plupart du marketing lance un grand filet et attend les pistes. L'ABM fait l'inverse. On part des comptes que l'on veut le plus, on cherche qui prend et influence la décision, et on bâtit des messages juste pour eux.\n\nUne firme de logiciels qui sert les services municipaux d'eau peut choisir vingt municipalités dans sa région. Pour chacune, elle apprend qui dirige les opérations, qui gère l'approvisionnement et quelles mises à niveau sont prévues. Ventes et marketing coordonnent ensuite courriels, événements et visites autour de ces personnes.\n\nL'ABM convient aux entreprises qui ont de gros contrats et un nombre limité d'acheteurs possibles. Il exige un travail d'équipe serré entre ventes et marketing et de bonnes données de comptes dans le CRM.",
        breaks: [
          { title: "La liste de cibles est trop longue.", detail: "Personnaliser pour des centaines de comptes ramène l'ABM au marketing de masse habituel." },
          { title: "Les ventes et le marketing travaillent chacun de leur côté.", detail: "Le marketing réchauffe un compte, mais les ventes ne font pas le suivi, ou l'inverse." },
          { title: "Les données de contact du CRM sont minces ou périmées.", detail: "Sans connaître les vrais décideurs, les messages personnalisés vont aux mauvaises personnes." }
        ],
        faq: [
          { q: "L'ABM est-il réservé aux grandes entreprises?", a: "Non. Il convient à tout vendeur interentreprises qui a une courte liste de prospects de grande valeur, y compris les petites firmes qui vendent à des acheteurs publics ou à de grands distributeurs." },
          { q: "Comment mesure-t-on l'ABM?", a: "Habituellement par l'engagement et la progression dans les comptes cibles, comme les rencontres obtenues, les affaires ouvertes et les revenus gagnés, plutôt que par le nombre brut de pistes." }
        ]
      },
      es: {
        term: "Marketing basado en cuentas (ABM)",
        definition: "El marketing basado en cuentas (ABM) es un enfoque entre empresas en el que ventas y marketing eligen una lista corta de empresas objetivo y adaptan el contacto a las personas dentro de cada una.",
        explanation: "La mayoría del marketing lanza una red amplia y espera leads. El ABM lo invierte. Se empieza por las cuentas que más se quieren, se investiga quién decide e influye, y se crean mensajes solo para ellos.\n\nUna empresa de software que atiende a servicios municipales de agua puede elegir veinte municipios de su región. En cada uno averigua quién dirige operaciones, quién maneja compras y qué mejoras están planeadas. Luego ventas y marketing coordinan correos, eventos y visitas alrededor de esas personas.\n\nEl ABM conviene a negocios con contratos grandes y pocos compradores posibles. Requiere trabajo en equipo cercano entre ventas y marketing y buenos datos de cuentas en el CRM.",
        breaks: [
          { title: "La lista de objetivos es demasiado larga.", detail: "Personalizar para cientos de cuentas vuelve el ABM marketing masivo común." },
          { title: "Ventas y marketing trabajan por separado.", detail: "Marketing calienta una cuenta pero ventas no da seguimiento, o al revés." },
          { title: "Los datos de contacto en el CRM son escasos o viejos.", detail: "Sin conocer a los verdaderos tomadores de decisiones, los mensajes llegan a las personas equivocadas." }
        ],
        faq: [
          { q: "¿El ABM es solo para empresas grandes?", a: "No. Sirve a cualquier vendedor entre empresas con una lista corta de prospectos de alto valor, incluso firmas pequeñas que venden a compradores públicos o grandes distribuidores." },
          { q: "¿Cómo se mide el ABM?", a: "Por lo general por la participación y el avance dentro de las cuentas objetivo, como reuniones agendadas, negocios abiertos e ingresos ganados, más que por el número de leads." }
        ]
      }
    }
  },
  {
    slug: "marketing-automation",
    category: "crm",
    hub: "/erp-crm",
    related: ["lead-scoring", "crm", "workflow-automation", "trigger-and-action", "personally-identifiable-information"],
    copy: {
      en: {
        term: "Marketing automation",
        definition: "Marketing automation is software that sends emails, updates contact records and routes leads automatically, based on rules and on what each contact does.",
        explanation: "Marketing automation handles the repeat work of staying in touch. You set the rules once, and the system sends the right message at the right time to each person.\n\nA flooring distributor might set it up so that when a contractor downloads a product guide, they get a short series of helpful emails over two weeks. If they then visit the quote page, the system raises their lead score and alerts a sales rep.\n\nAutomation works best on top of clean contact data and a clear plan. It should also respect consent rules: in Canada that means following CASL for commercial emails, and similar laws apply in other countries.",
        breaks: [
          { title: "Contact lists are messy.", detail: "Duplicates and wrong fields mean people get the same email twice or with the wrong name." },
          { title: "Consent is not tracked.", detail: "Emailing people who never agreed to it can break anti-spam laws like CASL and harm your sender reputation." },
          { title: "Workflows are built and forgotten.", detail: "Old sequences keep sending outdated offers or prices long after they change." }
        ],
        diagram: ["Contact takes action", "Rule checks it", "Send message", "Update score"],
        faq: [
          { q: "What is the difference between marketing automation and a CRM?", a: "A CRM stores customer records and sales activity. Marketing automation uses those records to send and track campaigns automatically. Many tools now include both." },
          { q: "Does marketing automation need consent?", a: "Commercial emails generally need consent under laws such as Canada's CASL, the US CAN-SPAM Act and UK and EU rules. The details differ, so check the rules for each country you email." }
        ]
      },
      fr: {
        term: "Automatisation du marketing",
        definition: "L'automatisation du marketing est un logiciel qui envoie des courriels, met à jour les fiches de contacts et achemine les pistes automatiquement, selon des règles et selon ce que fait chaque contact.",
        explanation: "L'automatisation du marketing prend en charge le travail répétitif de rester en contact. On établit les règles une fois, et le système envoie le bon message au bon moment à chaque personne.\n\nUn distributeur de revêtements de sol peut faire en sorte que, quand un entrepreneur télécharge un guide de produits, il reçoive une courte série de courriels utiles sur deux semaines. S'il visite ensuite la page de soumission, le système augmente son pointage et avertit un représentant.\n\nL'automatisation fonctionne mieux avec des données de contact propres et un plan clair. Elle doit aussi respecter les règles de consentement : au Canada, cela veut dire suivre la LCAP pour les courriels commerciaux, et des lois semblables existent ailleurs.",
        breaks: [
          { title: "Les listes de contacts sont désordonnées.", detail: "Les doublons et les mauvais champs font que des gens reçoivent le même courriel deux fois ou avec le mauvais nom." },
          { title: "Le consentement n'est pas suivi.", detail: "Écrire à des gens qui n'ont jamais accepté peut enfreindre des lois antipourriel comme la LCAP et nuire à votre réputation d'expéditeur." },
          { title: "Les flux sont créés puis oubliés.", detail: "De vieilles séquences continuent d'envoyer des offres ou des prix dépassés longtemps après leur changement." }
        ],
        diagram: ["Le contact agit", "Une règle vérifie", "Envoyer le message", "Mettre à jour le pointage"],
        faq: [
          { q: "Quelle est la différence entre l'automatisation du marketing et un CRM?", a: "Un CRM conserve les fiches clients et l'activité de vente. L'automatisation du marketing utilise ces fiches pour envoyer et suivre des campagnes automatiquement. Beaucoup d'outils font maintenant les deux." },
          { q: "L'automatisation du marketing exige-t-elle un consentement?", a: "Les courriels commerciaux exigent généralement un consentement selon des lois comme la LCAP au Canada, la loi CAN-SPAM aux États-Unis et les règles du Royaume-Uni et de l'UE. Les détails varient, alors vérifiez les règles de chaque pays visé." }
        ]
      },
      es: {
        term: "Automatización de marketing",
        definition: "La automatización de marketing es un software que envía correos, actualiza registros de contactos y asigna leads de forma automática, según reglas y según lo que hace cada contacto.",
        explanation: "La automatización de marketing se encarga del trabajo repetitivo de mantenerse en contacto. Se fijan las reglas una vez y el sistema envía el mensaje correcto en el momento correcto a cada persona.\n\nUn distribuidor de pisos puede configurarlo para que, cuando un contratista descarga una guía de productos, reciba una serie corta de correos útiles durante dos semanas. Si luego visita la página de cotización, el sistema sube su puntaje y avisa a un vendedor.\n\nLa automatización funciona mejor con datos de contacto limpios y un plan claro. También debe respetar las reglas de consentimiento: en Canadá eso significa cumplir la ley CASL para correos comerciales, y hay leyes similares en otros países.",
        breaks: [
          { title: "Las listas de contactos están desordenadas.", detail: "Duplicados y campos erróneos hacen que la gente reciba el mismo correo dos veces o con el nombre equivocado." },
          { title: "No se registra el consentimiento.", detail: "Escribir a quien nunca aceptó puede violar leyes antispam como CASL y dañar su reputación como remitente." },
          { title: "Los flujos se crean y se olvidan.", detail: "Secuencias viejas siguen enviando ofertas o precios vencidos mucho después de que cambiaron." }
        ],
        diagram: ["Contacto actúa", "Regla lo revisa", "Enviar mensaje", "Actualizar puntaje"],
        faq: [
          { q: "¿Cuál es la diferencia entre automatización de marketing y un CRM?", a: "Un CRM guarda registros de clientes y actividad de ventas. La automatización de marketing usa esos registros para enviar y medir campañas de forma automática. Muchas herramientas ya incluyen ambos." },
          { q: "¿La automatización de marketing requiere consentimiento?", a: "Los correos comerciales en general requieren consentimiento según leyes como CASL en Canadá, CAN-SPAM en Estados Unidos y las normas del Reino Unido y la UE. Los detalles cambian, así que revise las reglas de cada país al que escribe." }
        ]
      }
    }
  },
  {
    slug: "duplicate-records",
    category: "crm",
    hub: "/erp-crm",
    related: ["data-quality", "master-data", "crm", "primary-key", "single-source-of-truth"],
    copy: {
      en: {
        term: "Duplicate records",
        definition: "Duplicate records are two or more entries in a system that describe the same real customer, supplier, contact or item.",
        explanation: "Duplicates creep in when people create a new record instead of finding the existing one. Small spelling differences, like ABC Ltd and A.B.C. Limited, are enough to fool a simple search.\n\nA medical supply distributor may have the same clinic entered three times: once by sales, once by accounting and once through a web order. Each record has part of the history. Sales does not see the overdue invoice, and the clinic gets three copies of every mailing.\n\nThe fix has two parts: merge the duplicates you already have, carefully keeping the history, and add checks that warn people before a new duplicate is created.",
        breaks: [
          { title: "Integrations create new records instead of matching.", detail: "Each sync from a web store or other system adds a fresh customer when it cannot find an exact match." },
          { title: "Merging loses history.", detail: "A careless merge can drop orders, notes or contacts tied to one of the records." },
          { title: "Nobody owns data cleanup.", detail: "Without a named person and a regular review, duplicates grow back after every cleanup." }
        ],
        diagram: ["Find likely matches", "Review each pair", "Merge and keep history", "Block new duplicates"],
        faq: [
          { q: "How do you find duplicate records?", a: "Most CRMs and ERPs have duplicate checks that compare names, emails, phone numbers and addresses. Fuzzy matching catches near matches, but a person should review before merging." },
          { q: "How can you prevent duplicates?", a: "Turn on matching rules at entry, make integrations look up existing records first, and use a stable unique ID for each customer across systems." }
        ]
      },
      fr: {
        term: "Enregistrements en double",
        definition: "Les enregistrements en double sont deux entrées ou plus dans un système qui décrivent le même client, fournisseur, contact ou article réel.",
        explanation: "Les doublons s'installent quand on crée une nouvelle fiche au lieu de trouver celle qui existe. De petites différences d'orthographe, comme ABC ltée et A.B.C. Limitée, suffisent à tromper une recherche simple.\n\nUn distributeur de fournitures médicales peut avoir la même clinique entrée trois fois : par les ventes, par la comptabilité et par une commande Web. Chaque fiche contient une partie de l'historique. Les ventes ne voient pas la facture en souffrance, et la clinique reçoit trois copies de chaque envoi.\n\nLa solution a deux volets : fusionner les doublons existants en gardant soigneusement l'historique, et ajouter des contrôles qui avertissent avant qu'un nouveau doublon soit créé.",
        breaks: [
          { title: "Les intégrations créent des fiches au lieu de trouver une correspondance.", detail: "Chaque synchronisation d'une boutique en ligne ou d'un autre système ajoute un nouveau client quand elle ne trouve pas de correspondance exacte." },
          { title: "La fusion fait perdre l'historique.", detail: "Une fusion négligente peut supprimer des commandes, des notes ou des contacts liés à l'une des fiches." },
          { title: "Personne n'est responsable du nettoyage.", detail: "Sans responsable nommé et sans revue régulière, les doublons reviennent après chaque nettoyage." }
        ],
        diagram: ["Trouver les correspondances", "Revoir chaque paire", "Fusionner et garder l'historique", "Bloquer les nouveaux doublons"],
        faq: [
          { q: "Comment trouver les enregistrements en double?", a: "La plupart des CRM et ERP ont des contrôles qui comparent les noms, courriels, numéros de téléphone et adresses. La correspondance approximative attrape les quasi-doublons, mais une personne devrait vérifier avant de fusionner." },
          { q: "Comment prévenir les doublons?", a: "Activez des règles de correspondance à la saisie, faites en sorte que les intégrations cherchent d'abord les fiches existantes et utilisez un identifiant unique stable pour chaque client dans tous les systèmes." }
        ]
      },
      es: {
        term: "Registros duplicados",
        definition: "Los registros duplicados son dos o más entradas en un sistema que describen al mismo cliente, proveedor, contacto o artículo real.",
        explanation: "Los duplicados aparecen cuando alguien crea un registro nuevo en lugar de buscar el que ya existe. Pequeñas diferencias de escritura, como ABC S.A. y A.B.C. Sociedad Anónima, bastan para engañar a una búsqueda simple.\n\nUn distribuidor de insumos médicos puede tener la misma clínica registrada tres veces: por ventas, por contabilidad y por un pedido web. Cada registro tiene parte del historial. Ventas no ve la factura vencida y la clínica recibe tres copias de cada envío.\n\nLa solución tiene dos partes: fusionar los duplicados existentes cuidando el historial, y agregar controles que avisen antes de crear uno nuevo.",
        breaks: [
          { title: "Las integraciones crean registros nuevos en vez de buscar coincidencias.", detail: "Cada sincronización desde una tienda en línea u otro sistema agrega un cliente nuevo cuando no encuentra una coincidencia exacta." },
          { title: "La fusión pierde historial.", detail: "Una fusión descuidada puede borrar pedidos, notas o contactos ligados a uno de los registros." },
          { title: "Nadie es responsable de la limpieza.", detail: "Sin un responsable y una revisión periódica, los duplicados vuelven después de cada limpieza." }
        ],
        diagram: ["Buscar coincidencias", "Revisar cada par", "Fusionar con historial", "Bloquear nuevos duplicados"],
        faq: [
          { q: "¿Cómo se encuentran los registros duplicados?", a: "La mayoría de los CRM y ERP tienen revisiones que comparan nombres, correos, teléfonos y direcciones. La coincidencia aproximada detecta casi duplicados, pero una persona debe revisar antes de fusionar." },
          { q: "¿Cómo se evitan los duplicados?", a: "Active reglas de coincidencia al capturar, haga que las integraciones busquen primero registros existentes y use un identificador único y estable para cada cliente en todos los sistemas." }
        ]
      }
    }
  },
  {
    slug: "crm-adoption",
    category: "crm",
    hub: "/erp-crm",
    related: ["crm", "go-live", "duplicate-records", "user-experience", "workflow-automation"],
    copy: {
      en: {
        term: "CRM adoption",
        definition: "CRM adoption is the degree to which the people who are meant to use a CRM actually use it every day to log their work and run their sales.",
        explanation: "Buying a CRM is easy. Getting people to use it is the hard part. Low adoption means half the calls and deals never make it into the system, so reports and forecasts are built on partial data.\n\nA building products distributor rolls out a CRM, but its senior reps keep using their notebooks. Six months later, the dashboard shows a weak pipeline that does not match what everyone hears in meetings. The data is not wrong, it is missing.\n\nAdoption improves when the CRM saves reps time: mobile access, email logging that happens on its own, quotes created in a few clicks, and managers who run meetings from the CRM instead of from spreadsheets.",
        breaks: [
          { title: "Entering data takes longer than the old way.", detail: "If logging a call takes many clicks, busy reps skip it." },
          { title: "Managers do not use it either.", detail: "When leaders ask for updates by email or spreadsheet, staff learn the CRM is optional." },
          { title: "Training covers features, not daily tasks.", detail: "Reps learn where buttons are but not how the CRM fits their real week." }
        ],
        faq: [
          { q: "How do you measure CRM adoption?", a: "Look at logins, activities logged per rep, how current opportunity data is, and whether meetings and forecasts are run from the CRM." },
          { q: "Why do sales teams resist CRMs?", a: "Usually because it feels like extra admin with no benefit to them. Cutting data entry and giving reps useful tools back tends to help more than mandates." }
        ]
      },
      fr: {
        term: "Adoption du CRM",
        definition: "L'adoption du CRM est la mesure dans laquelle les personnes censées utiliser un CRM s'en servent réellement chaque jour pour inscrire leur travail et gérer leurs ventes.",
        explanation: "Acheter un CRM est facile. Amener les gens à s'en servir est la partie difficile. Une faible adoption veut dire que la moitié des appels et des affaires n'entrent jamais dans le système, et que les rapports et prévisions reposent sur des données partielles.\n\nUn distributeur de produits de construction déploie un CRM, mais ses représentants d'expérience gardent leurs carnets. Six mois plus tard, le tableau de bord montre un pipeline faible qui ne correspond pas à ce qu'on entend en réunion. Les données ne sont pas fausses : elles manquent.\n\nL'adoption s'améliore quand le CRM fait gagner du temps aux représentants : accès mobile, courriels inscrits automatiquement, soumissions créées en quelques clics, et des gestionnaires qui animent les réunions à partir du CRM plutôt que de chiffriers.",
        breaks: [
          { title: "La saisie prend plus de temps qu'avant.", detail: "Si inscrire un appel demande beaucoup de clics, les représentants occupés sautent l'étape." },
          { title: "Les gestionnaires ne l'utilisent pas non plus.", detail: "Quand les dirigeants demandent des mises à jour par courriel ou chiffrier, le personnel comprend que le CRM est facultatif." },
          { title: "La formation couvre les fonctions, pas les tâches quotidiennes.", detail: "Les représentants apprennent où sont les boutons, mais pas comment le CRM s'insère dans leur vraie semaine." }
        ],
        faq: [
          { q: "Comment mesurer l'adoption du CRM?", a: "Regardez les connexions, les activités inscrites par représentant, la fraîcheur des données sur les occasions et si les réunions et prévisions se font à partir du CRM." },
          { q: "Pourquoi les équipes de vente résistent-elles au CRM?", a: "Souvent parce qu'il semble être de l'administration de plus sans avantage pour elles. Réduire la saisie et redonner des outils utiles aide généralement plus que les obligations." }
        ]
      },
      es: {
        term: "Adopción del CRM",
        definition: "La adopción del CRM es el grado en que las personas que deben usar un CRM realmente lo usan cada día para registrar su trabajo y gestionar sus ventas.",
        explanation: "Comprar un CRM es fácil. Lograr que la gente lo use es lo difícil. Una adopción baja significa que la mitad de las llamadas y negocios nunca entran al sistema, y los reportes y pronósticos se basan en datos incompletos.\n\nUn distribuidor de productos de construcción lanza un CRM, pero sus vendedores con más experiencia siguen usando sus libretas. Seis meses después, el tablero muestra un embudo débil que no coincide con lo que se escucha en las reuniones. Los datos no están mal: faltan.\n\nLa adopción mejora cuando el CRM le ahorra tiempo al vendedor: acceso móvil, correos que se registran solos, cotizaciones en pocos clics y gerentes que dirigen las reuniones desde el CRM en lugar de hojas de cálculo.",
        breaks: [
          { title: "Registrar datos toma más tiempo que antes.", detail: "Si anotar una llamada requiere muchos clics, los vendedores ocupados lo omiten." },
          { title: "Los gerentes tampoco lo usan.", detail: "Cuando los líderes piden avances por correo u hoja de cálculo, el personal entiende que el CRM es opcional." },
          { title: "La capacitación enseña funciones, no tareas diarias.", detail: "Los vendedores aprenden dónde están los botones, pero no cómo encaja el CRM en su semana real." }
        ],
        faq: [
          { q: "¿Cómo se mide la adopción del CRM?", a: "Revise los inicios de sesión, las actividades registradas por vendedor, qué tan al día están las oportunidades y si las reuniones y pronósticos se hacen desde el CRM." },
          { q: "¿Por qué los equipos de ventas se resisten al CRM?", a: "Por lo general porque lo sienten como trabajo administrativo extra sin beneficio para ellos. Reducir la captura y darles herramientas útiles suele ayudar más que las órdenes." }
        ]
      }
    }
  },
  {
    slug: "data-warehouse",
    category: "data",
    hub: "/software-development",
    related: ["business-intelligence", "etl", "data-lake", "data-pipeline", "dashboard"],
    copy: {
      en: {
        term: "Data warehouse",
        definition: "A data warehouse is a central database that collects cleaned, structured data from several business systems so it can be reported on and analyzed together.",
        explanation: "Day-to-day systems like an ERP, CRM or online store are built to process transactions, not to answer big questions across all of them. A data warehouse copies data out of each one on a schedule, cleans it, and arranges it for reporting.\n\nA multi-location retailer wants to see sales, stock and marketing spend side by side. Each lives in a different system with different product codes. The warehouse brings them together under one product list, so the owner can see which items sell best in each store and which ads drove those sales.\n\nBecause reports run against the warehouse, they do not slow down the systems staff use all day.",
        breaks: [
          { title: "Business definitions are not agreed.", detail: "If sales and finance define revenue differently, the warehouse just stores both arguments." },
          { title: "Source data changes break loads.", detail: "A renamed field in the ERP can quietly stop data from loading, and reports go stale." },
          { title: "It is built before anyone knows the questions.", detail: "Without clear reporting needs, the warehouse fills with tables nobody uses." }
        ],
        faq: [
          { q: "What is the difference between a data warehouse and a database?", a: "A regular database usually supports one application's daily transactions. A data warehouse combines data from many sources and is shaped for analysis and reporting." },
          { q: "Does a small business need a data warehouse?", a: "Not always. If most reporting comes from one system, its built-in reports may be enough. A warehouse helps once you need to combine data from several systems regularly." }
        ]
      },
      fr: {
        term: "Entrepôt de données",
        definition: "Un entrepôt de données est une base de données centrale qui rassemble des données nettoyées et structurées de plusieurs systèmes de l'entreprise pour qu'on puisse les analyser et en faire des rapports ensemble.",
        explanation: "Les systèmes de tous les jours comme un ERP, un CRM ou une boutique en ligne sont faits pour traiter des transactions, pas pour répondre à de grandes questions qui les touchent tous. Un entrepôt de données copie les données de chacun selon un horaire, les nettoie et les organise pour les rapports.\n\nUn détaillant à plusieurs succursales veut voir les ventes, les stocks et les dépenses marketing côte à côte. Chacun vit dans un système différent avec des codes de produits différents. L'entrepôt les réunit sous une seule liste de produits, et la propriétaire voit quels articles se vendent le mieux dans chaque magasin et quelles publicités ont mené à ces ventes.\n\nComme les rapports interrogent l'entrepôt, ils ne ralentissent pas les systèmes que le personnel utilise toute la journée.",
        breaks: [
          { title: "Les définitions d'affaires ne sont pas convenues.", detail: "Si les ventes et la finance définissent le revenu différemment, l'entrepôt conserve simplement les deux points de vue." },
          { title: "Les changements dans les sources brisent les chargements.", detail: "Un champ renommé dans l'ERP peut arrêter discrètement le chargement, et les rapports vieillissent." },
          { title: "Il est construit avant qu'on connaisse les questions.", detail: "Sans besoins de rapports clairs, l'entrepôt se remplit de tables que personne n'utilise." }
        ],
        faq: [
          { q: "Quelle est la différence entre un entrepôt de données et une base de données?", a: "Une base de données ordinaire soutient souvent les transactions quotidiennes d'une seule application. Un entrepôt de données combine les données de plusieurs sources et est conçu pour l'analyse et les rapports." },
          { q: "Une petite entreprise a-t-elle besoin d'un entrepôt de données?", a: "Pas toujours. Si la plupart des rapports viennent d'un seul système, ses rapports intégrés peuvent suffire. Un entrepôt aide quand il faut combiner régulièrement les données de plusieurs systèmes." }
        ]
      },
      es: {
        term: "Almacén de datos (data warehouse)",
        definition: "Un almacén de datos es una base de datos central que reúne datos limpios y estructurados de varios sistemas del negocio para poder analizarlos y reportarlos juntos.",
        explanation: "Los sistemas del día a día como un ERP, un CRM o una tienda en línea están hechos para procesar transacciones, no para responder preguntas grandes que los cruzan a todos. Un almacén de datos copia la información de cada uno según un horario, la limpia y la ordena para reportes.\n\nUn minorista con varias tiendas quiere ver ventas, inventario y gasto en marketing lado a lado. Cada uno vive en un sistema distinto con códigos de producto distintos. El almacén los une bajo una sola lista de productos, y la dueña puede ver qué artículos se venden mejor en cada tienda y qué anuncios generaron esas ventas.\n\nComo los reportes consultan el almacén, no hacen más lentos los sistemas que el personal usa todo el día.",
        breaks: [
          { title: "No hay definiciones de negocio acordadas.", detail: "Si ventas y finanzas definen el ingreso de forma distinta, el almacén solo guarda las dos versiones." },
          { title: "Los cambios en los sistemas fuente rompen las cargas.", detail: "Un campo renombrado en el ERP puede detener la carga sin aviso, y los reportes quedan desactualizados." },
          { title: "Se construye antes de saber qué preguntas responder.", detail: "Sin necesidades de reporte claras, el almacén se llena de tablas que nadie usa." }
        ],
        faq: [
          { q: "¿Cuál es la diferencia entre un almacén de datos y una base de datos?", a: "Una base de datos común suele soportar las transacciones diarias de una aplicación. Un almacén de datos combina información de muchas fuentes y está diseñado para análisis y reportes." },
          { q: "¿Una pequeña empresa necesita un almacén de datos?", a: "No siempre. Si casi todos los reportes salen de un sistema, sus reportes incluidos pueden bastar. Un almacén ayuda cuando necesita combinar datos de varios sistemas con frecuencia." }
        ]
      }
    }
  },
  {
    slug: "data-lake",
    category: "data",
    hub: "/software-development",
    related: ["data-warehouse", "data-pipeline", "data-governance", "business-intelligence"],
    copy: {
      en: {
        term: "Data lake",
        definition: "A data lake is a storage area that holds large amounts of raw data in its original form, structured or not, until someone needs to use it.",
        explanation: "A data warehouse cleans and shapes data before storing it. A data lake does the opposite: it stores everything first, files, logs, images, exports, and leaves the shaping for later.\n\nA manufacturer might pour machine sensor readings, maintenance notes and production records into a lake. Months later, an analyst pulls them together to look for patterns before breakdowns. Nobody had to decide in advance exactly how that data would be used.\n\nThe risk is that a lake becomes a swamp: lots of data, no labels, no owner and no way to tell what is current. Good naming, basic catalogues and clear ownership keep it usable.",
        breaks: [
          { title: "Nobody catalogues what goes in.", detail: "Without labels and owners, people cannot find or trust the data later." },
          { title: "Sensitive data is stored without controls.", detail: "Raw exports can include personal or financial details that should be restricted." },
          { title: "It is used where a warehouse would be simpler.", detail: "For standard sales and finance reporting, a structured warehouse is often easier to use." }
        ],
        faq: [
          { q: "What is the difference between a data lake and a data warehouse?", a: "A lake stores raw data of many types and shapes it when it is read. A warehouse stores cleaned, structured data that is ready for reporting." },
          { q: "What is a lakehouse?", a: "A lakehouse is a design that adds warehouse-style structure and querying on top of lake storage, aiming to get some benefits of both." }
        ]
      },
      fr: {
        term: "Lac de données",
        definition: "Un lac de données est un espace de stockage qui conserve de grandes quantités de données brutes dans leur forme d'origine, structurées ou non, jusqu'à ce qu'on en ait besoin.",
        explanation: "Un entrepôt de données nettoie et structure les données avant de les stocker. Un lac de données fait l'inverse : il stocke tout d'abord, fichiers, journaux, images, exportations, et laisse la mise en forme pour plus tard.\n\nUn fabricant peut verser dans un lac les lectures des capteurs de ses machines, les notes d'entretien et les registres de production. Des mois plus tard, un analyste les combine pour chercher des signes avant les pannes. Personne n'a eu à décider d'avance comment ces données seraient utilisées.\n\nLe risque : que le lac devienne un marécage, avec beaucoup de données, aucune étiquette, aucun responsable et aucun moyen de savoir ce qui est à jour. Une bonne nomenclature, un catalogue de base et des responsables clairs le gardent utilisable.",
        breaks: [
          { title: "Personne ne catalogue ce qui y entre.", detail: "Sans étiquettes ni responsables, les gens ne peuvent ni trouver ni croire les données plus tard." },
          { title: "Des données sensibles sont stockées sans contrôles.", detail: "Les exportations brutes peuvent contenir des renseignements personnels ou financiers qui devraient être protégés." },
          { title: "On l'utilise là où un entrepôt serait plus simple.", detail: "Pour les rapports standard de ventes et de finance, un entrepôt structuré est souvent plus facile à utiliser." }
        ],
        faq: [
          { q: "Quelle est la différence entre un lac et un entrepôt de données?", a: "Un lac stocke des données brutes de plusieurs types et les met en forme au moment de la lecture. Un entrepôt stocke des données nettoyées et structurées, prêtes pour les rapports." },
          { q: "Qu'est-ce qu'un lakehouse?", a: "Un lakehouse est une conception qui ajoute une structure et des requêtes de type entrepôt au-dessus du stockage d'un lac, pour obtenir certains avantages des deux." }
        ]
      },
      es: {
        term: "Lago de datos (data lake)",
        definition: "Un lago de datos es un espacio de almacenamiento que guarda grandes cantidades de datos sin procesar en su forma original, estructurados o no, hasta que alguien los necesite.",
        explanation: "Un almacén de datos limpia y ordena la información antes de guardarla. Un lago de datos hace lo contrario: guarda todo primero, archivos, registros, imágenes, exportaciones, y deja el ordenamiento para después.\n\nUn fabricante puede volcar en un lago las lecturas de sensores de sus máquinas, notas de mantenimiento y registros de producción. Meses después, un analista las combina para buscar señales antes de las fallas. Nadie tuvo que decidir de antemano cómo se usarían esos datos.\n\nEl riesgo es que el lago se vuelva un pantano: muchos datos, sin etiquetas, sin dueño y sin forma de saber qué está vigente. Buenos nombres, un catálogo básico y responsables claros lo mantienen útil.",
        breaks: [
          { title: "Nadie cataloga lo que entra.", detail: "Sin etiquetas ni responsables, la gente no puede encontrar ni confiar en los datos después." },
          { title: "Se guardan datos sensibles sin controles.", detail: "Las exportaciones sin procesar pueden incluir datos personales o financieros que deberían estar restringidos." },
          { title: "Se usa donde un almacén sería más simple.", detail: "Para reportes estándar de ventas y finanzas, un almacén estructurado suele ser más fácil de usar." }
        ],
        faq: [
          { q: "¿Cuál es la diferencia entre un lago y un almacén de datos?", a: "Un lago guarda datos sin procesar de muchos tipos y les da forma al leerlos. Un almacén guarda datos limpios y estructurados, listos para reportes." },
          { q: "¿Qué es un lakehouse?", a: "Es un diseño que agrega estructura y consultas tipo almacén sobre el almacenamiento de un lago, para obtener parte de las ventajas de ambos." }
        ]
      }
    }
  },
  {
    slug: "dashboard",
    category: "data",
    hub: "/software-development",
    related: ["kpi", "business-intelligence", "data-warehouse", "data-quality"],
    copy: {
      en: {
        term: "Dashboard",
        definition: "A dashboard is a single screen that shows a handful of key numbers and charts so people can see how something is performing at a glance.",
        explanation: "A good dashboard answers a few questions quickly: are we on track, what changed, and where should I look? It pulls live or recent data from business systems and shows it as numbers, trends and simple charts.\n\nThe operations manager at a distribution centre might open a dashboard each morning showing orders shipped yesterday, orders late, open backorders and pick accuracy. If late orders jump, she clicks in to see which customers and items are affected.\n\nDashboards work best when they are built for one audience and one purpose. A screen crowded with every metric helps nobody decide anything.",
        breaks: [
          { title: "Too many charts on one screen.", detail: "When everything is shown, nothing stands out, and people stop looking." },
          { title: "The numbers do not match the source system.", detail: "One mismatch with the ERP and users go back to running their own reports." },
          { title: "Nobody acts on what it shows.", detail: "If no one owns each metric, a red number just stays red." }
        ],
        faq: [
          { q: "What is the difference between a dashboard and a report?", a: "A dashboard is a quick visual summary, often updated often. A report is usually more detailed, covers a set period and may be printed or exported." },
          { q: "How many metrics should a dashboard show?", a: "As few as needed for its purpose. Many effective dashboards focus on a small set of key numbers with the option to drill into detail." }
        ]
      },
      fr: {
        term: "Tableau de bord",
        definition: "Un tableau de bord est un écran unique qui affiche quelques chiffres et graphiques clés pour voir d'un coup d'œil comment quelque chose performe.",
        explanation: "Un bon tableau de bord répond vite à quelques questions : sommes-nous sur la bonne voie, qu'est-ce qui a changé et où dois-je regarder? Il tire des données récentes ou en direct des systèmes de l'entreprise et les montre sous forme de chiffres, de tendances et de graphiques simples.\n\nLa directrice des opérations d'un centre de distribution peut ouvrir chaque matin un tableau de bord qui montre les commandes expédiées hier, les commandes en retard, les commandes en souffrance et la précision de préparation. Si les retards bondissent, elle clique pour voir quels clients et articles sont touchés.\n\nLes tableaux de bord fonctionnent mieux quand ils sont conçus pour un public et un but. Un écran chargé de toutes les mesures n'aide personne à décider.",
        breaks: [
          { title: "Trop de graphiques sur un écran.", detail: "Quand tout est affiché, rien ne ressort, et les gens cessent de regarder." },
          { title: "Les chiffres ne concordent pas avec le système source.", detail: "Un seul écart avec l'ERP, et les utilisateurs retournent à leurs propres rapports." },
          { title: "Personne n'agit sur ce qu'il montre.", detail: "Si personne n'est responsable de chaque mesure, un chiffre rouge reste rouge." }
        ],
        faq: [
          { q: "Quelle est la différence entre un tableau de bord et un rapport?", a: "Un tableau de bord est un résumé visuel rapide, souvent mis à jour fréquemment. Un rapport est habituellement plus détaillé, couvre une période fixe et peut être imprimé ou exporté." },
          { q: "Combien de mesures un tableau de bord devrait-il afficher?", a: "Aussi peu que son but l'exige. Beaucoup de tableaux de bord efficaces se concentrent sur quelques chiffres clés avec la possibilité d'explorer le détail." }
        ]
      },
      es: {
        term: "Tablero (dashboard)",
        definition: "Un tablero es una sola pantalla que muestra algunas cifras y gráficas clave para ver de un vistazo cómo va algo.",
        explanation: "Un buen tablero responde rápido algunas preguntas: ¿vamos bien?, ¿qué cambió? y ¿dónde debo mirar? Toma datos recientes o en vivo de los sistemas del negocio y los muestra como cifras, tendencias y gráficas simples.\n\nLa gerente de operaciones de un centro de distribución puede abrir cada mañana un tablero con los pedidos enviados ayer, los pedidos atrasados, los pendientes por falta de inventario y la precisión de surtido. Si los atrasos se disparan, hace clic para ver qué clientes y artículos están afectados.\n\nLos tableros funcionan mejor cuando se diseñan para un público y un propósito. Una pantalla llena de todas las métricas no ayuda a nadie a decidir.",
        breaks: [
          { title: "Demasiadas gráficas en una pantalla.", detail: "Cuando se muestra todo, nada destaca, y la gente deja de mirar." },
          { title: "Las cifras no coinciden con el sistema fuente.", detail: "Basta una diferencia con el ERP para que los usuarios vuelvan a sus propios reportes." },
          { title: "Nadie actúa con lo que muestra.", detail: "Si nadie es responsable de cada métrica, un número en rojo se queda en rojo." }
        ],
        faq: [
          { q: "¿Cuál es la diferencia entre un tablero y un reporte?", a: "Un tablero es un resumen visual rápido que se actualiza seguido. Un reporte suele ser más detallado, cubre un periodo fijo y puede imprimirse o exportarse." },
          { q: "¿Cuántas métricas debe mostrar un tablero?", a: "Las menos posibles para su propósito. Muchos tableros eficaces se enfocan en pocas cifras clave con opción de ver el detalle." }
        ]
      }
    }
  },
  {
    slug: "kpi",
    category: "data",
    hub: "/software-development",
    related: ["dashboard", "business-intelligence", "data-quality", "service-level-agreement"],
    copy: {
      en: {
        term: "KPI",
        definition: "A KPI (key performance indicator) is a number a business tracks over time to see whether it is meeting an important goal.",
        explanation: "Plenty of things can be measured. A KPI is one of the few that really matter for a specific goal. It should be clear, tied to a target, owned by someone, and measured the same way each time.\n\nA wholesale bakery that wants reliable delivery might track on-time, in-full orders as its main operations KPI. Each week the team sees the figure against its target. When it dips, they look at the cause: late production, missing ingredients or delivery routes.\n\nGood KPIs drive action. If a number cannot change what anyone does, it is just a statistic.",
        breaks: [
          { title: "Too many KPIs.", detail: "When everything is key, teams cannot focus on what moves the business." },
          { title: "The definition is loose.", detail: "If on-time means different things in different reports, the KPI cannot be compared or trusted." },
          { title: "KPIs reward the wrong behaviour.", detail: "Measuring only speed can push staff to rush and make more errors." }
        ],
        faq: [
          { q: "What is the difference between a KPI and a metric?", a: "Every KPI is a metric, but most metrics are not KPIs. A KPI is a metric chosen because it shows progress toward a key goal." },
          { q: "How many KPIs should a business track?", a: "A small set per team or goal. Fewer, well-defined KPIs tend to get more attention and action than long lists." }
        ]
      },
      fr: {
        term: "Indicateur clé de performance (ICP)",
        definition: "Un indicateur clé de performance (ICP, ou KPI en anglais) est un chiffre qu'une entreprise suit dans le temps pour voir si elle atteint un objectif important.",
        explanation: "On peut mesurer bien des choses. Un ICP est l'une des rares qui comptent vraiment pour un objectif précis. Il doit être clair, lié à une cible, confié à quelqu'un et mesuré de la même façon chaque fois.\n\nUne boulangerie de gros qui veut des livraisons fiables peut suivre les commandes livrées à temps et complètes comme principal ICP des opérations. Chaque semaine, l'équipe compare le chiffre à la cible. Quand il baisse, elle cherche la cause : production en retard, ingrédients manquants ou trajets de livraison.\n\nDe bons ICP mènent à l'action. Si un chiffre ne peut rien changer à ce que fait quelqu'un, ce n'est qu'une statistique.",
        breaks: [
          { title: "Trop d'ICP.", detail: "Quand tout est clé, les équipes ne peuvent pas se concentrer sur ce qui fait avancer l'entreprise." },
          { title: "La définition est floue.", detail: "Si à temps veut dire des choses différentes selon les rapports, l'ICP ne peut être ni comparé ni cru." },
          { title: "Les ICP récompensent le mauvais comportement.", detail: "Ne mesurer que la vitesse peut pousser le personnel à se presser et à faire plus d'erreurs." }
        ],
        faq: [
          { q: "Quelle est la différence entre un ICP et une mesure?", a: "Chaque ICP est une mesure, mais la plupart des mesures ne sont pas des ICP. Un ICP est une mesure choisie parce qu'elle montre le progrès vers un objectif clé." },
          { q: "Combien d'ICP une entreprise devrait-elle suivre?", a: "Un petit nombre par équipe ou objectif. Quelques ICP bien définis attirent généralement plus d'attention et d'action que de longues listes." }
        ]
      },
      es: {
        term: "KPI (indicador clave de desempeño)",
        definition: "Un KPI (indicador clave de desempeño) es una cifra que una empresa sigue en el tiempo para ver si está cumpliendo una meta importante.",
        explanation: "Se pueden medir muchas cosas. Un KPI es una de las pocas que de verdad importan para una meta específica. Debe ser claro, estar ligado a un objetivo, tener un responsable y medirse igual cada vez.\n\nUna panadería mayorista que quiere entregas confiables puede seguir los pedidos completos y a tiempo como su KPI principal de operaciones. Cada semana el equipo ve la cifra contra su objetivo. Cuando baja, busca la causa: producción tardía, ingredientes faltantes o rutas de entrega.\n\nLos buenos KPI llevan a la acción. Si un número no puede cambiar lo que alguien hace, es solo una estadística.",
        breaks: [
          { title: "Demasiados KPI.", detail: "Cuando todo es clave, los equipos no pueden enfocarse en lo que mueve el negocio." },
          { title: "La definición es vaga.", detail: "Si a tiempo significa cosas distintas en distintos reportes, el KPI no se puede comparar ni creer." },
          { title: "Los KPI premian la conducta equivocada.", detail: "Medir solo la rapidez puede empujar al personal a apurarse y cometer más errores." }
        ],
        faq: [
          { q: "¿Cuál es la diferencia entre un KPI y una métrica?", a: "Todo KPI es una métrica, pero la mayoría de las métricas no son KPI. Un KPI es una métrica elegida porque muestra el avance hacia una meta clave." },
          { q: "¿Cuántos KPI debe seguir una empresa?", a: "Un grupo pequeño por equipo o meta. Pocos KPI bien definidos suelen recibir más atención y acción que listas largas." }
        ]
      }
    }
  },
  {
    slug: "data-quality",
    category: "data",
    hub: "/software-development",
    related: ["duplicate-records", "data-governance", "master-data", "data-migration", "single-source-of-truth"],
    copy: {
      en: {
        term: "Data quality",
        definition: "Data quality is how accurate, complete, consistent and up to date a business's data is for the job it needs to do.",
        explanation: "Poor data quality shows up as small annoyances that add up: invoices sent to old addresses, items with missing weights, the same customer listed twice, reports that do not agree.\n\nAn electrical supplier finds that its shipping costs are always higher than quoted. The cause turns out to be hundreds of items with no weight or the wrong unit in the ERP, so the freight calculator guesses low. Fixing the item data fixes the quotes.\n\nData quality is not a one-time cleanup. It needs rules at the point of entry, someone responsible for each key data set, and simple checks that flag problems before they spread into other systems.",
        breaks: [
          { title: "Bad data is fixed downstream, not at the source.", detail: "Teams patch reports or spreadsheets, but the wrong value stays in the original system." },
          { title: "Required fields get junk values.", detail: "Forcing a field without guidance leads to entries like N/A or 000 that look complete but mean nothing." },
          { title: "No one owns key data.", detail: "When everyone can change customer or item records, no one is accountable for keeping them right." }
        ],
        faq: [
          { q: "What are the dimensions of data quality?", a: "Common ones are accuracy, completeness, consistency, timeliness, validity and uniqueness. Which matter most depends on how the data is used." },
          { q: "How do you improve data quality?", a: "Start with the data that causes the most pain, fix it at the source, add validation at entry, assign an owner and check it on a schedule." }
        ]
      },
      fr: {
        term: "Qualité des données",
        definition: "La qualité des données est le degré d'exactitude, d'exhaustivité, de cohérence et d'actualité des données d'une entreprise pour la tâche à accomplir.",
        explanation: "Une mauvaise qualité des données se manifeste par de petits irritants qui s'additionnent : factures envoyées à d'anciennes adresses, articles sans poids, même client inscrit deux fois, rapports qui ne concordent pas.\n\nUn fournisseur de matériel électrique remarque que ses frais d'expédition dépassent toujours ce qui était prévu. La cause : des centaines d'articles sans poids ou avec la mauvaise unité dans l'ERP, et le calculateur de transport sous-estime. Corriger les données d'articles corrige les soumissions.\n\nLa qualité des données n'est pas un ménage ponctuel. Il faut des règles à la saisie, un responsable pour chaque ensemble de données clé et des contrôles simples qui signalent les problèmes avant qu'ils se répandent dans d'autres systèmes.",
        breaks: [
          { title: "Les mauvaises données sont corrigées en aval, pas à la source.", detail: "Les équipes rapiècent les rapports ou les chiffriers, mais la mauvaise valeur reste dans le système d'origine." },
          { title: "Les champs obligatoires reçoivent n'importe quoi.", detail: "Imposer un champ sans consigne mène à des entrées comme S.O. ou 000 qui semblent complètes mais ne veulent rien dire." },
          { title: "Personne n'est responsable des données clés.", detail: "Quand tout le monde peut modifier les fiches clients ou articles, personne n'a à répondre de leur exactitude." }
        ],
        faq: [
          { q: "Quelles sont les dimensions de la qualité des données?", a: "Les plus courantes sont l'exactitude, l'exhaustivité, la cohérence, l'actualité, la validité et l'unicité. Leur importance dépend de l'usage des données." },
          { q: "Comment améliorer la qualité des données?", a: "Commencez par les données qui causent le plus de problèmes, corrigez-les à la source, ajoutez des validations à la saisie, nommez un responsable et vérifiez selon un calendrier." }
        ]
      },
      es: {
        term: "Calidad de datos",
        definition: "La calidad de datos es qué tan exactos, completos, consistentes y actualizados están los datos de una empresa para la tarea que deben cumplir.",
        explanation: "La mala calidad de datos se nota en pequeñas molestias que se suman: facturas enviadas a direcciones viejas, artículos sin peso, el mismo cliente registrado dos veces, reportes que no coinciden.\n\nUn proveedor de material eléctrico nota que sus costos de envío siempre superan lo cotizado. La causa resulta ser cientos de artículos sin peso o con la unidad equivocada en el ERP, así que la calculadora de flete se queda corta. Corregir los datos de artículos corrige las cotizaciones.\n\nLa calidad de datos no es una limpieza única. Requiere reglas al capturar, un responsable por cada conjunto de datos clave y revisiones simples que detecten problemas antes de que pasen a otros sistemas.",
        breaks: [
          { title: "Los datos malos se corrigen después, no en el origen.", detail: "Los equipos parchan reportes u hojas de cálculo, pero el valor erróneo sigue en el sistema original." },
          { title: "Los campos obligatorios se llenan con basura.", detail: "Exigir un campo sin guía lleva a valores como N/A o 000 que parecen completos pero no significan nada." },
          { title: "Nadie es responsable de los datos clave.", detail: "Cuando todos pueden cambiar registros de clientes o artículos, nadie responde por mantenerlos correctos." }
        ],
        faq: [
          { q: "¿Cuáles son las dimensiones de la calidad de datos?", a: "Las comunes son exactitud, integridad, consistencia, oportunidad, validez y unicidad. Cuáles importan más depende del uso de los datos." },
          { q: "¿Cómo se mejora la calidad de datos?", a: "Empiece por los datos que más problemas causan, corríjalos en el origen, agregue validaciones al capturar, asigne un responsable y revíselos con regularidad." }
        ]
      }
    }
  },
  {
    slug: "data-governance",
    category: "data",
    hub: "/software-development",
    related: ["data-quality", "master-data", "personally-identifiable-information", "role-based-access-control", "audit-trail"],
    copy: {
      en: {
        term: "Data governance",
        definition: "Data governance is the set of roles, rules and routines a business uses to decide who owns its data, who can change or see it, and how it is kept accurate and safe.",
        explanation: "Data governance answers simple but often unanswered questions. Who decides what counts as an active customer? Who can edit prices? Where does personal information live, and who may see it?\n\nA regional distributor with ten staff does not need a committee. It might name the controller as owner of financial data, the sales manager as owner of customer records, and the warehouse lead as owner of item data. Each owner sets the rules for their area and checks quality monthly.\n\nGovernance should scale with the business. Small firms need clear ownership and a few written rules; larger ones add formal policies, data catalogues and regular reviews.",
        breaks: [
          { title: "It is treated as an IT project.", detail: "IT can enforce rules, but the business has to define them, or the rules miss real needs." },
          { title: "Policies are written but not followed.", detail: "A long policy document nobody reads changes nothing about daily behaviour." },
          { title: "Access is too open.", detail: "When everyone can edit or export everything, mistakes and privacy risks multiply." }
        ],
        faq: [
          { q: "What is a data owner?", a: "A data owner is the person accountable for a set of data, such as customer or item records, including its definitions, quality and who can access it." },
          { q: "Does a small business need data governance?", a: "Yes, in a light form. Naming owners, limiting who can change key records and knowing where personal data is stored covers much of what matters." }
        ]
      },
      fr: {
        term: "Gouvernance des données",
        definition: "La gouvernance des données est l'ensemble des rôles, règles et routines qu'une entreprise utilise pour décider à qui appartiennent ses données, qui peut les modifier ou les voir, et comment elles restent exactes et protégées.",
        explanation: "La gouvernance des données répond à des questions simples, mais souvent sans réponse. Qui décide ce qu'est un client actif? Qui peut modifier les prix? Où se trouvent les renseignements personnels, et qui peut les voir?\n\nUn distributeur régional de dix employés n'a pas besoin d'un comité. Il peut nommer le contrôleur responsable des données financières, la directrice des ventes responsable des fiches clients et le chef d'entrepôt responsable des données d'articles. Chacun fixe les règles de son domaine et vérifie la qualité chaque mois.\n\nLa gouvernance doit suivre la taille de l'entreprise. Les petites firmes ont besoin de responsables clairs et de quelques règles écrites; les plus grandes ajoutent des politiques formelles, des catalogues de données et des revues régulières.",
        breaks: [
          { title: "On la traite comme un projet des TI.", detail: "Les TI peuvent appliquer les règles, mais c'est le métier qui doit les définir, sinon elles ratent les vrais besoins." },
          { title: "Les politiques sont écrites mais pas suivies.", detail: "Un long document de politique que personne ne lit ne change rien au comportement quotidien." },
          { title: "L'accès est trop ouvert.", detail: "Quand tout le monde peut tout modifier ou exporter, les erreurs et les risques pour la vie privée se multiplient." }
        ],
        faq: [
          { q: "Qu'est-ce qu'un responsable des données?", a: "C'est la personne qui répond d'un ensemble de données, comme les fiches clients ou articles, y compris leurs définitions, leur qualité et qui peut y accéder." },
          { q: "Une petite entreprise a-t-elle besoin de gouvernance des données?", a: "Oui, sous une forme légère. Nommer des responsables, limiter qui peut modifier les fiches clés et savoir où sont stockés les renseignements personnels couvre l'essentiel." }
        ]
      },
      es: {
        term: "Gobierno de datos",
        definition: "El gobierno de datos es el conjunto de roles, reglas y rutinas que una empresa usa para decidir quién es dueño de sus datos, quién puede cambiarlos o verlos, y cómo se mantienen correctos y seguros.",
        explanation: "El gobierno de datos responde preguntas simples que muchas veces nadie responde. ¿Quién decide qué es un cliente activo? ¿Quién puede editar precios? ¿Dónde está la información personal y quién puede verla?\n\nUn distribuidor regional con diez empleados no necesita un comité. Puede nombrar al contralor dueño de los datos financieros, a la gerente de ventas dueña de los registros de clientes y al jefe de almacén dueño de los datos de artículos. Cada uno fija las reglas de su área y revisa la calidad cada mes.\n\nEl gobierno debe crecer con la empresa. Las firmas pequeñas necesitan responsables claros y pocas reglas escritas; las grandes agregan políticas formales, catálogos de datos y revisiones periódicas.",
        breaks: [
          { title: "Se trata como un proyecto de TI.", detail: "TI puede aplicar las reglas, pero el negocio debe definirlas, o no responderán a las necesidades reales." },
          { title: "Las políticas se escriben pero no se siguen.", detail: "Un documento largo que nadie lee no cambia nada del comportamiento diario." },
          { title: "El acceso es demasiado abierto.", detail: "Cuando todos pueden editar o exportar todo, se multiplican los errores y los riesgos de privacidad." }
        ],
        faq: [
          { q: "¿Qué es un dueño de datos?", a: "Es la persona responsable de un conjunto de datos, como los registros de clientes o artículos, incluyendo sus definiciones, su calidad y quién puede acceder." },
          { q: "¿Una pequeña empresa necesita gobierno de datos?", a: "Sí, en una forma ligera. Nombrar responsables, limitar quién cambia registros clave y saber dónde se guardan los datos personales cubre gran parte de lo importante." }
        ]
      }
    }
  },
  {
    slug: "primary-key",
    category: "data",
    hub: "/software-development",
    related: ["database-normalization", "duplicate-records", "master-data", "data-mapping"],
    copy: {
      en: {
        term: "Primary key",
        definition: "A primary key is a field, or set of fields, that uniquely identifies each row in a database table, so no two records can share it.",
        explanation: "Every customer, order or item in a database needs a reliable way to be told apart from the rest. Names are not good enough, since two customers can share a name and names change. A primary key is usually a number or code that never repeats and never changes.\n\nA parts distributor stores customers in its ERP with a customer ID. When it connects its online store, matching on that ID, rather than on company name or email, keeps orders linked to the right account.\n\nPrimary keys also let tables link to each other. An order row stores the customer ID, which points back to exactly one customer.",
        breaks: [
          { title: "Meaningful values are used as keys.", detail: "Using an email or phone number as the key causes trouble when the customer changes it." },
          { title: "Systems use different keys for the same thing.", detail: "If the ERP and CRM each have their own customer ID with no mapping, integrations match on names and create duplicates." },
          { title: "Keys get reused.", detail: "Reassigning an old item code to a new product mixes the history of two different things." }
        ],
        faq: [
          { q: "What is the difference between a primary key and a foreign key?", a: "A primary key identifies a row in its own table. A foreign key is a field in another table that stores that value to link back to it, like a customer ID on an order." },
          { q: "Can a primary key be made of more than one field?", a: "Yes. That is called a composite key, for example an order number plus a line number to identify each order line." }
        ]
      },
      fr: {
        term: "Clé primaire",
        definition: "Une clé primaire est un champ, ou un ensemble de champs, qui identifie de façon unique chaque ligne d'une table de base de données, de sorte que deux enregistrements ne peuvent pas la partager.",
        explanation: "Chaque client, commande ou article d'une base de données a besoin d'un moyen fiable de se distinguer des autres. Le nom ne suffit pas, car deux clients peuvent avoir le même et les noms changent. Une clé primaire est habituellement un numéro ou un code qui ne se répète jamais et ne change jamais.\n\nUn distributeur de pièces conserve ses clients dans son ERP avec un numéro de client. Quand il relie sa boutique en ligne, la correspondance sur ce numéro, plutôt que sur le nom ou le courriel, garde les commandes liées au bon compte.\n\nLes clés primaires permettent aussi de relier les tables. Une ligne de commande conserve le numéro de client, qui renvoie à un seul client.",
        breaks: [
          { title: "Des valeurs significatives servent de clés.", detail: "Utiliser un courriel ou un numéro de téléphone comme clé cause des problèmes quand le client le change." },
          { title: "Les systèmes utilisent des clés différentes pour la même chose.", detail: "Si l'ERP et le CRM ont chacun leur numéro de client sans correspondance, les intégrations se fient aux noms et créent des doublons." },
          { title: "Les clés sont réutilisées.", detail: "Réattribuer un ancien code d'article à un nouveau produit mélange l'historique de deux choses différentes." }
        ],
        faq: [
          { q: "Quelle est la différence entre une clé primaire et une clé étrangère?", a: "Une clé primaire identifie une ligne dans sa propre table. Une clé étrangère est un champ d'une autre table qui conserve cette valeur pour s'y relier, comme le numéro de client sur une commande." },
          { q: "Une clé primaire peut-elle compter plus d'un champ?", a: "Oui. On parle de clé composée, par exemple un numéro de commande plus un numéro de ligne pour identifier chaque ligne de commande." }
        ]
      },
      es: {
        term: "Clave primaria",
        definition: "Una clave primaria es un campo, o conjunto de campos, que identifica de forma única cada fila de una tabla de base de datos, de modo que dos registros no pueden compartirla.",
        explanation: "Cada cliente, pedido o artículo en una base de datos necesita una forma confiable de distinguirse de los demás. El nombre no basta, porque dos clientes pueden llamarse igual y los nombres cambian. Una clave primaria suele ser un número o código que nunca se repite ni cambia.\n\nUn distribuidor de refacciones guarda a sus clientes en el ERP con un número de cliente. Cuando conecta su tienda en línea, relacionar por ese número, y no por nombre o correo, mantiene los pedidos ligados a la cuenta correcta.\n\nLas claves primarias también permiten enlazar tablas. Una fila de pedido guarda el número de cliente, que apunta a un solo cliente.",
        breaks: [
          { title: "Se usan valores con significado como clave.", detail: "Usar un correo o teléfono como clave causa problemas cuando el cliente lo cambia." },
          { title: "Los sistemas usan claves distintas para lo mismo.", detail: "Si el ERP y el CRM tienen cada uno su número de cliente sin correspondencia, las integraciones relacionan por nombre y crean duplicados." },
          { title: "Las claves se reutilizan.", detail: "Reasignar un código de artículo viejo a un producto nuevo mezcla el historial de dos cosas distintas." }
        ],
        faq: [
          { q: "¿Cuál es la diferencia entre clave primaria y clave foránea?", a: "La clave primaria identifica una fila en su propia tabla. La clave foránea es un campo en otra tabla que guarda ese valor para enlazarse, como el número de cliente en un pedido." },
          { q: "¿Una clave primaria puede tener más de un campo?", a: "Sí. Se llama clave compuesta, por ejemplo número de pedido más número de línea para identificar cada línea." }
        ]
      }
    }
  },
  {
    slug: "database-normalization",
    category: "data",
    hub: "/software-development",
    related: ["primary-key", "data-quality", "single-source-of-truth", "data-warehouse"],
    copy: {
      en: {
        term: "Database normalization",
        definition: "Database normalization is the practice of organizing a database into related tables so each fact is stored only once, which reduces errors and duplicated data.",
        explanation: "In a poorly designed database, the same fact gets typed into many places. A customer's address might be stored on every order. When the address changes, some copies get updated and others do not.\n\nNormalization splits data into tables by subject: customers, orders, products. Each order just points to the customer by ID. Change the address once and every order sees the new one.\n\nA small manufacturer running orders from one big spreadsheet faces this every day. Moving to a normalized database, or a system built on one, ends the hunt for which row is correct. Reporting databases sometimes undo some normalization on purpose for speed, but the main system should stay normalized.",
        breaks: [
          { title: "Spreadsheets are used as databases.", detail: "One wide sheet repeats the same details on every row, and edits drift apart." },
          { title: "It is taken too far.", detail: "Splitting data into too many small tables can make simple reports slow and hard to build." },
          { title: "Copied fields are added for convenience.", detail: "Developers add a duplicate field to save a lookup, and it falls out of sync over time." }
        ],
        faq: [
          { q: "What are normal forms?", a: "They are a series of rules, such as first, second and third normal form, that describe progressively stricter ways to remove repeated data from tables." },
          { q: "What is denormalization?", a: "It is the deliberate copying of some data back into fewer tables to speed up reading, often used in reporting databases and data warehouses." }
        ]
      },
      fr: {
        term: "Normalisation de base de données",
        definition: "La normalisation de base de données consiste à organiser une base de données en tables reliées pour que chaque fait ne soit stocké qu'une fois, ce qui réduit les erreurs et les données en double.",
        explanation: "Dans une base de données mal conçue, le même fait est inscrit à plusieurs endroits. L'adresse d'un client peut être stockée sur chaque commande. Quand l'adresse change, certaines copies sont mises à jour, d'autres non.\n\nLa normalisation répartit les données en tables par sujet : clients, commandes, produits. Chaque commande pointe simplement vers le client par son numéro. On change l'adresse une fois et toutes les commandes voient la nouvelle.\n\nUn petit fabricant qui gère ses commandes dans un grand chiffrier vit ce problème tous les jours. Passer à une base normalisée, ou à un système bâti sur une telle base, met fin à la chasse à la bonne ligne. Les bases de rapports défont parfois volontairement une partie de la normalisation pour la vitesse, mais le système principal devrait rester normalisé.",
        breaks: [
          { title: "Des chiffriers servent de bases de données.", detail: "Une large feuille répète les mêmes détails sur chaque ligne, et les modifications divergent." },
          { title: "On va trop loin.", detail: "Découper les données en trop de petites tables peut rendre de simples rapports lents et difficiles à bâtir." },
          { title: "Des champs copiés sont ajoutés par commodité.", detail: "Les développeurs ajoutent un champ en double pour éviter une recherche, et il se désynchronise avec le temps." }
        ],
        faq: [
          { q: "Que sont les formes normales?", a: "Ce sont une série de règles, comme la première, deuxième et troisième forme normale, qui décrivent des façons de plus en plus strictes d'éliminer les données répétées." },
          { q: "Qu'est-ce que la dénormalisation?", a: "C'est le fait de recopier volontairement certaines données dans moins de tables pour accélérer la lecture, souvent dans les bases de rapports et les entrepôts de données." }
        ]
      },
      es: {
        term: "Normalización de bases de datos",
        definition: "La normalización de bases de datos es la práctica de organizar una base de datos en tablas relacionadas para que cada dato se guarde una sola vez, lo que reduce errores y duplicados.",
        explanation: "En una base de datos mal diseñada, el mismo dato se escribe en muchos lugares. La dirección de un cliente puede guardarse en cada pedido. Cuando cambia, algunas copias se actualizan y otras no.\n\nLa normalización divide los datos en tablas por tema: clientes, pedidos, productos. Cada pedido solo apunta al cliente por su número. Se cambia la dirección una vez y todos los pedidos ven la nueva.\n\nUn pequeño fabricante que maneja pedidos en una gran hoja de cálculo vive esto a diario. Pasar a una base normalizada, o a un sistema construido sobre una, acaba con la búsqueda de la fila correcta. Las bases para reportes a veces deshacen parte de la normalización a propósito por velocidad, pero el sistema principal debe seguir normalizado.",
        breaks: [
          { title: "Se usan hojas de cálculo como bases de datos.", detail: "Una hoja ancha repite los mismos datos en cada fila, y las ediciones se desfasan." },
          { title: "Se lleva demasiado lejos.", detail: "Dividir los datos en demasiadas tablas pequeñas puede volver lentos y difíciles los reportes simples." },
          { title: "Se agregan campos copiados por comodidad.", detail: "Los desarrolladores duplican un campo para evitar una búsqueda, y con el tiempo se desincroniza." }
        ],
        faq: [
          { q: "¿Qué son las formas normales?", a: "Son una serie de reglas, como la primera, segunda y tercera forma normal, que describen maneras cada vez más estrictas de quitar datos repetidos de las tablas." },
          { q: "¿Qué es la desnormalización?", a: "Es copiar a propósito algunos datos en menos tablas para acelerar la lectura, algo común en bases de reportes y almacenes de datos." }
        ]
      }
    }
  },
  {
    slug: "business-intelligence",
    category: "data",
    hub: "/software-development",
    related: ["dashboard", "data-warehouse", "kpi", "data-quality", "data-pipeline"],
    copy: {
      en: {
        term: "Business intelligence (BI)",
        definition: "Business intelligence (BI) is the tools and practices a business uses to turn its data into reports, dashboards and analysis that support decisions.",
        explanation: "BI connects to business systems, combines their data and lets people explore it without writing code. Typical uses are sales by region, margin by product, overdue invoices or late shipments.\n\nA family-owned food distributor might use BI to compare margin by customer each month. It finds a few large accounts that look great on revenue but earn little once delivery costs and discounts are counted. That insight changes how it prices and serves those accounts.\n\nBI tools are only as useful as the data and definitions behind them. Agreeing on what each number means, and keeping source data clean, is most of the work.",
        breaks: [
          { title: "Each department builds its own reports.", detail: "Different filters and definitions produce different answers to the same question." },
          { title: "BI is pointed straight at messy source data.", detail: "Without a cleaned layer between systems and reports, errors show up in every chart." },
          { title: "Reports are built but not used.", detail: "Without a decision tied to each report, they pile up and get ignored." }
        ],
        faq: [
          { q: "What is the difference between BI and analytics?", a: "The terms overlap. BI often refers to reporting on what happened and what is happening now. Analytics can also include deeper work like forecasting or finding causes." },
          { q: "Do I need a data warehouse for BI?", a: "Not always. Many BI tools connect directly to one or two systems. A warehouse helps when you combine many sources or need consistent definitions across them." }
        ]
      },
      fr: {
        term: "Intelligence d'affaires (BI)",
        definition: "L'intelligence d'affaires (BI) regroupe les outils et pratiques qu'une entreprise utilise pour transformer ses données en rapports, tableaux de bord et analyses qui appuient les décisions.",
        explanation: "La BI se connecte aux systèmes de l'entreprise, combine leurs données et permet de les explorer sans écrire de code. Les usages typiques : ventes par région, marge par produit, factures en retard ou expéditions tardives.\n\nUn distributeur alimentaire familial peut utiliser la BI pour comparer la marge par client chaque mois. Il découvre que quelques gros comptes paraissent excellents en revenus, mais rapportent peu une fois la livraison et les rabais comptés. Cette découverte change sa façon de fixer les prix et de servir ces comptes.\n\nLes outils de BI ne valent que les données et définitions qui les alimentent. S'entendre sur le sens de chaque chiffre, et garder les données sources propres, représente la majeure partie du travail.",
        breaks: [
          { title: "Chaque service bâtit ses propres rapports.", detail: "Des filtres et définitions différents donnent des réponses différentes à la même question." },
          { title: "La BI est branchée directement sur des données sources désordonnées.", detail: "Sans couche nettoyée entre les systèmes et les rapports, les erreurs apparaissent dans chaque graphique." },
          { title: "Les rapports sont créés mais pas utilisés.", detail: "Sans décision liée à chaque rapport, ils s'accumulent et sont ignorés." }
        ],
        faq: [
          { q: "Quelle est la différence entre la BI et l'analytique?", a: "Les termes se chevauchent. La BI désigne souvent les rapports sur ce qui s'est passé et ce qui se passe. L'analytique peut aussi inclure un travail plus poussé, comme la prévision ou la recherche des causes." },
          { q: "Ai-je besoin d'un entrepôt de données pour la BI?", a: "Pas toujours. Beaucoup d'outils de BI se connectent directement à un ou deux systèmes. Un entrepôt aide quand on combine plusieurs sources ou qu'il faut des définitions cohérentes entre elles." }
        ]
      },
      es: {
        term: "Inteligencia de negocios (BI)",
        definition: "La inteligencia de negocios (BI) son las herramientas y prácticas que una empresa usa para convertir sus datos en reportes, tableros y análisis que apoyan las decisiones.",
        explanation: "La BI se conecta a los sistemas del negocio, combina sus datos y permite explorarlos sin escribir código. Usos típicos: ventas por región, margen por producto, facturas vencidas o envíos tardíos.\n\nUn distribuidor familiar de alimentos puede usar BI para comparar el margen por cliente cada mes. Descubre que algunas cuentas grandes se ven muy bien en ingresos, pero dejan poco al contar los costos de entrega y los descuentos. Ese hallazgo cambia cómo les pone precio y cómo las atiende.\n\nLas herramientas de BI solo son tan útiles como los datos y definiciones detrás. Acordar qué significa cada número y mantener limpios los datos fuente es la mayor parte del trabajo.",
        breaks: [
          { title: "Cada área arma sus propios reportes.", detail: "Filtros y definiciones distintos dan respuestas distintas a la misma pregunta." },
          { title: "La BI se conecta directo a datos fuente desordenados.", detail: "Sin una capa limpia entre los sistemas y los reportes, los errores aparecen en cada gráfica." },
          { title: "Se crean reportes que nadie usa.", detail: "Si cada reporte no está ligado a una decisión, se acumulan y se ignoran." }
        ],
        faq: [
          { q: "¿Cuál es la diferencia entre BI y analítica?", a: "Los términos se traslapan. BI suele referirse a reportar lo que pasó y lo que pasa ahora. La analítica también puede incluir trabajo más profundo como pronósticos o búsqueda de causas." },
          { q: "¿Necesito un almacén de datos para BI?", a: "No siempre. Muchas herramientas de BI se conectan directo a uno o dos sistemas. Un almacén ayuda cuando combina muchas fuentes o necesita definiciones consistentes entre ellas." }
        ]
      }
    }
  },
  {
    slug: "data-pipeline",
    category: "data",
    hub: "/software-development",
    related: ["etl", "data-warehouse", "batch-sync", "real-time-sync", "exception-handling"],
    copy: {
      en: {
        term: "Data pipeline",
        definition: "A data pipeline is an automated series of steps that moves data from one or more sources, transforms it along the way, and delivers it to a destination such as a warehouse, report or other system.",
        explanation: "A data pipeline replaces the weekly ritual of exporting files, cleaning them in a spreadsheet and pasting them somewhere else. It runs on a schedule or whenever new data arrives, and does the same steps the same way every time.\n\nAn online retailer might have a pipeline that pulls yesterday's orders from its store, ad spend from its marketing platforms and costs from its ERP. It matches them by product and loads the result into a reporting database before the team starts work.\n\nThe less visible part matters most: alerts when a step fails, checks that row counts look right, and logs that show what ran and when.",
        breaks: [
          { title: "Failures are silent.", detail: "A pipeline stops running and nobody notices until a report is days out of date." },
          { title: "A source system changes without warning.", detail: "A renamed field or new API version breaks the transform step." },
          { title: "Business logic is buried in code.", detail: "Rules like how returns are counted live in a script only one person understands." }
        ],
        diagram: ["Extract from sources", "Transform and check", "Load to destination", "Alert on failure"],
        faq: [
          { q: "What is the difference between a data pipeline and ETL?", a: "ETL (extract, transform, load) is one common pattern for a data pipeline. Pipeline is the broader term and can include streaming, simple copies and other patterns." },
          { q: "Should a pipeline run in batches or in real time?", a: "Batches are simpler and fine for daily reporting. Real-time pipelines suit cases where minutes matter, such as stock levels across sales channels." }
        ]
      },
      fr: {
        term: "Pipeline de données",
        definition: "Un pipeline de données est une suite d'étapes automatisées qui déplace des données d'une ou plusieurs sources, les transforme en chemin et les livre à une destination comme un entrepôt, un rapport ou un autre système.",
        explanation: "Un pipeline de données remplace le rituel hebdomadaire qui consiste à exporter des fichiers, les nettoyer dans un chiffrier et les coller ailleurs. Il roule selon un horaire ou dès que de nouvelles données arrivent, et refait les mêmes étapes de la même façon chaque fois.\n\nUn détaillant en ligne peut avoir un pipeline qui extrait les commandes d'hier de sa boutique, les dépenses publicitaires de ses plateformes marketing et les coûts de son ERP. Il les associe par produit et charge le résultat dans une base de rapports avant que l'équipe commence sa journée.\n\nLa partie la moins visible compte le plus : des alertes quand une étape échoue, des contrôles du nombre de lignes et des journaux qui montrent ce qui a roulé et quand.",
        breaks: [
          { title: "Les échecs sont silencieux.", detail: "Un pipeline cesse de rouler et personne ne s'en aperçoit avant qu'un rapport ait plusieurs jours de retard." },
          { title: "Un système source change sans prévenir.", detail: "Un champ renommé ou une nouvelle version d'API brise l'étape de transformation." },
          { title: "La logique d'affaires est enfouie dans le code.", detail: "Des règles comme la façon de compter les retours vivent dans un script qu'une seule personne comprend." }
        ],
        diagram: ["Extraire des sources", "Transformer et vérifier", "Charger à destination", "Alerter en cas d'échec"],
        faq: [
          { q: "Quelle est la différence entre un pipeline de données et l'ETL?", a: "L'ETL (extraction, transformation, chargement) est un modèle courant de pipeline. Pipeline est le terme plus large et peut inclure le flux continu, les simples copies et d'autres modèles." },
          { q: "Un pipeline doit-il rouler par lots ou en temps réel?", a: "Les lots sont plus simples et suffisent pour les rapports quotidiens. Le temps réel convient quand les minutes comptent, comme les niveaux de stock entre canaux de vente." }
        ]
      },
      es: {
        term: "Canalización de datos (pipeline)",
        definition: "Una canalización de datos es una serie automatizada de pasos que mueve datos desde una o varias fuentes, los transforma en el camino y los entrega a un destino como un almacén, un reporte u otro sistema.",
        explanation: "Una canalización de datos reemplaza el ritual semanal de exportar archivos, limpiarlos en una hoja de cálculo y pegarlos en otro lado. Corre según un horario o cuando llegan datos nuevos, y hace los mismos pasos de la misma forma cada vez.\n\nUn minorista en línea puede tener una canalización que toma los pedidos de ayer de su tienda, el gasto en anuncios de sus plataformas de marketing y los costos de su ERP. Los relaciona por producto y carga el resultado en una base de reportes antes de que el equipo empiece a trabajar.\n\nLa parte menos visible es la más importante: alertas cuando un paso falla, revisiones de que el número de filas sea lógico y registros que muestran qué corrió y cuándo.",
        breaks: [
          { title: "Las fallas son silenciosas.", detail: "La canalización deja de correr y nadie lo nota hasta que un reporte tiene días de atraso." },
          { title: "Un sistema fuente cambia sin aviso.", detail: "Un campo renombrado o una nueva versión de API rompe el paso de transformación." },
          { title: "La lógica del negocio está enterrada en el código.", detail: "Reglas como cómo contar las devoluciones viven en un script que solo una persona entiende." }
        ],
        diagram: ["Extraer de fuentes", "Transformar y validar", "Cargar al destino", "Alertar si falla"],
        faq: [
          { q: "¿Cuál es la diferencia entre una canalización de datos y ETL?", a: "ETL (extraer, transformar, cargar) es un patrón común de canalización. Canalización es el término más amplio e incluye flujos continuos, copias simples y otros patrones." },
          { q: "¿Debe correr por lotes o en tiempo real?", a: "Los lotes son más simples y bastan para reportes diarios. El tiempo real conviene cuando importan los minutos, como el inventario entre canales de venta." }
        ]
      }
    }
  },
  {
    slug: "backup-and-recovery",
    category: "data",
    hub: "/software-development",
    related: ["saas", "on-premise", "incident-management", "data-governance", "system-of-record"],
    copy: {
      en: {
        term: "Backup and recovery",
        definition: "Backup and recovery is the practice of regularly copying business data to a safe place and being able to restore it quickly after loss, damage, error or attack.",
        explanation: "Backups protect against deleted files, failed hardware, bad updates and ransomware. Recovery is the part people forget: a backup only matters if you can actually restore from it, in time.\n\nA small manufacturer backs up its server every night to an external drive kept in the same room. When a flood damages the room, both are lost. A better setup keeps at least one copy offsite or in the cloud, and one copy that cannot be changed or deleted by an attacker.\n\nTwo questions guide the plan: how much recent data can you afford to lose, and how long can you be down? The answers set how often you back up and how fast restores must be.",
        breaks: [
          { title: "Restores are never tested.", detail: "Backups look fine until the day they are needed and turn out to be incomplete or unreadable." },
          { title: "All copies are in one place.", detail: "Fire, flood or ransomware can take out the original and the backup together." },
          { title: "SaaS data is assumed to be backed up.", detail: "Many cloud vendors protect their platform, but restoring your deleted records may be limited or your own responsibility." }
        ],
        diagram: ["Schedule backups", "Store copies offsite", "Test restores", "Recover when needed"],
        faq: [
          { q: "What is the 3-2-1 backup rule?", a: "Keep three copies of your data, on two different types of storage, with one copy offsite. Many teams also keep one copy that cannot be altered." },
          { q: "What are RPO and RTO?", a: "Recovery point objective (RPO) is how much data you can afford to lose, measured in time. Recovery time objective (RTO) is how long you can be down before systems must be back." }
        ]
      },
      fr: {
        term: "Sauvegarde et restauration",
        definition: "La sauvegarde et restauration est la pratique qui consiste à copier régulièrement les données de l'entreprise dans un endroit sûr et à pouvoir les rétablir rapidement après une perte, un dommage, une erreur ou une attaque.",
        explanation: "Les sauvegardes protègent contre les fichiers supprimés, les pannes de matériel, les mauvaises mises à jour et les rançongiciels. La restauration est la partie qu'on oublie : une sauvegarde ne vaut que si l'on peut vraiment restaurer à partir d'elle, à temps.\n\nUn petit fabricant sauvegarde son serveur chaque nuit sur un disque externe gardé dans la même pièce. Quand une inondation endommage la pièce, les deux sont perdus. Une meilleure installation garde au moins une copie hors site ou dans le nuage, et une copie qu'un attaquant ne peut ni modifier ni supprimer.\n\nDeux questions guident le plan : combien de données récentes pouvez-vous perdre, et combien de temps pouvez-vous être arrêté? Les réponses fixent la fréquence des sauvegardes et la vitesse de restauration requise.",
        breaks: [
          { title: "Les restaurations ne sont jamais testées.", detail: "Les sauvegardes semblent correctes jusqu'au jour où on en a besoin et qu'elles se révèlent incomplètes ou illisibles." },
          { title: "Toutes les copies sont au même endroit.", detail: "Un feu, une inondation ou un rançongiciel peut détruire l'original et la sauvegarde ensemble." },
          { title: "On suppose que les données SaaS sont sauvegardées.", detail: "Beaucoup de fournisseurs infonuagiques protègent leur plateforme, mais la restauration de vos fiches supprimées peut être limitée ou relever de vous." }
        ],
        diagram: ["Planifier les sauvegardes", "Stocker hors site", "Tester les restaurations", "Restaurer au besoin"],
        faq: [
          { q: "Qu'est-ce que la règle de sauvegarde 3-2-1?", a: "Garder trois copies des données, sur deux types de support différents, dont une copie hors site. Beaucoup d'équipes gardent aussi une copie non modifiable." },
          { q: "Que sont le RPO et le RTO?", a: "L'objectif de point de reprise (RPO) est la quantité de données que vous pouvez perdre, mesurée en temps. L'objectif de délai de reprise (RTO) est le temps d'arrêt acceptable avant que les systèmes doivent être rétablis." }
        ]
      },
      es: {
        term: "Respaldo y recuperación",
        definition: "El respaldo y recuperación es la práctica de copiar con regularidad los datos del negocio a un lugar seguro y poder restaurarlos rápido después de una pérdida, daño, error o ataque.",
        explanation: "Los respaldos protegen contra archivos borrados, fallas de equipo, actualizaciones malas y ransomware. La recuperación es la parte que se olvida: un respaldo solo sirve si de verdad se puede restaurar a tiempo.\n\nUn pequeño fabricante respalda su servidor cada noche en un disco externo que guarda en el mismo cuarto. Cuando una inundación daña el cuarto, se pierden ambos. Una mejor configuración mantiene al menos una copia fuera del sitio o en la nube, y una copia que un atacante no pueda cambiar ni borrar.\n\nDos preguntas guían el plan: ¿cuántos datos recientes puede perder? y ¿cuánto tiempo puede estar detenido? Las respuestas fijan la frecuencia de los respaldos y la rapidez que debe tener la restauración.",
        breaks: [
          { title: "Nunca se prueban las restauraciones.", detail: "Los respaldos parecen bien hasta el día en que se necesitan y resultan incompletos o ilegibles." },
          { title: "Todas las copias están en un solo lugar.", detail: "Un incendio, una inundación o un ransomware pueden acabar con el original y el respaldo juntos." },
          { title: "Se asume que los datos SaaS están respaldados.", detail: "Muchos proveedores en la nube protegen su plataforma, pero recuperar sus registros borrados puede ser limitado o responsabilidad suya." }
        ],
        diagram: ["Programar respaldos", "Guardar fuera del sitio", "Probar restauraciones", "Recuperar si hace falta"],
        faq: [
          { q: "¿Qué es la regla de respaldo 3-2-1?", a: "Tener tres copias de los datos, en dos tipos de almacenamiento distintos, con una copia fuera del sitio. Muchos equipos también guardan una copia que no se puede alterar." },
          { q: "¿Qué son RPO y RTO?", a: "El objetivo de punto de recuperación (RPO) es cuántos datos puede perder, medido en tiempo. El objetivo de tiempo de recuperación (RTO) es cuánto tiempo puede estar detenido antes de que los sistemas deban volver." }
        ]
      }
    }
  },
  {
    slug: "personally-identifiable-information",
    category: "data",
    hub: "/software-development",
    related: ["data-governance", "role-based-access-control", "audit-trail", "marketing-automation", "backup-and-recovery"],
    copy: {
      en: {
        term: "Personally identifiable information (PII)",
        definition: "Personally identifiable information (PII) is any data that can identify a specific person on its own or when combined with other data, such as a name, address, email, phone number or government ID.",
        explanation: "Most business systems hold PII: customer contacts in the CRM, employee records in payroll, delivery addresses in the ERP. Privacy laws set rules for how it is collected, used, stored and shared. In Canada that includes PIPEDA and provincial laws, and the US, UK, EU and Australia each have their own rules, often using the term personal information or personal data.\n\nA home furnishings retailer collects names, addresses and phone numbers for deliveries. Good practice means collecting only what it needs, limiting who can see it, keeping it secure and deleting it when it is no longer needed.\n\nKnowing where PII lives across your systems is the first step to protecting it.",
        breaks: [
          { title: "PII spreads into exports and spreadsheets.", detail: "Copies saved to laptops or shared drives escape the controls of the main system." },
          { title: "More is collected than needed.", detail: "Extra fields like birth dates add risk without adding value." },
          { title: "Test systems use real customer data.", detail: "Sandbox copies often have weaker security but hold the same personal details." }
        ],
        faq: [
          { q: "What is the difference between PII and personal information?", a: "PII is a common US term. Canadian, UK, EU and Australian laws usually say personal information or personal data, and often define it broadly to include anything about an identifiable person." },
          { q: "Is a business email address PII?", a: "It can be. An email that names a specific person, like a first name at a company domain, can identify them. Treat it with care and check the privacy rules where you operate." }
        ]
      },
      fr: {
        term: "Renseignements personnels identificatoires (PII)",
        definition: "Les renseignements personnels identificatoires (PII) sont toutes les données qui peuvent identifier une personne précise seules ou combinées à d'autres, comme un nom, une adresse, un courriel, un numéro de téléphone ou une pièce d'identité gouvernementale.",
        explanation: "La plupart des systèmes d'entreprise contiennent des renseignements personnels : contacts clients dans le CRM, dossiers d'employés dans la paie, adresses de livraison dans l'ERP. Les lois sur la vie privée encadrent leur collecte, utilisation, conservation et communication. Au Canada, cela comprend la LPRPDE et les lois provinciales, comme la Loi 25 au Québec; les États-Unis, le Royaume-Uni, l'UE et l'Australie ont leurs propres règles, qui parlent souvent de renseignements ou de données personnels.\n\nUn détaillant d'ameublement recueille noms, adresses et numéros de téléphone pour les livraisons. La bonne pratique : ne recueillir que le nécessaire, limiter qui peut les voir, les protéger et les supprimer quand ils ne sont plus utiles.\n\nSavoir où se trouvent ces renseignements dans vos systèmes est la première étape pour les protéger.",
        breaks: [
          { title: "Les renseignements se répandent dans les exportations et les chiffriers.", detail: "Les copies enregistrées sur des portables ou des disques partagés échappent aux contrôles du système principal." },
          { title: "On recueille plus que nécessaire.", detail: "Des champs superflus comme la date de naissance ajoutent du risque sans ajouter de valeur." },
          { title: "Les systèmes de test utilisent de vraies données clients.", detail: "Les copies de bac à sable ont souvent une sécurité plus faible, mais contiennent les mêmes renseignements personnels." }
        ],
        faq: [
          { q: "Quelle est la différence entre PII et renseignements personnels?", a: "PII est un terme américain courant. Les lois canadiennes, britanniques, européennes et australiennes parlent plutôt de renseignements ou de données personnels, souvent définis largement pour inclure tout ce qui concerne une personne identifiable." },
          { q: "Une adresse courriel d'affaires est-elle un renseignement personnel?", a: "Elle peut l'être. Un courriel qui nomme une personne, comme un prénom au domaine de l'entreprise, peut l'identifier. Traitez-le avec soin et vérifiez les règles sur la vie privée là où vous exercez vos activités." }
        ]
      },
      es: {
        term: "Información de identificación personal (PII)",
        definition: "La información de identificación personal (PII) es cualquier dato que puede identificar a una persona específica por sí solo o combinado con otros, como nombre, dirección, correo, teléfono o identificación oficial.",
        explanation: "La mayoría de los sistemas de negocio guardan PII: contactos de clientes en el CRM, expedientes de empleados en nómina, direcciones de entrega en el ERP. Las leyes de privacidad fijan reglas sobre cómo se recopila, usa, guarda y comparte. En Canadá incluyen PIPEDA y leyes provinciales, y Estados Unidos, el Reino Unido, la UE y Australia tienen sus propias reglas, que a menudo hablan de información o datos personales.\n\nUn minorista de muebles recopila nombres, direcciones y teléfonos para las entregas. La buena práctica es recopilar solo lo necesario, limitar quién lo ve, protegerlo y borrarlo cuando ya no se necesita.\n\nSaber dónde vive la PII en sus sistemas es el primer paso para protegerla.",
        breaks: [
          { title: "La PII se esparce en exportaciones y hojas de cálculo.", detail: "Las copias guardadas en laptops o carpetas compartidas escapan a los controles del sistema principal." },
          { title: "Se recopila más de lo necesario.", detail: "Campos extra como la fecha de nacimiento agregan riesgo sin agregar valor." },
          { title: "Los sistemas de prueba usan datos reales de clientes.", detail: "Las copias de prueba suelen tener seguridad más débil, pero guardan los mismos datos personales." }
        ],
        faq: [
          { q: "¿Cuál es la diferencia entre PII e información personal?", a: "PII es un término común en Estados Unidos. Las leyes de Canadá, el Reino Unido, la UE y Australia suelen decir información o datos personales, y a menudo los definen de forma amplia para incluir todo lo relacionado con una persona identificable." },
          { q: "¿Un correo de trabajo es PII?", a: "Puede serlo. Un correo que nombra a una persona, como su nombre en el dominio de la empresa, puede identificarla. Trátelo con cuidado y revise las reglas de privacidad donde opera." }
        ]
      }
    }
  }
]
