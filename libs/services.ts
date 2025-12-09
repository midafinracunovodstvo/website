export interface ServiceData {
  iconName: string;
  title: string;
  shortText: string;
  viewDetails: string;
  aosDelay: string;
  slug: string;
  content?: string[];
}

export const services: ServiceData[] = [
  {
    iconName: "pe-7s-comment bg-13c4a1",
    title: "Računovodstvo",
    slug: "racunovodstvo",
    shortText:
      "Računovodstvo – preciznost, sigurnost i potpuna briga o vašem finansijskom zdravlju",
    content: [
      "Preuzimamo celokupno vođenje poslovnih knjiga, izradu završnog računa i poreskog bilansa, uz strogo poštovanje rokova i zakonskih propisa. Redovno i detaljno knjižimo svu poslovnu dokumentaciju, pratimo stanja u bilansima i pravovremeno vas upozoravamo na sve značajne promene. Naš rad garantuje da su vaše brojke uvek tačne, pregledne i spremne za svaku poresku kontrolu.",
      "Posvećeni smo uklanjanju rizika — od pogrešnog knjiženja do propuštenih obaveza — kako biste mogli da se fokusirate na ono što je važno: rast i razvoj vašeg biznisa.",
      "Mi brinemo o računovodstvu, vi gradite firmu.",
    ],
    viewDetails: "/services/service-details/",
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-display2 bg-6610f2",
    title: "Interno izveštavanje",
    slug: "interno-izvestavanje",
    shortText:
      "Interno izveštavanje – informacije koje vode boljem odlučivanju",
    content: [
      "U saradnji sa vama kreiramo izveštaje koji nisu samo spisak brojeva, već alat za strateško upravljanje poslovanjem.",
      "Definišemo ključne pokazatelje uspeha, strukturiramo jasne i pregledne izveštaje i određujemo dinamiku izveštavanja tako da uvek imate relevantne informacije na vreme.",

      "Bez obzira da li vam trebaju analize troškova, trendovi prihoda, projekcija likvidnosti ili detaljni pregledi po proizvodima/projektima – izrađujemo izveštaje koji u praksi pomažu da donosite brže, preciznije i sigurnije odluke. Vaše brojke postaju priča koja otkriva šta je dobro, šta treba popraviti i kada je pravi trenutak za investicije.",
    ],
    viewDetails: "/services/service-details/",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-light bg-ffb700",
    title: "Obračun zarada",
    slug: "obracun-zarada",
    shortText: "Obračun zarada – profesionalno, diskretno i bez stresa",
    content: [
      "Preuzimamo celokupnu brigu o obračunu zarada i administraciji zaposlenih, uz potpunu usklađenost sa zakonom i rokovima.",
      "Vodimo evidenciju odsustava, prekovremenih sati, stimulacija, bolovanja, od putnih naloga i svih ostalih elemenata koji utiču na obračun.",

      "Obezbeđujemo potpunu diskreciju, a vama smanjujemo rizik od grešaka i pritiska interne administracije.",
      "Zahvaljujući nama, vaši zaposleni dobijaju tačne obračune na vreme, a vi imate stabilan, organizovan i transparentan sistem koji štedi vreme i energiju.",
    ],
    viewDetails: "/services/service-details/",
    aosDelay: "300",
  },
  {
    iconName: "pe-7s-phone bg-fc3549",
    title: "Poresko savetovanje",
    slug: "poresko-savetovanje",
    shortText: "Poresko savetovanje – vas štit od rizika i vodič kroz poreze",
    content: [
      "Klijentima smo svakodnevno dostupni za sva pitanja vezana za poreze, olakšice, optimalna rešenja i tumačenje poslovnih situacija.",
      "Usmereni smo na praktična i zakonski ispravna rešenja koja smanjuju poresko opterećenje i sprečavaju nepotrebne rizike.",
      "Radimo simulacije, procene i analize kako biste u svakom trenutku znali šta vas čeka i kako da izaberete najpovoljniji model poslovanja.",
      "Naš cilj je jednostavan: da vas zaštitimo, uputimo i obezbedimo da svaka vaša odluka ima čistu i stabilnu poresku osnovu.",
    ],
    viewDetails: "/services/service-details/",
    aosDelay: "400",
  },
  {
    iconName: "pe-7s-cart bg-00d280",
    title: "Pravne usluge",
    slug: "pravne-usluge",
    shortText: "Pravne usluge – pravna sigurnost na dohvat ruke",
    content: [
      "MiDaFin sarađuje sa advokatskom kancelarijom koja našim klijentima obezbeđuje osnovne pravne savete kada god je potrebno.",
      "Bilo da se radi o pitanjima vezanim za ugovore, radno-pravnim pitanjima ili proceni rizika u određenom poslovnom odnosu, imate pristup stručnom mišljenju bez dodatnog čekanja.",
      "U slučaju potrebe za formalnim zastupanjem ili kompleksnijim pravnim procesima, naši klijenti ostvaruju popust i prioritetan tretman. Kombinacijom računovodstva, poreskog savetovanja i pravne podrške pružamo celovit sistem zaštite za vaše poslovanje.",
    ],
    viewDetails: "/services/service-details/",
    aosDelay: "500",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "Cene usluga",
    slug: "cene-usluga",
    shortText:
      "Izrada procedura i pravilnika – stabilan i organizovan sistem za rast",
    content: [
      "Kompanije najbrže napreduju kada imaju jasna pravila, procedure i standarde za rada.",
      "Na osnovu našeg iskustva u izradi i implementaciji procedura, pomažemo firmama da kreiraju dokumenta koja su stvarno primenljiva u praksi — ne samo na papiru.",
      "Radimo analizu postojećih procesa, definišemo uloge i odgovornosti, kreiramo jasne tokove rada i izrađujemo pravilnike koji povećavaju efikasnost i smanjuju greške.",
      "Najbolji rezultati postižu se kada se procedure uvode u trenutku kada firma ima 10–15 zaposlenih, ali ih prilagođavamo i većim i manjim timovima. Dobijate uređen sistem, bolju organizaciju, manje konflikata i jasnu strukturu koja podržava rast.",
    ],
    viewDetails: "/services/service-details/",
    aosDelay: "600",
  },
];

export interface PageServiceData {
  iconName: string;
  title: string;
  shortText: string;
  viewDetails: string;
  aosDelay: string;
}

export const servicesPageData: PageServiceData[] = [
  {
    iconName: "pe-7s-comment bg-13c4a1",
    title: "Računovodstvo",
    shortText:
      "Pružamo uslugu vođenja poslovnih knjiga uz izradu i predaju završnog računa i poreskog bilansa.",
    viewDetails: "/services/racunovodstvo",
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-display2 bg-6610f2",
    title: "Interno izveštavanje",
    shortText:
      "Zajedno sa vama, koji poznajete svoje poslovanje, formulišemo izveštaje koji su Vam potrebni za praćenje poslovanja firme i koje dobijate u dogovorenom vremenskom intervalu.",
    viewDetails: "/services/interno-izvestavanje",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-light bg-ffb700",
    title: "Obračun zarada",
    shortText:
      "Na raspolaganju smo pravnim licima koja žele da izmeste obračun zarada, vođenje evidencije odsustva i administriranje zaposleni.",
    viewDetails: "/services/obracun-zarada",
    aosDelay: "300",
  },
  {
    iconName: "pe-7s-phone bg-fc3549",
    title: "Poresko savetovanje",
    shortText:
      "Dnevno smo na raspolaganju klijentima ukoliko im treba savet u vezi poreskih obaveza ili imaju nedoumicu kako će se neka poslovna aktivnost poreski tretirati. ",
    viewDetails: "/services/poresko-savetovanje",
    aosDelay: "400",
  },
  {
    iconName: "pe-7s-cart bg-00d280",
    title: "Pravne usluge",
    shortText:
      "Midafin je potpisala ugovor sa advokatskom kancelarijom kako bi svojim klijentima obezbedila osnovne pravne savete.Takođe naši klijenti mogu ostvariti popust u slučaju potrebe angažovanja advokatske kancelarije u pravnim poslovima.",
    viewDetails: "/services/pravne-usluge",
    aosDelay: "500",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "Cene usluga",
    shortText:
      "Bazirani smo na poslovanju bez skrivenih troškova. U cenu su uključene sve redovne obaveze – prijave i odjave zaposlenih, statistički izveštaji, poreske prijave i redovna komunikacija sa institucijama.",
    viewDetails: "/services/cene-usluga",
    aosDelay: "600",
  },
];
