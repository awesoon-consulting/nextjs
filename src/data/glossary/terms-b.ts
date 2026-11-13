import type { GlossaryTerm } from './types'

export const TERMS_B: GlossaryTerm[] = [
  {
    slug: "system-of-record",
    category: "systems",
    hub: "/software-development",
    related: ["single-source-of-truth", "master-data", "erp", "crm", "data-governance"],
    copy: {
      en: {
        term: "System of record",
        definition: "A system of record is the one application your business treats as the official, authoritative home for a specific type of data.",
        explanation: "Every important piece of data needs one place that wins when two systems disagree. For a distributor, the ERP might be the system of record for item costs and stock levels, while the CRM is the system of record for customer contacts.\n\nOther tools can show or copy that data, but they should not be where it is changed. If a sales rep updates a price in a quote tool instead of the ERP, the next sync can quietly undo it, or worse, the two numbers drift apart.\n\nNaming a system of record for each data type turns arguments about which report is right into a simple lookup.",
        breaks: [
          { title: "Nobody wrote down which system owns what.", detail: "Teams assume ownership based on habit, so two systems both get edited and neither can be trusted." },
          { title: "Edits happen in downstream tools.", detail: "People fix data where they see it, not where it lives, and the next sync overwrites their fix." },
          { title: "Ownership splits by field, not by record.", detail: "A customer's address lives in the CRM but credit terms live in the ERP, and nobody maps which field wins." },
          { title: "A new tool arrives without a decision.", detail: "Adding an ecommerce platform or a quoting app creates a third copy of the same data with no clear owner." }
        ],
        faq: [
          { q: "Is a system of record the same as a single source of truth?", a: "They are close. A system of record is the application that owns a data type, while a single source of truth is the wider practice of making sure everyone uses that owned version." },
          { q: "Can one business have several systems of record?", a: "Yes. Most do: one for financials, one for customers, one for employees. What matters is that each data type has exactly one owner." }
        ]
      },
      fr: {
        term: "Système de référence",
        definition: "Un système de référence est l'application unique que votre entreprise considère comme la source officielle et faisant autorité pour un type de données précis.",
        explanation: "Chaque donnée importante a besoin d'un endroit qui l'emporte quand deux systèmes ne s'entendent pas. Pour un distributeur, l'ERP peut être le système de référence pour les coûts d'articles et les niveaux de stock, tandis que le CRM l'est pour les contacts clients.\n\nLes autres outils peuvent afficher ou copier ces données, mais ce n'est pas là qu'on doit les modifier. Si un représentant change un prix dans un outil de soumission plutôt que dans l'ERP, la prochaine synchronisation peut annuler ce changement sans bruit, ou pire, les deux chiffres finissent par diverger.\n\nNommer un système de référence pour chaque type de données transforme les débats sur le bon rapport en une simple vérification.",
        breaks: [
          { title: "Personne n'a écrit quel système possède quoi.", detail: "Les équipes supposent la propriété selon leurs habitudes, donc deux systèmes sont modifiés et aucun n'est fiable." },
          { title: "Les modifications se font dans les outils en aval.", detail: "Les gens corrigent les données là où ils les voient, pas là où elles vivent, et la synchronisation suivante écrase leur correction." },
          { title: "La propriété est partagée par champ, pas par fiche.", detail: "L'adresse d'un client vit dans le CRM, mais ses conditions de crédit vivent dans l'ERP, et personne n'indique quel champ l'emporte." },
          { title: "Un nouvel outil arrive sans décision.", detail: "Ajouter une boutique en ligne ou une application de soumission crée une troisième copie des mêmes données sans propriétaire clair." }
        ],
        faq: [
          { q: "Un système de référence est-il la même chose qu'une source unique de vérité?", a: "C'est proche. Le système de référence est l'application qui possède un type de données, alors que la source unique de vérité est la pratique plus large qui consiste à faire en sorte que tout le monde utilise cette version." },
          { q: "Une entreprise peut-elle avoir plusieurs systèmes de référence?", a: "Oui. La plupart en ont plusieurs : un pour la finance, un pour les clients, un pour les employés. L'important est que chaque type de données ait un seul propriétaire." }
        ]
      },
      es: {
        term: "Sistema de registro",
        definition: "Un sistema de registro es la única aplicación que tu empresa trata como el lugar oficial y autorizado para un tipo específico de datos.",
        explanation: "Cada dato importante necesita un lugar que gane cuando dos sistemas no coinciden. Para un distribuidor, el ERP puede ser el sistema de registro de costos de artículos y niveles de inventario, mientras que el CRM lo es de los contactos de clientes.\n\nOtras herramientas pueden mostrar o copiar esos datos, pero no deberían ser el lugar donde se cambian. Si un vendedor actualiza un precio en una herramienta de cotización en lugar del ERP, la siguiente sincronización puede deshacerlo sin aviso, o peor, los dos números se separan.\n\nNombrar un sistema de registro para cada tipo de dato convierte las discusiones sobre cuál reporte es correcto en una consulta sencilla.",
        breaks: [
          { title: "Nadie escribió qué sistema es dueño de qué.", detail: "Los equipos asumen la propiedad por costumbre, así que se editan dos sistemas y ninguno es confiable." },
          { title: "Las ediciones se hacen en herramientas secundarias.", detail: "La gente corrige los datos donde los ve, no donde viven, y la siguiente sincronización borra su corrección." },
          { title: "La propiedad se divide por campo, no por registro.", detail: "La dirección de un cliente vive en el CRM pero sus condiciones de crédito viven en el ERP, y nadie define qué campo gana." },
          { title: "Llega una herramienta nueva sin una decisión.", detail: "Agregar una tienda en línea o una app de cotizaciones crea una tercera copia de los mismos datos sin dueño claro." }
        ],
        faq: [
          { q: "¿Un sistema de registro es lo mismo que una fuente única de verdad?", a: "Son cercanos. El sistema de registro es la aplicación dueña de un tipo de dato, y la fuente única de verdad es la práctica más amplia de asegurar que todos usen esa versión." },
          { q: "¿Una empresa puede tener varios sistemas de registro?", a: "Sí. La mayoría tiene varios: uno para finanzas, uno para clientes, uno para empleados. Lo importante es que cada tipo de dato tenga un solo dueño." }
        ]
      }
    }
  },
  {
    slug: "single-source-of-truth",
    category: "systems",
    hub: "/software-development",
    related: ["system-of-record", "master-data", "data-governance", "duplicate-records", "data-quality"],
    copy: {
      en: {
        term: "Single source of truth",
        definition: "A single source of truth is the practice of keeping each piece of business data in one trusted place so every team and report uses the same version.",
        explanation: "When sales, finance and the warehouse each keep their own spreadsheet of customers, the same customer ends up with three addresses and two credit limits. A single source of truth fixes that by agreeing on one home for each kind of data and pointing every other tool at it.\n\nFor a small manufacturer, that could mean product specs live only in the ERP, and the website, price lists and packing slips all read from there. Change it once and it changes everywhere.\n\nIt is less a piece of software and more a habit backed by integrations and clear rules about who can edit what.",
        breaks: [
          { title: "Side spreadsheets keep coming back.", detail: "When the official system is slow or awkward, people export data and maintain their own copy." },
          { title: "Integrations copy data both ways.", detail: "Two-way syncs without a clear winner let edits in either system overwrite each other." },
          { title: "Reports use different definitions.", detail: "Even with one data store, two dashboards that define revenue differently create two truths." },
          { title: "No one owns cleanup.", detail: "Duplicates and stale records build up because fixing them is nobody's job." }
        ],
        faq: [
          { q: "Do I need a data warehouse to have a single source of truth?", a: "Not always. Smaller businesses can get there by picking one system per data type and connecting the rest. A warehouse helps when reporting pulls from many systems." },
          { q: "How do I know if I lack a single source of truth?", a: "A common sign is meetings that start with arguing over whose numbers are right, or staff checking two systems before answering a customer." }
        ]
      },
      fr: {
        term: "Source unique de vérité",
        definition: "Une source unique de vérité est la pratique qui consiste à garder chaque donnée d'affaires dans un seul endroit fiable pour que chaque équipe et chaque rapport utilisent la même version.",
        explanation: "Quand les ventes, la finance et l'entrepôt gardent chacun leur propre chiffrier de clients, le même client finit avec trois adresses et deux limites de crédit. Une source unique de vérité règle ce problème en choisissant un seul endroit pour chaque type de données et en y reliant tous les autres outils.\n\nPour un petit fabricant, cela peut vouloir dire que les fiches produits vivent seulement dans l'ERP, et que le site Web, les listes de prix et les bordereaux d'expédition y puisent tous. On change l'information une fois et elle change partout.\n\nC'est moins un logiciel qu'une habitude, soutenue par des intégrations et des règles claires sur qui peut modifier quoi.",
        breaks: [
          { title: "Les chiffriers parallèles reviennent toujours.", detail: "Quand le système officiel est lent ou peu pratique, les gens exportent les données et gardent leur propre copie." },
          { title: "Les intégrations copient les données dans les deux sens.", detail: "Une synchronisation bidirectionnelle sans gagnant clair laisse les modifications de chaque système s'écraser." },
          { title: "Les rapports utilisent des définitions différentes.", detail: "Même avec un seul entrepôt de données, deux tableaux de bord qui définissent les revenus différemment créent deux vérités." },
          { title: "Personne n'est responsable du nettoyage.", detail: "Les doublons et les fiches périmées s'accumulent parce que les corriger n'est le travail de personne." }
        ],
        faq: [
          { q: "Ai-je besoin d'un entrepôt de données pour avoir une source unique de vérité?", a: "Pas toujours. Une petite entreprise peut y arriver en choisissant un système par type de données et en reliant les autres. Un entrepôt aide quand les rapports puisent dans plusieurs systèmes." },
          { q: "Comment savoir s'il me manque une source unique de vérité?", a: "Un signe courant : des réunions qui commencent par un débat sur les chiffres de qui sont les bons, ou des employés qui vérifient deux systèmes avant de répondre à un client." }
        ]
      },
      es: {
        term: "Fuente única de verdad",
        definition: "Una fuente única de verdad es la práctica de guardar cada dato del negocio en un solo lugar confiable para que todos los equipos y reportes usen la misma versión.",
        explanation: "Cuando ventas, finanzas y el almacén mantienen cada uno su propia hoja de cálculo de clientes, el mismo cliente termina con tres direcciones y dos límites de crédito. Una fuente única de verdad lo resuelve acordando un hogar para cada tipo de dato y conectando todas las demás herramientas a él.\n\nPara un fabricante pequeño, eso puede significar que las especificaciones de producto viven solo en el ERP, y el sitio web, las listas de precios y las guías de empaque leen de ahí. Lo cambias una vez y cambia en todas partes.\n\nEs menos un software y más un hábito, respaldado por integraciones y reglas claras sobre quién puede editar qué.",
        breaks: [
          { title: "Las hojas de cálculo paralelas siempre regresan.", detail: "Cuando el sistema oficial es lento o incómodo, la gente exporta los datos y mantiene su propia copia." },
          { title: "Las integraciones copian datos en ambos sentidos.", detail: "Las sincronizaciones bidireccionales sin un ganador claro permiten que los cambios de cada sistema se sobrescriban." },
          { title: "Los reportes usan definiciones distintas.", detail: "Incluso con un solo almacén de datos, dos tableros que definen ingresos de forma distinta crean dos verdades." },
          { title: "Nadie es dueño de la limpieza.", detail: "Los duplicados y registros viejos se acumulan porque arreglarlos no es trabajo de nadie." }
        ],
        faq: [
          { q: "¿Necesito un data warehouse para tener una fuente única de verdad?", a: "No siempre. Una empresa pequeña puede lograrlo eligiendo un sistema por tipo de dato y conectando los demás. Un data warehouse ayuda cuando los reportes toman datos de muchos sistemas." },
          { q: "¿Cómo sé si me falta una fuente única de verdad?", a: "Una señal común son reuniones que empiezan discutiendo qué números son los correctos, o personal que revisa dos sistemas antes de responder a un cliente." }
        ]
      }
    }
  },
  {
    slug: "master-data",
    category: "systems",
    hub: "/software-development",
    related: ["system-of-record", "data-governance", "duplicate-records", "sku", "data-quality"],
    copy: {
      en: {
        term: "Master data",
        definition: "Master data is the core reference information a business reuses across transactions, such as customers, vendors, products and locations.",
        explanation: "Transactions change every minute: orders, invoices, shipments. Master data changes slowly and gets reused by all of them. A retailer's product record, with its SKU, description, unit of measure and supplier, shows up on every purchase order, receipt and sale.\n\nBecause it is reused so often, one bad master record spreads fast. A wrong unit of measure on a single item can make every order for it ship the wrong quantity, and every invoice bill the wrong amount.\n\nGood master data has a clear owner, a standard format and a simple process for adding or changing records.",
        breaks: [
          { title: "Anyone can create a new record.", detail: "Without a request process, staff add near-duplicate customers and items when they cannot find the existing one." },
          { title: "Formats are not standard.", detail: "Addresses, units and product names get typed many ways, which breaks searches, reports and integrations." },
          { title: "Old records never retire.", detail: "Inactive vendors and discontinued items stay selectable, so people keep using them by mistake." },
          { title: "Each system keeps its own copy.", detail: "The ERP, CRM and ecommerce store each hold a version of the product list that slowly drifts apart." }
        ],
        faq: [
          { q: "What is the difference between master data and transactional data?", a: "Master data describes things that persist, like a customer or product. Transactional data records events that use them, like an order or a payment." },
          { q: "What is master data management?", a: "It is the set of processes, rules and sometimes tools used to keep master data accurate, consistent and shared across systems." }
        ]
      },
      fr: {
        term: "Données maîtres",
        definition: "Les données maîtres sont les informations de référence de base qu'une entreprise réutilise dans ses transactions, comme les clients, les fournisseurs, les produits et les emplacements.",
        explanation: "Les transactions changent chaque minute : commandes, factures, expéditions. Les données maîtres changent lentement et sont réutilisées par toutes ces transactions. La fiche produit d'un détaillant, avec son SKU, sa description, son unité de mesure et son fournisseur, apparaît sur chaque bon de commande, chaque réception et chaque vente.\n\nParce qu'elle est si souvent réutilisée, une seule fiche erronée se propage vite. Une mauvaise unité de mesure sur un article peut faire expédier la mauvaise quantité à chaque commande et facturer le mauvais montant à chaque fois.\n\nDe bonnes données maîtres ont un responsable clair, un format standard et un processus simple pour ajouter ou modifier des fiches.",
        breaks: [
          { title: "N'importe qui peut créer une fiche.", detail: "Sans processus de demande, les employés ajoutent des clients et des articles presque en double quand ils ne trouvent pas le bon." },
          { title: "Les formats ne sont pas standardisés.", detail: "Les adresses, unités et noms de produits sont saisis de plusieurs façons, ce qui brise les recherches, les rapports et les intégrations." },
          { title: "Les vieilles fiches ne sont jamais retirées.", detail: "Les fournisseurs inactifs et les articles discontinués restent sélectionnables, et les gens continuent de les utiliser par erreur." },
          { title: "Chaque système garde sa propre copie.", detail: "L'ERP, le CRM et la boutique en ligne ont chacun une version de la liste de produits qui dérive lentement." }
        ],
        faq: [
          { q: "Quelle est la différence entre données maîtres et données transactionnelles?", a: "Les données maîtres décrivent ce qui dure, comme un client ou un produit. Les données transactionnelles enregistrent les événements qui les utilisent, comme une commande ou un paiement." },
          { q: "Qu'est-ce que la gestion des données maîtres?", a: "C'est l'ensemble des processus, des règles et parfois des outils qui gardent les données maîtres exactes, cohérentes et partagées entre les systèmes." }
        ]
      },
      es: {
        term: "Datos maestros",
        definition: "Los datos maestros son la información de referencia central que una empresa reutiliza en sus transacciones, como clientes, proveedores, productos y ubicaciones.",
        explanation: "Las transacciones cambian cada minuto: pedidos, facturas, envíos. Los datos maestros cambian despacio y todas esas transacciones los reutilizan. El registro de producto de un minorista, con su SKU, descripción, unidad de medida y proveedor, aparece en cada orden de compra, recepción y venta.\n\nComo se reutiliza tanto, un solo registro maestro malo se propaga rápido. Una unidad de medida incorrecta en un artículo puede hacer que cada pedido se envíe con la cantidad equivocada y que cada factura cobre el monto equivocado.\n\nLos buenos datos maestros tienen un dueño claro, un formato estándar y un proceso simple para agregar o cambiar registros.",
        breaks: [
          { title: "Cualquiera puede crear un registro nuevo.", detail: "Sin un proceso de solicitud, el personal agrega clientes y artículos casi duplicados cuando no encuentra el existente." },
          { title: "Los formatos no son estándar.", detail: "Direcciones, unidades y nombres de producto se escriben de muchas formas, lo que rompe búsquedas, reportes e integraciones." },
          { title: "Los registros viejos nunca se retiran.", detail: "Proveedores inactivos y artículos descontinuados siguen disponibles, y la gente los sigue usando por error." },
          { title: "Cada sistema guarda su propia copia.", detail: "El ERP, el CRM y la tienda en línea tienen cada uno una versión de la lista de productos que se va separando." }
        ],
        faq: [
          { q: "¿Cuál es la diferencia entre datos maestros y datos transaccionales?", a: "Los datos maestros describen cosas que perduran, como un cliente o un producto. Los datos transaccionales registran eventos que los usan, como un pedido o un pago." },
          { q: "¿Qué es la gestión de datos maestros?", a: "Es el conjunto de procesos, reglas y a veces herramientas que mantienen los datos maestros exactos, consistentes y compartidos entre sistemas." }
        ]
      }
    }
  },
  {
    slug: "saas",
    category: "systems",
    hub: "/software-development",
    related: ["multi-tenant", "on-premise", "single-sign-on", "api", "legacy-system"],
    copy: {
      en: {
        term: "SaaS",
        definition: "SaaS (software as a service) is software you use over the internet through a subscription, while the vendor hosts, runs and updates it for you.",
        explanation: "Instead of buying a licence and installing software on your own server, you log in through a browser and pay monthly or yearly. The vendor handles servers, backups, security patches and new features.\n\nA growing retailer might run its accounting, ecommerce store and email marketing all as SaaS. That means no server closet, but it also means the business now depends on several outside companies and needs those tools to talk to each other.\n\nSaaS lowers the cost of getting started. The real work shifts to choosing tools carefully, connecting them and managing who has access.",
        breaks: [
          { title: "Tools pile up without a plan.", detail: "Each team buys its own subscription, and the business ends up with overlapping apps and scattered data." },
          { title: "Data is hard to get out.", detail: "Some products limit exports or APIs, which makes reporting and switching vendors painful." },
          { title: "Updates change things without warning.", detail: "The vendor ships a new screen or removes a feature, and staff workflows break overnight." },
          { title: "Access is not cleaned up.", detail: "When people leave, their accounts in a dozen SaaS tools stay open unless someone tracks them." }
        ],
        faq: [
          { q: "Is SaaS the same as cloud software?", a: "SaaS is one kind of cloud software. Cloud also includes rented servers and platforms that you build on, where you manage more yourself." },
          { q: "Who owns my data in a SaaS product?", a: "Usually you do, but the contract sets the details. Check the terms for data export, retention after cancellation and where the data is stored." }
        ]
      },
      fr: {
        term: "SaaS",
        definition: "Le SaaS (logiciel en tant que service) est un logiciel que vous utilisez par Internet au moyen d'un abonnement, pendant que le fournisseur l'héberge, l'exploite et le met à jour pour vous.",
        explanation: "Au lieu d'acheter une licence et d'installer le logiciel sur votre propre serveur, vous vous connectez dans un navigateur et payez chaque mois ou chaque année. Le fournisseur s'occupe des serveurs, des sauvegardes, des correctifs de sécurité et des nouvelles fonctions.\n\nUn détaillant en croissance peut faire rouler sa comptabilité, sa boutique en ligne et son marketing par courriel en SaaS. Plus besoin de salle de serveurs, mais l'entreprise dépend maintenant de plusieurs sociétés externes et doit faire communiquer ces outils.\n\nLe SaaS réduit le coût de départ. Le vrai travail se déplace vers le choix des outils, leurs connexions et la gestion des accès.",
        breaks: [
          { title: "Les outils s'accumulent sans plan.", detail: "Chaque équipe achète son propre abonnement, et l'entreprise se retrouve avec des applications qui se chevauchent et des données éparpillées." },
          { title: "Les données sont difficiles à récupérer.", detail: "Certains produits limitent les exportations ou les API, ce qui complique les rapports et le changement de fournisseur." },
          { title: "Les mises à jour changent tout sans avertissement.", detail: "Le fournisseur lance un nouvel écran ou retire une fonction, et les façons de travailler se brisent du jour au lendemain." },
          { title: "Les accès ne sont pas nettoyés.", detail: "Quand quelqu'un part, ses comptes dans une douzaine d'outils SaaS restent ouverts si personne n'en fait le suivi." }
        ],
        faq: [
          { q: "Le SaaS est-il la même chose que le logiciel infonuagique?", a: "Le SaaS est un type de logiciel infonuagique. L'infonuagique comprend aussi des serveurs loués et des plateformes sur lesquelles vous bâtissez, où vous gérez davantage vous-même." },
          { q: "À qui appartiennent mes données dans un produit SaaS?", a: "Habituellement à vous, mais le contrat fixe les détails. Vérifiez les conditions d'exportation, la conservation après l'annulation et l'endroit où les données sont stockées." }
        ]
      },
      es: {
        term: "SaaS",
        definition: "El SaaS (software como servicio) es software que usas por internet mediante una suscripción, mientras el proveedor lo aloja, lo opera y lo actualiza por ti.",
        explanation: "En lugar de comprar una licencia e instalar el software en tu propio servidor, entras desde un navegador y pagas cada mes o cada año. El proveedor se encarga de servidores, respaldos, parches de seguridad y nuevas funciones.\n\nUn minorista en crecimiento puede usar en modo SaaS su contabilidad, su tienda en línea y su marketing por correo. Eso significa que no necesita un cuarto de servidores, pero también que depende de varias empresas externas y necesita que esas herramientas se comuniquen.\n\nEl SaaS reduce el costo de empezar. El trabajo real pasa a elegir bien las herramientas, conectarlas y controlar quién tiene acceso.",
        breaks: [
          { title: "Las herramientas se acumulan sin plan.", detail: "Cada equipo compra su propia suscripción, y la empresa termina con apps que se traslapan y datos dispersos." },
          { title: "Es difícil sacar los datos.", detail: "Algunos productos limitan las exportaciones o las API, lo que complica los reportes y el cambio de proveedor." },
          { title: "Las actualizaciones cambian cosas sin aviso.", detail: "El proveedor lanza una pantalla nueva o quita una función, y los flujos de trabajo del personal se rompen de un día para otro." },
          { title: "Los accesos no se limpian.", detail: "Cuando alguien se va, sus cuentas en una docena de herramientas SaaS siguen abiertas si nadie lleva el control." }
        ],
        faq: [
          { q: "¿SaaS es lo mismo que software en la nube?", a: "SaaS es un tipo de software en la nube. La nube también incluye servidores rentados y plataformas sobre las que construyes, donde tú administras más cosas." },
          { q: "¿Quién es dueño de mis datos en un producto SaaS?", a: "Normalmente tú, pero el contrato define los detalles. Revisa las condiciones de exportación, la retención después de cancelar y dónde se almacenan los datos." }
        ]
      }
    }
  },
  {
    slug: "on-premise",
    category: "systems",
    hub: "/software-development",
    related: ["saas", "legacy-system", "backup-and-recovery", "technical-debt", "erp"],
    copy: {
      en: {
        term: "On-premise",
        definition: "On-premise software is installed and run on servers that your business owns or controls, rather than hosted by the vendor over the internet.",
        explanation: "With on-premise software, your team or IT partner is responsible for the hardware, the operating system, backups, security updates and upgrades. Many older ERP and accounting systems at manufacturers still run this way, on a server in the office or a rented data centre rack.\n\nThe upside is control: you choose when to upgrade, and the data never leaves your building. The downside is that every task the SaaS vendor would normally do now falls on you.\n\nSome public buyers and regulated businesses still prefer on-premise for data residency or security policy reasons.",
        breaks: [
          { title: "Upgrades get postponed for years.", detail: "Because upgrades are risky and manual, teams skip versions until the gap is too big to cross easily." },
          { title: "Backups are never tested.", detail: "A backup job runs every night, but nobody has tried restoring from it until the day they need to." },
          { title: "One person knows the server.", detail: "When the IT contact leaves, the business loses the only map of how the system is set up." },
          { title: "Remote access is bolted on.", detail: "Staff working from home or on the road get access through workarounds that are slow or insecure." }
        ],
        faq: [
          { q: "Is on-premise more secure than SaaS?", a: "Not automatically. It gives you more control, but security depends on how well the servers are patched, monitored and backed up." },
          { q: "Can I move from on-premise to the cloud?", a: "Usually, yes. It often means a data migration and some process changes, so it is worth planning like a small implementation project." }
        ]
      },
      fr: {
        term: "Sur site",
        definition: "Un logiciel sur site est installé et exploité sur des serveurs que votre entreprise possède ou contrôle, plutôt qu'hébergé par le fournisseur sur Internet.",
        explanation: "Avec un logiciel sur site, votre équipe ou votre partenaire TI est responsable du matériel, du système d'exploitation, des sauvegardes, des mises à jour de sécurité et des mises à niveau. Beaucoup d'anciens systèmes ERP et comptables chez les fabricants fonctionnent encore ainsi, sur un serveur au bureau ou dans une baie louée en centre de données.\n\nL'avantage est le contrôle : vous choisissez quand mettre à niveau, et les données ne quittent jamais vos locaux. L'inconvénient est que chaque tâche qu'un fournisseur SaaS ferait normalement vous revient.\n\nCertains acheteurs publics et entreprises réglementées préfèrent encore le sur site pour des raisons de résidence des données ou de politique de sécurité.",
        breaks: [
          { title: "Les mises à niveau sont repoussées pendant des années.", detail: "Comme elles sont risquées et manuelles, les équipes sautent des versions jusqu'à ce que l'écart soit trop grand." },
          { title: "Les sauvegardes ne sont jamais testées.", detail: "Une sauvegarde roule chaque nuit, mais personne n'a essayé de restaurer avant le jour où on en a besoin." },
          { title: "Une seule personne connaît le serveur.", detail: "Quand le contact TI part, l'entreprise perd la seule carte de la configuration du système." },
          { title: "L'accès à distance est improvisé.", detail: "Les employés en télétravail ou sur la route y accèdent par des solutions de contournement lentes ou peu sûres." }
        ],
        faq: [
          { q: "Le sur site est-il plus sécuritaire que le SaaS?", a: "Pas automatiquement. Il donne plus de contrôle, mais la sécurité dépend de la façon dont les serveurs sont corrigés, surveillés et sauvegardés." },
          { q: "Puis-je passer du sur site à l'infonuagique?", a: "Habituellement, oui. Cela implique souvent une migration de données et quelques changements de processus, donc il vaut la peine de le planifier comme un petit projet d'implantation." }
        ]
      },
      es: {
        term: "Local (on-premise)",
        definition: "El software local (on-premise) se instala y se ejecuta en servidores que tu empresa posee o controla, en lugar de que el proveedor lo aloje por internet.",
        explanation: "Con software local, tu equipo o tu socio de TI se encarga del hardware, el sistema operativo, los respaldos, las actualizaciones de seguridad y las nuevas versiones. Muchos ERP y sistemas contables antiguos en fábricas todavía funcionan así, en un servidor en la oficina o en un rack rentado en un centro de datos.\n\nLa ventaja es el control: tú decides cuándo actualizar y los datos nunca salen de tu edificio. La desventaja es que cada tarea que normalmente haría un proveedor SaaS ahora recae en ti.\n\nAlgunos compradores públicos y empresas reguladas todavía prefieren lo local por razones de residencia de datos o políticas de seguridad.",
        breaks: [
          { title: "Las actualizaciones se posponen por años.", detail: "Como son riesgosas y manuales, los equipos se saltan versiones hasta que la brecha es demasiado grande." },
          { title: "Los respaldos nunca se prueban.", detail: "Un respaldo corre cada noche, pero nadie ha intentado restaurarlo hasta el día que lo necesita." },
          { title: "Solo una persona conoce el servidor.", detail: "Cuando el contacto de TI se va, la empresa pierde el único mapa de cómo está configurado el sistema." },
          { title: "El acceso remoto es improvisado.", detail: "El personal que trabaja desde casa o en ruta entra mediante soluciones lentas o inseguras." }
        ],
        faq: [
          { q: "¿Lo local es más seguro que el SaaS?", a: "No automáticamente. Da más control, pero la seguridad depende de qué tan bien se parchan, vigilan y respaldan los servidores." },
          { q: "¿Puedo pasar de local a la nube?", a: "Por lo general sí. Suele implicar una migración de datos y algunos cambios de proceso, así que conviene planearlo como un pequeño proyecto de implementación." }
        ]
      }
    }
  },
  {
    slug: "multi-tenant",
    category: "systems",
    hub: "/software-development",
    related: ["saas", "role-based-access-control", "sandbox-environment", "on-premise"],
    copy: {
      en: {
        term: "Multi-tenant",
        definition: "Multi-tenant describes software where one shared copy of an application and its infrastructure serves many customers, while each customer's data stays separate.",
        explanation: "Think of an apartment building: everyone shares the structure, plumbing and elevator, but each unit has its own lock. Most SaaS products work this way. A distributor and a bakery might both use the same inventory app on the same servers without ever seeing each other's records.\n\nBecause everyone runs the same version, the vendor can ship fixes and features to all customers at once. The trade-off is less room for deep custom changes, since one customer's tweak would affect everyone.\n\nWhen evaluating a multi-tenant product, ask how data is isolated and what you can configure on your own.",
        breaks: [
          { title: "Custom code is not allowed.", detail: "Businesses expecting deep changes find they can only configure settings, not rewrite how the product works." },
          { title: "Upgrades happen on the vendor's schedule.", detail: "Every tenant gets the new version at the same time, ready or not." },
          { title: "Busy neighbours slow things down.", detail: "Heavy use by other tenants can sometimes affect performance, so vendors set limits on API calls and large jobs." },
          { title: "Data isolation is assumed, not checked.", detail: "Buyers rarely ask how tenants are separated, which matters for security reviews and public sector contracts." }
        ],
        faq: [
          { q: "What is the difference between multi-tenant and single-tenant?", a: "Multi-tenant shares one application across many customers. Single-tenant gives each customer its own copy, which allows more control but usually costs more to run." },
          { q: "Is my data mixed with other customers' data?", a: "It may sit in the same database, but a well-built multi-tenant system keeps it logically separated so other tenants cannot see or change it." }
        ]
      },
      fr: {
        term: "Multilocataire",
        definition: "Multilocataire décrit un logiciel où une seule copie partagée de l'application et de son infrastructure sert plusieurs clients, tout en gardant les données de chacun séparées.",
        explanation: "Pensez à un immeuble à logements : tout le monde partage la structure, la plomberie et l'ascenseur, mais chaque logement a sa propre serrure. La plupart des produits SaaS fonctionnent ainsi. Un distributeur et une boulangerie peuvent utiliser la même application d'inventaire sur les mêmes serveurs sans jamais voir les fiches de l'autre.\n\nComme tout le monde utilise la même version, le fournisseur peut livrer correctifs et fonctions à tous ses clients en même temps. Le compromis : moins de place pour des modifications profondes, puisque l'ajustement d'un client toucherait tout le monde.\n\nQuand vous évaluez un produit multilocataire, demandez comment les données sont isolées et ce que vous pouvez configurer vous-même.",
        breaks: [
          { title: "Le code personnalisé n'est pas permis.", detail: "Les entreprises qui s'attendent à des changements profonds découvrent qu'elles peuvent seulement configurer des paramètres." },
          { title: "Les mises à niveau suivent l'horaire du fournisseur.", detail: "Chaque locataire reçoit la nouvelle version en même temps, prêt ou non." },
          { title: "Des voisins occupés ralentissent tout.", detail: "Une forte utilisation par d'autres locataires peut parfois nuire à la performance, donc les fournisseurs limitent les appels API et les gros traitements." },
          { title: "L'isolement des données est présumé, pas vérifié.", detail: "Les acheteurs demandent rarement comment les locataires sont séparés, ce qui compte pour les revues de sécurité et les contrats publics." }
        ],
        faq: [
          { q: "Quelle est la différence entre multilocataire et monolocataire?", a: "Le multilocataire partage une application entre plusieurs clients. Le monolocataire donne à chaque client sa propre copie, ce qui offre plus de contrôle mais coûte habituellement plus cher à exploiter." },
          { q: "Mes données sont-elles mélangées à celles d'autres clients?", a: "Elles peuvent être dans la même base de données, mais un système multilocataire bien conçu les sépare logiquement pour que les autres locataires ne puissent ni les voir ni les modifier." }
        ]
      },
      es: {
        term: "Multiinquilino",
        definition: "Multiinquilino describe un software donde una sola copia compartida de la aplicación y su infraestructura atiende a muchos clientes, mientras los datos de cada uno se mantienen separados.",
        explanation: "Piensa en un edificio de departamentos: todos comparten la estructura, la plomería y el elevador, pero cada unidad tiene su propia cerradura. La mayoría de los productos SaaS funcionan así. Un distribuidor y una panadería pueden usar la misma app de inventario en los mismos servidores sin ver nunca los registros del otro.\n\nComo todos usan la misma versión, el proveedor puede entregar correcciones y funciones a todos los clientes a la vez. La contrapartida es menos espacio para cambios profundos, porque el ajuste de un cliente afectaría a todos.\n\nAl evaluar un producto multiinquilino, pregunta cómo se aíslan los datos y qué puedes configurar por tu cuenta.",
        breaks: [
          { title: "No se permite código a la medida.", detail: "Las empresas que esperan cambios profundos descubren que solo pueden configurar opciones, no reescribir el producto." },
          { title: "Las actualizaciones siguen el calendario del proveedor.", detail: "Todos los inquilinos reciben la nueva versión al mismo tiempo, estén listos o no." },
          { title: "Los vecinos ocupados lo hacen más lento.", detail: "El uso intenso de otros inquilinos a veces afecta el rendimiento, por eso los proveedores limitan llamadas a la API y procesos grandes." },
          { title: "Se asume el aislamiento de datos sin verificarlo.", detail: "Los compradores rara vez preguntan cómo se separan los inquilinos, algo que importa en revisiones de seguridad y contratos públicos." }
        ],
        faq: [
          { q: "¿Cuál es la diferencia entre multiinquilino e inquilino único?", a: "Multiinquilino comparte una aplicación entre muchos clientes. Inquilino único da a cada cliente su propia copia, con más control pero normalmente con mayor costo de operación." },
          { q: "¿Mis datos se mezclan con los de otros clientes?", a: "Pueden estar en la misma base de datos, pero un sistema multiinquilino bien construido los separa lógicamente para que otros inquilinos no puedan verlos ni cambiarlos." }
        ]
      }
    }
  },
  {
    slug: "sandbox-environment",
    category: "systems",
    hub: "/software-development",
    related: ["go-live", "erp-implementation", "data-migration", "customization-vs-configuration", "usability-testing"],
    copy: {
      en: {
        term: "Sandbox environment",
        definition: "A sandbox environment is a separate copy of a system where you can test changes, integrations and training without affecting live business data.",
        explanation: "Before changing a pricing rule in your ERP or connecting a new shipping app, you want to try it somewhere safe. A sandbox is that safe place: it looks and works like the real system, but orders placed there never ship and invoices never go out.\n\nA wholesaler setting up a new approval workflow might build it in the sandbox, run a week of sample orders through it, and only then switch it on in production.\n\nSandboxes are also useful for training new staff, since mistakes cost nothing.",
        breaks: [
          { title: "The sandbox is months out of date.", detail: "If it is never refreshed from production, tests pass against old settings and fail after go-live." },
          { title: "Test data is too clean.", detail: "Real orders have odd addresses, partial shipments and returns that a tidy test set never covers." },
          { title: "Integrations point at live systems.", detail: "A sandbox connected to the real payment or shipping account can create actual charges or labels." },
          { title: "Changes are rebuilt by hand in production.", detail: "Re-entering settings manually after testing introduces the very mistakes the sandbox was meant to catch." }
        ],
        diagram: ["Copy production", "Make the change", "Test real cases", "Promote to live"],
        faq: [
          { q: "Is a sandbox the same as a test environment?", a: "Mostly, yes. Vendors use different names, such as sandbox, staging or test, but the idea is the same: a safe copy that is not live." },
          { q: "Should a sandbox contain real customer data?", a: "Only if it is protected like production. Many businesses mask or remove personal information before copying data into a sandbox." }
        ]
      },
      fr: {
        term: "Environnement bac à sable",
        definition: "Un environnement bac à sable est une copie distincte d'un système où vous pouvez tester des changements, des intégrations et de la formation sans toucher aux données réelles de l'entreprise.",
        explanation: "Avant de modifier une règle de prix dans votre ERP ou de brancher une nouvelle application d'expédition, vous voulez l'essayer dans un endroit sûr. Le bac à sable est cet endroit : il ressemble au vrai système et fonctionne comme lui, mais les commandes passées n'y sont jamais expédiées et les factures ne partent jamais.\n\nUn grossiste qui met en place un nouveau circuit d'approbation peut le bâtir dans le bac à sable, y faire passer une semaine de commandes d'essai, puis seulement l'activer en production.\n\nLes bacs à sable servent aussi à former les nouveaux employés, puisque les erreurs ne coûtent rien.",
        breaks: [
          { title: "Le bac à sable date de plusieurs mois.", detail: "S'il n'est jamais rafraîchi à partir de la production, les tests réussissent avec de vieux paramètres et échouent après la mise en service." },
          { title: "Les données d'essai sont trop propres.", detail: "Les vraies commandes ont des adresses bizarres, des expéditions partielles et des retours qu'un jeu d'essai bien rangé ne couvre jamais." },
          { title: "Les intégrations pointent vers les systèmes réels.", detail: "Un bac à sable branché au vrai compte de paiement ou d'expédition peut créer de vrais frais ou de vraies étiquettes." },
          { title: "Les changements sont refaits à la main en production.", detail: "Ressaisir les paramètres manuellement après les tests introduit les erreurs mêmes que le bac à sable devait attraper." }
        ],
        diagram: ["Copier la production", "Faire le changement", "Tester des cas réels", "Passer en production"],
        faq: [
          { q: "Un bac à sable est-il la même chose qu'un environnement de test?", a: "En gros, oui. Les fournisseurs utilisent des noms différents, comme bac à sable, préproduction ou test, mais l'idée est la même : une copie sûre qui n'est pas en service." },
          { q: "Un bac à sable devrait-il contenir de vraies données clients?", a: "Seulement s'il est protégé comme la production. Beaucoup d'entreprises masquent ou retirent les renseignements personnels avant de copier les données." }
        ]
      },
      es: {
        term: "Entorno sandbox",
        definition: "Un entorno sandbox es una copia separada de un sistema donde puedes probar cambios, integraciones y capacitación sin afectar los datos reales del negocio.",
        explanation: "Antes de cambiar una regla de precios en tu ERP o conectar una nueva app de envíos, quieres probarlo en un lugar seguro. El sandbox es ese lugar: se ve y funciona como el sistema real, pero los pedidos que se hacen ahí nunca se envían y las facturas nunca salen.\n\nUn mayorista que configura un nuevo flujo de aprobación puede construirlo en el sandbox, pasar una semana de pedidos de prueba por él y solo entonces activarlo en producción.\n\nLos sandbox también sirven para capacitar a personal nuevo, porque los errores no cuestan nada.",
        breaks: [
          { title: "El sandbox tiene meses de atraso.", detail: "Si nunca se actualiza desde producción, las pruebas pasan con configuraciones viejas y fallan después de salir en vivo." },
          { title: "Los datos de prueba son demasiado limpios.", detail: "Los pedidos reales tienen direcciones raras, envíos parciales y devoluciones que un set de prueba ordenado nunca cubre." },
          { title: "Las integraciones apuntan a sistemas reales.", detail: "Un sandbox conectado a la cuenta real de pagos o envíos puede generar cargos o etiquetas de verdad." },
          { title: "Los cambios se rehacen a mano en producción.", detail: "Volver a capturar la configuración manualmente después de probar introduce los mismos errores que el sandbox debía detectar." }
        ],
        diagram: ["Copiar producción", "Hacer el cambio", "Probar casos reales", "Pasar a producción"],
        faq: [
          { q: "¿Un sandbox es lo mismo que un entorno de pruebas?", a: "En general sí. Los proveedores usan nombres distintos, como sandbox, staging o pruebas, pero la idea es la misma: una copia segura que no está en vivo." },
          { q: "¿Un sandbox debe tener datos reales de clientes?", a: "Solo si está protegido como producción. Muchas empresas enmascaran o quitan la información personal antes de copiar datos al sandbox." }
        ]
      }
    }
  },
  {
    slug: "technical-debt",
    category: "systems",
    hub: "/software-development",
    related: ["legacy-system", "customization-vs-configuration", "point-to-point-integration", "on-premise"],
    copy: {
      en: {
        term: "Technical debt",
        definition: "Technical debt is the future cost of rework that builds up when a system is built or changed with quick shortcuts instead of a cleaner, longer-lasting approach.",
        explanation: "Like financial debt, a shortcut lets you get something now and pay for it later, with interest. A distributor might patch its order system with a script that copies data overnight because it was faster than a proper integration. It works, until it fails on a holiday weekend and nobody remembers how it runs.\n\nSome debt is a smart trade-off. The trouble starts when shortcuts stack up, each one making the next change slower and riskier.\n\nKeeping a simple list of known shortcuts, and paying a few down each quarter, stops the interest from taking over.",
        breaks: [
          { title: "Shortcuts are never written down.", detail: "If nobody records the workaround, the next person cannot tell it is temporary or fragile." },
          { title: "Fixes always lose to new features.", detail: "Cleanup has no visible payoff, so it keeps getting pushed back until something breaks." },
          { title: "Heavy customization blocks upgrades.", detail: "Custom code in a packaged system can make each vendor update a costly project." },
          { title: "The original builder is gone.", detail: "Undocumented logic becomes a black box that people are afraid to touch." }
        ],
        faq: [
          { q: "Is technical debt always bad?", a: "No. Taking a shortcut to meet a real deadline can be the right call, as long as you know the cost and plan to fix it." },
          { q: "How do non-technical owners spot technical debt?", a: "Watch for simple changes that take weeks, frequent breakages after updates, or staff who say only one person can touch a certain system." }
        ]
      },
      fr: {
        term: "Dette technique",
        definition: "La dette technique est le coût futur de reprise qui s'accumule quand un système est bâti ou modifié avec des raccourcis rapides plutôt qu'une approche plus propre et plus durable.",
        explanation: "Comme une dette financière, un raccourci vous donne quelque chose maintenant que vous payez plus tard, avec intérêts. Un distributeur peut rafistoler son système de commandes avec un script qui copie les données la nuit, parce que c'était plus rapide qu'une vraie intégration. Ça fonctionne, jusqu'au jour où il plante pendant un long congé et que personne ne se souvient comment il roule.\n\nUne partie de la dette est un compromis intelligent. Le problème commence quand les raccourcis s'empilent et que chacun rend le prochain changement plus lent et plus risqué.\n\nGarder une liste simple des raccourcis connus, et en rembourser quelques-uns chaque trimestre, empêche les intérêts de prendre le dessus.",
        breaks: [
          { title: "Les raccourcis ne sont jamais notés.", detail: "Si personne ne consigne la solution de contournement, la personne suivante ne peut pas savoir qu'elle est temporaire ou fragile." },
          { title: "Les correctifs perdent toujours contre les nouvelles fonctions.", detail: "Le nettoyage n'a pas de bénéfice visible, donc il est repoussé jusqu'à ce que quelque chose casse." },
          { title: "La personnalisation lourde bloque les mises à niveau.", detail: "Du code sur mesure dans un progiciel peut transformer chaque mise à jour du fournisseur en projet coûteux." },
          { title: "La personne qui l'a bâti est partie.", detail: "Une logique non documentée devient une boîte noire que tout le monde a peur de toucher." }
        ],
        faq: [
          { q: "La dette technique est-elle toujours mauvaise?", a: "Non. Prendre un raccourci pour respecter une vraie échéance peut être le bon choix, à condition de connaître le coût et de prévoir la correction." },
          { q: "Comment un propriétaire non technique repère-t-il la dette technique?", a: "Surveillez les changements simples qui prennent des semaines, les pannes fréquentes après les mises à jour, ou les employés qui disent qu'une seule personne peut toucher à un système." }
        ]
      },
      es: {
        term: "Deuda técnica",
        definition: "La deuda técnica es el costo futuro de retrabajo que se acumula cuando un sistema se construye o cambia con atajos rápidos en lugar de un enfoque más limpio y duradero.",
        explanation: "Como una deuda financiera, un atajo te da algo ahora y lo pagas después, con intereses. Un distribuidor puede parchar su sistema de pedidos con un script que copia datos cada noche porque era más rápido que una integración bien hecha. Funciona, hasta que falla en un fin de semana largo y nadie recuerda cómo corre.\n\nAlgo de deuda es una decisión inteligente. El problema empieza cuando los atajos se apilan y cada uno hace el siguiente cambio más lento y riesgoso.\n\nLlevar una lista sencilla de atajos conocidos, y pagar algunos cada trimestre, evita que los intereses tomen el control.",
        breaks: [
          { title: "Los atajos nunca se documentan.", detail: "Si nadie registra la solución temporal, la siguiente persona no sabe que es provisional o frágil." },
          { title: "Las correcciones siempre pierden contra funciones nuevas.", detail: "La limpieza no tiene un beneficio visible, así que se pospone hasta que algo se rompe." },
          { title: "La personalización pesada bloquea actualizaciones.", detail: "El código a la medida en un sistema empaquetado puede convertir cada actualización del proveedor en un proyecto costoso." },
          { title: "Quien lo construyó ya no está.", detail: "La lógica sin documentar se vuelve una caja negra que todos temen tocar." }
        ],
        faq: [
          { q: "¿La deuda técnica siempre es mala?", a: "No. Tomar un atajo para cumplir una fecha real puede ser lo correcto, siempre que conozcas el costo y planees arreglarlo." },
          { q: "¿Cómo detecta la deuda técnica un dueño sin perfil técnico?", a: "Fíjate en cambios simples que tardan semanas, fallas frecuentes después de actualizaciones, o personal que dice que solo una persona puede tocar cierto sistema." }
        ]
      }
    }
  },
  {
    slug: "legacy-system",
    category: "systems",
    hub: "/software-development",
    related: ["technical-debt", "data-migration", "on-premise", "middleware", "erp-implementation"],
    copy: {
      en: {
        term: "Legacy system",
        definition: "A legacy system is an older application that a business still depends on, even though it is hard to change, support or connect to newer tools.",
        explanation: "Legacy does not mean broken. Many manufacturers run reliable order or inventory systems built decades ago. The problem is everything around them: the vendor may no longer exist, the hardware is aging, and modern apps cannot easily exchange data with it.\n\nA common pattern is a company that keys online orders into its old system by hand because there is no way to connect the two. The system works, but people become the integration.\n\nOptions range from wrapping the old system with middleware, to replacing one module at a time, to a full replacement project.",
        breaks: [
          { title: "Only one or two people know how it works.", detail: "Knowledge lives in a few heads, so a retirement or resignation becomes a business risk." },
          { title: "There is no API.", detail: "Without a way to connect, data moves through manual entry, file exports or screen scraping." },
          { title: "Replacement keeps getting delayed.", detail: "Because it still works, the project to replace it never feels urgent until a failure forces it." },
          { title: "Hidden rules live in the code.", detail: "Pricing and tax logic built over years is undocumented, so a new system misses edge cases." }
        ],
        faq: [
          { q: "Should we replace our legacy system?", a: "Not always. If it is stable and the main pain is connecting it, middleware or an API layer may solve most problems for less risk." },
          { q: "What is the biggest risk in replacing a legacy system?", a: "Missing business rules the old system handled quietly. Map the current processes and data carefully before choosing a replacement." }
        ]
      },
      fr: {
        term: "Système hérité",
        definition: "Un système hérité est une ancienne application dont une entreprise dépend encore, même s'il est difficile de la modifier, de la soutenir ou de la relier à des outils plus récents.",
        explanation: "Hérité ne veut pas dire brisé. Beaucoup de fabricants utilisent des systèmes de commandes ou d'inventaire fiables bâtis il y a des décennies. Le problème, c'est tout ce qui les entoure : le fournisseur n'existe peut-être plus, le matériel vieillit et les applications modernes ont du mal à échanger des données avec eux.\n\nUn cas courant : une entreprise qui ressaisit à la main ses commandes en ligne dans son vieux système, parce qu'il n'y a aucun moyen de relier les deux. Le système fonctionne, mais ce sont les gens qui deviennent l'intégration.\n\nLes options vont de l'ajout d'un intergiciel autour du vieux système, au remplacement module par module, jusqu'à un projet de remplacement complet.",
        breaks: [
          { title: "Seulement une ou deux personnes savent comment il fonctionne.", detail: "Le savoir vit dans quelques têtes, donc une retraite ou une démission devient un risque d'affaires." },
          { title: "Il n'y a pas d'API.", detail: "Sans moyen de connexion, les données passent par la saisie manuelle, des exportations de fichiers ou la lecture d'écran." },
          { title: "Le remplacement est toujours reporté.", detail: "Comme il fonctionne encore, le projet de remplacement ne semble jamais urgent jusqu'à ce qu'une panne le force." },
          { title: "Des règles cachées vivent dans le code.", detail: "La logique de prix et de taxes bâtie au fil des ans n'est pas documentée, donc un nouveau système rate des cas particuliers." }
        ],
        faq: [
          { q: "Devrions-nous remplacer notre système hérité?", a: "Pas toujours. S'il est stable et que le principal problème est de le relier, un intergiciel ou une couche d'API peut régler la plupart des irritants avec moins de risque." },
          { q: "Quel est le plus grand risque du remplacement d'un système hérité?", a: "Oublier des règles d'affaires que le vieux système gérait discrètement. Cartographiez bien les processus et les données actuels avant de choisir un remplaçant." }
        ]
      },
      es: {
        term: "Sistema heredado",
        definition: "Un sistema heredado es una aplicación antigua de la que una empresa todavía depende, aunque sea difícil de cambiar, mantener o conectar con herramientas más nuevas.",
        explanation: "Heredado no significa roto. Muchos fabricantes usan sistemas de pedidos o inventario confiables construidos hace décadas. El problema es todo lo que los rodea: el proveedor quizá ya no existe, el hardware envejece y las apps modernas no pueden intercambiar datos fácilmente con ellos.\n\nUn patrón común es una empresa que captura a mano los pedidos en línea en su sistema viejo porque no hay forma de conectar los dos. El sistema funciona, pero las personas se convierten en la integración.\n\nLas opciones van desde envolver el sistema viejo con middleware, hasta reemplazar un módulo a la vez, o un proyecto de reemplazo completo.",
        breaks: [
          { title: "Solo una o dos personas saben cómo funciona.", detail: "El conocimiento vive en pocas cabezas, así que una jubilación o renuncia se vuelve un riesgo para el negocio." },
          { title: "No hay API.", detail: "Sin una forma de conectarse, los datos se mueven por captura manual, exportación de archivos o lectura de pantallas." },
          { title: "El reemplazo se sigue posponiendo.", detail: "Como todavía funciona, el proyecto para reemplazarlo nunca parece urgente hasta que una falla lo obliga." },
          { title: "Hay reglas ocultas en el código.", detail: "La lógica de precios e impuestos construida por años no está documentada, y el sistema nuevo omite casos especiales." }
        ],
        faq: [
          { q: "¿Debemos reemplazar nuestro sistema heredado?", a: "No siempre. Si es estable y el dolor principal es conectarlo, un middleware o una capa de API puede resolver casi todo con menos riesgo." },
          { q: "¿Cuál es el mayor riesgo al reemplazar un sistema heredado?", a: "Perder reglas de negocio que el sistema viejo manejaba en silencio. Mapea con cuidado los procesos y datos actuales antes de elegir un reemplazo." }
        ]
      }
    }
  },
  {
    slug: "single-sign-on",
    category: "systems",
    hub: "/software-development",
    related: ["role-based-access-control", "saas", "audit-trail", "personally-identifiable-information"],
    copy: {
      en: {
        term: "Single sign-on (SSO)",
        definition: "Single sign-on (SSO) lets a person log in once with one set of credentials and then access several connected applications without signing in again.",
        explanation: "Instead of separate passwords for email, accounting, the CRM and the warehouse app, staff sign in through one identity provider. That provider confirms who they are and tells each app to let them in.\n\nFor a retailer with 40 employees and a dozen SaaS tools, SSO means fewer forgotten passwords and one place to turn access off when someone leaves. It also makes it easier to require stronger protections, like multi-factor authentication, everywhere at once.\n\nMany public sector contracts and security questionnaires now ask whether a vendor supports SSO.",
        breaks: [
          { title: "Some apps are left outside SSO.", detail: "Tools that do not support it, or whose SSO option costs extra, keep their own passwords and their own offboarding gaps." },
          { title: "Local admin accounts stay active.", detail: "Backup logins created during setup are forgotten and bypass the identity provider." },
          { title: "One outage locks everyone out.", detail: "If the identity provider goes down, staff cannot reach any connected app without a fallback plan." },
          { title: "Access is granted but never reviewed.", detail: "SSO makes logging in easy, but people still collect permissions they no longer need." }
        ],
        diagram: ["Open an app", "Redirect to provider", "Verify identity", "Return signed in"],
        faq: [
          { q: "Is SSO more secure than separate passwords?", a: "Usually, because there is one strong login to protect and one place to remove access. It does make that one login important, so pair it with multi-factor authentication." },
          { q: "What are SAML and OIDC?", a: "They are common standards that let an identity provider and an app trust each other for SSO. Most business apps support one or both." }
        ]
      },
      fr: {
        term: "Authentification unique (SSO)",
        definition: "L'authentification unique (SSO) permet à une personne de se connecter une seule fois avec un seul jeu d'identifiants, puis d'accéder à plusieurs applications reliées sans se reconnecter.",
        explanation: "Au lieu d'avoir des mots de passe différents pour le courriel, la comptabilité, le CRM et l'application d'entrepôt, les employés se connectent par un seul fournisseur d'identité. Ce fournisseur confirme qui ils sont et dit à chaque application de les laisser entrer.\n\nPour un détaillant de 40 employés avec une douzaine d'outils SaaS, le SSO veut dire moins de mots de passe oubliés et un seul endroit pour couper les accès quand quelqu'un part. Il est aussi plus facile d'exiger partout des protections plus fortes, comme l'authentification multifacteur.\n\nBeaucoup de contrats publics et de questionnaires de sécurité demandent maintenant si un fournisseur prend en charge le SSO.",
        breaks: [
          { title: "Certaines applications restent hors du SSO.", detail: "Les outils qui ne le prennent pas en charge, ou qui le facturent en option, gardent leurs propres mots de passe et leurs propres trous au départ d'un employé." },
          { title: "Des comptes administrateurs locaux restent actifs.", detail: "Des accès de secours créés à l'installation sont oubliés et contournent le fournisseur d'identité." },
          { title: "Une panne bloque tout le monde.", detail: "Si le fournisseur d'identité tombe, les employés ne peuvent joindre aucune application reliée sans plan de secours." },
          { title: "Les accès sont donnés mais jamais révisés.", detail: "Le SSO facilite la connexion, mais les gens accumulent quand même des permissions dont ils n'ont plus besoin." }
        ],
        diagram: ["Ouvrir une application", "Rediriger au fournisseur", "Vérifier l'identité", "Revenir connecté"],
        faq: [
          { q: "Le SSO est-il plus sécuritaire que des mots de passe séparés?", a: "Habituellement, parce qu'il y a une seule connexion forte à protéger et un seul endroit pour retirer les accès. Cette connexion devient donc importante, alors combinez-la à l'authentification multifacteur." },
          { q: "Que sont SAML et OIDC?", a: "Ce sont des normes courantes qui permettent à un fournisseur d'identité et à une application de se faire confiance pour le SSO. La plupart des applications d'affaires prennent en charge l'une ou l'autre." }
        ]
      },
      es: {
        term: "Inicio de sesión único (SSO)",
        definition: "El inicio de sesión único (SSO) permite que una persona entre una sola vez con un solo juego de credenciales y luego acceda a varias aplicaciones conectadas sin volver a iniciar sesión.",
        explanation: "En lugar de contraseñas distintas para el correo, la contabilidad, el CRM y la app del almacén, el personal entra por un solo proveedor de identidad. Ese proveedor confirma quiénes son y le indica a cada app que los deje pasar.\n\nPara un minorista con 40 empleados y una docena de herramientas SaaS, el SSO significa menos contraseñas olvidadas y un solo lugar para quitar accesos cuando alguien se va. También facilita exigir protecciones más fuertes en todas partes a la vez, como la autenticación multifactor.\n\nMuchos contratos del sector público y cuestionarios de seguridad ya preguntan si un proveedor soporta SSO.",
        breaks: [
          { title: "Algunas apps quedan fuera del SSO.", detail: "Las herramientas que no lo soportan, o que lo cobran aparte, mantienen sus propias contraseñas y sus propios huecos al dar de baja a alguien." },
          { title: "Las cuentas de administrador locales siguen activas.", detail: "Los accesos de respaldo creados en la configuración se olvidan y saltan al proveedor de identidad." },
          { title: "Una caída deja a todos fuera.", detail: "Si el proveedor de identidad falla, el personal no puede entrar a ninguna app conectada sin un plan alterno." },
          { title: "Se dan accesos pero nunca se revisan.", detail: "El SSO facilita entrar, pero la gente sigue acumulando permisos que ya no necesita." }
        ],
        diagram: ["Abrir una app", "Redirigir al proveedor", "Verificar identidad", "Volver con sesión"],
        faq: [
          { q: "¿El SSO es más seguro que contraseñas separadas?", a: "Normalmente sí, porque hay un solo inicio de sesión fuerte que proteger y un solo lugar para quitar accesos. Eso hace que ese inicio sea importante, así que combínalo con autenticación multifactor." },
          { q: "¿Qué son SAML y OIDC?", a: "Son estándares comunes que permiten que un proveedor de identidad y una app confíen entre sí para el SSO. La mayoría de las apps de negocio soportan uno o ambos." }
        ]
      }
    }
  },
  {
    slug: "role-based-access-control",
    category: "systems",
    hub: "/software-development",
    related: ["single-sign-on", "audit-trail", "approval-workflow", "personally-identifiable-information", "data-governance"],
    copy: {
      en: {
        term: "Role-based access control (RBAC)",
        definition: "Role-based access control (RBAC) is a way of managing permissions where people get access based on their job role rather than one by one.",
        explanation: "Instead of setting permissions for each person, you define roles such as buyer, warehouse lead or accounts payable clerk, decide what each role can see and do, and then assign people to roles.\n\nAt a distributor, a buyer might create purchase orders but not approve payments, while the controller can approve payments but not change vendor bank details. That split protects the business from honest mistakes and from fraud.\n\nWhen someone changes jobs, you swap their role instead of hunting through every screen to adjust settings.",
        breaks: [
          { title: "Too many roles, each slightly different.", detail: "Making a custom role for every person defeats the purpose and becomes impossible to review." },
          { title: "Everyone ends up as an admin.", detail: "Giving full access to fix a blocker today leaves dangerous permissions in place for years." },
          { title: "Roles are never reviewed.", detail: "People who changed jobs keep their old access on top of the new one." },
          { title: "Duties are not separated.", detail: "One role can both create a vendor and pay it, which removes a basic control against fraud." }
        ],
        faq: [
          { q: "What is the principle of least privilege?", a: "It means giving each role only the access it needs to do the job, and nothing more. RBAC is a common way to put it into practice." },
          { q: "How often should we review roles?", a: "Many businesses review access at least once or twice a year, and always when someone changes jobs or leaves." }
        ]
      },
      fr: {
        term: "Contrôle d'accès basé sur les rôles (RBAC)",
        definition: "Le contrôle d'accès basé sur les rôles (RBAC) est une façon de gérer les permissions où les gens obtiennent l'accès selon leur rôle de travail plutôt qu'une personne à la fois.",
        explanation: "Au lieu de régler les permissions de chaque personne, vous définissez des rôles comme acheteur, chef d'entrepôt ou commis aux comptes fournisseurs, vous décidez ce que chaque rôle peut voir et faire, puis vous assignez les gens à des rôles.\n\nChez un distributeur, un acheteur peut créer des bons de commande sans pouvoir approuver les paiements, tandis que le contrôleur peut approuver les paiements sans pouvoir changer les coordonnées bancaires des fournisseurs. Cette séparation protège l'entreprise des erreurs de bonne foi et de la fraude.\n\nQuand quelqu'un change de poste, vous changez son rôle au lieu de fouiller chaque écran pour ajuster les paramètres.",
        breaks: [
          { title: "Trop de rôles, chacun un peu différent.", detail: "Créer un rôle sur mesure pour chaque personne annule l'avantage et rend toute révision impossible." },
          { title: "Tout le monde finit administrateur.", detail: "Donner un accès complet pour débloquer un problème aujourd'hui laisse des permissions dangereuses en place pendant des années." },
          { title: "Les rôles ne sont jamais révisés.", detail: "Les gens qui ont changé de poste gardent leur ancien accès en plus du nouveau." },
          { title: "Les tâches ne sont pas séparées.", detail: "Un même rôle peut créer un fournisseur et le payer, ce qui retire un contrôle de base contre la fraude." }
        ],
        faq: [
          { q: "Qu'est-ce que le principe du moindre privilège?", a: "C'est donner à chaque rôle seulement l'accès dont il a besoin pour faire son travail, rien de plus. Le RBAC est une façon courante de l'appliquer." },
          { q: "À quelle fréquence devrions-nous réviser les rôles?", a: "Beaucoup d'entreprises révisent les accès au moins une ou deux fois par année, et toujours quand quelqu'un change de poste ou part." }
        ]
      },
      es: {
        term: "Control de acceso basado en roles (RBAC)",
        definition: "El control de acceso basado en roles (RBAC) es una forma de administrar permisos en la que las personas obtienen acceso según su puesto y no una por una.",
        explanation: "En lugar de configurar permisos para cada persona, defines roles como comprador, líder de almacén o auxiliar de cuentas por pagar, decides qué puede ver y hacer cada rol, y luego asignas personas a los roles.\n\nEn un distribuidor, un comprador puede crear órdenes de compra pero no aprobar pagos, mientras que el contralor puede aprobar pagos pero no cambiar los datos bancarios de proveedores. Esa separación protege al negocio de errores honestos y de fraudes.\n\nCuando alguien cambia de puesto, cambias su rol en lugar de buscar en cada pantalla para ajustar la configuración.",
        breaks: [
          { title: "Demasiados roles, cada uno un poco distinto.", detail: "Crear un rol a la medida para cada persona anula el propósito y hace imposible revisarlos." },
          { title: "Todos terminan como administradores.", detail: "Dar acceso total para resolver un bloqueo hoy deja permisos peligrosos activos por años." },
          { title: "Los roles nunca se revisan.", detail: "Las personas que cambiaron de puesto conservan su acceso viejo además del nuevo." },
          { title: "Las funciones no están separadas.", detail: "Un mismo rol puede crear un proveedor y pagarle, lo que elimina un control básico contra fraude." }
        ],
        faq: [
          { q: "¿Qué es el principio de mínimo privilegio?", a: "Significa dar a cada rol solo el acceso que necesita para su trabajo, y nada más. El RBAC es una forma común de aplicarlo." },
          { q: "¿Cada cuánto debemos revisar los roles?", a: "Muchas empresas revisan los accesos al menos una o dos veces al año, y siempre que alguien cambia de puesto o se va." }
        ]
      }
    }
  },
  {
    slug: "audit-trail",
    category: "systems",
    hub: "/software-development",
    related: ["role-based-access-control", "general-ledger", "data-governance", "approval-workflow", "system-of-record"],
    copy: {
      en: {
        term: "Audit trail",
        definition: "An audit trail is a time-stamped record of who did what in a system, showing each change, approval or deletion and when it happened.",
        explanation: "When a price, payment or vendor bank account changes, an audit trail answers three questions: who changed it, what it was before, and when. That record matters for accountants, auditors and anyone investigating a mistake.\n\nSay a wholesaler finds an invoice paid twice. With a good audit trail, finance can see who entered each payment, who approved it and whether anything was edited afterward. Without one, the investigation turns into guesswork and finger pointing.\n\nPublic buyers and regulated industries often require audit trails as part of their contracts or rules.",
        breaks: [
          { title: "Logging is switched off or limited.", detail: "Some systems only track changes on certain fields unless someone turns on full history." },
          { title: "Shared logins hide who acted.", detail: "When several people use one account, the trail shows the account, not the person." },
          { title: "Changes happen outside the system.", detail: "Edits made by direct database updates or spreadsheet imports may skip the log entirely." },
          { title: "History is deleted to save space.", detail: "Retention settings purge old logs before an audit or dispute needs them." }
        ],
        faq: [
          { q: "How long should we keep an audit trail?", a: "It depends on your tax, industry and contract rules. Check with your accountant or legal advisor for the retention period that applies to you." },
          { q: "Can an audit trail be edited?", a: "A trustworthy one should not be editable by normal users. If people can change or delete log entries, the trail loses its value." }
        ]
      },
      fr: {
        term: "Piste de vérification",
        definition: "Une piste de vérification est un registre horodaté de qui a fait quoi dans un système, montrant chaque changement, approbation ou suppression et le moment où il a eu lieu.",
        explanation: "Quand un prix, un paiement ou un compte bancaire de fournisseur change, une piste de vérification répond à trois questions : qui l'a changé, quelle était la valeur avant, et quand. Ce registre compte pour les comptables, les vérificateurs et quiconque enquête sur une erreur.\n\nDisons qu'un grossiste découvre une facture payée deux fois. Avec une bonne piste de vérification, la finance voit qui a saisi chaque paiement, qui l'a approuvé et si quelque chose a été modifié ensuite. Sans elle, l'enquête devient des suppositions et des accusations.\n\nLes acheteurs publics et les industries réglementées exigent souvent une piste de vérification dans leurs contrats ou leurs règles.",
        breaks: [
          { title: "La journalisation est désactivée ou limitée.", detail: "Certains systèmes ne suivent que quelques champs à moins que quelqu'un active l'historique complet." },
          { title: "Les comptes partagés cachent qui a agi.", detail: "Quand plusieurs personnes utilisent un même compte, la piste montre le compte, pas la personne." },
          { title: "Des changements se font hors du système.", detail: "Les modifications faites directement dans la base de données ou par importation de chiffrier peuvent échapper complètement au journal." },
          { title: "L'historique est effacé pour gagner de l'espace.", detail: "Les paramètres de conservation purgent les vieux journaux avant qu'une vérification ou un litige en ait besoin." }
        ],
        faq: [
          { q: "Combien de temps devrions-nous garder une piste de vérification?", a: "Cela dépend de vos règles fiscales, sectorielles et contractuelles. Vérifiez avec votre comptable ou votre conseiller juridique la période qui s'applique à vous." },
          { q: "Une piste de vérification peut-elle être modifiée?", a: "Une piste fiable ne devrait pas pouvoir être modifiée par les utilisateurs ordinaires. Si les gens peuvent changer ou supprimer des entrées, la piste perd sa valeur." }
        ]
      },
      es: {
        term: "Pista de auditoría",
        definition: "Una pista de auditoría es un registro con fecha y hora de quién hizo qué en un sistema, que muestra cada cambio, aprobación o eliminación y cuándo ocurrió.",
        explanation: "Cuando cambia un precio, un pago o la cuenta bancaria de un proveedor, una pista de auditoría responde tres preguntas: quién lo cambió, qué valor tenía antes y cuándo. Ese registro importa para contadores, auditores y cualquiera que investigue un error.\n\nSupongamos que un mayorista encuentra una factura pagada dos veces. Con una buena pista de auditoría, finanzas puede ver quién capturó cada pago, quién lo aprobó y si algo se editó después. Sin ella, la investigación se vuelve adivinanza y señalamientos.\n\nLos compradores públicos y las industrias reguladas suelen exigir pistas de auditoría en sus contratos o normas.",
        breaks: [
          { title: "El registro está apagado o limitado.", detail: "Algunos sistemas solo siguen ciertos campos a menos que alguien active el historial completo." },
          { title: "Los usuarios compartidos ocultan quién actuó.", detail: "Cuando varias personas usan una cuenta, la pista muestra la cuenta, no a la persona." },
          { title: "Hay cambios fuera del sistema.", detail: "Las ediciones hechas directo en la base de datos o por importaciones de hojas de cálculo pueden saltarse el registro." },
          { title: "El historial se borra para ahorrar espacio.", detail: "La configuración de retención elimina registros viejos antes de que una auditoría o disputa los necesite." }
        ],
        faq: [
          { q: "¿Cuánto tiempo debemos guardar una pista de auditoría?", a: "Depende de tus reglas fiscales, de la industria y de tus contratos. Consulta con tu contador o asesor legal el periodo que te aplica." },
          { q: "¿Se puede editar una pista de auditoría?", a: "Una pista confiable no debería poder editarla un usuario normal. Si la gente puede cambiar o borrar entradas, la pista pierde su valor." }
        ]
      }
    }
  },
  {
    slug: "api",
    category: "integration",
    hub: "/automation",
    related: ["rest-api", "webhook", "middleware", "rate-limit", "ipaas"],
    copy: {
      en: {
        term: "API",
        definition: "An API (application programming interface) is a defined set of rules that lets one piece of software request data or actions from another.",
        explanation: "An API is like a service counter: you ask for something in an agreed format, and the system hands back an answer without letting you into the back room. When your ecommerce store checks stock in your ERP, or your shipping app pulls order addresses, an API is usually doing the work.\n\nFor a growing distributor, APIs are what turn a pile of separate apps into a connected system. Without them, staff copy and paste between screens.\n\nNot every API is equal. Some expose only a few fields, have strict limits, or charge extra for access, so check before you buy.",
        breaks: [
          { title: "The API does not expose the data you need.", detail: "A vendor may offer an API that covers orders but not custom fields, returns or pricing rules." },
          { title: "Credentials expire or are tied to one person.", detail: "Integrations stop overnight when a staff member who created the key leaves or changes a password." },
          { title: "Changes break existing connections.", detail: "When a vendor retires an old API version, integrations built on it fail unless someone updated them." },
          { title: "Usage limits are hit at busy times.", detail: "High order volume during a sale can exceed the allowed calls and delay syncs." }
        ],
        faq: [
          { q: "Do I need a developer to use an API?", a: "Often yes for custom work, but many integration platforms let non-developers connect common apps through APIs with prebuilt connectors." },
          { q: "What is an API key?", a: "It is a secret code that identifies the app making a request and controls what it can access. Treat it like a password." }
        ]
      },
      fr: {
        term: "API",
        definition: "Une API (interface de programmation d'application) est un ensemble défini de règles qui permet à un logiciel de demander des données ou des actions à un autre.",
        explanation: "Une API ressemble à un comptoir de service : vous demandez quelque chose dans un format convenu, et le système vous remet une réponse sans vous laisser entrer dans l'arrière-boutique. Quand votre boutique en ligne vérifie les stocks dans votre ERP, ou que votre application d'expédition récupère les adresses des commandes, c'est habituellement une API qui travaille.\n\nPour un distributeur en croissance, les API transforment une pile d'applications séparées en un système relié. Sans elles, les employés copient et collent entre les écrans.\n\nToutes les API ne se valent pas. Certaines n'offrent que quelques champs, ont des limites strictes ou coûtent plus cher, alors vérifiez avant d'acheter.",
        breaks: [
          { title: "L'API n'offre pas les données dont vous avez besoin.", detail: "Un fournisseur peut offrir une API qui couvre les commandes, mais pas les champs personnalisés, les retours ou les règles de prix." },
          { title: "Les identifiants expirent ou sont liés à une personne.", detail: "Les intégrations s'arrêtent du jour au lendemain quand l'employé qui a créé la clé part ou change son mot de passe." },
          { title: "Les changements brisent les connexions existantes.", detail: "Quand un fournisseur retire une ancienne version de l'API, les intégrations bâties dessus échouent si personne ne les a mises à jour." },
          { title: "Les limites d'utilisation sont atteintes aux heures de pointe.", detail: "Un fort volume de commandes pendant une solde peut dépasser les appels permis et retarder les synchronisations." }
        ],
        faq: [
          { q: "Ai-je besoin d'un développeur pour utiliser une API?", a: "Souvent oui pour du travail sur mesure, mais plusieurs plateformes d'intégration permettent aux non-développeurs de relier des applications courantes par API avec des connecteurs prêts à l'emploi." },
          { q: "Qu'est-ce qu'une clé API?", a: "C'est un code secret qui identifie l'application qui fait une demande et contrôle ce qu'elle peut voir. Traitez-la comme un mot de passe." }
        ]
      },
      es: {
        term: "API",
        definition: "Una API (interfaz de programación de aplicaciones) es un conjunto definido de reglas que permite que un software pida datos o acciones a otro.",
        explanation: "Una API es como un mostrador de servicio: pides algo en un formato acordado y el sistema te entrega una respuesta sin dejarte entrar a la trastienda. Cuando tu tienda en línea revisa el inventario en tu ERP, o tu app de envíos toma las direcciones de los pedidos, normalmente una API hace el trabajo.\n\nPara un distribuidor en crecimiento, las API convierten un montón de apps separadas en un sistema conectado. Sin ellas, el personal copia y pega entre pantallas.\n\nNo todas las API son iguales. Algunas exponen pocos campos, tienen límites estrictos o cobran aparte por el acceso, así que revisa antes de comprar.",
        breaks: [
          { title: "La API no expone los datos que necesitas.", detail: "Un proveedor puede ofrecer una API que cubre pedidos pero no campos personalizados, devoluciones ni reglas de precios." },
          { title: "Las credenciales expiran o dependen de una persona.", detail: "Las integraciones se detienen de un día para otro cuando quien creó la clave se va o cambia su contraseña." },
          { title: "Los cambios rompen conexiones existentes.", detail: "Cuando un proveedor retira una versión vieja de la API, las integraciones construidas sobre ella fallan si nadie las actualizó." },
          { title: "Se alcanzan los límites de uso en horas pico.", detail: "Un volumen alto de pedidos durante una promoción puede superar las llamadas permitidas y retrasar las sincronizaciones." }
        ],
        faq: [
          { q: "¿Necesito un desarrollador para usar una API?", a: "A menudo sí para trabajo a la medida, pero muchas plataformas de integración permiten conectar apps comunes por API con conectores ya hechos." },
          { q: "¿Qué es una clave de API?", a: "Es un código secreto que identifica a la app que hace la petición y controla a qué puede acceder. Trátala como una contraseña." }
        ]
      }
    }
  },
  {
    slug: "rest-api",
    category: "integration",
    hub: "/automation",
    related: ["api", "webhook", "rate-limit", "idempotency", "data-mapping"],
    copy: {
      en: {
        term: "REST API",
        definition: "A REST API is a common style of API that uses standard web requests, such as GET to read and POST to create, to work with data at specific web addresses.",
        explanation: "REST is the most widely used way modern business apps share data. Each type of record, like orders or customers, has its own web address, and you use simple verbs to read, create, update or delete it. Responses usually come back as JSON, a plain text format both people and machines can read.\n\nIf a retailer wants its online store to create sales orders in its accounting system, a developer can send a POST request with the order details to the accounting system's orders address.\n\nBecause REST follows web standards, most programming tools and integration platforms support it out of the box.",
        breaks: [
          { title: "Errors are not handled.", detail: "A request can fail for many reasons, and integrations that do not check the response lose data silently." },
          { title: "Pagination is ignored.", detail: "Large lists come back in pages, and code that reads only the first page misses most of the records." },
          { title: "Retries create duplicates.", detail: "Resending a create request after a timeout can make two orders unless the API supports idempotency." },
          { title: "Field formats differ between systems.", detail: "Dates, currencies and units come back in formats that need converting before the other system accepts them." }
        ],
        faq: [
          { q: "What does REST stand for?", a: "Representational state transfer. In practice, people use it to mean an API built on standard web requests and addresses." },
          { q: "What is the difference between REST and GraphQL?", a: "REST gives each resource its own address. GraphQL uses one address where the caller asks for exactly the fields it wants in one request." }
        ]
      },
      fr: {
        term: "API REST",
        definition: "Une API REST est un style courant d'API qui utilise des requêtes Web standard, comme GET pour lire et POST pour créer, afin de manipuler des données à des adresses Web précises.",
        explanation: "REST est la façon la plus répandue dont les applications d'affaires modernes partagent des données. Chaque type de fiche, comme les commandes ou les clients, a sa propre adresse Web, et on utilise des verbes simples pour lire, créer, modifier ou supprimer. Les réponses reviennent habituellement en JSON, un format texte que les gens et les machines peuvent lire.\n\nSi un détaillant veut que sa boutique en ligne crée des commandes dans son système comptable, un développeur peut envoyer une requête POST avec les détails de la commande à l'adresse des commandes du système comptable.\n\nComme REST suit les normes du Web, la plupart des outils de programmation et des plateformes d'intégration le prennent en charge d'emblée.",
        breaks: [
          { title: "Les erreurs ne sont pas gérées.", detail: "Une requête peut échouer pour plusieurs raisons, et les intégrations qui ne vérifient pas la réponse perdent des données sans bruit." },
          { title: "La pagination est ignorée.", detail: "Les grandes listes reviennent par pages, et un code qui lit seulement la première page manque la plupart des fiches." },
          { title: "Les nouvelles tentatives créent des doublons.", detail: "Renvoyer une requête de création après un délai dépassé peut créer deux commandes, sauf si l'API gère l'idempotence." },
          { title: "Les formats de champs diffèrent entre les systèmes.", detail: "Les dates, devises et unités reviennent dans des formats qu'il faut convertir avant que l'autre système les accepte." }
        ],
        faq: [
          { q: "Que veut dire REST?", a: "Representational state transfer, ou transfert d'état représentationnel. En pratique, on l'utilise pour parler d'une API bâtie sur des requêtes et des adresses Web standard." },
          { q: "Quelle est la différence entre REST et GraphQL?", a: "REST donne à chaque ressource sa propre adresse. GraphQL utilise une seule adresse où l'appelant demande exactement les champs qu'il veut en une seule requête." }
        ]
      },
      es: {
        term: "API REST",
        definition: "Una API REST es un estilo común de API que usa peticiones web estándar, como GET para leer y POST para crear, para trabajar con datos en direcciones web específicas.",
        explanation: "REST es la forma más usada en que las apps de negocio modernas comparten datos. Cada tipo de registro, como pedidos o clientes, tiene su propia dirección web, y se usan verbos simples para leer, crear, actualizar o borrar. Las respuestas suelen llegar en JSON, un formato de texto que pueden leer personas y máquinas.\n\nSi un minorista quiere que su tienda en línea cree pedidos de venta en su sistema contable, un desarrollador puede enviar una petición POST con los datos del pedido a la dirección de pedidos del sistema contable.\n\nComo REST sigue estándares web, la mayoría de las herramientas de programación y plataformas de integración lo soportan desde el inicio.",
        breaks: [
          { title: "No se manejan los errores.", detail: "Una petición puede fallar por muchas razones, y las integraciones que no revisan la respuesta pierden datos sin aviso." },
          { title: "Se ignora la paginación.", detail: "Las listas grandes llegan por páginas, y el código que solo lee la primera pierde la mayoría de los registros." },
          { title: "Los reintentos crean duplicados.", detail: "Reenviar una petición de creación tras un tiempo de espera puede generar dos pedidos, a menos que la API soporte idempotencia." },
          { title: "Los formatos de campos difieren entre sistemas.", detail: "Fechas, monedas y unidades llegan en formatos que hay que convertir antes de que el otro sistema los acepte." }
        ],
        faq: [
          { q: "¿Qué significa REST?", a: "Representational state transfer, o transferencia de estado representacional. En la práctica se usa para hablar de una API construida sobre peticiones y direcciones web estándar." },
          { q: "¿Cuál es la diferencia entre REST y GraphQL?", a: "REST da a cada recurso su propia dirección. GraphQL usa una sola dirección donde quien llama pide exactamente los campos que quiere en una sola petición." }
        ]
      }
    }
  },
  {
    slug: "webhook",
    category: "integration",
    hub: "/automation",
    related: ["api", "event-driven-architecture", "real-time-sync", "trigger-and-action", "idempotency"],
    copy: {
      en: {
        term: "Webhook",
        definition: "A webhook is an automatic message one system sends to a web address you choose the moment a specific event happens, such as a new order or a failed payment.",
        explanation: "With a regular API, your system has to keep asking, \"Anything new?\" A webhook flips that around: the other system tells you when something happens. It is the difference between checking your mailbox every hour and getting a text when a package arrives.\n\nA retailer's online store might send a webhook to the warehouse app each time an order is paid, so picking starts right away instead of waiting for the next scheduled sync.\n\nWebhooks are fast and efficient, but the receiving side must be ready to catch them, check they are genuine and handle the same message arriving twice.",
        breaks: [
          { title: "The receiving endpoint is down.", detail: "If your server is offline when the message arrives, the event can be lost unless the sender retries." },
          { title: "Duplicate events are processed twice.", detail: "Senders often retry, so the same order can be created twice without a duplicate check." },
          { title: "Messages are not verified.", detail: "Without checking the signature, anyone who finds the address could send fake events." },
          { title: "Events arrive out of order.", detail: "An update can show up before the create, which confuses systems that expect a neat sequence." }
        ],
        diagram: ["Event happens", "Sender posts message", "Receiver verifies", "Action runs"],
        faq: [
          { q: "What is the difference between a webhook and an API?", a: "With an API, you ask for data when you want it. With a webhook, the other system pushes data to you when an event happens." },
          { q: "Are webhooks secure?", a: "They can be. Use HTTPS, verify the signature the sender includes, and keep the receiving address private." }
        ]
      },
      fr: {
        term: "Webhook",
        definition: "Un webhook est un message automatique qu'un système envoie à une adresse Web de votre choix dès qu'un événement précis se produit, comme une nouvelle commande ou un paiement refusé.",
        explanation: "Avec une API ordinaire, votre système doit sans cesse demander : \"Quoi de neuf?\" Le webhook inverse la situation : l'autre système vous avertit quand quelque chose arrive. C'est la différence entre vérifier votre boîte aux lettres chaque heure et recevoir un texto quand un colis arrive.\n\nLa boutique en ligne d'un détaillant peut envoyer un webhook à l'application d'entrepôt chaque fois qu'une commande est payée, pour que la préparation commence tout de suite plutôt qu'à la prochaine synchronisation prévue.\n\nLes webhooks sont rapides et efficaces, mais le côté qui reçoit doit être prêt à les attraper, à vérifier qu'ils sont authentiques et à gérer un même message reçu deux fois.",
        breaks: [
          { title: "Le point de réception est hors ligne.", detail: "Si votre serveur est arrêté quand le message arrive, l'événement peut être perdu à moins que l'expéditeur réessaie." },
          { title: "Les événements en double sont traités deux fois.", detail: "Les expéditeurs réessaient souvent, donc une même commande peut être créée deux fois sans vérification des doublons." },
          { title: "Les messages ne sont pas vérifiés.", detail: "Sans vérifier la signature, n'importe qui qui trouve l'adresse pourrait envoyer de faux événements." },
          { title: "Les événements arrivent dans le désordre.", detail: "Une mise à jour peut arriver avant la création, ce qui mêle les systèmes qui attendent une séquence bien rangée." }
        ],
        diagram: ["Un événement survient", "L'expéditeur envoie", "Le receveur vérifie", "L'action s'exécute"],
        faq: [
          { q: "Quelle est la différence entre un webhook et une API?", a: "Avec une API, vous demandez les données quand vous les voulez. Avec un webhook, l'autre système vous les pousse quand un événement survient." },
          { q: "Les webhooks sont-ils sécuritaires?", a: "Ils peuvent l'être. Utilisez HTTPS, vérifiez la signature incluse par l'expéditeur et gardez l'adresse de réception privée." }
        ]
      },
      es: {
        term: "Webhook",
        definition: "Un webhook es un mensaje automático que un sistema envía a una dirección web que tú eliges en el momento en que ocurre un evento específico, como un pedido nuevo o un pago rechazado.",
        explanation: "Con una API normal, tu sistema tiene que preguntar una y otra vez: \"¿Hay algo nuevo?\" Un webhook lo invierte: el otro sistema te avisa cuando pasa algo. Es la diferencia entre revisar tu buzón cada hora y recibir un mensaje cuando llega un paquete.\n\nLa tienda en línea de un minorista puede enviar un webhook a la app del almacén cada vez que se paga un pedido, para que el surtido empiece de inmediato en lugar de esperar la siguiente sincronización programada.\n\nLos webhooks son rápidos y eficientes, pero el lado que recibe debe estar listo para atraparlos, verificar que sean auténticos y manejar el mismo mensaje si llega dos veces.",
        breaks: [
          { title: "El punto de recepción está caído.", detail: "Si tu servidor está apagado cuando llega el mensaje, el evento puede perderse a menos que el emisor reintente." },
          { title: "Los eventos duplicados se procesan dos veces.", detail: "Los emisores suelen reintentar, así que el mismo pedido puede crearse dos veces sin una revisión de duplicados." },
          { title: "Los mensajes no se verifican.", detail: "Sin revisar la firma, cualquiera que encuentre la dirección podría enviar eventos falsos." },
          { title: "Los eventos llegan en desorden.", detail: "Una actualización puede llegar antes que la creación, lo que confunde a sistemas que esperan una secuencia ordenada." }
        ],
        diagram: ["Ocurre un evento", "El emisor envía", "El receptor verifica", "Se ejecuta la acción"],
        faq: [
          { q: "¿Cuál es la diferencia entre un webhook y una API?", a: "Con una API, tú pides los datos cuando los quieres. Con un webhook, el otro sistema te los envía cuando ocurre un evento." },
          { q: "¿Los webhooks son seguros?", a: "Pueden serlo. Usa HTTPS, verifica la firma que incluye el emisor y mantén privada la dirección de recepción." }
        ]
      }
    }
  },
  {
    slug: "middleware",
    category: "integration",
    hub: "/automation",
    related: ["ipaas", "point-to-point-integration", "api", "legacy-system", "data-mapping"],
    copy: {
      en: {
        term: "Middleware",
        definition: "Middleware is software that sits between other applications and passes data between them, translating formats and handling the rules of the exchange.",
        explanation: "When your ERP, ecommerce store, warehouse app and accounting tool all need to share data, middleware acts as the hub in the middle. Each system connects once to the middleware instead of to every other system directly.\n\nA manufacturer with an older on-premise ERP might use middleware to take orders from a modern online portal, reshape them into the format the ERP expects, and send shipping updates back.\n\nGood middleware also logs every message, retries failures and alerts someone when something gets stuck, which beats discovering a problem when a customer calls.",
        breaks: [
          { title: "Nobody watches the error queue.", detail: "Failed messages pile up in the middleware for days because alerts go to an inbox nobody reads." },
          { title: "Business rules hide in the mappings.", detail: "Pricing or tax logic gets buried inside transformations where the business cannot see or review it." },
          { title: "It becomes a single point of failure.", detail: "If the middleware goes down, every connected flow stops at once." },
          { title: "Ownership is unclear.", detail: "IT thinks the vendor owns it and the vendor thinks IT does, so changes stall." }
        ],
        faq: [
          { q: "Is middleware the same as iPaaS?", a: "iPaaS is a type of middleware delivered as a cloud service. Middleware is the broader term and also covers software you host yourself." },
          { q: "Do small businesses need middleware?", a: "Not always. With two or three apps, built-in connectors may be enough. Middleware pays off as the number of systems and flows grows." }
        ]
      },
      fr: {
        term: "Intergiciel",
        definition: "Un intergiciel est un logiciel placé entre d'autres applications qui fait passer les données de l'une à l'autre, en traduisant les formats et en gérant les règles de l'échange.",
        explanation: "Quand votre ERP, votre boutique en ligne, votre application d'entrepôt et votre outil comptable doivent tous partager des données, l'intergiciel sert de plaque tournante au milieu. Chaque système se branche une fois à l'intergiciel plutôt que directement à tous les autres.\n\nUn fabricant avec un vieil ERP sur site peut utiliser un intergiciel pour recevoir les commandes d'un portail en ligne moderne, les remettre dans le format que l'ERP attend et renvoyer les mises à jour d'expédition.\n\nUn bon intergiciel consigne aussi chaque message, réessaie les échecs et alerte quelqu'un quand quelque chose bloque, ce qui vaut mieux que de découvrir le problème quand un client appelle.",
        breaks: [
          { title: "Personne ne surveille la file d'erreurs.", detail: "Les messages échoués s'accumulent pendant des jours parce que les alertes vont dans une boîte que personne ne lit." },
          { title: "Les règles d'affaires se cachent dans les correspondances.", detail: "La logique de prix ou de taxes est enfouie dans les transformations, là où l'entreprise ne peut ni la voir ni la réviser." },
          { title: "Il devient un point de défaillance unique.", detail: "Si l'intergiciel tombe, tous les flux reliés s'arrêtent en même temps." },
          { title: "La responsabilité n'est pas claire.", detail: "Les TI pensent que c'est le fournisseur, le fournisseur pense que ce sont les TI, et les changements restent bloqués." }
        ],
        faq: [
          { q: "Un intergiciel est-il la même chose qu'un iPaaS?", a: "L'iPaaS est un type d'intergiciel offert comme service infonuagique. Intergiciel est le terme plus large et couvre aussi les logiciels que vous hébergez vous-même." },
          { q: "Les petites entreprises ont-elles besoin d'un intergiciel?", a: "Pas toujours. Avec deux ou trois applications, les connecteurs intégrés peuvent suffire. L'intergiciel devient rentable quand le nombre de systèmes et de flux augmente." }
        ]
      },
      es: {
        term: "Middleware",
        definition: "El middleware es un software que se ubica entre otras aplicaciones y pasa datos entre ellas, traduciendo formatos y manejando las reglas del intercambio.",
        explanation: "Cuando tu ERP, tu tienda en línea, tu app de almacén y tu herramienta contable necesitan compartir datos, el middleware funciona como el centro. Cada sistema se conecta una vez al middleware en lugar de conectarse directo a todos los demás.\n\nUn fabricante con un ERP local antiguo puede usar middleware para recibir pedidos de un portal en línea moderno, darles el formato que espera el ERP y devolver las actualizaciones de envío.\n\nUn buen middleware también registra cada mensaje, reintenta las fallas y avisa a alguien cuando algo se atora, lo cual es mejor que descubrir el problema cuando llama un cliente.",
        breaks: [
          { title: "Nadie vigila la cola de errores.", detail: "Los mensajes fallidos se acumulan por días porque las alertas llegan a un buzón que nadie lee." },
          { title: "Las reglas de negocio se esconden en los mapeos.", detail: "La lógica de precios o impuestos queda enterrada en transformaciones donde el negocio no puede verla ni revisarla." },
          { title: "Se vuelve un punto único de falla.", detail: "Si el middleware se cae, todos los flujos conectados se detienen a la vez." },
          { title: "No está claro quién es el dueño.", detail: "TI cree que es del proveedor y el proveedor cree que es de TI, así que los cambios se estancan." }
        ],
        faq: [
          { q: "¿Middleware es lo mismo que iPaaS?", a: "iPaaS es un tipo de middleware que se ofrece como servicio en la nube. Middleware es el término más amplio e incluye software que alojas tú mismo." },
          { q: "¿Las empresas pequeñas necesitan middleware?", a: "No siempre. Con dos o tres apps, los conectores integrados pueden bastar. El middleware vale la pena cuando crece el número de sistemas y flujos." }
        ]
      }
    }
  },
  {
    slug: "ipaas",
    category: "integration",
    hub: "/automation",
    related: ["middleware", "api", "workflow-automation", "low-code", "point-to-point-integration"],
    copy: {
      en: {
        term: "iPaaS",
        definition: "iPaaS (integration platform as a service) is a cloud service that lets you build, run and monitor connections between applications using prebuilt connectors and visual tools.",
        explanation: "Rather than writing and hosting custom code for every integration, an iPaaS gives you a toolkit in the browser. You pick the apps, choose a trigger like \"new invoice in accounting,\" map the fields, and the platform handles running it.\n\nA mid-size retailer might use an iPaaS to push online orders into its ERP, send new customers to its email platform, and post daily sales to a reporting sheet, all without a server of its own.\n\nThe ease of building flows is also the risk: without naming rules and ownership, a business can end up with dozens of fragile flows nobody fully understands.",
        breaks: [
          { title: "Flows multiply without documentation.", detail: "Different staff build overlapping automations, and nobody knows which one updates what." },
          { title: "Connectors miss edge cases.", detail: "Prebuilt connectors handle the common fields but not your custom data or unusual order types." },
          { title: "Costs climb with volume.", detail: "Many platforms price by tasks or runs, so growth can raise the bill faster than expected." },
          { title: "Errors fail silently.", detail: "A flow that stops running may not alert anyone until a report looks wrong." }
        ],
        faq: [
          { q: "Is iPaaS only for large companies?", a: "No. Many iPaaS tools are built for small and mid-size businesses, with simple plans and visual builders." },
          { q: "What is the difference between iPaaS and building integrations in code?", a: "iPaaS is faster to set up and easier to change. Custom code gives more control for complex or high-volume needs." }
        ]
      },
      fr: {
        term: "iPaaS",
        definition: "L'iPaaS (plateforme d'intégration en tant que service) est un service infonuagique qui permet de bâtir, d'exploiter et de surveiller les connexions entre applications à l'aide de connecteurs prêts à l'emploi et d'outils visuels.",
        explanation: "Plutôt que d'écrire et d'héberger du code sur mesure pour chaque intégration, un iPaaS vous donne une boîte à outils dans le navigateur. Vous choisissez les applications, un déclencheur comme \"nouvelle facture en comptabilité\", vous associez les champs, et la plateforme s'occupe de l'exécution.\n\nUn détaillant de taille moyenne peut utiliser un iPaaS pour envoyer ses commandes en ligne dans son ERP, transmettre les nouveaux clients à sa plateforme de courriel et publier les ventes quotidiennes dans un chiffrier de rapport, le tout sans serveur à lui.\n\nLa facilité de création est aussi le risque : sans règles de nommage ni responsables, une entreprise peut se retrouver avec des dizaines de flux fragiles que personne ne comprend vraiment.",
        breaks: [
          { title: "Les flux se multiplient sans documentation.", detail: "Différents employés créent des automatisations qui se chevauchent, et personne ne sait laquelle met à jour quoi." },
          { title: "Les connecteurs ratent des cas particuliers.", detail: "Les connecteurs prêts à l'emploi gèrent les champs courants, mais pas vos données personnalisées ni les types de commandes inhabituels." },
          { title: "Les coûts montent avec le volume.", detail: "Beaucoup de plateformes facturent par tâche ou par exécution, donc la croissance peut faire grimper la facture plus vite que prévu." },
          { title: "Les erreurs passent inaperçues.", detail: "Un flux qui cesse de rouler peut n'alerter personne jusqu'à ce qu'un rapport semble faux." }
        ],
        faq: [
          { q: "L'iPaaS est-il seulement pour les grandes entreprises?", a: "Non. Beaucoup d'outils iPaaS sont conçus pour les petites et moyennes entreprises, avec des forfaits simples et des éditeurs visuels." },
          { q: "Quelle est la différence entre l'iPaaS et des intégrations codées?", a: "L'iPaaS est plus rapide à mettre en place et plus facile à changer. Le code sur mesure donne plus de contrôle pour les besoins complexes ou à fort volume." }
        ]
      },
      es: {
        term: "iPaaS",
        definition: "El iPaaS (plataforma de integración como servicio) es un servicio en la nube que permite construir, operar y vigilar conexiones entre aplicaciones con conectores ya hechos y herramientas visuales.",
        explanation: "En lugar de escribir y alojar código a la medida para cada integración, un iPaaS te da una caja de herramientas en el navegador. Eliges las apps, un disparador como \"nueva factura en contabilidad\", mapeas los campos y la plataforma se encarga de ejecutarlo.\n\nUn minorista mediano puede usar un iPaaS para enviar pedidos en línea a su ERP, mandar clientes nuevos a su plataforma de correo y publicar las ventas diarias en una hoja de reportes, todo sin un servidor propio.\n\nLa facilidad para crear flujos también es el riesgo: sin reglas de nombres ni responsables, una empresa puede terminar con decenas de flujos frágiles que nadie entiende del todo.",
        breaks: [
          { title: "Los flujos se multiplican sin documentación.", detail: "Distintas personas crean automatizaciones que se traslapan, y nadie sabe cuál actualiza qué." },
          { title: "Los conectores omiten casos especiales.", detail: "Los conectores ya hechos manejan los campos comunes pero no tus datos personalizados ni tipos de pedido poco usuales." },
          { title: "Los costos suben con el volumen.", detail: "Muchas plataformas cobran por tarea o ejecución, así que el crecimiento puede subir la factura más rápido de lo esperado." },
          { title: "Los errores fallan en silencio.", detail: "Un flujo que deja de correr puede no avisar a nadie hasta que un reporte se ve mal." }
        ],
        faq: [
          { q: "¿El iPaaS es solo para empresas grandes?", a: "No. Muchas herramientas iPaaS están hechas para pequeñas y medianas empresas, con planes simples y editores visuales." },
          { q: "¿Cuál es la diferencia entre iPaaS e integraciones programadas?", a: "El iPaaS es más rápido de configurar y más fácil de cambiar. El código a la medida da más control para necesidades complejas o de alto volumen." }
        ]
      }
    }
  },
  {
    slug: "edi",
    category: "integration",
    hub: "/automation",
    related: ["purchase-order", "data-mapping", "middleware", "order-to-cash", "procure-to-pay"],
    copy: {
      en: {
        term: "EDI",
        definition: "EDI (electronic data interchange) is a standard way for businesses to exchange documents like purchase orders, invoices and shipping notices computer to computer in a fixed format.",
        explanation: "Large retailers and distributors often require suppliers to send and receive documents through EDI instead of email or PDFs. Each document type has a standard code and layout, such as ANSI X12 in North America or EDIFACT in many other countries, so both sides' systems can read it without retyping.\n\nA small food manufacturer selling to a grocery chain might receive purchase orders by EDI, send back an acknowledgment, ship with an advance ship notice and then invoice, all in set formats.\n\nEDI is reliable but strict. A missing field or late notice can lead to rejected documents or chargebacks from the trading partner.",
        breaks: [
          { title: "Each trading partner has its own rules.", detail: "Even within one standard, partners add their own requirements, so one map does not fit all." },
          { title: "EDI is not connected to the ERP.", detail: "Orders arrive electronically but staff still key them in by hand, losing most of the benefit." },
          { title: "Rejections go unnoticed.", detail: "Error acknowledgments sit in a portal nobody checks until a partner complains or charges back." },
          { title: "Item and unit codes do not match.", detail: "The partner's item numbers or pack sizes differ from yours and need careful cross-referencing." }
        ],
        faq: [
          { q: "Is EDI outdated now that APIs exist?", a: "Not in retail, grocery and logistics, where EDI is still widely required. Many businesses run both EDI and APIs side by side." },
          { q: "What is an 850 or 810?", a: "They are X12 document codes. An 850 is a purchase order and an 810 is an invoice." }
        ]
      },
      fr: {
        term: "EDI",
        definition: "L'EDI (échange de données informatisé) est une façon standard pour les entreprises d'échanger des documents comme des bons de commande, des factures et des avis d'expédition d'ordinateur à ordinateur dans un format fixe.",
        explanation: "Les grands détaillants et distributeurs exigent souvent que leurs fournisseurs envoient et reçoivent leurs documents par EDI plutôt que par courriel ou en PDF. Chaque type de document a un code et une structure standard, comme ANSI X12 en Amérique du Nord ou EDIFACT dans beaucoup d'autres pays, pour que les systèmes des deux côtés puissent le lire sans ressaisie.\n\nUn petit fabricant alimentaire qui vend à une chaîne d'épiceries peut recevoir les bons de commande par EDI, renvoyer un accusé de réception, expédier avec un avis d'expédition préalable, puis facturer, le tout dans des formats établis.\n\nL'EDI est fiable mais strict. Un champ manquant ou un avis en retard peut entraîner des documents rejetés ou des pénalités du partenaire.",
        breaks: [
          { title: "Chaque partenaire a ses propres règles.", detail: "Même avec une seule norme, les partenaires ajoutent leurs exigences, donc une seule correspondance ne convient pas à tous." },
          { title: "L'EDI n'est pas relié à l'ERP.", detail: "Les commandes arrivent électroniquement, mais les employés les ressaisissent à la main et perdent la plus grande partie de l'avantage." },
          { title: "Les rejets passent inaperçus.", detail: "Les accusés d'erreur restent dans un portail que personne ne consulte jusqu'à ce qu'un partenaire se plaigne ou impose une pénalité." },
          { title: "Les codes d'articles et d'unités ne correspondent pas.", detail: "Les numéros d'articles ou les formats d'emballage du partenaire diffèrent des vôtres et demandent une table de correspondance soignée." }
        ],
        faq: [
          { q: "L'EDI est-il dépassé maintenant qu'il existe des API?", a: "Pas dans le commerce de détail, l'épicerie et la logistique, où l'EDI est encore largement exigé. Beaucoup d'entreprises utilisent l'EDI et les API côte à côte." },
          { q: "Qu'est-ce qu'un 850 ou un 810?", a: "Ce sont des codes de documents X12. Un 850 est un bon de commande et un 810 est une facture." }
        ]
      },
      es: {
        term: "EDI",
        definition: "El EDI (intercambio electrónico de datos) es una forma estándar en que las empresas intercambian documentos como órdenes de compra, facturas y avisos de envío de computadora a computadora en un formato fijo.",
        explanation: "Los grandes minoristas y distribuidores suelen exigir que sus proveedores envíen y reciban documentos por EDI en lugar de correo o PDF. Cada tipo de documento tiene un código y una estructura estándar, como ANSI X12 en Norteamérica o EDIFACT en muchos otros países, para que los sistemas de ambos lados lo lean sin recapturar.\n\nUn pequeño fabricante de alimentos que vende a una cadena de supermercados puede recibir órdenes de compra por EDI, devolver un acuse, enviar con un aviso anticipado de embarque y luego facturar, todo en formatos establecidos.\n\nEl EDI es confiable pero estricto. Un campo faltante o un aviso tardío puede causar documentos rechazados o penalizaciones del socio comercial.",
        breaks: [
          { title: "Cada socio comercial tiene sus propias reglas.", detail: "Aun dentro de un mismo estándar, los socios agregan requisitos, así que un solo mapeo no sirve para todos." },
          { title: "El EDI no está conectado al ERP.", detail: "Los pedidos llegan de forma electrónica pero el personal los captura a mano, y se pierde casi todo el beneficio." },
          { title: "Los rechazos pasan desapercibidos.", detail: "Los acuses de error se quedan en un portal que nadie revisa hasta que un socio se queja o aplica una penalización." },
          { title: "Los códigos de artículo y unidad no coinciden.", detail: "Los números de artículo o tamaños de empaque del socio son distintos a los tuyos y requieren una tabla de equivalencias cuidadosa." }
        ],
        faq: [
          { q: "¿El EDI ya es obsoleto ahora que existen las API?", a: "No en comercio minorista, supermercados y logística, donde el EDI todavía se exige mucho. Muchas empresas usan EDI y API al mismo tiempo." },
          { q: "¿Qué es un 850 o un 810?", a: "Son códigos de documentos X12. Un 850 es una orden de compra y un 810 es una factura." }
        ]
      }
    }
  },
  {
    slug: "etl",
    category: "integration",
    hub: "/automation",
    related: ["data-pipeline", "data-warehouse", "data-mapping", "batch-sync", "data-quality"],
    copy: {
      en: {
        term: "ETL",
        definition: "ETL (extract, transform, load) is a process that pulls data from source systems, cleans and reshapes it, and loads it into a target such as a data warehouse.",
        explanation: "Each system stores data its own way. ETL brings it together. First you extract records from places like your ERP, CRM and online store. Then you transform them: fix formats, match customer IDs, convert currencies. Finally you load the result into one place for reporting.\n\nA distributor might run ETL every night so the morning sales dashboard combines orders, returns and margin across all channels.\n\nA close cousin, ELT, loads raw data first and transforms it inside the warehouse. The goal is the same: data you can trust in one place.",
        breaks: [
          { title: "Source systems change without notice.", detail: "A renamed field or new status code in the ERP breaks the transform step and the reports go blank." },
          { title: "Bad data passes straight through.", detail: "Without checks, duplicates and blank values flow into reports that leaders then rely on." },
          { title: "Jobs fail overnight with no alert.", detail: "Nobody notices a failed load until someone asks why yesterday's numbers are missing." },
          { title: "Transform logic is undocumented.", detail: "Rules about what counts as revenue or an active customer live only in code." }
        ],
        diagram: ["Extract from sources", "Transform and clean", "Load to warehouse", "Report and review"],
        faq: [
          { q: "What is the difference between ETL and ELT?", a: "ETL transforms data before loading it. ELT loads raw data first and transforms it inside the warehouse, which modern cloud warehouses handle well." },
          { q: "How often should ETL run?", a: "It depends on how fresh the reports need to be. Nightly is common for management reports, while some flows run every few minutes." }
        ]
      },
      fr: {
        term: "ETL",
        definition: "L'ETL (extraction, transformation, chargement) est un processus qui puise les données dans les systèmes sources, les nettoie et les remodèle, puis les charge dans une cible comme un entrepôt de données.",
        explanation: "Chaque système range ses données à sa façon. L'ETL les rassemble. D'abord, on extrait les fiches d'endroits comme votre ERP, votre CRM et votre boutique en ligne. Ensuite, on les transforme : corriger les formats, associer les numéros de clients, convertir les devises. Enfin, on charge le résultat dans un seul endroit pour les rapports.\n\nUn distributeur peut exécuter l'ETL chaque nuit pour que le tableau de bord des ventes du matin combine commandes, retours et marges de tous les canaux.\n\nUn proche cousin, l'ELT, charge d'abord les données brutes et les transforme dans l'entrepôt. Le but reste le même : des données fiables au même endroit.",
        breaks: [
          { title: "Les systèmes sources changent sans avertissement.", detail: "Un champ renommé ou un nouveau code de statut dans l'ERP brise l'étape de transformation et les rapports se vident." },
          { title: "Les mauvaises données passent tout droit.", detail: "Sans contrôles, les doublons et les valeurs vides se retrouvent dans des rapports sur lesquels la direction s'appuie." },
          { title: "Les traitements échouent la nuit sans alerte.", detail: "Personne ne remarque un chargement raté avant que quelqu'un demande pourquoi les chiffres d'hier manquent." },
          { title: "La logique de transformation n'est pas documentée.", detail: "Les règles sur ce qui compte comme revenu ou comme client actif vivent seulement dans le code." }
        ],
        diagram: ["Extraire des sources", "Transformer et nettoyer", "Charger dans l'entrepôt", "Analyser les rapports"],
        faq: [
          { q: "Quelle est la différence entre ETL et ELT?", a: "L'ETL transforme les données avant de les charger. L'ELT charge d'abord les données brutes et les transforme dans l'entrepôt, ce que les entrepôts infonuagiques modernes font bien." },
          { q: "À quelle fréquence l'ETL devrait-il s'exécuter?", a: "Cela dépend de la fraîcheur voulue des rapports. Chaque nuit est courant pour les rapports de gestion, alors que certains flux roulent aux quelques minutes." }
        ]
      },
      es: {
        term: "ETL",
        definition: "El ETL (extraer, transformar, cargar) es un proceso que toma datos de los sistemas de origen, los limpia y les da forma, y los carga en un destino como un data warehouse.",
        explanation: "Cada sistema guarda los datos a su manera. El ETL los reúne. Primero extraes registros de lugares como tu ERP, tu CRM y tu tienda en línea. Luego los transformas: corriges formatos, empatas los ID de clientes, conviertes monedas. Por último cargas el resultado en un solo lugar para reportes.\n\nUn distribuidor puede correr el ETL cada noche para que el tablero de ventas de la mañana combine pedidos, devoluciones y margen de todos los canales.\n\nUn pariente cercano, el ELT, carga primero los datos crudos y los transforma dentro del data warehouse. La meta es la misma: datos confiables en un solo lugar.",
        breaks: [
          { title: "Los sistemas de origen cambian sin aviso.", detail: "Un campo renombrado o un nuevo código de estado en el ERP rompe el paso de transformación y los reportes quedan vacíos." },
          { title: "Los datos malos pasan directo.", detail: "Sin revisiones, duplicados y valores vacíos llegan a reportes en los que confía la dirección." },
          { title: "Los procesos fallan de noche sin alerta.", detail: "Nadie nota una carga fallida hasta que alguien pregunta por qué faltan los números de ayer." },
          { title: "La lógica de transformación no está documentada.", detail: "Las reglas sobre qué cuenta como ingreso o como cliente activo solo viven en el código." }
        ],
        diagram: ["Extraer de fuentes", "Transformar y limpiar", "Cargar al warehouse", "Revisar reportes"],
        faq: [
          { q: "¿Cuál es la diferencia entre ETL y ELT?", a: "El ETL transforma los datos antes de cargarlos. El ELT carga primero los datos crudos y los transforma dentro del warehouse, algo que los warehouses modernos en la nube hacen bien." },
          { q: "¿Cada cuánto debe correr el ETL?", a: "Depende de qué tan frescos deben estar los reportes. Cada noche es común para reportes de gestión, y algunos flujos corren cada pocos minutos." }
        ]
      }
    }
  },
  {
    slug: "data-mapping",
    category: "integration",
    hub: "/automation",
    related: ["data-migration", "etl", "edi", "master-data", "middleware"],
    copy: {
      en: {
        term: "Data mapping",
        definition: "Data mapping is the work of matching each field in one system to the right field in another, including any rules needed to convert values between them.",
        explanation: "Two systems rarely describe the same thing the same way. One calls it \"Ship-to\" and splits the address into five fields; the other has one long address box. One uses \"EA\" for each, the other \"Unit.\" Data mapping writes down exactly how every field translates.\n\nWhen a distributor connects its online store to its ERP, the map might say: store order number goes to ERP customer PO, store tax lines roll up to one ERP tax code, and store product handles match ERP SKUs through a lookup table.\n\nA clear map, reviewed by the people who use the data, prevents most integration and migration surprises.",
        breaks: [
          { title: "Values are mapped but meanings are not.", detail: "Both systems have a status field, but \"closed\" means paid in one and shipped in the other." },
          { title: "Lookup tables go stale.", detail: "New products, tax codes or customers are added in one system but not to the cross-reference table." },
          { title: "Blank and default values are ignored.", detail: "A field that is optional in the source but required in the target causes rejected records." },
          { title: "Only IT reviews the map.", detail: "Without input from finance and operations, business rules hidden in the data get mapped wrong." }
        ],
        diagram: ["List source fields", "Match target fields", "Define conversion rules", "Test with real records"],
        faq: [
          { q: "What tool do I need for data mapping?", a: "A spreadsheet is often enough to start. Integration and migration tools then let you build the map directly into the flow." },
          { q: "Who should own the data map?", a: "A business owner for the data, such as the controller for financial fields, paired with whoever builds the integration." }
        ]
      },
      fr: {
        term: "Correspondance des données",
        definition: "La correspondance des données est le travail qui consiste à associer chaque champ d'un système au bon champ d'un autre, y compris les règles nécessaires pour convertir les valeurs entre eux.",
        explanation: "Deux systèmes décrivent rarement la même chose de la même façon. L'un l'appelle \"Livrer à\" et divise l'adresse en cinq champs; l'autre a une seule longue case d'adresse. L'un utilise \"UN\" pour unité, l'autre \"Pièce\". La correspondance des données note exactement comment chaque champ se traduit.\n\nQuand un distributeur relie sa boutique en ligne à son ERP, la correspondance peut indiquer : le numéro de commande de la boutique va au numéro de bon de commande client de l'ERP, les lignes de taxes de la boutique se regroupent sous un code de taxe de l'ERP, et les identifiants produits de la boutique correspondent aux SKU de l'ERP au moyen d'une table de référence.\n\nUne correspondance claire, révisée par les gens qui utilisent les données, évite la plupart des surprises d'intégration et de migration.",
        breaks: [
          { title: "Les valeurs sont associées, mais pas leur sens.", detail: "Les deux systèmes ont un champ de statut, mais \"fermé\" veut dire payé dans l'un et expédié dans l'autre." },
          { title: "Les tables de référence vieillissent.", detail: "De nouveaux produits, codes de taxe ou clients sont ajoutés dans un système, mais pas dans la table de correspondance." },
          { title: "Les valeurs vides et par défaut sont ignorées.", detail: "Un champ facultatif dans la source mais obligatoire dans la cible fait rejeter des fiches." },
          { title: "Seules les TI révisent la correspondance.", detail: "Sans l'avis de la finance et des opérations, des règles d'affaires cachées dans les données sont mal associées." }
        ],
        diagram: ["Lister les champs sources", "Associer les champs cibles", "Définir les conversions", "Tester avec de vraies fiches"],
        faq: [
          { q: "Quel outil faut-il pour la correspondance des données?", a: "Un chiffrier suffit souvent pour commencer. Les outils d'intégration et de migration permettent ensuite d'intégrer la correspondance directement au flux." },
          { q: "Qui devrait être responsable de la correspondance?", a: "Un responsable d'affaires des données, comme le contrôleur pour les champs financiers, jumelé à la personne qui bâtit l'intégration." }
        ]
      },
      es: {
        term: "Mapeo de datos",
        definition: "El mapeo de datos es el trabajo de emparejar cada campo de un sistema con el campo correcto de otro, incluidas las reglas necesarias para convertir valores entre ellos.",
        explanation: "Dos sistemas rara vez describen lo mismo de la misma manera. Uno lo llama \"Enviar a\" y divide la dirección en cinco campos; el otro tiene un solo cuadro largo. Uno usa \"PZA\" para pieza y el otro \"Unidad\". El mapeo de datos deja por escrito cómo se traduce cada campo.\n\nCuando un distribuidor conecta su tienda en línea con su ERP, el mapeo puede decir: el número de pedido de la tienda va a la orden de compra del cliente en el ERP, las líneas de impuestos de la tienda se agrupan en un código de impuesto del ERP, y los identificadores de producto de la tienda se emparejan con los SKU del ERP mediante una tabla de equivalencias.\n\nUn mapeo claro, revisado por quienes usan los datos, evita la mayoría de las sorpresas en integraciones y migraciones.",
        breaks: [
          { title: "Se mapean los valores pero no su significado.", detail: "Ambos sistemas tienen un campo de estado, pero \"cerrado\" significa pagado en uno y enviado en el otro." },
          { title: "Las tablas de equivalencias se desactualizan.", detail: "Se agregan productos, códigos de impuesto o clientes en un sistema pero no en la tabla de equivalencias." },
          { title: "Se ignoran los valores vacíos y predeterminados.", detail: "Un campo opcional en el origen pero obligatorio en el destino causa registros rechazados." },
          { title: "Solo TI revisa el mapeo.", detail: "Sin la opinión de finanzas y operaciones, las reglas de negocio ocultas en los datos se mapean mal." }
        ],
        diagram: ["Listar campos origen", "Emparejar campos destino", "Definir reglas de conversión", "Probar con registros reales"],
        faq: [
          { q: "¿Qué herramienta necesito para el mapeo de datos?", a: "Una hoja de cálculo suele bastar para empezar. Luego las herramientas de integración y migración permiten incluir el mapeo directo en el flujo." },
          { q: "¿Quién debe ser dueño del mapeo?", a: "Un responsable de negocio de los datos, como el contralor para los campos financieros, junto con quien construye la integración." }
        ]
      }
    }
  },
  {
    slug: "rate-limit",
    category: "integration",
    hub: "/automation",
    related: ["api", "rest-api", "batch-sync", "real-time-sync", "idempotency"],
    copy: {
      en: {
        term: "Rate limit",
        definition: "A rate limit is a cap a system sets on how many API requests a caller can make in a given time, such as per second, minute or day.",
        explanation: "Vendors use rate limits to keep their service stable for everyone. If your integration sends more requests than allowed, the API starts refusing them, often with an error code 429 that means \"too many requests.\"\n\nA retailer might sync 500 product updates at once after a price change and suddenly find half of them rejected. The fix is usually to slow down, group updates into fewer calls, or spread the work over time.\n\nBefore building an integration, check the vendor's documented limits and compare them to your busiest day, not your average one.",
        breaks: [
          { title: "Limits are tested on a quiet day.", detail: "Integrations work in testing and fail during a sale, month end or seasonal peak." },
          { title: "Rejected calls are not retried.", detail: "When the API says \"slow down,\" code that does not wait and retry simply drops the data." },
          { title: "Several tools share one limit.", detail: "Your ecommerce app, reporting tool and iPaaS may all draw from the same account allowance." },
          { title: "Each record gets its own call.", detail: "Updating items one at a time burns through limits when a bulk endpoint would do it in a few requests." }
        ],
        faq: [
          { q: "What does a 429 error mean?", a: "It means too many requests. The caller has hit the rate limit and should wait before trying again." },
          { q: "Can I pay for a higher rate limit?", a: "Some vendors offer higher limits on bigger plans or by request. Check the vendor's pricing and documentation." }
        ]
      },
      fr: {
        term: "Limite de débit",
        definition: "Une limite de débit est un plafond qu'un système fixe sur le nombre de requêtes API qu'un appelant peut faire dans un temps donné, par exemple par seconde, par minute ou par jour.",
        explanation: "Les fournisseurs utilisent des limites de débit pour garder leur service stable pour tout le monde. Si votre intégration envoie plus de requêtes que permis, l'API commence à les refuser, souvent avec le code d'erreur 429 qui veut dire \"trop de requêtes\".\n\nUn détaillant peut synchroniser 500 mises à jour de produits d'un coup après un changement de prix et voir soudain la moitié rejetée. La solution consiste habituellement à ralentir, à regrouper les mises à jour en moins d'appels ou à étaler le travail dans le temps.\n\nAvant de bâtir une intégration, vérifiez les limites documentées du fournisseur et comparez-les à votre journée la plus occupée, pas à une journée moyenne.",
        breaks: [
          { title: "Les limites sont testées un jour tranquille.", detail: "Les intégrations fonctionnent en test et échouent pendant une solde, une fin de mois ou une haute saison." },
          { title: "Les appels refusés ne sont pas relancés.", detail: "Quand l'API dit de ralentir, un code qui n'attend pas pour réessayer laisse tout simplement tomber les données." },
          { title: "Plusieurs outils partagent une même limite.", detail: "Votre application de commerce en ligne, votre outil de rapports et votre iPaaS peuvent tous puiser dans la même allocation de compte." },
          { title: "Chaque fiche a son propre appel.", detail: "Mettre à jour les articles un à un épuise les limites alors qu'un point d'accès en lot le ferait en quelques requêtes." }
        ],
        faq: [
          { q: "Que veut dire une erreur 429?", a: "Elle veut dire trop de requêtes. L'appelant a atteint la limite de débit et doit attendre avant de réessayer." },
          { q: "Puis-je payer pour une limite plus élevée?", a: "Certains fournisseurs offrent des limites plus élevées dans des forfaits supérieurs ou sur demande. Consultez la tarification et la documentation du fournisseur." }
        ]
      },
      es: {
        term: "Límite de tasa",
        definition: "Un límite de tasa es un tope que un sistema fija a cuántas peticiones de API puede hacer quien llama en un tiempo dado, por ejemplo por segundo, por minuto o por día.",
        explanation: "Los proveedores usan límites de tasa para mantener su servicio estable para todos. Si tu integración envía más peticiones de las permitidas, la API empieza a rechazarlas, a menudo con el código de error 429, que significa \"demasiadas peticiones\".\n\nUn minorista puede sincronizar 500 actualizaciones de producto de golpe tras un cambio de precios y de pronto ver la mitad rechazadas. La solución suele ser ir más despacio, agrupar las actualizaciones en menos llamadas o repartir el trabajo en el tiempo.\n\nAntes de construir una integración, revisa los límites documentados del proveedor y compáralos con tu día más ocupado, no con un día promedio.",
        breaks: [
          { title: "Los límites se prueban en un día tranquilo.", detail: "Las integraciones funcionan en pruebas y fallan durante una promoción, un cierre de mes o una temporada alta." },
          { title: "Las llamadas rechazadas no se reintentan.", detail: "Cuando la API pide ir más lento, el código que no espera y reintenta simplemente pierde los datos." },
          { title: "Varias herramientas comparten un límite.", detail: "Tu app de comercio en línea, tu herramienta de reportes y tu iPaaS pueden usar la misma cuota de la cuenta." },
          { title: "Cada registro usa su propia llamada.", detail: "Actualizar artículos uno por uno agota los límites cuando un punto de acceso masivo lo haría en pocas peticiones." }
        ],
        faq: [
          { q: "¿Qué significa un error 429?", a: "Significa demasiadas peticiones. Quien llama alcanzó el límite de tasa y debe esperar antes de intentar de nuevo." },
          { q: "¿Puedo pagar por un límite más alto?", a: "Algunos proveedores ofrecen límites más altos en planes mayores o a solicitud. Revisa los precios y la documentación del proveedor." }
        ]
      }
    }
  },
  {
    slug: "idempotency",
    category: "integration",
    hub: "/automation",
    related: ["rest-api", "webhook", "duplicate-records", "exception-handling", "rate-limit"],
    copy: {
      en: {
        term: "Idempotency",
        definition: "Idempotency is the property of an operation that gives the same result whether it runs once or several times, so repeating it does not create duplicates.",
        explanation: "Networks are unreliable. An integration sends \"create this invoice,\" the connection drops, and it is unclear whether the invoice was made. If the integration retries and the operation is not idempotent, you now have two invoices and an unhappy customer.\n\nA common fix is an idempotency key: a unique ID sent with each request. If the receiving system has already seen that ID, it returns the original result instead of doing the work again.\n\nFor a wholesaler syncing orders and payments, idempotency is what lets retries be safe, which in turn lets the integration recover from glitches on its own.",
        breaks: [
          { title: "Retries create duplicate records.", detail: "Without a unique key, every timeout risks a second order, payment or shipment." },
          { title: "The key is not truly unique.", detail: "Using something like a date or customer name as the key causes different requests to collide." },
          { title: "Keys expire too soon.", detail: "Some systems only remember keys for a short window, so late retries slip through as new requests." },
          { title: "Webhook receivers skip the check.", detail: "Senders deliver the same event more than once, and receivers that do not track event IDs process it twice." }
        ],
        faq: [
          { q: "Which actions need idempotency most?", a: "Anything that creates or moves money or goods, such as orders, payments, refunds and shipments." },
          { q: "Are GET requests idempotent?", a: "By design, yes. Reading data should not change it, so repeating a GET is safe." }
        ]
      },
      fr: {
        term: "Idempotence",
        definition: "L'idempotence est la propriété d'une opération qui donne le même résultat qu'elle s'exécute une fois ou plusieurs fois, si bien que la répéter ne crée pas de doublons.",
        explanation: "Les réseaux ne sont pas fiables. Une intégration envoie \"crée cette facture\", la connexion coupe, et on ne sait pas si la facture a été faite. Si l'intégration réessaie et que l'opération n'est pas idempotente, vous avez maintenant deux factures et un client mécontent.\n\nUne solution courante est la clé d'idempotence : un identifiant unique envoyé avec chaque requête. Si le système qui reçoit a déjà vu cet identifiant, il renvoie le résultat original au lieu de refaire le travail.\n\nPour un grossiste qui synchronise commandes et paiements, l'idempotence rend les nouvelles tentatives sûres, ce qui permet à l'intégration de se remettre seule des pépins.",
        breaks: [
          { title: "Les nouvelles tentatives créent des doublons.", detail: "Sans clé unique, chaque délai dépassé risque de créer une deuxième commande, un deuxième paiement ou une deuxième expédition." },
          { title: "La clé n'est pas vraiment unique.", detail: "Utiliser une date ou un nom de client comme clé fait entrer en collision des requêtes différentes." },
          { title: "Les clés expirent trop tôt.", detail: "Certains systèmes ne retiennent les clés que peu de temps, donc les tentatives tardives passent comme de nouvelles requêtes." },
          { title: "Les récepteurs de webhooks sautent la vérification.", detail: "Les expéditeurs livrent parfois le même événement plus d'une fois, et les récepteurs qui ne suivent pas les identifiants le traitent deux fois." }
        ],
        faq: [
          { q: "Quelles actions ont le plus besoin d'idempotence?", a: "Tout ce qui crée ou déplace de l'argent ou des marchandises, comme les commandes, les paiements, les remboursements et les expéditions." },
          { q: "Les requêtes GET sont-elles idempotentes?", a: "Par conception, oui. Lire des données ne devrait pas les changer, donc répéter un GET est sans danger." }
        ]
      },
      es: {
        term: "Idempotencia",
        definition: "La idempotencia es la propiedad de una operación que da el mismo resultado si se ejecuta una vez o varias, de modo que repetirla no crea duplicados.",
        explanation: "Las redes no son confiables. Una integración envía \"crea esta factura\", la conexión se cae y no queda claro si la factura se creó. Si la integración reintenta y la operación no es idempotente, ahora tienes dos facturas y un cliente molesto.\n\nUna solución común es la clave de idempotencia: un ID único que se envía con cada petición. Si el sistema que recibe ya vio ese ID, devuelve el resultado original en lugar de repetir el trabajo.\n\nPara un mayorista que sincroniza pedidos y pagos, la idempotencia hace que los reintentos sean seguros, y eso permite que la integración se recupere sola de las fallas.",
        breaks: [
          { title: "Los reintentos crean registros duplicados.", detail: "Sin una clave única, cada tiempo de espera agotado arriesga un segundo pedido, pago o envío." },
          { title: "La clave no es realmente única.", detail: "Usar algo como una fecha o el nombre del cliente como clave hace que peticiones distintas choquen." },
          { title: "Las claves expiran demasiado pronto.", detail: "Algunos sistemas solo recuerdan las claves por poco tiempo, así que los reintentos tardíos pasan como peticiones nuevas." },
          { title: "Los receptores de webhooks no hacen la revisión.", detail: "Los emisores entregan el mismo evento más de una vez, y los receptores que no guardan los ID de evento lo procesan dos veces." }
        ],
        faq: [
          { q: "¿Qué acciones necesitan más la idempotencia?", a: "Todo lo que crea o mueve dinero o mercancía, como pedidos, pagos, reembolsos y envíos." },
          { q: "¿Las peticiones GET son idempotentes?", a: "Por diseño, sí. Leer datos no debería cambiarlos, así que repetir un GET es seguro." }
        ]
      }
    }
  },
  {
    slug: "point-to-point-integration",
    category: "integration",
    hub: "/automation",
    related: ["middleware", "ipaas", "technical-debt", "api", "event-driven-architecture"],
    copy: {
      en: {
        term: "Point-to-point integration",
        definition: "A point-to-point integration is a direct connection built between two specific applications so they can exchange data without a central hub.",
        explanation: "The first integration most businesses build is point to point: the online store talks straight to the accounting system. It is quick and cheap, and for two systems it works fine.\n\nThe trouble shows up as you grow. Add a warehouse app, a CRM and a marketplace, and each one needs its own links to the others. Five systems can mean up to ten separate connections, each with its own logic, credentials and failure modes. People call this spaghetti integration.\n\nAt that point, moving to middleware or an iPaaS, where each system connects once to a hub, usually becomes easier to manage.",
        breaks: [
          { title: "Connections multiply quickly.", detail: "Every new system needs links to several existing ones, and the count grows faster than the number of apps." },
          { title: "One change ripples everywhere.", detail: "Replacing a single system means rebuilding every direct link that touched it." },
          { title: "Monitoring is scattered.", detail: "Each connection logs errors in its own place, so there is no single view of what failed." },
          { title: "Logic is duplicated.", detail: "The same customer or tax rule gets rebuilt in several integrations and drifts apart." }
        ],
        faq: [
          { q: "Is point-to-point integration bad?", a: "No. For a few systems with simple needs it is often the right choice. It becomes a problem as systems and flows multiply." },
          { q: "What is the alternative?", a: "A hub approach, using middleware or an iPaaS, where each system connects once and the hub routes data between them." }
        ]
      },
      fr: {
        term: "Intégration point à point",
        definition: "Une intégration point à point est une connexion directe bâtie entre deux applications précises pour qu'elles échangent des données sans plaque tournante centrale.",
        explanation: "La première intégration que bâtissent la plupart des entreprises est point à point : la boutique en ligne parle directement au système comptable. C'est rapide et peu coûteux, et pour deux systèmes, ça fonctionne bien.\n\nLe problème apparaît avec la croissance. Ajoutez une application d'entrepôt, un CRM et une place de marché, et chacun a besoin de ses propres liens vers les autres. Cinq systèmes peuvent donner jusqu'à dix connexions séparées, chacune avec sa logique, ses identifiants et ses pannes. On appelle ça une intégration spaghetti.\n\nÀ ce stade, passer à un intergiciel ou à un iPaaS, où chaque système se branche une seule fois à une plaque tournante, devient habituellement plus simple à gérer.",
        breaks: [
          { title: "Les connexions se multiplient vite.", detail: "Chaque nouveau système a besoin de liens vers plusieurs systèmes existants, et le total croît plus vite que le nombre d'applications." },
          { title: "Un changement se répercute partout.", detail: "Remplacer un seul système oblige à rebâtir chaque lien direct qui le touchait." },
          { title: "La surveillance est éparpillée.", detail: "Chaque connexion consigne ses erreurs à son propre endroit, donc il n'y a pas de vue unique de ce qui a échoué." },
          { title: "La logique est dédoublée.", detail: "La même règle de client ou de taxe est refaite dans plusieurs intégrations et finit par diverger." }
        ],
        faq: [
          { q: "L'intégration point à point est-elle mauvaise?", a: "Non. Pour quelques systèmes aux besoins simples, c'est souvent le bon choix. Elle devient un problème quand les systèmes et les flux se multiplient." },
          { q: "Quelle est l'autre option?", a: "Une approche par plaque tournante, avec un intergiciel ou un iPaaS, où chaque système se branche une fois et la plateforme achemine les données." }
        ]
      },
      es: {
        term: "Integración punto a punto",
        definition: "Una integración punto a punto es una conexión directa construida entre dos aplicaciones específicas para que intercambien datos sin un centro de integración.",
        explanation: "La primera integración que construyen la mayoría de las empresas es punto a punto: la tienda en línea habla directo con el sistema contable. Es rápida y barata, y para dos sistemas funciona bien.\n\nEl problema aparece al crecer. Agrega una app de almacén, un CRM y un marketplace, y cada uno necesita sus propios enlaces con los demás. Cinco sistemas pueden significar hasta diez conexiones separadas, cada una con su lógica, credenciales y formas de fallar. A esto se le llama integración espagueti.\n\nEn ese punto, pasar a un middleware o un iPaaS, donde cada sistema se conecta una vez a un centro, suele ser más fácil de administrar.",
        breaks: [
          { title: "Las conexiones se multiplican rápido.", detail: "Cada sistema nuevo necesita enlaces con varios existentes, y el total crece más rápido que el número de apps." },
          { title: "Un cambio afecta todo.", detail: "Reemplazar un solo sistema obliga a reconstruir cada enlace directo que lo tocaba." },
          { title: "El monitoreo está disperso.", detail: "Cada conexión registra sus errores en su propio lugar, así que no hay una vista única de lo que falló." },
          { title: "La lógica se duplica.", detail: "La misma regla de cliente o de impuestos se reconstruye en varias integraciones y se va separando." }
        ],
        faq: [
          { q: "¿La integración punto a punto es mala?", a: "No. Para pocos sistemas con necesidades simples suele ser la opción correcta. Se vuelve un problema cuando se multiplican los sistemas y flujos." },
          { q: "¿Cuál es la alternativa?", a: "Un enfoque de centro, con middleware o iPaaS, donde cada sistema se conecta una vez y el centro dirige los datos entre ellos." }
        ]
      }
    }
  },
  {
    slug: "event-driven-architecture",
    category: "integration",
    hub: "/automation",
    related: ["webhook", "real-time-sync", "trigger-and-action", "middleware", "idempotency"],
    copy: {
      en: {
        term: "Event-driven architecture",
        definition: "Event-driven architecture is a way of designing systems where each application announces events, like \"order shipped,\" and other applications react to them on their own.",
        explanation: "In a request-driven setup, one system calls another and waits for an answer. In an event-driven setup, a system simply announces that something happened, and any system that cares picks it up.\n\nWhen a distributor's warehouse marks an order shipped, that one event can trigger the invoice in accounting, a tracking email to the customer and a stock update on the website, without the warehouse knowing about any of them.\n\nThis makes it easier to add new reactions later without touching the original system. The trade-off is that tracing what happened across many listeners takes good logging.",
        breaks: [
          { title: "Events are poorly defined.", detail: "If \"order updated\" can mean ten different things, every listener has to guess what changed." },
          { title: "Nobody can trace a full flow.", detail: "Without shared IDs and logs, finding why one invoice was not created means searching several systems." },
          { title: "Listeners fail quietly.", detail: "One subscriber can miss events for days while the rest keep working, so the gap goes unnoticed." },
          { title: "Duplicate or out-of-order events.", detail: "Listeners that are not built to handle repeats or late arrivals create double records or wrong states." }
        ],
        diagram: ["Event announced", "Listeners notified", "Each system reacts", "Results logged"],
        faq: [
          { q: "Is event-driven architecture only for big companies?", a: "No. Using webhooks to trigger actions in other apps is a simple form of it that many small businesses already use." },
          { q: "What is a message queue?", a: "It is a service that holds events until listeners are ready to process them, so nothing is lost if a system is briefly down." }
        ]
      },
      fr: {
        term: "Architecture événementielle",
        definition: "L'architecture événementielle est une façon de concevoir les systèmes où chaque application annonce des événements, comme \"commande expédiée\", et où les autres applications y réagissent de leur côté.",
        explanation: "Dans un modèle basé sur les requêtes, un système en appelle un autre et attend une réponse. Dans un modèle événementiel, un système annonce simplement que quelque chose s'est produit, et tout système intéressé le capte.\n\nQuand l'entrepôt d'un distributeur marque une commande comme expédiée, ce seul événement peut déclencher la facture en comptabilité, un courriel de suivi au client et une mise à jour du stock sur le site Web, sans que l'entrepôt ne connaisse aucun de ces systèmes.\n\nIl devient ainsi plus facile d'ajouter de nouvelles réactions plus tard sans toucher au système d'origine. Le compromis : suivre ce qui s'est passé chez plusieurs écouteurs exige une bonne journalisation.",
        breaks: [
          { title: "Les événements sont mal définis.", detail: "Si \"commande modifiée\" peut vouloir dire dix choses, chaque écouteur doit deviner ce qui a changé." },
          { title: "Personne ne peut suivre un flux complet.", detail: "Sans identifiants et journaux partagés, trouver pourquoi une facture n'a pas été créée oblige à fouiller plusieurs systèmes." },
          { title: "Les écouteurs échouent sans bruit.", detail: "Un abonné peut manquer des événements pendant des jours pendant que les autres continuent, et l'écart passe inaperçu." },
          { title: "Des événements en double ou dans le désordre.", detail: "Les écouteurs qui ne sont pas conçus pour les répétitions ou les arrivées tardives créent des doublons ou de mauvais états." }
        ],
        diagram: ["Événement annoncé", "Écouteurs avisés", "Chaque système réagit", "Résultats consignés"],
        faq: [
          { q: "L'architecture événementielle est-elle seulement pour les grandes entreprises?", a: "Non. Utiliser des webhooks pour déclencher des actions dans d'autres applications en est une forme simple que beaucoup de petites entreprises utilisent déjà." },
          { q: "Qu'est-ce qu'une file de messages?", a: "C'est un service qui garde les événements jusqu'à ce que les écouteurs soient prêts à les traiter, pour que rien ne se perde si un système est brièvement arrêté." }
        ]
      },
      es: {
        term: "Arquitectura orientada a eventos",
        definition: "La arquitectura orientada a eventos es una forma de diseñar sistemas en la que cada aplicación anuncia eventos, como \"pedido enviado\", y las demás aplicaciones reaccionan por su cuenta.",
        explanation: "En un esquema basado en peticiones, un sistema llama a otro y espera respuesta. En un esquema orientado a eventos, un sistema solo anuncia que algo pasó, y cualquier sistema interesado lo toma.\n\nCuando el almacén de un distribuidor marca un pedido como enviado, ese único evento puede disparar la factura en contabilidad, un correo de rastreo al cliente y una actualización de inventario en el sitio web, sin que el almacén sepa de ninguno de ellos.\n\nEsto facilita agregar nuevas reacciones después sin tocar el sistema original. La contrapartida es que rastrear lo que pasó entre muchos receptores requiere buenos registros.",
        breaks: [
          { title: "Los eventos están mal definidos.", detail: "Si \"pedido actualizado\" puede significar diez cosas, cada receptor tiene que adivinar qué cambió." },
          { title: "Nadie puede rastrear un flujo completo.", detail: "Sin ID y registros compartidos, averiguar por qué no se creó una factura implica buscar en varios sistemas." },
          { title: "Los receptores fallan en silencio.", detail: "Un suscriptor puede perder eventos por días mientras los demás siguen funcionando, y nadie nota el hueco." },
          { title: "Eventos duplicados o en desorden.", detail: "Los receptores que no están hechos para repeticiones o llegadas tardías crean registros dobles o estados incorrectos." }
        ],
        diagram: ["Se anuncia el evento", "Se avisa a receptores", "Cada sistema reacciona", "Se registran resultados"],
        faq: [
          { q: "¿La arquitectura orientada a eventos es solo para empresas grandes?", a: "No. Usar webhooks para disparar acciones en otras apps es una forma simple que muchas empresas pequeñas ya usan." },
          { q: "¿Qué es una cola de mensajes?", a: "Es un servicio que guarda los eventos hasta que los receptores están listos para procesarlos, para que nada se pierda si un sistema se cae un momento." }
        ]
      }
    }
  },
  {
    slug: "batch-sync",
    category: "integration",
    hub: "/automation",
    related: ["real-time-sync", "etl", "rate-limit", "data-pipeline", "edi"],
    copy: {
      en: {
        term: "Batch sync",
        definition: "A batch sync moves data between systems in groups on a schedule, such as every hour or every night, rather than one record at a time as changes happen.",
        explanation: "Batch sync is the classic way to keep systems aligned. At set times, a job gathers everything that changed since the last run and sends it across in one go.\n\nA manufacturer might push the day's finished production into its ERP at midnight and pull updated price lists from suppliers every morning. Batching is efficient, easy to monitor and gentle on API limits.\n\nThe trade-off is delay. If stock is synced only overnight, an online store can sell items that sold out in the shop that afternoon. Many businesses mix batch for bulk data with real-time sync for time-sensitive events.",
        breaks: [
          { title: "Stale data drives decisions.", detail: "Staff act on numbers that are hours old, such as promising stock that already left." },
          { title: "One bad record stops the whole batch.", detail: "Without row-level error handling, a single invalid line can block thousands of good ones." },
          { title: "Jobs overlap.", detail: "A slow batch is still running when the next one starts, causing locks or double processing." },
          { title: "Failures surface the next morning.", detail: "Overnight jobs that fail are found only when someone notices missing data hours later." }
        ],
        diagram: ["Collect changes", "Run on schedule", "Send as group", "Log and alert"],
        faq: [
          { q: "When is batch sync the better choice?", a: "When the data is large, changes in bulk, or does not need to be up to the minute, such as nightly financial postings or weekly price updates." },
          { q: "How often should a batch run?", a: "As often as the business needs fresh data, balanced against system load and limits. Hourly and nightly are common starting points." }
        ]
      },
      fr: {
        term: "Synchronisation par lots",
        definition: "Une synchronisation par lots déplace les données entre systèmes par groupes selon un horaire, par exemple chaque heure ou chaque nuit, plutôt qu'une fiche à la fois au fil des changements.",
        explanation: "La synchronisation par lots est la façon classique de garder des systèmes alignés. À des heures fixes, un traitement rassemble tout ce qui a changé depuis la dernière exécution et l'envoie d'un coup.\n\nUn fabricant peut transférer la production terminée de la journée dans son ERP à minuit et récupérer chaque matin les listes de prix mises à jour de ses fournisseurs. Les lots sont efficaces, faciles à surveiller et doux pour les limites d'API.\n\nLe compromis, c'est le délai. Si le stock est synchronisé seulement la nuit, une boutique en ligne peut vendre des articles écoulés en magasin dans l'après-midi. Beaucoup d'entreprises combinent les lots pour les gros volumes et la synchronisation en temps réel pour les événements urgents.",
        breaks: [
          { title: "Des données périmées guident les décisions.", detail: "Les employés agissent sur des chiffres vieux de quelques heures, comme promettre un stock déjà parti." },
          { title: "Une mauvaise fiche arrête tout le lot.", detail: "Sans gestion des erreurs ligne par ligne, une seule ligne invalide peut bloquer des milliers de bonnes lignes." },
          { title: "Les traitements se chevauchent.", detail: "Un lot lent roule encore quand le suivant commence, ce qui cause des verrous ou un double traitement." },
          { title: "Les échecs apparaissent le lendemain matin.", detail: "Les traitements de nuit qui échouent ne sont découverts que lorsque quelqu'un remarque des données manquantes des heures plus tard." }
        ],
        diagram: ["Rassembler les changements", "Exécuter selon l'horaire", "Envoyer en groupe", "Consigner et alerter"],
        faq: [
          { q: "Quand la synchronisation par lots est-elle le meilleur choix?", a: "Quand les données sont volumineuses, changent en bloc ou n'ont pas besoin d'être à la minute près, comme les écritures financières de nuit ou les mises à jour de prix hebdomadaires." },
          { q: "À quelle fréquence un lot devrait-il s'exécuter?", a: "Aussi souvent que l'entreprise a besoin de données fraîches, en tenant compte de la charge et des limites des systèmes. Chaque heure et chaque nuit sont des points de départ courants." }
        ]
      },
      es: {
        term: "Sincronización por lotes",
        definition: "Una sincronización por lotes mueve datos entre sistemas en grupos según un horario, como cada hora o cada noche, en lugar de un registro a la vez conforme ocurren los cambios.",
        explanation: "La sincronización por lotes es la forma clásica de mantener los sistemas alineados. A horas fijas, un proceso junta todo lo que cambió desde la última ejecución y lo envía de una sola vez.\n\nUn fabricante puede enviar a su ERP la producción terminada del día a medianoche y traer cada mañana las listas de precios actualizadas de sus proveedores. Los lotes son eficientes, fáciles de vigilar y suaves con los límites de API.\n\nLa contrapartida es el retraso. Si el inventario solo se sincroniza de noche, una tienda en línea puede vender artículos que se agotaron en la tienda esa tarde. Muchas empresas combinan lotes para datos masivos con sincronización en tiempo real para eventos urgentes.",
        breaks: [
          { title: "Los datos viejos guían las decisiones.", detail: "El personal actúa con números de hace horas, como prometer inventario que ya salió." },
          { title: "Un registro malo detiene todo el lote.", detail: "Sin manejo de errores por fila, una sola línea inválida puede bloquear miles de líneas buenas." },
          { title: "Los procesos se traslapan.", detail: "Un lote lento sigue corriendo cuando empieza el siguiente, lo que causa bloqueos o doble procesamiento." },
          { title: "Las fallas aparecen a la mañana siguiente.", detail: "Los procesos nocturnos que fallan se descubren solo cuando alguien nota datos faltantes horas después." }
        ],
        diagram: ["Juntar cambios", "Correr según horario", "Enviar en grupo", "Registrar y alertar"],
        faq: [
          { q: "¿Cuándo conviene más la sincronización por lotes?", a: "Cuando los datos son grandes, cambian en bloque o no necesitan estar al minuto, como los asientos financieros nocturnos o las actualizaciones semanales de precios." },
          { q: "¿Cada cuánto debe correr un lote?", a: "Tan seguido como el negocio necesite datos frescos, equilibrado con la carga y los límites de los sistemas. Cada hora y cada noche son puntos de partida comunes." }
        ]
      }
    }
  },
  {
    slug: "real-time-sync",
    category: "integration",
    hub: "/automation",
    related: ["batch-sync", "webhook", "event-driven-architecture", "rate-limit", "idempotency"],
    copy: {
      en: {
        term: "Real-time sync",
        definition: "Real-time sync updates data in connected systems within seconds of a change, usually triggered by events rather than a schedule.",
        explanation: "With real-time sync, a sale in one channel shows up everywhere almost at once. When a retailer sells its last unit in store, the online listing can drop to zero before another customer clicks buy.\n\nIt usually relies on webhooks or event streams: each change fires a message, and the receiving system updates right away. That speed is valuable for stock, order status and payments, where minutes matter.\n\nReal-time is not always better. It costs more to build and monitor, can hit API limits during busy periods, and is overkill for data like monthly budgets. Choose it where delay costs money.",
        breaks: [
          { title: "Everything is made real time.", detail: "Syncing low-value data instantly adds load and complexity without real benefit." },
          { title: "Bursts hit API limits.", detail: "A flash sale can generate more updates per second than the receiving system allows." },
          { title: "Missed events are never caught up.", detail: "Without a periodic reconciliation, a dropped message leaves systems out of step indefinitely." },
          { title: "Two systems edit the same record.", detail: "Near-simultaneous changes on both sides can overwrite each other without clear rules for which wins." }
        ],
        diagram: ["Record changes", "Event fires", "Target updates", "Nightly check reconciles"],
        faq: [
          { q: "Is real-time sync truly instant?", a: "Usually it means within seconds, not zero delay. Network, queues and processing all add a little time." },
          { q: "Do I still need batch sync if I have real-time?", a: "Often yes. A scheduled check catches anything the real-time flow missed and keeps both systems aligned over time." }
        ]
      },
      fr: {
        term: "Synchronisation en temps réel",
        definition: "La synchronisation en temps réel met à jour les données des systèmes reliés quelques secondes après un changement, habituellement déclenchée par des événements plutôt que par un horaire.",
        explanation: "Avec la synchronisation en temps réel, une vente dans un canal apparaît presque aussitôt partout. Quand un détaillant vend sa dernière unité en magasin, l'annonce en ligne peut tomber à zéro avant qu'un autre client clique sur acheter.\n\nElle repose habituellement sur des webhooks ou des flux d'événements : chaque changement envoie un message, et le système qui reçoit se met à jour tout de suite. Cette vitesse est précieuse pour le stock, le statut des commandes et les paiements, où les minutes comptent.\n\nLe temps réel n'est pas toujours meilleur. Il coûte plus cher à bâtir et à surveiller, peut atteindre les limites d'API en période achalandée et est exagéré pour des données comme les budgets mensuels. Choisissez-le là où le délai coûte de l'argent.",
        breaks: [
          { title: "Tout est mis en temps réel.", detail: "Synchroniser instantanément des données de faible valeur ajoute charge et complexité sans vrai bénéfice." },
          { title: "Les pointes atteignent les limites d'API.", detail: "Une vente éclair peut générer plus de mises à jour par seconde que le système récepteur n'en permet." },
          { title: "Les événements manqués ne sont jamais rattrapés.", detail: "Sans rapprochement périodique, un message perdu laisse les systèmes décalés indéfiniment." },
          { title: "Deux systèmes modifient la même fiche.", detail: "Des changements presque simultanés des deux côtés peuvent s'écraser sans règle claire sur lequel l'emporte." }
        ],
        diagram: ["La fiche change", "L'événement part", "La cible se met à jour", "Contrôle de nuit"],
        faq: [
          { q: "La synchronisation en temps réel est-elle vraiment instantanée?", a: "Habituellement, elle se fait en quelques secondes, pas sans aucun délai. Le réseau, les files et le traitement ajoutent un peu de temps." },
          { q: "Ai-je encore besoin de lots si j'ai le temps réel?", a: "Souvent oui. Un contrôle planifié attrape ce que le flux en temps réel a manqué et garde les deux systèmes alignés avec le temps." }
        ]
      },
      es: {
        term: "Sincronización en tiempo real",
        definition: "La sincronización en tiempo real actualiza los datos de los sistemas conectados segundos después de un cambio, normalmente disparada por eventos y no por un horario.",
        explanation: "Con la sincronización en tiempo real, una venta en un canal aparece casi de inmediato en todos. Cuando un minorista vende su última unidad en tienda, la publicación en línea puede bajar a cero antes de que otro cliente haga clic en comprar.\n\nNormalmente se apoya en webhooks o flujos de eventos: cada cambio envía un mensaje y el sistema que recibe se actualiza de inmediato. Esa rapidez vale mucho para inventario, estado de pedidos y pagos, donde los minutos importan.\n\nEl tiempo real no siempre es mejor. Cuesta más construirlo y vigilarlo, puede alcanzar los límites de API en épocas ocupadas y es excesivo para datos como presupuestos mensuales. Elígelo donde el retraso cuesta dinero.",
        breaks: [
          { title: "Todo se vuelve tiempo real.", detail: "Sincronizar al instante datos de poco valor agrega carga y complejidad sin beneficio real." },
          { title: "Los picos alcanzan los límites de API.", detail: "Una venta relámpago puede generar más actualizaciones por segundo de las que permite el sistema receptor." },
          { title: "Los eventos perdidos nunca se recuperan.", detail: "Sin una conciliación periódica, un mensaje perdido deja los sistemas desfasados indefinidamente." },
          { title: "Dos sistemas editan el mismo registro.", detail: "Cambios casi simultáneos en ambos lados pueden sobrescribirse sin reglas claras sobre cuál gana." }
        ],
        diagram: ["Cambia el registro", "Se dispara el evento", "Se actualiza el destino", "Revisión nocturna concilia"],
        faq: [
          { q: "¿La sincronización en tiempo real es realmente instantánea?", a: "Normalmente significa en segundos, no con cero retraso. La red, las colas y el procesamiento agregan un poco de tiempo." },
          { q: "¿Sigo necesitando lotes si tengo tiempo real?", a: "A menudo sí. Una revisión programada detecta lo que el flujo en tiempo real perdió y mantiene alineados ambos sistemas con el tiempo." }
        ]
      }
    }
  },
  {
    slug: "design-system",
    category: "design",
    hub: "/design",
    related: ["design-tokens", "brand-guidelines", "user-interface", "accessibility-wcag", "prototype"],
    copy: {
      en: {
        term: "Design system",
        definition: "A design system is a shared library of reusable components, styles and rules that teams use to build consistent digital products.",
        explanation: "A design system collects the building blocks of your screens, such as buttons, forms, tables, colours and type, and documents how and when to use each one. Designers and developers pull from the same set instead of reinventing them.\n\nFor a distributor with a customer portal, an internal order app and a public website, a design system means the \"Add to order\" button looks and behaves the same everywhere. New screens get built faster, and fixes made once spread to every product.\n\nIt is a living product: it needs an owner, a way to request new components and regular updates.",
        breaks: [
          { title: "It is built once and never maintained.", detail: "Without an owner, the library falls behind the real product and teams stop using it." },
          { title: "Design and code drift apart.", detail: "The design file says one thing and the coded component does another, so nobody trusts either." },
          { title: "Too rigid for real needs.", detail: "If teams cannot request or extend components, they build one-off versions on the side." },
          { title: "Accessibility is added later.", detail: "Components built without accessibility in mind spread the same problems to every screen." }
        ],
        diagram: ["Audit current screens", "Define tokens and components", "Document usage rules", "Ship and maintain"],
        faq: [
          { q: "Is a design system the same as a style guide?", a: "A style guide covers visual rules like colours and fonts. A design system includes those plus working components and guidance on how to use them." },
          { q: "Does a small business need a design system?", a: "A full system may be too much, but even a small set of shared components and styles saves time once you have more than one product or site." }
        ]
      },
      fr: {
        term: "Système de design",
        definition: "Un système de design est une bibliothèque partagée de composants, de styles et de règles réutilisables que les équipes utilisent pour bâtir des produits numériques cohérents.",
        explanation: "Un système de design rassemble les éléments de base de vos écrans, comme les boutons, formulaires, tableaux, couleurs et polices, et explique comment et quand utiliser chacun. Les designers et les développeurs puisent dans le même ensemble au lieu de tout réinventer.\n\nPour un distributeur qui a un portail client, une application interne de commandes et un site public, un système de design fait en sorte que le bouton \"Ajouter à la commande\" ait la même apparence et le même comportement partout. Les nouveaux écrans se bâtissent plus vite, et une correction faite une fois s'applique à tous les produits.\n\nC'est un produit vivant : il lui faut un responsable, une façon de demander de nouveaux composants et des mises à jour régulières.",
        breaks: [
          { title: "Il est bâti une fois et jamais entretenu.", detail: "Sans responsable, la bibliothèque prend du retard sur le vrai produit et les équipes cessent de l'utiliser." },
          { title: "Le design et le code divergent.", detail: "Le fichier de design dit une chose et le composant codé en fait une autre, donc personne ne fait confiance à l'un ou à l'autre." },
          { title: "Trop rigide pour les vrais besoins.", detail: "Si les équipes ne peuvent pas demander ou étendre des composants, elles bâtissent des versions uniques à côté." },
          { title: "L'accessibilité est ajoutée plus tard.", detail: "Des composants bâtis sans penser à l'accessibilité répandent les mêmes problèmes sur chaque écran." }
        ],
        diagram: ["Inventorier les écrans", "Définir jetons et composants", "Documenter l'usage", "Livrer et entretenir"],
        faq: [
          { q: "Un système de design est-il la même chose qu'un guide de style?", a: "Un guide de style couvre les règles visuelles comme les couleurs et les polices. Un système de design les inclut, en plus de composants fonctionnels et de conseils d'utilisation." },
          { q: "Une petite entreprise a-t-elle besoin d'un système de design?", a: "Un système complet peut être trop, mais même un petit ensemble de composants et de styles partagés fait gagner du temps dès qu'on a plus d'un produit ou d'un site." }
        ]
      },
      es: {
        term: "Sistema de diseño",
        definition: "Un sistema de diseño es una biblioteca compartida de componentes, estilos y reglas reutilizables que los equipos usan para construir productos digitales consistentes.",
        explanation: "Un sistema de diseño reúne las piezas básicas de tus pantallas, como botones, formularios, tablas, colores y tipografía, y documenta cómo y cuándo usar cada una. Diseñadores y desarrolladores toman del mismo conjunto en lugar de reinventarlas.\n\nPara un distribuidor con un portal de clientes, una app interna de pedidos y un sitio web público, un sistema de diseño hace que el botón \"Agregar al pedido\" se vea y funcione igual en todos lados. Las pantallas nuevas se construyen más rápido y una corrección hecha una vez llega a todos los productos.\n\nEs un producto vivo: necesita un dueño, una forma de pedir componentes nuevos y actualizaciones regulares.",
        breaks: [
          { title: "Se construye una vez y nunca se mantiene.", detail: "Sin un dueño, la biblioteca se queda atrás del producto real y los equipos dejan de usarla." },
          { title: "El diseño y el código se separan.", detail: "El archivo de diseño dice una cosa y el componente programado hace otra, así que nadie confía en ninguno." },
          { title: "Es demasiado rígido para necesidades reales.", detail: "Si los equipos no pueden pedir o ampliar componentes, construyen versiones sueltas por su cuenta." },
          { title: "La accesibilidad se agrega después.", detail: "Los componentes hechos sin pensar en accesibilidad llevan los mismos problemas a cada pantalla." }
        ],
        diagram: ["Revisar pantallas actuales", "Definir tokens y componentes", "Documentar reglas de uso", "Publicar y mantener"],
        faq: [
          { q: "¿Un sistema de diseño es lo mismo que una guía de estilo?", a: "Una guía de estilo cubre reglas visuales como colores y fuentes. Un sistema de diseño incluye eso más componentes funcionales y guías de uso." },
          { q: "¿Una empresa pequeña necesita un sistema de diseño?", a: "Un sistema completo puede ser demasiado, pero incluso un pequeño conjunto de componentes y estilos compartidos ahorra tiempo cuando tienes más de un producto o sitio." }
        ]
      }
    }
  },
  {
    slug: "user-interface",
    category: "design",
    hub: "/design",
    related: ["user-experience", "design-system", "accessibility-wcag", "wireframe", "usability-testing"],
    copy: {
      en: {
        term: "User interface (UI)",
        definition: "A user interface (UI) is the set of screens, controls and visual elements people see and interact with when they use a digital product.",
        explanation: "The UI is everything on the screen: menus, buttons, forms, tables, icons, text and colours. It is how a person tells the software what to do and how the software shows what happened.\n\nFor warehouse staff scanning orders on a handheld device, a good UI means large buttons, clear status colours and only the fields they need. A cluttered screen built for a desktop slows them down and leads to scanning errors.\n\nUI is closely tied to user experience (UX), but narrower. UI is how it looks and responds; UX is how the whole task feels from start to finish.",
        breaks: [
          { title: "Screens are designed for the boss, not the user.", detail: "Interfaces packed with every possible field slow down the people who use them all day." },
          { title: "Inconsistent controls across screens.", detail: "The same action looks different in different places, so users hesitate and make mistakes." },
          { title: "Desktop layouts on small screens.", detail: "Staff on tablets or phones struggle with tiny targets and side scrolling." },
          { title: "Errors are vague.", detail: "Messages like \"invalid input\" do not say what is wrong or how to fix it." }
        ],
        faq: [
          { q: "What is the difference between UI and UX?", a: "UI is the visual and interactive layer: the screens and controls. UX is the overall experience of completing a task, which includes the UI plus flow, speed and clarity." },
          { q: "Can a better UI reduce errors?", a: "Yes. Clear labels, sensible defaults and helpful validation catch many mistakes before they reach your data." }
        ]
      },
      fr: {
        term: "Interface utilisateur (UI)",
        definition: "Une interface utilisateur (UI) est l'ensemble des écrans, des commandes et des éléments visuels que les gens voient et utilisent quand ils se servent d'un produit numérique.",
        explanation: "L'interface, c'est tout ce qui est à l'écran : menus, boutons, formulaires, tableaux, icônes, textes et couleurs. C'est par elle qu'une personne dit au logiciel quoi faire et que le logiciel montre ce qui s'est passé.\n\nPour des employés d'entrepôt qui balaient des commandes sur un appareil portatif, une bonne interface veut dire de gros boutons, des couleurs de statut claires et seulement les champs nécessaires. Un écran encombré pensé pour un ordinateur de bureau les ralentit et cause des erreurs de lecture.\n\nL'UI est étroitement liée à l'expérience utilisateur (UX), mais elle est plus restreinte. L'UI, c'est l'apparence et la réaction; l'UX, c'est le ressenti de toute la tâche du début à la fin.",
        breaks: [
          { title: "Les écrans sont conçus pour le patron, pas pour l'utilisateur.", detail: "Des interfaces remplies de tous les champs possibles ralentissent ceux qui les utilisent toute la journée." },
          { title: "Des commandes incohérentes d'un écran à l'autre.", detail: "La même action a une apparence différente selon l'endroit, donc les utilisateurs hésitent et se trompent." },
          { title: "Des mises en page de bureau sur de petits écrans.", detail: "Les employés sur tablette ou téléphone peinent avec de minuscules cibles et le défilement horizontal." },
          { title: "Les messages d'erreur sont vagues.", detail: "Des messages comme \"entrée invalide\" ne disent pas ce qui cloche ni comment le corriger." }
        ],
        faq: [
          { q: "Quelle est la différence entre UI et UX?", a: "L'UI est la couche visuelle et interactive : les écrans et les commandes. L'UX est l'expérience globale pour accomplir une tâche, qui comprend l'UI, mais aussi le déroulement, la vitesse et la clarté." },
          { q: "Une meilleure interface peut-elle réduire les erreurs?", a: "Oui. Des libellés clairs, des valeurs par défaut sensées et une validation utile attrapent beaucoup d'erreurs avant qu'elles atteignent vos données." }
        ]
      },
      es: {
        term: "Interfaz de usuario (UI)",
        definition: "Una interfaz de usuario (UI) es el conjunto de pantallas, controles y elementos visuales que las personas ven y usan cuando utilizan un producto digital.",
        explanation: "La UI es todo lo que está en la pantalla: menús, botones, formularios, tablas, íconos, textos y colores. Es la forma en que una persona le dice al software qué hacer y en que el software muestra lo que pasó.\n\nPara el personal de almacén que escanea pedidos en un dispositivo portátil, una buena UI significa botones grandes, colores de estado claros y solo los campos necesarios. Una pantalla saturada pensada para computadora de escritorio los hace más lentos y causa errores de escaneo.\n\nLa UI está muy ligada a la experiencia de usuario (UX), pero es más acotada. La UI es cómo se ve y responde; la UX es cómo se siente toda la tarea de principio a fin.",
        breaks: [
          { title: "Las pantallas se diseñan para el jefe, no para el usuario.", detail: "Las interfaces llenas de todos los campos posibles hacen más lentos a quienes las usan todo el día." },
          { title: "Controles inconsistentes entre pantallas.", detail: "La misma acción se ve distinta en distintos lugares, así que los usuarios dudan y se equivocan." },
          { title: "Diseños de escritorio en pantallas pequeñas.", detail: "El personal en tabletas o teléfonos batalla con objetivos diminutos y desplazamiento lateral." },
          { title: "Los mensajes de error son vagos.", detail: "Mensajes como \"dato inválido\" no dicen qué está mal ni cómo corregirlo." }
        ],
        faq: [
          { q: "¿Cuál es la diferencia entre UI y UX?", a: "La UI es la capa visual e interactiva: las pantallas y los controles. La UX es la experiencia completa de hacer una tarea, que incluye la UI más el flujo, la rapidez y la claridad." },
          { q: "¿Una mejor UI puede reducir errores?", a: "Sí. Etiquetas claras, valores predeterminados sensatos y validaciones útiles detectan muchos errores antes de que lleguen a tus datos." }
        ]
      }
    }
  },
  {
    slug: "user-experience",
    category: "design",
    hub: "/design",
    related: ["user-interface", "usability-testing", "wireframe", "prototype", "process-mapping"],
    copy: {
      en: {
        term: "User experience (UX)",
        definition: "User experience (UX) is how easy, efficient and satisfying it is for a person to complete a task with a product or service, from start to finish.",
        explanation: "UX looks beyond the screen to the whole journey. How many steps does it take to reorder a product? Does the customer know what happens after they click submit? Can a new staff member figure it out without training?\n\nA distributor redesigning its B2B ordering portal might find that customers mostly reorder the same items. A good UX answer is a one-click reorder from past orders, not a prettier search page.\n\nUX work usually involves watching real users, mapping their tasks, testing ideas early and measuring whether changes actually help.",
        breaks: [
          { title: "Decisions rely on opinions, not users.", detail: "Teams design for what they assume people want instead of watching what they actually do." },
          { title: "UX is treated as decoration.", detail: "Polishing visuals while ignoring confusing flows leaves the real problems in place." },
          { title: "Internal tools get no UX attention.", detail: "Staff systems are built without design, then cost time every single day in workarounds." },
          { title: "Success is never measured.", detail: "Without tracking task time, errors or drop-off, nobody knows if a redesign helped." }
        ],
        faq: [
          { q: "Does UX matter for internal business software?", a: "Yes. Staff use internal tools for hours every day, so small delays and confusing steps add up to real cost and errors." },
          { q: "How do I measure UX?", a: "Common measures include how long a task takes, how often people make mistakes, completion rates and what users say in short surveys or interviews." }
        ]
      },
      fr: {
        term: "Expérience utilisateur (UX)",
        definition: "L'expérience utilisateur (UX) est la facilité, l'efficacité et la satisfaction avec lesquelles une personne accomplit une tâche au moyen d'un produit ou d'un service, du début à la fin.",
        explanation: "L'UX regarde au-delà de l'écran, tout le parcours. Combien d'étapes faut-il pour recommander un produit? Le client sait-il ce qui se passe après avoir cliqué sur envoyer? Un nouvel employé peut-il s'y retrouver sans formation?\n\nUn distributeur qui refait son portail de commandes B2B peut découvrir que ses clients recommandent surtout les mêmes articles. Une bonne réponse UX est une recommande en un clic à partir des anciennes commandes, pas une plus belle page de recherche.\n\nLe travail UX consiste habituellement à observer de vrais utilisateurs, à cartographier leurs tâches, à tester les idées tôt et à mesurer si les changements aident vraiment.",
        breaks: [
          { title: "Les décisions reposent sur des opinions, pas sur les utilisateurs.", detail: "Les équipes conçoivent selon ce qu'elles supposent que les gens veulent, au lieu d'observer ce qu'ils font vraiment." },
          { title: "L'UX est traitée comme de la décoration.", detail: "Peaufiner l'apparence en ignorant les parcours confus laisse les vrais problèmes en place." },
          { title: "Les outils internes n'ont aucune attention UX.", detail: "Les systèmes du personnel sont bâtis sans design, puis coûtent du temps chaque jour en contournements." },
          { title: "Le succès n'est jamais mesuré.", detail: "Sans suivre la durée des tâches, les erreurs ou les abandons, personne ne sait si une refonte a aidé." }
        ],
        faq: [
          { q: "L'UX compte-t-elle pour les logiciels internes?", a: "Oui. Les employés utilisent les outils internes des heures chaque jour, donc les petits délais et les étapes confuses finissent par coûter cher et causer des erreurs." },
          { q: "Comment mesurer l'UX?", a: "Les mesures courantes incluent la durée d'une tâche, la fréquence des erreurs, le taux de réussite et ce que disent les utilisateurs dans de courts sondages ou entrevues." }
        ]
      },
      es: {
        term: "Experiencia de usuario (UX)",
        definition: "La experiencia de usuario (UX) es qué tan fácil, eficiente y satisfactorio es para una persona completar una tarea con un producto o servicio, de principio a fin.",
        explanation: "La UX mira más allá de la pantalla, a todo el recorrido. ¿Cuántos pasos se necesitan para volver a pedir un producto? ¿El cliente sabe qué pasa después de hacer clic en enviar? ¿Una persona nueva puede entenderlo sin capacitación?\n\nUn distribuidor que rediseña su portal de pedidos B2B puede descubrir que sus clientes casi siempre piden los mismos artículos. Una buena respuesta de UX es repetir un pedido anterior con un clic, no una página de búsqueda más bonita.\n\nEl trabajo de UX suele incluir observar usuarios reales, mapear sus tareas, probar ideas temprano y medir si los cambios realmente ayudan.",
        breaks: [
          { title: "Las decisiones se basan en opiniones, no en usuarios.", detail: "Los equipos diseñan para lo que suponen que la gente quiere en lugar de observar lo que realmente hace." },
          { title: "La UX se trata como decoración.", detail: "Pulir lo visual e ignorar los flujos confusos deja los problemas reales en su lugar." },
          { title: "Las herramientas internas no reciben atención de UX.", detail: "Los sistemas del personal se construyen sin diseño y luego cuestan tiempo todos los días en soluciones improvisadas." },
          { title: "El éxito nunca se mide.", detail: "Sin medir el tiempo de las tareas, los errores o los abandonos, nadie sabe si un rediseño ayudó." }
        ],
        faq: [
          { q: "¿La UX importa en software interno?", a: "Sí. El personal usa las herramientas internas por horas cada día, así que pequeños retrasos y pasos confusos suman costos y errores reales." },
          { q: "¿Cómo se mide la UX?", a: "Las medidas comunes incluyen cuánto tarda una tarea, qué tan seguido hay errores, la tasa de finalización y lo que dicen los usuarios en encuestas o entrevistas breves." }
        ]
      }
    }
  },
  {
    slug: "wireframe",
    category: "design",
    hub: "/design",
    related: ["prototype", "user-experience", "user-interface", "usability-testing", "process-mapping"],
    copy: {
      en: {
        term: "Wireframe",
        definition: "A wireframe is a simple, low-detail layout of a screen that shows where content and controls go, without final colours, images or styling.",
        explanation: "A wireframe is a blueprint for a screen. It uses plain boxes, lines and placeholder text to show structure: what goes at the top, where the main action sits, what information appears in which order.\n\nBefore building a new returns page for a retailer's website, a designer might sketch three wireframes and walk the customer service team through them. Moving a box on a wireframe takes seconds; moving a feature after it is coded takes days.\n\nWireframes keep early conversations focused on content and flow instead of colour preferences.",
        breaks: [
          { title: "Stakeholders judge it on looks.", detail: "People comment on the grey boxes instead of the structure, missing the point of the exercise." },
          { title: "Real content is not used.", detail: "Placeholder text hides the fact that real product names or error messages will not fit." },
          { title: "Edge cases are skipped.", detail: "Only the happy path is drawn, so empty states, errors and long lists surprise the build team." },
          { title: "It is treated as final.", detail: "Developers build straight from a rough wireframe without the detail or testing it was never meant to carry." }
        ],
        diagram: ["List screen goals", "Sketch layout options", "Review with users", "Pick and refine"],
        faq: [
          { q: "What is the difference between a wireframe and a mockup?", a: "A wireframe shows structure in plain boxes. A mockup adds final visuals such as colours, fonts and images, but usually is not clickable." },
          { q: "What tools are used to make wireframes?", a: "Anything from paper and a whiteboard to design tools like Figma or Balsamiq. The tool matters less than getting feedback early." }
        ]
      },
      fr: {
        term: "Maquette fonctionnelle",
        definition: "Une maquette fonctionnelle est une mise en page simple et peu détaillée d'un écran qui montre où vont le contenu et les commandes, sans couleurs, images ni style définitifs.",
        explanation: "La maquette fonctionnelle est le plan d'un écran. Elle utilise de simples boîtes, des lignes et du texte de remplissage pour montrer la structure : ce qui va en haut, où se trouve l'action principale, dans quel ordre l'information apparaît.\n\nAvant de bâtir une nouvelle page de retours pour le site d'un détaillant, un designer peut esquisser trois maquettes et les présenter à l'équipe du service à la clientèle. Déplacer une boîte sur une maquette prend quelques secondes; déplacer une fonction une fois codée prend des jours.\n\nLes maquettes fonctionnelles gardent les premières discussions centrées sur le contenu et le parcours plutôt que sur les préférences de couleurs.",
        breaks: [
          { title: "Les parties prenantes la jugent sur l'apparence.", detail: "Les gens commentent les boîtes grises au lieu de la structure et passent à côté du but de l'exercice." },
          { title: "Le vrai contenu n'est pas utilisé.", detail: "Le texte de remplissage cache le fait que les vrais noms de produits ou messages d'erreur ne rentreront pas." },
          { title: "Les cas particuliers sont oubliés.", detail: "Seul le parcours idéal est dessiné, donc les écrans vides, les erreurs et les longues listes surprennent l'équipe de développement." },
          { title: "Elle est traitée comme finale.", detail: "Les développeurs bâtissent directement à partir d'une maquette sommaire, sans le détail ni les tests qu'elle n'a jamais été censée porter." }
        ],
        diagram: ["Lister les objectifs", "Esquisser des options", "Réviser avec les usagers", "Choisir et raffiner"],
        faq: [
          { q: "Quelle est la différence entre une maquette fonctionnelle et une maquette visuelle?", a: "La maquette fonctionnelle montre la structure en boîtes simples. La maquette visuelle ajoute l'apparence finale, comme les couleurs, polices et images, mais n'est habituellement pas cliquable." },
          { q: "Quels outils servent à faire des maquettes fonctionnelles?", a: "Tout, du papier et du tableau blanc jusqu'aux outils de design comme Figma ou Balsamiq. L'outil compte moins que d'obtenir des commentaires tôt." }
        ]
      },
      es: {
        term: "Wireframe",
        definition: "Un wireframe es un esquema simple y con poco detalle de una pantalla que muestra dónde van el contenido y los controles, sin colores, imágenes ni estilos finales.",
        explanation: "Un wireframe es el plano de una pantalla. Usa cajas simples, líneas y texto de relleno para mostrar la estructura: qué va arriba, dónde está la acción principal, en qué orden aparece la información.\n\nAntes de construir una nueva página de devoluciones para el sitio de un minorista, un diseñador puede bosquejar tres wireframes y revisarlos con el equipo de servicio al cliente. Mover una caja en un wireframe toma segundos; mover una función ya programada toma días.\n\nLos wireframes mantienen las primeras conversaciones enfocadas en el contenido y el flujo en lugar de las preferencias de color.",
        breaks: [
          { title: "Los interesados lo juzgan por cómo se ve.", detail: "La gente opina sobre las cajas grises en lugar de la estructura y pierde el propósito del ejercicio." },
          { title: "No se usa contenido real.", detail: "El texto de relleno oculta que los nombres reales de productos o los mensajes de error no van a caber." },
          { title: "Se omiten los casos especiales.", detail: "Solo se dibuja el camino ideal, así que los estados vacíos, errores y listas largas sorprenden al equipo de desarrollo." },
          { title: "Se trata como versión final.", detail: "Los desarrolladores construyen directo desde un wireframe preliminar, sin el detalle ni las pruebas que nunca debió cargar." }
        ],
        diagram: ["Listar objetivos", "Bosquejar opciones", "Revisar con usuarios", "Elegir y refinar"],
        faq: [
          { q: "¿Cuál es la diferencia entre un wireframe y un mockup?", a: "Un wireframe muestra la estructura con cajas simples. Un mockup agrega lo visual final, como colores, fuentes e imágenes, pero normalmente no se puede hacer clic." },
          { q: "¿Qué herramientas se usan para hacer wireframes?", a: "Desde papel y pizarrón hasta herramientas de diseño como Figma o Balsamiq. La herramienta importa menos que recibir comentarios temprano." }
        ]
      }
    }
  },
  {
    slug: "prototype",
    category: "design",
    hub: "/design",
    related: ["wireframe", "usability-testing", "user-experience", "design-system", "sandbox-environment"],
    copy: {
      en: {
        term: "Prototype",
        definition: "A prototype is a working model of a product or screen flow that people can click through or try, built to test ideas before full development.",
        explanation: "A prototype lets people experience a design instead of imagining it. It might be a set of linked screens in a design tool, or a rough coded version with fake data. Either way, users can tap, type and move through steps.\n\nA manufacturer planning a new dealer portal could prototype the quote request flow in a week, put it in front of five dealers and learn that they need to upload drawings, something nobody had mentioned in meetings.\n\nPrototypes are meant to be thrown away or reworked. Their job is to find the expensive mistakes while they are still cheap.",
        breaks: [
          { title: "It looks too finished.", detail: "A polished prototype makes stakeholders think the product is almost done, which skews timelines and feedback." },
          { title: "It is never tested with real users.", detail: "Showing it only to the internal team misses how customers or staff actually behave." },
          { title: "Prototype code goes to production.", detail: "Quick code built to test an idea becomes the real product without being rebuilt properly." },
          { title: "The question is unclear.", detail: "Without a specific thing to learn, testing sessions produce opinions instead of answers." }
        ],
        diagram: ["Pick a question", "Build quick model", "Test with users", "Keep or change"],
        faq: [
          { q: "How detailed should a prototype be?", a: "Only as detailed as needed to answer your question. Early ideas can use rough clickable sketches; later tests may need realistic data." },
          { q: "What is the difference between a prototype and an MVP?", a: "A prototype is for learning and is often thrown away. An MVP (minimum viable product) is a real, usable product released to customers." }
        ]
      },
      fr: {
        term: "Prototype",
        definition: "Un prototype est un modèle fonctionnel d'un produit ou d'un parcours d'écrans que les gens peuvent parcourir ou essayer, bâti pour tester des idées avant le développement complet.",
        explanation: "Un prototype permet aux gens de vivre un design au lieu de l'imaginer. Ce peut être un ensemble d'écrans reliés dans un outil de design, ou une version codée sommaire avec de fausses données. Dans les deux cas, les utilisateurs peuvent toucher, saisir et passer d'une étape à l'autre.\n\nUn fabricant qui prévoit un nouveau portail pour ses concessionnaires pourrait prototyper la demande de soumission en une semaine, la montrer à cinq concessionnaires et apprendre qu'ils doivent téléverser des dessins, ce que personne n'avait mentionné en réunion.\n\nLes prototypes sont faits pour être jetés ou retravaillés. Leur rôle est de trouver les erreurs coûteuses pendant qu'elles sont encore peu chères.",
        breaks: [
          { title: "Il a l'air trop fini.", detail: "Un prototype très soigné fait croire aux parties prenantes que le produit est presque terminé, ce qui fausse les échéanciers et les commentaires." },
          { title: "Il n'est jamais testé avec de vrais utilisateurs.", detail: "Le montrer seulement à l'équipe interne ne révèle pas comment les clients ou les employés se comportent vraiment." },
          { title: "Le code du prototype passe en production.", detail: "Du code rapide écrit pour tester une idée devient le vrai produit sans être rebâti correctement." },
          { title: "La question n'est pas claire.", detail: "Sans chose précise à apprendre, les séances de test donnent des opinions plutôt que des réponses." }
        ],
        diagram: ["Choisir une question", "Bâtir un modèle rapide", "Tester avec des usagers", "Garder ou changer"],
        faq: [
          { q: "À quel point un prototype doit-il être détaillé?", a: "Juste assez pour répondre à votre question. Les premières idées peuvent utiliser des esquisses cliquables sommaires; les tests plus tardifs peuvent demander des données réalistes." },
          { q: "Quelle est la différence entre un prototype et un PMV?", a: "Un prototype sert à apprendre et est souvent jeté. Un PMV (produit minimum viable) est un vrai produit utilisable offert aux clients." }
        ]
      },
      es: {
        term: "Prototipo",
        definition: "Un prototipo es un modelo funcional de un producto o de un flujo de pantallas que la gente puede recorrer o probar, construido para validar ideas antes del desarrollo completo.",
        explanation: "Un prototipo permite que la gente viva un diseño en lugar de imaginarlo. Puede ser un conjunto de pantallas enlazadas en una herramienta de diseño, o una versión programada sencilla con datos falsos. En ambos casos, los usuarios pueden tocar, escribir y avanzar por los pasos.\n\nUn fabricante que planea un nuevo portal para distribuidores podría prototipar el flujo de solicitud de cotización en una semana, mostrarlo a cinco distribuidores y descubrir que necesitan subir planos, algo que nadie había mencionado en las reuniones.\n\nLos prototipos están hechos para desecharse o rehacerse. Su trabajo es encontrar los errores caros mientras todavía son baratos.",
        breaks: [
          { title: "Se ve demasiado terminado.", detail: "Un prototipo muy pulido hace creer a los interesados que el producto casi está listo, lo que distorsiona plazos y comentarios." },
          { title: "Nunca se prueba con usuarios reales.", detail: "Mostrarlo solo al equipo interno no revela cómo se comportan de verdad los clientes o el personal." },
          { title: "El código del prototipo llega a producción.", detail: "Código rápido hecho para probar una idea se vuelve el producto real sin reconstruirse bien." },
          { title: "La pregunta no está clara.", detail: "Sin algo específico que aprender, las sesiones de prueba producen opiniones en lugar de respuestas." }
        ],
        diagram: ["Elegir una pregunta", "Construir modelo rápido", "Probar con usuarios", "Mantener o cambiar"],
        faq: [
          { q: "¿Qué tan detallado debe ser un prototipo?", a: "Solo lo necesario para responder tu pregunta. Las primeras ideas pueden usar bocetos sencillos con clic; las pruebas posteriores pueden requerir datos realistas." },
          { q: "¿Cuál es la diferencia entre un prototipo y un MVP?", a: "Un prototipo sirve para aprender y suele desecharse. Un MVP (producto mínimo viable) es un producto real y usable que se entrega a los clientes." }
        ]
      }
    }
  },
  {
    slug: "accessibility-wcag",
    category: "design",
    hub: "/design",
    related: ["user-interface", "design-system", "usability-testing", "mandatory-requirements", "user-experience"],
    copy: {
      en: {
        term: "Accessibility (WCAG)",
        definition: "Accessibility (WCAG) is the practice of making digital products usable by people with disabilities, measured against the Web Content Accessibility Guidelines published by the W3C.",
        explanation: "WCAG sets testable criteria grouped under four ideas: content must be perceivable, operable, understandable and robust. In practice that means things like enough colour contrast, text alternatives for images, full keyboard navigation and clear form labels. Criteria are graded at levels A, AA and AAA, and AA is the target most policies point to.\n\nMany public bodies in Canada, the US, the UK and Australia expect WCAG conformance in websites and software they buy, so vendors bidding on those contracts often need to show it.\n\nAccessible design also helps everyone: a warehouse worker in glare, a customer on a slow phone, a manager who prefers the keyboard.",
        breaks: [
          { title: "It is checked only at the end.", detail: "Fixing contrast, structure and keyboard issues after launch costs far more than designing for them early." },
          { title: "Automated scans are treated as proof.", detail: "Tools catch only part of the issues; real conformance needs manual and assistive technology testing." },
          { title: "PDFs and documents are forgotten.", detail: "The website passes, but downloadable forms, invoices and reports are not accessible." },
          { title: "New content breaks it again.", detail: "Staff upload images without alt text or add colour-only labels, undoing earlier work." }
        ],
        faq: [
          { q: "Which WCAG level should we aim for?", a: "Level AA is the most common target in laws, policies and procurement requirements. Check the specific rules that apply to your sector and region." },
          { q: "Is accessibility a legal requirement?", a: "In many places it can be, especially for public bodies and their suppliers. The exact obligations vary by country and province or state, so confirm with a qualified advisor." }
        ]
      },
      fr: {
        term: "Accessibilité (WCAG)",
        definition: "L'accessibilité (WCAG) est la pratique qui consiste à rendre les produits numériques utilisables par les personnes en situation de handicap, mesurée selon les Règles pour l'accessibilité des contenus Web publiées par le W3C.",
        explanation: "Les WCAG fixent des critères vérifiables regroupés sous quatre principes : le contenu doit être perceptible, utilisable, compréhensible et robuste. En pratique, cela veut dire un contraste de couleurs suffisant, des textes de remplacement pour les images, une navigation complète au clavier et des étiquettes de formulaire claires. Les critères sont classés aux niveaux A, AA et AAA, et le niveau AA est la cible visée par la plupart des politiques.\n\nBeaucoup d'organismes publics au Canada, aux États-Unis, au Royaume-Uni et en Australie s'attendent à la conformité WCAG des sites et logiciels qu'ils achètent, donc les fournisseurs qui soumissionnent doivent souvent la démontrer.\n\nLe design accessible aide aussi tout le monde : un employé d'entrepôt ébloui, un client sur un téléphone lent, un gestionnaire qui préfère le clavier.",
        breaks: [
          { title: "On vérifie seulement à la fin.", detail: "Corriger le contraste, la structure et le clavier après le lancement coûte beaucoup plus cher que d'y penser dès le début." },
          { title: "Les analyses automatiques servent de preuve.", detail: "Les outils ne détectent qu'une partie des problèmes; une vraie conformité exige des tests manuels et avec des technologies d'assistance." },
          { title: "Les PDF et documents sont oubliés.", detail: "Le site passe, mais les formulaires, factures et rapports téléchargeables ne sont pas accessibles." },
          { title: "Le nouveau contenu brise tout à nouveau.", detail: "Les employés téléversent des images sans texte de remplacement ou ajoutent des repères basés seulement sur la couleur, ce qui défait le travail fait." }
        ],
        faq: [
          { q: "Quel niveau WCAG devrions-nous viser?", a: "Le niveau AA est la cible la plus courante dans les lois, les politiques et les exigences d'approvisionnement. Vérifiez les règles précises qui s'appliquent à votre secteur et à votre région." },
          { q: "L'accessibilité est-elle une obligation légale?", a: "À bien des endroits, elle peut l'être, surtout pour les organismes publics et leurs fournisseurs. Les obligations varient selon le pays et la province ou l'État, alors confirmez avec un conseiller qualifié." }
        ]
      },
      es: {
        term: "Accesibilidad (WCAG)",
        definition: "La accesibilidad (WCAG) es la práctica de hacer que los productos digitales puedan usarlos personas con discapacidad, medida con las Pautas de Accesibilidad para el Contenido Web publicadas por el W3C.",
        explanation: "Las WCAG fijan criterios verificables agrupados en cuatro ideas: el contenido debe ser perceptible, operable, comprensible y robusto. En la práctica, eso significa suficiente contraste de color, textos alternativos para imágenes, navegación completa con teclado y etiquetas claras en formularios. Los criterios se clasifican en niveles A, AA y AAA, y el nivel AA es la meta que indica la mayoría de las políticas.\n\nMuchos organismos públicos de Canadá, Estados Unidos, Reino Unido y Australia esperan conformidad con WCAG en los sitios y el software que compran, así que los proveedores que licitan suelen tener que demostrarla.\n\nEl diseño accesible también ayuda a todos: un trabajador de almacén con reflejos en la pantalla, un cliente con un teléfono lento, un gerente que prefiere el teclado.",
        breaks: [
          { title: "Solo se revisa al final.", detail: "Corregir contraste, estructura y teclado después del lanzamiento cuesta mucho más que diseñar para ello desde el principio." },
          { title: "Los escaneos automáticos se toman como prueba.", detail: "Las herramientas detectan solo parte de los problemas; la conformidad real requiere pruebas manuales y con tecnologías de apoyo." },
          { title: "Se olvidan los PDF y documentos.", detail: "El sitio pasa, pero los formularios, facturas y reportes descargables no son accesibles." },
          { title: "El contenido nuevo lo vuelve a romper.", detail: "El personal sube imágenes sin texto alternativo o agrega señales solo de color, y deshace el trabajo previo." }
        ],
        faq: [
          { q: "¿Qué nivel de WCAG debemos buscar?", a: "El nivel AA es la meta más común en leyes, políticas y requisitos de compras públicas. Revisa las reglas específicas que aplican a tu sector y región." },
          { q: "¿La accesibilidad es una obligación legal?", a: "En muchos lugares puede serlo, sobre todo para organismos públicos y sus proveedores. Las obligaciones varían por país y por provincia o estado, así que confírmalo con un asesor calificado." }
        ]
      }
    }
  },
  {
    slug: "brand-guidelines",
    category: "design",
    hub: "/design",
    related: ["design-system", "design-tokens", "ad-creative", "landing-page", "user-interface"],
    copy: {
      en: {
        term: "Brand guidelines",
        definition: "Brand guidelines are a documented set of rules for how a business presents itself, covering its logo, colours, fonts, imagery and tone of voice.",
        explanation: "Brand guidelines make sure a business looks and sounds like itself everywhere, whether the item is a truck decal, a quote PDF, a trade show banner or a social post. They show the correct logo versions, exact colour codes, approved fonts, photo style and examples of the right tone.\n\nA regional distributor with sales reps making their own flyers can end up with five versions of the logo. Clear guidelines, plus ready-to-use templates, let people move fast while staying consistent.\n\nFor digital products, brand guidelines usually feed into the design system so screens match the rest of the brand.",
        breaks: [
          { title: "Guidelines exist but nobody can find them.", detail: "A PDF buried in a shared drive does not help the rep making a flyer at 6 p.m." },
          { title: "Rules without templates.", detail: "Telling people what not to do is less useful than giving them ready files they can edit." },
          { title: "Digital use is not covered.", detail: "Guidelines written for print miss screen colours, small sizes, dark mode and accessibility contrast." },
          { title: "Tone of voice is left out.", detail: "Visuals are consistent, but emails and proposals sound like different companies." }
        ],
        faq: [
          { q: "What should brand guidelines include?", a: "At minimum: logo usage, colour codes, fonts, imagery style and tone of voice, with clear do and don't examples." },
          { q: "Are brand guidelines the same as a design system?", a: "No. Brand guidelines cover the overall identity across every medium. A design system turns parts of that identity into reusable components for digital products." }
        ]
      },
      fr: {
        term: "Normes graphiques",
        definition: "Les normes graphiques sont un ensemble documenté de règles sur la façon dont une entreprise se présente, couvrant son logo, ses couleurs, ses polices, ses images et son ton.",
        explanation: "Les normes graphiques assurent qu'une entreprise a la même apparence et la même voix partout, qu'il s'agisse d'un lettrage de camion, d'une soumission en PDF, d'une bannière de salon ou d'une publication sur les réseaux sociaux. Elles montrent les bonnes versions du logo, les codes de couleurs exacts, les polices approuvées, le style des photos et des exemples du bon ton.\n\nUn distributeur régional dont les représentants font leurs propres dépliants peut se retrouver avec cinq versions du logo. Des normes claires, avec des gabarits prêts à l'emploi, permettent aux gens d'aller vite tout en restant cohérents.\n\nPour les produits numériques, les normes graphiques alimentent habituellement le système de design pour que les écrans s'accordent au reste de la marque.",
        breaks: [
          { title: "Les normes existent, mais personne ne les trouve.", detail: "Un PDF enfoui dans un dossier partagé n'aide pas le représentant qui fait un dépliant à 18 h." },
          { title: "Des règles sans gabarits.", detail: "Dire aux gens quoi ne pas faire est moins utile que de leur donner des fichiers prêts à modifier." },
          { title: "L'usage numérique n'est pas couvert.", detail: "Des normes écrites pour l'imprimé oublient les couleurs d'écran, les petits formats, le mode sombre et le contraste pour l'accessibilité." },
          { title: "Le ton est laissé de côté.", detail: "Le visuel est cohérent, mais les courriels et les propositions semblent venir d'entreprises différentes." }
        ],
        faq: [
          { q: "Que devraient contenir les normes graphiques?", a: "Au minimum : l'usage du logo, les codes de couleurs, les polices, le style des images et le ton, avec des exemples clairs de quoi faire et ne pas faire." },
          { q: "Les normes graphiques sont-elles la même chose qu'un système de design?", a: "Non. Les normes graphiques couvrent l'identité globale sur tous les supports. Un système de design transforme une partie de cette identité en composants réutilisables pour les produits numériques." }
        ]
      },
      es: {
        term: "Guía de marca",
        definition: "Una guía de marca es un conjunto documentado de reglas sobre cómo se presenta una empresa, que cubre su logotipo, colores, tipografías, imágenes y tono de voz.",
        explanation: "La guía de marca asegura que una empresa se vea y suene igual en todas partes, ya sea la rotulación de un camión, una cotización en PDF, un banner de feria o una publicación en redes. Muestra las versiones correctas del logotipo, los códigos exactos de color, las fuentes aprobadas, el estilo de fotos y ejemplos del tono adecuado.\n\nUn distribuidor regional cuyos vendedores hacen sus propios volantes puede terminar con cinco versiones del logotipo. Una guía clara, junto con plantillas listas para usar, permite que la gente avance rápido sin perder consistencia.\n\nEn productos digitales, la guía de marca suele alimentar el sistema de diseño para que las pantallas coincidan con el resto de la marca.",
        breaks: [
          { title: "La guía existe pero nadie la encuentra.", detail: "Un PDF perdido en una carpeta compartida no ayuda al vendedor que arma un volante a las 6 p. m." },
          { title: "Reglas sin plantillas.", detail: "Decirle a la gente qué no hacer sirve menos que darle archivos listos para editar." },
          { title: "No cubre el uso digital.", detail: "Las guías escritas para impresión omiten colores de pantalla, tamaños pequeños, modo oscuro y contraste para accesibilidad." },
          { title: "Se deja fuera el tono de voz.", detail: "Lo visual es consistente, pero los correos y propuestas suenan como empresas distintas." }
        ],
        faq: [
          { q: "¿Qué debe incluir una guía de marca?", a: "Como mínimo: uso del logotipo, códigos de color, tipografías, estilo de imágenes y tono de voz, con ejemplos claros de qué sí y qué no." },
          { q: "¿Una guía de marca es lo mismo que un sistema de diseño?", a: "No. La guía de marca cubre la identidad general en todos los medios. Un sistema de diseño convierte parte de esa identidad en componentes reutilizables para productos digitales." }
        ]
      }
    }
  },
  {
    slug: "design-tokens",
    category: "design",
    hub: "/design",
    related: ["design-system", "brand-guidelines", "user-interface", "accessibility-wcag"],
    copy: {
      en: {
        term: "Design tokens",
        definition: "Design tokens are named values, such as colours, font sizes and spacing, stored in one place so design tools and code use exactly the same settings.",
        explanation: "Instead of writing a hex colour like #0B5FFF in hundreds of places, a team defines a token such as \"color-primary\" and uses that name everywhere. Change the token once and every button, link and chart that uses it updates.\n\nFor a retailer with a website, a mobile app and a staff tablet app, tokens keep the brand blue, the spacing and the type scale identical across all three, even if they are built with different technologies.\n\nTokens are also how teams support themes like dark mode: the same token name points to a different value in each theme.",
        breaks: [
          { title: "Raw values sneak back into code.", detail: "Developers paste exact colours or pixel sizes directly, bypassing the tokens and breaking future updates." },
          { title: "Names describe looks, not purpose.", detail: "A token called \"blue-500\" is hard to change; one called \"color-action\" can change colour without confusion." },
          { title: "Design and code tokens are kept separately.", detail: "Two lists that are updated by hand drift apart over time." },
          { title: "Contrast is not checked per theme.", detail: "A token pair that passes in light mode may fail accessibility contrast in dark mode." }
        ],
        faq: [
          { q: "Do I need design tokens for a single website?", a: "Not strictly, but even a small set of tokens for colours, fonts and spacing makes future changes and rebrands much easier." },
          { q: "What format are design tokens stored in?", a: "Often JSON or CSS custom properties, which tools can then convert for web, iOS, Android and design software." }
        ]
      },
      fr: {
        term: "Jetons de design",
        definition: "Les jetons de design sont des valeurs nommées, comme les couleurs, les tailles de police et les espacements, stockées à un seul endroit pour que les outils de design et le code utilisent exactement les mêmes réglages.",
        explanation: "Au lieu d'écrire une couleur hexadécimale comme #0B5FFF à des centaines d'endroits, une équipe définit un jeton comme \"color-primary\" et utilise ce nom partout. On modifie le jeton une fois, et chaque bouton, lien et graphique qui l'utilise se met à jour.\n\nPour un détaillant qui a un site Web, une application mobile et une application de tablette pour le personnel, les jetons gardent identiques le bleu de la marque, les espacements et l'échelle typographique dans les trois, même s'ils sont bâtis avec des technologies différentes.\n\nLes jetons permettent aussi de gérer des thèmes comme le mode sombre : le même nom de jeton pointe vers une valeur différente dans chaque thème.",
        breaks: [
          { title: "Les valeurs brutes reviennent dans le code.", detail: "Les développeurs collent directement des couleurs ou des tailles en pixels, contournent les jetons et brisent les mises à jour futures." },
          { title: "Les noms décrivent l'apparence, pas la fonction.", detail: "Un jeton nommé \"blue-500\" est difficile à changer; un jeton nommé \"color-action\" peut changer de couleur sans confusion." },
          { title: "Les jetons du design et du code sont gardés séparément.", detail: "Deux listes mises à jour à la main finissent par diverger." },
          { title: "Le contraste n'est pas vérifié par thème.", detail: "Une paire de jetons qui passe en mode clair peut échouer le contraste d'accessibilité en mode sombre." }
        ],
        faq: [
          { q: "Ai-je besoin de jetons de design pour un seul site Web?", a: "Pas obligatoirement, mais même un petit ensemble de jetons pour les couleurs, les polices et les espacements facilite beaucoup les changements futurs et les refontes de marque." },
          { q: "Dans quel format les jetons de design sont-ils stockés?", a: "Souvent en JSON ou en propriétés personnalisées CSS, que des outils peuvent ensuite convertir pour le Web, iOS, Android et les logiciels de design." }
        ]
      },
      es: {
        term: "Tokens de diseño",
        definition: "Los tokens de diseño son valores con nombre, como colores, tamaños de fuente y espaciados, guardados en un solo lugar para que las herramientas de diseño y el código usen exactamente los mismos ajustes.",
        explanation: "En lugar de escribir un color hexadecimal como #0B5FFF en cientos de lugares, un equipo define un token como \"color-primary\" y usa ese nombre en todas partes. Cambias el token una vez y se actualizan todos los botones, enlaces y gráficas que lo usan.\n\nPara un minorista con sitio web, app móvil y app de tableta para el personal, los tokens mantienen idénticos el azul de la marca, los espaciados y la escala tipográfica en las tres, aunque estén construidas con tecnologías distintas.\n\nLos tokens también permiten manejar temas como el modo oscuro: el mismo nombre de token apunta a un valor distinto en cada tema.",
        breaks: [
          { title: "Los valores fijos regresan al código.", detail: "Los desarrolladores pegan colores o tamaños en píxeles directamente, se saltan los tokens y rompen actualizaciones futuras." },
          { title: "Los nombres describen apariencia, no propósito.", detail: "Un token llamado \"blue-500\" es difícil de cambiar; uno llamado \"color-action\" puede cambiar de color sin confusión." },
          { title: "Los tokens de diseño y de código se guardan por separado.", detail: "Dos listas actualizadas a mano se van separando con el tiempo." },
          { title: "No se revisa el contraste por tema.", detail: "Un par de tokens que pasa en modo claro puede fallar el contraste de accesibilidad en modo oscuro." }
        ],
        faq: [
          { q: "¿Necesito tokens de diseño para un solo sitio web?", a: "No es obligatorio, pero incluso un pequeño conjunto de tokens para colores, fuentes y espaciados facilita mucho los cambios futuros y los cambios de marca." },
          { q: "¿En qué formato se guardan los tokens de diseño?", a: "A menudo en JSON o en propiedades personalizadas de CSS, que luego las herramientas convierten para web, iOS, Android y software de diseño." }
        ]
      }
    }
  },
  {
    slug: "usability-testing",
    category: "design",
    hub: "/design",
    related: ["prototype", "user-experience", "wireframe", "accessibility-wcag", "conversion-rate"],
    copy: {
      en: {
        term: "Usability testing",
        definition: "Usability testing is a research method where real users try to complete set tasks with a product while observers note where they struggle.",
        explanation: "You give a few representative users realistic tasks, such as \"reorder last month's supplies\" or \"find the return policy,\" and watch them work without helping. Where they hesitate, click the wrong thing or give up shows you what to fix.\n\nA small wholesaler testing a new ordering portal might run sessions with five customers over video calls. Even a handful of sessions often reveals the biggest problems, because many users trip over the same spots.\n\nTesting works best early and often: on wireframes, then prototypes, then the live product after changes.",
        breaks: [
          { title: "Testers are coworkers, not users.", detail: "Internal staff know the product too well and do not stumble where customers do." },
          { title: "The moderator helps too much.", detail: "Hinting or explaining during the session hides exactly the problems you need to see." },
          { title: "Tasks are leading or unrealistic.", detail: "Instructions that name the button to click test reading, not usability." },
          { title: "Findings are never acted on.", detail: "Sessions produce a report that nobody prioritizes, and the same problems ship anyway." }
        ],
        diagram: ["Set realistic tasks", "Recruit real users", "Observe without helping", "Fix top issues"],
        faq: [
          { q: "How many users do I need for a usability test?", a: "For finding major problems, small rounds of around five users are a common starting point, repeated after each set of changes." },
          { q: "Can usability testing be done remotely?", a: "Yes. Moderated video sessions and unmoderated testing tools both work well and make it easier to reach real customers." }
        ]
      },
      fr: {
        term: "Test d'utilisabilité",
        definition: "Le test d'utilisabilité est une méthode de recherche où de vrais utilisateurs tentent d'accomplir des tâches précises avec un produit pendant que des observateurs notent où ils ont du mal.",
        explanation: "Vous donnez à quelques utilisateurs représentatifs des tâches réalistes, comme \"recommander les fournitures du mois dernier\" ou \"trouver la politique de retour\", et vous les regardez travailler sans les aider. Là où ils hésitent, cliquent au mauvais endroit ou abandonnent, vous voyez quoi corriger.\n\nUn petit grossiste qui teste un nouveau portail de commandes peut mener des séances avec cinq clients par vidéoconférence. Même quelques séances révèlent souvent les plus gros problèmes, parce que beaucoup d'utilisateurs trébuchent aux mêmes endroits.\n\nLes tests fonctionnent mieux tôt et souvent : sur les maquettes fonctionnelles, puis les prototypes, puis le produit en service après les changements.",
        breaks: [
          { title: "Les testeurs sont des collègues, pas des utilisateurs.", detail: "Les employés connaissent trop bien le produit et ne trébuchent pas là où les clients le font." },
          { title: "L'animateur aide trop.", detail: "Donner des indices ou expliquer pendant la séance cache justement les problèmes que vous devez voir." },
          { title: "Les tâches sont orientées ou irréalistes.", detail: "Des consignes qui nomment le bouton à cliquer testent la lecture, pas l'utilisabilité." },
          { title: "Les constats ne mènent à rien.", detail: "Les séances produisent un rapport que personne ne priorise, et les mêmes problèmes sont livrés quand même." }
        ],
        diagram: ["Fixer des tâches réalistes", "Recruter de vrais usagers", "Observer sans aider", "Corriger les priorités"],
        faq: [
          { q: "Combien d'utilisateurs faut-il pour un test d'utilisabilité?", a: "Pour trouver les problèmes majeurs, de petites rondes d'environ cinq utilisateurs sont un point de départ courant, répétées après chaque série de changements." },
          { q: "Peut-on faire un test d'utilisabilité à distance?", a: "Oui. Les séances animées par vidéo et les outils de test non animés fonctionnent bien et permettent de joindre plus facilement de vrais clients." }
        ]
      },
      es: {
        term: "Prueba de usabilidad",
        definition: "La prueba de usabilidad es un método de investigación en el que usuarios reales intentan completar tareas definidas con un producto mientras observadores anotan dónde tienen dificultades.",
        explanation: "Das a unos pocos usuarios representativos tareas realistas, como \"volver a pedir los insumos del mes pasado\" o \"encontrar la política de devoluciones\", y los observas sin ayudarles. Donde dudan, hacen clic en lo incorrecto o se rinden, ves qué corregir.\n\nUn mayorista pequeño que prueba un nuevo portal de pedidos puede hacer sesiones con cinco clientes por videollamada. Incluso pocas sesiones suelen revelar los problemas más grandes, porque muchos usuarios tropiezan en los mismos puntos.\n\nLas pruebas funcionan mejor temprano y seguido: con wireframes, luego prototipos y después el producto en vivo tras cada cambio.",
        breaks: [
          { title: "Quienes prueban son compañeros, no usuarios.", detail: "El personal interno conoce demasiado el producto y no tropieza donde tropiezan los clientes." },
          { title: "El moderador ayuda demasiado.", detail: "Dar pistas o explicar durante la sesión oculta justo los problemas que necesitas ver." },
          { title: "Las tareas son sugestivas o poco realistas.", detail: "Instrucciones que nombran el botón a presionar prueban la lectura, no la usabilidad." },
          { title: "Nunca se actúa sobre los hallazgos.", detail: "Las sesiones producen un reporte que nadie prioriza, y los mismos problemas salen de todos modos." }
        ],
        diagram: ["Definir tareas realistas", "Reclutar usuarios reales", "Observar sin ayudar", "Corregir lo principal"],
        faq: [
          { q: "¿Cuántos usuarios necesito para una prueba de usabilidad?", a: "Para encontrar problemas mayores, rondas pequeñas de unos cinco usuarios son un punto de partida común, repetidas después de cada grupo de cambios." },
          { q: "¿Se puede hacer una prueba de usabilidad a distancia?", a: "Sí. Las sesiones moderadas por video y las herramientas de prueba no moderada funcionan bien y facilitan llegar a clientes reales." }
        ]
      }
    }
  }
]
