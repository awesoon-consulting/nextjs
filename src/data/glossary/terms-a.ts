import type { GlossaryTerm } from './types'

export const TERMS_A: GlossaryTerm[] = [
  {
    slug: "three-way-match",
    category: "operations",
    hub: "/consulting",
    related: ["purchase-order", "goods-receipt", "accounts-payable", "procure-to-pay", "exception-handling"],
    copy: {
      en: {
        term: "Three-way match",
        definition: "A three-way match checks that the purchase order, the goods receipt and the supplier invoice agree on item, quantity and price before a bill is paid.",
        explanation: "Before paying a supplier, accounts payable compares three documents. The purchase order says what you agreed to buy. The goods receipt says what actually arrived at the dock. The invoice says what the supplier wants to be paid for.\n\nIf all three line up, the invoice is approved. If they do not, the invoice is held until someone finds out why. For example, a building supply distributor orders 200 boxes of screws at a set price, receives 180, and gets an invoice for 200. The match catches the gap of 20 boxes before the money leaves.\n\nThe point is simple: pay only for what you ordered and what you received, at the price you agreed.",
        breaks: [
          { title: "Receipts are entered late or not at all.", detail: "If the warehouse does not record the goods receipt, every invoice for that order fails the match and piles up in a hold queue." },
          { title: "Tolerances are missing or too tight.", detail: "Without a small allowed variance for rounding or freight, staff spend hours clearing invoices that are off by a few cents." },
          { title: "Units of measure do not agree.", detail: "The order says cases, the receipt says each, and the invoice says pallets, so the system sees a mismatch that is not real." },
          { title: "People override holds to pay on time.", detail: "When exceptions are cleared by a manual override with no note, the control exists on paper but not in practice." }
        ],
        diagram: ["Purchase order issued", "Goods received", "Invoice arrives", "Compare all three", "Approve or hold"],
        faq: [
          { q: "What is the difference between a two-way and a three-way match?", a: "A two-way match compares only the purchase order and the invoice. A three-way match adds the goods receipt, so you also confirm the items arrived." },
          { q: "Do small businesses need a three-way match?", a: "Any business that buys physical goods on credit benefits from it. Many accounting and ERP systems can run it automatically once receipts are recorded." }
        ]
      },
      fr: {
        term: "Rapprochement à trois",
        definition: "Le rapprochement à trois vérifie que le bon de commande, la réception de marchandises et la facture du fournisseur concordent sur l'article, la quantité et le prix avant le paiement.",
        explanation: "Avant de payer un fournisseur, les comptes fournisseurs comparent trois documents. Le bon de commande indique ce que vous avez accepté d'acheter. La réception indique ce qui est vraiment arrivé au quai. La facture indique ce que le fournisseur veut se faire payer.\n\nSi les trois concordent, la facture est approuvée. Sinon, elle est retenue jusqu'à ce qu'on trouve la cause. Par exemple, un distributeur de matériaux commande 200 boîtes de vis à un prix convenu, en reçoit 180 et reçoit une facture pour 200. Le rapprochement repère l'écart de 20 boîtes avant que l'argent parte.\n\nL'idée est simple : payer seulement ce que vous avez commandé et reçu, au prix convenu.",
        breaks: [
          { title: "Les réceptions sont saisies en retard ou jamais.", detail: "Si l'entrepôt n'enregistre pas la réception, chaque facture de cette commande échoue au rapprochement et s'accumule en attente." },
          { title: "Les tolérances sont absentes ou trop serrées.", detail: "Sans petit écart permis pour l'arrondi ou le transport, le personnel passe des heures à débloquer des factures décalées de quelques cents." },
          { title: "Les unités de mesure ne concordent pas.", detail: "La commande parle de caisses, la réception d'unités et la facture de palettes, et le système voit un écart qui n'existe pas." },
          { title: "On contourne les blocages pour payer à temps.", detail: "Quand les exceptions sont levées manuellement sans note, le contrôle existe sur papier mais pas en pratique." }
        ],
        diagram: ["Bon de commande émis", "Marchandises reçues", "Facture reçue", "Comparer les trois", "Approuver ou retenir"],
        faq: [
          { q: "Quelle est la différence entre un rapprochement à deux et à trois?", a: "Le rapprochement à deux compare seulement le bon de commande et la facture. Celui à trois ajoute la réception, pour confirmer aussi que les articles sont arrivés." },
          { q: "Les petites entreprises ont-elles besoin d'un rapprochement à trois?", a: "Toute entreprise qui achète des biens à crédit en profite. Beaucoup de logiciels comptables et d'ERP le font automatiquement une fois les réceptions saisies." }
        ]
      },
      es: {
        term: "Conciliación de tres vías",
        definition: "La conciliación de tres vías verifica que la orden de compra, la recepción de mercancía y la factura del proveedor coincidan en artículo, cantidad y precio antes de pagar.",
        explanation: "Antes de pagar a un proveedor, cuentas por pagar compara tres documentos. La orden de compra dice lo que acordaste comprar. La recepción dice lo que realmente llegó al almacén. La factura dice lo que el proveedor quiere cobrar.\n\nSi los tres coinciden, la factura se aprueba. Si no, queda retenida hasta encontrar la causa. Por ejemplo, un distribuidor de materiales pide 200 cajas de tornillos a un precio fijo, recibe 180 y le facturan 200. La conciliación detecta la diferencia de 20 cajas antes de que salga el dinero.\n\nLa idea es sencilla: pagar solo lo que pediste y recibiste, al precio acordado.",
        breaks: [
          { title: "Las recepciones se registran tarde o nunca.", detail: "Si el almacén no registra la recepción, cada factura de ese pedido falla la conciliación y se acumula en espera." },
          { title: "No hay tolerancias o son muy estrictas.", detail: "Sin una pequeña variación permitida por redondeo o flete, el equipo pasa horas liberando facturas que difieren por centavos." },
          { title: "Las unidades de medida no coinciden.", detail: "La orden dice cajas, la recepción dice piezas y la factura dice tarimas, así que el sistema ve una diferencia que no existe." },
          { title: "Se saltan los bloqueos para pagar a tiempo.", detail: "Cuando las excepciones se liberan manualmente sin nota, el control existe en papel pero no en la práctica." }
        ],
        diagram: ["Orden de compra emitida", "Mercancía recibida", "Llega la factura", "Comparar los tres", "Aprobar o retener"],
        faq: [
          { q: "¿Cuál es la diferencia entre conciliación de dos y de tres vías?", a: "La de dos vías compara solo la orden de compra y la factura. La de tres vías agrega la recepción, para confirmar también que los artículos llegaron." },
          { q: "¿Las pequeñas empresas necesitan conciliación de tres vías?", a: "Cualquier empresa que compra bienes físicos a crédito se beneficia. Muchos sistemas contables y ERP la hacen automáticamente una vez registradas las recepciones." }
        ]
      }
    }
  },
  {
    slug: "purchase-order",
    category: "operations",
    hub: "/consulting",
    related: ["three-way-match", "goods-receipt", "procure-to-pay", "approval-workflow", "accounts-payable"],
    copy: {
      en: {
        term: "Purchase order",
        definition: "A purchase order is a document a buyer sends to a supplier that lists the items, quantities, prices and delivery terms it agrees to buy.",
        explanation: "A purchase order, or PO, turns a request into a commitment. Once the supplier accepts it, both sides have a clear record of what was ordered, at what price, and when it should arrive.\n\nA small furniture retailer might send a PO for 40 chairs at an agreed unit price, with delivery to its warehouse in three weeks. The PO number then follows the order everywhere: on the packing slip, on the receipt, and on the invoice.\n\nThat shared number is what lets the business track open orders, plan cash, and match the bill when it comes in. Without POs, spending is harder to control and invoices are harder to check.",
        breaks: [
          { title: "Orders are placed by phone or email with no PO.", detail: "When staff buy first and raise a PO later, approvals become a formality and invoices arrive with nothing to match against." },
          { title: "Prices on the PO are out of date.", detail: "If the item price list is not kept current, almost every invoice comes in at a different price and fails matching." },
          { title: "Changes are not recorded on the PO.", detail: "A supplier agrees by phone to swap a product or ship partially, but the PO still shows the original order." },
          { title: "Open POs are never closed.", detail: "Old, partly received orders stay open for months and make committed spend and incoming stock look bigger than they are." }
        ],
        diagram: ["Request raised", "PO approved", "PO sent to supplier", "Goods delivered", "Invoice matched"],
        faq: [
          { q: "Is a purchase order legally binding?", a: "Once a supplier accepts a purchase order, it generally forms a contract between the two parties. The exact rules depend on your jurisdiction and the terms printed on the PO." },
          { q: "What is the difference between a purchase order and an invoice?", a: "The buyer issues the purchase order to place the order. The supplier issues the invoice to request payment after delivering." }
        ]
      },
      fr: {
        term: "Bon de commande",
        definition: "Un bon de commande est un document qu'un acheteur envoie à un fournisseur et qui énumère les articles, quantités, prix et conditions de livraison qu'il accepte d'acheter.",
        explanation: "Le bon de commande transforme une demande en engagement. Une fois accepté par le fournisseur, les deux parties ont une trace claire de ce qui est commandé, à quel prix et pour quand.\n\nUn petit détaillant de meubles peut envoyer un bon de commande pour 40 chaises à un prix unitaire convenu, livrées à son entrepôt dans trois semaines. Le numéro de commande suit ensuite tout le parcours : sur le bordereau d'emballage, sur la réception et sur la facture.\n\nCe numéro commun permet de suivre les commandes ouvertes, de planifier la trésorerie et de rapprocher la facture à son arrivée. Sans bons de commande, les dépenses sont plus difficiles à contrôler.",
        breaks: [
          { title: "Les achats se font par téléphone ou courriel sans bon de commande.", detail: "Quand on achète d'abord et qu'on crée le bon ensuite, l'approbation devient une formalité et la facture n'a rien à quoi se comparer." },
          { title: "Les prix du bon de commande sont périmés.", detail: "Si la liste de prix n'est pas tenue à jour, presque chaque facture arrive à un autre prix et échoue au rapprochement." },
          { title: "Les modifications ne sont pas inscrites.", detail: "Le fournisseur accepte au téléphone de remplacer un produit ou de livrer en partie, mais le bon montre toujours la commande initiale." },
          { title: "Les bons ouverts ne sont jamais fermés.", detail: "D'anciennes commandes partiellement reçues restent ouvertes des mois et gonflent les dépenses engagées et le stock attendu." }
        ],
        diagram: ["Demande créée", "Bon approuvé", "Bon envoyé", "Marchandises livrées", "Facture rapprochée"],
        faq: [
          { q: "Un bon de commande est-il juridiquement contraignant?", a: "Une fois accepté par le fournisseur, il forme généralement un contrat entre les deux parties. Les règles exactes dépendent de votre territoire et des conditions inscrites sur le bon." },
          { q: "Quelle est la différence entre un bon de commande et une facture?", a: "L'acheteur émet le bon de commande pour passer la commande. Le fournisseur émet la facture pour demander le paiement après la livraison." }
        ]
      },
      es: {
        term: "Orden de compra",
        definition: "Una orden de compra es un documento que un comprador envía a un proveedor con los artículos, cantidades, precios y condiciones de entrega que acepta comprar.",
        explanation: "La orden de compra convierte una solicitud en un compromiso. Cuando el proveedor la acepta, ambas partes tienen un registro claro de qué se pidió, a qué precio y para cuándo.\n\nUna pequeña tienda de muebles puede enviar una orden por 40 sillas a un precio unitario acordado, con entrega en su almacén en tres semanas. El número de orden acompaña todo el proceso: en la lista de empaque, en la recepción y en la factura.\n\nEse número compartido permite seguir los pedidos abiertos, planear el flujo de caja y conciliar la factura cuando llega. Sin órdenes de compra, el gasto es más difícil de controlar.",
        breaks: [
          { title: "Se compra por teléfono o correo sin orden.", detail: "Cuando se compra primero y la orden se crea después, la aprobación es un trámite y la factura no tiene con qué compararse." },
          { title: "Los precios de la orden están desactualizados.", detail: "Si la lista de precios no se mantiene al día, casi todas las facturas llegan con otro precio y fallan la conciliación." },
          { title: "Los cambios no se registran en la orden.", detail: "El proveedor acepta por teléfono cambiar un producto o enviar parcial, pero la orden sigue mostrando el pedido original." },
          { title: "Las órdenes abiertas nunca se cierran.", detail: "Pedidos viejos recibidos en parte siguen abiertos por meses e inflan el gasto comprometido y el inventario por llegar." }
        ],
        diagram: ["Solicitud creada", "Orden aprobada", "Orden enviada", "Mercancía entregada", "Factura conciliada"],
        faq: [
          { q: "¿Una orden de compra es legalmente vinculante?", a: "Cuando el proveedor la acepta, por lo general forma un contrato entre ambas partes. Las reglas exactas dependen de tu jurisdicción y de los términos impresos en la orden." },
          { q: "¿Cuál es la diferencia entre una orden de compra y una factura?", a: "El comprador emite la orden de compra para hacer el pedido. El proveedor emite la factura para cobrar después de entregar." }
        ]
      }
    }
  },
  {
    slug: "goods-receipt",
    category: "operations",
    hub: "/consulting",
    related: ["three-way-match", "purchase-order", "lot-tracking", "warehouse-management-system", "backorder"],
    copy: {
      en: {
        term: "Goods receipt",
        definition: "A goods receipt is the record made when ordered items physically arrive, confirming what was received, how much, and in what condition.",
        explanation: "When a delivery reaches the dock, someone counts it, checks it against the purchase order, and records it in the system. That record is the goods receipt.\n\nIt does two jobs. First, it adds the stock to inventory so sales and planning can see it. Second, it gives accounts payable proof of delivery for matching the invoice. A small food distributor receiving a pallet of canned goods might find two damaged cases. The receipt notes 46 good cases instead of 48, so the business only pays for what it can sell.\n\nA receipt that is fast and accurate keeps inventory, purchasing and finance all looking at the same numbers.",
        breaks: [
          { title: "Staff receive the full PO quantity by default.", detail: "Clicking receive all without counting hides short shipments and puts phantom stock on the shelf." },
          { title: "Deliveries sit on the dock before being recorded.", detail: "Stock is physically there but not in the system, so sales sees it as out of stock and buyers may reorder." },
          { title: "Damage is not noted on the receipt.", detail: "If damaged items are received as good, the claim window with the carrier or supplier can close before anyone notices." },
          { title: "Receiving happens on paper and is keyed in later.", detail: "Retyping counts from a clipboard adds delay and typing errors at the exact point where accuracy matters most." }
        ],
        diagram: ["Delivery arrives", "Count and inspect", "Check against PO", "Record receipt", "Stock available"],
        faq: [
          { q: "Who should record the goods receipt?", a: "The person who physically checks the delivery, usually in receiving or the warehouse. Separating this from the person who approves invoices is a basic control." },
          { q: "What happens if only part of an order arrives?", a: "You record a partial receipt for what came in. The rest stays open on the purchase order until it arrives or is cancelled." }
        ]
      },
      fr: {
        term: "Réception de marchandises",
        definition: "La réception de marchandises est l'enregistrement fait quand les articles commandés arrivent physiquement, qui confirme ce qui a été reçu, en quelle quantité et dans quel état.",
        explanation: "Quand une livraison arrive au quai, quelqu'un la compte, la compare au bon de commande et l'enregistre dans le système. Cet enregistrement est la réception.\n\nElle a deux rôles. D'abord, elle ajoute le stock à l'inventaire pour que les ventes et la planification le voient. Ensuite, elle donne aux comptes fournisseurs la preuve de livraison pour rapprocher la facture. Un petit distributeur alimentaire qui reçoit une palette de conserves peut trouver deux caisses abîmées. La réception indique 46 caisses bonnes au lieu de 48, et l'entreprise ne paie que ce qu'elle peut vendre.\n\nUne réception rapide et exacte garde l'inventaire, les achats et la finance sur les mêmes chiffres.",
        breaks: [
          { title: "Le personnel reçoit toute la quantité par défaut.", detail: "Cliquer sur tout recevoir sans compter cache les livraisons incomplètes et crée du stock fantôme." },
          { title: "Les livraisons attendent au quai avant d'être saisies.", detail: "Le stock est là physiquement mais pas dans le système, donc les ventes le voient en rupture et les acheteurs recommandent." },
          { title: "Les dommages ne sont pas notés.", detail: "Si des articles abîmés sont reçus comme bons, le délai de réclamation auprès du transporteur ou du fournisseur peut expirer." },
          { title: "La réception se fait sur papier et est saisie plus tard.", detail: "Retaper les comptes d'une feuille ajoute du délai et des erreurs là où l'exactitude compte le plus." }
        ],
        diagram: ["Livraison arrivée", "Compter et inspecter", "Comparer au bon", "Enregistrer la réception", "Stock disponible"],
        faq: [
          { q: "Qui devrait enregistrer la réception?", a: "La personne qui vérifie physiquement la livraison, souvent à la réception ou à l'entrepôt. La séparer de celle qui approuve les factures est un contrôle de base." },
          { q: "Que faire si seule une partie de la commande arrive?", a: "On enregistre une réception partielle pour ce qui est arrivé. Le reste demeure ouvert sur le bon de commande jusqu'à sa livraison ou son annulation." }
        ]
      },
      es: {
        term: "Recepción de mercancía",
        definition: "La recepción de mercancía es el registro que se hace cuando los artículos pedidos llegan físicamente, y confirma qué se recibió, cuánto y en qué estado.",
        explanation: "Cuando una entrega llega al andén, alguien la cuenta, la compara con la orden de compra y la registra en el sistema. Ese registro es la recepción.\n\nCumple dos funciones. Primero, suma el inventario para que ventas y planeación lo vean. Segundo, da a cuentas por pagar la prueba de entrega para conciliar la factura. Un pequeño distribuidor de alimentos que recibe una tarima de enlatados puede encontrar dos cajas dañadas. La recepción registra 46 cajas buenas en lugar de 48, y la empresa solo paga lo que puede vender.\n\nUna recepción rápida y exacta mantiene a inventario, compras y finanzas con los mismos números.",
        breaks: [
          { title: "El personal recibe la cantidad completa por defecto.", detail: "Hacer clic en recibir todo sin contar oculta entregas incompletas y crea inventario fantasma." },
          { title: "Las entregas esperan en el andén antes de registrarse.", detail: "El producto está ahí pero no en el sistema, así que ventas lo ve agotado y compras puede volver a pedir." },
          { title: "Los daños no se anotan.", detail: "Si artículos dañados se reciben como buenos, el plazo para reclamar al transportista o proveedor puede vencer." },
          { title: "Se recibe en papel y se captura después.", detail: "Volver a teclear conteos de una hoja agrega demora y errores justo donde la exactitud más importa." }
        ],
        diagram: ["Llega la entrega", "Contar e inspeccionar", "Comparar con la orden", "Registrar recepción", "Inventario disponible"],
        faq: [
          { q: "¿Quién debe registrar la recepción?", a: "La persona que revisa físicamente la entrega, normalmente en recepción o almacén. Separarla de quien aprueba facturas es un control básico." },
          { q: "¿Qué pasa si solo llega parte del pedido?", a: "Se registra una recepción parcial por lo que llegó. El resto sigue abierto en la orden de compra hasta que llegue o se cancele." }
        ]
      }
    }
  },
  {
    slug: "landed-cost",
    category: "operations",
    hub: "/consulting",
    related: ["cost-of-goods-sold", "inventory-valuation", "multi-currency", "purchase-order", "fifo"],
    copy: {
      en: {
        term: "Landed cost",
        definition: "Landed cost is the full cost of getting a product to your warehouse, including the purchase price plus freight, duties, insurance, brokerage and other fees.",
        explanation: "The supplier's price is only part of what an item really costs. If you import goods, you also pay for shipping, customs duties, a customs broker, insurance, and sometimes port or handling charges.\n\nLanded cost adds all of these to each unit. Picture a kitchenware retailer importing a container of pans. The invoice price looks good, but once ocean freight, duty and brokerage are spread across every pan, the real unit cost is noticeably higher.\n\nKnowing the landed cost lets you set prices that keep your margin, value inventory correctly, and compare suppliers fairly. A cheaper supplier overseas may not be cheaper once the goods reach your door.",
        breaks: [
          { title: "Freight and duty bills arrive weeks after the goods.", detail: "If stock is valued before those bills come in, the cost on the books is too low and margins look better than they are." },
          { title: "Extra costs are booked as overhead instead of to items.", detail: "Putting freight in a general expense account hides which products are actually expensive to bring in." },
          { title: "There is no rule for spreading costs across items.", detail: "Splitting a container's freight by value, weight or volume gives different answers, and switching methods makes reports hard to compare." },
          { title: "Exchange rates are applied inconsistently.", detail: "Using the rate from the order date for one bill and the payment date for another makes unit costs drift for no real reason." }
        ],
        faq: [
          { q: "What is included in landed cost?", a: "Typically the product price, freight, insurance, customs duties and taxes that are not recoverable, brokerage fees, and handling charges. Recoverable sales taxes are usually left out." },
          { q: "How do you allocate landed cost across items?", a: "Common methods split the extra costs by each item's value, weight, volume or quantity. Pick the method that best matches what drives the cost and use it consistently." }
        ]
      },
      fr: {
        term: "Coût de revient rendu",
        definition: "Le coût de revient rendu est le coût total pour amener un produit à votre entrepôt, soit le prix d'achat plus le transport, les droits de douane, l'assurance, le courtage et les autres frais.",
        explanation: "Le prix du fournisseur n'est qu'une partie du coût réel d'un article. Si vous importez, vous payez aussi le transport, les droits de douane, un courtier en douane, l'assurance et parfois des frais portuaires ou de manutention.\n\nLe coût rendu ajoute tous ces frais à chaque unité. Imaginez un détaillant d'articles de cuisine qui importe un conteneur de poêles. Le prix facturé semble bon, mais une fois le fret maritime, les droits et le courtage répartis sur chaque poêle, le vrai coût unitaire est nettement plus élevé.\n\nConnaître ce coût permet de fixer des prix qui préservent la marge, de bien évaluer le stock et de comparer les fournisseurs de façon juste.",
        breaks: [
          { title: "Les factures de transport et de droits arrivent des semaines plus tard.", detail: "Si le stock est évalué avant, le coût comptable est trop bas et les marges semblent meilleures qu'elles ne le sont." },
          { title: "Les frais sont passés en frais généraux plutôt qu'aux articles.", detail: "Mettre le transport dans un compte de dépenses général cache quels produits coûtent vraiment cher à faire venir." },
          { title: "Aucune règle de répartition entre les articles.", detail: "Répartir le fret d'un conteneur selon la valeur, le poids ou le volume donne des résultats différents, et changer de méthode rend les rapports incomparables." },
          { title: "Les taux de change sont appliqués de façon incohérente.", detail: "Utiliser le taux de la date de commande pour une facture et celui du paiement pour une autre fait varier les coûts sans raison." }
        ],
        faq: [
          { q: "Qu'est-ce qui est inclus dans le coût de revient rendu?", a: "En général le prix du produit, le transport, l'assurance, les droits et taxes non récupérables, les frais de courtage et de manutention. Les taxes de vente récupérables sont habituellement exclues." },
          { q: "Comment répartir le coût rendu entre les articles?", a: "Les méthodes courantes répartissent les frais selon la valeur, le poids, le volume ou la quantité de chaque article. Choisissez celle qui reflète le mieux la source du coût et gardez-la." }
        ]
      },
      es: {
        term: "Costo puesto en destino",
        definition: "El costo puesto en destino es el costo total de llevar un producto a tu almacén, que incluye el precio de compra más flete, aranceles, seguro, agente aduanal y otros cargos.",
        explanation: "El precio del proveedor es solo una parte de lo que cuesta un artículo. Si importas, también pagas el envío, los aranceles, un agente aduanal, el seguro y a veces cargos de puerto o manejo.\n\nEl costo puesto en destino suma todo esto a cada unidad. Imagina una tienda de artículos de cocina que importa un contenedor de sartenes. El precio de la factura parece bueno, pero al repartir el flete marítimo, los aranceles y el agente aduanal entre cada sartén, el costo real por unidad es bastante más alto.\n\nConocerlo te permite fijar precios que cuiden tu margen, valuar bien el inventario y comparar proveedores de forma justa.",
        breaks: [
          { title: "Las facturas de flete y aranceles llegan semanas después.", detail: "Si el inventario se valúa antes, el costo en libros queda bajo y los márgenes parecen mejores de lo que son." },
          { title: "Los cargos se registran como gastos generales y no a los artículos.", detail: "Poner el flete en una cuenta de gastos general oculta qué productos son realmente caros de traer." },
          { title: "No hay regla para repartir los costos.", detail: "Repartir el flete de un contenedor por valor, peso o volumen da resultados distintos, y cambiar de método hace que los reportes no se puedan comparar." },
          { title: "Los tipos de cambio se aplican sin consistencia.", detail: "Usar el tipo de la fecha de pedido en una factura y el de la fecha de pago en otra hace variar los costos sin motivo real." }
        ],
        faq: [
          { q: "¿Qué incluye el costo puesto en destino?", a: "Normalmente el precio del producto, flete, seguro, aranceles e impuestos no recuperables, honorarios del agente aduanal y cargos de manejo. Los impuestos recuperables suelen quedar fuera." },
          { q: "¿Cómo se reparte entre los artículos?", a: "Los métodos comunes reparten los cargos según valor, peso, volumen o cantidad de cada artículo. Elige el que mejor refleje lo que genera el costo y úsalo siempre." }
        ]
      }
    }
  },
  {
    slug: "safety-stock",
    category: "operations",
    hub: "/consulting",
    related: ["reorder-point", "demand-planning", "backorder", "sku", "mrp"],
    copy: {
      en: {
        term: "Safety stock",
        definition: "Safety stock is the extra inventory a business keeps on hand to cover unexpected spikes in demand or delays in supply.",
        explanation: "Demand and delivery times are never perfectly predictable. A supplier ships late, or a customer places a bigger order than usual. Safety stock is the cushion that keeps you selling while the next shipment is on its way.\n\nA plumbing supply distributor might normally sell 50 of a certain valve per week, with a two-week lead time. If it keeps an extra 30 valves as safety stock, a slow shipment or a busy week does not leave contractors empty-handed.\n\nThe tradeoff is cash. Every unit of safety stock is money sitting on a shelf, so the goal is enough to protect service on the items that matter, not a big buffer on everything.",
        breaks: [
          { title: "The same buffer is set for every item.", detail: "A flat rule like two weeks of stock overprotects slow items and underprotects the fast or critical ones." },
          { title: "Numbers are set once and never revisited.", detail: "Demand and supplier reliability change, but the safety stock settings stay frozen from the day the system went live." },
          { title: "Lead time variation is ignored.", detail: "Planning on the average lead time misses the late deliveries, which are exactly what safety stock is meant to cover." },
          { title: "Inventory counts are wrong.", detail: "If the system thinks you have stock you do not, the buffer exists only on screen." }
        ],
        faq: [
          { q: "How do you calculate safety stock?", a: "A simple method multiplies the gap between maximum and average daily sales by the gap between maximum and average lead time. More advanced methods use the variability of demand and lead time with a target service level." },
          { q: "Is safety stock the same as a reorder point?", a: "No. Safety stock is the buffer itself. The reorder point is the stock level that triggers a new order, and it usually includes the safety stock plus expected demand during the lead time." }
        ]
      },
      fr: {
        term: "Stock de sécurité",
        definition: "Le stock de sécurité est l'inventaire supplémentaire qu'une entreprise garde pour couvrir des hausses imprévues de la demande ou des retards d'approvisionnement.",
        explanation: "La demande et les délais de livraison ne sont jamais parfaitement prévisibles. Un fournisseur livre en retard, ou un client passe une commande plus grosse que d'habitude. Le stock de sécurité est le coussin qui permet de continuer à vendre en attendant la prochaine livraison.\n\nUn distributeur de plomberie vend peut-être 50 d'une certaine valve par semaine, avec un délai de deux semaines. S'il garde 30 valves de plus en sécurité, un envoi lent ou une semaine chargée ne laisse pas les entrepreneurs sans produit.\n\nLe compromis, c'est la trésorerie. Chaque unité de sécurité est de l'argent sur une tablette, donc le but est d'en avoir assez sur les articles importants, pas partout.",
        breaks: [
          { title: "Le même coussin est appliqué à tous les articles.", detail: "Une règle fixe comme deux semaines de stock surprotège les articles lents et sous-protège les articles rapides ou critiques." },
          { title: "Les valeurs sont fixées une fois et jamais revues.", detail: "La demande et la fiabilité des fournisseurs changent, mais les paramètres restent figés depuis la mise en service." },
          { title: "On ignore la variation des délais.", detail: "Planifier sur le délai moyen oublie les livraisons en retard, justement ce que le stock de sécurité doit couvrir." },
          { title: "Les comptes d'inventaire sont faux.", detail: "Si le système croit que vous avez du stock que vous n'avez pas, le coussin n'existe qu'à l'écran." }
        ],
        faq: [
          { q: "Comment calculer le stock de sécurité?", a: "Une méthode simple multiplie l'écart entre les ventes quotidiennes maximales et moyennes par l'écart entre le délai maximal et moyen. Les méthodes plus poussées utilisent la variabilité de la demande et du délai avec un niveau de service visé." },
          { q: "Le stock de sécurité est-il la même chose que le point de commande?", a: "Non. Le stock de sécurité est le coussin lui-même. Le point de commande est le niveau qui déclenche une nouvelle commande et inclut généralement le stock de sécurité plus la demande prévue pendant le délai." }
        ]
      },
      es: {
        term: "Inventario de seguridad",
        definition: "El inventario de seguridad es el inventario adicional que una empresa mantiene para cubrir aumentos inesperados de la demanda o retrasos en el abastecimiento.",
        explanation: "La demanda y los tiempos de entrega nunca son totalmente predecibles. Un proveedor envía tarde o un cliente hace un pedido más grande de lo normal. El inventario de seguridad es el colchón que te permite seguir vendiendo mientras llega el siguiente envío.\n\nUn distribuidor de plomería puede vender 50 de cierta válvula por semana, con un tiempo de entrega de dos semanas. Si guarda 30 válvulas extra como seguridad, un envío lento o una semana intensa no deja a los contratistas sin producto.\n\nEl costo es el efectivo. Cada unidad de seguridad es dinero en un estante, así que la meta es tener suficiente en los artículos importantes, no en todos.",
        breaks: [
          { title: "Se usa el mismo colchón para todos los artículos.", detail: "Una regla fija como dos semanas de inventario sobreprotege los artículos lentos y deja cortos a los rápidos o críticos." },
          { title: "Los valores se fijan una vez y no se revisan.", detail: "La demanda y la confiabilidad de los proveedores cambian, pero los parámetros siguen igual que el día del arranque." },
          { title: "Se ignora la variación del tiempo de entrega.", detail: "Planear con el tiempo promedio olvida las entregas tardías, que son justo lo que el inventario de seguridad debe cubrir." },
          { title: "Los conteos de inventario están mal.", detail: "Si el sistema cree que tienes producto que no tienes, el colchón solo existe en la pantalla." }
        ],
        faq: [
          { q: "¿Cómo se calcula el inventario de seguridad?", a: "Un método sencillo multiplica la diferencia entre ventas diarias máximas y promedio por la diferencia entre el tiempo de entrega máximo y promedio. Métodos más avanzados usan la variabilidad de la demanda y del tiempo con un nivel de servicio objetivo." },
          { q: "¿Es lo mismo que el punto de reorden?", a: "No. El inventario de seguridad es el colchón. El punto de reorden es el nivel que dispara un nuevo pedido y suele incluir el inventario de seguridad más la demanda esperada durante el tiempo de entrega." }
        ]
      }
    }
  },
  {
    slug: "reorder-point",
    category: "operations",
    hub: "/consulting",
    related: ["safety-stock", "purchase-order", "demand-planning", "workflow-automation", "cycle-count"],
    copy: {
      en: {
        term: "Reorder point",
        definition: "A reorder point is the inventory level at which a business should place a new order so stock arrives before it runs out.",
        explanation: "The reorder point answers one question: when should I buy more? It is usually the demand you expect during the supplier's lead time, plus your safety stock.\n\nSay a hardware store sells about 10 bags of grout a day, the supplier takes 5 days to deliver, and the store keeps 20 bags as safety stock. The reorder point is 70 bags. When stock drops to 70, it is time to order.\n\nMost inventory and ERP systems can watch stock levels and flag or even draft a purchase order when an item hits its reorder point. That only works if the stock count in the system is right and the settings reflect current sales.",
        breaks: [
          { title: "Reorder points are guessed, not calculated.", detail: "Numbers picked by feel years ago no longer match current sales or lead times." },
          { title: "Seasonal demand is not reflected.", detail: "A fixed reorder point that works in winter leaves shelves empty during the spring rush." },
          { title: "Open orders are not counted.", detail: "If the system ignores stock already on order, it keeps suggesting new orders and you end up overstocked." },
          { title: "Alerts are ignored because there are too many.", detail: "When hundreds of items flag every morning, buyers stop trusting the list and go back to spreadsheets." }
        ],
        diagram: ["Stock falls", "Hits reorder point", "Draft purchase order", "Supplier ships", "Stock replenished"],
        faq: [
          { q: "What is the reorder point formula?", a: "A common formula is average daily demand times lead time in days, plus safety stock. For example, 10 per day times 5 days plus 20 safety stock gives a reorder point of 70." },
          { q: "What is the difference between reorder point and reorder quantity?", a: "The reorder point says when to order. The reorder quantity says how much to order each time." }
        ]
      },
      fr: {
        term: "Point de commande",
        definition: "Le point de commande est le niveau d'inventaire auquel une entreprise devrait passer une nouvelle commande pour que le stock arrive avant d'être épuisé.",
        explanation: "Le point de commande répond à une question : quand dois-je racheter? C'est habituellement la demande prévue pendant le délai du fournisseur, plus le stock de sécurité.\n\nDisons qu'une quincaillerie vend environ 10 sacs de coulis par jour, que le fournisseur livre en 5 jours et que le magasin garde 20 sacs en sécurité. Le point de commande est de 70 sacs. Quand le stock tombe à 70, il est temps de commander.\n\nLa plupart des logiciels d'inventaire et des ERP peuvent surveiller les niveaux et signaler, ou même préparer, un bon de commande quand un article atteint ce point. Cela ne fonctionne que si le stock dans le système est exact et les paramètres à jour.",
        breaks: [
          { title: "Les points de commande sont devinés, pas calculés.", detail: "Des chiffres choisis au jugé il y a des années ne correspondent plus aux ventes ni aux délais actuels." },
          { title: "La demande saisonnière n'est pas prise en compte.", detail: "Un point fixe qui fonctionne l'hiver laisse les tablettes vides pendant la cohue du printemps." },
          { title: "Les commandes en cours ne sont pas comptées.", detail: "Si le système ignore le stock déjà commandé, il suggère sans cesse de nouvelles commandes et vous finissez en surstock." },
          { title: "Les alertes sont ignorées parce qu'il y en a trop.", detail: "Quand des centaines d'articles sont signalés chaque matin, les acheteurs ne font plus confiance à la liste et retournent aux tableurs." }
        ],
        diagram: ["Le stock baisse", "Point de commande atteint", "Préparer le bon", "Le fournisseur expédie", "Stock réapprovisionné"],
        faq: [
          { q: "Quelle est la formule du point de commande?", a: "Une formule courante est la demande quotidienne moyenne multipliée par le délai en jours, plus le stock de sécurité. Par exemple, 10 par jour fois 5 jours plus 20 donne 70." },
          { q: "Quelle différence entre point de commande et quantité à commander?", a: "Le point de commande dit quand commander. La quantité à commander dit combien commander chaque fois." }
        ]
      },
      es: {
        term: "Punto de reorden",
        definition: "El punto de reorden es el nivel de inventario en el que una empresa debe hacer un nuevo pedido para que el producto llegue antes de agotarse.",
        explanation: "El punto de reorden responde una pregunta: ¿cuándo debo comprar más? Normalmente es la demanda esperada durante el tiempo de entrega del proveedor, más el inventario de seguridad.\n\nDigamos que una ferretería vende unos 10 sacos de boquilla al día, el proveedor tarda 5 días en entregar y la tienda guarda 20 sacos de seguridad. El punto de reorden es 70 sacos. Cuando el inventario baja a 70, es hora de pedir.\n\nLa mayoría de los sistemas de inventario y ERP pueden vigilar los niveles y avisar, o incluso preparar, una orden de compra cuando un artículo llega a ese punto. Solo funciona si el inventario en el sistema es correcto y los parámetros están al día.",
        breaks: [
          { title: "Los puntos de reorden se adivinan, no se calculan.", detail: "Números elegidos al tanteo hace años ya no coinciden con las ventas ni los tiempos de entrega actuales." },
          { title: "No se refleja la demanda de temporada.", detail: "Un punto fijo que funciona en invierno deja los estantes vacíos en la temporada alta de primavera." },
          { title: "No se cuentan los pedidos abiertos.", detail: "Si el sistema ignora lo que ya está pedido, sigue sugiriendo pedidos y terminas con exceso de inventario." },
          { title: "Las alertas se ignoran porque son demasiadas.", detail: "Cuando cientos de artículos aparecen cada mañana, los compradores dejan de confiar en la lista y vuelven a las hojas de cálculo." }
        ],
        diagram: ["Baja el inventario", "Llega al punto", "Preparar orden de compra", "El proveedor envía", "Inventario repuesto"],
        faq: [
          { q: "¿Cuál es la fórmula del punto de reorden?", a: "Una fórmula común es la demanda diaria promedio por el tiempo de entrega en días, más el inventario de seguridad. Por ejemplo, 10 al día por 5 días más 20 da 70." },
          { q: "¿Qué diferencia hay entre punto de reorden y cantidad de reorden?", a: "El punto de reorden dice cuándo pedir. La cantidad de reorden dice cuánto pedir cada vez." }
        ]
      }
    }
  },
  {
    slug: "cycle-count",
    category: "operations",
    hub: "/consulting",
    related: ["inventory-valuation", "warehouse-management-system", "sku", "reconciliation", "data-quality"],
    copy: {
      en: {
        term: "Cycle count",
        definition: "A cycle count is a method of checking inventory accuracy by counting a small set of items on a regular schedule instead of counting everything at once.",
        explanation: "A full physical count often means shutting down the warehouse for a day or a weekend. Cycle counting spreads that work out. Each day or week, staff count a few locations or items and compare the result with what the system says.\n\nMany businesses count fast-moving or high-value items more often. An auto parts distributor might count its top sellers every month and slow movers once a year. When a count does not match, staff fix the record and look for the cause, such as a missed receipt or a picking error.\n\nOver time, cycle counting keeps stock records trustworthy without stopping operations, and it shows where processes are leaking.",
        breaks: [
          { title: "Counters can see the expected quantity.", detail: "When the system shows what should be there, people tend to confirm it instead of truly counting." },
          { title: "Variances are corrected but never investigated.", detail: "Adjusting the number fixes the symptom, while the receiving or picking error that caused it keeps happening." },
          { title: "Counts happen while stock is moving.", detail: "Counting a bin during picking or receiving creates false variances that waste time and erode trust." },
          { title: "The schedule slips when the warehouse gets busy.", detail: "Cycle counts are the first task dropped in a rush, which is exactly when errors build up." }
        ],
        diagram: ["Pick items to count", "Count the bins", "Compare to system", "Investigate variance", "Adjust record"],
        faq: [
          { q: "How often should you cycle count?", a: "It depends on the item. A common approach counts high-value or fast-moving items monthly or quarterly and lower-value items once or twice a year." },
          { q: "Can cycle counting replace a full annual count?", a: "Often yes, if the program is consistent and well documented. Check with your accountant or auditor, since some situations still call for a full count." }
        ]
      },
      fr: {
        term: "Inventaire tournant",
        definition: "L'inventaire tournant est une méthode qui vérifie l'exactitude des stocks en comptant un petit groupe d'articles selon un calendrier régulier, plutôt que tout compter en même temps.",
        explanation: "Un inventaire complet oblige souvent à fermer l'entrepôt une journée ou une fin de semaine. L'inventaire tournant étale ce travail. Chaque jour ou chaque semaine, le personnel compte quelques emplacements ou articles et compare avec ce que dit le système.\n\nBeaucoup d'entreprises comptent plus souvent les articles rapides ou de grande valeur. Un distributeur de pièces automobiles peut compter ses meilleurs vendeurs chaque mois et les articles lents une fois par an. Quand un compte ne concorde pas, on corrige le dossier et on cherche la cause, comme une réception oubliée ou une erreur de cueillette.\n\nAvec le temps, la méthode garde les dossiers fiables sans arrêter les opérations.",
        breaks: [
          { title: "Les compteurs voient la quantité attendue.", detail: "Quand le système affiche ce qui devrait être là, on a tendance à confirmer plutôt qu'à vraiment compter." },
          { title: "Les écarts sont corrigés mais jamais analysés.", detail: "Ajuster le chiffre règle le symptôme, mais l'erreur de réception ou de cueillette continue." },
          { title: "On compte pendant que le stock bouge.", detail: "Compter un casier pendant la cueillette ou la réception crée de faux écarts qui font perdre du temps." },
          { title: "Le calendrier glisse quand l'entrepôt est occupé.", detail: "Les comptes sont la première tâche abandonnée en période de pointe, justement quand les erreurs s'accumulent." }
        ],
        diagram: ["Choisir les articles", "Compter les casiers", "Comparer au système", "Analyser l'écart", "Ajuster le dossier"],
        faq: [
          { q: "À quelle fréquence faire l'inventaire tournant?", a: "Cela dépend de l'article. Une approche courante compte les articles de grande valeur ou rapides chaque mois ou trimestre, et les autres une ou deux fois par an." },
          { q: "L'inventaire tournant peut-il remplacer l'inventaire annuel complet?", a: "Souvent oui, si le programme est constant et bien documenté. Vérifiez auprès de votre comptable ou auditeur, car certaines situations exigent encore un compte complet." }
        ]
      },
      es: {
        term: "Conteo cíclico",
        definition: "El conteo cíclico es un método para verificar la exactitud del inventario contando un grupo pequeño de artículos con un calendario regular, en lugar de contar todo a la vez.",
        explanation: "Un inventario físico completo suele obligar a cerrar el almacén un día o un fin de semana. El conteo cíclico reparte ese trabajo. Cada día o semana, el personal cuenta algunas ubicaciones o artículos y compara con lo que dice el sistema.\n\nMuchas empresas cuentan más seguido los artículos de alta rotación o alto valor. Un distribuidor de autopartes puede contar sus más vendidos cada mes y los lentos una vez al año. Cuando un conteo no coincide, se corrige el registro y se busca la causa, como una recepción olvidada o un error de surtido.\n\nCon el tiempo, mantiene confiables los registros sin detener la operación.",
        breaks: [
          { title: "Quien cuenta puede ver la cantidad esperada.", detail: "Cuando el sistema muestra lo que debería haber, la gente tiende a confirmar en lugar de contar de verdad." },
          { title: "Las diferencias se corrigen pero no se investigan.", detail: "Ajustar el número arregla el síntoma, mientras el error de recepción o surtido sigue ocurriendo." },
          { title: "Se cuenta mientras el inventario se mueve.", detail: "Contar una ubicación durante el surtido o la recepción crea diferencias falsas que hacen perder tiempo." },
          { title: "El calendario se atrasa cuando hay mucho trabajo.", detail: "Los conteos son lo primero que se deja en temporada alta, justo cuando se acumulan los errores." }
        ],
        diagram: ["Elegir artículos", "Contar ubicaciones", "Comparar con el sistema", "Investigar diferencia", "Ajustar registro"],
        faq: [
          { q: "¿Cada cuánto se hace el conteo cíclico?", a: "Depende del artículo. Un enfoque común cuenta los de alto valor o alta rotación cada mes o trimestre, y los demás una o dos veces al año." },
          { q: "¿Puede reemplazar el inventario anual completo?", a: "Muchas veces sí, si el programa es constante y está bien documentado. Consulta a tu contador o auditor, porque algunas situaciones aún requieren un conteo completo." }
        ]
      }
    }
  },
  {
    slug: "backorder",
    category: "operations",
    hub: "/consulting",
    related: ["safety-stock", "reorder-point", "order-to-cash", "drop-shipping", "demand-planning"],
    copy: {
      en: {
        term: "Backorder",
        definition: "A backorder is a customer order, or part of one, that cannot be filled right away because the item is out of stock and will ship once new stock arrives.",
        explanation: "When a customer orders something you do not have on hand, you can cancel the line or keep it open and ship later. Keeping it open creates a backorder.\n\nFor example, a school supply wholesaler gets an order for 500 binders but only has 300. It ships the 300 now and backorders the remaining 200, which go out automatically when the next delivery is received.\n\nBackorders keep the sale instead of losing it, but they need care. Customers want an honest date, the warehouse needs to know which orders to fill first when stock lands, and finance needs to know what revenue is waiting. A growing backorder list is often an early sign of a planning problem.",
        breaks: [
          { title: "Customers are not told about the delay.", detail: "A silent backorder turns into a surprised, frustrated customer and a support ticket." },
          { title: "Incoming stock is not allocated to backorders.", detail: "New stock gets picked for fresh orders first, so the oldest waiting customers wait even longer." },
          { title: "Backorders never get cleaned up.", detail: "Old lines the customer no longer wants stay open and distort demand and revenue forecasts." },
          { title: "Promised dates come from guesses.", detail: "If the date is not tied to an actual purchase order and lead time, it is likely to be missed." }
        ],
        faq: [
          { q: "What is the difference between backorder and out of stock?", a: "Out of stock means you have none on hand. A backorder means you have accepted the order anyway and will ship it when stock arrives." },
          { q: "Should I charge customers for backordered items?", a: "Practices vary. Many businesses authorize payment at order time and capture it when the item ships; check your payment provider's rules and local consumer law." }
        ]
      },
      fr: {
        term: "Commande en souffrance",
        definition: "Une commande en souffrance est une commande client, ou une partie, qu'on ne peut pas remplir tout de suite parce que l'article est en rupture, et qui sera expédiée à l'arrivée du nouveau stock.",
        explanation: "Quand un client commande un article que vous n'avez pas, vous pouvez annuler la ligne ou la garder ouverte et l'expédier plus tard. La garder ouverte crée une commande en souffrance.\n\nPar exemple, un grossiste en fournitures scolaires reçoit une commande de 500 cartables mais n'en a que 300. Il expédie les 300 maintenant et met les 200 autres en souffrance, qui partiront automatiquement à la prochaine réception.\n\nCela permet de garder la vente, mais demande du soin. Les clients veulent une date honnête, l'entrepôt doit savoir quelles commandes remplir en premier et la finance doit savoir quels revenus sont en attente. Une liste qui grossit signale souvent un problème de planification.",
        breaks: [
          { title: "Les clients ne sont pas avisés du retard.", detail: "Une commande en souffrance silencieuse devient un client surpris, frustré, et une demande au soutien." },
          { title: "Le stock reçu n'est pas réservé aux commandes en attente.", detail: "Le nouveau stock sert d'abord les nouvelles commandes, et les clients qui attendent depuis longtemps attendent encore." },
          { title: "Les commandes en souffrance ne sont jamais nettoyées.", detail: "De vieilles lignes dont le client ne veut plus restent ouvertes et faussent les prévisions." },
          { title: "Les dates promises sont devinées.", detail: "Si la date n'est pas liée à un vrai bon de commande et à un délai, elle risque d'être ratée." }
        ],
        faq: [
          { q: "Quelle différence entre commande en souffrance et rupture de stock?", a: "La rupture veut dire que vous n'en avez aucun. La commande en souffrance veut dire que vous avez accepté la commande quand même et l'expédierez à l'arrivée du stock." },
          { q: "Faut-il facturer les articles en souffrance?", a: "Les pratiques varient. Beaucoup d'entreprises autorisent le paiement à la commande et le prélèvent à l'expédition; vérifiez les règles de votre fournisseur de paiement et la loi locale." }
        ]
      },
      es: {
        term: "Pedido pendiente",
        definition: "Un pedido pendiente es un pedido de cliente, o parte de él, que no se puede surtir de inmediato porque el artículo está agotado y se enviará cuando llegue nuevo inventario.",
        explanation: "Cuando un cliente pide algo que no tienes, puedes cancelar la línea o dejarla abierta y enviarla después. Dejarla abierta crea un pedido pendiente.\n\nPor ejemplo, un mayorista de útiles escolares recibe un pedido de 500 carpetas pero solo tiene 300. Envía las 300 ahora y deja pendientes las otras 200, que salen automáticamente cuando llega la siguiente entrega.\n\nAsí se conserva la venta, pero requiere cuidado. Los clientes quieren una fecha honesta, el almacén necesita saber qué pedidos surtir primero y finanzas necesita saber qué ingresos están en espera. Una lista de pendientes que crece suele ser señal temprana de un problema de planeación.",
        breaks: [
          { title: "No se avisa al cliente del retraso.", detail: "Un pendiente silencioso se convierte en un cliente sorprendido, molesto y en un ticket de soporte." },
          { title: "El inventario que llega no se asigna a los pendientes.", detail: "El nuevo inventario se usa primero para pedidos nuevos, y los clientes que llevan más tiempo esperan aún más." },
          { title: "Los pendientes nunca se depuran.", detail: "Líneas viejas que el cliente ya no quiere siguen abiertas y distorsionan los pronósticos." },
          { title: "Las fechas prometidas se adivinan.", detail: "Si la fecha no está ligada a una orden de compra real y a un tiempo de entrega, probablemente no se cumpla." }
        ],
        faq: [
          { q: "¿Qué diferencia hay entre pedido pendiente y agotado?", a: "Agotado significa que no tienes ninguno. Pedido pendiente significa que aceptaste el pedido de todos modos y lo enviarás cuando llegue el inventario." },
          { q: "¿Debo cobrar los artículos pendientes?", a: "Las prácticas varían. Muchas empresas autorizan el pago al hacer el pedido y lo cobran al enviar; revisa las reglas de tu procesador de pagos y la ley local." }
        ]
      }
    }
  },
  {
    slug: "drop-shipping",
    category: "operations",
    hub: "/consulting",
    related: ["order-to-cash", "purchase-order", "backorder", "edi", "api"],
    copy: {
      en: {
        term: "Drop shipping",
        definition: "Drop shipping is a fulfillment method where a seller takes a customer's order and the supplier ships the product directly to the customer, so the seller never holds the stock.",
        explanation: "With drop shipping, the seller handles the sale and the customer relationship, while a supplier or manufacturer handles storage and shipping. The seller pays the supplier, and the supplier sends the item straight to the buyer.\n\nA home decor retailer might stock small items in its own warehouse but drop ship large furniture from the maker. That way it can offer bulky products without paying to store them.\n\nThe catch is control. Stock levels, shipping times and packaging depend on someone else. For drop shipping to work well, the seller and supplier need to share orders, stock and tracking numbers quickly, often through EDI, an API or a supplier portal.",
        breaks: [
          { title: "Supplier stock levels are out of date.", detail: "If availability is updated once a day, customers can buy items the supplier has already run out of." },
          { title: "Orders are sent to suppliers by email.", detail: "Manual forwarding is slow and error prone, and orders get missed when someone is away." },
          { title: "Tracking numbers do not flow back.", detail: "Customers ask where their order is, and support has to chase the supplier to find out." },
          { title: "Returns have no clear path.", detail: "Without agreed rules, customers do not know where to send items back and refunds stall." }
        ],
        diagram: ["Customer orders", "Seller sends PO", "Supplier ships", "Tracking returned", "Seller invoices"],
        faq: [
          { q: "Is drop shipping only for online stores?", a: "No. Distributors and retailers of all kinds drop ship items that are bulky, slow moving or made to order, while stocking the rest themselves." },
          { q: "Who handles returns in drop shipping?", a: "It depends on the agreement. The seller usually owns the customer relationship, so it should set clear return rules with each supplier before selling their products." }
        ]
      },
      fr: {
        term: "Livraison directe",
        definition: "La livraison directe est une méthode d'exécution où un vendeur prend la commande du client et le fournisseur expédie le produit directement au client, sans que le vendeur détienne le stock.",
        explanation: "En livraison directe, le vendeur gère la vente et la relation client, alors qu'un fournisseur ou fabricant gère l'entreposage et l'expédition. Le vendeur paie le fournisseur, qui envoie l'article directement à l'acheteur.\n\nUn détaillant de décoration peut garder les petits articles dans son entrepôt, mais faire livrer les gros meubles directement par le fabricant. Il peut ainsi offrir des produits encombrants sans payer pour les entreposer.\n\nLe problème, c'est le contrôle. Les stocks, les délais et l'emballage dépendent d'un autre. Pour que ça marche, vendeur et fournisseur doivent échanger rapidement commandes, stocks et numéros de suivi, souvent par EDI, API ou portail fournisseur.",
        breaks: [
          { title: "Les stocks du fournisseur sont périmés.", detail: "Si la disponibilité est mise à jour une fois par jour, des clients achètent des articles déjà épuisés chez le fournisseur." },
          { title: "Les commandes sont envoyées par courriel.", detail: "Le transfert manuel est lent et sujet aux erreurs, et des commandes sont oubliées quand quelqu'un est absent." },
          { title: "Les numéros de suivi ne reviennent pas.", detail: "Les clients demandent où est leur commande et le soutien doit relancer le fournisseur." },
          { title: "Les retours n'ont pas de parcours clair.", detail: "Sans règles convenues, les clients ne savent pas où renvoyer les articles et les remboursements bloquent." }
        ],
        diagram: ["Le client commande", "Bon envoyé au fournisseur", "Le fournisseur expédie", "Suivi retourné", "Le vendeur facture"],
        faq: [
          { q: "La livraison directe est-elle seulement pour les boutiques en ligne?", a: "Non. Des distributeurs et détaillants de tous types l'utilisent pour les articles encombrants, lents ou faits sur commande, et stockent le reste eux-mêmes." },
          { q: "Qui gère les retours en livraison directe?", a: "Cela dépend de l'entente. Le vendeur détient généralement la relation client, donc il devrait fixer des règles de retour claires avec chaque fournisseur avant de vendre ses produits." }
        ]
      },
      es: {
        term: "Envío directo (drop shipping)",
        definition: "El envío directo es un método de entrega en el que el vendedor toma el pedido del cliente y el proveedor envía el producto directamente al cliente, sin que el vendedor tenga el inventario.",
        explanation: "Con el envío directo, el vendedor maneja la venta y la relación con el cliente, mientras un proveedor o fabricante maneja el almacenaje y el envío. El vendedor paga al proveedor, y este envía el artículo directo al comprador.\n\nUna tienda de decoración puede guardar artículos pequeños en su almacén, pero enviar los muebles grandes directo desde el fabricante. Así ofrece productos voluminosos sin pagar por almacenarlos.\n\nEl reto es el control. El inventario, los tiempos de envío y el empaque dependen de otro. Para que funcione, vendedor y proveedor deben compartir rápido los pedidos, el inventario y los números de rastreo, muchas veces por EDI, API o un portal de proveedores.",
        breaks: [
          { title: "El inventario del proveedor está desactualizado.", detail: "Si la disponibilidad se actualiza una vez al día, los clientes compran artículos que el proveedor ya no tiene." },
          { title: "Los pedidos se envían al proveedor por correo.", detail: "Reenviar a mano es lento y propenso a errores, y se pierden pedidos cuando alguien falta." },
          { title: "Los números de rastreo no regresan.", detail: "Los clientes preguntan por su pedido y soporte tiene que perseguir al proveedor para saber." },
          { title: "Las devoluciones no tienen un camino claro.", detail: "Sin reglas acordadas, el cliente no sabe a dónde devolver y los reembolsos se atoran." }
        ],
        diagram: ["El cliente compra", "Orden al proveedor", "El proveedor envía", "Regresa el rastreo", "El vendedor factura"],
        faq: [
          { q: "¿El envío directo es solo para tiendas en línea?", a: "No. Distribuidores y minoristas de todo tipo lo usan para artículos voluminosos, de baja rotación o hechos a pedido, y almacenan el resto ellos mismos." },
          { q: "¿Quién maneja las devoluciones?", a: "Depende del acuerdo. El vendedor suele ser dueño de la relación con el cliente, así que debe fijar reglas claras de devolución con cada proveedor antes de vender sus productos." }
        ]
      }
    }
  },
  {
    slug: "fifo",
    category: "operations",
    hub: "/consulting",
    related: ["inventory-valuation", "cost-of-goods-sold", "lot-tracking", "landed-cost", "general-ledger"],
    copy: {
      en: {
        term: "FIFO (first in, first out)",
        definition: "FIFO, or first in, first out, is an inventory method that assumes the oldest stock is sold or used first, both for costing and often for physical handling.",
        explanation: "FIFO has two related meanings. In accounting, it is a way to assign cost: when you sell a unit, you charge the cost of the oldest unit you bought. In the warehouse, it is a handling rule: ship the oldest stock first so nothing sits too long.\n\nA coffee roaster that buys green beans at different prices through the year can use FIFO costing so each bag sold carries the cost of the earliest beans still on hand. Its warehouse also picks the oldest bags first so beans stay fresh.\n\nFIFO is widely accepted under accounting standards in Canada, the US and elsewhere. LIFO, the opposite, is allowed in the US but not under IFRS.",
        breaks: [
          { title: "Physical picking does not follow the rule.", detail: "Staff grab whatever is closest to the front, so older stock expires at the back of the shelf." },
          { title: "Costing layers are corrupted by backdated entries.", detail: "Receipts or adjustments posted to past dates reshuffle which cost layer was used and change historical margins." },
          { title: "Returns go back at the wrong cost.", detail: "If a returned item comes back at today's cost instead of its original layer, inventory value drifts." },
          { title: "People assume FIFO and average cost are interchangeable.", detail: "Switching methods mid-year changes reported profit and may need accountant sign-off and disclosure." }
        ],
        faq: [
          { q: "Is FIFO allowed in Canada?", a: "Yes. FIFO and weighted average cost are both accepted under Canadian standards. LIFO is not permitted under IFRS or Canadian private enterprise standards." },
          { q: "What is the difference between FIFO and FEFO?", a: "FIFO ships the oldest received stock first. FEFO, first expired first out, ships the stock with the nearest expiry date first, which matters for food and pharmaceuticals." }
        ]
      },
      fr: {
        term: "PEPS (premier entré, premier sorti)",
        definition: "La méthode PEPS, ou premier entré, premier sorti, est une méthode d'inventaire qui suppose que le stock le plus ancien est vendu ou utilisé en premier, autant pour le calcul du coût que souvent pour la manutention.",
        explanation: "PEPS a deux sens liés. En comptabilité, c'est une façon d'attribuer le coût : quand vous vendez une unité, vous lui imputez le coût de la plus ancienne unité achetée. À l'entrepôt, c'est une règle de manutention : expédier le stock le plus vieux d'abord.\n\nUn torréfacteur qui achète du café vert à différents prix pendant l'année peut utiliser PEPS pour que chaque sac vendu porte le coût des grains les plus anciens encore en stock. Son entrepôt prend aussi les sacs les plus anciens d'abord pour garder les grains frais.\n\nPEPS est largement accepté par les normes comptables au Canada, aux États-Unis et ailleurs. La méthode DEPS, l'inverse, est permise aux États-Unis mais pas sous les IFRS.",
        breaks: [
          { title: "La cueillette physique ne suit pas la règle.", detail: "Le personnel prend ce qui est le plus proche, et le vieux stock expire au fond de la tablette." },
          { title: "Les couches de coût sont faussées par des saisies antidatées.", detail: "Des réceptions ou ajustements datés dans le passé changent la couche utilisée et modifient les marges historiques." },
          { title: "Les retours reviennent au mauvais coût.", detail: "Si un article retourné revient au coût d'aujourd'hui plutôt qu'à sa couche d'origine, la valeur du stock dérive." },
          { title: "On croit que PEPS et coût moyen sont interchangeables.", detail: "Changer de méthode en cours d'année modifie le profit déclaré et peut exiger l'accord du comptable et une divulgation." }
        ],
        faq: [
          { q: "PEPS est-il permis au Canada?", a: "Oui. PEPS et le coût moyen pondéré sont acceptés par les normes canadiennes. DEPS n'est pas permis sous les IFRS ni sous les normes pour les entreprises à capital fermé." },
          { q: "Quelle différence entre PEPS et PPPS?", a: "PEPS expédie le stock reçu le plus tôt. PPPS, premier périmé premier sorti, expédie le stock dont la date d'expiration est la plus proche, ce qui compte pour les aliments et les médicaments." }
        ]
      },
      es: {
        term: "PEPS (primeras entradas, primeras salidas)",
        definition: "PEPS, o primeras entradas, primeras salidas (FIFO), es un método de inventario que supone que el inventario más antiguo se vende o usa primero, tanto para el costeo como muchas veces para el manejo físico.",
        explanation: "PEPS tiene dos significados relacionados. En contabilidad, es una forma de asignar costo: al vender una unidad, le cargas el costo de la unidad más antigua que compraste. En el almacén, es una regla de manejo: enviar primero el inventario más viejo.\n\nUn tostador de café que compra grano verde a distintos precios durante el año puede usar PEPS para que cada bolsa vendida lleve el costo del grano más antiguo en existencia. Su almacén también surte primero las bolsas más viejas para mantener el grano fresco.\n\nPEPS es ampliamente aceptado por las normas contables en Canadá, Estados Unidos y otros países. UEPS, el contrario, se permite en Estados Unidos pero no bajo las NIIF.",
        breaks: [
          { title: "El surtido físico no sigue la regla.", detail: "El personal toma lo que está más cerca, y el inventario viejo caduca al fondo del estante." },
          { title: "Las capas de costo se alteran con registros con fecha atrasada.", detail: "Recepciones o ajustes con fechas pasadas cambian qué capa se usó y modifican los márgenes históricos." },
          { title: "Las devoluciones regresan con el costo equivocado.", detail: "Si un artículo devuelto entra al costo de hoy y no al de su capa original, el valor del inventario se desvía." },
          { title: "Se cree que PEPS y costo promedio son intercambiables.", detail: "Cambiar de método a mitad de año cambia la utilidad reportada y puede requerir aprobación del contador y revelación." }
        ],
        faq: [
          { q: "¿PEPS está permitido en Canadá?", a: "Sí. PEPS y el costo promedio ponderado se aceptan bajo las normas canadienses. UEPS no se permite bajo las NIIF ni bajo las normas para empresas privadas." },
          { q: "¿Qué diferencia hay entre PEPS y PCPS?", a: "PEPS envía primero lo que se recibió antes. PCPS, primero en caducar primero en salir, envía primero lo que vence antes, algo clave en alimentos y medicamentos." }
        ]
      }
    }
  },
  {
    slug: "cost-of-goods-sold",
    category: "operations",
    hub: "/consulting",
    related: ["inventory-valuation", "landed-cost", "fifo", "general-ledger", "month-end-close"],
    copy: {
      en: {
        term: "Cost of goods sold (COGS)",
        definition: "Cost of goods sold, or COGS, is the direct cost of the products a business sold during a period, such as materials, purchase price, freight in and direct labour.",
        explanation: "COGS is what it cost you to provide the things you sold. Subtract it from revenue and you get gross profit, one of the most watched numbers in any product business.\n\nFor a retailer, COGS is mostly what it paid for the goods it sold, plus inbound freight and duties. For a small manufacturer making wooden cabinets, it also includes lumber, hardware and the wages of the people building them. Rent for the head office, sales salaries and marketing are not part of COGS.\n\nBecause COGS depends on inventory costs, any error in receiving, costing method or stock counts flows straight into gross margin.",
        breaks: [
          { title: "Inventory adjustments land in COGS without explanation.", detail: "Count corrections and write-offs pushed into COGS make margins jump from month to month for reasons no one can explain." },
          { title: "Freight and duties are booked elsewhere.", detail: "If inbound costs go to general expenses, COGS is understated and product margins look healthier than they are." },
          { title: "Sales are recorded before cost is known.", detail: "When a sale posts before the supplier bill or landed cost is final, COGS for that period is wrong." },
          { title: "Different teams use different definitions.", detail: "Sales, finance and operations each report a different gross margin because they include different costs." }
        ],
        faq: [
          { q: "How do you calculate COGS?", a: "A common formula is opening inventory plus purchases during the period minus closing inventory. Systems with perpetual inventory record COGS on each sale instead." },
          { q: "Is shipping to customers part of COGS?", a: "Policies vary. Inbound freight is usually in COGS. Outbound shipping is often treated as a selling expense, but some businesses include it; pick one rule and apply it consistently." }
        ]
      },
      fr: {
        term: "Coût des marchandises vendues (CMV)",
        definition: "Le coût des marchandises vendues, ou CMV, est le coût direct des produits qu'une entreprise a vendus pendant une période, comme les matières, le prix d'achat, le transport à l'achat et la main-d'oeuvre directe.",
        explanation: "Le CMV est ce qu'il vous en a coûté pour fournir ce que vous avez vendu. Soustrait des revenus, il donne la marge brute, un des chiffres les plus surveillés dans une entreprise de produits.\n\nPour un détaillant, le CMV est surtout ce qu'il a payé pour les marchandises vendues, plus le transport et les droits à l'achat. Pour un petit fabricant d'armoires en bois, il comprend aussi le bois, la quincaillerie et le salaire des personnes qui les fabriquent. Le loyer du siège social, les salaires des ventes et le marketing n'en font pas partie.\n\nComme le CMV dépend du coût des stocks, toute erreur de réception, de méthode ou de compte se reflète directement dans la marge brute.",
        breaks: [
          { title: "Les ajustements d'inventaire tombent dans le CMV sans explication.", detail: "Des corrections de compte et des radiations passées au CMV font sauter les marges d'un mois à l'autre sans raison claire." },
          { title: "Le transport et les droits sont inscrits ailleurs.", detail: "Si les frais d'achat vont aux dépenses générales, le CMV est sous-évalué et les marges semblent meilleures." },
          { title: "Les ventes sont inscrites avant de connaître le coût.", detail: "Quand une vente est comptabilisée avant la facture du fournisseur ou le coût rendu final, le CMV de la période est faux." },
          { title: "Chaque équipe a sa propre définition.", detail: "Ventes, finance et opérations rapportent chacune une marge brute différente parce qu'elles incluent des coûts différents." }
        ],
        faq: [
          { q: "Comment calcule-t-on le CMV?", a: "Une formule courante est le stock d'ouverture plus les achats de la période moins le stock de clôture. Les systèmes en inventaire permanent inscrivent plutôt le CMV à chaque vente." },
          { q: "L'expédition aux clients fait-elle partie du CMV?", a: "Les politiques varient. Le transport à l'achat est généralement dans le CMV. L'expédition aux clients est souvent traitée comme frais de vente, mais certaines entreprises l'incluent; choisissez une règle et appliquez-la toujours." }
        ]
      },
      es: {
        term: "Costo de ventas (COGS)",
        definition: "El costo de ventas, o COGS, es el costo directo de los productos que una empresa vendió en un periodo, como materiales, precio de compra, flete de entrada y mano de obra directa.",
        explanation: "El costo de ventas es lo que te costó entregar lo que vendiste. Al restarlo de los ingresos obtienes la utilidad bruta, uno de los números más vigilados en cualquier negocio de productos.\n\nPara un minorista, es sobre todo lo que pagó por la mercancía vendida, más el flete y los aranceles de entrada. Para un pequeño fabricante de gabinetes de madera, también incluye la madera, los herrajes y el salario de quienes los fabrican. La renta de la oficina, los sueldos de ventas y el marketing no forman parte.\n\nComo depende del costo del inventario, cualquier error en recepción, método de costeo o conteos pasa directo al margen bruto.",
        breaks: [
          { title: "Los ajustes de inventario caen en el costo de ventas sin explicación.", detail: "Correcciones de conteo y bajas enviadas al costo de ventas hacen saltar los márgenes de un mes a otro sin razón clara." },
          { title: "El flete y los aranceles se registran en otro lado.", detail: "Si los costos de entrada van a gastos generales, el costo de ventas queda bajo y los márgenes parecen mejores." },
          { title: "Las ventas se registran antes de conocer el costo.", detail: "Cuando una venta se registra antes de la factura del proveedor o del costo puesto en destino final, el costo del periodo es incorrecto." },
          { title: "Cada equipo usa su propia definición.", detail: "Ventas, finanzas y operaciones reportan un margen bruto distinto porque incluyen costos distintos." }
        ],
        faq: [
          { q: "¿Cómo se calcula el costo de ventas?", a: "Una fórmula común es inventario inicial más compras del periodo menos inventario final. Los sistemas con inventario perpetuo registran el costo en cada venta." },
          { q: "¿El envío a clientes es parte del costo de ventas?", a: "Las políticas varían. El flete de entrada suele incluirse. El envío a clientes muchas veces se trata como gasto de venta, aunque algunas empresas lo incluyen; elige una regla y aplícala siempre." }
        ]
      }
    }
  },
  {
    slug: "sku",
    category: "operations",
    hub: "/consulting",
    related: ["master-data", "lot-tracking", "duplicate-records", "inventory-valuation", "data-quality"],
    copy: {
      en: {
        term: "SKU (stock keeping unit)",
        definition: "A SKU, or stock keeping unit, is a unique code a business assigns to each distinct product it stocks, down to variations like size, colour or pack size.",
        explanation: "A SKU is your own internal ID for a product. Unlike a barcode such as a UPC, which is shared across all sellers, a SKU is chosen by your business and means something to your team.\n\nA clothing retailer might sell one T-shirt style in four sizes and three colours. That is twelve SKUs, because each combination is stocked, counted and reordered separately. A distributor selling the same screw in a box of 100 and a box of 1,000 needs two SKUs.\n\nClean, consistent SKUs make everything downstream easier: picking, counting, reporting and syncing with online stores or marketplaces.",
        breaks: [
          { title: "The same product has several SKUs.", detail: "Duplicates split stock and sales history, so reorder points and reports are wrong for both records." },
          { title: "SKUs encode details that later change.", detail: "Building the supplier name or price into the code forces a messy renumbering when those details change." },
          { title: "Every channel uses a different code.", detail: "The website, marketplace and ERP each have their own IDs, and someone maintains a mapping spreadsheet by hand." },
          { title: "Old SKUs are reused for new products.", detail: "Recycling a code mixes the history of two different items and confuses returns and warranty claims." }
        ],
        faq: [
          { q: "What is the difference between a SKU and a UPC?", a: "A UPC is a standard barcode number shared by every retailer selling that product. A SKU is an internal code each business creates for its own tracking." },
          { q: "How should I structure SKUs?", a: "Keep them short, unique and stable. Many businesses use a simple pattern for category, style and variant, and avoid spaces, special characters and details that may change." }
        ]
      },
      fr: {
        term: "UGS (unité de gestion des stocks)",
        definition: "Une UGS, ou unité de gestion des stocks (SKU en anglais), est un code unique qu'une entreprise attribue à chaque produit distinct qu'elle stocke, jusqu'aux variantes de taille, de couleur ou de format.",
        explanation: "L'UGS est votre identifiant interne pour un produit. Contrairement à un code-barres comme le CUP, partagé par tous les vendeurs, l'UGS est choisie par votre entreprise et a un sens pour votre équipe.\n\nUn détaillant de vêtements peut vendre un modèle de t-shirt en quatre tailles et trois couleurs. Cela fait douze UGS, parce que chaque combinaison est stockée, comptée et recommandée séparément. Un distributeur qui vend la même vis en boîte de 100 et de 1 000 a besoin de deux UGS.\n\nDes UGS propres et cohérentes facilitent tout le reste : cueillette, comptes, rapports et synchronisation avec les boutiques en ligne.",
        breaks: [
          { title: "Le même produit a plusieurs UGS.", detail: "Les doublons divisent le stock et l'historique des ventes, et les points de commande et rapports sont faux pour les deux." },
          { title: "Les UGS contiennent des détails qui changent.", detail: "Inclure le nom du fournisseur ou le prix dans le code force une renumérotation compliquée quand ces détails changent." },
          { title: "Chaque canal utilise un code différent.", detail: "Le site, la place de marché et l'ERP ont chacun leurs identifiants, et quelqu'un tient une table de correspondance à la main." },
          { title: "D'anciennes UGS sont réutilisées.", detail: "Recycler un code mélange l'historique de deux articles et embrouille les retours et les garanties." }
        ],
        faq: [
          { q: "Quelle différence entre une UGS et un CUP?", a: "Le CUP est un numéro de code-barres standard partagé par tous les détaillants qui vendent ce produit. L'UGS est un code interne que chaque entreprise crée pour son propre suivi." },
          { q: "Comment structurer les UGS?", a: "Gardez-les courtes, uniques et stables. Beaucoup d'entreprises utilisent un modèle simple de catégorie, modèle et variante, sans espaces, caractères spéciaux ni détails qui peuvent changer." }
        ]
      },
      es: {
        term: "SKU (unidad de mantenimiento de inventario)",
        definition: "Un SKU, o unidad de mantenimiento de inventario, es un código único que una empresa asigna a cada producto distinto que maneja, incluidas variantes como talla, color o presentación.",
        explanation: "El SKU es tu identificador interno de un producto. A diferencia de un código de barras como el UPC, que comparten todos los vendedores, el SKU lo elige tu empresa y tiene sentido para tu equipo.\n\nUna tienda de ropa puede vender un modelo de camiseta en cuatro tallas y tres colores. Son doce SKU, porque cada combinación se almacena, cuenta y vuelve a pedir por separado. Un distribuidor que vende el mismo tornillo en caja de 100 y de 1,000 necesita dos SKU.\n\nSKU limpios y consistentes facilitan todo lo demás: surtido, conteos, reportes y sincronización con tiendas en línea.",
        breaks: [
          { title: "El mismo producto tiene varios SKU.", detail: "Los duplicados dividen el inventario y el historial de ventas, y los puntos de reorden y reportes quedan mal para ambos." },
          { title: "Los SKU incluyen datos que luego cambian.", detail: "Poner el nombre del proveedor o el precio en el código obliga a una renumeración complicada cuando esos datos cambian." },
          { title: "Cada canal usa un código distinto.", detail: "El sitio, el marketplace y el ERP tienen sus propios identificadores, y alguien mantiene a mano una tabla de equivalencias." },
          { title: "Se reutilizan SKU viejos para productos nuevos.", detail: "Reciclar un código mezcla el historial de dos artículos y confunde devoluciones y garantías." }
        ],
        faq: [
          { q: "¿Qué diferencia hay entre SKU y UPC?", a: "El UPC es un número de código de barras estándar que comparten todos los minoristas de ese producto. El SKU es un código interno que cada empresa crea para su propio control." },
          { q: "¿Cómo estructurar los SKU?", a: "Que sean cortos, únicos y estables. Muchas empresas usan un patrón simple de categoría, modelo y variante, sin espacios, caracteres especiales ni datos que puedan cambiar." }
        ]
      }
    }
  },
  {
    slug: "bill-of-materials",
    category: "operations",
    hub: "/consulting",
    related: ["mrp", "cost-of-goods-sold", "master-data", "sku", "inventory-valuation"],
    copy: {
      en: {
        term: "Bill of materials (BOM)",
        definition: "A bill of materials, or BOM, is the complete list of components, raw materials and quantities needed to make one unit of a product.",
        explanation: "A BOM is the recipe for a manufactured item. It lists every part, how many of each, and often the order they go together in.\n\nA small manufacturer of outdoor benches might have a BOM listing six slats of cedar, two steel frames, 24 screws and a can of stain per bench. When it plans to build 50 benches, the system multiplies the BOM to see exactly what to buy or pull from stock.\n\nBOMs also drive product cost. Add up each component's cost and you know what a bench should cost to build. Many products have multi-level BOMs, where a sub-assembly has its own BOM inside the larger one.",
        breaks: [
          { title: "The BOM does not match how the product is really built.", detail: "The shop floor uses a different part or quantity, so material planning and product cost are both off." },
          { title: "Engineering changes are not controlled.", detail: "A part is swapped without updating the BOM or dating the change, and old and new versions get mixed." },
          { title: "Scrap and waste are left out.", detail: "If the BOM ignores normal waste, the business runs short of material and underestimates cost." },
          { title: "BOMs live in spreadsheets outside the system.", detail: "Planning in the ERP uses one version while the team builds from another kept on a shared drive." }
        ],
        faq: [
          { q: "What is the difference between a BOM and a recipe?", a: "They are the same idea. Food and chemical businesses often call it a recipe or formula, while discrete manufacturers call it a bill of materials." },
          { q: "What is a multi-level BOM?", a: "A multi-level BOM includes sub-assemblies that have their own component lists. For example, a bench frame is built from its own parts, then used in the finished bench." }
        ]
      },
      fr: {
        term: "Nomenclature",
        definition: "La nomenclature (BOM en anglais) est la liste complète des composants, matières premières et quantités nécessaires pour fabriquer une unité d'un produit.",
        explanation: "La nomenclature est la recette d'un produit fabriqué. Elle énumère chaque pièce, la quantité de chacune et souvent l'ordre d'assemblage.\n\nUn petit fabricant de bancs extérieurs peut avoir une nomenclature indiquant six lattes de cèdre, deux cadres d'acier, 24 vis et un pot de teinture par banc. Pour en fabriquer 50, le système multiplie la nomenclature et montre exactement quoi acheter ou sortir du stock.\n\nLa nomenclature détermine aussi le coût du produit. En additionnant le coût de chaque composant, on sait ce qu'un banc devrait coûter. Beaucoup de produits ont une nomenclature à plusieurs niveaux, où un sous-assemblage a sa propre nomenclature.",
        breaks: [
          { title: "La nomenclature ne reflète pas la fabrication réelle.", detail: "L'atelier utilise une autre pièce ou quantité, donc la planification des matières et le coût sont faux." },
          { title: "Les modifications techniques ne sont pas contrôlées.", detail: "Une pièce est remplacée sans mettre à jour ni dater la nomenclature, et les anciennes et nouvelles versions se mélangent." },
          { title: "Les rebuts et pertes sont oubliés.", detail: "Si la nomenclature ignore les pertes normales, l'entreprise manque de matières et sous-estime le coût." },
          { title: "Les nomenclatures vivent dans des tableurs.", detail: "La planification dans l'ERP utilise une version, alors que l'équipe fabrique avec une autre gardée sur un disque partagé." }
        ],
        faq: [
          { q: "Quelle différence entre une nomenclature et une recette?", a: "C'est la même idée. Les entreprises alimentaires et chimiques parlent de recette ou de formule, les fabricants de pièces parlent de nomenclature." },
          { q: "Qu'est-ce qu'une nomenclature à plusieurs niveaux?", a: "Elle inclut des sous-assemblages qui ont leur propre liste de composants. Par exemple, le cadre du banc est fabriqué avec ses pièces, puis utilisé dans le banc fini." }
        ]
      },
      es: {
        term: "Lista de materiales (BOM)",
        definition: "Una lista de materiales, o BOM, es la lista completa de componentes, materias primas y cantidades necesarias para fabricar una unidad de un producto.",
        explanation: "La lista de materiales es la receta de un producto fabricado. Enumera cada pieza, cuántas de cada una y muchas veces el orden de ensamble.\n\nUn pequeño fabricante de bancas para exterior puede tener una lista con seis tablas de cedro, dos marcos de acero, 24 tornillos y una lata de tinte por banca. Para fabricar 50, el sistema multiplica la lista y muestra exactamente qué comprar o sacar del inventario.\n\nLa lista también define el costo del producto. Al sumar el costo de cada componente sabes cuánto debería costar una banca. Muchos productos tienen listas de varios niveles, donde un subensamble tiene su propia lista.",
        breaks: [
          { title: "La lista no coincide con cómo se fabrica en realidad.", detail: "El taller usa otra pieza o cantidad, así que la planeación de materiales y el costo quedan mal." },
          { title: "Los cambios de ingeniería no se controlan.", detail: "Se cambia una pieza sin actualizar ni fechar la lista, y se mezclan la versión vieja y la nueva." },
          { title: "Se omiten mermas y desperdicio.", detail: "Si la lista ignora la merma normal, falta material y se subestima el costo." },
          { title: "Las listas viven en hojas de cálculo.", detail: "La planeación en el ERP usa una versión mientras el equipo fabrica con otra guardada en una carpeta compartida." }
        ],
        faq: [
          { q: "¿Qué diferencia hay entre lista de materiales y receta?", a: "Es la misma idea. En alimentos y químicos se le llama receta o fórmula; en manufactura de piezas, lista de materiales." },
          { q: "¿Qué es una lista de materiales de varios niveles?", a: "Incluye subensambles con su propia lista de componentes. Por ejemplo, el marco de la banca se arma con sus piezas y luego se usa en la banca terminada." }
        ]
      }
    }
  },
  {
    slug: "lot-tracking",
    category: "operations",
    hub: "/consulting",
    related: ["goods-receipt", "fifo", "rma", "sku", "audit-trail"],
    copy: {
      en: {
        term: "Lot tracking",
        definition: "Lot tracking is the practice of recording which batch, or lot, each unit of inventory came from so it can be traced from supplier to customer.",
        explanation: "A lot is a group of items made or received together, often sharing a production date, expiry date or supplier batch. Lot tracking ties that lot number to every receipt, move and shipment.\n\nIf a supplier tells a natural foods distributor that one batch of almond butter may be contaminated, lot tracking shows exactly which customers received that batch, and which cases are still in the warehouse. The business can pull only the affected product instead of everything with that SKU.\n\nLot tracking is common in food, health products, chemicals and parts manufacturing, where regulations or customers require traceability. It also supports first expired, first out picking.",
        breaks: [
          { title: "Lot numbers are skipped at receiving.", detail: "If the lot is not captured when stock arrives, traceability is broken for everything downstream." },
          { title: "Staff pick from any lot.", detail: "Without scanning, the system records one lot as shipped while a different one actually left the building." },
          { title: "Lots are mixed in the same bin.", detail: "Combining partial cases from different lots makes it impossible to know which units belong to which batch." },
          { title: "Recall searches take days.", detail: "When lot data is spread across paper and spreadsheets, a trace that should take minutes takes much longer." }
        ],
        faq: [
          { q: "What is the difference between lot tracking and serial tracking?", a: "Lot tracking groups many units under one batch number. Serial tracking gives each individual unit its own unique number, which suits higher-value items like equipment." },
          { q: "Is lot tracking required by law?", a: "It depends on the product and country. Food, drugs and medical devices often have traceability rules, such as Canada's Safe Food for Canadians Regulations, so check what applies to your goods." }
        ]
      },
      fr: {
        term: "Traçabilité des lots",
        definition: "La traçabilité des lots consiste à enregistrer de quel lot provient chaque unité en stock, afin de pouvoir la suivre du fournisseur jusqu'au client.",
        explanation: "Un lot est un groupe d'articles fabriqués ou reçus ensemble, qui partagent souvent une date de production, une date d'expiration ou un lot fournisseur. La traçabilité lie ce numéro de lot à chaque réception, déplacement et expédition.\n\nSi un fournisseur avise un distributeur d'aliments naturels qu'un lot de beurre d'amande pourrait être contaminé, la traçabilité montre exactement quels clients l'ont reçu et quelles caisses sont encore à l'entrepôt. L'entreprise retire seulement le produit touché.\n\nLa traçabilité est courante dans l'alimentation, les produits de santé, les produits chimiques et la fabrication de pièces, où la réglementation ou les clients l'exigent.",
        breaks: [
          { title: "Les numéros de lot sont omis à la réception.", detail: "Si le lot n'est pas saisi à l'arrivée du stock, la traçabilité est rompue pour toute la suite." },
          { title: "Le personnel prend dans n'importe quel lot.", detail: "Sans lecture du code, le système inscrit un lot comme expédié alors qu'un autre est vraiment parti." },
          { title: "Les lots sont mélangés dans le même casier.", detail: "Combiner des caisses partielles de lots différents empêche de savoir quelle unité appartient à quel lot." },
          { title: "Les recherches de rappel prennent des jours.", detail: "Quand les données de lot sont éparpillées sur papier et tableurs, une recherche de quelques minutes prend beaucoup plus." }
        ],
        faq: [
          { q: "Quelle différence entre traçabilité des lots et numéros de série?", a: "La traçabilité des lots regroupe plusieurs unités sous un numéro de lot. Le suivi par numéro de série donne à chaque unité son propre numéro, ce qui convient aux articles plus coûteux comme l'équipement." },
          { q: "La traçabilité des lots est-elle obligatoire?", a: "Cela dépend du produit et du pays. Les aliments, médicaments et instruments médicaux ont souvent des règles de traçabilité, comme le Règlement sur la salubrité des aliments au Canada; vérifiez ce qui s'applique." }
        ]
      },
      es: {
        term: "Rastreo de lotes",
        definition: "El rastreo de lotes es la práctica de registrar de qué lote proviene cada unidad de inventario para poder seguirla desde el proveedor hasta el cliente.",
        explanation: "Un lote es un grupo de artículos fabricados o recibidos juntos, que suelen compartir fecha de producción, fecha de caducidad o lote del proveedor. El rastreo liga ese número de lote a cada recepción, movimiento y envío.\n\nSi un proveedor avisa a un distribuidor de alimentos naturales que un lote de crema de almendra podría estar contaminado, el rastreo muestra exactamente qué clientes lo recibieron y qué cajas siguen en el almacén. La empresa retira solo el producto afectado.\n\nEl rastreo de lotes es común en alimentos, productos de salud, químicos y fabricación de piezas, donde la regulación o los clientes exigen trazabilidad.",
        breaks: [
          { title: "No se captura el lote al recibir.", detail: "Si el lote no se registra cuando llega el producto, la trazabilidad se rompe para todo lo que sigue." },
          { title: "El personal surte de cualquier lote.", detail: "Sin escanear, el sistema registra un lote como enviado mientras en realidad salió otro." },
          { title: "Se mezclan lotes en la misma ubicación.", detail: "Juntar cajas parciales de lotes distintos impide saber qué unidad pertenece a qué lote." },
          { title: "Las búsquedas por retiro tardan días.", detail: "Cuando los datos de lote están en papel y hojas de cálculo, una búsqueda de minutos tarda mucho más." }
        ],
        faq: [
          { q: "¿Qué diferencia hay entre rastreo de lotes y de números de serie?", a: "El rastreo de lotes agrupa muchas unidades bajo un número de lote. El de serie da a cada unidad su propio número, ideal para artículos de mayor valor como equipos." },
          { q: "¿El rastreo de lotes es obligatorio?", a: "Depende del producto y el país. Alimentos, medicamentos y dispositivos médicos suelen tener reglas de trazabilidad, así que revisa cuáles aplican a tus productos." }
        ]
      }
    }
  },
  {
    slug: "rma",
    category: "operations",
    hub: "/consulting",
    related: ["lot-tracking", "ticketing-system", "order-to-cash", "approval-workflow", "accounts-receivable"],
    copy: {
      en: {
        term: "Return merchandise authorization (RMA)",
        definition: "A return merchandise authorization, or RMA, is an approval and tracking number a seller issues before a customer sends a product back.",
        explanation: "An RMA turns a return from a surprise box at the dock into a planned event. The customer asks to return an item, the seller checks the reason and the return policy, and if approved, issues an RMA number.\n\nAn electronics distributor might require an RMA for any returned unit. The number goes on the box, so when it arrives, receiving knows who sent it, why, and whether it should be restocked, repaired, sent back to the maker or scrapped. Finance then knows whether to issue a credit, a replacement or nothing.\n\nTracked well, RMAs also show which products, suppliers or customers cause the most returns.",
        breaks: [
          { title: "Returns arrive without an RMA number.", detail: "The warehouse cannot tell who sent the box or why, so it sits in a corner while the customer waits for a credit." },
          { title: "The RMA lives in email, not the system.", detail: "Support, warehouse and finance each keep their own notes, and no one knows the status of a return." },
          { title: "Inspection results are not recorded.", detail: "Without a reason and condition on file, credits are issued for items that should have been rejected." },
          { title: "Credits are delayed after receipt.", detail: "The item is back, but the credit waits on a manual step and the customer calls to ask why." }
        ],
        diagram: ["Customer requests return", "RMA approved", "Item shipped back", "Inspect and decide", "Credit or replace"],
        faq: [
          { q: "Why do companies require an RMA number?", a: "It lets them approve returns before they ship, match each box to a customer and reason when it arrives, and process credits faster." },
          { q: "Is an RMA the same as a refund?", a: "No. The RMA only authorizes the return. The refund, credit or replacement comes after the item is received and inspected." }
        ]
      },
      fr: {
        term: "Autorisation de retour de marchandise (ARM)",
        definition: "L'autorisation de retour de marchandise, ou ARM (RMA en anglais), est une approbation et un numéro de suivi qu'un vendeur émet avant qu'un client renvoie un produit.",
        explanation: "L'ARM transforme un retour, d'une boîte inattendue au quai, en événement planifié. Le client demande à retourner un article, le vendeur vérifie la raison et la politique, puis émet un numéro d'ARM s'il approuve.\n\nUn distributeur d'électronique peut exiger une ARM pour toute unité retournée. Le numéro est inscrit sur la boîte, donc à l'arrivée, la réception sait qui l'envoie, pourquoi, et s'il faut remettre en stock, réparer, renvoyer au fabricant ou jeter. La finance sait alors s'il faut émettre un crédit, un remplacement ou rien.\n\nBien suivies, les ARM montrent aussi quels produits, fournisseurs ou clients causent le plus de retours.",
        breaks: [
          { title: "Les retours arrivent sans numéro d'ARM.", detail: "L'entrepôt ne sait pas qui a envoyé la boîte ni pourquoi, et elle attend dans un coin pendant que le client attend son crédit." },
          { title: "L'ARM vit dans les courriels, pas dans le système.", detail: "Soutien, entrepôt et finance gardent chacun leurs notes, et personne ne connaît l'état du retour." },
          { title: "Les résultats d'inspection ne sont pas inscrits.", detail: "Sans raison et état au dossier, on émet des crédits pour des articles qui auraient dû être refusés." },
          { title: "Les crédits tardent après la réception.", detail: "L'article est revenu, mais le crédit attend une étape manuelle et le client appelle pour savoir pourquoi." }
        ],
        diagram: ["Demande de retour", "ARM approuvée", "Article renvoyé", "Inspecter et décider", "Crédit ou remplacement"],
        faq: [
          { q: "Pourquoi les entreprises exigent-elles un numéro d'ARM?", a: "Pour approuver les retours avant l'envoi, relier chaque boîte à un client et une raison à l'arrivée, et traiter les crédits plus vite." },
          { q: "Une ARM est-elle un remboursement?", a: "Non. L'ARM autorise seulement le retour. Le remboursement, crédit ou remplacement vient après la réception et l'inspection." }
        ]
      },
      es: {
        term: "Autorización de devolución de mercancía (RMA)",
        definition: "Una autorización de devolución de mercancía, o RMA, es una aprobación y número de seguimiento que el vendedor emite antes de que el cliente devuelva un producto.",
        explanation: "La RMA convierte una devolución, de una caja inesperada en el andén, en algo planeado. El cliente pide devolver un artículo, el vendedor revisa el motivo y la política, y si aprueba, emite un número de RMA.\n\nUn distribuidor de electrónica puede exigir RMA para cualquier unidad devuelta. El número va en la caja, así que al llegar, recepción sabe quién la envía, por qué y si debe regresar al inventario, repararse, enviarse al fabricante o desecharse. Finanzas sabe entonces si emitir una nota de crédito, un reemplazo o nada.\n\nBien registradas, las RMA también muestran qué productos, proveedores o clientes generan más devoluciones.",
        breaks: [
          { title: "Las devoluciones llegan sin número de RMA.", detail: "El almacén no sabe quién envió la caja ni por qué, y queda en un rincón mientras el cliente espera su crédito." },
          { title: "La RMA vive en el correo, no en el sistema.", detail: "Soporte, almacén y finanzas llevan sus propias notas, y nadie conoce el estado de la devolución." },
          { title: "No se registran los resultados de inspección.", detail: "Sin motivo y estado en el expediente, se emiten créditos por artículos que debieron rechazarse." },
          { title: "Los créditos se retrasan después de recibir.", detail: "El artículo ya regresó, pero el crédito espera un paso manual y el cliente llama para saber por qué." }
        ],
        diagram: ["Cliente pide devolución", "RMA aprobada", "Artículo enviado", "Inspeccionar y decidir", "Crédito o reemplazo"],
        faq: [
          { q: "¿Por qué las empresas piden un número de RMA?", a: "Para aprobar devoluciones antes del envío, ligar cada caja a un cliente y motivo cuando llega, y procesar créditos más rápido." },
          { q: "¿Una RMA es lo mismo que un reembolso?", a: "No. La RMA solo autoriza la devolución. El reembolso, crédito o reemplazo viene después de recibir e inspeccionar el artículo." }
        ]
      }
    }
  },
  {
    slug: "accounts-payable",
    category: "finance",
    hub: "/erp-crm",
    related: ["three-way-match", "procure-to-pay", "purchase-order", "approval-workflow", "general-ledger"],
    copy: {
      en: {
        term: "Accounts payable",
        definition: "Accounts payable is the money a business owes its suppliers for goods or services received but not yet paid for, and the team or process that manages those bills.",
        explanation: "When a supplier delivers and sends an invoice with 30-day terms, that bill sits in accounts payable until it is paid. On the balance sheet, it is a liability.\n\nThe accounts payable process covers receiving invoices, checking them against orders and receipts, getting approval, scheduling payment and recording it. A mid-size equipment dealer might handle hundreds of supplier invoices a month, some on paper, some by email, some through supplier portals.\n\nGood accounts payable pays the right amount at the right time: not early enough to strain cash, not late enough to damage supplier trust or miss early payment discounts. It is also a common target for fraud, so controls matter.",
        breaks: [
          { title: "Invoices arrive in too many places.", detail: "Bills come to personal inboxes, the front desk and the mail, and some are found only when the supplier calls about late payment." },
          { title: "Approvals stall with busy managers.", detail: "Invoices wait for a signature for weeks, so the business pays late fees or loses discounts." },
          { title: "Duplicate invoices get paid.", detail: "The same bill arrives by email and by mail, gets entered twice, and is paid twice." },
          { title: "Supplier bank details change without verification.", detail: "A fake email asking to update banking information is a common fraud that diverts payments." }
        ],
        faq: [
          { q: "Is accounts payable an asset or a liability?", a: "It is a liability. It represents money the business owes to others in the short term." },
          { q: "What is the difference between accounts payable and accounts receivable?", a: "Accounts payable is what you owe suppliers. Accounts receivable is what customers owe you." }
        ]
      },
      fr: {
        term: "Comptes fournisseurs",
        definition: "Les comptes fournisseurs sont les sommes qu'une entreprise doit à ses fournisseurs pour des biens ou services reçus mais pas encore payés, ainsi que l'équipe ou le processus qui gère ces factures.",
        explanation: "Quand un fournisseur livre et envoie une facture payable à 30 jours, elle reste aux comptes fournisseurs jusqu'au paiement. Au bilan, c'est un passif.\n\nLe processus couvre la réception des factures, leur vérification avec les commandes et les réceptions, l'approbation, la planification du paiement et son inscription. Un concessionnaire d'équipement de taille moyenne peut traiter des centaines de factures par mois, sur papier, par courriel ou par portail fournisseur.\n\nDe bons comptes fournisseurs paient le bon montant au bon moment : pas trop tôt pour ne pas serrer la trésorerie, pas trop tard pour garder la confiance des fournisseurs et les escomptes. C'est aussi une cible fréquente de fraude, d'où l'importance des contrôles.",
        breaks: [
          { title: "Les factures arrivent à trop d'endroits.", detail: "Elles arrivent dans des boîtes personnelles, à l'accueil et par la poste, et certaines ne sont trouvées que lorsque le fournisseur appelle." },
          { title: "Les approbations bloquent chez des gestionnaires occupés.", detail: "Les factures attendent une signature pendant des semaines, et l'entreprise paie des frais de retard ou perd des escomptes." },
          { title: "Des factures en double sont payées.", detail: "La même facture arrive par courriel et par la poste, est saisie deux fois et payée deux fois." },
          { title: "Les coordonnées bancaires changent sans vérification.", detail: "Un faux courriel demandant de mettre à jour les coordonnées est une fraude courante qui détourne les paiements." }
        ],
        faq: [
          { q: "Les comptes fournisseurs sont-ils un actif ou un passif?", a: "Un passif. Ils représentent l'argent que l'entreprise doit à d'autres à court terme." },
          { q: "Quelle différence entre comptes fournisseurs et comptes clients?", a: "Les comptes fournisseurs sont ce que vous devez aux fournisseurs. Les comptes clients sont ce que les clients vous doivent." }
        ]
      },
      es: {
        term: "Cuentas por pagar",
        definition: "Las cuentas por pagar son el dinero que una empresa debe a sus proveedores por bienes o servicios recibidos y aún no pagados, así como el equipo o proceso que gestiona esas facturas.",
        explanation: "Cuando un proveedor entrega y envía una factura a 30 días, esa factura queda en cuentas por pagar hasta que se paga. En el balance, es un pasivo.\n\nEl proceso incluye recibir facturas, revisarlas contra órdenes y recepciones, obtener aprobación, programar el pago y registrarlo. Un distribuidor de equipo mediano puede manejar cientos de facturas al mes, en papel, por correo o por portales de proveedores.\n\nUnas buenas cuentas por pagar pagan el monto correcto en el momento correcto: no tan pronto que aprieten el efectivo, ni tan tarde que dañen la confianza del proveedor o se pierdan descuentos. También son un blanco común de fraude, así que los controles importan.",
        breaks: [
          { title: "Las facturas llegan a demasiados lugares.", detail: "Llegan a correos personales, a recepción y por correo postal, y algunas solo aparecen cuando el proveedor llama por el atraso." },
          { title: "Las aprobaciones se atoran con gerentes ocupados.", detail: "Las facturas esperan firma por semanas, y la empresa paga recargos o pierde descuentos." },
          { title: "Se pagan facturas duplicadas.", detail: "La misma factura llega por correo electrónico y por correo postal, se captura dos veces y se paga dos veces." },
          { title: "Los datos bancarios cambian sin verificación.", detail: "Un correo falso pidiendo actualizar la cuenta bancaria es un fraude común que desvía pagos." }
        ],
        faq: [
          { q: "¿Las cuentas por pagar son un activo o un pasivo?", a: "Son un pasivo. Representan dinero que la empresa debe a otros a corto plazo." },
          { q: "¿Qué diferencia hay entre cuentas por pagar y por cobrar?", a: "Cuentas por pagar es lo que debes a proveedores. Cuentas por cobrar es lo que los clientes te deben." }
        ]
      }
    }
  },
  {
    slug: "accounts-receivable",
    category: "finance",
    hub: "/erp-crm",
    related: ["order-to-cash", "reconciliation", "general-ledger", "revenue-recognition", "crm"],
    copy: {
      en: {
        term: "Accounts receivable",
        definition: "Accounts receivable is the money customers owe a business for goods or services already delivered on credit, and the process of invoicing and collecting it.",
        explanation: "When you ship to a customer and give them 30 days to pay, the amount sits in accounts receivable until the payment arrives. On the balance sheet, it is an asset, but it is not cash yet.\n\nThe process includes sending accurate invoices, applying payments to the right invoices, following up on late accounts and handling disputes. A wholesale bakery supplying cafes might invoice dozens of customers each week and needs to know quickly who is behind.\n\nStrong receivables management shortens the time between making a sale and having the money. An aging report, which groups unpaid invoices by how overdue they are, is the main tool for seeing where to follow up.",
        breaks: [
          { title: "Payments cannot be matched to invoices.", detail: "Customers pay several invoices at once or skip the reference number, so cash sits unapplied and accounts look overdue." },
          { title: "Invoices go out late or with errors.", detail: "A wrong price or missing PO number gives the customer a reason to hold payment." },
          { title: "Follow-up depends on one person's memory.", detail: "Without a regular, documented collection routine, overdue accounts are chased only when someone notices." },
          { title: "Sales and finance do not share account status.", detail: "Sales keeps taking orders from a customer that finance is trying to collect from." }
        ],
        faq: [
          { q: "What is an accounts receivable aging report?", a: "It lists unpaid customer invoices grouped by how long they have been outstanding, for example current, 1 to 30 days, 31 to 60 days and over 60 days." },
          { q: "How can I get paid faster?", a: "Send invoices promptly and accurately, offer easy payment methods, set clear terms up front, and follow a regular reminder routine for overdue accounts." }
        ]
      },
      fr: {
        term: "Comptes clients",
        definition: "Les comptes clients sont les sommes que les clients doivent à une entreprise pour des biens ou services déjà livrés à crédit, ainsi que le processus de facturation et de recouvrement.",
        explanation: "Quand vous livrez à un client et lui donnez 30 jours pour payer, le montant reste aux comptes clients jusqu'au paiement. Au bilan, c'est un actif, mais pas encore de l'argent.\n\nLe processus comprend l'envoi de factures exactes, l'application des paiements aux bonnes factures, le suivi des comptes en retard et le règlement des litiges. Une boulangerie en gros qui approvisionne des cafés peut facturer des dizaines de clients chaque semaine et doit savoir rapidement qui est en retard.\n\nUne bonne gestion raccourcit le délai entre la vente et l'encaissement. Le rapport chronologique, qui classe les factures impayées selon leur retard, est l'outil principal pour savoir qui relancer.",
        breaks: [
          { title: "Les paiements ne peuvent pas être associés aux factures.", detail: "Les clients paient plusieurs factures d'un coup ou oublient la référence, et l'argent reste non appliqué." },
          { title: "Les factures partent en retard ou avec des erreurs.", detail: "Un mauvais prix ou un numéro de commande manquant donne au client une raison de retenir le paiement." },
          { title: "Le suivi dépend de la mémoire d'une personne.", detail: "Sans routine de recouvrement régulière et documentée, les comptes en retard ne sont relancés que par hasard." },
          { title: "Ventes et finance ne partagent pas l'état des comptes.", detail: "Les ventes continuent de prendre des commandes d'un client que la finance essaie de faire payer." }
        ],
        faq: [
          { q: "Qu'est-ce qu'un rapport chronologique des comptes clients?", a: "Il énumère les factures impayées regroupées selon leur âge, par exemple courantes, 1 à 30 jours, 31 à 60 jours et plus de 60 jours." },
          { q: "Comment se faire payer plus vite?", a: "Envoyez des factures rapides et exactes, offrez des modes de paiement simples, fixez des conditions claires dès le départ et suivez une routine régulière de rappels." }
        ]
      },
      es: {
        term: "Cuentas por cobrar",
        definition: "Las cuentas por cobrar son el dinero que los clientes deben a una empresa por bienes o servicios ya entregados a crédito, y el proceso de facturar y cobrar.",
        explanation: "Cuando envías a un cliente y le das 30 días para pagar, el monto queda en cuentas por cobrar hasta que llega el pago. En el balance es un activo, pero todavía no es efectivo.\n\nEl proceso incluye enviar facturas correctas, aplicar los pagos a las facturas correctas, dar seguimiento a cuentas atrasadas y resolver disputas. Una panadería mayorista que surte cafeterías puede facturar a decenas de clientes cada semana y necesita saber rápido quién va atrasado.\n\nUna buena gestión acorta el tiempo entre la venta y el cobro. El reporte de antigüedad de saldos, que agrupa facturas pendientes por días de atraso, es la herramienta principal para saber a quién llamar.",
        breaks: [
          { title: "Los pagos no se pueden ligar a facturas.", detail: "Los clientes pagan varias facturas juntas o no ponen referencia, y el dinero queda sin aplicar." },
          { title: "Las facturas salen tarde o con errores.", detail: "Un precio equivocado o un número de orden faltante da al cliente un motivo para retener el pago." },
          { title: "El seguimiento depende de la memoria de una persona.", detail: "Sin una rutina de cobranza regular y documentada, las cuentas atrasadas solo se cobran cuando alguien lo nota." },
          { title: "Ventas y finanzas no comparten el estado de cuenta.", detail: "Ventas sigue tomando pedidos de un cliente al que finanzas intenta cobrar." }
        ],
        faq: [
          { q: "¿Qué es un reporte de antigüedad de saldos?", a: "Lista las facturas de clientes pendientes agrupadas por tiempo de atraso, por ejemplo al corriente, 1 a 30 días, 31 a 60 días y más de 60 días." },
          { q: "¿Cómo cobrar más rápido?", a: "Envía facturas a tiempo y sin errores, ofrece formas de pago fáciles, fija condiciones claras desde el inicio y sigue una rutina regular de recordatorios." }
        ]
      }
    }
  },
  {
    slug: "month-end-close",
    category: "finance",
    hub: "/erp-crm",
    related: ["reconciliation", "general-ledger", "accrual-accounting", "accounts-payable", "workflow-automation"],
    copy: {
      en: {
        term: "Month-end close",
        definition: "The month-end close is the set of accounting steps a business completes after each month ends to make sure its books are complete and accurate before reporting.",
        explanation: "At the end of each month, finance makes sure every transaction for that month is recorded, checked and in the right place. Then the period is locked so the numbers stop changing.\n\nTypical steps include entering the last bills and invoices, reconciling bank and credit card accounts, recording accruals and depreciation, checking inventory values, reviewing unusual balances and producing financial statements. A mid-size distributor might take a week or two to close; with clean data and automation, it can be much faster.\n\nA reliable close means managers get trustworthy numbers while they are still useful, and year-end becomes easier because each month is already in order.",
        breaks: [
          { title: "Data from other teams arrives late.", detail: "Finance waits on receipts, expense reports and inventory counts, so the close starts days after month end." },
          { title: "Reconciliations are done only at month end.", detail: "Leaving all matching to the last days creates a crunch and hides problems that could have been fixed weeks earlier." },
          { title: "Steps live in one person's head.", detail: "Without a written checklist, the close slows down or misses steps when that person is away." },
          { title: "Closed periods are reopened for corrections.", detail: "Late entries posted to locked months change numbers managers already used to make decisions." }
        ],
        diagram: ["Record final transactions", "Reconcile accounts", "Post adjustments", "Review and approve", "Lock period"],
        faq: [
          { q: "How long should a month-end close take?", a: "It varies with the size and complexity of the business. Many small and mid-size companies aim for a few business days; the right target is one you can hit consistently with accurate results." },
          { q: "What is a close checklist?", a: "A written list of every close task, who owns it and when it is due. It keeps the close consistent and makes it easier to see what is slowing it down." }
        ]
      },
      fr: {
        term: "Clôture mensuelle",
        definition: "La clôture mensuelle est l'ensemble des étapes comptables qu'une entreprise effectue après la fin de chaque mois pour s'assurer que ses livres sont complets et exacts avant de produire ses rapports.",
        explanation: "À la fin de chaque mois, la finance s'assure que chaque transaction du mois est inscrite, vérifiée et au bon endroit. Ensuite, la période est verrouillée pour que les chiffres ne bougent plus.\n\nLes étapes typiques comprennent la saisie des dernières factures, le rapprochement des comptes bancaires et de cartes de crédit, l'inscription des charges à payer et de l'amortissement, la vérification de la valeur des stocks, l'examen des soldes inhabituels et la production des états financiers. Un distributeur de taille moyenne peut prendre une ou deux semaines; avec des données propres et de l'automatisation, ce peut être beaucoup plus rapide.\n\nUne clôture fiable donne aux gestionnaires des chiffres sûrs pendant qu'ils sont encore utiles.",
        breaks: [
          { title: "Les données des autres équipes arrivent en retard.", detail: "La finance attend réceptions, notes de frais et comptes d'inventaire, et la clôture commence des jours après la fin du mois." },
          { title: "Les rapprochements sont faits seulement en fin de mois.", detail: "Tout laisser aux derniers jours crée une course et cache des problèmes qu'on aurait pu régler des semaines plus tôt." },
          { title: "Les étapes sont dans la tête d'une seule personne.", detail: "Sans liste écrite, la clôture ralentit ou oublie des étapes quand cette personne est absente." },
          { title: "Des périodes fermées sont rouvertes pour corriger.", detail: "Des écritures tardives dans des mois verrouillés changent des chiffres déjà utilisés pour décider." }
        ],
        diagram: ["Saisir les dernières opérations", "Rapprocher les comptes", "Passer les ajustements", "Réviser et approuver", "Verrouiller la période"],
        faq: [
          { q: "Combien de temps devrait prendre la clôture mensuelle?", a: "Cela varie selon la taille et la complexité de l'entreprise. Beaucoup de PME visent quelques jours ouvrables; la bonne cible est celle que vous atteignez régulièrement avec des résultats exacts." },
          { q: "Qu'est-ce qu'une liste de clôture?", a: "Une liste écrite de chaque tâche de clôture, son responsable et son échéance. Elle rend la clôture constante et montre ce qui la ralentit." }
        ]
      },
      es: {
        term: "Cierre de mes",
        definition: "El cierre de mes es el conjunto de pasos contables que una empresa completa al terminar cada mes para asegurar que sus libros estén completos y correctos antes de reportar.",
        explanation: "Al final de cada mes, finanzas se asegura de que cada transacción del mes esté registrada, revisada y en el lugar correcto. Luego el periodo se bloquea para que los números dejen de cambiar.\n\nLos pasos típicos incluyen registrar las últimas facturas, conciliar cuentas bancarias y tarjetas, registrar provisiones y depreciación, revisar el valor del inventario, analizar saldos inusuales y preparar estados financieros. Un distribuidor mediano puede tardar una o dos semanas; con datos limpios y automatización, puede ser mucho más rápido.\n\nUn cierre confiable da a los gerentes números seguros mientras todavía sirven, y facilita el cierre anual porque cada mes ya está en orden.",
        breaks: [
          { title: "Los datos de otros equipos llegan tarde.", detail: "Finanzas espera recepciones, reportes de gastos y conteos de inventario, y el cierre empieza días después de fin de mes." },
          { title: "Las conciliaciones se hacen solo a fin de mes.", detail: "Dejar todo para los últimos días crea presión y oculta problemas que se pudieron resolver semanas antes." },
          { title: "Los pasos están en la cabeza de una persona.", detail: "Sin una lista escrita, el cierre se retrasa u omite pasos cuando esa persona falta." },
          { title: "Se reabren periodos cerrados para corregir.", detail: "Registros tardíos en meses bloqueados cambian números que los gerentes ya usaron para decidir." }
        ],
        diagram: ["Registrar últimas operaciones", "Conciliar cuentas", "Registrar ajustes", "Revisar y aprobar", "Bloquear periodo"],
        faq: [
          { q: "¿Cuánto debe tardar el cierre de mes?", a: "Varía según el tamaño y la complejidad de la empresa. Muchas pymes buscan unos cuantos días hábiles; la meta correcta es la que puedes cumplir siempre con resultados exactos." },
          { q: "¿Qué es una lista de cierre?", a: "Una lista escrita de cada tarea del cierre, su responsable y su fecha. Mantiene el cierre constante y muestra qué lo retrasa." }
        ]
      }
    }
  },
  {
    slug: "general-ledger",
    category: "finance",
    hub: "/erp-crm",
    related: ["chart-of-accounts", "month-end-close", "reconciliation", "system-of-record", "audit-trail"],
    copy: {
      en: {
        term: "General ledger",
        definition: "The general ledger is the master record of every financial transaction a business makes, organized by account, from which its financial statements are built.",
        explanation: "Every sale, purchase, payment and adjustment eventually lands in the general ledger, often called the GL. Each entry has at least two sides, a debit and a credit, that must balance.\n\nThe GL is organized by the accounts in your chart of accounts: cash, inventory, accounts payable, sales, rent and so on. Subledgers such as accounts payable, accounts receivable and inventory hold the details, then post summaries to the GL.\n\nFor a small manufacturer, the GL is where the balance sheet and income statement come from. If the details in the subledgers do not agree with the GL, the reports cannot be trusted until someone finds the gap.",
        breaks: [
          { title: "Manual journal entries bypass the subledgers.", detail: "Posting directly to inventory or payables in the GL makes it stop agreeing with the detail reports." },
          { title: "Entries lack descriptions or support.", detail: "A year later, no one can explain why a large adjustment was made, which slows audits and reviews." },
          { title: "Too many people can post to the GL.", detail: "Broad access makes errors more likely and weakens separation of duties." },
          { title: "Integrations post duplicates or partial batches.", detail: "A failed sync from a sales or payroll system can leave the ledger half updated without anyone noticing." }
        ],
        faq: [
          { q: "What is the difference between the general ledger and a subledger?", a: "A subledger holds detailed transactions for one area, like each customer invoice in accounts receivable. The general ledger holds the summarized totals for all areas." },
          { q: "What is a trial balance?", a: "A trial balance lists every general ledger account with its balance at a point in time. Total debits should equal total credits." }
        ]
      },
      fr: {
        term: "Grand livre",
        definition: "Le grand livre est le registre principal de toutes les transactions financières d'une entreprise, organisé par compte, à partir duquel sont produits les états financiers.",
        explanation: "Chaque vente, achat, paiement et ajustement finit par aboutir au grand livre. Chaque écriture a au moins deux côtés, un débit et un crédit, qui doivent s'équilibrer.\n\nLe grand livre est organisé selon les comptes de votre plan comptable : encaisse, stocks, comptes fournisseurs, ventes, loyer, etc. Les grands livres auxiliaires, comme les comptes fournisseurs, les comptes clients et les stocks, contiennent les détails et transmettent des sommaires au grand livre.\n\nPour un petit fabricant, c'est du grand livre que viennent le bilan et l'état des résultats. Si les auxiliaires ne concordent pas avec le grand livre, on ne peut se fier aux rapports avant d'avoir trouvé l'écart.",
        breaks: [
          { title: "Des écritures manuelles contournent les auxiliaires.", detail: "Inscrire directement dans les comptes de stocks ou fournisseurs du grand livre fait qu'il ne concorde plus avec les rapports détaillés." },
          { title: "Les écritures n'ont ni description ni pièce.", detail: "Un an plus tard, personne ne peut expliquer un gros ajustement, ce qui ralentit les audits." },
          { title: "Trop de personnes peuvent inscrire au grand livre.", detail: "Un accès large rend les erreurs plus probables et affaiblit la séparation des tâches." },
          { title: "Les intégrations créent des doublons ou des lots partiels.", detail: "Une synchronisation ratée avec un système de ventes ou de paie peut laisser le grand livre à moitié à jour." }
        ],
        faq: [
          { q: "Quelle différence entre le grand livre et un grand livre auxiliaire?", a: "L'auxiliaire contient les transactions détaillées d'un secteur, comme chaque facture client. Le grand livre contient les totaux résumés de tous les secteurs." },
          { q: "Qu'est-ce qu'une balance de vérification?", a: "C'est la liste de chaque compte du grand livre avec son solde à une date donnée. Le total des débits doit égaler celui des crédits." }
        ]
      },
      es: {
        term: "Libro mayor",
        definition: "El libro mayor es el registro principal de todas las transacciones financieras de una empresa, organizado por cuenta, con el que se preparan los estados financieros.",
        explanation: "Cada venta, compra, pago y ajuste termina en el libro mayor. Cada asiento tiene al menos dos lados, un cargo y un abono, que deben cuadrar.\n\nEl libro mayor se organiza según las cuentas de tu catálogo de cuentas: caja, inventario, cuentas por pagar, ventas, renta y demás. Los libros auxiliares, como cuentas por pagar, cuentas por cobrar e inventario, guardan el detalle y envían resúmenes al mayor.\n\nPara un pequeño fabricante, del libro mayor salen el balance general y el estado de resultados. Si los auxiliares no coinciden con el mayor, los reportes no son confiables hasta encontrar la diferencia.",
        breaks: [
          { title: "Asientos manuales se saltan los auxiliares.", detail: "Registrar directo en inventario o cuentas por pagar del mayor hace que deje de coincidir con los reportes de detalle." },
          { title: "Los asientos no tienen descripción ni soporte.", detail: "Un año después nadie puede explicar un ajuste grande, lo que retrasa auditorías y revisiones." },
          { title: "Demasiadas personas pueden registrar en el mayor.", detail: "Un acceso amplio hace más probables los errores y debilita la segregación de funciones." },
          { title: "Las integraciones crean duplicados o lotes parciales.", detail: "Una sincronización fallida con un sistema de ventas o nómina puede dejar el mayor a medias sin que nadie lo note." }
        ],
        faq: [
          { q: "¿Qué diferencia hay entre el libro mayor y un auxiliar?", a: "El auxiliar guarda las transacciones detalladas de un área, como cada factura de cliente. El mayor guarda los totales resumidos de todas las áreas." },
          { q: "¿Qué es una balanza de comprobación?", a: "Es la lista de cada cuenta del libro mayor con su saldo a una fecha. El total de cargos debe ser igual al de abonos." }
        ]
      }
    }
  },
  {
    slug: "chart-of-accounts",
    category: "finance",
    hub: "/erp-crm",
    related: ["general-ledger", "master-data", "erp-implementation", "data-migration", "business-intelligence"],
    copy: {
      en: {
        term: "Chart of accounts",
        definition: "A chart of accounts is the organized list of every account a business uses to record transactions in its general ledger, grouped into assets, liabilities, equity, revenue and expenses.",
        explanation: "The chart of accounts is the filing system for your money. Each account has a number and a name, such as 1000 Cash or 5000 Cost of goods sold, and every transaction is posted to one or more of them.\n\nA well designed chart gives managers the detail they need without becoming cluttered. A regional retailer might track revenue by store using a location field rather than creating separate sales accounts for every store.\n\nChanging the chart later is possible but painful, because history, reports and integrations all depend on it. That is why it is one of the first things to get right when moving to a new accounting system or ERP.",
        breaks: [
          { title: "Accounts are added for every new question.", detail: "Over the years the list grows to hundreds of accounts, many barely used, and people post to the wrong one." },
          { title: "Accounts are used for detail that belongs in dimensions.", detail: "Making a separate account per department or location creates bloat that tags or segments would handle better." },
          { title: "No one owns the chart.", detail: "Anyone can create accounts, so near duplicates appear and reports stop adding up the same way." },
          { title: "The chart is copied unchanged into a new system.", detail: "Moving years of clutter into a new ERP carries old problems forward instead of fixing them." }
        ],
        faq: [
          { q: "How many accounts should a chart of accounts have?", a: "There is no fixed number. Use enough accounts to produce the reports you need, and use departments, locations or classes for extra detail rather than more accounts." },
          { q: "What are the main account types?", a: "Assets, liabilities, equity, revenue and expenses. Many charts also separate cost of goods sold from operating expenses." }
        ]
      },
      fr: {
        term: "Plan comptable",
        definition: "Le plan comptable est la liste organisée de tous les comptes qu'une entreprise utilise pour inscrire ses transactions au grand livre, regroupés en actifs, passifs, capitaux propres, produits et charges.",
        explanation: "Le plan comptable est le système de classement de votre argent. Chaque compte a un numéro et un nom, comme 1000 Encaisse ou 5000 Coût des marchandises vendues, et chaque transaction est inscrite dans un ou plusieurs d'entre eux.\n\nUn plan bien conçu donne aux gestionnaires le détail voulu sans devenir encombré. Un détaillant régional peut suivre les ventes par magasin avec un champ d'emplacement plutôt que de créer un compte de ventes par magasin.\n\nModifier le plan plus tard est possible mais pénible, car l'historique, les rapports et les intégrations en dépendent. C'est pourquoi il faut le réussir dès le début d'un passage à un nouveau logiciel comptable ou ERP.",
        breaks: [
          { title: "On ajoute un compte pour chaque nouvelle question.", detail: "Avec les années, la liste atteint des centaines de comptes peu utilisés, et les gens inscrivent au mauvais." },
          { title: "Les comptes servent à du détail qui relève des dimensions.", detail: "Créer un compte par service ou emplacement alourdit le plan alors que des étiquettes ou segments feraient mieux." },
          { title: "Personne n'est responsable du plan.", detail: "N'importe qui peut créer des comptes, des quasi-doublons apparaissent et les rapports ne s'additionnent plus pareil." },
          { title: "Le plan est copié tel quel dans un nouveau système.", detail: "Transférer des années de désordre dans un nouvel ERP reporte les vieux problèmes au lieu de les régler." }
        ],
        faq: [
          { q: "Combien de comptes un plan comptable devrait-il avoir?", a: "Il n'y a pas de nombre fixe. Utilisez assez de comptes pour produire les rapports voulus, et servez-vous des services, emplacements ou catégories pour le détail supplémentaire." },
          { q: "Quels sont les principaux types de comptes?", a: "Actifs, passifs, capitaux propres, produits et charges. Beaucoup de plans séparent aussi le coût des marchandises vendues des frais d'exploitation." }
        ]
      },
      es: {
        term: "Catálogo de cuentas",
        definition: "El catálogo de cuentas es la lista organizada de todas las cuentas que una empresa usa para registrar transacciones en su libro mayor, agrupadas en activos, pasivos, capital, ingresos y gastos.",
        explanation: "El catálogo de cuentas es el sistema de archivo de tu dinero. Cada cuenta tiene un número y un nombre, como 1000 Caja o 5000 Costo de ventas, y cada transacción se registra en una o varias de ellas.\n\nUn catálogo bien diseñado da a los gerentes el detalle que necesitan sin volverse un desorden. Una cadena regional puede seguir las ventas por tienda con un campo de ubicación en lugar de crear una cuenta de ventas por tienda.\n\nCambiar el catálogo después es posible pero difícil, porque el historial, los reportes y las integraciones dependen de él. Por eso es de lo primero que hay que definir bien al pasar a un nuevo sistema contable o ERP.",
        breaks: [
          { title: "Se agrega una cuenta para cada nueva pregunta.", detail: "Con los años la lista llega a cientos de cuentas poco usadas, y la gente registra en la equivocada." },
          { title: "Se usan cuentas para detalle que va en dimensiones.", detail: "Crear una cuenta por departamento o ubicación infla el catálogo cuando etiquetas o segmentos lo harían mejor." },
          { title: "Nadie es responsable del catálogo.", detail: "Cualquiera puede crear cuentas, aparecen casi duplicados y los reportes dejan de sumar igual." },
          { title: "El catálogo se copia tal cual a un sistema nuevo.", detail: "Pasar años de desorden a un ERP nuevo arrastra los problemas viejos en lugar de resolverlos." }
        ],
        faq: [
          { q: "¿Cuántas cuentas debe tener un catálogo?", a: "No hay número fijo. Usa suficientes cuentas para los reportes que necesitas, y usa departamentos, ubicaciones o clases para el detalle adicional." },
          { q: "¿Cuáles son los tipos principales de cuentas?", a: "Activos, pasivos, capital, ingresos y gastos. Muchos catálogos también separan el costo de ventas de los gastos de operación." }
        ]
      }
    }
  },
  {
    slug: "accrual-accounting",
    category: "finance",
    hub: "/erp-crm",
    related: ["revenue-recognition", "month-end-close", "general-ledger", "accounts-payable", "accounts-receivable"],
    copy: {
      en: {
        term: "Accrual accounting",
        definition: "Accrual accounting records revenue when it is earned and expenses when they are incurred, regardless of when cash actually changes hands.",
        explanation: "Under cash accounting, you record a sale when the money arrives and a bill when you pay it. Under accrual accounting, you record them when the work is done or the goods are delivered.\n\nSay a commercial cleaning company finishes a month of work for a client in March but is paid in April. Accrual accounting counts that revenue in March, when it was earned. Likewise, the March electricity bill counts as a March expense even if it is paid in April.\n\nThis gives a truer picture of profit for each period. Most incorporated businesses beyond the very smallest use it, and accounting standards like IFRS and US GAAP require it.",
        breaks: [
          { title: "Accruals are estimated and never reversed.", detail: "An expense booked at month end and then booked again when the real bill arrives doubles the cost." },
          { title: "Cash and profit are confused.", detail: "Managers see a profitable month and are surprised the bank balance is low, because customers have not paid yet." },
          { title: "Unbilled work is not tracked.", detail: "Service businesses that finish work before invoicing understate revenue unless they record it as earned." },
          { title: "Prepaid expenses are booked all at once.", detail: "A full year of insurance hits one month instead of being spread across the twelve months it covers." }
        ],
        faq: [
          { q: "What is the difference between cash and accrual accounting?", a: "Cash accounting records transactions when money moves. Accrual accounting records them when they are earned or incurred, even if payment comes later." },
          { q: "Do small businesses have to use accrual accounting?", a: "It depends on your country, structure and size. In Canada, most businesses must use accrual for tax purposes, with some exceptions such as farming and fishing. Ask your accountant what applies to you." }
        ]
      },
      fr: {
        term: "Comptabilité d'exercice",
        definition: "La comptabilité d'exercice inscrit les produits quand ils sont gagnés et les charges quand elles sont engagées, peu importe le moment où l'argent change de mains.",
        explanation: "En comptabilité de caisse, vous inscrivez une vente quand l'argent arrive et une facture quand vous la payez. En comptabilité d'exercice, vous les inscrivez quand le travail est fait ou les biens livrés.\n\nDisons qu'une entreprise d'entretien commercial termine un mois de travail pour un client en mars, mais est payée en avril. La comptabilité d'exercice compte ce revenu en mars, quand il a été gagné. De même, la facture d'électricité de mars est une charge de mars, même si elle est payée en avril.\n\nCela donne une image plus juste du profit de chaque période. La plupart des sociétés, sauf les très petites, l'utilisent, et les normes comme les IFRS et les PCGR américains l'exigent.",
        breaks: [
          { title: "Les régularisations sont estimées et jamais contrepassées.", detail: "Une charge inscrite en fin de mois puis inscrite de nouveau à l'arrivée de la vraie facture double le coût." },
          { title: "On confond trésorerie et profit.", detail: "Les gestionnaires voient un mois rentable et s'étonnent du faible solde bancaire, parce que les clients n'ont pas encore payé." },
          { title: "Le travail non facturé n'est pas suivi.", detail: "Les entreprises de services qui terminent avant de facturer sous-évaluent leurs revenus si elles ne les inscrivent pas comme gagnés." },
          { title: "Les charges payées d'avance sont inscrites d'un coup.", detail: "Une année d'assurance frappe un seul mois au lieu d'être répartie sur les douze mois couverts." }
        ],
        faq: [
          { q: "Quelle différence entre comptabilité de caisse et d'exercice?", a: "La comptabilité de caisse inscrit les opérations quand l'argent bouge. La comptabilité d'exercice les inscrit quand elles sont gagnées ou engagées, même si le paiement vient plus tard." },
          { q: "Les petites entreprises doivent-elles utiliser la comptabilité d'exercice?", a: "Cela dépend du pays, de la structure et de la taille. Au Canada, la plupart des entreprises doivent l'utiliser à des fins fiscales, avec quelques exceptions comme l'agriculture et la pêche. Demandez à votre comptable." }
        ]
      },
      es: {
        term: "Contabilidad de devengo",
        definition: "La contabilidad de devengo registra los ingresos cuando se ganan y los gastos cuando se incurren, sin importar cuándo se mueve el dinero.",
        explanation: "En la contabilidad de caja, registras una venta cuando llega el dinero y una factura cuando la pagas. En la contabilidad de devengo, las registras cuando se hace el trabajo o se entregan los bienes.\n\nDigamos que una empresa de limpieza comercial termina un mes de trabajo para un cliente en marzo, pero le pagan en abril. El devengo cuenta ese ingreso en marzo, cuando se ganó. Igual, la factura de luz de marzo es gasto de marzo aunque se pague en abril.\n\nEsto da una imagen más fiel de la utilidad de cada periodo. La mayoría de las empresas constituidas, salvo las muy pequeñas, la usan, y normas como las NIIF y los US GAAP la exigen.",
        breaks: [
          { title: "Las provisiones se estiman y nunca se revierten.", detail: "Un gasto registrado a fin de mes y registrado otra vez cuando llega la factura real duplica el costo." },
          { title: "Se confunden efectivo y utilidad.", detail: "Los gerentes ven un mes rentable y se sorprenden de que el banco tenga poco, porque los clientes aún no pagan." },
          { title: "No se registra el trabajo sin facturar.", detail: "Las empresas de servicios que terminan antes de facturar subestiman ingresos si no los registran como devengados." },
          { title: "Los gastos prepagados se registran de golpe.", detail: "Un año de seguro cae en un solo mes en lugar de repartirse en los doce meses que cubre." }
        ],
        faq: [
          { q: "¿Qué diferencia hay entre contabilidad de caja y de devengo?", a: "La de caja registra cuando se mueve el dinero. La de devengo registra cuando se gana o se incurre, aunque el pago llegue después." },
          { q: "¿Las pequeñas empresas deben usar contabilidad de devengo?", a: "Depende del país, la estructura y el tamaño. Consulta a tu contador qué aplica en tu caso." }
        ]
      }
    }
  },
  {
    slug: "reconciliation",
    category: "finance",
    hub: "/erp-crm",
    related: ["month-end-close", "general-ledger", "accounts-receivable", "three-way-match", "data-quality"],
    copy: {
      en: {
        term: "Reconciliation",
        definition: "A reconciliation compares two sets of records that should agree, such as the bank statement and the cash account, and explains or fixes every difference.",
        explanation: "The most familiar example is a bank reconciliation: you line up each transaction in your books with the bank statement and account for anything that does not match, like a cheque that has not cleared or a fee you forgot to record.\n\nBusinesses reconcile much more than bank accounts. A distributor might reconcile its accounts receivable subledger to the general ledger, its credit card statements to expense entries, and payments from an online store to the deposits that hit the bank.\n\nThe goal is confidence. Once an account is reconciled, you know its balance is real, and any errors or fraud are caught while they are still easy to trace.",
        breaks: [
          { title: "Unexplained differences are plugged.", detail: "Booking a small balancing entry to make the numbers agree hides the real error, which then grows." },
          { title: "Reconciliations fall months behind.", detail: "The older a difference is, the harder it is to find the transaction and the person who knows what happened." },
          { title: "Payment processor deposits are netted.", detail: "Online payment platforms deposit sales minus fees and refunds, so deposits never match individual invoices without a breakdown." },
          { title: "No one reviews the reconciliation.", detail: "A reconciliation prepared but never checked by a second person is a weak control against errors and fraud." }
        ],
        diagram: ["Pull both records", "Match transactions", "List differences", "Investigate and fix", "Sign off"],
        faq: [
          { q: "How often should I reconcile my bank account?", a: "At least monthly as part of the month-end close. Busy accounts benefit from weekly or even daily matching so issues are found sooner." },
          { q: "What is a reconciling item?", a: "A difference with a known, valid reason, like a deposit in transit or an outstanding cheque. It should clear in the next period." }
        ]
      },
      fr: {
        term: "Rapprochement",
        definition: "Un rapprochement compare deux ensembles de registres qui devraient concorder, comme le relevé bancaire et le compte d'encaisse, et explique ou corrige chaque écart.",
        explanation: "L'exemple le plus connu est le rapprochement bancaire : vous alignez chaque opération de vos livres avec le relevé de la banque et expliquez ce qui ne concorde pas, comme un chèque pas encore encaissé ou des frais oubliés.\n\nLes entreprises rapprochent bien plus que les comptes bancaires. Un distributeur peut rapprocher son auxiliaire des comptes clients avec le grand livre, ses relevés de cartes de crédit avec les dépenses inscrites, et les paiements de sa boutique en ligne avec les dépôts reçus à la banque.\n\nLe but est la confiance. Une fois un compte rapproché, vous savez que son solde est réel, et les erreurs ou fraudes sont repérées pendant qu'elles sont encore faciles à retracer.",
        breaks: [
          { title: "Les écarts inexpliqués sont comblés de force.", detail: "Inscrire une petite écriture d'équilibre pour faire concorder les chiffres cache la vraie erreur, qui grossit ensuite." },
          { title: "Les rapprochements accusent des mois de retard.", detail: "Plus un écart est vieux, plus il est difficile de trouver l'opération et la personne qui sait ce qui s'est passé." },
          { title: "Les dépôts des processeurs de paiement sont nets.", detail: "Les plateformes déposent les ventes moins les frais et remboursements, donc les dépôts ne concordent jamais avec les factures sans détail." },
          { title: "Personne ne révise le rapprochement.", detail: "Un rapprochement préparé mais jamais vérifié par une deuxième personne est un faible contrôle contre les erreurs et la fraude." }
        ],
        diagram: ["Extraire les deux registres", "Associer les opérations", "Lister les écarts", "Analyser et corriger", "Approuver"],
        faq: [
          { q: "À quelle fréquence rapprocher mon compte bancaire?", a: "Au moins chaque mois dans le cadre de la clôture. Les comptes très actifs gagnent à être rapprochés chaque semaine, voire chaque jour." },
          { q: "Qu'est-ce qu'un élément de rapprochement?", a: "Un écart dont la raison est connue et valide, comme un dépôt en transit ou un chèque en circulation. Il devrait se régler à la période suivante." }
        ]
      },
      es: {
        term: "Conciliación",
        definition: "Una conciliación compara dos conjuntos de registros que deberían coincidir, como el estado de cuenta bancario y la cuenta de bancos, y explica o corrige cada diferencia.",
        explanation: "El ejemplo más conocido es la conciliación bancaria: alineas cada movimiento de tus libros con el estado de cuenta y explicas lo que no coincide, como un cheque aún no cobrado o una comisión que olvidaste registrar.\n\nLas empresas concilian mucho más que cuentas bancarias. Un distribuidor puede conciliar su auxiliar de cuentas por cobrar con el libro mayor, sus estados de tarjeta con los gastos registrados, y los pagos de su tienda en línea con los depósitos que llegan al banco.\n\nLa meta es la confianza. Una vez conciliada una cuenta, sabes que su saldo es real, y los errores o fraudes se detectan cuando todavía son fáciles de rastrear.",
        breaks: [
          { title: "Las diferencias sin explicar se tapan.", detail: "Registrar un pequeño asiento para que cuadren los números oculta el error real, que luego crece." },
          { title: "Las conciliaciones se atrasan meses.", detail: "Mientras más vieja es una diferencia, más difícil es encontrar el movimiento y a quien sabe qué pasó." },
          { title: "Los depósitos de procesadores de pago llegan netos.", detail: "Las plataformas depositan ventas menos comisiones y reembolsos, así que los depósitos nunca coinciden con facturas sin un desglose." },
          { title: "Nadie revisa la conciliación.", detail: "Una conciliación preparada pero nunca revisada por otra persona es un control débil contra errores y fraude." }
        ],
        diagram: ["Obtener ambos registros", "Ligar movimientos", "Listar diferencias", "Investigar y corregir", "Aprobar"],
        faq: [
          { q: "¿Cada cuánto debo conciliar mi cuenta bancaria?", a: "Al menos cada mes como parte del cierre. Las cuentas con mucho movimiento se benefician de conciliarse cada semana o incluso a diario." },
          { q: "¿Qué es una partida en conciliación?", a: "Una diferencia con una razón conocida y válida, como un depósito en tránsito o un cheque pendiente de cobro. Debe resolverse el periodo siguiente." }
        ]
      }
    }
  },
  {
    slug: "revenue-recognition",
    category: "finance",
    hub: "/erp-crm",
    related: ["accrual-accounting", "accounts-receivable", "month-end-close", "order-to-cash", "general-ledger"],
    copy: {
      en: {
        term: "Revenue recognition",
        definition: "Revenue recognition is the set of accounting rules that decide when and how much revenue a business records, based on when it delivers what it promised to the customer.",
        explanation: "Getting paid and earning revenue are not always the same moment. If a customer pays upfront for a year of service, the business has the cash today but earns the revenue month by month as it delivers.\n\nThe main standards, IFRS 15 internationally and ASC 606 in the US, use a five-step model: identify the contract, identify what was promised, set the price, split the price across the promises, and record revenue as each promise is fulfilled.\n\nA small equipment supplier that sells a machine with installation and a two-year service plan may need to split one invoice into three parts, each recognized at a different time.",
        breaks: [
          { title: "Revenue is booked when invoiced instead of when earned.", detail: "Invoicing a full year of support upfront and calling it all revenue overstates the current month and understates the rest." },
          { title: "Bundles are not split.", detail: "When a sale includes products, setup and support, treating it as one item puts revenue in the wrong periods." },
          { title: "Contract changes are not tracked.", detail: "Upgrades, cancellations and discounts mid-contract change how revenue should be spread, but the schedule is never updated." },
          { title: "Schedules live in spreadsheets.", detail: "Deferred revenue tracked by hand outside the accounting system is easy to break and hard to audit." }
        ],
        faq: [
          { q: "What is deferred revenue?", a: "Deferred revenue is money received for goods or services not yet delivered. It sits as a liability until the business earns it." },
          { q: "Does revenue recognition apply to small businesses?", a: "The principles apply to anyone using accrual accounting. Private companies in Canada may follow ASPE, which has simpler revenue rules than IFRS 15, so ask your accountant which framework you use." }
        ]
      },
      fr: {
        term: "Constatation des produits",
        definition: "La constatation des produits est l'ensemble des règles comptables qui déterminent quand et combien de revenus une entreprise inscrit, selon le moment où elle livre ce qu'elle a promis au client.",
        explanation: "Être payé et gagner un revenu ne se produisent pas toujours au même moment. Si un client paie d'avance un an de service, l'entreprise a l'argent aujourd'hui mais gagne le revenu mois par mois, au fil de la prestation.\n\nLes principales normes, IFRS 15 à l'international et ASC 606 aux États-Unis, utilisent un modèle en cinq étapes : identifier le contrat, identifier ce qui est promis, fixer le prix, répartir le prix entre les promesses et constater le revenu à mesure que chaque promesse est remplie.\n\nUn petit fournisseur qui vend une machine avec installation et un plan d'entretien de deux ans peut devoir diviser une facture en trois parties, constatées à des moments différents.",
        breaks: [
          { title: "Le revenu est inscrit à la facturation plutôt qu'au moment où il est gagné.", detail: "Facturer un an de soutien d'avance et tout compter comme revenu gonfle le mois courant et réduit les suivants." },
          { title: "Les ensembles ne sont pas divisés.", detail: "Quand une vente comprend produit, installation et soutien, la traiter comme un seul élément place le revenu dans les mauvaises périodes." },
          { title: "Les modifications de contrat ne sont pas suivies.", detail: "Les mises à niveau, annulations et rabais en cours de contrat changent la répartition, mais le calendrier n'est jamais mis à jour." },
          { title: "Les calendriers vivent dans des tableurs.", detail: "Les produits reportés suivis à la main hors du système comptable sont fragiles et difficiles à auditer." }
        ],
        faq: [
          { q: "Que sont les produits reportés?", a: "C'est l'argent reçu pour des biens ou services pas encore livrés. Ils restent au passif jusqu'à ce que l'entreprise les gagne." },
          { q: "La constatation des produits s'applique-t-elle aux petites entreprises?", a: "Les principes s'appliquent à toute entreprise en comptabilité d'exercice. Les sociétés fermées au Canada peuvent suivre les NCECF, dont les règles sont plus simples qu'IFRS 15; demandez à votre comptable." }
        ]
      },
      es: {
        term: "Reconocimiento de ingresos",
        definition: "El reconocimiento de ingresos es el conjunto de reglas contables que deciden cuándo y cuánto ingreso registra una empresa, según cuándo entrega lo que prometió al cliente.",
        explanation: "Cobrar y ganar un ingreso no siempre pasan al mismo tiempo. Si un cliente paga por adelantado un año de servicio, la empresa tiene el dinero hoy pero gana el ingreso mes a mes, conforme lo presta.\n\nLas principales normas, NIIF 15 a nivel internacional y ASC 606 en Estados Unidos, usan un modelo de cinco pasos: identificar el contrato, identificar lo prometido, fijar el precio, repartir el precio entre las promesas y reconocer el ingreso al cumplir cada una.\n\nUn pequeño proveedor que vende una máquina con instalación y un plan de servicio de dos años puede tener que dividir una factura en tres partes, cada una reconocida en un momento distinto.",
        breaks: [
          { title: "El ingreso se registra al facturar y no al ganarse.", detail: "Facturar un año de soporte por adelantado y contarlo todo como ingreso infla el mes actual y reduce los siguientes." },
          { title: "Los paquetes no se separan.", detail: "Cuando una venta incluye producto, instalación y soporte, tratarla como un solo concepto pone el ingreso en los periodos equivocados." },
          { title: "No se registran los cambios de contrato.", detail: "Mejoras, cancelaciones y descuentos a mitad del contrato cambian el reparto, pero el calendario nunca se actualiza." },
          { title: "Los calendarios viven en hojas de cálculo.", detail: "Los ingresos diferidos llevados a mano fuera del sistema contable son frágiles y difíciles de auditar." }
        ],
        faq: [
          { q: "¿Qué son los ingresos diferidos?", a: "Es dinero recibido por bienes o servicios aún no entregados. Queda como pasivo hasta que la empresa lo gana." },
          { q: "¿Aplica a pequeñas empresas?", a: "Los principios aplican a cualquiera que use contabilidad de devengo. El marco exacto depende de tu país y tipo de empresa, así que consulta a tu contador." }
        ]
      }
    }
  },
  {
    slug: "multi-currency",
    category: "finance",
    hub: "/erp-crm",
    related: ["landed-cost", "general-ledger", "intercompany-transactions", "erp", "reconciliation"],
    copy: {
      en: {
        term: "Multi-currency",
        definition: "Multi-currency is the ability of an accounting or ERP system to record, convert and report transactions in more than one currency.",
        explanation: "A Canadian distributor that buys from US suppliers and sells to customers in Canada and Europe deals in at least three currencies. Multi-currency support lets it issue invoices and pay bills in each currency while keeping its books in Canadian dollars.\n\nThe system stores the original amount, the exchange rate used, and the converted amount. When a bill is paid at a different rate than when it was recorded, the difference is booked as a foreign exchange gain or loss. At month end, open balances in foreign currencies are usually revalued at the current rate.\n\nDone right, multi-currency gives an honest view of what each sale and purchase is really worth.",
        breaks: [
          { title: "Exchange rates are entered by hand.", detail: "Typed rates go stale or contain errors, and different staff use different sources." },
          { title: "Gains and losses are not separated.", detail: "When currency swings are buried in cost of goods or revenue, managers cannot tell product margin from currency luck." },
          { title: "Foreign bank accounts are not revalued.", detail: "A US dollar account left at an old rate makes the balance sheet wrong every month." },
          { title: "Integrations drop the currency code.", detail: "An online store sends a US dollar order to the ERP as Canadian dollars, and the invoice is wrong from the start." }
        ],
        faq: [
          { q: "What is a realized versus unrealized exchange gain?", a: "A realized gain or loss happens when a foreign invoice is actually paid. An unrealized one comes from revaluing open balances at month end and may change before payment." },
          { q: "What is a functional currency?", a: "The main currency of the economic environment a business operates in, usually the currency its books are kept in. Other currencies are converted into it." }
        ]
      },
      fr: {
        term: "Multidevise",
        definition: "La multidevise est la capacité d'un logiciel comptable ou d'un ERP d'inscrire, de convertir et de présenter des transactions dans plus d'une devise.",
        explanation: "Un distributeur canadien qui achète de fournisseurs américains et vend au Canada et en Europe traite au moins trois devises. La multidevise lui permet de facturer et de payer dans chaque devise tout en tenant ses livres en dollars canadiens.\n\nLe système garde le montant d'origine, le taux de change utilisé et le montant converti. Quand une facture est payée à un autre taux que celui de l'inscription, l'écart est comptabilisé comme gain ou perte de change. En fin de mois, les soldes ouverts en devises sont habituellement réévalués au taux du jour.\n\nBien faite, la multidevise donne une image honnête de ce que vaut vraiment chaque vente et chaque achat.",
        breaks: [
          { title: "Les taux de change sont saisis à la main.", detail: "Les taux tapés deviennent périmés ou erronés, et chaque employé utilise une source différente." },
          { title: "Les gains et pertes ne sont pas séparés.", detail: "Quand les variations de change sont noyées dans le coût ou les revenus, on ne distingue plus la marge du hasard des devises." },
          { title: "Les comptes bancaires en devises ne sont pas réévalués.", detail: "Un compte en dollars américains laissé à un vieux taux rend le bilan faux chaque mois." },
          { title: "Les intégrations perdent le code de devise.", detail: "Une boutique en ligne envoie une commande en dollars américains à l'ERP comme si c'était des dollars canadiens." }
        ],
        faq: [
          { q: "Quelle différence entre gain de change réalisé et non réalisé?", a: "Un gain ou une perte réalisé survient au paiement d'une facture en devise. Un non réalisé vient de la réévaluation des soldes ouverts en fin de mois et peut changer avant le paiement." },
          { q: "Qu'est-ce que la monnaie fonctionnelle?", a: "La devise principale de l'environnement économique de l'entreprise, généralement celle de ses livres. Les autres devises y sont converties." }
        ]
      },
      es: {
        term: "Multimoneda",
        definition: "La multimoneda es la capacidad de un sistema contable o ERP de registrar, convertir y reportar transacciones en más de una moneda.",
        explanation: "Un distribuidor canadiense que compra a proveedores de Estados Unidos y vende en Canadá y Europa maneja al menos tres monedas. La multimoneda le permite facturar y pagar en cada moneda mientras lleva sus libros en dólares canadienses.\n\nEl sistema guarda el monto original, el tipo de cambio usado y el monto convertido. Cuando una factura se paga a un tipo distinto al del registro, la diferencia se registra como ganancia o pérdida cambiaria. A fin de mes, los saldos abiertos en moneda extranjera suelen revaluarse al tipo vigente.\n\nBien hecha, la multimoneda da una visión honesta de lo que realmente vale cada venta y compra.",
        breaks: [
          { title: "Los tipos de cambio se capturan a mano.", detail: "Los tipos tecleados se vuelven viejos o tienen errores, y cada persona usa una fuente distinta." },
          { title: "No se separan ganancias y pérdidas cambiarias.", detail: "Cuando las variaciones se esconden en el costo o los ingresos, no se distingue el margen real de la suerte cambiaria." },
          { title: "Las cuentas bancarias en moneda extranjera no se revalúan.", detail: "Una cuenta en dólares estadounidenses con un tipo viejo deja mal el balance cada mes." },
          { title: "Las integraciones pierden el código de moneda.", detail: "Una tienda en línea manda un pedido en dólares estadounidenses al ERP como si fueran canadienses, y la factura sale mal desde el inicio." }
        ],
        faq: [
          { q: "¿Qué diferencia hay entre ganancia cambiaria realizada y no realizada?", a: "La realizada ocurre cuando se paga una factura en moneda extranjera. La no realizada viene de revaluar saldos abiertos a fin de mes y puede cambiar antes del pago." },
          { q: "¿Qué es la moneda funcional?", a: "La moneda principal del entorno económico donde opera la empresa, normalmente la de sus libros. Las demás monedas se convierten a ella." }
        ]
      }
    }
  },
  {
    slug: "intercompany-transactions",
    category: "finance",
    hub: "/erp-crm",
    related: ["general-ledger", "multi-currency", "reconciliation", "month-end-close", "erp"],
    copy: {
      en: {
        term: "Intercompany transactions",
        definition: "Intercompany transactions are sales, loans, charges or transfers between two legal entities owned by the same parent company.",
        explanation: "Many growing businesses end up with more than one company: a Canadian operating company and a US subsidiary, or a separate entity that owns the warehouse. When one sells goods to another, lends it money, or charges for shared staff, that is an intercompany transaction.\n\nEach entity records its side. The seller books a sale and a receivable; the buyer books a purchase and a payable. When the group prepares consolidated statements, these amounts are eliminated, because the group cannot make a profit by selling to itself.\n\nThe hard part is making both sides agree. Different timing, currencies or coding quickly create gaps that slow the close.",
        breaks: [
          { title: "Each side books at a different time.", detail: "One entity records the charge in March and the other in April, so balances do not match at month end." },
          { title: "Currencies and rates differ.", detail: "A sale in US dollars from one entity and a purchase in Canadian dollars at another rate in the other leaves a gap to explain." },
          { title: "Eliminations are done in a spreadsheet.", detail: "Manually removing intercompany balances at consolidation is slow and easy to get wrong." },
          { title: "Transfer pricing is not documented.", detail: "Tax authorities expect prices between related companies to be fair and supported, and missing documentation creates exposure." }
        ],
        faq: [
          { q: "Why are intercompany transactions eliminated?", a: "Consolidated statements show the group as one business. Sales, profits and balances between group members would otherwise inflate revenue and assets." },
          { q: "What is transfer pricing?", a: "Transfer pricing is the price set for goods, services or loans between related companies. Most tax authorities, including the CRA and the IRS, expect it to match what unrelated parties would agree to." }
        ]
      },
      fr: {
        term: "Opérations intersociétés",
        definition: "Les opérations intersociétés sont des ventes, prêts, frais ou transferts entre deux entités juridiques détenues par la même société mère.",
        explanation: "Beaucoup d'entreprises en croissance finissent avec plus d'une société : une société d'exploitation canadienne et une filiale américaine, ou une entité distincte propriétaire de l'entrepôt. Quand l'une vend des biens à l'autre, lui prête de l'argent ou lui facture du personnel partagé, c'est une opération intersociétés.\n\nChaque entité inscrit son côté. Le vendeur inscrit une vente et une créance; l'acheteur, un achat et une dette. Lors des états consolidés, ces montants sont éliminés, car le groupe ne peut pas faire de profit en se vendant à lui-même.\n\nLe défi est de faire concorder les deux côtés. Les écarts de date, de devise ou de codification créent vite des écarts qui ralentissent la clôture.",
        breaks: [
          { title: "Chaque côté inscrit à un moment différent.", detail: "Une entité inscrit les frais en mars et l'autre en avril, donc les soldes ne concordent pas en fin de mois." },
          { title: "Les devises et taux diffèrent.", detail: "Une vente en dollars américains d'un côté et un achat en dollars canadiens à un autre taux de l'autre laisse un écart à expliquer." },
          { title: "Les éliminations se font dans un tableur.", detail: "Retirer manuellement les soldes intersociétés à la consolidation est lent et sujet aux erreurs." },
          { title: "Les prix de transfert ne sont pas documentés.", detail: "Les autorités fiscales s'attendent à des prix justes et justifiés entre sociétés liées, et l'absence de documentation crée un risque." }
        ],
        faq: [
          { q: "Pourquoi élimine-t-on les opérations intersociétés?", a: "Les états consolidés présentent le groupe comme une seule entreprise. Sinon, les ventes, profits et soldes entre membres gonfleraient les revenus et les actifs." },
          { q: "Qu'est-ce que le prix de transfert?", a: "C'est le prix fixé pour des biens, services ou prêts entre sociétés liées. La plupart des autorités fiscales, dont l'ARC et l'IRS, s'attendent à ce qu'il corresponde à ce que des parties indépendantes accepteraient." }
        ]
      },
      es: {
        term: "Operaciones intercompañía",
        definition: "Las operaciones intercompañía son ventas, préstamos, cargos o transferencias entre dos entidades legales que pertenecen a la misma empresa matriz.",
        explanation: "Muchas empresas en crecimiento terminan con más de una sociedad: una operadora en Canadá y una filial en Estados Unidos, o una entidad aparte dueña del almacén. Cuando una vende bienes a la otra, le presta dinero o le cobra personal compartido, es una operación intercompañía.\n\nCada entidad registra su lado. La que vende registra una venta y una cuenta por cobrar; la que compra, una compra y una cuenta por pagar. Al preparar estados consolidados, estos montos se eliminan, porque el grupo no puede ganar vendiéndose a sí mismo.\n\nLo difícil es que ambos lados coincidan. Diferencias de fecha, moneda o codificación crean brechas que retrasan el cierre.",
        breaks: [
          { title: "Cada lado registra en un momento distinto.", detail: "Una entidad registra el cargo en marzo y la otra en abril, así que los saldos no coinciden a fin de mes." },
          { title: "Las monedas y tipos de cambio difieren.", detail: "Una venta en dólares estadounidenses de un lado y una compra en dólares canadienses a otro tipo del otro deja una diferencia por explicar." },
          { title: "Las eliminaciones se hacen en hojas de cálculo.", detail: "Quitar a mano los saldos intercompañía al consolidar es lento y propenso a errores." },
          { title: "Los precios de transferencia no están documentados.", detail: "Las autoridades fiscales esperan precios justos y sustentados entre partes relacionadas, y la falta de documentación genera riesgo." }
        ],
        faq: [
          { q: "¿Por qué se eliminan las operaciones intercompañía?", a: "Los estados consolidados muestran al grupo como una sola empresa. Si no se eliminan, las ventas, utilidades y saldos entre miembros inflarían ingresos y activos." },
          { q: "¿Qué son los precios de transferencia?", a: "Son los precios fijados para bienes, servicios o préstamos entre partes relacionadas. La mayoría de las autoridades fiscales esperan que coincidan con lo que acordarían partes independientes." }
        ]
      }
    }
  },
  {
    slug: "service-level-agreement",
    category: "support",
    hub: "/support",
    related: ["help-desk", "ticketing-system", "incident-management", "kpi", "root-cause-analysis"],
    copy: {
      en: {
        term: "Service level agreement (SLA)",
        definition: "A service level agreement, or SLA, is a written commitment that defines the level of service a provider will deliver, such as response times, resolution times and uptime.",
        explanation: "An SLA turns a vague promise like fast support into numbers both sides can check. It might say urgent issues get a response within one hour and a fix or workaround within four, while low priority requests get a response by the next business day.\n\nSLAs can be external, between a vendor and a customer, or internal, between an IT team and the rest of the company. A regional retailer's IT provider might commit to keeping the point of sale system available during store hours, with credits if it falls short.\n\nA good SLA is clear about priorities, hours of coverage, how time is measured and what happens when targets are missed.",
        breaks: [
          { title: "Priorities are not defined clearly.", detail: "If urgent is not spelled out, every customer marks every request urgent and the targets mean nothing." },
          { title: "The clock is measured differently by each side.", detail: "One side counts business hours and the other counts calendar hours, so both think the other broke the deal." },
          { title: "Targets are set without checking capacity.", detail: "Promising a one-hour response with a team that cannot staff it guarantees misses." },
          { title: "Nobody reports on performance.", detail: "Without regular SLA reports, breaches are noticed only when a customer complains." }
        ],
        faq: [
          { q: "What is the difference between an SLA and an SLO?", a: "An SLA is the formal agreement, often with consequences if missed. A service level objective, or SLO, is the internal target a team aims for, usually stricter than the SLA." },
          { q: "What should an SLA include?", a: "The services covered, priority levels, response and resolution targets, hours of coverage, how performance is measured and reported, and remedies if targets are missed." }
        ]
      },
      fr: {
        term: "Entente de niveau de service (ENS)",
        definition: "Une entente de niveau de service, ou ENS (SLA en anglais), est un engagement écrit qui définit le niveau de service qu'un fournisseur offrira, comme les délais de réponse, les délais de résolution et la disponibilité.",
        explanation: "L'ENS transforme une promesse vague comme un soutien rapide en chiffres que les deux parties peuvent vérifier. Elle peut prévoir qu'un problème urgent reçoit une réponse en une heure et une solution ou un contournement en quatre, alors qu'une demande peu prioritaire reçoit une réponse le jour ouvrable suivant.\n\nUne ENS peut être externe, entre un fournisseur et un client, ou interne, entre une équipe TI et le reste de l'entreprise. Le fournisseur TI d'un détaillant régional peut s'engager à garder le système de caisse disponible pendant les heures d'ouverture, avec des crédits en cas de manquement.\n\nUne bonne ENS est claire sur les priorités, les heures couvertes, la mesure du temps et les conséquences.",
        breaks: [
          { title: "Les priorités ne sont pas bien définies.", detail: "Si urgent n'est pas précisé, chaque client marque chaque demande urgente et les cibles ne veulent plus rien dire." },
          { title: "Chaque partie mesure le temps différemment.", detail: "L'une compte les heures ouvrables, l'autre les heures civiles, et chacune croit que l'autre a manqué à l'entente." },
          { title: "Les cibles sont fixées sans vérifier la capacité.", detail: "Promettre une réponse en une heure avec une équipe qui ne peut pas l'assurer garantit les manquements." },
          { title: "Personne ne fait rapport sur la performance.", detail: "Sans rapports réguliers, les manquements ne sont remarqués que lorsqu'un client se plaint." }
        ],
        faq: [
          { q: "Quelle différence entre une ENS et un objectif de niveau de service?", a: "L'ENS est l'entente formelle, souvent assortie de conséquences. L'objectif de niveau de service est la cible interne de l'équipe, généralement plus stricte que l'ENS." },
          { q: "Que devrait contenir une ENS?", a: "Les services couverts, les niveaux de priorité, les cibles de réponse et de résolution, les heures couvertes, la façon de mesurer et de rapporter la performance, et les recours en cas de manquement." }
        ]
      },
      es: {
        term: "Acuerdo de nivel de servicio (SLA)",
        definition: "Un acuerdo de nivel de servicio, o SLA, es un compromiso escrito que define el nivel de servicio que dará un proveedor, como tiempos de respuesta, tiempos de resolución y disponibilidad.",
        explanation: "El SLA convierte una promesa vaga como soporte rápido en números que ambas partes pueden verificar. Puede decir que los problemas urgentes reciben respuesta en una hora y solución o alternativa en cuatro, mientras las solicitudes de baja prioridad reciben respuesta el siguiente día hábil.\n\nLos SLA pueden ser externos, entre un proveedor y un cliente, o internos, entre un equipo de TI y el resto de la empresa. El proveedor de TI de una cadena regional puede comprometerse a mantener disponible el sistema de punto de venta en horario de tienda, con créditos si no cumple.\n\nUn buen SLA es claro sobre prioridades, horario cubierto, cómo se mide el tiempo y qué pasa si no se cumple.",
        breaks: [
          { title: "Las prioridades no están bien definidas.", detail: "Si urgente no está explicado, cada cliente marca todo como urgente y las metas pierden sentido." },
          { title: "Cada lado mide el tiempo distinto.", detail: "Uno cuenta horas hábiles y el otro horas naturales, y ambos creen que el otro incumplió." },
          { title: "Las metas se fijan sin revisar la capacidad.", detail: "Prometer respuesta en una hora con un equipo que no puede cubrirla garantiza incumplimientos." },
          { title: "Nadie reporta el desempeño.", detail: "Sin reportes regulares, los incumplimientos solo se notan cuando un cliente se queja." }
        ],
        faq: [
          { q: "¿Qué diferencia hay entre SLA y SLO?", a: "El SLA es el acuerdo formal, muchas veces con consecuencias si no se cumple. El objetivo de nivel de servicio, o SLO, es la meta interna del equipo, normalmente más estricta que el SLA." },
          { q: "¿Qué debe incluir un SLA?", a: "Los servicios cubiertos, niveles de prioridad, metas de respuesta y resolución, horario cubierto, cómo se mide y reporta el desempeño, y las compensaciones si no se cumple." }
        ]
      }
    }
  },
  {
    slug: "help-desk",
    category: "support",
    hub: "/support",
    related: ["ticketing-system", "service-level-agreement", "incident-management", "standard-operating-procedure", "crm"],
    copy: {
      en: {
        term: "Help desk",
        definition: "A help desk is the team, and usually the software, that receives questions and problems from users or customers and works them through to a resolution.",
        explanation: "A help desk is the front door for support. People reach it by email, phone, chat or a web form, and the help desk logs each request, answers what it can and routes the rest to specialists.\n\nIt can face customers, like a support line for a software product, or face employees, like the internal IT help desk at a mid-size manufacturer that resets passwords, fixes printers and sets up new laptops.\n\nA good help desk is consistent. Requests are logged, prioritized and tracked, common answers are written down so anyone can give them, and the team watches trends to fix repeat problems at the source instead of answering the same question forever.",
        breaks: [
          { title: "Requests come in through side channels.", detail: "Staff message a favourite technician directly, so work goes untracked and that person becomes a bottleneck." },
          { title: "Knowledge lives in a few people's heads.", detail: "Without written answers, every new hire relearns the same fixes and response quality varies by who picks up." },
          { title: "Escalation paths are unclear.", detail: "Tickets bounce between teams because no one knows who owns a given type of problem." },
          { title: "Repeat issues are never fixed at the source.", detail: "The help desk keeps solving the same problem every week because no one looks at trends." }
        ],
        faq: [
          { q: "What is the difference between a help desk and a service desk?", a: "The terms overlap. A help desk usually focuses on fixing issues, while a service desk in ITIL terms also handles service requests, changes and broader IT service management." },
          { q: "What are help desk tiers?", a: "Tier 1 handles common questions and simple fixes, tier 2 handles more technical problems, and tier 3 involves specialists or vendors for the hardest issues." }
        ]
      },
      fr: {
        term: "Centre d'assistance",
        definition: "Le centre d'assistance est l'équipe, et habituellement le logiciel, qui reçoit les questions et problèmes des utilisateurs ou clients et les mène jusqu'à leur résolution.",
        explanation: "Le centre d'assistance est la porte d'entrée du soutien. On le joint par courriel, téléphone, clavardage ou formulaire web, et il consigne chaque demande, répond à ce qu'il peut et achemine le reste aux spécialistes.\n\nIl peut servir les clients, comme une ligne de soutien pour un logiciel, ou les employés, comme le soutien TI interne d'un fabricant de taille moyenne qui réinitialise les mots de passe, répare les imprimantes et prépare les nouveaux portables.\n\nUn bon centre d'assistance est constant. Les demandes sont consignées, priorisées et suivies, les réponses courantes sont écrites pour que tous puissent les donner, et l'équipe surveille les tendances pour régler les problèmes récurrents à la source.",
        breaks: [
          { title: "Les demandes passent par des canaux parallèles.", detail: "Le personnel écrit directement à son technicien préféré, le travail n'est pas suivi et cette personne devient un goulot." },
          { title: "Le savoir est dans la tête de quelques personnes.", detail: "Sans réponses écrites, chaque nouvelle recrue réapprend les mêmes solutions et la qualité varie selon qui répond." },
          { title: "Les voies d'escalade sont floues.", detail: "Les billets rebondissent entre équipes parce que personne ne sait qui est responsable de quel type de problème." },
          { title: "Les problèmes récurrents ne sont jamais réglés à la source.", detail: "Le centre résout le même problème chaque semaine parce que personne n'examine les tendances." }
        ],
        faq: [
          { q: "Quelle différence entre centre d'assistance et centre de services?", a: "Les termes se recoupent. Le centre d'assistance se concentre sur la résolution des problèmes, alors qu'un centre de services au sens d'ITIL gère aussi les demandes de service, les changements et la gestion des services TI." },
          { q: "Que sont les niveaux de soutien?", a: "Le niveau 1 traite les questions courantes et les solutions simples, le niveau 2 les problèmes plus techniques, et le niveau 3 fait appel à des spécialistes ou fournisseurs pour les cas les plus difficiles." }
        ]
      },
      es: {
        term: "Mesa de ayuda",
        definition: "La mesa de ayuda es el equipo, y normalmente el software, que recibe preguntas y problemas de usuarios o clientes y los lleva hasta su solución.",
        explanation: "La mesa de ayuda es la puerta de entrada del soporte. La gente la contacta por correo, teléfono, chat o un formulario web, y la mesa registra cada solicitud, responde lo que puede y canaliza el resto a especialistas.\n\nPuede atender a clientes, como la línea de soporte de un software, o a empleados, como la mesa de ayuda de TI interna de un fabricante mediano que restablece contraseñas, arregla impresoras y prepara laptops nuevas.\n\nUna buena mesa de ayuda es constante. Las solicitudes se registran, priorizan y siguen, las respuestas comunes se escriben para que cualquiera las dé, y el equipo revisa tendencias para resolver los problemas repetidos de raíz.",
        breaks: [
          { title: "Las solicitudes llegan por canales paralelos.", detail: "El personal escribe directo a su técnico favorito, el trabajo no se registra y esa persona se vuelve un cuello de botella." },
          { title: "El conocimiento está en la cabeza de pocos.", detail: "Sin respuestas escritas, cada persona nueva vuelve a aprender las mismas soluciones y la calidad varía según quién atienda." },
          { title: "Las rutas de escalamiento no son claras.", detail: "Los tickets rebotan entre equipos porque nadie sabe quién es dueño de cada tipo de problema." },
          { title: "Los problemas repetidos nunca se resuelven de raíz.", detail: "La mesa resuelve el mismo problema cada semana porque nadie revisa las tendencias." }
        ],
        faq: [
          { q: "¿Qué diferencia hay entre mesa de ayuda y mesa de servicio?", a: "Los términos se traslapan. La mesa de ayuda se enfoca en resolver incidencias, mientras que una mesa de servicio en términos de ITIL también maneja solicitudes de servicio, cambios y la gestión de servicios de TI." },
          { q: "¿Qué son los niveles de soporte?", a: "El nivel 1 atiende preguntas comunes y arreglos simples, el nivel 2 problemas más técnicos y el nivel 3 involucra especialistas o proveedores para los casos más difíciles." }
        ]
      }
    }
  },
  {
    slug: "ticketing-system",
    category: "support",
    hub: "/support",
    related: ["help-desk", "service-level-agreement", "incident-management", "workflow-automation", "crm"],
    copy: {
      en: {
        term: "Ticketing system",
        definition: "A ticketing system is software that turns each support request into a tracked record, called a ticket, with an owner, a status, a priority and a full history.",
        explanation: "Instead of support living in scattered inboxes, every request becomes a ticket. The ticket shows who asked, what they need, who is working on it, what has been tried and whether it is solved.\n\nA wholesale distributor might use a ticketing system for customer order issues: a missing item, a damaged delivery, a billing question. Each one is assigned, timed against the SLA and closed when resolved, so nothing falls through the cracks when someone is away.\n\nMost ticketing systems also offer automation, like routing by topic, sending updates to the customer and escalating tickets that are about to breach their target. The data they collect shows where problems keep coming from.",
        breaks: [
          { title: "Tickets are closed without a real resolution.", detail: "Agents close tickets to hit targets, and customers reopen them or give up." },
          { title: "Categories are too vague or too many.", detail: "When agents pick other for most tickets, reports cannot show what customers actually need help with." },
          { title: "The system is not connected to customer or order data.", detail: "Agents switch between screens to look up orders, which slows every reply and invites errors." },
          { title: "Automation rules pile up unchecked.", detail: "Old routing rules conflict with new ones and tickets land in the wrong queue." }
        ],
        faq: [
          { q: "What is the difference between a ticketing system and a CRM?", a: "A CRM tracks customer relationships and sales. A ticketing system tracks support requests. Many businesses connect the two so agents can see customer history while working a ticket." },
          { q: "Do small teams need a ticketing system?", a: "Once more than one or two people share support, a ticketing system helps avoid missed or duplicate replies. Many tools offer simple plans for small teams." }
        ]
      },
      fr: {
        term: "Système de billetterie",
        definition: "Un système de billetterie est un logiciel qui transforme chaque demande de soutien en dossier suivi, appelé billet, avec un responsable, un état, une priorité et un historique complet.",
        explanation: "Au lieu que le soutien vive dans des boîtes de courriel éparpillées, chaque demande devient un billet. Le billet montre qui demande, ce dont la personne a besoin, qui s'en occupe, ce qui a été essayé et si c'est réglé.\n\nUn distributeur en gros peut utiliser un système de billetterie pour les problèmes de commandes : article manquant, livraison endommagée, question de facturation. Chaque billet est assigné, chronométré selon l'ENS et fermé une fois réglé, pour que rien ne se perde quand quelqu'un est absent.\n\nLa plupart des systèmes offrent aussi de l'automatisation, comme l'acheminement par sujet, les mises à jour au client et l'escalade des billets près de dépasser leur cible.",
        breaks: [
          { title: "Les billets sont fermés sans vraie résolution.", detail: "Les agents ferment des billets pour atteindre leurs cibles, et les clients les rouvrent ou abandonnent." },
          { title: "Les catégories sont trop vagues ou trop nombreuses.", detail: "Quand les agents choisissent autre pour la plupart des billets, les rapports ne montrent pas les vrais besoins." },
          { title: "Le système n'est pas relié aux données clients ou commandes.", detail: "Les agents passent d'un écran à l'autre pour trouver les commandes, ce qui ralentit chaque réponse." },
          { title: "Les règles d'automatisation s'accumulent sans contrôle.", detail: "D'anciennes règles entrent en conflit avec les nouvelles et les billets aboutissent dans la mauvaise file." }
        ],
        faq: [
          { q: "Quelle différence entre un système de billetterie et un CRM?", a: "Le CRM suit les relations clients et les ventes. Le système de billetterie suit les demandes de soutien. Beaucoup d'entreprises relient les deux pour voir l'historique du client pendant le traitement d'un billet." },
          { q: "Les petites équipes ont-elles besoin d'un système de billetterie?", a: "Dès que plus d'une ou deux personnes partagent le soutien, il aide à éviter les réponses oubliées ou en double. Beaucoup d'outils offrent des forfaits simples pour petites équipes." }
        ]
      },
      es: {
        term: "Sistema de tickets",
        definition: "Un sistema de tickets es un software que convierte cada solicitud de soporte en un registro con seguimiento, llamado ticket, con responsable, estado, prioridad e historial completo.",
        explanation: "En lugar de que el soporte viva en bandejas de correo dispersas, cada solicitud se vuelve un ticket. El ticket muestra quién pidió, qué necesita, quién lo atiende, qué se ha intentado y si ya se resolvió.\n\nUn distribuidor mayorista puede usar un sistema de tickets para problemas de pedidos: un artículo faltante, una entrega dañada, una duda de facturación. Cada ticket se asigna, se mide contra el SLA y se cierra al resolverse, así nada se pierde cuando alguien falta.\n\nLa mayoría de estos sistemas también ofrecen automatización, como asignar por tema, enviar avisos al cliente y escalar tickets a punto de vencer su meta.",
        breaks: [
          { title: "Los tickets se cierran sin una solución real.", detail: "Los agentes cierran tickets para cumplir metas, y los clientes los reabren o se rinden." },
          { title: "Las categorías son muy vagas o demasiadas.", detail: "Cuando los agentes eligen otro en la mayoría de los tickets, los reportes no muestran en qué necesitan ayuda los clientes." },
          { title: "El sistema no está conectado a datos de clientes o pedidos.", detail: "Los agentes cambian de pantalla para buscar pedidos, lo que retrasa cada respuesta y provoca errores." },
          { title: "Las reglas de automatización se acumulan sin revisión.", detail: "Reglas viejas chocan con las nuevas y los tickets caen en la cola equivocada." }
        ],
        faq: [
          { q: "¿Qué diferencia hay entre un sistema de tickets y un CRM?", a: "El CRM sigue la relación con clientes y las ventas. El sistema de tickets sigue las solicitudes de soporte. Muchas empresas conectan ambos para ver el historial del cliente al atender un ticket." },
          { q: "¿Los equipos pequeños necesitan un sistema de tickets?", a: "En cuanto más de una o dos personas comparten el soporte, ayuda a evitar respuestas olvidadas o duplicadas. Muchas herramientas tienen planes sencillos para equipos pequeños." }
        ]
      }
    }
  },
  {
    slug: "incident-management",
    category: "support",
    hub: "/support",
    related: ["root-cause-analysis", "service-level-agreement", "help-desk", "backup-and-recovery", "ticketing-system"],
    copy: {
      en: {
        term: "Incident management",
        definition: "Incident management is the process of detecting, responding to and resolving unplanned disruptions to a service so normal operation is restored as quickly as possible.",
        explanation: "An incident is anything that breaks or degrades a service people rely on: the online store goes down, orders stop flowing to the warehouse, or email is unreachable. Incident management is how a team handles it calmly instead of scrambling.\n\nThe usual flow is detect, log, assess impact, assign an owner, communicate, fix or work around, and close. If a distributor's EDI connection to a large retail customer fails on a Monday morning, a clear process means someone owns it right away, the customer is told, and orders are processed by a backup method until the link is restored.\n\nThe focus is restoring service fast. Finding the deeper cause comes after, through root cause analysis.",
        breaks: [
          { title: "No one is clearly in charge.", detail: "Several people work the same incident without talking, while others assume someone else has it." },
          { title: "Users and customers hear nothing.", detail: "Silence during an outage creates more calls and more frustration than the outage itself." },
          { title: "Monitoring is missing.", detail: "The team learns about the problem from an angry customer instead of an alert." },
          { title: "Incidents are closed and forgotten.", detail: "Without a short review afterward, the same failure happens again next month." }
        ],
        diagram: ["Detect and log", "Assess impact", "Assign owner", "Restore service", "Review afterward"],
        faq: [
          { q: "What is the difference between an incident and a problem?", a: "In ITIL terms, an incident is a single disruption that needs fixing now. A problem is the underlying cause of one or more incidents, which is investigated separately." },
          { q: "What is an incident severity level?", a: "A label, often from 1 to 4, that ranks how serious an incident is based on how many people it affects and how badly. It sets response speed and who gets called." }
        ]
      },
      fr: {
        term: "Gestion des incidents",
        definition: "La gestion des incidents est le processus qui permet de détecter, de traiter et de résoudre les interruptions imprévues d'un service afin de rétablir le fonctionnement normal le plus vite possible.",
        explanation: "Un incident est tout ce qui brise ou dégrade un service sur lequel on compte : la boutique en ligne tombe, les commandes ne se rendent plus à l'entrepôt ou le courriel est inaccessible. La gestion des incidents permet à l'équipe de réagir calmement plutôt que dans la panique.\n\nLe parcours habituel : détecter, consigner, évaluer l'impact, désigner un responsable, communiquer, corriger ou contourner, puis fermer. Si le lien EDI d'un distributeur avec un gros client détaillant tombe un lundi matin, un processus clair fait en sorte que quelqu'un s'en charge tout de suite, que le client soit avisé et que les commandes passent par une méthode de rechange.\n\nLa priorité est de rétablir le service. La cause profonde vient ensuite, par l'analyse des causes profondes.",
        breaks: [
          { title: "Personne n'est clairement responsable.", detail: "Plusieurs personnes travaillent sur le même incident sans se parler, pendant que d'autres croient que quelqu'un s'en occupe." },
          { title: "Les utilisateurs et clients n'entendent rien.", detail: "Le silence pendant une panne crée plus d'appels et de frustration que la panne elle-même." },
          { title: "La surveillance est absente.", detail: "L'équipe apprend le problème par un client fâché plutôt que par une alerte." },
          { title: "Les incidents sont fermés et oubliés.", detail: "Sans courte révision après coup, la même panne revient le mois suivant." }
        ],
        diagram: ["Détecter et consigner", "Évaluer l'impact", "Désigner un responsable", "Rétablir le service", "Réviser après coup"],
        faq: [
          { q: "Quelle différence entre un incident et un problème?", a: "Selon ITIL, un incident est une interruption à régler tout de suite. Un problème est la cause sous-jacente d'un ou plusieurs incidents, analysée séparément." },
          { q: "Qu'est-ce qu'un niveau de gravité d'incident?", a: "Une étiquette, souvent de 1 à 4, qui classe la gravité d'un incident selon le nombre de personnes touchées et l'ampleur de l'effet. Elle fixe la vitesse de réponse et qui est appelé." }
        ]
      },
      es: {
        term: "Gestión de incidentes",
        definition: "La gestión de incidentes es el proceso de detectar, atender y resolver interrupciones no planeadas de un servicio para restablecer la operación normal lo más rápido posible.",
        explanation: "Un incidente es cualquier cosa que rompe o degrada un servicio del que la gente depende: la tienda en línea se cae, los pedidos dejan de llegar al almacén o el correo no funciona. La gestión de incidentes es la forma de atenderlo con calma en lugar de improvisar.\n\nEl flujo habitual es detectar, registrar, evaluar el impacto, asignar un responsable, comunicar, corregir o rodear el problema y cerrar. Si la conexión EDI de un distribuidor con un gran cliente minorista falla un lunes por la mañana, un proceso claro hace que alguien se encargue de inmediato, se avise al cliente y los pedidos sigan por un método alterno.\n\nLo primero es restablecer el servicio. La causa de fondo se busca después, con un análisis de causa raíz.",
        breaks: [
          { title: "Nadie está claramente a cargo.", detail: "Varias personas trabajan el mismo incidente sin hablarse, mientras otras suponen que alguien más lo atiende." },
          { title: "Usuarios y clientes no reciben noticias.", detail: "El silencio durante una caída genera más llamadas y frustración que la caída misma." },
          { title: "No hay monitoreo.", detail: "El equipo se entera del problema por un cliente molesto y no por una alerta." },
          { title: "Los incidentes se cierran y se olvidan.", detail: "Sin una breve revisión posterior, la misma falla vuelve el mes siguiente." }
        ],
        diagram: ["Detectar y registrar", "Evaluar impacto", "Asignar responsable", "Restablecer servicio", "Revisar después"],
        faq: [
          { q: "¿Qué diferencia hay entre un incidente y un problema?", a: "En términos de ITIL, un incidente es una interrupción que hay que resolver ya. Un problema es la causa de fondo de uno o más incidentes, que se investiga por separado." },
          { q: "¿Qué es un nivel de severidad?", a: "Una etiqueta, muchas veces del 1 al 4, que clasifica qué tan grave es un incidente según a cuántas personas afecta y cuánto. Define la rapidez de respuesta y a quién se llama." }
        ]
      }
    }
  },
  {
    slug: "root-cause-analysis",
    category: "support",
    hub: "/support",
    related: ["incident-management", "process-mapping", "exception-handling", "standard-operating-procedure", "help-desk"],
    copy: {
      en: {
        term: "Root cause analysis (RCA)",
        definition: "Root cause analysis, or RCA, is a structured way to find the underlying reason a problem happened, so it can be fixed for good rather than just patched.",
        explanation: "When something goes wrong, the obvious cause is often a symptom. RCA keeps asking why until it reaches something the team can change.\n\nSay a distributor ships the wrong item to a customer. Why? The picker grabbed the wrong bin. Why? Two similar SKUs sit side by side with nearly identical labels. Why? New products are slotted wherever there is room. The root cause is the slotting process, not the picker, and fixing it prevents many future errors.\n\nCommon methods include the five whys and fishbone diagrams. A good RCA focuses on processes and systems rather than blaming people, and ends with specific actions, owners and a check that they worked.",
        breaks: [
          { title: "The analysis stops at human error.", detail: "Blaming a person ends the inquiry before reaching the process or system that made the mistake easy." },
          { title: "Actions are agreed but never done.", detail: "Without owners and due dates, the fixes from an RCA quietly disappear." },
          { title: "RCA is reserved for big disasters.", detail: "Small, frequent problems cost more over time but never get analyzed." },
          { title: "People fear blame and hold back.", detail: "If RCA meetings feel like trials, the people who know what happened stay quiet." }
        ],
        diagram: ["Define the problem", "Gather facts", "Ask why repeatedly", "Fix the cause", "Confirm it worked"],
        faq: [
          { q: "What is the five whys technique?", a: "You ask why a problem happened, then ask why again about each answer, usually about five times, until you reach a cause you can act on." },
          { q: "When should you do a root cause analysis?", a: "After any serious incident, and for smaller problems that keep coming back. Repeated issues are often the best return on the effort." }
        ]
      },
      fr: {
        term: "Analyse des causes profondes",
        definition: "L'analyse des causes profondes (RCA en anglais) est une méthode structurée pour trouver la raison sous-jacente d'un problème, afin de le régler pour de bon plutôt que de simplement le colmater.",
        explanation: "Quand quelque chose tourne mal, la cause évidente n'est souvent qu'un symptôme. L'analyse continue à demander pourquoi jusqu'à trouver ce que l'équipe peut changer.\n\nDisons qu'un distributeur expédie le mauvais article. Pourquoi? Le préparateur a pris le mauvais casier. Pourquoi? Deux UGS semblables sont côte à côte avec des étiquettes presque identiques. Pourquoi? Les nouveaux produits sont placés là où il y a de la place. La cause profonde est le processus d'emplacement, pas le préparateur, et le corriger évite bien des erreurs futures.\n\nLes méthodes courantes incluent les cinq pourquoi et le diagramme d'Ishikawa. Une bonne analyse vise les processus plutôt que les personnes et se termine par des actions précises, des responsables et une vérification.",
        breaks: [
          { title: "L'analyse s'arrête à l'erreur humaine.", detail: "Blâmer une personne arrête la recherche avant d'atteindre le processus qui a rendu l'erreur facile." },
          { title: "Les actions sont convenues mais jamais faites.", detail: "Sans responsables ni échéances, les correctifs disparaissent discrètement." },
          { title: "L'analyse est réservée aux grandes catastrophes.", detail: "Les petits problèmes fréquents coûtent plus cher à la longue mais ne sont jamais analysés." },
          { title: "Les gens craignent le blâme et se taisent.", detail: "Si les rencontres ressemblent à des procès, ceux qui savent ce qui s'est passé ne parlent pas." }
        ],
        diagram: ["Définir le problème", "Recueillir les faits", "Demander pourquoi", "Corriger la cause", "Vérifier le résultat"],
        faq: [
          { q: "Qu'est-ce que la technique des cinq pourquoi?", a: "On demande pourquoi un problème est arrivé, puis encore pourquoi pour chaque réponse, environ cinq fois, jusqu'à une cause sur laquelle on peut agir." },
          { q: "Quand faire une analyse des causes profondes?", a: "Après tout incident grave, et pour les petits problèmes qui reviennent. Les problèmes récurrents offrent souvent le meilleur rendement de l'effort." }
        ]
      },
      es: {
        term: "Análisis de causa raíz (RCA)",
        definition: "El análisis de causa raíz, o RCA, es una forma estructurada de encontrar la razón de fondo de un problema, para resolverlo de verdad y no solo parcharlo.",
        explanation: "Cuando algo sale mal, la causa obvia muchas veces es solo un síntoma. El RCA sigue preguntando por qué hasta llegar a algo que el equipo puede cambiar.\n\nDigamos que un distribuidor envía el artículo equivocado. ¿Por qué? El surtidor tomó la ubicación equivocada. ¿Por qué? Dos SKU parecidos están juntos con etiquetas casi iguales. ¿Por qué? Los productos nuevos se acomodan donde haya espacio. La causa raíz es el proceso de ubicación, no el surtidor, y corregirlo evita muchos errores futuros.\n\nMétodos comunes son los cinco porqués y el diagrama de espina de pescado. Un buen RCA se enfoca en procesos y no en culpar personas, y termina con acciones concretas, responsables y una revisión de que funcionaron.",
        breaks: [
          { title: "El análisis se detiene en el error humano.", detail: "Culpar a una persona termina la búsqueda antes de llegar al proceso que hizo fácil el error." },
          { title: "Las acciones se acuerdan pero no se hacen.", detail: "Sin responsables ni fechas, las correcciones desaparecen en silencio." },
          { title: "El RCA se reserva para grandes desastres.", detail: "Los problemas pequeños y frecuentes cuestan más con el tiempo, pero nunca se analizan." },
          { title: "La gente teme la culpa y se calla.", detail: "Si las reuniones parecen juicios, quienes saben qué pasó no hablan." }
        ],
        diagram: ["Definir el problema", "Reunir hechos", "Preguntar por qué", "Corregir la causa", "Confirmar resultado"],
        faq: [
          { q: "¿Qué es la técnica de los cinco porqués?", a: "Preguntas por qué ocurrió un problema y luego otra vez por qué sobre cada respuesta, unas cinco veces, hasta llegar a una causa sobre la que puedes actuar." },
          { q: "¿Cuándo hacer un análisis de causa raíz?", a: "Después de cualquier incidente grave, y para problemas pequeños que se repiten. Los problemas recurrentes suelen dar el mejor retorno del esfuerzo." }
        ]
      }
    }
  }
]
