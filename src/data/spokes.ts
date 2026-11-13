export type Lang = 'en' | 'fr' | 'es'

export interface FaqItem {
  q: string
  a: string
}

export interface SpokeCopy {
  title: string
  seo: string
  answer: string
  problem: string[]
  whatWeDo: string[]
  howItRuns: string[]
  keep: string[]
  faq: FaqItem[]
}

export interface NewSpoke {
  slug: string
  portalCategory: string
  copy: Record<Lang, SpokeCopy>
}

export const newSpokes: NewSpoke[] = [
  {
    slug: 'database-management-service',
    portalCategory: 'Database design and management',
    copy: {
      en: {
        title: 'Database management as a service',
        seo: 'Database management as a service: backups, updates, monitoring and access control for your business databases, run by Awesoon and documented so you own it.',
        answer: 'Database management as a service means someone else keeps your business database backed up, patched, watched and tidy, so your team does not have to. Awesoon runs that work on a set schedule and writes down every step, so you can take it back at any time.',
        problem: [
          'Nobody on your team owns the database, so backups and updates happen when someone remembers',
          'Reports slow down and nobody knows why',
          'You are not sure who has access, or whether a restore would actually work',
        ],
        whatWeDo: [
          'Review the databases you run today, where they live and who uses them',
          'Set up backups, then test a real restore so you know it works',
          'Apply updates and security patches on a schedule you agree to',
          'Watch size, speed and errors, and fix problems before people notice them',
          'Keep access lists current, so only the right people can read or change data',
        ],
        howItRuns: [
          'A 30-minute discovery call to understand what you run and what worries you',
          'A written review of your databases and a short plan of what we will look after',
          'Ongoing care on an agreed schedule, with a plain monthly note of what was done',
        ],
        keep: [
          'A runbook for every routine task, written for your team',
          'Admin access and credentials in your name, never ours',
          'A tested restore process and a record of every change',
        ],
        faq: [
          { q: 'Which databases do you look after?', a: 'Common business databases such as PostgreSQL, MySQL and Microsoft SQL Server, plus the databases behind ERP and CRM tools. Tell us what you run on the discovery call and we will say plainly if it fits.' },
          { q: 'Do we lose control of our data?', a: 'No. Accounts stay in your name, and every task is written down so your own team or another provider can take over.' },
          { q: 'Can you work with our cloud provider?', a: 'Yes. We work inside the cloud or hosting account you already have.' },
        ],
      },
      fr: {
        title: 'Gestion de bases de données en tant que service',
        seo: 'Gestion de bases de données en tant que service : sauvegardes, mises à jour, surveillance et contrôle des accès, assurés par Awesoon et documentés pour que vous restiez propriétaire.',
        answer: "La gestion de bases de données en tant que service signifie que quelqu'un d'autre sauvegarde, met à jour, surveille et entretient votre base de données, pour que votre équipe n'ait pas à le faire. Awesoon fait ce travail selon un calendrier fixe et documente chaque étape, pour que vous puissiez le reprendre à tout moment.",
        problem: [
          "Personne dans votre équipe n'est responsable de la base de données, donc les sauvegardes et mises à jour se font quand quelqu'un y pense",
          'Les rapports ralentissent et personne ne sait pourquoi',
          "Vous ne savez pas qui a accès, ni si une restauration fonctionnerait vraiment",
        ],
        whatWeDo: [
          'Examiner les bases de données que vous utilisez, où elles se trouvent et qui les utilise',
          'Mettre en place les sauvegardes, puis tester une vraie restauration',
          'Appliquer les mises à jour et correctifs de sécurité selon un calendrier convenu',
          "Surveiller la taille, la vitesse et les erreurs, et corriger les problèmes avant qu'ils se voient",
          'Tenir à jour les listes d’accès, pour que seules les bonnes personnes lisent ou modifient les données',
        ],
        howItRuns: [
          'Un appel découverte de 30 minutes pour comprendre ce que vous utilisez et ce qui vous inquiète',
          'Un examen écrit de vos bases de données et un court plan de ce que nous prenons en charge',
          'Un entretien continu selon un calendrier convenu, avec une note mensuelle simple de ce qui a été fait',
        ],
        keep: [
          'Une procédure écrite pour chaque tâche courante, rédigée pour votre équipe',
          "Les accès administrateur et identifiants à votre nom, jamais au nôtre",
          'Une procédure de restauration testée et un registre de chaque changement',
        ],
        faq: [
          { q: 'Quelles bases de données prenez-vous en charge?', a: "Les bases courantes comme PostgreSQL, MySQL et Microsoft SQL Server, ainsi que celles derrière les outils ERP et CRM. Dites-nous ce que vous utilisez lors de l'appel et nous vous dirons franchement si cela convient." },
          { q: 'Perdons-nous le contrôle de nos données?', a: 'Non. Les comptes restent à votre nom et chaque tâche est documentée pour que votre équipe ou un autre fournisseur puisse reprendre.' },
          { q: 'Pouvez-vous travailler avec notre fournisseur infonuagique?', a: "Oui. Nous travaillons dans le compte d'hébergement que vous avez déjà." },
        ],
      },
      es: {
        title: 'Gestión de bases de datos como servicio',
        seo: 'Gestión de bases de datos como servicio: copias de seguridad, actualizaciones, monitoreo y control de accesos, a cargo de Awesoon y documentado para que usted sea el dueño.',
        answer: 'La gestión de bases de datos como servicio significa que alguien más mantiene su base de datos respaldada, actualizada, vigilada y ordenada, para que su equipo no tenga que hacerlo. Awesoon hace ese trabajo con un calendario fijo y documenta cada paso, para que usted pueda retomarlo cuando quiera.',
        problem: [
          'Nadie en su equipo es responsable de la base de datos, así que las copias y actualizaciones ocurren cuando alguien se acuerda',
          'Los informes se vuelven lentos y nadie sabe por qué',
          'No sabe quién tiene acceso, ni si una restauración funcionaría de verdad',
        ],
        whatWeDo: [
          'Revisar las bases de datos que usa hoy, dónde están y quién las usa',
          'Configurar copias de seguridad y probar una restauración real',
          'Aplicar actualizaciones y parches de seguridad en un calendario acordado',
          'Vigilar el tamaño, la velocidad y los errores, y resolver problemas antes de que se noten',
          'Mantener al día las listas de acceso, para que solo las personas correctas lean o cambien datos',
        ],
        howItRuns: [
          'Una llamada de descubrimiento de 30 minutos para entender qué usa y qué le preocupa',
          'Una revisión escrita de sus bases de datos y un plan corto de lo que cuidaremos',
          'Cuidado continuo en un calendario acordado, con una nota mensual sencilla de lo que se hizo',
        ],
        keep: [
          'Un manual para cada tarea de rutina, escrito para su equipo',
          'Accesos de administrador y credenciales a su nombre, nunca al nuestro',
          'Un proceso de restauración probado y un registro de cada cambio',
        ],
        faq: [
          { q: '¿Qué bases de datos atienden?', a: 'Bases comunes como PostgreSQL, MySQL y Microsoft SQL Server, además de las que hay detrás de herramientas ERP y CRM. Cuéntenos qué usa en la llamada y le diremos con claridad si encaja.' },
          { q: '¿Perdemos el control de nuestros datos?', a: 'No. Las cuentas siguen a su nombre y cada tarea queda documentada para que su equipo u otro proveedor pueda continuar.' },
          { q: '¿Pueden trabajar con nuestro proveedor de nube?', a: 'Sí. Trabajamos dentro de la cuenta de nube o alojamiento que ya tiene.' },
        ],
      },
    },
  },
  {
    slug: 'application-programming',
    portalCategory: 'Application programming services',
    copy: {
      en: {
        title: 'Application programming',
        seo: 'Application programming for business: custom web and internal apps built around how your team works, with the code, accounts and documentation in your name.',
        answer: 'Application programming is building software that does a job your off-the-shelf tools cannot, such as an internal app, a customer portal or a tool that fills a gap between systems. Awesoon builds it around how your team actually works and hands you the code, the accounts and the documentation.',
        problem: [
          'Your team works around a gap that no product on the market fills',
          'A spreadsheet or old tool has become the app the business depends on',
          'You were quoted a large platform when you only need one focused tool',
        ],
        whatWeDo: [
          'Map the job the app has to do and who will use it',
          'Agree on the smallest version that solves the real problem',
          'Build it in short steps you can see and try',
          'Connect it to the systems it needs, such as your ERP, CRM or store',
          'Test it with the people who will use it before it goes live',
        ],
        howItRuns: [
          'A 30-minute discovery call about the job and the people involved',
          'A short written scope: what it does, what it does not do, and how it connects',
          'Build in steps you review, then launch and handover',
        ],
        keep: [
          'The full source code in your own repository',
          'Hosting and service accounts in your name',
          'Plain documentation so another developer can pick it up',
        ],
        faq: [
          { q: 'Should we build or buy?', a: 'Buy when a product already does the job well. We only recommend building when nothing on the market fits, and we will tell you if a product would do.' },
          { q: 'Who owns the code?', a: 'You do. It lives in your repository from the first day.' },
          { q: 'Can you look after it after launch?', a: 'Yes, through our support service, or we hand it to your own team with documentation.' },
        ],
      },
      fr: {
        title: "Programmation d'applications",
        seo: "Programmation d'applications pour les entreprises : applications web et internes conçues selon le travail de votre équipe, avec le code, les comptes et la documentation à votre nom.",
        answer: "La programmation d'applications consiste à créer un logiciel qui fait un travail que vos outils standards ne peuvent pas faire, comme une application interne, un portail client ou un outil qui comble un vide entre vos systèmes. Awesoon le construit selon la façon dont votre équipe travaille vraiment et vous remet le code, les comptes et la documentation.",
        problem: [
          'Votre équipe contourne un vide qu’aucun produit sur le marché ne comble',
          "Un tableur ou un vieil outil est devenu l'application dont l'entreprise dépend",
          "On vous a proposé une grosse plateforme alors qu'il vous faut un seul outil ciblé",
        ],
        whatWeDo: [
          "Définir le travail que l'application doit faire et qui l'utilisera",
          'Convenir de la plus petite version qui règle le vrai problème',
          'La construire par petites étapes que vous pouvez voir et essayer',
          "La connecter aux systèmes nécessaires, comme votre ERP, votre CRM ou votre boutique",
          "La tester avec les personnes qui l'utiliseront avant la mise en ligne",
        ],
        howItRuns: [
          'Un appel découverte de 30 minutes sur le travail et les personnes concernées',
          'Une courte portée écrite : ce que fait l’outil, ce qu’il ne fait pas et comment il se connecte',
          'Construction par étapes que vous révisez, puis lancement et transfert',
        ],
        keep: [
          'Le code source complet dans votre propre dépôt',
          "Les comptes d'hébergement et de services à votre nom",
          "Une documentation simple pour qu'un autre développeur puisse reprendre",
        ],
        faq: [
          { q: 'Faut-il construire ou acheter?', a: "Achetez quand un produit fait déjà bien le travail. Nous recommandons de construire seulement quand rien sur le marché ne convient, et nous vous le dirons si un produit suffit." },
          { q: 'À qui appartient le code?', a: 'À vous. Il est dans votre dépôt dès le premier jour.' },
          { q: 'Pouvez-vous en assurer le suivi après le lancement?', a: 'Oui, par notre service de soutien, ou nous le remettons à votre équipe avec la documentation.' },
        ],
      },
      es: {
        title: 'Programación de aplicaciones',
        seo: 'Programación de aplicaciones para empresas: aplicaciones web e internas hechas a la medida de cómo trabaja su equipo, con el código, las cuentas y la documentación a su nombre.',
        answer: 'La programación de aplicaciones es crear software que hace un trabajo que sus herramientas comerciales no pueden, como una aplicación interna, un portal de clientes o una herramienta que llena un hueco entre sistemas. Awesoon lo construye según cómo trabaja su equipo de verdad y le entrega el código, las cuentas y la documentación.',
        problem: [
          'Su equipo rodea un hueco que ningún producto del mercado cubre',
          'Una hoja de cálculo o una herramienta vieja se volvió la aplicación de la que depende el negocio',
          'Le cotizaron una plataforma grande cuando solo necesita una herramienta enfocada',
        ],
        whatWeDo: [
          'Definir el trabajo que debe hacer la aplicación y quién la usará',
          'Acordar la versión más pequeña que resuelve el problema real',
          'Construirla en pasos cortos que puede ver y probar',
          'Conectarla a los sistemas que necesita, como su ERP, CRM o tienda',
          'Probarla con las personas que la usarán antes de lanzarla',
        ],
        howItRuns: [
          'Una llamada de descubrimiento de 30 minutos sobre el trabajo y las personas',
          'Un alcance escrito corto: qué hace, qué no hace y cómo se conecta',
          'Construcción en pasos que usted revisa, luego lanzamiento y entrega',
        ],
        keep: [
          'El código fuente completo en su propio repositorio',
          'Cuentas de alojamiento y servicios a su nombre',
          'Documentación sencilla para que otro desarrollador pueda continuar',
        ],
        faq: [
          { q: '¿Construir o comprar?', a: 'Compre cuando un producto ya hace bien el trabajo. Solo recomendamos construir cuando nada del mercado encaja, y le diremos si un producto basta.' },
          { q: '¿De quién es el código?', a: 'Suyo. Está en su repositorio desde el primer día.' },
          { q: '¿Pueden mantenerla después del lanzamiento?', a: 'Sí, con nuestro servicio de soporte, o la entregamos a su equipo con documentación.' },
        ],
      },
    },
  },
  {
    slug: 'client-server-programming',
    portalCategory: 'Client or server programming services',
    copy: {
      en: {
        title: 'Client and server programming',
        seo: 'Client and server programming: the screens people use and the back end that stores and moves data, built together and documented for your team.',
        answer: 'Client and server programming covers both halves of a business app: the screens people use and the server that stores data, applies rules and talks to other systems. Awesoon builds both sides together so they fit, and documents how they connect.',
        problem: [
          'Your app works on screen but breaks when many people use it at once',
          'The back end was built by someone who left, and nobody can change it safely',
          'Front end and back end were built by different vendors who blame each other',
        ],
        whatWeDo: [
          'Review the current client, server and how they talk to each other',
          'Design clear connections between the screens and the server',
          'Build or rebuild the server side: data, rules, security and connections',
          'Build or improve the screens people use on web or mobile',
          'Test both sides together under real use',
        ],
        howItRuns: [
          'A 30-minute discovery call about what the app does and where it hurts',
          'A written review and a plan for each side',
          'Build in steps you review, then handover with documentation',
        ],
        keep: [
          'Source code for both sides in your repository',
          'A plain map of how the client and server connect',
          'Server and hosting accounts in your name',
        ],
        faq: [
          { q: 'Can you take over code another developer wrote?', a: 'Yes. We start with a review, tell you what we find, and only then suggest what to change.' },
          { q: 'Do you work on mobile apps too?', a: 'Yes, the client side can be a web app or a mobile app.' },
          { q: 'Who hosts it?', a: 'It runs in a hosting account you own. We can help you choose one if you do not have one yet.' },
        ],
      },
      fr: {
        title: 'Programmation client et serveur',
        seo: 'Programmation client et serveur : les écrans que les gens utilisent et le serveur qui stocke et déplace les données, construits ensemble et documentés pour votre équipe.',
        answer: "La programmation client et serveur couvre les deux moitiés d'une application d'affaires : les écrans que les gens utilisent et le serveur qui stocke les données, applique les règles et communique avec les autres systèmes. Awesoon construit les deux côtés ensemble pour qu'ils s'accordent, et documente leurs liens.",
        problem: [
          "Votre application fonctionne à l'écran mais flanche quand plusieurs personnes l'utilisent en même temps",
          "Le serveur a été construit par quelqu'un qui est parti, et personne ne peut le modifier sans risque",
          "L'avant et l'arrière ont été faits par des fournisseurs différents qui se renvoient la balle",
        ],
        whatWeDo: [
          'Examiner le client, le serveur actuel et la façon dont ils communiquent',
          'Concevoir des liens clairs entre les écrans et le serveur',
          'Construire ou refaire le côté serveur : données, règles, sécurité et connexions',
          'Construire ou améliorer les écrans utilisés sur le web ou le mobile',
          'Tester les deux côtés ensemble en conditions réelles',
        ],
        howItRuns: [
          "Un appel découverte de 30 minutes sur ce que fait l'application et où elle bloque",
          'Un examen écrit et un plan pour chaque côté',
          'Construction par étapes que vous révisez, puis transfert avec documentation',
        ],
        keep: [
          'Le code source des deux côtés dans votre dépôt',
          'Une carte simple des liens entre le client et le serveur',
          "Les comptes de serveur et d'hébergement à votre nom",
        ],
        faq: [
          { q: "Pouvez-vous reprendre le code d'un autre développeur?", a: 'Oui. Nous commençons par un examen, nous vous disons ce que nous trouvons, puis seulement nous proposons des changements.' },
          { q: 'Travaillez-vous aussi sur des applications mobiles?', a: 'Oui, le côté client peut être une application web ou mobile.' },
          { q: "Qui s'occupe de l'hébergement?", a: "L'application tourne dans un compte que vous possédez. Nous pouvons vous aider à en choisir un si vous n'en avez pas encore." },
        ],
      },
      es: {
        title: 'Programación de cliente y servidor',
        seo: 'Programación de cliente y servidor: las pantallas que usa la gente y el servidor que guarda y mueve los datos, construidos juntos y documentados para su equipo.',
        answer: 'La programación de cliente y servidor cubre las dos mitades de una aplicación de negocio: las pantallas que usa la gente y el servidor que guarda datos, aplica reglas y habla con otros sistemas. Awesoon construye ambos lados juntos para que encajen y documenta cómo se conectan.',
        problem: [
          'Su aplicación funciona en pantalla pero falla cuando muchas personas la usan a la vez',
          'El servidor lo hizo alguien que se fue y nadie puede cambiarlo con seguridad',
          'El frente y el servidor los hicieron proveedores distintos que se culpan entre sí',
        ],
        whatWeDo: [
          'Revisar el cliente, el servidor actual y cómo se comunican',
          'Diseñar conexiones claras entre las pantallas y el servidor',
          'Construir o rehacer el lado del servidor: datos, reglas, seguridad y conexiones',
          'Construir o mejorar las pantallas que se usan en web o móvil',
          'Probar ambos lados juntos con uso real',
        ],
        howItRuns: [
          'Una llamada de descubrimiento de 30 minutos sobre qué hace la aplicación y dónde falla',
          'Una revisión escrita y un plan para cada lado',
          'Construcción en pasos que usted revisa, luego entrega con documentación',
        ],
        keep: [
          'El código fuente de ambos lados en su repositorio',
          'Un mapa sencillo de cómo se conectan cliente y servidor',
          'Cuentas de servidor y alojamiento a su nombre',
        ],
        faq: [
          { q: '¿Pueden continuar código que escribió otro desarrollador?', a: 'Sí. Empezamos con una revisión, le contamos lo que encontramos y solo entonces sugerimos cambios.' },
          { q: '¿También trabajan en aplicaciones móviles?', a: 'Sí, el lado del cliente puede ser una aplicación web o móvil.' },
          { q: '¿Quién la aloja?', a: 'Corre en una cuenta de alojamiento suya. Podemos ayudarle a elegir una si aún no la tiene.' },
        ],
      },
    },
  },
  {
    slug: 'database-design',
    portalCategory: 'Database design and management',
    copy: {
      en: {
        title: 'Database design',
        seo: 'Database design services: a clean structure for your business data, so reports agree, apps stay fast and new systems connect without rework.',
        answer: 'Database design is deciding how your business data is structured: which tables exist, how they relate and which system holds the true copy. Awesoon designs that structure around your real processes so reports agree, apps stay fast and new tools connect without rework.',
        problem: [
          'Two reports give two different numbers for the same thing',
          'The same customer or product exists in several places with different details',
          'Every new tool needs a custom workaround to read your data',
        ],
        whatWeDo: [
          'List the data your business runs on and where each piece lives today',
          'Decide which system holds the true copy of each record',
          'Design tables, relationships and naming that match how you work',
          'Plan how existing data moves into the new structure safely',
          'Write a data dictionary your team can read',
        ],
        howItRuns: [
          'A 30-minute discovery call about the data and the reports that matter',
          'A written design you review before anything is built',
          'Migration and checks, then handover with the data dictionary',
        ],
        keep: [
          'The database design and diagrams',
          'A data dictionary in plain language',
          'Migration scripts and a record of every check',
        ],
        faq: [
          { q: 'Do we need a new database to fix messy data?', a: 'Not always. Often the fix is clearer rules about which system owns each record. We will tell you which applies.' },
          { q: 'Will our current systems keep working during the change?', a: 'Yes. We plan the move so day-to-day work carries on, and test before switching anything over.' },
          { q: 'Can you design for an ERP or CRM?', a: 'Yes. Many designs sit alongside an ERP or CRM and decide what each one owns.' },
        ],
      },
      fr: {
        title: 'Conception de bases de données',
        seo: 'Conception de bases de données : une structure claire pour vos données, afin que les rapports concordent, que les applications restent rapides et que les nouveaux systèmes se connectent sans reprise.',
        answer: "La conception de bases de données consiste à décider comment vos données sont structurées : quelles tables existent, comment elles se relient et quel système détient la vraie copie. Awesoon conçoit cette structure selon vos vrais processus pour que les rapports concordent, que les applications restent rapides et que les nouveaux outils se connectent sans reprise.",
        problem: [
          'Deux rapports donnent deux chiffres différents pour la même chose',
          'Le même client ou produit existe à plusieurs endroits avec des détails différents',
          'Chaque nouvel outil demande une solution de contournement pour lire vos données',
        ],
        whatWeDo: [
          "Lister les données qui font tourner l'entreprise et où chacune se trouve aujourd'hui",
          'Décider quel système détient la vraie copie de chaque enregistrement',
          'Concevoir les tables, les relations et les noms selon votre façon de travailler',
          'Planifier le transfert sûr des données existantes vers la nouvelle structure',
          'Rédiger un dictionnaire de données lisible par votre équipe',
        ],
        howItRuns: [
          'Un appel découverte de 30 minutes sur les données et les rapports importants',
          'Une conception écrite que vous révisez avant toute construction',
          'Migration et vérifications, puis transfert avec le dictionnaire de données',
        ],
        keep: [
          'La conception de la base de données et ses diagrammes',
          'Un dictionnaire de données en langage simple',
          'Les scripts de migration et un registre de chaque vérification',
        ],
        faq: [
          { q: 'Faut-il une nouvelle base pour régler des données en désordre?', a: 'Pas toujours. Souvent, la solution est une règle claire sur le système qui détient chaque enregistrement. Nous vous dirons ce qui s’applique.' },
          { q: 'Nos systèmes actuels continueront-ils de fonctionner pendant le changement?', a: 'Oui. Nous planifions le transfert pour que le travail quotidien continue, et nous testons avant toute bascule.' },
          { q: 'Pouvez-vous concevoir pour un ERP ou un CRM?', a: 'Oui. Beaucoup de conceptions côtoient un ERP ou un CRM et précisent ce que chacun détient.' },
        ],
      },
      es: {
        title: 'Diseño de bases de datos',
        seo: 'Diseño de bases de datos: una estructura clara para los datos de su negocio, para que los informes coincidan, las aplicaciones sigan rápidas y los sistemas nuevos se conecten sin rehacer trabajo.',
        answer: 'El diseño de bases de datos es decidir cómo se estructuran los datos de su negocio: qué tablas existen, cómo se relacionan y qué sistema tiene la copia verdadera. Awesoon diseña esa estructura según sus procesos reales para que los informes coincidan, las aplicaciones sigan rápidas y las herramientas nuevas se conecten sin rehacer trabajo.',
        problem: [
          'Dos informes dan dos cifras distintas para lo mismo',
          'El mismo cliente o producto existe en varios lugares con datos diferentes',
          'Cada herramienta nueva necesita un arreglo especial para leer sus datos',
        ],
        whatWeDo: [
          'Listar los datos con los que funciona su negocio y dónde está cada uno hoy',
          'Decidir qué sistema tiene la copia verdadera de cada registro',
          'Diseñar tablas, relaciones y nombres que reflejen cómo trabaja',
          'Planear cómo pasar los datos actuales a la nueva estructura con seguridad',
          'Escribir un diccionario de datos que su equipo pueda leer',
        ],
        howItRuns: [
          'Una llamada de descubrimiento de 30 minutos sobre los datos y los informes que importan',
          'Un diseño escrito que usted revisa antes de construir nada',
          'Migración y verificaciones, luego entrega con el diccionario de datos',
        ],
        keep: [
          'El diseño de la base de datos y sus diagramas',
          'Un diccionario de datos en lenguaje sencillo',
          'Los scripts de migración y un registro de cada verificación',
        ],
        faq: [
          { q: '¿Necesitamos una base nueva para ordenar datos desordenados?', a: 'No siempre. Muchas veces la solución es una regla clara sobre qué sistema es dueño de cada registro. Le diremos cuál aplica.' },
          { q: '¿Nuestros sistemas actuales seguirán funcionando durante el cambio?', a: 'Sí. Planeamos el paso para que el trabajo diario siga, y probamos antes de cambiar nada.' },
          { q: '¿Pueden diseñar para un ERP o CRM?', a: 'Sí. Muchos diseños conviven con un ERP o CRM y definen qué es dueño de qué.' },
        ],
      },
    },
  },
  {
    slug: 'database-interfaces',
    portalCategory: 'Database design and management',
    copy: {
      en: {
        title: 'Database interfaces and query tools',
        seo: 'Database interfaces and query tools: simple screens, saved queries and reports that let your team find and update data without writing code.',
        answer: 'Database interfaces and query tools are the screens, saved searches and reports that let people find and update business data without writing code. Awesoon builds them so your team gets answers directly instead of waiting for someone technical.',
        problem: [
          'Only one person knows how to pull the numbers you need',
          'People export data to spreadsheets just to filter it',
          'Simple updates need a developer because there is no screen for them',
        ],
        whatWeDo: [
          'Find the questions your team asks the data most often',
          'Build saved queries and reports for those questions',
          'Build simple screens for safe lookups and updates',
          'Set permissions so each person sees only what they should',
          'Train your team with short, written guides',
        ],
        howItRuns: [
          'A 30-minute discovery call about the questions people ask today',
          'A short list of tools to build, in order of use',
          'Build, try with your team, adjust, then hand over',
        ],
        keep: [
          'The queries, reports and screens, documented',
          'Permission rules you can change yourself',
          'Short guides for each tool',
        ],
        faq: [
          { q: 'Do we need a new reporting product?', a: 'Sometimes a product such as a dashboard tool is the right answer, and we will say so. Other times a few saved queries and a simple screen do the job.' },
          { q: 'Is it safe to let staff update data?', a: 'Yes, when the screen only allows the right changes and keeps a record. We design it that way.' },
          { q: 'Can it read from our ERP or CRM?', a: 'Usually yes, through their reporting features or APIs.' },
        ],
      },
      fr: {
        title: "Interfaces de bases de données et outils d'interrogation",
        seo: "Interfaces de bases de données et outils d'interrogation : écrans simples, requêtes enregistrées et rapports pour trouver et mettre à jour les données sans écrire de code.",
        answer: "Les interfaces de bases de données et outils d'interrogation sont les écrans, recherches enregistrées et rapports qui permettent de trouver et de mettre à jour les données sans écrire de code. Awesoon les construit pour que votre équipe obtienne ses réponses directement, sans attendre une personne technique.",
        problem: [
          'Une seule personne sait extraire les chiffres dont vous avez besoin',
          'Les gens exportent les données dans un tableur seulement pour les filtrer',
          "Une mise à jour simple demande un développeur parce qu'il n'y a pas d'écran pour la faire",
        ],
        whatWeDo: [
          'Repérer les questions que votre équipe pose le plus souvent aux données',
          'Construire des requêtes enregistrées et des rapports pour ces questions',
          'Construire des écrans simples pour consulter et mettre à jour en toute sécurité',
          'Définir les permissions pour que chacun voie seulement ce qu’il doit voir',
          'Former votre équipe avec de courts guides écrits',
        ],
        howItRuns: [
          "Un appel découverte de 30 minutes sur les questions posées aujourd'hui",
          "Une courte liste d'outils à construire, par ordre d'usage",
          'Construction, essai avec votre équipe, ajustements, puis transfert',
        ],
        keep: [
          'Les requêtes, rapports et écrans, documentés',
          'Des règles de permissions que vous pouvez modifier vous-même',
          'De courts guides pour chaque outil',
        ],
        faq: [
          { q: 'Faut-il un nouveau produit de rapports?', a: "Parfois un produit comme un outil de tableaux de bord est la bonne réponse, et nous le dirons. D'autres fois, quelques requêtes enregistrées et un écran simple suffisent." },
          { q: 'Est-ce sûr de laisser le personnel modifier les données?', a: "Oui, quand l'écran n'autorise que les bons changements et garde un registre. Nous le concevons ainsi." },
          { q: 'Peut-il lire notre ERP ou CRM?', a: 'Habituellement oui, par leurs fonctions de rapports ou leurs API.' },
        ],
      },
      es: {
        title: 'Interfaces de bases de datos y herramientas de consulta',
        seo: 'Interfaces de bases de datos y herramientas de consulta: pantallas simples, consultas guardadas e informes para encontrar y actualizar datos sin escribir código.',
        answer: 'Las interfaces de bases de datos y herramientas de consulta son las pantallas, búsquedas guardadas e informes que permiten encontrar y actualizar datos del negocio sin escribir código. Awesoon las construye para que su equipo obtenga respuestas directamente, sin esperar a alguien técnico.',
        problem: [
          'Solo una persona sabe sacar las cifras que necesita',
          'La gente exporta datos a hojas de cálculo solo para filtrarlos',
          'Una actualización simple necesita un desarrollador porque no hay pantalla para hacerla',
        ],
        whatWeDo: [
          'Encontrar las preguntas que su equipo hace a los datos con más frecuencia',
          'Construir consultas guardadas e informes para esas preguntas',
          'Construir pantallas simples para consultar y actualizar con seguridad',
          'Definir permisos para que cada persona vea solo lo que debe',
          'Capacitar a su equipo con guías escritas cortas',
        ],
        howItRuns: [
          'Una llamada de descubrimiento de 30 minutos sobre las preguntas que se hacen hoy',
          'Una lista corta de herramientas a construir, en orden de uso',
          'Construcción, prueba con su equipo, ajustes y entrega',
        ],
        keep: [
          'Las consultas, informes y pantallas, documentados',
          'Reglas de permisos que puede cambiar usted mismo',
          'Guías cortas para cada herramienta',
        ],
        faq: [
          { q: '¿Necesitamos un producto nuevo de informes?', a: 'A veces un producto como una herramienta de tableros es la respuesta correcta, y se lo diremos. Otras veces bastan unas consultas guardadas y una pantalla simple.' },
          { q: '¿Es seguro dejar que el personal actualice datos?', a: 'Sí, cuando la pantalla solo permite los cambios correctos y guarda un registro. Así lo diseñamos.' },
          { q: '¿Puede leer nuestro ERP o CRM?', a: 'Normalmente sí, mediante sus funciones de informes o sus API.' },
        ],
      },
    },
  },
  {
    slug: 'interface-development',
    portalCategory: 'Graphical user interface development',
    copy: {
      en: {
        title: 'Interface development',
        seo: 'Interface development: turning approved designs into fast, accessible screens for web and mobile business apps, built to WCAG AA.',
        answer: 'Interface development is turning a design into working screens that people can click, type into and rely on, on the web or on a phone. Awesoon builds those screens to be fast, accessible to WCAG AA and consistent with your design system.',
        problem: [
          'You have designs, but the built screens look and behave differently',
          'Your app is hard to use with a keyboard or screen reader',
          'Each screen was built differently, so every change takes longer than it should',
        ],
        whatWeDo: [
          'Review the designs and the screens you have today',
          'Build reusable components that match your design system',
          'Build each screen to meet WCAG AA, with keyboard and screen reader support',
          'Make screens fast on real phones and slow connections',
          'Connect the screens to your server or APIs',
        ],
        howItRuns: [
          'A 30-minute discovery call about the screens and the people who use them',
          'A short plan of components and screens, in build order',
          'Build in steps you review, then handover with a component guide',
        ],
        keep: [
          'The component library and screens in your repository',
          'An accessibility check record for each screen',
          'A short component guide for future work',
        ],
        faq: [
          { q: 'Do you also design the screens?', a: 'Yes. Our design hub covers interface design. We can build from your designs or from ours.' },
          { q: 'Which technologies do you use?', a: 'Common modern web and mobile frameworks. We choose what your team can maintain, and say why.' },
          { q: 'Can you fix accessibility on an existing app?', a: 'Yes. We start with a check, list the issues in order, and fix them.' },
        ],
      },
      fr: {
        title: "Développement d'interfaces",
        seo: "Développement d'interfaces : transformer des maquettes approuvées en écrans rapides et accessibles pour les applications web et mobiles, conformes à WCAG AA.",
        answer: "Le développement d'interfaces consiste à transformer une maquette en écrans fonctionnels sur lesquels les gens peuvent cliquer, écrire et compter, sur le web ou sur un téléphone. Awesoon construit ces écrans pour qu'ils soient rapides, accessibles selon WCAG AA et cohérents avec votre système de design.",
        problem: [
          'Vous avez des maquettes, mais les écrans construits ont une autre apparence et un autre comportement',
          'Votre application est difficile à utiliser au clavier ou avec un lecteur d’écran',
          'Chaque écran a été construit différemment, donc chaque changement prend plus de temps que prévu',
        ],
        whatWeDo: [
          "Examiner les maquettes et les écrans actuels",
          'Construire des composants réutilisables fidèles à votre système de design',
          "Construire chaque écran selon WCAG AA, avec soutien du clavier et des lecteurs d'écran",
          'Rendre les écrans rapides sur de vrais téléphones et des connexions lentes',
          'Connecter les écrans à votre serveur ou à vos API',
        ],
        howItRuns: [
          'Un appel découverte de 30 minutes sur les écrans et les personnes qui les utilisent',
          "Un court plan des composants et écrans, dans l'ordre de construction",
          'Construction par étapes que vous révisez, puis transfert avec un guide des composants',
        ],
        keep: [
          'La bibliothèque de composants et les écrans dans votre dépôt',
          "Un registre de vérification d'accessibilité pour chaque écran",
          'Un court guide des composants pour la suite',
        ],
        faq: [
          { q: 'Concevez-vous aussi les écrans?', a: 'Oui. Notre pôle design couvre la conception d’interfaces. Nous pouvons construire à partir de vos maquettes ou des nôtres.' },
          { q: 'Quelles technologies utilisez-vous?', a: 'Des cadres web et mobiles modernes et courants. Nous choisissons ce que votre équipe peut maintenir, et nous expliquons pourquoi.' },
          { q: "Pouvez-vous corriger l'accessibilité d'une application existante?", a: 'Oui. Nous commençons par une vérification, listons les problèmes par ordre et les corrigeons.' },
        ],
      },
      es: {
        title: 'Desarrollo de interfaces',
        seo: 'Desarrollo de interfaces: convertir diseños aprobados en pantallas rápidas y accesibles para aplicaciones web y móviles, conforme a WCAG AA.',
        answer: 'El desarrollo de interfaces es convertir un diseño en pantallas que funcionan, donde la gente puede hacer clic, escribir y confiar, en la web o en el teléfono. Awesoon construye esas pantallas para que sean rápidas, accesibles según WCAG AA y coherentes con su sistema de diseño.',
        problem: [
          'Tiene diseños, pero las pantallas construidas se ven y se comportan distinto',
          'Su aplicación es difícil de usar con teclado o lector de pantalla',
          'Cada pantalla se hizo de forma distinta, así que cada cambio tarda más de lo debido',
        ],
        whatWeDo: [
          'Revisar los diseños y las pantallas que tiene hoy',
          'Construir componentes reutilizables que siguen su sistema de diseño',
          'Construir cada pantalla según WCAG AA, con soporte de teclado y lector de pantalla',
          'Hacer las pantallas rápidas en teléfonos reales y conexiones lentas',
          'Conectar las pantallas a su servidor o sus API',
        ],
        howItRuns: [
          'Una llamada de descubrimiento de 30 minutos sobre las pantallas y quién las usa',
          'Un plan corto de componentes y pantallas, en orden de construcción',
          'Construcción en pasos que usted revisa, luego entrega con una guía de componentes',
        ],
        keep: [
          'La biblioteca de componentes y las pantallas en su repositorio',
          'Un registro de revisión de accesibilidad por pantalla',
          'Una guía corta de componentes para el trabajo futuro',
        ],
        faq: [
          { q: '¿También diseñan las pantallas?', a: 'Sí. Nuestra área de diseño cubre el diseño de interfaces. Podemos construir con sus diseños o con los nuestros.' },
          { q: '¿Qué tecnologías usan?', a: 'Marcos web y móviles modernos y comunes. Elegimos lo que su equipo puede mantener y explicamos por qué.' },
          { q: '¿Pueden corregir la accesibilidad de una aplicación existente?', a: 'Sí. Empezamos con una revisión, listamos los problemas en orden y los corregimos.' },
        ],
      },
    },
  },
  {
    slug: 'erp-database-applications',
    portalCategory: 'ERP or database applications programming services',
    copy: {
      en: {
        title: 'ERP and database applications programming',
        seo: 'ERP and database applications programming: custom reports, extensions, scripts and connected apps for your ERP, built so upgrades stay safe.',
        answer: 'ERP and database applications programming is writing the custom pieces your ERP needs: reports, screens, scripts, extensions and small apps that read and write ERP data. Awesoon builds them so they survive upgrades and your team knows exactly what was changed.',
        problem: [
          'Your ERP does most of the job, but a few key steps still happen outside it',
          'Past customizations break every time the ERP is upgraded',
          'Nobody has a list of what was customized or why',
        ],
        whatWeDo: [
          'List what your ERP does today and where people step outside it',
          'Prefer standard features and settings before writing any code',
          'Build reports, scripts and extensions using the ERP’s supported methods',
          'Build small apps that read and write ERP data through its APIs',
          'Keep a register of every customization and test it before each upgrade',
        ],
        howItRuns: [
          'A 30-minute discovery call about your ERP and the gaps around it',
          'A written list of changes, each with its reason',
          'Build and test in a safe copy first, then release and handover',
        ],
        keep: [
          'A customization register with the reason for each change',
          'Source code and scripts in your repository',
          'Test notes to rerun before each upgrade',
        ],
        faq: [
          { q: 'Which ERP systems do you work with?', a: 'Common mid-market ERPs such as NetSuite, Microsoft Dynamics, Acumatica and Odoo. Ask on the call if yours is not listed.' },
          { q: 'Will custom code make upgrades harder?', a: 'Not when it uses supported methods and is tested before each upgrade. That is how we build it.' },
          { q: 'Can you take over customizations someone else wrote?', a: 'Yes. We review them first and record what each one does.' },
        ],
      },
      fr: {
        title: "Programmation d'applications ERP et de bases de données",
        seo: "Programmation d'applications ERP et de bases de données : rapports, extensions, scripts et applications connectées pour votre ERP, construits pour que les mises à niveau restent sûres.",
        answer: "La programmation d'applications ERP et de bases de données consiste à écrire les pièces sur mesure dont votre ERP a besoin : rapports, écrans, scripts, extensions et petites applications qui lisent et écrivent les données de l'ERP. Awesoon les construit pour qu'elles survivent aux mises à niveau et que votre équipe sache exactement ce qui a changé.",
        problem: [
          "Votre ERP fait presque tout, mais quelques étapes clés se font encore à l'extérieur",
          "Les personnalisations passées brisent à chaque mise à niveau de l'ERP",
          "Personne n'a la liste de ce qui a été personnalisé ni pourquoi",
        ],
        whatWeDo: [
          "Lister ce que fait votre ERP aujourd'hui et où les gens en sortent",
          'Privilégier les fonctions et réglages standards avant d’écrire du code',
          "Construire rapports, scripts et extensions par les méthodes prises en charge par l'ERP",
          "Construire de petites applications qui lisent et écrivent les données de l'ERP par ses API",
          'Tenir un registre de chaque personnalisation et la tester avant chaque mise à niveau',
        ],
        howItRuns: [
          'Un appel découverte de 30 minutes sur votre ERP et les vides autour',
          'Une liste écrite des changements, chacun avec sa raison',
          "Construction et tests dans une copie sûre d'abord, puis mise en production et transfert",
        ],
        keep: [
          'Un registre des personnalisations avec la raison de chaque changement',
          'Le code source et les scripts dans votre dépôt',
          'Des notes de tests à refaire avant chaque mise à niveau',
        ],
        faq: [
          { q: 'Avec quels ERP travaillez-vous?', a: "Des ERP courants du marché intermédiaire comme NetSuite, Microsoft Dynamics, Acumatica et Odoo. Demandez lors de l'appel si le vôtre n'y est pas." },
          { q: 'Le code sur mesure rendra-t-il les mises à niveau plus difficiles?', a: "Non, s'il utilise les méthodes prises en charge et qu'il est testé avant chaque mise à niveau. C'est ainsi que nous le construisons." },
          { q: "Pouvez-vous reprendre des personnalisations faites par d'autres?", a: 'Oui. Nous les examinons d’abord et consignons ce que fait chacune.' },
        ],
      },
      es: {
        title: 'Programación de aplicaciones ERP y de bases de datos',
        seo: 'Programación de aplicaciones ERP y de bases de datos: informes, extensiones, scripts y aplicaciones conectadas para su ERP, hechos para que las actualizaciones sigan siendo seguras.',
        answer: 'La programación de aplicaciones ERP y de bases de datos es escribir las piezas a medida que necesita su ERP: informes, pantallas, scripts, extensiones y pequeñas aplicaciones que leen y escriben datos del ERP. Awesoon las construye para que sobrevivan a las actualizaciones y su equipo sepa exactamente qué se cambió.',
        problem: [
          'Su ERP hace casi todo, pero algunos pasos clave aún ocurren fuera de él',
          'Las personalizaciones anteriores se rompen con cada actualización del ERP',
          'Nadie tiene una lista de lo que se personalizó ni por qué',
        ],
        whatWeDo: [
          'Listar lo que hace su ERP hoy y dónde la gente sale de él',
          'Preferir funciones y ajustes estándar antes de escribir código',
          'Construir informes, scripts y extensiones con los métodos que el ERP admite',
          'Construir pequeñas aplicaciones que leen y escriben datos del ERP mediante sus API',
          'Llevar un registro de cada personalización y probarla antes de cada actualización',
        ],
        howItRuns: [
          'Una llamada de descubrimiento de 30 minutos sobre su ERP y los huecos alrededor',
          'Una lista escrita de cambios, cada uno con su razón',
          'Construcción y pruebas primero en una copia segura, luego publicación y entrega',
        ],
        keep: [
          'Un registro de personalizaciones con la razón de cada cambio',
          'El código fuente y los scripts en su repositorio',
          'Notas de prueba para repetir antes de cada actualización',
        ],
        faq: [
          { q: '¿Con qué ERP trabajan?', a: 'ERP comunes del mercado medio como NetSuite, Microsoft Dynamics, Acumatica y Odoo. Pregunte en la llamada si el suyo no aparece.' },
          { q: '¿El código a medida hará más difíciles las actualizaciones?', a: 'No, si usa métodos admitidos y se prueba antes de cada actualización. Así lo construimos.' },
          { q: '¿Pueden continuar personalizaciones que hizo otra persona?', a: 'Sí. Primero las revisamos y registramos qué hace cada una.' },
        ],
      },
    },
  },
  {
    slug: 'crm-setup',
    portalCategory: 'CRM software',
    copy: {
      en: {
        title: 'CRM software setup',
        seo: 'CRM software setup: pipelines, fields, automations, imports and permissions configured in HubSpot, Salesforce, Zoho or Pipedrive around how you sell.',
        answer: 'CRM software setup is configuring a CRM such as HubSpot, Salesforce, Zoho or Pipedrive so it matches how you sell: your stages, fields, automations and permissions. Awesoon sets it up, imports your clean data and trains your team, without a long implementation project.',
        problem: [
          'You bought a CRM, but it still has the default settings and nobody uses it',
          'Contacts, deals and notes are split between inboxes and spreadsheets',
          'Your pipeline stages do not match how deals actually move',
        ],
        whatWeDo: [
          'Map how a lead becomes a customer in your business',
          'Set up pipelines, stages, fields and views to match',
          'Clean and import your contacts, companies and open deals',
          'Turn on the few automations that save the most time',
          'Set permissions and train your team in short sessions',
        ],
        howItRuns: [
          'A 30-minute discovery call about how you sell today',
          'A one-page setup plan you approve',
          'Setup, import, training, then a check-in once your team is using it',
        ],
        keep: [
          'A CRM in your name, set up for how you work',
          'A short guide to your pipeline, fields and automations',
          'Admin access for your own team',
        ],
        faq: [
          { q: 'Which CRM should we use?', a: 'It depends on your team size, sales process and other systems. We are vendor neutral and take no commissions, so the advice is about fit.' },
          { q: 'What is the difference between setup and implementation?', a: 'Setup configures one CRM for your sales process. Implementation is a larger project that also covers selection, integrations and rollout. See our CRM implementation page for that.' },
          { q: 'Can you connect the CRM to our other tools?', a: 'Yes. Our integration pages cover connecting your CRM to your ERP, store or email.' },
        ],
      },
      fr: {
        title: 'Configuration de logiciel CRM',
        seo: 'Configuration de logiciel CRM : pipelines, champs, automatisations, importations et permissions dans HubSpot, Salesforce, Zoho ou Pipedrive, selon votre façon de vendre.',
        answer: "La configuration de logiciel CRM consiste à paramétrer un CRM comme HubSpot, Salesforce, Zoho ou Pipedrive pour qu'il suive votre façon de vendre : étapes, champs, automatisations et permissions. Awesoon le configure, importe vos données nettoyées et forme votre équipe, sans long projet d'implantation.",
        problem: [
          "Vous avez acheté un CRM, mais il a encore les réglages par défaut et personne ne l'utilise",
          'Contacts, occasions et notes sont dispersés entre boîtes courriel et tableurs',
          'Les étapes de votre pipeline ne reflètent pas le vrai parcours des ventes',
        ],
        whatWeDo: [
          'Décrire comment un prospect devient client chez vous',
          'Configurer pipelines, étapes, champs et vues en conséquence',
          'Nettoyer et importer vos contacts, entreprises et occasions ouvertes',
          'Activer les quelques automatisations qui font gagner le plus de temps',
          'Définir les permissions et former votre équipe en courtes séances',
        ],
        howItRuns: [
          "Un appel découverte de 30 minutes sur votre façon de vendre aujourd'hui",
          "Un plan de configuration d'une page que vous approuvez",
          "Configuration, importation, formation, puis un suivi quand l'équipe l'utilise",
        ],
        keep: [
          'Un CRM à votre nom, configuré selon votre façon de travailler',
          'Un court guide de votre pipeline, de vos champs et de vos automatisations',
          'Un accès administrateur pour votre propre équipe',
        ],
        faq: [
          { q: 'Quel CRM devrions-nous utiliser?', a: "Cela dépend de la taille de l'équipe, du processus de vente et de vos autres systèmes. Nous sommes indépendants des fournisseurs et ne touchons aucune commission, donc le conseil porte sur l'adéquation." },
          { q: 'Quelle différence entre configuration et implantation?', a: "La configuration paramètre un CRM pour votre processus de vente. L'implantation est un projet plus large qui couvre aussi le choix, les intégrations et le déploiement. Voyez notre page sur l'implantation CRM." },
          { q: 'Pouvez-vous connecter le CRM à nos autres outils?', a: "Oui. Nos pages d'intégration couvrent la connexion du CRM à votre ERP, votre boutique ou votre courriel." },
        ],
      },
      es: {
        title: 'Configuración de software CRM',
        seo: 'Configuración de software CRM: embudos, campos, automatizaciones, importaciones y permisos en HubSpot, Salesforce, Zoho o Pipedrive, según cómo vende.',
        answer: 'La configuración de software CRM es ajustar un CRM como HubSpot, Salesforce, Zoho o Pipedrive para que siga su forma de vender: etapas, campos, automatizaciones y permisos. Awesoon lo configura, importa sus datos limpios y capacita a su equipo, sin un proyecto de implementación largo.',
        problem: [
          'Compró un CRM, pero sigue con la configuración de fábrica y nadie lo usa',
          'Contactos, oportunidades y notas están repartidos entre correos y hojas de cálculo',
          'Las etapas de su embudo no reflejan cómo avanzan realmente las ventas',
        ],
        whatWeDo: [
          'Describir cómo un prospecto se vuelve cliente en su negocio',
          'Configurar embudos, etapas, campos y vistas a la medida',
          'Limpiar e importar sus contactos, empresas y oportunidades abiertas',
          'Activar las pocas automatizaciones que más tiempo ahorran',
          'Definir permisos y capacitar a su equipo en sesiones cortas',
        ],
        howItRuns: [
          'Una llamada de descubrimiento de 30 minutos sobre cómo vende hoy',
          'Un plan de configuración de una página que usted aprueba',
          'Configuración, importación, capacitación y un seguimiento cuando el equipo ya lo usa',
        ],
        keep: [
          'Un CRM a su nombre, configurado para su forma de trabajar',
          'Una guía corta de su embudo, campos y automatizaciones',
          'Acceso de administrador para su propio equipo',
        ],
        faq: [
          { q: '¿Qué CRM deberíamos usar?', a: 'Depende del tamaño del equipo, el proceso de venta y sus otros sistemas. Somos neutrales y no cobramos comisiones, así que el consejo es sobre el encaje.' },
          { q: '¿Qué diferencia hay entre configuración e implementación?', a: 'La configuración ajusta un CRM a su proceso de venta. La implementación es un proyecto más amplio que incluye selección, integraciones y despliegue. Vea nuestra página de implementación de CRM.' },
          { q: '¿Pueden conectar el CRM con nuestras otras herramientas?', a: 'Sí. Nuestras páginas de integración cubren la conexión del CRM con su ERP, tienda o correo.' },
        ],
      },
    },
  },
  {
    slug: 'it-expert-services',
    portalCategory: 'IT expert services',
    copy: {
      en: {
        title: 'IT expert services',
        seo: 'IT expert services: senior advice on systems, data, integrations and vendors when you need an expert for a decision or a review, not a full-time hire.',
        answer: 'IT expert services give you a senior systems expert for a specific decision, review or problem, without hiring someone full time. Awesoon works with you directly, writes down what we find and recommend, and stays vendor neutral.',
        problem: [
          'You have a technical decision to make and no one inside to weigh the options',
          'A vendor proposal looks expensive or risky and you want a second opinion',
          'A project is stuck and you need someone to find out why',
        ],
        whatWeDo: [
          'Review your systems, data or project and talk with the people involved',
          'Compare options plainly, with their trade-offs',
          'Review vendor proposals, contracts scope and technical plans',
          'Write a short recommendation with clear next steps',
          'Stay available to answer follow-up questions as you act on it',
        ],
        howItRuns: [
          'A 30-minute discovery call about the question you need answered',
          'An agreed scope: what we review and what you receive',
          'A written finding and recommendation, walked through with you',
        ],
        keep: [
          'A written recommendation you can share inside your business',
          'The notes and evidence behind it',
          'A clear list of next steps, whoever does them',
        ],
        faq: [
          { q: 'Are you tied to any vendor?', a: 'No. We take no commissions or referral fees, so the advice is about what fits you.' },
          { q: 'Can you work for a government buyer?', a: 'Yes. See our public sector page for how to buy from Awesoon through portals.' },
          { q: 'Do you also do the work you recommend?', a: 'We can, but you are free to use the recommendation with anyone.' },
        ],
      },
      fr: {
        title: 'Services d’experts en TI',
        seo: "Services d’experts en TI : conseils de haut niveau sur les systèmes, les données, les intégrations et les fournisseurs quand il vous faut un expert pour une décision ou un examen, pas une embauche à temps plein.",
        answer: "Les services d’experts en TI vous donnent un expert chevronné en systèmes pour une décision, un examen ou un problème précis, sans embaucher à temps plein. Awesoon travaille directement avec vous, consigne ce que nous trouvons et recommandons, et reste indépendant des fournisseurs.",
        problem: [
          "Vous avez une décision technique à prendre et personne à l'interne pour peser les options",
          "Une proposition de fournisseur semble coûteuse ou risquée et vous voulez un deuxième avis",
          "Un projet est bloqué et il vous faut quelqu'un pour comprendre pourquoi",
        ],
        whatWeDo: [
          'Examiner vos systèmes, données ou projet et parler aux personnes concernées',
          'Comparer les options simplement, avec leurs compromis',
          'Examiner les propositions de fournisseurs, la portée des contrats et les plans techniques',
          'Rédiger une courte recommandation avec des prochaines étapes claires',
          'Rester disponible pour répondre aux questions pendant la mise en oeuvre',
        ],
        howItRuns: [
          'Un appel découverte de 30 minutes sur la question à résoudre',
          'Une portée convenue : ce que nous examinons et ce que vous recevez',
          'Un constat écrit et une recommandation, présentés avec vous',
        ],
        keep: [
          "Une recommandation écrite à partager dans l'entreprise",
          'Les notes et preuves qui la soutiennent',
          'Une liste claire des prochaines étapes, peu importe qui les réalise',
        ],
        faq: [
          { q: 'Êtes-vous lié à un fournisseur?', a: "Non. Nous ne touchons ni commission ni frais de recommandation, donc le conseil porte sur ce qui vous convient." },
          { q: 'Pouvez-vous travailler pour un acheteur public?', a: "Oui. Voyez notre page secteur public pour savoir comment acheter d'Awesoon par les portails." },
          { q: 'Réalisez-vous aussi le travail recommandé?', a: 'Nous le pouvons, mais vous êtes libre d’utiliser la recommandation avec qui vous voulez.' },
        ],
      },
      es: {
        title: 'Servicios de expertos en TI',
        seo: 'Servicios de expertos en TI: asesoría experta en sistemas, datos, integraciones y proveedores cuando necesita un experto para una decisión o revisión, no una contratación a tiempo completo.',
        answer: 'Los servicios de expertos en TI le dan un experto sénior en sistemas para una decisión, revisión o problema concreto, sin contratar a alguien a tiempo completo. Awesoon trabaja directamente con usted, deja por escrito lo que encontramos y recomendamos, y se mantiene neutral frente a proveedores.',
        problem: [
          'Tiene una decisión técnica que tomar y nadie dentro para sopesar las opciones',
          'Una propuesta de proveedor parece cara o riesgosa y quiere una segunda opinión',
          'Un proyecto está atascado y necesita a alguien que descubra por qué',
        ],
        whatWeDo: [
          'Revisar sus sistemas, datos o proyecto y hablar con las personas involucradas',
          'Comparar opciones con claridad, con sus ventajas y desventajas',
          'Revisar propuestas de proveedores, alcance de contratos y planes técnicos',
          'Escribir una recomendación corta con próximos pasos claros',
          'Seguir disponibles para responder preguntas mientras actúa',
        ],
        howItRuns: [
          'Una llamada de descubrimiento de 30 minutos sobre la pregunta a responder',
          'Un alcance acordado: qué revisamos y qué recibe',
          'Un hallazgo escrito y una recomendación, revisados con usted',
        ],
        keep: [
          'Una recomendación escrita que puede compartir en su empresa',
          'Las notas y la evidencia que la respaldan',
          'Una lista clara de próximos pasos, sin importar quién los haga',
        ],
        faq: [
          { q: '¿Están atados a algún proveedor?', a: 'No. No cobramos comisiones ni honorarios por referencia, así que el consejo es sobre lo que le conviene.' },
          { q: '¿Pueden trabajar para un comprador público?', a: 'Sí. Vea nuestra página de sector público para saber cómo comprar a Awesoon por los portales.' },
          { q: '¿También hacen el trabajo que recomiendan?', a: 'Podemos, pero usted es libre de usar la recomendación con quien quiera.' },
        ],
      },
    },
  },
  {
    slug: 'permanent-developers',
    portalCategory: 'Permanent IT developers (through a vetted staffing partner)',
    copy: {
      en: {
        title: 'Permanent developers through a vetted partner',
        seo: 'Permanent IT developers through a vetted staffing partner: Awesoon defines the role and checks technical fit, the partner handles recruiting and employment.',
        answer: 'If you need a permanent developer on your own team, Awesoon helps you hire one through a vetted staffing partner. We define the role and check technical fit; the partner handles recruiting, contracts and employment.',
        problem: [
          'You need a developer on staff but cannot judge technical skill yourself',
          'Past hires looked good on paper and did not fit your systems',
          'Recruiters send many profiles but none match the actual work',
        ],
        whatWeDo: [
          'Write the role around your real systems and the work ahead',
          'Agree on the skills that matter and how to test them',
          'Brief the vetted staffing partner, who runs recruiting and employment',
          'Join technical interviews and review candidates against the role',
          'Help the new developer get started with your systems and documentation',
        ],
        howItRuns: [
          'A 30-minute discovery call about the role and your systems',
          'A written role description and skills check you approve',
          'Recruiting by the staffing partner, with our technical review of each finalist',
        ],
        keep: [
          'A clear role description you can reuse',
          'A technical skills check for future hires',
          'A developer employed on terms agreed between you and the partner',
        ],
        faq: [
          { q: 'Who employs the developer?', a: 'You or the staffing partner, depending on the terms you agree with the partner. Awesoon does not employ placed developers.' },
          { q: 'How is the partner chosen?', a: 'We work only with partners we have checked. We will name the partner and explain the arrangement before you commit.' },
          { q: 'Is this available for government buyers?', a: 'This category is listed on some government portals. Ask on the call, and we will explain how it works for your portal.' },
        ],
      },
      fr: {
        title: 'Développeurs permanents par un partenaire vérifié',
        seo: "Développeurs TI permanents par un partenaire de dotation vérifié : Awesoon définit le poste et vérifie l'adéquation technique, le partenaire gère le recrutement et l'emploi.",
        answer: "S'il vous faut un développeur permanent dans votre équipe, Awesoon vous aide à l'embaucher par un partenaire de dotation vérifié. Nous définissons le poste et vérifions l'adéquation technique; le partenaire gère le recrutement, les contrats et l'emploi.",
        problem: [
          "Il vous faut un développeur à l'interne, mais vous ne pouvez pas juger vous-même ses compétences techniques",
          'Des embauches passées semblaient bonnes sur papier mais ne convenaient pas à vos systèmes',
          'Les recruteurs envoient beaucoup de profils, mais aucun ne correspond au vrai travail',
        ],
        whatWeDo: [
          'Rédiger le poste selon vos vrais systèmes et le travail à venir',
          'Convenir des compétences importantes et de la façon de les vérifier',
          "Informer le partenaire de dotation vérifié, qui gère le recrutement et l'emploi",
          'Participer aux entrevues techniques et évaluer les candidats selon le poste',
          'Aider le nouveau développeur à démarrer avec vos systèmes et votre documentation',
        ],
        howItRuns: [
          'Un appel découverte de 30 minutes sur le poste et vos systèmes',
          'Une description de poste écrite et une vérification des compétences que vous approuvez',
          'Recrutement par le partenaire, avec notre examen technique de chaque finaliste',
        ],
        keep: [
          'Une description de poste claire et réutilisable',
          'Une vérification technique pour les prochaines embauches',
          'Un développeur employé selon les conditions convenues entre vous et le partenaire',
        ],
        faq: [
          { q: 'Qui emploie le développeur?', a: "Vous ou le partenaire de dotation, selon les conditions convenues avec lui. Awesoon n'emploie pas les développeurs placés." },
          { q: 'Comment le partenaire est-il choisi?', a: "Nous travaillons seulement avec des partenaires vérifiés. Nous nommons le partenaire et expliquons l'entente avant votre engagement." },
          { q: 'Est-ce offert aux acheteurs publics?', a: "Cette catégorie figure sur certains portails gouvernementaux. Demandez lors de l'appel et nous expliquerons le fonctionnement pour votre portail." },
        ],
      },
      es: {
        title: 'Desarrolladores permanentes mediante un socio verificado',
        seo: 'Desarrolladores de TI permanentes mediante un socio de reclutamiento verificado: Awesoon define el puesto y revisa el encaje técnico, el socio gestiona la contratación y el empleo.',
        answer: 'Si necesita un desarrollador permanente en su propio equipo, Awesoon le ayuda a contratarlo mediante un socio de reclutamiento verificado. Nosotros definimos el puesto y revisamos el encaje técnico; el socio gestiona el reclutamiento, los contratos y el empleo.',
        problem: [
          'Necesita un desarrollador en plantilla pero no puede evaluar sus habilidades técnicas',
          'Contrataciones anteriores se veían bien en papel y no encajaron con sus sistemas',
          'Los reclutadores envían muchos perfiles pero ninguno coincide con el trabajo real',
        ],
        whatWeDo: [
          'Escribir el puesto según sus sistemas reales y el trabajo por venir',
          'Acordar las habilidades que importan y cómo comprobarlas',
          'Informar al socio de reclutamiento verificado, que gestiona la búsqueda y el empleo',
          'Participar en entrevistas técnicas y evaluar candidatos contra el puesto',
          'Ayudar al nuevo desarrollador a arrancar con sus sistemas y documentación',
        ],
        howItRuns: [
          'Una llamada de descubrimiento de 30 minutos sobre el puesto y sus sistemas',
          'Una descripción del puesto y una prueba de habilidades que usted aprueba',
          'Reclutamiento por el socio, con nuestra revisión técnica de cada finalista',
        ],
        keep: [
          'Una descripción del puesto clara y reutilizable',
          'Una prueba técnica para futuras contrataciones',
          'Un desarrollador empleado con las condiciones acordadas entre usted y el socio',
        ],
        faq: [
          { q: '¿Quién emplea al desarrollador?', a: 'Usted o el socio de reclutamiento, según las condiciones que acuerde con él. Awesoon no emplea a los desarrolladores colocados.' },
          { q: '¿Cómo se elige al socio?', a: 'Solo trabajamos con socios que hemos verificado. Le diremos quién es y le explicaremos el acuerdo antes de que se comprometa.' },
          { q: '¿Está disponible para compradores públicos?', a: 'Esta categoría aparece en algunos portales de gobierno. Pregunte en la llamada y le explicaremos cómo funciona en su portal.' },
        ],
      },
    },
  },
  {
    slug: 'maintenance',
    portalCategory: 'Game and entertainment software maintenance',
    copy: {
      en: {
        title: 'Game and app maintenance',
        seo: 'Game and app maintenance: store updates, SDK and OS upgrades, crash fixes and live operations for mobile games and apps, run by the studio behind Awesoon games.',
        answer: 'Game and app maintenance keeps a released game or app working and earning: store updates, OS and SDK upgrades, crash fixes and small content changes. Awesoon runs its own mobile games, so we do the same work for yours and document every release.',
        problem: [
          'Your game or app works today, but new phone OS versions keep breaking it',
          'The original developer moved on, and store policy deadlines keep coming',
          'Crash reports pile up and nobody has time to look at them',
        ],
        whatWeDo: [
          'Review the code, store listings, SDKs and crash reports',
          'Update to current OS, engine and SDK versions',
          'Fix the crashes and bugs that affect the most players',
          'Ship regular store updates and handle store policy changes',
          'Make small content and balance changes when you ask',
        ],
        howItRuns: [
          'A 30-minute discovery call about the game or app and its history',
          'A written review and a list of fixes in order of player impact',
          'Ongoing maintenance on an agreed schedule, with release notes for each update',
        ],
        keep: [
          'Source code and build setup in your repository',
          'Store and developer accounts in your name',
          'Release notes and a maintenance log',
        ],
        faq: [
          { q: 'Which engines do you work with?', a: 'Common mobile game engines and native iOS and Android code. Tell us what yours is built with on the call.' },
          { q: 'Do you need the original source code?', a: 'Yes. We work from the source code and the store accounts you own.' },
          { q: 'Do you run your own games?', a: 'Yes. Awesoon publishes its own mobile games, which you can see on our games page.' },
        ],
      },
      fr: {
        title: 'Maintenance de jeux et d’applications',
        seo: "Maintenance de jeux et d'applications : mises à jour en boutique, mises à niveau de SDK et de système, correction des plantages et opérations continues, par le studio derrière les jeux Awesoon.",
        answer: "La maintenance de jeux et d'applications garde un jeu ou une application publiés fonctionnels et rentables : mises à jour en boutique, mises à niveau du système et des SDK, correction des plantages et petits changements de contenu. Awesoon exploite ses propres jeux mobiles, donc nous faisons le même travail pour les vôtres et documentons chaque version.",
        problem: [
          "Votre jeu ou application fonctionne aujourd'hui, mais les nouvelles versions des systèmes mobiles le brisent sans cesse",
          'Le développeur original est parti, et les échéances des politiques des boutiques continuent d’arriver',
          "Les rapports de plantage s'accumulent et personne n'a le temps de les regarder",
        ],
        whatWeDo: [
          'Examiner le code, les fiches en boutique, les SDK et les rapports de plantage',
          'Mettre à niveau le système, le moteur et les SDK',
          'Corriger les plantages et bogues qui touchent le plus de joueurs',
          'Publier des mises à jour régulières et gérer les changements de politiques des boutiques',
          'Faire de petits changements de contenu et d’équilibrage sur demande',
        ],
        howItRuns: [
          "Un appel découverte de 30 minutes sur le jeu ou l'application et son historique",
          'Un examen écrit et une liste de correctifs par ordre d’impact sur les joueurs',
          'Une maintenance continue selon un calendrier convenu, avec des notes pour chaque version',
        ],
        keep: [
          'Le code source et la configuration de compilation dans votre dépôt',
          'Les comptes de boutique et de développeur à votre nom',
          'Les notes de version et un journal de maintenance',
        ],
        faq: [
          { q: 'Avec quels moteurs travaillez-vous?', a: "Les moteurs de jeux mobiles courants et le code natif iOS et Android. Dites-nous avec quoi le vôtre est construit lors de l'appel." },
          { q: 'Avez-vous besoin du code source original?', a: 'Oui. Nous travaillons à partir du code source et des comptes de boutique que vous possédez.' },
          { q: 'Exploitez-vous vos propres jeux?', a: 'Oui. Awesoon publie ses propres jeux mobiles, visibles sur notre page jeux.' },
        ],
      },
      es: {
        title: 'Mantenimiento de juegos y aplicaciones',
        seo: 'Mantenimiento de juegos y aplicaciones: actualizaciones en tiendas, actualizaciones de SDK y sistema, corrección de fallos y operaciones continuas, a cargo del estudio detrás de los juegos de Awesoon.',
        answer: 'El mantenimiento de juegos y aplicaciones mantiene un juego o aplicación publicado funcionando y generando ingresos: actualizaciones en tiendas, actualizaciones de sistema y SDK, corrección de fallos y pequeños cambios de contenido. Awesoon opera sus propios juegos móviles, así que hacemos el mismo trabajo para los suyos y documentamos cada versión.',
        problem: [
          'Su juego o aplicación funciona hoy, pero las nuevas versiones del sistema del teléfono lo siguen rompiendo',
          'El desarrollador original se fue y los plazos de políticas de las tiendas siguen llegando',
          'Los informes de fallos se acumulan y nadie tiene tiempo de revisarlos',
        ],
        whatWeDo: [
          'Revisar el código, las fichas en tienda, los SDK y los informes de fallos',
          'Actualizar a versiones actuales de sistema, motor y SDK',
          'Corregir los fallos y errores que afectan a más jugadores',
          'Publicar actualizaciones regulares y atender cambios de políticas de las tiendas',
          'Hacer pequeños cambios de contenido y balance cuando lo pida',
        ],
        howItRuns: [
          'Una llamada de descubrimiento de 30 minutos sobre el juego o aplicación y su historia',
          'Una revisión escrita y una lista de correcciones según el impacto en los jugadores',
          'Mantenimiento continuo en un calendario acordado, con notas de cada versión',
        ],
        keep: [
          'El código fuente y la configuración de compilación en su repositorio',
          'Cuentas de tienda y de desarrollador a su nombre',
          'Notas de versión y un registro de mantenimiento',
        ],
        faq: [
          { q: '¿Con qué motores trabajan?', a: 'Motores comunes de juegos móviles y código nativo de iOS y Android. Cuéntenos en la llamada con qué está hecho el suyo.' },
          { q: '¿Necesitan el código fuente original?', a: 'Sí. Trabajamos a partir del código fuente y las cuentas de tienda que usted posee.' },
          { q: '¿Operan sus propios juegos?', a: 'Sí. Awesoon publica sus propios juegos móviles, que puede ver en nuestra página de juegos.' },
        ],
      },
    },
  },
]

export function getNewSpoke(slug: string) {
  return newSpokes.find((s) => s.slug === slug)
}
