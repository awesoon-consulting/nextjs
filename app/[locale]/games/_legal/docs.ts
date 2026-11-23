export type LegalBlock = {
  id: string
  h: string
  p?: string[]
  table?: { head: string[]; rows: string[][] }
  after?: string[]
}

export type LegalDoc = {
  title: string
  updated: string
  lead: string
  short?: string[]
  note?: string
  sections: LegalBlock[]
  links: { href: string; label: string }[]
}

export const privacyPolicy: LegalDoc = {
  title: 'Privacy policy, Awesoon games and the Multiverse ID',
  updated: 'Version 5. Effective 23 November 2026. It replaces version 1, which stays posted.',
  lead: 'This policy explains what Awesoon collects, saves, shares and sells when you play our games, use a Multiverse ID or use our games pages, why we do it, how long we keep it, and the choices and rights you have.',
  short: [
    'What leaves your phone depends on the game version and the features you use. The table below shows each version. Some versions send nothing at all.',
    'When you use a feature that needs a server, such as a Multiverse ID, backup, friends or the map, we collect and save the data that feature needs.',
    'We share data with companies that run parts of our service for us, with ad and analytics partners in versions that use them, with other players when a feature shows something to them, and when the law requires it.',
    'We sell data. What we sell for money is data that does not identify you, and towns our game engine makes. Some US state laws also call it a "sale" or "sharing" when an ad partner uses your device to personalise ads. You can opt out of that at any time.',
    'Players we know are under 18 never get personalised ads, and their personal information is never sold or shared for ads.',
  ],
  note: 'If this short version and the full policy below differ, the full policy governs.',
  sections: [
    {
      id: 'who',
      h: 'Who we are',
      p: [
        'Awesoon Technologies Inc. is a company in British Columbia, Canada (registration number BC1381961), trading as Awesoon Technologies. We publish the Awesoon games and run the Multiverse ID, which is your Awesoon account for our games. In this policy, "we", "us" and "Awesoon" mean that company. We decide how your personal information is used, so we are responsible for it (the "controller" in European law).',
        'This policy covers every Awesoon game on iPhone, iPad and Android, the Tower Draft web taster, the Multiverse ID, the server behind it, and the games pages of awesoontechnologies.com. The rest of our website has its own privacy policy.',
      ],
    },
    {
      id: 'by-game',
      h: 'What each game version sends',
      p: [
        'We add each new game or version to this table, and update this policy, before that version is released. "Planned" rows describe features that are not released yet. Not every feature is in every version or every country.',
      ],
      table: {
        head: ['Game and version', 'What leaves your phone', 'What stays on your phone'],
        rows: [
          [
            'Tower Draft 2.0.0 (iPhone, iPad, Android)',
            'Nothing. This version has no sign-in, server, analytics or ad software. When you tap Privacy or Update, your phone opens our website in its browser.',
            'Your progress, town, builders, coins, settings and your age group. Reminders are set on the phone. Awesoon games on the same phone can share your town folder.',
          ],
          [
            'Tower Draft 2.1 and later (planned)',
            'If you choose a Multiverse ID: your account details, a backup of your town and progress, your friend list and friend codes, blocks and reports, and the technical records listed below.',
            'Everything in your town still lives on your phone. Without a Multiverse ID nothing changes from 2.0.0.',
          ],
          [
            'Tower Draft 2.2 and later (planned)',
            'If your town is on the Multiverse map: a checked, read-only copy of your town\'s build facts that visitors can see, and the guest-book stamps friends leave.',
            'Your own town and its full history.',
          ],
          [
            'Later Tower Draft versions (planned)',
            'Help jobs between towns. Ads from Google AdMob, Google Analytics for Firebase after an adult says yes, and purchases through the App Store or Google Play, each only in a version that has it.',
            'As above.',
          ],
          [
            'Tower Draft web taster (browser)',
            'Nothing. Your town is saved only in that browser.',
            'Your progress in that browser.',
          ],
        ],
      },
      after: [
        'Apple and Google may back up your phone, including game files, to your own iCloud or Google account. Those backups are yours and follow Apple\'s and Google\'s policies; we do not receive them.',
      ],
    },
    {
      id: 'collect',
      h: 'What we collect and where it comes from',
      p: [
        'On your phone only. Your progress, town, settings and age group stay on your phone unless you use a feature that needs our server. We do not receive them.',
        'The age question. The game asks your age once, with nothing filled in for you. It keeps only an age group, never your birth date. We use the group to decide which features and which kind of ads you get. On iPhone, a game may also ask Apple for your age range.',
        'Multiverse ID. You sign in with Apple or Google. From them we receive a sign-in code unique to you, an email address (or an Apple relay address if you choose Hide My Email) and your name if your account shares it. We never see your Apple or Google password. With your ID we keep your display name, age group, friend list, which Awesoon games you play, your progress, town, coins and items in each game, your land offers and deeds, and records of purchases.',
        'The map, visits, stamps and help jobs. When your town is on the map, we keep the build facts of your town (its buildings, roads, shape and rank) and the town\'s name from the game\'s word list. We keep the stamps you send and receive, the help jobs you take or ask for, and when visits happen.',
        'Safety records. Reports you make or that are made about you, blocks, the content reported, our decisions and any appeal.',
        'Technical records. When you sign in, the type of device, its system and app version, your IP address, crash details our server sees, and the choices you made on consent screens.',
        'Ads, in versions with ads. Google AdMob\'s software collects your device\'s advertising ID (when allowed), IP address, device details such as model, system version and language, and how you interact with ads.',
        'Analytics, in versions with it, only from players 18 and over who say yes. Google Analytics for Firebase collects how you use the game (for example screens and buttons), diagnostics, and an app instance ID. It is not linked to your Multiverse ID or to ads.',
        'Purchases. The App Store or Google Play takes payment. We receive the store receipt and what you bought, never your card details.',
        'Messages to us and sign-ups. Emails you send to support, and, if you are 16 or over and tick the box on our website, your email address for one launch email.',
        'Training records, only from players 18 and over outside the European Economic Area, the UK and Switzerland who say yes. Records of how you play, used to train Awesoon\'s own models.',
      ],
    },
    {
      id: 'use',
      h: 'How we use it, and our legal reasons',
      p: [
        'To run the games and the features you choose, such as your Multiverse ID, backup, friends, the map, stamps and help jobs. Legal reason: our agreement with you.',
        'To keep players safe, handle reports and appeals, stop cheating, fraud and fake accounts, secure our systems and fix problems. Legal reason: our legitimate interest in a safe, working service, and our legal duties.',
        'To show ads. Ads that are not personalised rely on our legitimate interest in funding free games. Personalised ads rely on your consent, which you can withdraw at any time.',
        'To measure and improve the games with analytics, and to train Awesoon\'s own models. Legal reason: your consent, asked separately for each purpose. Models serve Awesoon games and our game engine only.',
        'To make de-identified and aggregate data and engine-made towns, and to sell or license them, as explained below. Legal reason: our legitimate interest; where the law needs consent, we ask for it first.',
        'To write to you about your account, a change to these terms or this policy, or, if you asked, the launch email. Legal reason: our agreement with you or your consent.',
        'To meet our legal duties, enforce our terms, protect our rights and those of others, and in a sale or merger of our business.',
        'If we want to use your data for a new purpose, we tell you first and, where the law asks for it, ask you again. Each consent is separate and optional. Saying no never stops you from playing, and withdrawing is as easy as saying yes.',
      ],
    },
    {
      id: 'share',
      h: 'Who we share it with',
      p: [
        'Other players. Only what a feature shows: friends see your display name and which Awesoon games you both play; visitors to the map see your town\'s build facts and its word-list name, never your player name, email or account; the owner of a town sees the stamps you leave.',
        'Companies that run our service for us, such as Supabase (our server and sign-in), Apple and Google (sign-in, stores, receipts and reminders), and companies that host email or help review reported content. Our contracts let them use the data only to work for us.',
        'Ad and analytics partners, in versions that use them: Google AdMob and Google Analytics for Firebase. Google uses data under its own policy at policies.google.com/privacy.',
        'Buyers and licensees of de-identified and aggregate data and engine-made towns. See the next section.',
        'Authorities and others when the law requires it, to protect someone\'s safety, or to defend our rights. We report child sexual abuse material to the authorities where the law requires it.',
        'A buyer or successor, if Awesoon or part of it is sold, merged or reorganised. We tell you before your personal information moves under a different policy.',
        'Data from Sign in with Apple, and age range data from Apple or Google, never go to advertising companies, data brokers or resellers.',
      ],
    },
    {
      id: 'do-not-sell-or-share',
      h: 'Selling and sharing, and your right to opt out',
      p: [
        'What we sell for money. Towns our game engine makes from game rules and seeds, and data that no longer identifies anyone: totals, trends and counts about how players use the games, made from Android versions. Before we sell or license this data, we take reasonable steps so it cannot be linked to you or your device. We commit to keep it that way and not to try to identify anyone from it, and every buyer must promise the same in writing.',
        'What some state laws call a "sale" or "sharing". In versions with ads, when a player 18 or over agrees to personalised ads, Google AdMob receives the advertising ID and device data to choose and measure ads across apps. California calls this "sharing" for cross-context behavioral advertising, and other US states call it "targeted advertising" or a "sale". The kinds of personal information involved are identifiers (advertising ID, IP address), internet activity (how you interact with ads) and device details. The recipients are advertising networks.',
        'So far, no Awesoon game has served live ads, so we have not sold or shared personal information in this sense. This section says when that changes.',
        'How to opt out, at any time and without an account: in a game with ads, open Settings and change your ad choices; say no at Apple\'s tracking prompt or Google\'s consent form; turn off ad personalisation in your phone\'s settings; or email us with the subject "Do Not Sell or Share My Personal Information". After you opt out, we wait at least 12 months before asking again.',
        'Under 18. We do not sell or share the personal information of players we know are under 18, and they never get personalised ads or a tracking prompt. Players under 13 get child-safe ads only, with no advertising ID.',
        'Sensitive information. The only sensitive personal information we hold is your account sign-in, and we use it only to sign you in and keep your account safe.',
      ],
    },
    {
      id: 'children',
      h: 'Children and age groups',
      p: [
        'Our games are made for a general audience of all ages. Anyone can play every game in full without an account.',
        'Players under 13 keep everything on their phone. They cannot make a Multiverse ID, add friends, appear on the map by name, send stamps or join help jobs. Reminders are set on the phone only. In versions with ads, they get child-safe ads only, with no advertising ID.',
        'A Multiverse ID is open only from the digital consent age where you live: 13 in the United States and the United Kingdom, 14 in Canada, Italy and Spain, 15 in France, 16 in many other countries and wherever we are not sure, and 18 in India. We go by the country of your app store. We do not ask a parent to consent in a younger player\'s place.',
        'Every Multiverse ID holds one age group: 13 to 15, 16 to 17, or 18 and over. Friends, neighbours, visits, offers and help jobs come only from players in the same age group. A player moves up a group on their birthday and never down.',
        'If we learn that a player below the consent age has a Multiverse ID, we delete it. A parent or guardian can write to us to ask what we hold about their child, or to have it deleted.',
      ],
    },
    {
      id: 'retention',
      h: 'How long we keep it',
      table: {
        head: ['What', 'How long'],
        rows: [
          ['Data on your phone', 'Until you erase it in Settings or delete the game.'],
          ['Multiverse ID account, friends, progress, town backup, coins and items', 'Until you delete your Multiverse ID.'],
          ['Map copy of your town', 'Until you take your town off the map or delete your ID. Every copy we ever served is removed.'],
          ['Guest-book stamps', 'While they are among the last 20 a town shows, then deleted. A hidden stamp, and every stamp from a player who deletes their ID, is deleted too.'],
          ['Reports, blocks and moderation decisions', 'One year after the decision or appeal closes.'],
          ['Sign-in records and IP addresses', '30 days.'],
          ['Consent records', '2 years after you replace the choice.'],
          ['Analytics, user level', '2 months. Summary reports are kept.'],
          ['Training records', 'Up to 18 months. Withdrawing your yes stops collection and deletes your records within 30 days.'],
          ['Emails to support', '12 months after our last reply.'],
          ['Launch email sign-up', 'Until 30 days after the launch email.'],
          ['Purchase and tax records', 'As long as the law requires.'],
        ],
      },
      after: [
        'Deleted data leaves our backups within 30 days. De-identified and aggregate data and engine-made towns are not personal information and may be kept and used without a time limit.',
      ],
    },
    {
      id: 'delete',
      h: 'Deleting your data',
      p: [
        'On your phone: Settings, then Erase Tower Draft data. Deleting the game also removes what it saved on the phone.',
        'Your Multiverse ID: in any Awesoon game, Settings, Multiverse ID, Delete my Multiverse ID, or email us. This deletes your ID and what is saved to it across every Awesoon game within 30 days, including your map copy and stamps. Progress saved on your phone stays, and the game keeps working without an ID.',
        'We may keep what the law requires us to keep, or what we need to handle an open report, appeal or legal claim, for as long as that lasts.',
      ],
    },
    {
      id: 'where',
      h: 'Where your data is held and how we protect it',
      p: [
        'Multiverse ID data will be held on servers run for us by Supabase, under a data processing agreement signed before the first version with a Multiverse ID is released. We name the country where it is held on this page before then. Google may handle ad and analytics data in the United States and other countries. When data leaves your country, we use the safeguards the law requires, such as contracts.',
        'When a version uses our server, we use reasonable safeguards: sign-in through Apple or Google with no passwords stored, encryption in transit, limited staff access, and a separate encrypted store for training records with a key per player that is deleted when you delete your ID. No system is perfectly secure, and we cannot promise that data will never be accessed without permission. If a breach creates a real risk of significant harm to you, we tell you and the regulators the law requires.',
      ],
    },
    {
      id: 'rights',
      h: 'Your rights',
      p: [
        'Wherever you live, you can ask us for a copy of the personal information we hold about you, ask us to correct or delete it, and withdraw any consent you gave.',
        'European Economic Area, UK and Switzerland. You can also object to or restrict our use of your data, take a copy to another service, and complain to your data protection authority. You can object at any time to the use of your data for direct marketing, including profiling for it, and we then stop.',
        'California. You can ask what personal information we collect, use, disclose, sell or share, and ask us to delete or correct it. You can opt out of its sale or sharing as explained above. Someone you authorise can make a request for you.',
        'Other US states, including Virginia, Colorado, Connecticut and Texas. Where their laws apply, you can access, correct, delete and take a copy of your data, and opt out of targeted advertising, sale and profiling. If we refuse a request, you can appeal by replying to our answer, and if we still refuse, you can contact your state attorney general.',
        'Canada. You can access and correct your information and withdraw consent, and complain to the Office of the Privacy Commissioner of Canada, the Information and Privacy Commissioner for British Columbia, or the Commission d\'accès à l\'information du Québec.',
        'Brazil and other places. You have the rights your local law gives you.',
        'To use a right, delete in the app or email us. We check that the request comes from you, usually by asking you to confirm from your Multiverse ID or the email it uses. We answer within the time your local law sets. We do not treat you differently for using your rights.',
      ],
    },
    {
      id: 'limits',
      h: 'Limits in our terms',
      p: [
        'Our terms for these games set out how far we are responsible, including for other players\' content. Nothing in our terms limits your rights under privacy law.',
      ],
    },
    {
      id: 'changes',
      h: 'Changes to this policy',
      p: [
        'We post each new version here with a new date before the game version that needs it is released. For a change that matters, we also tell you in the games. A new use of your data comes with a new notice and, where the law asks for it, a new choice. Earlier versions stay posted.',
      ],
    },
  ],
  links: [
    { href: '/games/terms', label: 'Terms for these games' },
    { href: '/games/tower-draft/rules', label: 'Tower Draft game rules' },
    { href: '/games/privacy/v1', label: 'Version 1 of this policy' },
  ],
}

export const gamesTerms: LegalDoc = {
  title: 'Terms of service, Awesoon games and the Multiverse ID',
  updated: 'Version 3. Effective 23 November 2026. It replaces version 1, which stays posted.',
  lead: 'The short version. The full terms below govern.',
  short: [
    'You can play every game without an account. A Multiverse ID is optional.',
    'Play fair and be kind. The game rules say what gets a player removed, and you can appeal.',
    'Coins, lots, deeds and other game items are a licence to use in the game. They have no cash value, are not your property and cannot be sold for real money.',
    'Purchases go through the App Store or Google Play. They are final, except where the store or the law where you live gives you a refund.',
    'The games are provided as they are, and our responsibility is limited as far as the law allows. The law where you live may give you rights these terms cannot take away.',
  ],
  note: 'Applies to every Awesoon game, the Tower Draft web taster and the Multiverse ID. The privacy policy explains how we handle data; it is not part of these terms.',
  sections: [
    {
      id: 'agreement',
      h: 'Who we are and this agreement',
      p: [
        'These terms are an agreement between you and Awesoon Technologies Inc., a company in British Columbia, Canada (BC1381961), trading as Awesoon Technologies ("we", "us"). By playing a game or using a Multiverse ID, you agree to them. The game rules for each game, such as the Tower Draft game rules, are part of these terms.',
        'If you are under the age of majority where you live, a parent or guardian should read these terms with you.',
      ],
    },
    {
      id: 'licence',
      h: 'Your licence',
      p: [
        'The games are licensed, not sold. We give you a personal, limited, non-exclusive, non-transferable, revocable licence to use each game on devices you own or control, for your own play. You may not copy, sell, rent, redistribute or sublicense a game, take it apart to get at its code, or use bots, scripts or modified versions. We and our licensors keep every right we do not give you here.',
        'Apple\'s standard licence agreement also applies to games you get from the App Store. Where it and these terms differ for a game from the App Store, Apple\'s agreement governs.',
      ],
    },
    {
      id: 'id',
      h: 'Your Multiverse ID',
      p: [
        'A Multiverse ID is optional and open only from the digital consent age where you live, as the privacy policy explains. You keep your Apple or Google sign-in safe and are responsible for what happens under your ID. One person, one ID. You may not sell, share or transfer your ID. You can delete it at any time from any game\'s Settings or by writing to us.',
      ],
    },
    {
      id: 'conduct',
      h: 'Rules for everyone',
      p: [
        'These rules apply to every player of every age. Do not use the games to: break the law; harass, threaten, bully or harm anyone; share sexual content or anything that sexualises a minor; encourage suicide, self-harm or eating disorders; share anyone\'s personal information; spam or scam; or pretend to be someone else, including us.',
        'Do not cheat, exploit bugs, use bots or extra accounts, or buy, sell or trade accounts, towns, coins or items for real money or anything outside the game. Each game\'s rules add the details for that game.',
      ],
    },
    {
      id: 'items',
      h: 'Coins, lots, deeds and other game items',
      p: [
        'Coins, lots, deeds, buildings, looks and every other game item are part of the game. Whether you earn them or get them with a purchase, you receive only a limited, revocable licence to use them in our games. They are not your property, have no cash value, and cannot be exchanged for money, sold, or transferred outside the features the game offers. Coins you buy are never traded between players.',
        'We may change, rebalance, limit or remove game items, prices in coins and features, for example to fix a bug, keep the game fair or follow the law. We may hold or reverse items or results gained by breaking these terms. Rules for quiet towns and empty lots are in each game\'s rules and never apply to what you paid for or built.',
        'Nothing in our games is a real-world sale, a financial product or financial advice, and you cannot earn real money in them.',
      ],
    },
    {
      id: 'purchases',
      h: 'Purchases and refunds',
      p: [
        'Purchases are made through the App Store or Google Play, under their terms, and they take payment. Prices are shown in the store before you buy. All purchases are final and non-refundable, except as the store\'s refund process or the law where you live requires. To ask for a refund, use the store\'s process.',
        'If you are a consumer in the European Union or the UK, you may have a right to cancel a purchase within 14 days. For digital items delivered at once, that right can end when delivery starts, if you agreed to that when you bought. These terms do not take away any right that law gives you.',
      ],
    },
    {
      id: 'content',
      h: 'What you make in the games',
      p: [
        'Your towns, builds, stamps and anything else you make in the games stay yours, as far as they are yours to begin with. You give us a worldwide, non-exclusive, royalty-free licence to host, copy, show, adapt and share them in our games and pages, including showing your town to visitors on the Multiverse map, and to make engine-made towns and de-identified data from them, for as long as they are in the service and, for de-identified data and engine-made towns, without a time limit. Town names come from the game\'s word list.',
      ],
    },
    {
      id: 'others',
      h: 'Other players',
      p: [
        'Other players are responsible for what they do and send. We do not check everything in advance, and, as far as the law allows, we are not responsible for other players\' content or conduct. Use Hide, Block and Report whenever you need them.',
      ],
    },
    {
      id: 'enforcement',
      h: 'Reports, removals and appeals',
      p: [
        'We may remove content, limit features, or suspend or close a Multiverse ID that breaks these terms, the game rules or the law. When we do, we tell you what we did and why, unless the law or someone\'s safety prevents it. You can appeal once, as the game rules explain. We report illegal content to the authorities where the law requires it.',
      ],
    },
    {
      id: 'changes-to-games',
      h: 'Changes to the games and ending service',
      p: [
        'We may change, update or stop any game, feature or server at any time. If we end the Multiverse ID service or a game\'s online features, we give at least 30 days\' notice in the games, and the games keep working on your phone as far as they can without a server.',
        'You can stop at any time by deleting the games and your Multiverse ID. When your ID is closed, your licence to its game items ends and they are deleted, except where the law gives you a remedy.',
      ],
    },
    {
      id: 'as-is',
      h: 'No warranty',
      p: [
        'TO THE FULLEST EXTENT THE LAW ALLOWS, EACH GAME, THE MULTIVERSE ID, THE MAP AND EVERY FEATURE ARE PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTIES OF ANY KIND, INCLUDING ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. We do not promise that a game, server or feature will always be available, free of errors, or that saved progress or items will never be lost.',
      ],
    },
    {
      id: 'liability',
      h: 'Limit of liability',
      p: [
        'If you are a consumer in Quebec, this section does not apply to you.',
        'To the fullest extent the law allows, we are not liable for any indirect, incidental, special, consequential or punitive loss, or for loss of data, progress, coins or items, arising from the games or the Multiverse ID. Our total liability to you for all claims together is limited to the greater of what you paid us in the 12 months before the claim and 50 Canadian dollars.',
        'Nothing in these terms limits or excludes our liability for death or personal injury caused by our negligence, for fraud, or for gross negligence or wilful misconduct, or any right you have under consumer law where you live that cannot be limited, such as the UK Consumer Rights Act 2015, consumer law in the European Union, the Australian Consumer Law, the BC Business Practices and Consumer Protection Act or the Quebec Consumer Protection Act.',
      ],
    },
    {
      id: 'indemnity',
      h: 'Your responsibility',
      p: [
        'If you are a consumer in Quebec, this section does not apply to you.',
        'To the extent the law allows, if you break these terms or the law, you are responsible for the claims and costs that result. This does not apply where your local consumer law does not allow it.',
      ],
    },
    {
      id: 'disputes',
      h: 'Disputes and governing law',
      p: [
        'Write to us first; most problems are solved that way. These terms are governed by the laws of British Columbia and the federal laws of Canada that apply there, and the courts of British Columbia can hear disputes. If you are a consumer, you also keep the protection of the mandatory laws of the place where you live and can bring a claim in your local courts. There is no forced arbitration and no class action waiver.',
      ],
    },
    {
      id: 'stores',
      h: 'Who answers for what',
      p: [
        'We answer for the games, the Multiverse ID, support, claims about them, intellectual property and privacy. Apple and Google answer for payment, refunds and distribution through their stores, and are not responsible for the games or for support.',
      ],
    },
    {
      id: 'general',
      h: 'General',
      p: [
        'If part of these terms cannot be enforced, the rest still applies, and that part is enforced as far as the law allows. If we do not enforce a term at once, we can still enforce it later. We may transfer these terms to a buyer or successor of our business. We are not responsible for delays or failures caused by events outside our reasonable control. These terms, the game rules and Apple\'s licence agreement where it applies are the whole agreement about the games.',
      ],
    },
    {
      id: 'changes',
      h: 'Changes to these terms',
      p: [
        'We may change these terms when the games, the law or our services change. We post the new version here and, before a change that affects you takes effect, give at least 30 days\' notice in the games. If you do not accept a change, you can stop using the games and delete your Multiverse ID at no cost. Earlier versions stay posted.',
      ],
    },
  ],
  links: [
    { href: '/games/privacy', label: 'Privacy policy' },
    { href: '/games/tower-draft/rules', label: 'Tower Draft game rules' },
    { href: '/games/terms/v1', label: 'Version 1 of these terms' },
  ],
}

export const towerDraftRules: LegalDoc = {
  title: 'Tower Draft game rules',
  updated: 'Effective 23 November 2026. Each rule applies from the game version that has the feature.',
  lead: 'These rules keep Tower Draft fair and friendly. They are part of the terms for Awesoon games.',
  short: [
    'Play fair: no cheats, bots or extra accounts.',
    'Your town is shown by its word-list name, never your name.',
    'Only friends and same-age neighbours can visit, stamp or help.',
    'Coins and lots are game items with no cash value.',
    'Hide, Block and Report are on every card. You can appeal any decision once.',
  ],
  sections: [
    {
      id: 'fair-play',
      h: 'Fair play',
      p: [
        'Play the game as it is made. Do not use cheats, bots, scripts, modified apps or bugs to get coins, lots, ranks or results. Do not run extra accounts, or ask others to, to collect help pay, stamps or offers. Do not buy, sell or trade your Multiverse ID, your town, coins or lots for real money or anything outside the game.',
        'If you find a bug that gives an unfair edge, tell us at the address below. Reporting it is never held against you.',
      ],
    },
    {
      id: 'names',
      h: 'Town names and what visitors see',
      p: [
        'Your town gets its name from the game\'s word list. You cannot type a free name, so no one can put personal details or rude words in a town name.',
        'When your town is on the Multiverse map, visitors see a read-only picture of your town drawn from its build facts: buildings, roads, shape and its rank badge. They never see your player name, email, Apple or Google account, or where you live. The map shows no rankings of strangers.',
        'You choose whether your town is on the map, and you can take it off at any time. Taking it off removes every copy we ever showed.',
      ],
    },
    {
      id: 'visits',
      h: 'Visits',
      p: [
        'Friends, and neighbours on the map in your age group, can visit your town. A visit only looks. No visitor can build, change or take anything in your town.',
      ],
    },
    {
      id: 'stamps',
      h: 'Guest-book stamps',
      p: [
        'A friend who visits can leave one of 8 preset stamps. There is no text. Neighbours who are not your friends cannot stamp.',
        'You see the last 20 stamps. Each has Hide and Report. Blocking a player removes every stamp they left.',
      ],
    },
    {
      id: 'help-jobs',
      h: 'Help jobs',
      p: [
        'A town can ask for a builder on one of its own jobs. A friend, or a neighbour in the same age group, can lend an idle builder. The game pays the helper the job\'s normal pay. The town that asked pays for parts as usual and gives up that job\'s pay to finish sooner.',
        'No coins move between players, and bought coins never touch a help job. There are daily limits, and limits for each pair of players. Only your friends and neighbours see your town\'s job board.',
      ],
    },
    {
      id: 'friends',
      h: 'Friends',
      p: [
        'You add a friend only with an invite link or a friend code you share. Both people must agree. Friends are only within the same age group, so a request across age groups is refused. Nobody can find you by searching for your name, and we never suggest strangers.',
        'You can remove a friend at any time.',
      ],
    },
    {
      id: 'land',
      h: 'Land offers and quiet towns',
      p: [
        'Offers on land come only from friends or neighbours in your age group, and use coins earned in play.',
        'If a town with a Multiverse ID has no sign-in or sync for 180 days, a neighbour may buy one of its empty lots at the posted price. You are warned at 150 and 170 days, and signing in resets the count. Buildings, looks, bought coins and starting lots are never released. When you come back, you get a new lot beside your town and earned coins worth the higher of the price you paid or the sale price. Towns without a Multiverse ID never go quiet.',
      ],
    },
    {
      id: 'no-real-money',
      h: 'No real money',
      p: [
        'Coins, lots, deeds and buildings are game items. They have no cash value and are not your property. Streets, towns and citizens are invented, and nothing in Tower Draft is a real place, a real-world deal or financial advice. You cannot earn real money in Tower Draft.',
      ],
    },
    {
      id: 'report-block',
      h: 'Report and block',
      p: [
        'Hide, Block and Report are on every card that shows another player. Block works in every Awesoon game at once: that player can no longer visit, stamp, help or send you requests, and their stamps are removed.',
        'When you report, you get a receipt. A person on our team reviews the report and tells you the result.',
      ],
    },
    {
      id: 'removal',
      h: 'What gets a player removed',
      p: [
        'Depending on how serious it is and whether it happened before, we may warn you, hide your town from the map, turn off visits, stamps or help jobs for you, reverse coins or results, suspend your Multiverse ID, or close it.',
        'We close an ID at once, and tell the authorities where the law requires it, for anything that puts a child at risk, threats of violence, fraud, or selling accounts, towns or items for real money. Playing on your own phone is never taken away; a closed ID only ends the online features.',
        'When we act, we tell you what we did, which rule it was under, and why, unless the law or someone\'s safety prevents it.',
      ],
    },
    {
      id: 'appeals',
      h: 'Appeals',
      p: [
        'You can appeal any decision once, within 6 months, by replying to our notice or writing to the address below. Say what you think we got wrong. A person who did not make the first decision reviews it where we can, and we tell you the result and why. If we were wrong, we undo what we did.',
        'If you live where the law gives you other routes, such as an out-of-court body in the European Union, you keep them.',
      ],
    },
    {
      id: 'rule-changes',
      h: 'Changes to these rules',
      p: [
        'We may change these rules as the game changes. We post the new version here and tell you in the game before a change that affects you.',
      ],
    },
  ],
  links: [
    { href: '/games/terms', label: 'Terms' },
    { href: '/games/privacy', label: 'Privacy policy' },
  ],
}
