import type { ImageMetadata } from "astro";

import slikaFotografija from "../assets/heroFotografija.jpg";
import slikaDron from "../assets/heroDron.jpg";
import slikaDrustvene from "../assets/heroDrustveneMreze.jpg";
import slikaWeb from "../assets/heroWeb.jpg";
import slikaNovinarstvo from "../assets/heroNovinarstvo.jpg";
import slikaDizajn from "../assets/heroGrafickiDizajn.jpg";

export interface Usluga {
  slug: string;
  naziv: string;
  naslov: string;
  kratko: string;
  uvod: string;
  slika: ImageMetadata;
  alt: string;
  ukljucuje: string[];
  isporuka: string[];
}

export const usluge: Usluga[] = [
  {
    slug: "fotografiranje",
    naziv: "Fotografiranje",
    naslov: "Fotografiranje",
    kratko: "Reportaža s događanja, portreti, proizvodi i interijeri. Obrađene fotografije, bez čekanja tjednima.",
    uvod: "Dolazim na lokaciju, snimim ono što se stvarno dogodilo i vratim obrađene fotografije spremne za objavu, tisak ili arhivu.",
    slika: slikaFotografija,
    alt: "Fotografiranje događanja",
    ukljucuje: [
      "Događanja — otvorenja, sjednice, obljetnice, sajmovi, koncerti, sportski susreti",
      "Poslovni portreti za web stranicu, LinkedIn i medije",
      "Proizvodi i interijeri — ugostiteljstvo, trgovine, smještaj",
      "Nekretnine i objekti, uz mogućnost kombinacije sa snimkama iz zraka",
      "Skupne fotografije timova, razreda i udruga",
    ],
    isporuka: [
      "Obrađene fotografije u punoj rezoluciji za tisak",
      "Zasebna serija smanjenih fotografija za web i društvene mreže",
      "Prijenos preko linka za preuzimanje, bez ograničenja broja skidanja",
      "Rok isporuke 48 sati, a za hitne objave odabir istog dana",
    ],
  },
  {
    slug: "snimanje-dronom",
    naziv: "Snimanje dronom",
    naslov: "Snimanje dronom",
    kratko: "Fotografija i video iz zraka za objekte, gradilišta, poljoprivredne površine i općinske projekte.",
    uvod: "Iz zraka se vidi ono što se s ceste ne može pokazati — opseg zahvata, položaj parcele, cijeli pogon u jednom kadru.",
    slika: slikaDron,
    alt: "Snimanje dronom iz zraka",
    ukljucuje: [
      "Praćenje gradilišta kroz faze, od pripreme terena do dovršetka",
      "Snimanje poslovnih objekata, pogona i skladišnih kompleksa",
      "Poljoprivredne površine — pregled parcela, stanje nasada, dokumentacija",
      "Općinski i županijski projekti: ceste, nasipi, sportski tereni, javne površine",
      "Nekretnine i turistički smještaj s prikazom okolice i prilaza",
      "Snimanje događanja iz zraka gdje uvjeti i propisi to dopuštaju",
    ],
    isporuka: [
      "Fotografije iz zraka u punoj rezoluciji",
      "Video zapisi do 4K, sirovi ili montirani",
      "Snimanje isključivo u skladu s propisima i u dopuštenim zonama",
      "Kombinacija sa snimanjem iz ruke u istom izlasku, bez dodatnog dolaska",
    ],
  },
  {
    slug: "drustvene-mreze",
    naziv: "Vođenje društvenih mreža",
    naslov: "Vođenje društvenih mreža",
    kratko: "Facebook i Instagram s materijalom koji sam snimim kod vas — bez stock fotografija i praznih objava.",
    uvod: "Većina stranica stane jer nema što objaviti. Ja izađem na teren, snimim materijal i od njega gradim objave kroz cijeli mjesec.",
    slika: slikaDrustvene,
    alt: "Vođenje društvenih mreža",
    ukljucuje: [
      "Snimanje fotografija i videa kod vas, u dogovorenom ritmu",
      "Plan objava za mjesec dana unaprijed, usklađen s vašim događanjima i sezonom",
      "Pisanje tekstova objava na hrvatskom, prilagođenih lokalnoj publici",
      "Objavljivanje i raspored termina",
      "Odgovaranje na komentare i poruke, ili priprema odgovora za vas",
      "Postavljanje i vođenje plaćenih kampanja s ciljanjem na županiju",
    ],
    isporuka: [
      "Mjesečni izvještaj o dosegu, novim pratiteljima i najuspješnijim objavama",
      "Sav snimljeni materijal ostaje vama i nakon prestanka suradnje",
      "Rad na vašem računu — pristupi ostaju u vašem vlasništvu",
    ],
  },
  {
    slug: "web-stranice",
    naziv: "Izrada web stranica",
    naslov: "Izrada web stranica",
    kratko: "Brze stranice za tvrtke, obrte i udruge. Bez predložaka koje ima još stotinu firmi u okolici.",
    uvod: "Radim stranice koje se otvaraju odmah i dobro izgledaju na mobitelu, jer preko 80 posto posjeta dolazi upravo s njega.",
    slika: slikaWeb,
    alt: "Izrada web stranica",
    ukljucuje: [
      "Predstavljanje tvrtke, obrta ili udruge s opisom djelatnosti i kontaktom",
      "Stranice za smještaj i ugostiteljstvo s galerijom i upitima",
      "Katalog usluga ili proizvoda bez webshopa, za tvrtke koje ne prodaju online",
      "Obrasci za upite koji stižu izravno na vaš mail",
      "Postavljanje na Google kartu i osnovna optimizacija za pretraživanje",
      "Fotografiranje i snimanje sadržaja za stranicu, ako ga nemate",
    ],
    isporuka: [
      "Registracija domene i postavljanje hostinga",
      "Stranica prilagođena mobitelu, tabletu i računalu",
      "Kratka obuka za samostalno uređivanje sadržaja",
      "Održavanje i izmjene po dogovoru nakon predaje",
    ],
  },
  {
    slug: "novinarske-usluge",
    naziv: "Novinarske usluge",
    naslov: "Novinarske usluge",
    kratko: "Priopćenja, članci i praćenje događanja, uz objavu na portalima koje vodim.",
    uvod: "Radim kao novinar na terenu svaki dan, pa znam što urednici objave odmah, a što završi u košu.",
    slika: slikaNovinarstvo,
    alt: "Novinarski rad na terenu",
    ukljucuje: [
      "Pisanje priopćenja za medije koja se mogu objaviti bez prerade",
      "Praćenje sjednica, otvorenja i konferencija s tekstom i fotografijom",
      "Intervjui i predstavljanja tvrtki, obrta i udruga",
      "Tekstovi za vašu web stranicu, brošuru ili godišnji izvještaj",
      "Lektura i uređivanje materijala koje ste sami napisali",
      "Priprema sadržaja za projekte financirane iz javnih izvora",
    ],
    isporuka: [
      "Tekst u dogovorenom opsegu, s pratećim fotografijama s događaja",
      "Mogućnost objave na bpinfo.hr i orionet.com.hr",
      "Slanje priopćenja na listu lokalnih i regionalnih medija",
      "Za događanja koja se prate isti dan, tekst je gotov unutar nekoliko sati",
    ],
  },
  {
    slug: "graficki-dizajn",
    naziv: "Grafički dizajn",
    naslov: "Grafički dizajn",
    kratko: "Plakati, letci, vizuali za mreže i priprema za tisak koja neće puknuti u tiskari.",
    uvod: "Dizajn koji izlazi iz tiskare onakav kakav je bio na ekranu, jer je pripremljen u pravim dimenzijama i profilu boja.",
    slika: slikaDizajn,
    alt: "Grafički dizajn i priprema za tisak",
    ukljucuje: [
      "Plakati i letci za događanja, manifestacije i akcije",
      "Vizuali za Facebook i Instagram, prilagođeni svakom formatu",
      "Vizitke, memorandumi i obrasci u istom vizualnom stilu",
      "Roll-up baneri, jumbo plakati i oznake na vozilima",
      "Logotip i osnovni vizualni identitet za nove obrte i udruge",
      "Prijelom brošura, kataloga i programskih knjižica",
    ],
    isporuka: [
      "Datoteke pripremljene za tisak, u CMYK-u i s napustom",
      "Verzije za web i mreže u ispravnim dimenzijama",
      "Logotip u vektorskom obliku, upotrebljiv u svakoj veličini",
      "Dva kruga izmjena uključena u cijenu",
    ],
  },
];