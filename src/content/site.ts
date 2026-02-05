export const site = {
  brand: {
    name: "KM Aanbouw",
    tagline: "Aanbouw, Opbouw & Dakkapel in heel Nederland",
    short: "Extra ruimte bouwen met duidelijke afspraken.",
    phone: "06 00 00 00 00",
    email: "info@kmaanbouw.nl",
    whatsapp: "06 00 00 00 00",
    serviceArea: "heel Nederland",
    address: "[adres/locatie invullen indien van toepassing]",
    kvk: "00000000",
  },

  global: {
    primaryCta: { label: "Gratis offerte aanvragen", href: "/gratis-offerte" },
    secondaryCta: { label: "Adviesgesprek plannen", href: "/contact" },
    trustBadges: [
      { title: "Heldere offerte en planning", desc: "Je weet vooraf waar je aan toe bent." },
      { title: "Meedenken over indeling", desc: "Lichtinval en isolatie goed afgestemd." },
      { title: "Prefab of traditioneel", desc: "Sneller of maximaal maatwerk — wat past bij jouw huis." },
      { title: "Focus op comfort", desc: "Isolatie, ventilatie, passende beglazing (HR++/triple)." },
      { title: "Netjes werken", desc: "Bescherming, korte lijnen en duidelijke afspraken." },
    ],
  },

  nav: [
    { label: "Home", href: "/" },
    {
      label: "Aanbouw",
      href: "/aanbouw",
      children: [
        { label: "Prefab aanbouw", href: "/aanbouw/prefab-aanbouw" },
        { label: "Prefab uitbouw", href: "/aanbouw/prefab-uitbouw" },
        { label: "Traditionele aanbouw", href: "/aanbouw/traditionele-aanbouw" },
        { label: "Aanbouw kosten", href: "/aanbouw/aanbouw-kosten" },
        {
          label: "Opties",
          href: "/aanbouw/opties",
          children: [
            { label: "Serre", href: "/aanbouw/opties/serre" },
            { label: "Keukenaanbouw", href: "/aanbouw/opties/keukenaanbouw" },
            { label: "Erker", href: "/aanbouw/opties/erker" },
            { label: "Garage", href: "/aanbouw/opties/garage" },
            { label: "Schuur", href: "/aanbouw/opties/schuur" },
            { label: "Kelder", href: "/aanbouw/opties/kelder" },
            { label: "Woonkamer", href: "/aanbouw/opties/woonkamer" },
            { label: "Slaapkamer", href: "/aanbouw/opties/slaapkamer" },
          ],
        },
        {
          label: "Werkgebieden",
          href: "/werkgebieden",
          children: [
            { label: "Den Haag", href: "/werkgebieden/den-haag" },
            { label: "Rotterdam", href: "/werkgebieden/rotterdam" },
            { label: "Leiden", href: "/werkgebieden/leiden" },
            { label: "Delft", href: "/werkgebieden/delft" },
            { label: "Zoetermeer", href: "/werkgebieden/zoetermeer" },
            { label: "Pijnacker", href: "/werkgebieden/pijnacker" },
          ],
        },
      ],
    },
    {
      label: "Opbouw",
      href: "/opbouw",
      children: [{ label: "Dakopbouw / opbouw", href: "/opbouw/prefab-opbouw" }],
    },
    {
      label: "Dakkapel",
      href: "/dakkapel",
      children: [{ label: "Dakkapel laten plaatsen", href: "/dakkapel/dakkapel-laten-plaatsen" }],
    },
    { label: "Projecten", href: "/projecten" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ],

  footerNav: [
    { label: "Garanties", href: "/garanties" },
    { label: "Recensies", href: "/recensies" },
    { label: "Blog", href: "/blog" },
    { label: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
    { label: "Privacy", href: "/privacy" },
  ],

  pages: {
    home: {
      meta: {
        title: "KM Aanbouw | Aanbouw, Opbouw & Dakkapel in heel Nederland",
        description:
          "Meer ruimte nodig? KM Aanbouw realiseert prefab en traditionele aanbouwen, dakopbouwen en dakkapellen. Snel gebouwd, strak afgewerkt. Gratis offerte.",
      },
      hero: {
        kicker: "Meer ruimte. Slimmer gebouwd.",
        title: "Aanbouw, opbouw of dakkapel? KM Aanbouw regelt extra ruimte — door heel Nederland.",
        subtitle:
          "Meer licht, meer ruimte en meer wooncomfort zonder verhuizen. KM Aanbouw bouwt aanbouwen, uitbouwen, dakopbouwen en dakkapellen voor woningen door heel Nederland. Van eerste idee tot oplevering: één aanspreekpunt, duidelijke planning en een resultaat dat klopt.",
        bullets: [
          "Heldere offerte en realistische planning",
          "Meedenken over indeling, lichtinval en isolatie",
          "Prefab (sneller) of traditioneel maatwerk",
        ],
        ctas: [
          { label: "Gratis offerte aanvragen", href: "/gratis-offerte", variant: "primary" },
          { label: "Adviesgesprek plannen", href: "/contact", variant: "secondary" },
        ],
      },
      sections: {
        solutionsTitle: "Populaire oplossingen",
        solutions: [
          { title: "Aanbouw / uitbouw", desc: "Achter, zij of hoek — meer leefruimte, grotere keuken of extra kamer", href: "/aanbouw" },
          { title: "Dakopbouw", desc: "Een volledige extra verdieping of extra slaapkamers", href: "/opbouw" },
          { title: "Dakkapel", desc: "Snel meer licht en stahoogte op zolder", href: "/dakkapel" },
        ],
        uspsTitle: "Waarom KM Aanbouw",
        usps: [
          { title: "Heldere offerte en planning", desc: "Je weet vooraf waar je aan toe bent: stappenplan + planning op papier." },
          { title: "Meedenken over indeling", desc: "Lichtinval en isolatie goed afgestemd op jouw wensen." },
          { title: "Prefab of traditioneel", desc: "Mogelijk als prefab (sneller) of traditioneel maatwerk." },
          { title: "Focus op comfort", desc: "Isolatie, ventilatie, passende beglazing (HR++/triple waar passend)." },
          { title: "Netjes werken", desc: "Bescherming, korte lijnen en duidelijke afspraken." },
        ],
        processTitle: "Zo werken wij (5 stappen)",
        process: [
          { step: "1", title: "Kennismaking + wensen", desc: "Ruimte, stijl, budget — we brengen alles in kaart." },
          { step: "2", title: "Inmeten + ontwerp", desc: "Indeling, kozijnen en licht worden uitgewerkt." },
          { step: "3", title: "Constructie/vergunning-check", desc: "Waar nodig regelen we de check." },
          { step: "4", title: "Bouw/plaatsing", desc: "Prefab of traditioneel — afhankelijk van jouw keuze." },
          { step: "5", title: "Afwerking + oplevering", desc: "Met opleverpuntenlijst en nazorg." },
        ],
        werkgebiedTitle: "Werkgebied: heel Nederland",
        werkgebiedText:
          "KM Aanbouw werkt door heel Nederland, inclusief Randstad, Brabant, Limburg, Gelderland, Overijssel, Groningen, Friesland, Drenthe, Flevoland en Zeeland. Zie de pagina 'Werkgebieden' voor alle steden.",
      },
      faq: [
        {
          q: "Heb ik een vergunning nodig?",
          a: "Dat hangt af van afmetingen, locatie (voor/achter/zij), gemeenteregels en woningtype. Wij helpen met de check en voorbereiding.",
        },
        {
          q: "Wat is sneller: prefab of traditioneel?",
          a: "Prefab is vaak sneller op locatie; traditioneel is ideaal bij complexe maatwerkdetails.",
        },
      ],
    },

    aanbouw: {
      meta: {
        title: "Aanbouw laten plaatsen | KM Aanbouw (Prefab & Traditioneel)",
        description:
          "Aanbouw of uitbouw laten plaatsen? KM Aanbouw bouwt prefab en traditionele aanbouwen met focus op isolatie, licht en afwerking. Gratis offerte.",
      },
      hero: {
        kicker: "Aanbouw",
        title: "Aanbouw laten plaatsen: meer ruimte, meer waarde, meer comfort",
        subtitle:
          "Een aanbouw is een van de meest effectieve manieren om je woning te vergroten. Denk aan een grotere woonkamer, een leefkeuken, een extra (werk)kamer of zelfs een slaapkamer op de begane grond. KM Aanbouw bouwt zowel prefab aanbouwen (snel) als traditionele aanbouwen (maximaal maatwerk).",
        ctas: [
          { label: "Gratis offerte aanvragen", href: "/gratis-offerte", variant: "primary" },
        ],
      },
      types: [
        { title: "Prefab aanbouw", desc: "Snelle plaatsing, strak proces, voorspelbare planning", href: "/aanbouw/prefab-aanbouw" },
        { title: "Prefab uitbouw", desc: "Vaak achterzijde woning voor extra leefkeuken/woonkamer", href: "/aanbouw/prefab-uitbouw" },
        { title: "Traditionele aanbouw", desc: "Ideaal bij bijzondere wensen, metselwerk en detailafstemming", href: "/aanbouw/traditionele-aanbouw" },
        { title: "Aanbouw-opties", desc: "Serre, keukenaanbouw, erker, garage, schuur, kelder, woonkamer, slaapkamer", href: "/aanbouw/opties" },
      ],
      quality: {
        title: "Waar letten we op (kwaliteit)",
        bullets: [
          "Fundering en constructieve veiligheid",
          "Naadloze aansluiting op bestaande woning (isolatie en waterdicht)",
          "Lichtplan: ramen/puien/koepels op logische plekken",
          "Installaties: elektra, verwarming/vloerverwarming, ventilatie",
          "Afwerking: stuc, tegels, schilderwerk, plinten, vloer (in overleg)",
        ],
      },
    },

    prefabAanbouw: {
      meta: {
        title: "Prefab aanbouw | Snel extra ruimte met KM Aanbouw",
        description:
          "Prefab aanbouw laten plaatsen? Snelle bouwtijd, strakke planning en hoge kwaliteit. KM Aanbouw werkt door heel Nederland. Gratis offerte.",
      },
      hero: {
        kicker: "Prefab aanbouw",
        title: "Prefab aanbouw: snel, strak en efficiënt gebouwd",
        subtitle:
          "Met een prefab aanbouw wordt (een groot deel van) de aanbouw vooraf geproduceerd. Daardoor is de bouwtijd op locatie vaak korter en is de planning beter beheersbaar. Ideaal als je snel extra ruimte wilt met minimale overlast.",
        ctas: [
          { label: "Gratis offerte aanvragen", href: "/gratis-offerte", variant: "primary" },
          { label: "Bekijk de voordelen", href: "#voordelen", variant: "secondary" },
        ],
      },
      voordelen: {
        title: "Voordelen van prefab",
        bullets: [
          "Snellere realisatie op locatie",
          "Constante kwaliteit door gecontroleerde productie",
          "Minder afhankelijk van weer en doorlooptijd",
          "Efficiënt materiaalgebruik en nette montage",
        ],
      },
      perfectVoor: {
        title: "Prefab is perfect voor",
        bullets: [
          "Uitbouw aan de achterzijde",
          "Vergroten van keuken of woonkamer",
          "Extra kamer of thuiskantoor",
          "Strakke, moderne aanbouw met grote pui",
        ],
      },
      faq: [
        {
          q: "Is prefab altijd goedkoper?",
          a: "Vaak wel, maar het hangt af van afwerking, fundering en installaties. We maken het transparant in de offerte.",
        },
      ],
    },

    prefabUitbouw: {
      meta: {
        title: "Prefab uitbouw | Meer leefruimte met KM Aanbouw",
        description:
          "Prefab uitbouw aan de achterzijde: grotere woonkamer of leefkeuken. KM Aanbouw levert snelle plaatsing en nette afwerking. Gratis offerte.",
      },
      hero: {
        kicker: "Prefab uitbouw",
        title: "Prefab uitbouw: een grotere woonkamer of leefkeuken, zonder verhuizen",
        subtitle:
          "Een uitbouw is meestal een vergroting aan de achterzijde van de woning. Met prefab kunnen we vaak sneller schakelen, terwijl je wel een hoogwaardige, goed geïsoleerde uitbreiding krijgt.",
        ctas: [
          { label: "Gratis offerte aanvragen", href: "/gratis-offerte", variant: "primary" },
          { label: "Kosten berekenen", href: "/aanbouw/aanbouw-kosten#calculator", variant: "secondary" },
        ],
      },
      populaireKeuzes: {
        title: "Populaire keuzes",
        bullets: [
          "3 meter uitbouw voor leefkeuken",
          "Schuifpui of harmonicapui voor veel licht",
          "Daklicht/koepel voor extra daglicht",
          "Vloerverwarming en strakke wandafwerking",
        ],
      },
      waarWeLetten: {
        title: "Waar we op letten",
        bullets: [
          "Doorlopende isolatieschil (koudebruggen voorkomen)",
          "Nette aansluiting op bestaande vloer en gevel",
          "Correcte afwatering en dakopbouw",
          "Installaties veilig en logisch aangelegd",
        ],
      },
    },

    traditioneleAanbouw: {
      meta: {
        title: "Traditionele aanbouw | Maatwerk door KM Aanbouw",
        description:
          "Traditionele aanbouw met metselwerk en maatwerkdetails. KM Aanbouw bouwt degelijk, mooi en passend bij jouw woning. Gratis offerte.",
      },
      hero: {
        kicker: "Traditionele aanbouw",
        title: "Traditionele aanbouw: maximaal maatwerk, perfect passend bij je woning",
        subtitle:
          "Traditionele aanbouw betekent bouwen op locatie, vaak met metselwerk en volledige vrijheid in details. Ideaal als je aanbouw echt 'origineel' moet aanvoelen bij de bestaande woning, of als de situatie complex is.",
        ctas: [
          { label: "Gratis offerte aanvragen", href: "/gratis-offerte", variant: "primary" },
        ],
      },
      wanneerSlim: {
        title: "Wanneer traditioneel slim is",
        bullets: [
          "Woning met specifieke geveldetails of metselverband",
          "Complexe fundering/situatie of moeilijke bereikbaarheid",
          "Veel maatwerk in kozijnen, hoekoplossingen of daklijnen",
          "Specifieke afwerkingseisen (binnen en buiten)",
        ],
      },
      resultaat: {
        title: "Resultaat: één geheel",
        text: "We zorgen dat de aanbouw aansluit qua stijl, verhoudingen en materialen. Binnen letten we op looplijnen, licht en comfort (isolatie/ventilatie).",
      },
    },

    aanbouwKosten: {
      meta: {
        title: "Aanbouw kosten | Prijs per m² & factoren | KM Aanbouw",
        description:
          "Wat kost een aanbouw? Ontdek prijsfactoren, keuzes in afwerking (casco tot turnkey) en bespaartips. Vraag een gratis offerte aan.",
      },
      hero: {
        kicker: "Aanbouw kosten",
        title: "Aanbouw kosten: wat bepaalt de prijs (en hoe houd je grip op je budget)?",
        subtitle:
          "De kosten van een aanbouw hangen sterk af van afmeting, constructie, fundering, afwerking en installaties. Daarom werkt KM Aanbouw met duidelijke fases en opties, zodat je keuzes kunt maken die bij je budget passen.",
        ctas: [
          { label: "Start calculator", href: "#calculator", variant: "primary" },
          { label: "Gratis offerte", href: "/gratis-offerte", variant: "secondary" },
        ],
      },
      prijsfactoren: {
        title: "Belangrijkste prijsfactoren",
        bullets: [
          "Afmetingen (m²) en gewenste indeling",
          "Fundering (grondsoort, bereikbaarheid, benodigde diepte)",
          "Constructie (dragende doorbraak, staal, lateien)",
          "Kozijnen en glas (HR++/triple, schuifpui, daklicht)",
          "Dak (plat dak/kap, isolatie, afwatering)",
          "Installaties (elektra, verwarming, ventilatie, water)",
          "Afwerking: casco / wind- en waterdicht / volledig afgewerkt",
          "Vergunning/constructieberekening (indien nodig)",
        ],
      },
      besparen: {
        title: "Slim besparen (zonder kwaliteitsverlies)",
        bullets: [
          "Kies casco + eigen afwerking waar je handig bent",
          "Standaard maatvoering waar mogelijk",
          "Maak keuzes in kozijnen en pui (grootte/variant)",
          "Denk vooraf goed na over stopcontacten en lichtpunten (wijzigingen kosten geld)",
        ],
      },
      transparant: {
        title: "Transparante offerte",
        text: "Wij splitsen de offerte logisch op (ruwbouw, constructie, installaties, afwerking) zodat je precies ziet waar je voor betaalt.",
      },
    },

    aanbouwOpties: {
      meta: {
        title: "Aanbouw opties | Serre, Keuken, Erker, Garage & meer | KM",
        description:
          "Bekijk alle aanbouw-opties: serre, keukenaanbouw, erker, garage, schuur, kelder, woonkamer of slaapkamer. KM Aanbouw werkt in heel Nederland.",
      },
      hero: {
        kicker: "Aanbouw opties",
        title: "Aanbouw opties: kies de uitbreiding die bij jouw woning past",
        subtitle:
          "Elke woning en gezinssituatie is anders. Daarom bouwt KM Aanbouw uitbreidingen die passen bij jouw woonwensen: meer leefruimte, meer licht, extra kamers of praktische opslag.",
      },
    },

    prefabOpbouw: {
      meta: {
        title: "Dakopbouw / opbouw | Extra verdieping met KM Aanbouw",
        description:
          "Dakopbouw op plat dak, garage of volledige extra verdieping. KM Aanbouw regelt constructie, vergunning-check en afwerking. Gratis offerte.",
      },
      hero: {
        kicker: "Opbouw (dakopbouw)",
        title: "Opbouw (dakopbouw): een extra verdieping, zonder verhuizen",
        subtitle:
          "Een dakopbouw is dé manier om flink meer woonruimte te creëren: extra slaapkamers, een werkkamer of een complete verdieping. KM Aanbouw begeleidt je van ontwerp tot oplevering.",
        ctas: [
          { label: "Gratis offerte aanvragen", href: "/gratis-offerte", variant: "primary" },
          { label: "Bekijk projecten", href: "/projecten", variant: "secondary" },
        ],
      },
      types: {
        title: "Veelgevraagde opbouw-types",
        bullets: [
          "Dakopbouw op plat dak",
          "Verdieping bijbouwen op bestaande woning",
          "Dakopbouw op garage",
          "Prefab (deels) of traditioneel (situatie-afhankelijk)",
        ],
      },
      belangrijk: {
        title: "Belangrijk: constructie & vergunning",
        text: "We starten altijd met een haalbaarheidscheck: draagkracht, constructie, bereikbaarheid en regels van jouw gemeente.",
      },
    },

    dakkapel: {
      meta: {
        title: "Dakkapel plaatsen | Meer licht & ruimte | KM Aanbouw",
        description:
          "Dakkapel laten plaatsen? Meer stahoogte, meer licht en extra ruimte op zolder. KM Aanbouw werkt door heel Nederland. Gratis offerte.",
      },
      hero: {
        kicker: "Dakkapel",
        title: "Dakkapel: snel meer licht en stahoogte op zolder",
        subtitle:
          "Een dakkapel maakt je zolder direct bruikbaarder: als slaapkamer, werkplek of hobbyruimte. Wij helpen met maatvoering, uitstraling en (waar nodig) vergunning-check.",
        ctas: [
          { label: "Gratis offerte aanvragen", href: "/gratis-offerte", variant: "primary" },
        ],
      },
      keuzes: {
        title: "Keuzes",
        bullets: [
          "Breedte en plaatsing (symmetrisch, overloop, slaapkamer)",
          "Materiaal en afwerking",
          "Isolatie en ventilatieroosters",
          "Rolluiken/zonwering (optioneel)",
        ],
      },
    },

    projecten: {
      meta: {
        title: "Projecten | Bekijk aanbouwen & opbouwen van KM Aanbouw",
        description:
          "Bekijk gerealiseerde aanbouwen, uitbouwen, dakopbouwen en dakkapellen van KM Aanbouw. Inspiratie en voorbeelden door heel Nederland.",
      },
      hero: {
        kicker: "Projecten",
        title: "Projecten: inspiratie uit echte aanbouwen, opbouwen en dakkapellen",
        subtitle:
          "Bekijk hoe KM Aanbouw woningen groter, lichter en comfortabeler maakt. Elk project laat zien wat er mogelijk is qua indeling, licht, materiaal en afwerking.",
        ctas: [{ label: "Gratis offerte", href: "/gratis-offerte", variant: "primary" }],
      },
      categories: [
        { title: "Aanbouw / uitbouw projecten", filter: "aanbouw" },
        { title: "Dakopbouw projecten", filter: "opbouw" },
        { title: "Dakkapel projecten", filter: "dakkapel" },
      ],
    },

    overOns: {
      meta: {
        title: "Over KM Aanbouw | Betrouwbaar bouwen in heel Nederland",
        description:
          "KM Aanbouw is specialist in aanbouw, uitbouw, dakopbouw en dakkapel. Eén aanspreekpunt, heldere afspraken, strak resultaat. Lees meer.",
      },
      hero: {
        kicker: "Over ons",
        title: "Over KM Aanbouw: extra ruimte bouwen met duidelijke afspraken",
        subtitle:
          "KM Aanbouw helpt huiseigenaren die willen vergroten zonder gedoe. We combineren vakmanschap met een helder proces: goed luisteren, slim ontwerpen, strak bouwen en netjes opleveren.",
        ctas: [
          { label: "Adviesgesprek plannen", href: "/contact", variant: "primary" },
        ],
      },
      waarWijVoorStaan: {
        title: "Waar wij voor staan",
        bullets: [
          "Duidelijke communicatie en planning",
          "Netjes werken en minimale overlast",
          "Comfort door goede isolatie en luchtdicht bouwen",
          "Oplossingen die passen bij jouw woning én budget",
        ],
      },
      samenwerking: {
        title: "Samenwerking & kwaliteit",
        text: "We werken met vaste partners en duidelijke kwaliteitscontrole. Zo houden we grip op planning en eindresultaat.",
      },
    },

    contact: {
      meta: {
        title: "Contact | KM Aanbouw | Offerte & advies",
        description:
          "Contact met KM Aanbouw? Stel je vraag of vraag een gratis offerte aan voor aanbouw, opbouw of dakkapel. We reageren snel.",
      },
      hero: {
        kicker: "Contact",
        title: "Contact met KM Aanbouw",
        subtitle:
          "Heb je een vraag, wil je sparren over een idee of direct een offerte aanvragen? Neem contact op via het formulier of bel/mail ons.",
        ctas: [
          { label: "Gratis offerte aanvragen", href: "/gratis-offerte", variant: "primary" },
        ],
      },
      infoBlocks: [
        { title: "Telefoon", desc: "[invullen]" },
        { title: "E-mail", desc: "[invullen]" },
        { title: "Werkgebied", desc: "heel Nederland" },
        { title: "Bezoek op afspraak", desc: "[adres/locatie invullen indien van toepassing]" },
      ],
    },

    gratisOfferte: {
      meta: {
        title: "Gratis offerte | KM Aanbouw (Aanbouw, Opbouw, Dakkapel)",
        description:
          "Vraag een gratis offerte aan bij KM Aanbouw. Snel inzicht in kosten, planning en mogelijkheden. Werkgebied: heel Nederland.",
      },
      hero: {
        kicker: "Gratis offerte",
        title: "Gratis offerte aanvragen (snel en vrijblijvend)",
        subtitle:
          "Voor een scherpe en realistische offerte ontvangen we graag: gewenste afmetingen (ongeveer is prima), foto's van de huidige situatie (voor/achter/zij), jouw wens: aanbouw/uitbouw/opbouw/dakkapel + afwerkingsniveau, postcode (voor planning en bereikbaarheid).",
      },
    },

    werkgebieden: {
      meta: {
        title: "Werkgebied KM Aanbouw | Heel Nederland (alle grote & middelgrote steden)",
        description:
          "KM Aanbouw werkt door heel Nederland: Randstad, Brabant, Limburg, Gelderland, Overijssel, Groningen, Friesland, Drenthe, Flevoland en Zeeland. Bekijk alle steden.",
      },
      hero: {
        kicker: "Werkgebieden",
        title: "Werkgebieden: KM Aanbouw werkt door heel Nederland",
        subtitle:
          "KM Aanbouw is actief in alle provincies en bedient alle grote én middelgrote steden in Nederland. Ook in omliggende plaatsen en dorpen kun je ons inschakelen. Staat jouw woonplaats er niet tussen? Dan is de kans groot dat we er gewoon komen.",
      },
      grootteSteden: {
        title: "Randstad & grote steden (altijd in beeld)",
        steden: "Amsterdam, Rotterdam, Den Haag, Utrecht, Eindhoven, Groningen, Tilburg, Almere, Breda, Nijmegen, Apeldoorn, Haarlem, Arnhem, Zaanstad, Amersfoort, 's‑Hertogenbosch, Maastricht, Leiden, Dordrecht, Zoetermeer, Zwolle, Deventer, Delft, Heerlen, Leeuwarden, Alkmaar.",
      },
      provincies: [
        {
          name: "Noord-Holland",
          steden: "Amsterdam, Haarlem, Zaanstad (Zaandam), Haarlemmermeer (Hoofddorp), Alkmaar, Hilversum, Amstelveen, Purmerend, Hoorn, Den Helder, Heerhugowaard (Dijk en Waard), Beverwijk, Velsen (IJmuiden), Heemskerk, Castricum, Bussum, Laren, Uithoorn.",
        },
        {
          name: "Zuid-Holland",
          steden: "Rotterdam, Den Haag, Leiden, Delft, Zoetermeer, Dordrecht, Gouda, Schiedam, Vlaardingen, Nissewaard (Spijkenisse), Capelle aan den IJssel, Rijswijk, Leidschendam-Voorburg, Westland (Naaldwijk), Alphen aan den Rijn, Katwijk, Ridderkerk, Barendrecht, Maassluis, Lansingerland (Bergschenhoek/Bleiswijk), Papendrecht, Sliedrecht, Hellevoetsluis, Brielle, Krimpen aan den IJssel, Voorne aan Zee.",
        },
        {
          name: "Utrecht",
          steden: "Utrecht, Amersfoort, Nieuwegein, Veenendaal, Zeist, Houten, Woerden, IJsselstein, Soest, De Bilt, Maarssen (Stichtse Vecht), Wijk bij Duurstede.",
        },
        {
          name: "Noord-Brabant",
          steden: "Eindhoven, Tilburg, Breda, 's‑Hertogenbosch, Helmond, Roosendaal, Oss, Bergen op Zoom, Oosterhout, Etten-Leur, Waalwijk, Veldhoven, Best, Geldrop-Mierlo, Meierijstad (Veghel), Maashorst (Uden), Boxtel, Gemert-Bakel, Dongen, Drimmelen.",
        },
        {
          name: "Limburg",
          steden: "Maastricht, Heerlen, Venlo, Sittard-Geleen, Roermond, Weert, Kerkrade, Venray, Brunssum, Landgraaf, Echt-Susteren.",
        },
        {
          name: "Gelderland",
          steden: "Arnhem, Nijmegen, Apeldoorn, Ede, Doetinchem, Zutphen, Harderwijk, Tiel, Wageningen, Barneveld, Nijkerk, Culemborg, Wijchen, Rheden (Dieren), Overbetuwe (Elst), Lingewaard (Bemmel), Zevenaar.",
        },
        {
          name: "Overijssel",
          steden: "Enschede, Zwolle, Deventer, Hengelo, Almelo, Kampen, Hardenberg, Oldenzaal, Rijssen-Holten, Steenwijk.",
        },
        {
          name: "Flevoland",
          steden: "Almere, Lelystad, Dronten, Noordoostpolder (Emmeloord), Zeewolde.",
        },
        {
          name: "Groningen",
          steden: "Groningen, Veendam, Stadskanaal, Midden-Groningen (Hoogezand-Sappemeer), Oldambt (Winschoten), Eemsdelta (Delfzijl/Appingedam), Westerkwartier (Leek), Het Hogeland (Winsum).",
        },
        {
          name: "Friesland",
          steden: "Leeuwarden, Smallingerland (Drachten), Súdwest-Fryslân (Sneek), Heerenveen, Harlingen, Waadhoeke (Franeker), Dantumadiel (Damwâld), Noardeast-Fryslân (Dokkum).",
        },
        {
          name: "Drenthe",
          steden: "Emmen, Assen, Hoogeveen, Meppel, Coevorden.",
        },
        {
          name: "Zeeland",
          steden: "Middelburg, Vlissingen, Goes, Terneuzen, Hulst, Schouwen-Duiveland (Zierikzee).",
        },
      ],
    },

    garanties: {
      meta: {
        title: "Garanties & kwaliteit | KM Aanbouw",
        description:
          "Lees hoe KM Aanbouw kwaliteit borgt: afspraken, oplevering, materialen en werkwijze. Transparant en betrouwbaar.",
      },
      hero: {
        kicker: "Garanties",
        title: "Garanties & kwaliteit",
        subtitle:
          "KM Aanbouw staat voor netjes bouwen en duidelijke afspraken. We werken met heldere oplevermomenten en controleren stap voor stap: fundering, constructie, isolatie, waterdichting en afwerking.",
      },
      verwachten: {
        title: "Wat je van ons mag verwachten",
        bullets: [
          "Duidelijke offerte en werkbeschrijving",
          "Oplevering met opleverpuntenlijst",
          "Garantie-afspraken schriftelijk vastgelegd (projectafhankelijk)",
        ],
      },
    },

    recensies: {
      meta: {
        title: "Recensies | Ervaringen met KM Aanbouw",
        description:
          "Lees ervaringen van klanten over KM Aanbouw: communicatie, planning, afwerking en eindresultaat.",
      },
      hero: {
        kicker: "Recensies",
        title: "Recensies en klantervaringen",
        subtitle:
          "Klantfeedback zegt veel over samenwerking, netheid en opleverkwaliteit. Op deze pagina vind je ervaringen van klanten die kozen voor KM Aanbouw.",
        ctas: [{ label: "Ook een plan? Vraag een offerte aan", href: "/gratis-offerte", variant: "primary" }],
      },
    },

    blog: {
      meta: {
        title: "Blog | Tips & inspiratie voor aanbouw en opbouw | KM",
        description:
          "Blog van KM Aanbouw: kosten, vergunningen, indelingen, isolatie en inspirerende projecten. Praktisch en duidelijk.",
      },
      hero: {
        kicker: "Blog",
        title: "Blog: tips, inspiratie en slimme keuzes",
        subtitle:
          "Onderwerpen die je hier vindt: aanbouw kosten & afwerking (casco tot turnkey), vergunningen en regels (praktisch uitgelegd), indelingen voor leefkeukens en woonkamers, isolatie, ventilatie en comfort.",
      },
    },

    algVoorwaarden: {
      meta: {
        title: "Algemene voorwaarden | KM Aanbouw",
        description:
          "Bekijk de algemene voorwaarden van KM Aanbouw. Duidelijke afspraken over planning, betaling, oplevering en garantie.",
      },
      hero: {
        kicker: "Algemene voorwaarden",
        title: "Algemene voorwaarden",
        subtitle:
          "Hier vind je onze algemene voorwaarden met afspraken over: offertes en prijsafspraken, planning en uitvoering, meer- en minderwerk, oplevering en betaling, garantie en aansprakelijkheid.",
      },
    },

    privacy: {
      meta: {
        title: "Privacyverklaring | KM Aanbouw",
        description:
          "Lees de privacyverklaring van KM Aanbouw. Hoe we omgaan met je gegevens, contactformulieren en cookies.",
      },
      hero: {
        kicker: "Privacyverklaring",
        title: "Privacyverklaring",
        subtitle: "Hoe KM Aanbouw omgaat met je gegevens.",
      },
    },
  },

  optionPages: [
    {
      slug: "serre",
      title: "Serre aanbouw",
      metaTitle: "Serre aanbouw | Meer licht & ruimte | KM Aanbouw",
      metaDescription: "Serre laten bouwen? KM Aanbouw realiseert serres en tuinkamers met goede isolatie, veel glas en nette afwerking. Gratis offerte.",
      h1: "Serre aanbouw: extra licht en een ruimtelijk gevoel",
      intro: "Een serre (of tuinkamer) geeft je woning direct meer licht en een open gevoel. Wij helpen je de juiste balans te vinden tussen glas, isolatie en comfort, zodat je serre niet alleen mooi is, maar ook praktisch.",
      keuzes: {
        title: "Keuzes die het verschil maken",
        bullets: [
          "Isolatie (vloer/dak/wanden) voor comfortabel gebruik",
          "Zonwering of glaskeuze tegen oververhitting",
          "Schuifpui of openslaande deuren naar de tuin",
          "Verlichting en stopcontacten op de juiste plekken",
        ],
      },
    },
    {
      slug: "keukenaanbouw",
      title: "Keukenaanbouw",
      metaTitle: "Keukenaanbouw | Leefkeuken realiseren | KM Aanbouw",
      metaDescription: "Grotere keuken of leefkeuken? KM Aanbouw bouwt keukenaanbouwen met aandacht voor leidingen, ventilatie en licht. Gratis offerte.",
      h1: "Keukenaanbouw: van 'keuken' naar leefkeuken",
      intro: "Met een keukenaanbouw maak je ruimte voor een kookeiland, extra kasten, een grote eettafel en meer loopruimte. Wij houden rekening met water, afvoer, elektra en ventilatie — zodat alles klopt.",
      keuzes: {
        title: "Slimme aandachtspunten",
        bullets: [
          "Plaatsing van afzuiging en ventilatie",
          "Extra groepen/stopcontacten (inductie, oven, vaatwasser)",
          "Logische looproute tussen koken–spoelen–opbergen",
          "Daglicht via pui, daklicht of zijraam",
        ],
      },
    },
    {
      slug: "erker",
      title: "Erker",
      metaTitle: "Erker laten plaatsen | Meer licht aan de voorzijde | KM",
      metaDescription: "Erker aan de voor- of zijgevel? KM Aanbouw maakt erkers die passen bij jouw woningstijl, met extra ruimte en licht. Gratis offerte.",
      h1: "Erker: meer ruimte en uitstraling aan de voor- of zijgevel",
      intro: "Een erker vergroot je woning subtiel, maar merkbaar. Het geeft extra binnenruimte en maakt de gevel levendiger. Perfect voor een zithoek, eethoek of werkplek met veel licht.",
      keuzes: {
        title: "Waar we op letten",
        bullets: [
          "Stijl en verhoudingen passend bij de woning",
          "Constructieve opbouw en fundering",
          "Kozijnen/glas voor comfort en isolatie",
          "Vergunning-check (voorzijde is vaker vergunningsplichtig)",
        ],
      },
    },
    {
      slug: "garage",
      title: "Garage aanbouw",
      metaTitle: "Garage aanbouw | Aangebouwde garage of extra ruimte | KM",
      metaDescription: "Garage aanbouwen of bestaande garage uitbreiden/isoleren? KM Aanbouw bouwt degelijk en netjes, door heel Nederland. Gratis offerte.",
      h1: "Garage aanbouw: praktisch, waardevol en multifunctioneel",
      intro: "Een garage-aanbouw kan puur functioneel zijn (auto/opslag) of juist een slimme basis voor extra ruimte (hobby, werkplaats, bijkeuken). Wij denken mee over isolatie, deuren, licht en eventuele latere functiewijziging.",
      keuzes: {
        title: "Populaire toepassingen",
        bullets: [
          "Aangebouwde garage met binnendoor",
          "Garage + berging/bijkeuken",
          "Geïsoleerde garage (comfort en condensbeperking)",
          "Voorbereiding voor toekomstige ombouw naar kamer",
        ],
      },
    },
    {
      slug: "schuur",
      title: "Schuur of berging",
      metaTitle: "Schuur bouwen | Berging op maat | KM Aanbouw",
      metaDescription: "Schuur of berging laten bouwen? KM Aanbouw maakt duurzame, nette bergingen voor fietsen, opslag of hobby. Gratis offerte.",
      h1: "Schuur of berging: extra opslag, minder rommel in huis",
      intro: "Een goede schuur is praktisch en netjes geïntegreerd in je tuin of bij je woning. Wij bouwen bergingen op maat, met aandacht voor ventilatie, vochtbestendigheid en gebruiksgemak.",
      keuzes: {
        title: "Keuzes",
        bullets: [
          "Indeling (fietsen, opslag, werkbank)",
          "Isolatie (wel/niet verwarmd)",
          "Verlichting en elektra",
          "Deuren/ramen en veiligheid",
        ],
      },
    },
    {
      slug: "kelder",
      title: "Kelder",
      metaTitle: "Kelder bouwen of uitbreiden | Extra m² ondergronds | KM",
      metaDescription: "Kelder laten bouwen of uitbreiden? KM Aanbouw helpt met constructie, waterdichting en afwerking voor opslag of woonruimte. Gratis offerte.",
      h1: "Kelder: extra ruimte zonder uit te bouwen",
      intro: "Een kelder is interessant als je extra ruimte zoekt, maar buiten beperkt zit. Denk aan opslag, wasruimte, hobbyruimte of (waar technisch haalbaar) extra woonruimte. Waterdichting en constructie zijn hierbij essentieel.",
      keuzes: {
        title: "Belangrijkste aandachtspunten",
        bullets: [
          "Grondwater en waterdichting",
          "Constructieberekening en veiligheid",
          "Ventilatie en (indien nodig) ontvochtiging",
          "Trappositie en daglichtoplossingen (lichtstraat/koekoek)",
        ],
      },
    },
    {
      slug: "woonkamer",
      title: "Woonkamer aanbouw",
      metaTitle: "Woonkamer aanbouw | Groter, lichter en ruimer wonen | KM",
      metaDescription: "Woonkamer vergroten met een aanbouw? KM Aanbouw creëert meer leefruimte met pui, daklicht en goede isolatie. Gratis offerte.",
      h1: "Woonkamer aanbouw: meer leefruimte voor het dagelijks leven",
      intro: "Meer ruimte in de woonkamer betekent vaak: rust, betere indeling en meer plezier in huis. Met een aanbouw kun je een grotere zithoek maken, een speelhoek creëren of een open woonkeuken realiseren.",
      keuzes: {
        title: "Populaire upgrades",
        bullets: [
          "Grote schuifpui naar de tuin",
          "Daklicht voor extra daglicht",
          "Vloerverwarming en strakke afwerking",
          "Open verbinding met keuken",
        ],
      },
    },
    {
      slug: "slaapkamer",
      title: "Slaapkamer aanbouw",
      metaTitle: "Slaapkamer aanbouw | Extra kamer op begane grond | KM",
      metaDescription: "Extra slaapkamer of levensloopbestendige uitbreiding? KM Aanbouw bouwt comfortabel, goed geïsoleerd en netjes afgewerkt. Gratis offerte.",
      h1: "Slaapkamer aanbouw: extra kamer of levensloopbestendig wonen",
      intro: "Een slaapkamer op de begane grond is ideaal voor gezinnen, thuiswerken of toekomstbestendig wonen. Wij zorgen voor comfort (isolatie, ventilatie), logische indeling en prettige lichtinval.",
      keuzes: {
        title: "Veelgekozen combinaties",
        bullets: [
          "Slaapkamer + badkamer ensuite",
          "Slaapkamer + inloopkast",
          "Slaapkamer + werkplek",
        ],
      },
    },
  ],

  workAreas: [
    {
      slug: "den-haag",
      name: "Den Haag",
      metaTitle: "Aanbouw, opbouw & dakkapel in Den Haag | KM Aanbouw",
      metaDescription: "KM Aanbouw realiseert aanbouwen, dakopbouwen en dakkapellen in Den Haag en omgeving. Heldere planning, nette afwerking en één aanspreekpunt. Gratis offerte.",
      h1: "Aanbouw in Den Haag? KM Aanbouw bouwt extra ruimte, strak en betrouwbaar.",
      intro: "Woon je in Den Haag en wil je vergroten zonder te verhuizen? Wij bouwen aanbouwen/uitbouwen, dakopbouwen en dakkapellen die passen bij jouw woning en woonwensen. We denken mee over indeling, lichtinval, isolatie en afwerking.",
      watWeMaken: [
        "Uitbouw aan de achterzijde voor een grotere woonkamer of leefkeuken",
        "Zij-aanbouw of hoekaanbouw voor extra kamer of berging",
        "Dakopbouw voor extra slaapkamer(s) en badkamer",
        "Dakkapel voor meer licht en stahoogte op zolder",
      ],
      omgeving: "Scheveningen, Loosduinen, Kijkduin, Escamp, Leidschenveen-Ypenburg, Rijswijk, Voorburg, Wateringen.",
    },
    {
      slug: "rotterdam",
      name: "Rotterdam",
      metaTitle: "Aanbouw, opbouw & dakkapel in Rotterdam | KM Aanbouw",
      metaDescription: "KM Aanbouw realiseert aanbouwen, dakopbouwen en dakkapellen in Rotterdam en omgeving. Heldere planning, nette afwerking en één aanspreekpunt. Gratis offerte.",
      h1: "Aanbouw in Rotterdam? KM Aanbouw bouwt extra ruimte, strak en betrouwbaar.",
      intro: "Woon je in Rotterdam en wil je vergroten zonder te verhuizen? Wij bouwen aanbouwen/uitbouwen, dakopbouwen en dakkapellen die passen bij jouw woning en woonwensen. We denken mee over indeling, lichtinval, isolatie en afwerking.",
      watWeMaken: [
        "Uitbouw aan de achterzijde voor een grotere woonkamer of leefkeuken",
        "Zij-aanbouw of hoekaanbouw voor extra kamer of berging",
        "Dakopbouw voor extra slaapkamer(s) en badkamer",
        "Dakkapel voor meer licht en stahoogte op zolder",
      ],
      omgeving: "Schiedam, Vlaardingen, Capelle aan den IJssel, Barendrecht, Ridderkerk, Krimpen aan den IJssel, Hoogvliet, Spijkenisse.",
    },
    {
      slug: "leiden",
      name: "Leiden",
      metaTitle: "Aanbouw, opbouw & dakkapel in Leiden | KM Aanbouw",
      metaDescription: "KM Aanbouw realiseert aanbouwen, dakopbouwen en dakkapellen in Leiden en omgeving. Heldere planning, nette afwerking en één aanspreekpunt. Gratis offerte.",
      h1: "Aanbouw in Leiden? KM Aanbouw bouwt extra ruimte, strak en betrouwbaar.",
      intro: "Woon je in Leiden en wil je vergroten zonder te verhuizen? Wij bouwen aanbouwen/uitbouwen, dakopbouwen en dakkapellen die passen bij jouw woning en woonwensen. We denken mee over indeling, lichtinval, isolatie en afwerking.",
      watWeMaken: [
        "Uitbouw aan de achterzijde voor een grotere woonkamer of leefkeuken",
        "Zij-aanbouw of hoekaanbouw voor extra kamer of berging",
        "Dakopbouw voor extra slaapkamer(s) en badkamer",
        "Dakkapel voor meer licht en stahoogte op zolder",
      ],
      omgeving: "Oegstgeest, Leiderdorp, Voorschoten, Katwijk, Noordwijk, Warmond, Zoeterwoude.",
    },
    {
      slug: "delft",
      name: "Delft",
      metaTitle: "Aanbouw, opbouw & dakkapel in Delft | KM Aanbouw",
      metaDescription: "KM Aanbouw realiseert aanbouwen, dakopbouwen en dakkapellen in Delft en omgeving. Heldere planning, nette afwerking en één aanspreekpunt. Gratis offerte.",
      h1: "Aanbouw in Delft? KM Aanbouw bouwt extra ruimte, strak en betrouwbaar.",
      intro: "Woon je in Delft en wil je vergroten zonder te verhuizen? Wij bouwen aanbouwen/uitbouwen, dakopbouwen en dakkapellen die passen bij jouw woning en woonwensen. We denken mee over indeling, lichtinval, isolatie en afwerking.",
      watWeMaken: [
        "Uitbouw aan de achterzijde voor een grotere woonkamer of leefkeuken",
        "Zij-aanbouw of hoekaanbouw voor extra kamer of berging",
        "Dakopbouw voor extra slaapkamer(s) en badkamer",
        "Dakkapel voor meer licht en stahoogte op zolder",
      ],
      omgeving: "Rijswijk, Pijnacker, Nootdorp, Den Hoorn, Schipluiden, Maassluis, Schiedam.",
    },
    {
      slug: "zoetermeer",
      name: "Zoetermeer",
      metaTitle: "Aanbouw, opbouw & dakkapel in Zoetermeer | KM Aanbouw",
      metaDescription: "KM Aanbouw realiseert aanbouwen, dakopbouwen en dakkapellen in Zoetermeer en omgeving. Heldere planning, nette afwerking en één aanspreekpunt. Gratis offerte.",
      h1: "Aanbouw in Zoetermeer? KM Aanbouw bouwt extra ruimte, strak en betrouwbaar.",
      intro: "Woon je in Zoetermeer en wil je vergroten zonder te verhuizen? Wij bouwen aanbouwen/uitbouwen, dakopbouwen en dakkapellen die passen bij jouw woning en woonwensen. We denken mee over indeling, lichtinval, isolatie en afwerking.",
      watWeMaken: [
        "Uitbouw aan de achterzijde voor een grotere woonkamer of leefkeuken",
        "Zij-aanbouw of hoekaanbouw voor extra kamer of berging",
        "Dakopbouw voor extra slaapkamer(s) en badkamer",
        "Dakkapel voor meer licht en stahoogte op zolder",
      ],
      omgeving: "Pijnacker-Nootdorp, Lansingerland (Bergschenhoek/Bleiswijk), Leidschendam-Voorburg, Den Haag, Waddinxveen, Gouda.",
    },
    {
      slug: "pijnacker",
      name: "Pijnacker",
      metaTitle: "Aanbouw, opbouw & dakkapel in Pijnacker | KM Aanbouw",
      metaDescription: "KM Aanbouw realiseert aanbouwen, dakopbouwen en dakkapellen in Pijnacker en omgeving. Heldere planning, nette afwerking en één aanspreekpunt. Gratis offerte.",
      h1: "Aanbouw in Pijnacker? KM Aanbouw bouwt extra ruimte, strak en betrouwbaar.",
      intro: "Woon je in Pijnacker en wil je vergroten zonder te verhuizen? Wij bouwen aanbouwen/uitbouwen, dakopbouwen en dakkapellen die passen bij jouw woning en woonwensen. We denken mee over indeling, lichtinval, isolatie en afwerking.",
      watWeMaken: [
        "Uitbouw aan de achterzijde voor een grotere woonkamer of leefkeuken",
        "Zij-aanbouw of hoekaanbouw voor extra kamer of berging",
        "Dakopbouw voor extra slaapkamer(s) en badkamer",
        "Dakkapel voor meer licht en stahoogte op zolder",
      ],
      omgeving: "Nootdorp, Delft, Den Haag, Zoetermeer, Berkel en Rodenrijs, Bleiswijk.",
    },
  ],

  testimonials: [
    { name: "S. de V.", place: "Rotterdam", title: "Strakke planning, weinig gedoe", text: "Vanaf intake tot oplevering wisten we precies wat er ging gebeuren. De bouwfase was kort en netjes.", rating: 5 },
    { name: "M. K.", place: "Den Haag", title: "Goede communicatie", text: "Heldere keuzes vooraf en tijdens de bouw snel schakelen. Afwerking is precies wat we hoopten.", rating: 5 },
    { name: "J. & L.", place: "Delft", title: "Aanbouw voelt 'origineel'", text: "De aansluiting op het huis is heel strak. Het voelt alsof het altijd zo is geweest.", rating: 5 },
    { name: "A. B.", place: "Leiden", title: "Fijn team", text: "Vriendelijke mensen, duidelijke afspraken en oplevering met checklist. Prettig traject.", rating: 5 },
    { name: "R. P.", place: "Zoetermeer", title: "Kosten helder uitgelegd", text: "We kregen goed inzicht in wat opties kosten en wat zinvol was. Geen verrassingen.", rating: 4 },
    { name: "N. H.", place: "Amsterdam", title: "Meer licht en ruimte", text: "Met schuifpui en lichtstraat is het echt een andere woning geworden. Erg tevreden.", rating: 5 },
    { name: "T. W.", place: "Utrecht", title: "Alles netjes opgeruimd", text: "Bouwplaats was elke dag schoon. Dat maakt een groot verschil als je er woont.", rating: 5 },
    { name: "L. M.", place: "Pijnacker", title: "Snelle oplevering", text: "Binnen de afgesproken tijd klaar. Geen uitloop, geen gedoe.", rating: 5 },
    { name: "F. J.", place: "Eindhoven", title: "Goed advies over opties", text: "We twijfelden over lichtstraat of schuifpui. Het advies hielp ons kiezen.", rating: 4 },
    { name: "E. K.", place: "Groningen", title: "Tevreden over resultaat", text: "De aanbouw is precies wat we voor ogen hadden. Strak en passend bij ons huis.", rating: 5 },
  ],

  projects: [
    { slug: "prefab-aanbouw-lichtstraat", title: "Prefab aanbouw met lichtstraat", place: "Den Haag", type: "aanbouw", summary: "Extra leefruimte met veel daglicht en strakke aansluiting.", bullets: ["Lichtstraat", "Schuifpui voorbereiding", "Isolatiepakket comfort"], images: [] },
    { slug: "woonkamer-uitbouw-achterzijde", title: "Woonkamer uitbouw achterzijde", place: "Rotterdam", type: "aanbouw", summary: "Woonkamer vergroot met optimale routing en extra licht.", bullets: ["Doorbraak & draaglijn", "Nieuwe pui", "Elektra voorbereiding"], images: [] },
    { slug: "traditionele-aanbouw-metselwerk", title: "Traditionele aanbouw met metselwerk look", place: "Leiden", type: "aanbouw", summary: "Maatwerk uitstraling passend bij bestaande gevel.", bullets: ["Details in metselwerk", "Kozijnindeling op maat", "Afwerking sleutelklaar"], images: [] },
    { slug: "serre-aanbouw-schuifpui", title: "Serre aanbouw met schuifpui", place: "Delft", type: "aanbouw", summary: "Lichte aanbouw met grote schuifpui voor maximale verbinding met de tuin.", bullets: ["Grote schuifpui", "Zonwering voorbereid", "Hoge isolatiewaarde"], images: [] },
    { slug: "dakopbouw-extra-verdieping", title: "Dakopbouw voor extra verdieping", place: "Amsterdam", type: "opbouw", summary: "Complete extra verdieping met twee slaapkamers en badkamer.", bullets: ["Twee slaapkamers", "Badkamer", "Trap en overloop"], images: [] },
    { slug: "dakkapel-moderne-afwerking", title: "Dakkapel met moderne afwerking", place: "Utrecht", type: "dakkapel", summary: "Meer licht en stahoogte op zolder met strakke dakkapel.", bullets: ["Breed model", "Ventilatieroosters", "Moderne afwerking"], images: [] },
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
        "Maak een lijst met 'must-haves' (licht, indeling, budget, timing) en toets daarop.",
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
        "Fundering is situatie-afhankelijk: laat je goed adviseren.",
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
        "Begin op tijd: wachttijden verschillen.",
      ],
    },
  ],
};
