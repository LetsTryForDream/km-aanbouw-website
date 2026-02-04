export const site = {
  brand: {
    name: "KM Aanbouw",
    tagline: "Prefab & maatwerk aanbouwen zonder gedoe",
    short: "Meer ruimte. Slim gebouwd. Strak opgeleverd.",
    phone: "06 00 00 00 00",
    email: "info@kmaanbouw.nl",
    whatsapp: "06 00 00 00 00",
    serviceArea: "Randstad & omgeving",
    address: "Voorbeeldstraat 12, 1234 AB, Nederland",
    kvk: "00000000",
  },

  global: {
    primaryCta: { label: "Gratis offerte", href: "/contact#offerte" },
    secondaryCta: { label: "Kosten berekenen", href: "/aanbouw/aanbouw-kosten#calculator" },
    trustBadges: [
      { title: "Heldere planning", desc: "Je weet vooraf waar je aan toe bent: stappenplan + planning op papier." },
      { title: "Slimme prefabricage", desc: "Veel werk in de werkplaats → minder overlast aan huis." },
      { title: "Netjes & veilig", desc: "We werken afgeschermd, communiceren strak en leveren schoon op." },
      { title: "Energiezuinig", desc: "Focus op isolatie, kierdichting en comfort (afhankelijk van gekozen pakket)." },
    ],
  },

  nav: [
    { label: "Home", href: "/" },
    {
      label: "Aanbouw",
      children: [
        { label: "Prefab aanbouw", href: "/aanbouw/prefab-aanbouw" },
        { label: "Prefab uitbouw", href: "/aanbouw/prefab-uitbouw" },
        { label: "Traditionele aanbouw", href: "/aanbouw/traditionele-aanbouw" },
        { label: "Aanbouw kosten", href: "/aanbouw/aanbouw-kosten" },
        {
          label: "Opties",
          children: [
            { label: "Serre", href: "/opties/serre" },
            { label: "Keuken", href: "/opties/keuken" },
            { label: "Erker", href: "/opties/erker" },
            { label: "Garage", href: "/opties/garage" },
            { label: "Schuur", href: "/opties/schuur" },
            { label: "Kelder", href: "/opties/kelder" },
            { label: "Woonkamer", href: "/opties/woonkamer" },
            { label: "Slaapkamer", href: "/opties/slaapkamer" },
          ],
        },
        {
          label: "Werkgebieden",
          children: [
            { label: "Den Haag", href: "/werkgebieden/den-haag" },
            { label: "Pijnacker", href: "/werkgebieden/pijnacker" },
            { label: "Zoetermeer", href: "/werkgebieden/zoetermeer" },
            { label: "Leiden", href: "/werkgebieden/leiden" },
            { label: "Delft", href: "/werkgebieden/delft" },
            { label: "Alphen aan den Rijn", href: "/werkgebieden/alphen-aan-den-rijn" },
            { label: "Dordrecht", href: "/werkgebieden/dordrecht" },
            { label: "Hoofddorp", href: "/werkgebieden/hoofddorp" },
            { label: "Rotterdam", href: "/werkgebieden/rotterdam" },
          ],
        },
      ],
    },
    {
      label: "Opbouw",
      children: [{ label: "Prefab opbouw", href: "/opbouw/prefab-opbouw" }],
    },
    {
      label: "Dakkapel",
      children: [{ label: "Dakkapel laten plaatsen", href: "/dakkapel/dakkapel-laten-plaatsen" }],
    },
    { label: "Projecten", href: "/projecten" },
    {
      label: "Over ons",
      children: [
        { label: "Het bedrijf", href: "/over-ons/het-bedrijf" },
        { label: "Garanties", href: "/over-ons/garanties" },
        { label: "Blog", href: "/over-ons/blog" },
        { label: "Recensies", href: "/over-ons/recensies" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ],

  pages: {
    home: {
      meta: {
        title: "KM Aanbouw | Prefab & maatwerk aanbouw in Randstad & omgeving",
        description:
          "KM Aanbouw realiseert prefab aanbouwen, uitbouwen, opbouwen en dakkapellen met een strakke planning en minimale overlast. Bereken kosten online en vraag gratis een offerte aan.",
      },
      hero: {
        kicker: "Meer woonruimte, slimmer gebouwd",
        title: "Jouw aanbouw zonder maanden verbouwen.",
        subtitle:
          "Met prefabricage doen we veel werk vooraf. Dat betekent: kortere bouwtijd aan huis, minder rommel en een resultaat dat voelt als één geheel met je woning.",
        bullets: [
          "Kostenindicatie in 1 minuut",
          "Duidelijke stappen + vaste contactpersoon",
          "Prefab of traditioneel — wat past bij jouw huis",
        ],
        ctas: [
          { label: "Gratis offerte", href: "/contact#offerte", variant: "primary" },
          { label: "Kosten berekenen", href: "/aanbouw/aanbouw-kosten#calculator", variant: "secondary" },
        ],
      },
      sections: {
        uspsTitle: "Waarom KM Aanbouw?",
        usps: [
          { title: "Minder overlast", desc: "Slimme voorbereiding → minder hak- en breekwerkdagen." },
          { title: "Strakke afwerking", desc: "Details maken het verschil: aansluitingen, naden, afschot, kierdichting." },
          { title: "Transparant", desc: "Heldere keuzes: prefab/traditioneel, casco/sleutelklaar, opties per budget." },
        ],
        processTitle: "Zo pakken we het aan",
        process: [
          { step: "1", title: "Gratis intake", desc: "Je wensen, situatie en mogelijkheden in kaart." },
          { step: "2", title: "Inmeten & ontwerp", desc: "We vertalen jouw wensen naar een slim plan." },
          { step: "3", title: "Offerte & planning", desc: "Duidelijke scope, opties en een realistische planning." },
          { step: "4", title: "Productie & voorbereiding", desc: "Prefab onderdelen en logistiek strak geregeld." },
          { step: "5", title: "Montage & oplevering", desc: "Efficiënte bouwfase, netjes opgeleverd." },
          { step: "6", title: "Nazorg", desc: "We blijven bereikbaar en lossen puntjes snel op." },
        ],
        seoBlockTitle: "Waarvoor kun je bij ons terecht?",
        seoBlockText:
          "KM Aanbouw helpt je met prefab aanbouw, prefab uitbouw, traditionele aanbouw, prefab opbouw en dakkapellen. Van ontwerp en vergunning-check tot fundering, isolatie, kozijnen, elektra-voorbereiding en afwerking. Je kunt bij ons ook kiezen voor extra's zoals een lichtstraat, schuifpui of voorbereiding voor vloerverwarming.",
      },
      faq: [
        { q: "Wat is het verschil tussen een aanbouw en uitbouw?", a: "Een aanbouw is vaak een nieuwe ruimte als 'los' volume tegen de gevel. Een uitbouw vergroot meestal een bestaande ruimte (bijv. woonkamer/keuken) door de achtergevel te verplaatsen. In de praktijk lopen termen soms door elkaar — wij kijken vooral naar jouw situatie en constructie." },
        { q: "Hoe snel is een prefab aanbouw?", a: "Prefab betekent dat we veel onderdelen vooraf maken. De montage aan huis kan daardoor kort zijn. De totale doorlooptijd hangt af van ontwerp, voorbereiding, fundering en afwerking." },
        { q: "Heb ik een vergunning nodig?", a: "Dat verschilt per gemeente, maatvoering en situatie (bijv. beschermd stadsgezicht). We helpen je met een praktische check en adviseren wat je moet uitzoeken bij jouw gemeente." },
      ],
    },

    prefabAanbouw: {
      meta: {
        title: "Prefab aanbouw | Sneller extra ruimte met KM Aanbouw",
        description:
          "Prefab aanbouw laten plaatsen? KM Aanbouw realiseert extra woonruimte met korte bouwfase aan huis. Bekijk voordelen, soorten aanbouwen, kostenindicaties en vraag gratis offerte aan.",
      },
      hero: {
        kicker: "Prefab aanbouw",
        title: "Meer woonruimte. Minder bouwstress.",
        subtitle:
          "Een prefab aanbouw is ideaal als je snel extra vierkante meters wilt, met een korte bouwfase rondom je woning. Wij combineren prefabricage met maatwerk details voor een strakke aansluiting.",
        ctas: [
          { label: "Gratis offerte aanvragen", href: "/contact#offerte", variant: "primary" },
          { label: "Bekijk de voordelen", href: "#voordelen", variant: "secondary" },
        ],
      },
      usp: [
        { title: "Slimme prefabricage", desc: "We bereiden zoveel mogelijk voor in de werkplaats. Dat scheelt tijd aan huis." },
        { title: "Fundering passend bij jouw bodem", desc: "We kiezen de funderingsaanpak op basis van situatie en belasting." },
        { title: "Maatwerk waar het telt", desc: "Kozijnen, glas, indeling en afwerking afgestemd op jouw woonwensen." },
      ],
      sectionTabs: [
        { label: "Voordelen", targetId: "voordelen" },
        { label: "Soorten", targetId: "soorten" },
        { label: "Kosten", targetId: "kosten" },
        { label: "Werkwijze", targetId: "werkwijze" },
        { label: "Recensies", targetId: "recensies" },
        { label: "Offerte", targetId: "offerte" },
      ],
      voordelen: {
        title: "Voordelen van een prefab aanbouw",
        text:
          "Prefab bouwen is populair omdat je de 'rommel-periode' rond je huis kort houdt. Je krijgt sneller comfort, terwijl je toch veel keuzes behoudt in uitstraling en indeling.",
        bullets: [
          "Korte bouwfase aan huis (veel werk vooraf)",
          "Efficiënte planning en logistiek",
          "Goede basis voor hoge isolatiewaarden (pakket afhankelijk)",
          "Geschikt voor schuifpuien, lichtstraten en grote glaspartijen",
          "Verhoogt wooncomfort én vaak de woningwaarde",
        ],
        cta: { label: "Kosten berekenen", href: "/aanbouw/aanbouw-kosten#calculator" },
      },
      soorten: {
        title: "Naar welk type aanbouw ben je op zoek?",
        intro:
          "Iedere woning en wens is anders. Kies een richting — wij helpen je daarna met slimme keuzes in maatvoering, licht, routing en afwerking.",
        tabs: [
          {
            label: "Garage",
            title: "Garage aanbouw",
            text:
              "Extra bergruimte, hobbyruimte of zelfs een bijkeuken-idee? Een garage-aanbouw kan functioneel én strak ogen, zeker met de juiste deuren, ventilatie en vloeropbouw.",
            bullets: ["Praktisch & robuust", "Optie: extra geïsoleerd (voor werkruimte)", "Slimme toegang (loopdeur + sectionaal)"],
            link: { label: "Meer over garage", href: "/opties/garage" },
          },
          {
            label: "Kelder",
            title: "Kelder (maatwerk traject)",
            text:
              "Een kelder is meestal maatwerk door grondwerk en waterdichting. We denken mee over haalbaarheid, risico's en een aanpak die past bij jouw woning en budget.",
            bullets: ["Haalbaarheidscheck eerst", "Waterdichting & ventilatie cruciaal", "Ideaal voor opslag of techniekruimte"],
            link: { label: "Meer over kelder", href: "/opties/kelder" },
          },
          {
            label: "Serre",
            title: "Serre / licht aanbouwen",
            text:
              "Wil je vooral licht en verbinding met buiten? Dan draait het om glaskeuzes, zonwering, isolatie en comfort door het jaar heen.",
            bullets: ["Veel daglicht", "Opties: schuifpui, harmonicadeur, lichtstraat", "Comfort door slimme isolatie + zonwering"],
            link: { label: "Meer over serre", href: "/opties/serre" },
          },
          {
            label: "Dakopbouw",
            title: "Opbouw voor extra verdieping",
            text:
              "Wil je niet uitbouwen, maar boven uitbreiden? Dan kan een prefab opbouw interessant zijn. Snel monteren, veel winst in m².",
            bullets: ["Extra kamers boven", "Prefab montage mogelijk", "Constructieve check essentieel"],
            link: { label: "Meer over prefab opbouw", href: "/opbouw/prefab-opbouw" },
          },
        ],
      },
      kosten: {
        title: "Wat kost een prefab aanbouw?",
        intro:
          "De prijs hangt af van afmetingen, fundering, materiaalkeuze, afwerking en opties. Hieronder staan indicatieve voorbeelden (geen offerte).",
        table: [
          { size: "2 x 2 meter", price: "€ 29.000 – € 39.000" },
          { size: "3 x 2 meter", price: "€ 33.000 – € 45.000" },
          { size: "4 x 2 meter", price: "€ 38.000 – € 52.000" },
          { size: "5 x 2 meter", price: "€ 42.000 – € 60.000" },
          { size: "6 x 2 meter", price: "€ 46.000 – € 68.000" },
        ],
        note:
          "Let op: bodemgesteldheid en funderingskeuze kunnen invloed hebben op kosten. Ook keuzes in glas, deuren, lichtstraat en afwerking maken een groot verschil.",
        cta: { label: "Maak een snelle berekening", href: "/aanbouw/aanbouw-kosten#calculator" },
      },
      werkwijze: {
        title: "Prefab aanbouw plaatsen: zo werkt het",
        steps: [
          { step: "1", title: "Wensen & check", desc: "We bespreken jouw doel: extra woonkamer, keuken, berging of werkruimte." },
          { step: "2", title: "Inmeten", desc: "We meten en kijken naar aansluitingen, constructie en routing." },
          { step: "3", title: "Plan & keuzes", desc: "Prefab/traditioneel, casco/sleutelklaar, materialen en opties." },
          { step: "4", title: "Voorbereiding", desc: "Bestellingen, productie, planning en afstemming van de bouwfase." },
          { step: "5", title: "Bouw & montage", desc: "Korte, efficiënte fase aan huis; veiligheid en netheid staan voorop." },
          { step: "6", title: "Oplevering", desc: "Samen nalopen, opleveren en nazorgafspraak vastleggen." },
        ],
      },
      recensies: {
        title: "Klanten over KM Aanbouw",
        subtitle: "Korte lijnen, strakke oplevering en helder communiceren — dat is waar we op sturen.",
      },
      offerte: {
        title: "Vraag makkelijk een offerte aan",
        subtitle: "Laat je gegevens achter. We nemen contact op voor een korte intake en een gerichte offerte.",
        bullets: ["Reactie binnen 1 werkdag", "Heldere opties (casco/sleutelklaar)", "Kostenindicatie + planning"],
      },
      faq: [
        { q: "Is prefab altijd goedkoper dan traditioneel?", a: "Niet altijd. Prefab kan efficiënter zijn door kortere bouwtijd aan huis. Maar materiaalkeuzes, afwerking en complexiteit bepalen uiteindelijk de prijs." },
        { q: "Kan een prefab aanbouw volledig op maat?", a: "Ja, tot op zekere hoogte. Prefab gaat vooral over de manier van bouwen (voorbereiding vooraf). Binnen dat kader kunnen we veel afstemmen op jouw situatie." },
        { q: "Hoe zit het met isolatie en comfort?", a: "We kiezen isolatie en glas op basis van jouw doelen (comfort/energie). Denk aan kierdichting, ventilatie en thermische onderbrekingen." },
      ],
    },

    prefabUitbouw: {
      meta: {
        title: "Prefab uitbouw | Vergroot je woonkamer of keuken met KM Aanbouw",
        description:
          "Prefab uitbouw laten plaatsen? Vergroot je bestaande ruimte met korte bouwfase aan huis. Lees over opties, kostenfactoren en vraag een offerte aan.",
      },
      hero: {
        kicker: "Prefab uitbouw",
        title: "Meer ruimte in je woonkamer of keuken.",
        subtitle:
          "Een uitbouw vergroot meestal een bestaande ruimte. Denk aan extra leefruimte, een grotere keukenopstelling of meer licht. Prefab voorbereiding helpt om de overlast te beperken.",
        ctas: [
          { label: "Gratis offerte", href: "/contact#offerte", variant: "primary" },
          { label: "Kosten berekenen", href: "/aanbouw/aanbouw-kosten#calculator", variant: "secondary" },
        ],
      },
      content: {
        title: "Prefab uitbouw: snel en comfortabel",
        paragraphs: [
          "Bij een uitbouw verschuift vaak de achtergevel en ontstaat er één grotere ruimte. Dat vraagt om slimme keuzes in constructie, licht en indeling.",
          "We kijken naar draaglijnen, doorbraken, leidingen en afwerking — zodat het eindresultaat voelt alsof het altijd zo is geweest.",
        ],
        bullets: [
          "Ideaal voor woonkamer/keuken",
          "Opties: schuifpui, lichtstraat, extra stopcontacten voorbereiding",
          "Focus op comfort: isolatie, ventilatie en licht",
        ],
      },
      faq: [
        { q: "Is een uitbouw mogelijk bij een tussenwoning?", a: "Vaak wel, maar check altijd de mogelijkheden, burenafstand en gemeentelijke regels. Wij helpen je met een praktische route." },
        { q: "Moet mijn keuken eruit tijdens de bouw?", a: "Soms wel, soms niet. Dat hangt af van doorbraken, leidingwerk en planning. We bespreken dit vooraf zodat je niet verrast wordt." },
      ],
    },

    traditioneleAanbouw: {
      meta: {
        title: "Traditionele aanbouw op maat | KM Aanbouw",
        description:
          "Traditionele aanbouw laten bouwen? Volledig maatwerk met maximale ontwerpvrijheid. Ontdek voordelen, kostenfactoren en het proces.",
      },
      hero: {
        kicker: "Traditionele aanbouw",
        title: "Maximale vrijheid in ontwerp en details.",
        subtitle:
          "Traditioneel bouwen is ideaal als je veel maatwerk wilt: bijzondere vormen, metselwerk-details of een unieke indeling. We bouwen stap voor stap op locatie, met focus op kwaliteit.",
        ctas: [
          { label: "Gratis offerte", href: "/contact#offerte", variant: "primary" },
          { label: "Plan een adviesgesprek", href: "/contact", variant: "secondary" },
        ],
      },
      content: {
        title: "Wanneer kies je traditioneel?",
        paragraphs: [
          "Traditionele bouw kan passend zijn als je woning specifieke eisen heeft, of als je een uitstraling wilt die perfect aansluit op bestaand metselwerk.",
          "De bouwfase aan huis duurt meestal langer dan bij prefab, maar je krijgt veel flexibiliteit terug in ontwerp en detaillering.",
        ],
        bullets: [
          "Veel ontwerpvrijheid",
          "Sterke aansluiting op bestaande stijl",
          "Geschikt voor complexere maatwerkoplossingen",
        ],
      },
      faq: [
        { q: "Is traditioneel altijd duurder?", a: "Niet per se. Het hangt af van complexiteit, materiaal, afwerking en planning. We zetten opties naast elkaar zodat je kunt kiezen." },
      ],
    },

    aanbouwKosten: {
      meta: {
        title: "Aanbouw kosten berekenen | KM Aanbouw",
        description:
          "Bereken de kosten van jouw aanbouw of uitbouw. Kies afmetingen, type bouw, afwerking en opties. Ontvang direct een indicatieve prijsrange en vraag een offerte aan.",
      },
      hero: {
        kicker: "Aanbouw kosten",
        title: "Kosten berekenen in 1 minuut.",
        subtitle:
          "Kies je maatvoering en opties. Je krijgt direct een indicatieve prijsrange en ziet welke keuzes het meeste impact hebben.",
        ctas: [
          { label: "Start calculator", href: "#calculator", variant: "primary" },
          { label: "Gratis offerte", href: "/contact#offerte", variant: "secondary" },
        ],
      },
      explain: {
        title: "Welke factoren bepalen de prijs?",
        bullets: [
          "Afmetingen (breedte × diepte) en hoogte",
          "Fundering (situatie- en bodemafhankelijk)",
          "Casco vs sleutelklaar afwerking",
          "Glas/kozijnen (HR++, HR+++), schuifpui, lichtstraat",
          "Installaties (elektra/verwarming voorbereiding)",
          "Materiaalkeuze en gewenste uitstraling",
        ],
        note:
          "Deze calculator is een indicatie. Voor een scherpe prijs maken we een offerte op basis van jouw woning en wensen.",
      },
      faq: [
        { q: "Kan ik ook dakkapel of opbouw berekenen?", a: "Ja. Kies in het offerteblok of via de pagina's voor dakkapel/opbouw. Voor een exacte berekening is er altijd een korte intake nodig." },
      ],
    },

    prefabOpbouw: {
      meta: {
        title: "Prefab opbouw | Extra verdieping met KM Aanbouw",
        description:
          "Prefab opbouw laten plaatsen? Creëer extra slaapkamers of een werkkamer op zolder met een slimme, snelle aanpak. Lees proces, aandachtspunten en vraag een offerte aan.",
      },
      hero: {
        kicker: "Prefab opbouw",
        title: "Meer kamers zonder uit te bouwen.",
        subtitle:
          "Een opbouw kan veel ruimte opleveren. We starten altijd met een constructieve check en een plan dat past bij jouw woning.",
        ctas: [
          { label: "Gratis offerte", href: "/contact#offerte", variant: "primary" },
          { label: "Bekijk projecten", href: "/projecten", variant: "secondary" },
        ],
      },
      content: {
        title: "Belangrijk bij een opbouw",
        bullets: [
          "Constructieve draagkracht (essentieel)",
          "Vergunning/regels per gemeente",
          "Aansluiting op dak en waterdichting",
          "Geluid, isolatie en ventilatie",
        ],
      },
    },

    dakkapel: {
      meta: {
        title: "Dakkapel laten plaatsen | KM Aanbouw",
        description:
          "Dakkapel laten plaatsen? Meer ruimte en licht op zolder met een strakke afwerking. Bekijk opties, planning en vraag gratis een offerte aan.",
      },
      hero: {
        kicker: "Dakkapel",
        title: "Meer licht en stahoogte in één dag verschil.",
        subtitle:
          "Een dakkapel maakt je zolder direct bruikbaarder. We helpen je kiezen tussen maatvoering, materialen, isolatie en afwerking.",
        ctas: [
          { label: "Gratis offerte", href: "/contact#offerte", variant: "primary" },
          { label: "Bel of WhatsApp", href: "/contact", variant: "secondary" },
        ],
      },
      content: {
        title: "Opties voor jouw dakkapel",
        bullets: [
          "Materiaal: onderhoudsarm of houtlook",
          "Indeling: 1–3 ramen, draai-kiep, ventilatieroosters",
          "Afwerking: binnenzijde casco of (bijna) compleet",
          "Isolatiepakket passend bij comfortwens",
        ],
      },
    },

    aboutCompany: {
      meta: {
        title: "Het bedrijf | KM Aanbouw",
        description:
          "Maak kennis met KM Aanbouw. Onze werkwijze, waarden en hoe we projecten van intake tot oplevering organiseren.",
      },
      hero: {
        kicker: "Over ons",
        title: "Bouwen met aandacht voor detail.",
        subtitle:
          "Wij geloven dat een aanbouw pas echt goed is als hij klopt in gebruik én in afwerking. Daarom werken we met een helder proces en duidelijke communicatie.",
        ctas: [
          { label: "Bekijk werkwijze", href: "/aanbouw/prefab-aanbouw#werkwijze", variant: "secondary" },
          { label: "Contact", href: "/contact", variant: "primary" },
        ],
      },
      content: {
        title: "Waar we voor staan",
        bullets: [
          "Afspraak is afspraak",
          "Netjes werken en schoon opleveren",
          "Transparante keuzes en realistische planning",
          "Comfort en energiezuinigheid meenemen in ontwerp",
        ],
      },
    },

    guarantees: {
      meta: {
        title: "Garanties | KM Aanbouw",
        description:
          "Garantie en nazorg bij KM Aanbouw. Lees hoe we opleveren, welke afspraken je krijgt en hoe we nazorg organiseren.",
      },
      hero: {
        kicker: "Garanties",
        title: "Garantie op papier. Nazorg in de praktijk.",
        subtitle:
          "Na oplevering wil je zekerheid. Daarom leggen we afspraken vast en blijven we bereikbaar voor puntjes en vragen.",
        ctas: [{ label: "Vraag offerte", href: "/contact#offerte", variant: "primary" }],
      },
      content: {
        title: "Wat je van ons mag verwachten",
        bullets: [
          "Oplevering met checklist en duidelijke afspraken",
          "Nazorgmoment voor kleine afwerkpunten",
          "Heldere communicatie over voorwaarden en scope",
          "Transparant over wat wel/niet inbegrepen is",
        ],
        note:
          "Exacte garantievoorwaarden hangen af van gekozen uitvoering en onderdelen. Je ontvangt altijd duidelijke projectafspraken bij offerte/opdracht.",
      },
    },

    reviews: {
      meta: {
        title: "Recensies | KM Aanbouw",
        description:
          "Lees ervaringen van klanten met KM Aanbouw. Heldere planning, nette oplevering en duidelijke communicatie.",
      },
      hero: {
        kicker: "Recensies",
        title: "Ervaringen van klanten",
        subtitle:
          "We meten succes niet alleen in m², maar ook in rust tijdens het traject en tevredenheid na oplevering.",
        ctas: [{ label: "Gratis offerte", href: "/contact#offerte", variant: "primary" }],
      },
    },

    contact: {
      meta: {
        title: "Contact & gratis offerte | KM Aanbouw",
        description:
          "Neem contact op met KM Aanbouw voor een prefab aanbouw, uitbouw, opbouw of dakkapel. Vraag gratis een offerte aan of stuur een bericht.",
      },
      hero: {
        kicker: "Contact",
        title: "Vertel ons jouw plan.",
        subtitle:
          "Je krijgt een snelle reactie en een helder vervolg: intake → inmeten → offerte → planning.",
        ctas: [
          { label: "Ga naar offerteformulier", href: "#offerte", variant: "primary" },
          { label: "Bel direct", href: "tel:0600000000", variant: "secondary" },
        ],
      },
      infoBlocks: [
        { title: "Telefoon", desc: "06 00 00 00 00" },
        { title: "E-mail", desc: "info@kmaanbouw.nl" },
        { title: "Werkgebied", desc: "Randstad & omgeving" },
      ],
    },

    projecten: {
      meta: {
        title: "Projecten | KM Aanbouw",
        description: "Bekijk onze gerealiseerde projecten. Prefab en traditionele aanbouwen in de Randstad.",
      },
      hero: {
        kicker: "Projecten",
        title: "Wat we hebben gerealiseerd",
        subtitle: "Van kleine uitbouw tot complete aanbouw met dakkapel. Bekijk onze projecten en laat je inspireren.",
        ctas: [{ label: "Gratis offerte", href: "/contact#offerte", variant: "primary" }],
      },
    },
  },

  optionPages: [
    { slug: "serre", title: "Serre aanbouw", hook: "Meer licht, meer verbinding met buiten.", focus: ["Glas & zonwering", "Isolatie & comfort", "Schuifpui en lichtstraat opties"] },
    { slug: "keuken", title: "Keuken aanbouw", hook: "Ruimte voor koken, leven en samenzijn.", focus: ["Indeling & routing", "Leidingen en elektra", "Licht en ventilatie"] },
    { slug: "erker", title: "Erker", hook: "Meer karakter én extra ruimte aan de voorzijde.", focus: ["Uitstraling passend bij gevel", "Daglicht & zichtlijnen", "Constructieve details"] },
    { slug: "garage", title: "Garage aanbouw", hook: "Praktische ruimte met slimme toegang.", focus: ["Robuuste afwerking", "Isolatie (optioneel)", "Deuren en ventilatie"] },
    { slug: "schuur", title: "Schuur / berging", hook: "Opslag zonder concessies aan uitstraling.", focus: ["Materialen", "Beveiliging", "Indeling & toegankelijkheid"] },
    { slug: "kelder", title: "Kelder (maatwerk)", hook: "Meer ruimte onder je woning — als het kan.", focus: ["Haalbaarheid", "Waterdichting", "Ventilatie"] },
    { slug: "woonkamer", title: "Woonkamer aanbouw", hook: "Maak je woonkamer groter en lichter.", focus: ["Grote glaspartijen", "Vloeropbouw", "Comfort door isolatie"] },
    { slug: "slaapkamer", title: "Slaapkamer aanbouw", hook: "Extra slaapkamer of levensloopbestendig wonen.", focus: ["Rust & akoestiek", "Isolatie", "Indeling & privacy"] },
  ],

  workAreas: [
    { slug: "den-haag", name: "Den Haag", intro: "Van stadswoningen tot gezinswoningen: we denken mee met ruimtewinst en een nette aansluiting op de bestaande bouw." },
    { slug: "pijnacker", name: "Pijnacker", intro: "We helpen je met een aanbouw die past bij jouw wijk en woonwensen, met een helder proces en strakke planning." },
    { slug: "zoetermeer", name: "Zoetermeer", intro: "Meer leefruimte creëren zonder eindeloze verbouwing? We zetten de stappen praktisch en overzichtelijk." },
    { slug: "leiden", name: "Leiden", intro: "We kijken zorgvuldig naar constructie, routing en afwerking zodat de uitbreiding natuurlijk aanvoelt." },
    { slug: "delft", name: "Delft", intro: "Slimme prefab voorbereiding kan de bouwfase aan huis beperken — ideaal als je snel resultaat wilt." },
    { slug: "alphen-aan-den-rijn", name: "Alphen aan den Rijn", intro: "We realiseren aanbouwen en uitbouwen met focus op comfort, licht en een strakke oplevering." },
    { slug: "dordrecht", name: "Dordrecht", intro: "Van ontwerp tot oplevering: één team, één planning, duidelijke keuzes." },
    { slug: "hoofddorp", name: "Hoofddorp", intro: "We maken jouw woning ruimer met een aanpak die past bij jouw budget en wensen." },
    { slug: "rotterdam", name: "Rotterdam", intro: "In een dynamische stad is een korte bouwfase extra fijn. Wij organiseren het traject strak en netjes." },
  ],

  testimonials: [
    { name: "S. de V.", place: "Rotterdam", title: "Strakke planning, weinig gedoe", text: "Vanaf intake tot oplevering wisten we precies wat er ging gebeuren. De bouwfase was kort en netjes.", rating: 5 },
    { name: "M. K.", place: "Den Haag", title: "Goede communicatie", text: "Heldere keuzes vooraf en tijdens de bouw snel schakelen. Afwerking is precies wat we hoopten.", rating: 5 },
    { name: "J. & L.", place: "Delft", title: "Aanbouw voelt 'origineel'", text: "De aansluiting op het huis is heel strak. Het voelt alsof het altijd zo is geweest.", rating: 5 },
    { name: "A. B.", place: "Leiden", title: "Fijn team", text: "Vriendelijke mensen, duidelijke afspraken en oplevering met checklist. Prettig traject.", rating: 5 },
    { name: "R. P.", place: "Zoetermeer", title: "Kosten helder uitgelegd", text: "We kregen goed inzicht in wat opties kosten en wat zinvol was. Geen verrassingen.", rating: 4 },
    { name: "N. H.", place: "Hoofddorp", title: "Meer licht en ruimte", text: "Met schuifpui en lichtstraat is het echt een andere woning geworden. Erg tevreden.", rating: 5 },
    { name: "T. W.", place: "Rotterdam", title: "Alles netjes opgeruimd", text: "Bouwplaats was elke dag schoon. Dat maakt een groot verschil als je er woont.", rating: 5 },
    { name: "L. M.", place: "Pijnacker", title: "Snelle oplevering", text: "Binnen de afgesproken tijd klaar. Geen uitloop, geen gedoe.", rating: 5 },
    { name: "F. J.", place: "Dordrecht", title: "Goed advies over opties", text: "We twijfelden over lichtstraat of schuifpui. Het advies hielp ons kiezen.", rating: 4 },
    { name: "E. K.", place: "Alphen aan den Rijn", title: "Tevreden over resultaat", text: "De aanbouw is precies wat we voor ogen hadden. Strak en passend bij ons huis.", rating: 5 },
  ],

  projects: [
    { slug: "prefab-aanbouw-lichtstraat", title: "Prefab aanbouw met lichtstraat", place: "Den Haag", type: "Prefab", summary: "Extra leefruimte met veel daglicht en strakke aansluiting.", bullets: ["Lichtstraat", "Schuifpui voorbereiding", "Isolatiepakket comfort"], images: [] },
    { slug: "woonkamer-uitbouw-achterzijde", title: "Woonkamer uitbouw achterzijde", place: "Rotterdam", type: "Prefab", summary: "Woonkamer vergroot met optimale routing en extra licht.", bullets: ["Doorbraak & draaglijn", "Nieuwe pui", "Elektra voorbereiding"], images: [] },
    { slug: "traditionele-aanbouw-metselwerk", title: "Traditionele aanbouw met metselwerk look", place: "Leiden", type: "Traditioneel", summary: "Maatwerk uitstraling passend bij bestaande gevel.", bullets: ["Details in metselwerk", "Kozijnindeling op maat", "Afwerking sleutelklaar"], images: [] },
    { slug: "serre-aanbouw-schuifpui", title: "Serre aanbouw met schuifpui", place: "Delft", type: "Prefab", summary: "Lichte aanbouw met grote schuifpui voor maximale verbinding met de tuin.", bullets: ["Grote schuifpui", "Zonwering voorbereid", "Hoge isolatiewaarde"], images: [] },
    { slug: "garage-aanbouw-werkplaats", title: "Garage met werkplaats", place: "Zoetermeer", type: "Traditioneel", summary: "Ruime garage met geïsoleerde werkplaats voor hobbygebruik.", bullets: ["Sectionaaldeur", "Isolatie voor werkruimte", "Extra stroomaansluiting"], images: [] },
    { slug: "keuken-uitbouw-modern", title: "Moderne keukenuitbouw", place: "Hoofddorp", type: "Prefab", summary: "Compacte uitbouw voor een ruimere, lichtere keuken.", bullets: ["Nieuwe keukenopstelling", "Lichtstraat boven werkblad", "Vloerverwarming voorbereiding"], images: [] },
  ],

  blog: [
    {
      slug: "prefab-vs-traditioneel-wat-past",
      title: "Prefab vs traditioneel: wat past bij jouw woning?",
      date: "2026-01-10",
      excerpt: "De keuze hangt af van planning, ontwerpvrijheid, afwerking en budget. Zo maak je een slimme afweging.",
      readingTime: "6 min",
      content: [
        "Prefab gaat vooral over de manier van bouwen: veel voorbereiding vooraf en een kortere bouwfase aan huis.",
        "Traditioneel is interessant als je maximale vrijheid wilt in vorm, details en maatwerk.",
        "Maak een lijst met 'must-haves' (licht, indeling, budget, timing) en toets daarop."
      ],
    },
    {
      slug: "aanbouw-kosten-welke-keuzes-tellen",
      title: "Aanbouw kosten: welke keuzes maken écht verschil?",
      date: "2026-01-05",
      excerpt: "Afmetingen zijn belangrijk, maar glas, afwerking en fundering sturen de prijs vaak het meest.",
      readingTime: "5 min",
      content: [
        "Grote glaspartijen en schuifpuien kunnen comfort én prijs sterk beïnvloeden.",
        "Casco is goedkoper, maar reken tijd/budget voor afbouw mee.",
        "Fundering is situatie-afhankelijk: laat je goed adviseren."
      ],
    },
    {
      slug: "vergunning-check-snel-starten",
      title: "Vergunning-check: zo start je zonder vertraging",
      date: "2026-01-02",
      excerpt: "Regels verschillen per gemeente. Met deze checklist voorkom je onnodige vertraging.",
      readingTime: "4 min",
      content: [
        "Check altijd je gemeente voor regels rondom uitbouwen/aanbouwen, zeker bij hoekpercelen en beschermde gebieden.",
        "Zorg dat je maatvoering, tekeningen en situatietekening op orde hebt.",
        "Begin op tijd: wachttijden verschillen."
      ],
    },
  ],
};
