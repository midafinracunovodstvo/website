import React from "react"; 

const PrivacyPolicyContent: React.FC = () => {

  return (
    <main className="bg-white my-5">
      {/* <div className="text-container ptb-100"> */}
        <div className="container">

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="border-b border-slate-200 pb-6">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Politika privatnosti
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Ažurirano: <span className="font-medium">januar 2026.</span>
          </p>

          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm leading-6 text-slate-700">
              Ovom politikom privatnosti („Politika“) vas informišemo o tome
              koje lične podatke prikupljamo, kako ih obrađujemo i kako ih
              štitimo. Politika se odnosi na prikupljanje podataka putem
              veb-sajta{" "}
              <a
                href="https://www.midafin.rs"
                className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
              >
                www.midafin.rs
              </a>{" "}
              i drugih oblika komunikacije koje inicirate sa nama, uključujući
              e-mail, telefonski kontakt, registracije za događaje, prijave na
              biltene i upite za usluge.
            </p>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-700">
            Midafin Beograd, sa sedištem na adresi Omladinskih brigada 26, Beograd, Srbija (u daljem tekstu: „MIDAFIN“, „mi“,
            „nas“ ili „naš“) obrađuje podatke u skladu sa Zakonom o zaštiti
            podataka o ličnosti Republike Srbije, kao i Opštom uredbom o zaštiti
            podataka (GDPR), kada je to primenljivo.
          </p>
        </header>

        {/* Kontakt */}
        <section className="mt-8" aria-labelledby="kontakt">
          <h2
            id="kontakt"
            className="text-xl font-semibold tracking-tight text-slate-900"
          >
            Kontakt
          </h2>

          <div className="mt-4 grid gap-2 rounded-xl border border-slate-200 p-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-slate-900">
                Midafin Beograd
              </p>
              <p className="text-sm text-slate-700">Omladinskih brigada 26</p>
              <p className="text-sm text-slate-700">11070 Beograd, Srbija</p>
            </div>

            <div className="sm:text-right">
              <p className="text-sm text-slate-700">
                e-mail:{" "}
                <a
                  href="mailto:office@midafin.rs"
                  className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
                >
                  office@midafin.rs
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Koje podatke prikupljamo */}
        <section className="mt-10" aria-labelledby="koje-podatke">
          <h2
            id="koje-podatke"
            className="text-xl font-semibold tracking-tight text-slate-900"
          >
            Koje podatke prikupljamo? Kako ćemo ih koristiti?
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-700">
            Možemo prikupiti sledeće kategorije podataka:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-700">
            <li>Ime i prezime</li>
            <li>Kontakt informacije (e-mail, telefon)</li>
            <li>Datum rođenja</li>
            <li>Naziv firme i pozicija</li>
            <li>Podaci o pristupu i korišćenju veb-sajta</li>
            <li>IP adresa i podaci o uređaju</li>
            <li>
              Podaci dostavljeni putem formulara, anketa, registracija, prijava
              na događaje
            </li>
          </ul>

          <p className="mt-6 text-sm leading-6 text-slate-700">
            Vaše lične podatke koristimo za sledeće svrhe:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-700">
            <li>Da bismo odgovorili na vaš zahtev ili upit</li>
            <li>Za pružanje naših usluga i informacija o njima</li>
            <li>Za registraciju na događaje, radionice ili biltene</li>
            <li>Za slanje marketinških obaveštenja na osnovu vašeg pristanka</li>
            <li>Za personalizaciju sadržaja i poboljšanje korisničkog iskustva</li>
            <li>Za ispunjavanje naših zakonskih i regulatornih obaveza</li>
            <li>U administrativne i bezbednosne svrhe</li>
          </ul>

          <h3 className="mt-8 text-base font-semibold text-slate-900">
            U koje svrhe još koristimo Vaše podatke o ličnosti?
          </h3>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-700">
            <li>
              kontaktiranje Klijenata radi zakazivanja termina konsultacija sa
              partnerima MIDAFIN-a.
            </li>
            <li>
              poboljšanje i unapređenje funkcionalnosti veb-sajta i korisničkog
              iskustva;
            </li>
            <li>
              druge svrhe za koje je Klijent dao pristanak, osim ukoliko je
              pristanak povučen u skladu sa Zakonom.
            </li>
          </ul>

          <p className="mt-4 text-sm leading-6 text-slate-700">
            MIDAFIN ne koristi Vaše podatke o ličnosti u svrhe marketinga i promocije
            bez izričitog pristanka.
          </p>
        </section>

        {/* Pravne osnove */}
        <section className="mt-10" aria-labelledby="pravne-osnove">
          <h2
            id="pravne-osnove"
            className="text-xl font-semibold tracking-tight text-slate-900"
          >
            Na osnovu čega obrađujemo vaše podatke?
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-700">
            Obradu podataka vršimo isključivo na osnovu zakonskih osnova
            propisanih važećim zakonodavstvom:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-700">
            <li>
              <span className="font-medium text-slate-900">Pristanak</span> –
              izričit pristanak u skladu sa ovom Politikom privatnosti, koji
              možete opozvati u bilo kom trenutku (videti deo „Vaša prava”).
            </li>
            <li>
              <span className="font-medium text-slate-900">Zakoniti interes</span>{" "}
              – kada je obrada neophodna za ostvarenje legitimnih ciljeva,
              ograničena na neophodne podatke.
            </li>
            <li>
              <span className="font-medium text-slate-900">Legitimni interes</span>{" "}
              – za neophodne (tehničke) kolačiće u svrhu osnovnog funkcionisanja
              veb-sajta.
            </li>
          </ul>
        </section>

        {/* Kolačići */}
        <section className="mt-10" aria-labelledby="kolacici">
          <h2
            id="kolacici"
            className="text-xl font-semibold tracking-tight text-slate-900"
          >
            Korišćenje kolačića, web-beacons-a i drugih uređaja
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-700">
            Informacije o načinu na koji koristimo kolačiće, web-beacons i druge
            uređaje za praćenje ponašanja korisnika potražite u našoj politici
            kolačića:{" "}
            <a
              href="https://www.midafin.rs/cookies-policy"
              className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
            >
              www.midafin.rs/cookies-policy
            </a>
          </p>
        </section>

        {/* Prenos */}
        <section className="mt-10" aria-labelledby="prenos">
          <h2
            id="prenos"
            className="text-xl font-semibold tracking-tight text-slate-900"
          >
            Prenos Vaših ličnih podataka
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-700">
            Vaši podaci mogu biti preneti sledećim licima/organizacijama, uz
            poštovanje ugovornih i bezbednosnih mera:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-700">
            <li>Poslovnim partnerima i pružaocima usluga (IT podrška, hosting, CRM sistemi)</li>
            <li>Nadležnim organima, regulatorima i sudovima, kada je to zakonski obavezno</li>
            <li>U slučaju korporativnih promena (spajanja, pripajanja ili reorganizacija)</li>
          </ul>

          <p className="mt-4 text-sm leading-6 text-slate-700">
            Ako se vaši podaci prenose izvan Srbije ili EU, obezbeđujemo primerene
            mere zaštite, uključujući standardne ugovorne klauzule.
          </p>
        </section>

        {/* Marketing */}
        <section className="mt-10" aria-labelledby="marketing">
          <h2
            id="marketing"
            className="text-xl font-semibold tracking-tight text-slate-900"
          >
            Korišćenje Vaših podataka za marketing?
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-700">
            Ukoliko ste dali izričitu saglasnost, vaše podatke možemo koristiti
            za slanje biltena, izveštaja i poziva na događaje, kao i
            personalizovanih ponuda putem e-pošte, SMS-a ili drugih kanala.
            Saglasnost možete povući u svakom trenutku slanjem poruke na{" "}
            <a
              href="mailto:office@midafin.rs"
              className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
            >
              office@midafin.rs
            </a>
            .
          </p>
        </section>

        {/* Bezbednost */}
        <section className="mt-10" aria-labelledby="bezbednost">
          <h2
            id="bezbednost"
            className="text-xl font-semibold tracking-tight text-slate-900"
          >
            Kako štitimo Vaše podatke?
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-700">
            Nudimo vam upotrebu sigurnog servera i tehnologije za šifrovanje
            Secure Socket Layers (SSL) za zaštitu Vaših podataka. Međutim, s
            obzirom na elektronsku prirodu interneta, koristeći ovaj veb-sajt,
            prihvatate inherentne rizike uključujući mogućnost presretanja,
            neovlašćenog pristupa, korupcije podataka i zlonamernog softvera.
          </p>
        </section>

        {/* Prava */}
        <section className="mt-10" aria-labelledby="prava">
          <h2
            id="prava"
            className="text-xl font-semibold tracking-tight text-slate-900"
          >
            Koja se prava odnose na Vaše lične podatke?
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-slate-700">
            <li>Pristup svojim podacima</li>
            <li>Ispravku netačnih podataka</li>
            <li>Brisanje („pravo da budete zaboravljeni“)</li>
            <li>Ograničenje obrade</li>
            <li>Prigovor na obradu</li>
            <li>Prenosivost podataka</li>
            <li>
              Povlačenje saglasnosti – u svakom trenutku, bez uticaja na zakonitost
              prethodne obrade
            </li>
            <li>
              Podnošenje žalbe nadzornom organu – Povereniku za informacije od javnog
              značaja i zaštitu podataka o ličnosti
            </li>
          </ul>

          <h3 className="mt-8 text-base font-semibold text-slate-900">
            Kako da iskoristite Vaša prava
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-700">
            Zahteve možete uputiti putem e-pošte na{" "}
            <a
              href="mailto:office@midafin.rs"
              className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
            >
              office@midafin.rs
            </a>
            . Možemo zatražiti dodatne informacije potrebne za potvrdu identiteta.
            Zadržavamo pravo da odbacimo zahteve koji su nerazumno ponavljajući,
            preterani ili očigledno neosnovani.
          </p>

          <h3 className="mt-8 text-base font-semibold text-slate-900">
            Podnošenje žalbe
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-700">
            U slučaju da smatrate da je naša obrada ličnih podataka u suprotnosti
            sa važećim zakonima o zaštiti podataka, žalba se može podneti lokalnom
            nadzornom organu za zaštitu podataka.
          </p>
        </section>

        {/* Ostalo */}
        <section className="mt-10" aria-labelledby="ostalo">
          <h2
            id="ostalo"
            className="text-xl font-semibold tracking-tight text-slate-900"
          >
            Ostale informacije
          </h2>

          <div className="mt-4 space-y-6 text-sm leading-6 text-slate-700">
            <div>
              <h3 className="text-base font-semibold text-slate-900">Odricanje</h3>
              <p className="mt-2">
                Na našem sajtu mogu postojati linkovi ka drugim sajtovima. Mi nismo
                odgovorni za sadržaj ili politiku privatnosti tih veb-sajtova, niti
                za način na koji se tretiraju informacije o njihovim korisnicima.
                Savetujemo da proučite praksu privatnosti tih trećih strana.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900">Lozinke</h3>
              <p className="mt-2">
                Da bismo Vam pružili više personalizovanih usluga, možemo vas
                zamoliti da date jednu ili više lozinki za pristup određenim
                uslugama ili delovima našeg veb-sajta ili veb-sajta drugih
                dobavljača čiji su proizvodi ili usluge dostupni putem linka na
                našem veb-sajtu. Vi ste isključivo odgovorni za kontrolu i upotrebu
                svake lozinke koju kreirate.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900">Ažuriranja</h3>
              <p className="mt-2">
                Zadržavamo pravo izmene ove Politike. Sve izmene biće objavljene na
                sajtu sa ažuriranim datumom početka važenja.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">
                Otkažite pretplatu / promenite podešavanja pošte
              </h3>
              <p className="mt-2">
                Ako ste dobili jedan ili više e-mailova od MIDAFIN koje
                više ne želite da primate, kontaktirajte nas na{" "}
                <a
                  href="mailto:office@midafin.rs"
                  className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
                >
                  office@midafin.rs
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} — Politika privatnosti (prikaz u UI).
          </p>
        </footer>
      </div>
        </div>
    </main>
  );



};

export default PrivacyPolicyContent;
