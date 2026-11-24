# GMK Sales F – Egyesített: képcsere (3D illusztrációk → valós fotók + egységes illusztrációk)

Előbb olvasd el a `STYLE-GUIDE.md`-t, abban vannak a képhasználat általános szabályai. A csatolt zip `assets/2027/` mappáját másold be a projekt `assets/` mappája mellé, a mappaszerkezetet megtartva:
`assets/2027/foto/`, `assets/2027/hatter/`, `assets/2027/illu/`.
Ezután a GMK Sales F – Egyesített buildben (a .dc oldal + gmk-content.js) cseréld le a képeket az alábbiak szerint. Szöveget ne módosíts.

Mi és miért: Viki és Ede visszajelzése alapján a 3D „m”-es illusztrációk túl AI-hatásúak. A helyükre valós hatású fotók kerülnek magyar szereplőkkel, a laza, kiegészítő elemek pedig egységes, lapos, GMK-színes illusztrációk lesznek. A sötét háttereken nincs egyenes vonal, és nincs AI-homály sem.

## 1. Fotók (WebP, 1920 px széles)

| Blokk | Most | Csere | Alt szöveg |
|---|---|---|---|
| 02 „Milyen lenne, ha három hónap múlva…” | `assets/illu-05.png` (21:9) | `assets/2027/foto/foto-02-harom-honap.webp` (21:9) | Egy nő este a konyhaasztalnál mosolyogva olvas a laptopján |
| 03 „A munkaerőpiac kettévált” – bal oszlop kis képe | `assets/illu-06.png` | `assets/2027/foto/foto-03-dashboard.webp` (16:9) | Egy férfi az irodában egy dashboardot mutat a kollégájának |
| 03 – a sötét AI-ablak doboz teteje | `assets/illu-07.png` | **Töröld a képet**, a doboz a „Az AI-ablak most van nyitva” címmel kezdődjön | – |
| 05 Pillérek, Tudás fül (`P` tömb 0. elem) | `assets/brand-09.png` | `assets/2027/foto/foto-05-tudas.webp` (4:3) | Egy nő fejhallgatóval online órán jegyzetel |
| 05 Pillérek, Állás fül (`P` tömb 1. elem) | `img-founder-wide.png` | `assets/2027/foto/foto-07-tanacsado.webp` (16:9) | Karrier-tanácsadó és egy ügyfél közösen átnézik az önéletrajzot |
| 05 Pillérek, Nyelv fül (`P` tömb 2. elem) | `assets/brand-04.png` | `assets/2027/foto/foto-05-nyelv.webp` (4:3) | Egy férfi angol nyelvű videós állásinterjún |
| 10 „Mi történik, miután csatlakoztál?” – felső szélesvásznú kép | `assets/illu-09.png` | `assets/2027/foto/foto-10-anya-mobil.webp` (21:9) | Egy anya a kanapén a telefonján tanul, amíg a gyereke alszik |
| 13 Szakképesítés – jobb oszlop alsó kitöltő képe | `assets/brand-07.png` | `assets/2027/foto/foto-13-tesztelo.webp` (16:9), `object-fit: cover`, `object-position: 60% 40%`, a jelenlegi magasságban | Junior szoftvertesztelő két monitor előtt |

A pillérfotó a bal oszlopban maradjon az eddigi méretben, `object-fit: cover`, lekerekített sarokkal. A fül váltásakor a kép is váltson.

## 2. Sötét háttérképek (WebP, 2400 px széles)

A meglévő sötét átlátszó réteget (linear-gradient overlay) mindenhol tartsd meg, csak a kép URL-je változik.

| Blokk | Most | Csere |
|---|---|---|
| 02 „Milyen lenne…” háttér | `assets/brand-05.png` | `assets/2027/hatter/hatter-hullam.webp` |
| 04 Február háttér | `assets/brand-08.png` | `assets/2027/hatter/hatter-dune.webp` |
| 11 Ajánlat + ár háttér | `assets/brand-01.png` | `assets/2027/hatter/hatter-dune-tukor.webp` |
| Záró blokk háttér | `assets/brand-05.png` | **Maradjon így** (Edének ez tetszett) |

`background-size: cover; background-position: center`. Ha a szöveg olvashatósága romlik, az overlay átlátszatlanságát emeld 0,05–0,1-gyel, de a kép ne tűnjön el.

## 3. Kiegészítő illusztrációk (átlátszó PNG, 640×640, mellette WebP)

Egységes, lapos 2D sorozat GMK-színekkel. Mindig a `.png` vagy `.webp` fájlt használd, háttér nélkül. Ne tegyél rájuk árnyékot és keretet, és ne színezd át őket.

**a) Kvíz – „Négy útvonal, négy cél” csempék.** A csempék 44 px-es ikondoboza helyére egy 96 px-es fehér kör kerüljön, benne az illusztráció 84 px-en (mobilon 72/64 px). Kiválasztott állapotban a kör maradjon fehér.
- Állásszerző → `assets/2027/illu/utvonal-allasszerzo.png`
- Karrier Hack → `assets/2027/illu/utvonal-karrier-hack.png`
- AI-szakértő → `assets/2027/illu/utvonal-ai-szakerto.png`
- Szintlépő → `assets/2027/illu/utvonal-szintlepo.png`
A csempék minimális magasságát emeld annyival, hogy semmi ne csússzon össze.

**b) Februári útvonal-panel.** A sötét panel címe (`fb.t`) mellett, jobbra, a kiválasztott fülnek megfelelő illusztráció jelenjen meg egy 128 px-es halvány türkiz (#e6f4f4) körben (mobilon a cím fölött, 88 px-en):
- Adatelemzés → `assets/2027/illu/feb-adatelemzes.png`
- Projektmenedzsment → `assets/2027/illu/feb-projektmenedzsment.png`
- AI a mindennapi munkában → `assets/2027/illu/feb-ai-mindennapi.png`
Fülváltáskor rövid (200 ms) áttűnéssel cserélődjön; reduced-motion módban áttűnés nélkül.

**c) 07 „Miért nem egy újabb tanfolyam?”** A nagy `assets/illu-10.png` helyére egy háromelemes sor kerüljön a táblázat fölé: három egyforma oszlop, mindegyikben az illusztráció 180 px-en (mobilon egymás mellett 96 px-en), alatta egy rövid felirat 14 px-es, 700-as súllyal:
- `assets/2027/illu/piller-tudas.png` → „Tudás”
- `assets/2027/illu/piller-allas.png` → „Állás”
- `assets/2027/illu/piller-nyelv.png` → „Nyelv”
A sor kerüljön egy fehér, lekerekített (28 px) kártyára, 32 px-es belső margóval.

**d) 10 „Mi történik, miután csatlakoztál?” lépései.** Az 5 lépés mindegyike kapjon illusztrációt a lépés szövegétől jobbra, desktopon 88 px-en, függőlegesen középre igazítva. Mobilon a lépés címe mellé, balra kerüljön, 56 px-en. A számozott kör és a vonal maradjon.
1. Csatlakozol → `assets/2027/illu/lepes-1-csatlakozol.png`
2. Megkapod a hozzáférést → `assets/2027/illu/lepes-2-hozzaferes.png`
3. Kiválasztod az útvonaladat → `assets/2027/illu/lepes-3-utvonal.png`
4. Tanulsz a saját tempódban → `assets/2027/illu/lepes-4-tanulsz.png`
5. Kérdezel, amikor elakadsz → `assets/2027/illu/lepes-5-kerdezel.png`

Az illusztrációk alt szövege üres legyen (`alt=""`), mert díszítő elemek.

**e) 01 „Ismerős valamelyik helyzet?” kártyák.** A 46 px-es Material ikondoboz helyére a kártya tetején 96 px-es illusztráció kerüljön (mobilon 80 px), sorrendben:
1. Csend a pályázataidra → `assets/2027/illu/problema-1-csend.png`
2. „Ehhez már öreg vagyok.” → `assets/2027/illu/problema-2-kor.png`
3. A fizetésed helyben jár → `assets/2027/illu/problema-3-fizetes.png`
4. Az AI mindenhol ott van → `assets/2027/illu/problema-4-ai.png`
5. Nem tudod, merre tovább → `assets/2027/illu/problema-5-merre.png`
6. Tudásod van, papírod kevés → `assets/2027/illu/problema-6-papir.png`
A tematikus változatokban (`?utvonal=...`), ahol más a fájdalompontok szövege, maradjanak a Material ikonok.

**f) „Így tanulsz – 100% online órák” kártyák.** Az ikon helyére 96 px-es illusztráció kerüljön:
1. Videós oktatóanyagok → `assets/2027/illu/tanulas-1-video.png`
2. Élő egy- és félnapos tréningek → `assets/2027/illu/tanulas-2-elo-trening.png`
3. Többhetes élő képzések → `assets/2027/illu/tanulas-3-tobbhetes.png`
4. Mobilapp → `assets/2027/illu/tanulas-4-mobilapp.png`
5. Tanúsítvány → `assets/2027/illu/tanulas-5-tanusitvany.png`

**g) „Kinek való?” blokk.** A két kártya fölé egy széles fotó kerüljön: `assets/2027/foto/foto-14-kinek-valo.webp`, teljes szélességben, 16:9, desktopon legfeljebb 380 px magasan, `object-fit: cover`, `object-position: 65% 30%`, 28 px-es lekerekítéssel. Alt szöveg: „Egy 50 körüli nő nevetve beszélget az új munkahelyén”. A „Neked szól, ha:” kártya jobb felső sarkába kerüljön a `assets/2027/illu/kinek-valo.png` 96 px-en (mobilon 72 px).

**h) GYIK.** A „Gyakori kérdések” címtől jobbra kerüljön a `assets/2027/illu/gyik.png` 140 px-en, a címmel egy sorban. Mobilon a cím fölött, 96 px-en.

**i) Záró blokk („Ugrás előtt kell felvenni az ejtőernyőt”).** A cím fölé, a logó alá kerüljön a `assets/2027/illu/ejtoernyo.png` 180 px-en (mobilon 128 px), finom, lassú lebegő animációval (4–6 px fel-le, 6 s, ease-in-out). Reduced-motion módban álljon.

## 4. Technikai szabályok

- Minden `<img>` kapjon `width` és `height` attribútumot, `loading="lazy"`-t (a hero kivételével) és `decoding="async"`-et.
- A régi fájlokra (`illu-05/06/07/09/10`, `brand-01/04/07/08/09`) ne maradjon hivatkozás az F oldalon. Magukat a fájlokat ne töröld.
- A fájlneveket ne nevezd át, mert az Elementor-átadásnál is ezekkel dolgozunk.

## 5. Ellenőrzés

1440 és 390 px-en, élő és `?demo=1` módban:
- egyetlen törött kép sincs, és a konzolban nincs 404-es képhiba,
- a régi 3D illusztrációk közül egy sem látszik,
- a sötét blokkokban a fehér szöveg jól olvasható az új háttéren,
- a kvíz-csempék, a februári panel és a lépések illusztrációi nem csúsznak össze és nem vágódnak le,
- a pillérfotó fülváltáskor cserélődik,
- egyik blokkban sincs egyszerre fotó és nagy illusztráció egymás mellett, a STYLE-GUIDE.md szabályai szerint.
