import type { Comparison } from './types'

const ZAP_PRICING = { label: 'Zapier pricing', url: 'https://zapier.com/pricing' }
const ZAP_WEBHOOKS = { label: 'Webhooks by Zapier', url: 'https://zapier.com/apps/webhook/integrations' }
const SHOPIFY_LIMITS = { label: 'Shopify API rate limits', url: 'https://shopify.dev/docs/api/usage/limits' }
const GITHUB_WEBHOOKS = { label: 'GitHub Docs: about webhooks', url: 'https://docs.github.com/en/webhooks/about-webhooks' }

export const COMPARE_ZAPIER_VS_CUSTOM_INTEGRATION: Comparison = {
  slug: 'zapier-vs-custom-integration',
  a: 'Zapier',
  b: 'A custom integration',
  hub: '/automation',
  relatedTerms: ['ipaas', 'api', 'webhook', 'rate-limit', 'point-to-point-integration', 'workflow-automation'],
  checked: '2026-11-12',
  facts: [
    {
      area: { en: 'Pricing model', fr: 'Modèle de prix', es: 'Modelo de precios' },
      a: {
        en: 'A plan sets features and includes a monthly allowance of tasks. Failed actions are not counted.',
        fr: "Un forfait fixe les fonctions et inclut un quota mensuel de tâches. Les actions échouées ne sont pas comptées.",
        es: 'Un plan define las funciones e incluye una cuota mensual de tareas. Las acciones fallidas no se cuentan.',
      },
      b: {
        en: 'No platform fee per task. The cost is the build, hosting and ongoing upkeep by developers.',
        fr: "Aucuns frais de plateforme par tâche. Le coût est la construction, l'hébergement et l'entretien par des développeurs.",
        es: 'Sin cuota de plataforma por tarea. El costo es la construcción, el alojamiento y el mantenimiento por desarrolladores.',
      },
      sources: [ZAP_PRICING],
      asOf: '2026-11-12',
    },
    {
      area: { en: 'Starting small', fr: 'Commencer petit', es: 'Empezar en pequeño' },
      a: {
        en: 'A free plan includes 100 tasks a month and two-step Zaps.',
        fr: 'Un forfait gratuit inclut 100 tâches par mois et des Zaps à deux étapes.',
        es: 'Un plan gratuito incluye 100 tareas al mes y Zaps de dos pasos.',
      },
      b: {
        en: 'There is no free tier. Even a small connection needs developer time to build and test.',
        fr: "Il n'y a pas de palier gratuit. Même une petite connexion demande du temps de développeur pour la construire et la tester.",
        es: 'No hay nivel gratuito. Incluso una conexión pequeña requiere tiempo de desarrollo para construirla y probarla.',
      },
      sources: [ZAP_PRICING],
      asOf: '2026-11-12',
    },
    {
      area: { en: 'Range of systems', fr: 'Éventail de systèmes', es: 'Variedad de sistemas' },
      a: {
        en: 'Zapier says it connects 9,000+ apps through ready connectors.',
        fr: "Zapier indique connecter plus de 9 000 applications avec des connecteurs prêts à l'emploi.",
        es: 'Zapier indica que conecta más de 9.000 aplicaciones con conectores listos.',
      },
      b: {
        en: "Each connection is written against that system's own API, for example Shopify's Admin API.",
        fr: "Chaque connexion est écrite pour l'API du système visé, par exemple l'Admin API de Shopify.",
        es: 'Cada conexión se escribe contra la API propia del sistema, por ejemplo la Admin API de Shopify.',
      },
      sources: [ZAP_PRICING, SHOPIFY_LIMITS],
      asOf: '2026-11-12',
    },
    {
      area: { en: 'How fast changes arrive', fr: 'Vitesse des mises à jour', es: 'Rapidez de los cambios' },
      a: {
        en: 'Polling triggers check every 15 minutes on Free, 2 on Pro and 1 on Team and Enterprise.',
        fr: 'Les déclencheurs par interrogation vérifient toutes les 15 minutes en gratuit, 2 en Pro et 1 en Team et Enterprise.',
        es: 'Los disparadores por sondeo revisan cada 15 minutos en Free, 2 en Pro y 1 en Team y Enterprise.',
      },
      b: {
        en: 'Can receive webhooks, which deliver data as it happens instead of polling, where the source system offers them.',
        fr: "Peut recevoir des webhooks, qui livrent les données au moment où elles arrivent plutôt que par interrogation, si le système source les offre.",
        es: 'Puede recibir webhooks, que entregan los datos en el momento en lugar de sondear, si el sistema de origen los ofrece.',
      },
      sources: [ZAP_PRICING, GITHUB_WEBHOOKS],
      asOf: '2026-11-12',
    },
    {
      area: { en: 'Multi-step logic', fr: 'Logique à plusieurs étapes', es: 'Lógica de varios pasos' },
      a: {
        en: 'Multi-step Zaps, one trigger with several actions, are on Pro, Team and Enterprise.',
        fr: 'Les Zaps à plusieurs étapes, un déclencheur et plusieurs actions, sont offerts en Pro, Team et Enterprise.',
        es: 'Los Zaps de varios pasos, un disparador con varias acciones, están en Pro, Team y Enterprise.',
      },
      b: {
        en: 'Logic is code, so it can be as detailed as the team writes and tests it.',
        fr: "La logique est du code, elle peut donc être aussi détaillée que l'équipe l'écrit et la teste.",
        es: 'La lógica es código, así que puede ser tan detallada como el equipo la escriba y la pruebe.',
      },
      sources: [ZAP_PRICING],
      asOf: '2026-11-12',
    },
    {
      area: { en: 'Usage limits', fr: "Limites d'usage", es: 'Límites de uso' },
      a: {
        en: 'Triggers, polling and built-in tools like Formatter and Paths do not count as tasks.',
        fr: 'Les déclencheurs, les interrogations et les outils intégrés comme Formatter et Paths ne comptent pas comme tâches.',
        es: 'Los disparadores, el sondeo y herramientas integradas como Formatter y Paths no cuentan como tareas.',
      },
      b: {
        en: "Limits come from each system's API, for example Shopify's query cost and request bucket throttling.",
        fr: "Les limites viennent de l'API de chaque système, par exemple le coût de requête et la limitation par seau de Shopify.",
        es: 'Los límites vienen de la API de cada sistema, por ejemplo el costo de consulta y el límite por cubeta de Shopify.',
      },
      sources: [ZAP_PRICING, SHOPIFY_LIMITS],
      asOf: '2026-11-12',
    },
    {
      area: { en: 'Systems without a ready connector', fr: 'Systèmes sans connecteur prêt', es: 'Sistemas sin conector listo' },
      a: {
        en: 'Webhooks by Zapier can POST data to a URL or accept data to start a workflow.',
        fr: 'Webhooks by Zapier peut envoyer des données à une URL par POST ou en recevoir pour lancer un flux.',
        es: 'Webhooks by Zapier puede enviar datos por POST a una URL o recibirlos para iniciar un flujo.',
      },
      b: {
        en: 'Works with any system that has an API or webhooks, since the code talks to it directly.',
        fr: "Fonctionne avec tout système doté d'une API ou de webhooks, puisque le code lui parle directement.",
        es: 'Funciona con cualquier sistema que tenga API o webhooks, ya que el código se comunica con él directamente.',
      },
      sources: [ZAP_WEBHOOKS, GITHUB_WEBHOOKS],
      asOf: '2026-11-12',
    },
  ],
  copy: {
    en: {
      title: 'Zapier vs a custom integration for connecting your systems',
      short: 'When a ready connector is enough, and when your own code pays for itself.',
      intro:
        'Zapier tends to fit when the systems are popular, the steps are simple and the volume is modest. A custom integration tends to fit when the data is core to the business, the volume is high or the logic is unusual. There is no single winner; it depends on the job.',
      situations: [
        { label: 'A few popular apps, simple steps', verdict: 'Zapier tends to fit, because ready connectors remove build work.', why: 'If both apps have connectors and the flow is a trigger and a few actions, you can be running the same day. Task allowances are easy to watch at this size.' },
        { label: 'High volume between core systems', verdict: 'A custom integration tends to fit, because cost does not grow per task.', why: 'When thousands of orders or records move every day, per-task pricing adds up. Your own code can batch, retry and respect API limits the way you choose.' },
        { label: 'Unusual rules or a system with no connector', verdict: 'A custom integration tends to fit, or a Zapier webhook as a bridge.', why: 'Complex branching and data mapping are easier to test as code. If only one step is missing, Webhooks by Zapier can cover it.' },
        { label: 'Nobody agrees on the process yet', verdict: 'Neither; map the process first.', why: 'Automating a process that changes every week means rebuilding it every week. Write down the steps and owners, then pick the tool.' },
      ],
      framing: [
        'What decides this is not the tool but the data. Ask how many records move, how fast they need to arrive, and what happens if one goes missing. A missed lead is annoying; a missed order or payment is expensive. The more a flow matters, the more you want logging, retries and someone who owns it.',
        'Hidden costs sit on both sides. With Zapier, ask how tasks are counted for your flows, which plan your trigger speed needs, and who fixes a Zap when an app changes its fields. With a custom build, ask who hosts it, who watches the error logs, how API limits and changes are handled, and what it costs to maintain each year, not just to build. Data mapping between systems takes time either way.',
        'Questions for both: what happens when a step fails, and how do we find out? Can we see a history of every run? How do we test a change before it goes live? Who can edit it, and how is access controlled? If a person leaves, can someone else pick it up? Clear answers here matter more than the feature list.',
      ],
      faq: [
        { q: 'Can we start on Zapier and move to custom later?', a: 'Yes, and many teams do. Keep notes on each flow, its fields and its owner so the move is a rewrite of known logic, not a rediscovery.' },
        { q: 'Is a custom integration always more reliable?', a: 'No. It is as reliable as its error handling, monitoring and upkeep. Without those, a script can fail quietly.' },
        { q: 'Does Zapier work with systems that have no connector?', a: 'Often, through Webhooks by Zapier, which can send data to a URL or accept data to start a workflow, if the other system supports webhooks or an API.' },
      ],
    },
    fr: {
      title: 'Zapier ou une intégration sur mesure pour relier vos systèmes',
      short: "Quand un connecteur prêt suffit, et quand votre propre code se rentabilise.",
      intro:
        "Zapier convient souvent quand les systèmes sont populaires, les étapes simples et le volume modeste. Une intégration sur mesure convient souvent quand les données sont au cœur de l'entreprise, le volume élevé ou la logique inhabituelle. Il n'y a pas de gagnant unique; tout dépend du travail à faire.",
      situations: [
        { label: 'Quelques applications populaires, étapes simples', verdict: 'Zapier convient souvent, car les connecteurs prêts évitent le développement.', why: "Si les deux applications ont des connecteurs et que le flux est un déclencheur et quelques actions, tout peut tourner le jour même. Les quotas de tâches sont faciles à suivre à cette taille." },
        { label: 'Gros volume entre systèmes centraux', verdict: 'Une intégration sur mesure convient souvent, car le coût ne croît pas par tâche.', why: "Quand des milliers de commandes ou d'enregistrements circulent chaque jour, le prix par tâche s'additionne. Votre code peut regrouper, réessayer et respecter les limites d'API comme vous le voulez." },
        { label: 'Règles inhabituelles ou système sans connecteur', verdict: 'Une intégration sur mesure convient souvent, ou un webhook Zapier comme pont.', why: "Les embranchements complexes et le mappage de données sont plus faciles à tester en code. S'il ne manque qu'une étape, Webhooks by Zapier peut la couvrir." },
        { label: "Personne ne s'entend encore sur le processus", verdict: "Ni l'un ni l'autre; cartographiez d'abord le processus.", why: "Automatiser un processus qui change chaque semaine, c'est le reconstruire chaque semaine. Écrivez les étapes et les responsables, puis choisissez l'outil." },
      ],
      framing: [
        "Ce qui tranche, ce n'est pas l'outil mais les données. Demandez combien d'enregistrements circulent, à quelle vitesse ils doivent arriver et ce qui se passe si l'un se perd. Un prospect manqué est agaçant; une commande ou un paiement manqué coûte cher. Plus un flux compte, plus il faut de journaux, de reprises et un responsable.",
        "Les coûts cachés existent des deux côtés. Avec Zapier, demandez comment les tâches sont comptées pour vos flux, quel forfait votre vitesse de déclenchement exige et qui répare un Zap quand une application change ses champs. Avec du sur mesure, demandez qui l'héberge, qui surveille les erreurs, comment les limites et changements d'API sont gérés et ce que coûte l'entretien chaque année, pas seulement la construction. Le mappage des données prend du temps dans les deux cas.",
        "Questions pour les deux : que se passe-t-il quand une étape échoue, et comment le sait-on? Peut-on voir l'historique de chaque exécution? Comment teste-t-on un changement avant la mise en production? Qui peut le modifier, et comment l'accès est-il contrôlé? Si une personne part, quelqu'un peut-il reprendre? Des réponses claires comptent plus que la liste de fonctions.",
      ],
      faq: [
        { q: 'Peut-on commencer avec Zapier et passer au sur mesure plus tard?', a: "Oui, beaucoup d'équipes le font. Documentez chaque flux, ses champs et son responsable pour que la transition soit une réécriture de logique connue, pas une redécouverte." },
        { q: 'Une intégration sur mesure est-elle toujours plus fiable?', a: "Non. Elle est aussi fiable que sa gestion des erreurs, sa surveillance et son entretien. Sans cela, un script peut échouer en silence." },
        { q: 'Zapier fonctionne-t-il avec des systèmes sans connecteur?', a: "Souvent, grâce à Webhooks by Zapier, qui peut envoyer des données à une URL ou en recevoir pour lancer un flux, si l'autre système prend en charge les webhooks ou une API." },
      ],
    },
    es: {
      title: 'Zapier o una integración a medida para conectar sus sistemas',
      short: 'Cuándo basta un conector listo y cuándo su propio código se paga solo.',
      intro:
        'Zapier suele encajar cuando los sistemas son populares, los pasos simples y el volumen moderado. Una integración a medida suele encajar cuando los datos son centrales para el negocio, el volumen es alto o la lógica es poco común. No hay un ganador único; depende del trabajo.',
      situations: [
        { label: 'Pocas apps populares, pasos simples', verdict: 'Zapier suele encajar, porque los conectores listos evitan desarrollo.', why: 'Si ambas apps tienen conectores y el flujo es un disparador y unas pocas acciones, puede funcionar el mismo día. Las cuotas de tareas son fáciles de vigilar a este tamaño.' },
        { label: 'Alto volumen entre sistemas centrales', verdict: 'Una integración a medida suele encajar, porque el costo no crece por tarea.', why: 'Cuando miles de pedidos o registros se mueven cada día, el precio por tarea se acumula. Su código puede agrupar, reintentar y respetar los límites de API como usted decida.' },
        { label: 'Reglas poco comunes o un sistema sin conector', verdict: 'Una integración a medida suele encajar, o un webhook de Zapier como puente.', why: 'Las ramificaciones complejas y el mapeo de datos son más fáciles de probar como código. Si solo falta un paso, Webhooks by Zapier puede cubrirlo.' },
        { label: 'Nadie está de acuerdo con el proceso todavía', verdict: 'Ninguno; primero mapee el proceso.', why: 'Automatizar un proceso que cambia cada semana significa reconstruirlo cada semana. Escriba los pasos y responsables, y luego elija la herramienta.' },
      ],
      framing: [
        'Lo que decide no es la herramienta sino los datos. Pregunte cuántos registros se mueven, qué tan rápido deben llegar y qué pasa si uno se pierde. Un prospecto perdido molesta; un pedido o pago perdido sale caro. Cuanto más importa un flujo, más necesita registros, reintentos y un responsable.',
        'Hay costos ocultos en ambos lados. Con Zapier, pregunte cómo se cuentan las tareas en sus flujos, qué plan exige su velocidad de disparo y quién arregla un Zap cuando una app cambia sus campos. Con una integración a medida, pregunte quién la aloja, quién vigila los errores, cómo se manejan los límites y cambios de API y cuánto cuesta mantenerla cada año, no solo construirla. El mapeo de datos toma tiempo en ambos casos.',
        'Preguntas para ambos: ¿qué pasa cuando falla un paso y cómo nos enteramos? ¿Podemos ver el historial de cada ejecución? ¿Cómo probamos un cambio antes de publicarlo? ¿Quién puede editarlo y cómo se controla el acceso? Si una persona se va, ¿alguien más puede retomarlo? Las respuestas claras importan más que la lista de funciones.',
      ],
      faq: [
        { q: '¿Podemos empezar con Zapier y pasar a medida después?', a: 'Sí, muchos equipos lo hacen. Documente cada flujo, sus campos y su responsable para que el cambio sea reescribir lógica conocida, no redescubrirla.' },
        { q: '¿Una integración a medida siempre es más confiable?', a: 'No. Es tan confiable como su manejo de errores, su monitoreo y su mantenimiento. Sin eso, un script puede fallar en silencio.' },
        { q: '¿Zapier funciona con sistemas sin conector?', a: 'A menudo, mediante Webhooks by Zapier, que puede enviar datos a una URL o recibirlos para iniciar un flujo, si el otro sistema admite webhooks o una API.' },
      ],
    },
  },
}
