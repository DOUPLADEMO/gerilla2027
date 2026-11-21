# GMK sales oldal 2027 – képhasználati útmutató (Claude Designnak)

Ez az útmutató minden képre vonatkozik a GMK sales oldalon és a tematikus változatain. A konkrét cseréket a `PROMPT.md` tartalmazza, ez a fájl a szabályokat adja hozzá. Ha a kettő ütközik, a `PROMPT.md` az erősebb.

## 1. Három képtípus van, és mindegyiknek megvan a maga szerepe

| Típus | Mire való | Mappa | Formátum |
|---|---|---|---|
| **Fotó** | Érzelem, hitelesség: egy valódi ember egy valódi pillanatban | `assets/2027/foto/` | WebP, 1920 px széles |
| **Illusztráció** | Laza, vizuális tagolás: kártyák, lépések, csempék, apró hangsúlyok | `assets/2027/illu/` | Átlátszó PNG + WebP, 640×640 |
| **Háttér** | Sötét blokkok hangulata, szöveg alatt | `assets/2027/hatter/` | WebP, 2400 px széles |

Mellettük a meglévő valódi fotók maradnak: András (`assets/andras-hero.webp`, `img-founder-right.png`, `img-founder-wide.png`) és az oktatói portrék (`assets/portre/`).

**Tilos:** a régi 3D „m”-es illusztrációk (`illu-0x`, `brand-0x`) újrahasználata, stockfotó, AI-generált arc az oktatói vagy tagi kártyákon, emoji képként.

## 2. Fotók

- Egy blokkban legfeljebb egy fotó legyen. Fotó és nagy illusztráció ne álljon egymás mellett ugyanabban a blokkban; kis (≤ 96 px-es) illusztráció mellette lehet.
- A fotók a GMK-arculatba illő tónusúak (grafit–türkiz árnyékok, meleg bőrszín, filmes szemcse). Ne színezd át, ne tegyél rájuk szűrőt, színes réteget vagy duotone hatást.
- Képarányok: 21:9 a szélesvásznú sávokhoz, 16:9 a tartalmi képekhez, 4:3 az oldalsó oszlopokhoz. `object-fit: cover`. A szereplő arca soha ne vágódjon le; ha kell, `object-position`-nel igazíts (a szereplők többnyire a kép jobb harmadában vannak).
- Lekerekítés: 28 px a nagy, 20 px a kisebb képeken. Árnyék legfeljebb `0 16px 48px rgba(12,24,27,.12)`.
- Mobilon a fotó a szöveg fölé kerül, teljes szélességben, 16:9-re vágva.
- Fotóra szöveget ne tegyél (kivéve a háttérképeket, lásd 4. pont).

## 3. Illusztrációk

- Egy családba tartoznak: lapos 2D, grafit (#333b41) körvonal, kizárólag GMK-színek (#5baeaf, #84e0db, #e6f4f4, #333b41, kevés #f1a246). Minden illusztráció alatt halvány türkiz talpellipszis van, a háttér átlátszó.
- **Ne színezd át, ne tükrözd, ne vágd meg, és ne tegyél rájuk árnyékot vagy keretet.** Ha egy színes csempére kerülnek, tedd őket fehér vagy #e6f4f4 színű körbe.
- Méretlépcső, hogy az oldal ritmusa egységes maradjon:
  - **56–72 px:** sorok mellett (lépések mobilon, listaelemek),
  - **84–96 px:** kártyák tetején (fájdalompontok, Így tanulsz, kvíz-csempék),
  - **128–180 px:** blokkszintű hangsúly (februári panel, GYIK, záró ejtőernyő, Miben más sor).
  - Ennél nagyobb illusztráció ne legyen az oldalon.
- Egy blokkban vagy minden azonos szintű elem kap illusztrációt, vagy egyik sem (például az 5 lépésből nem lehet csak 3-nak).
- Díszítő elemek, ezért az alt szövegük üres (`alt=""`).
- Mozgás legfeljebb finom lebegés (4–6 px) vagy 200 ms-os áttűnés. `prefers-reduced-motion` esetén minden álljon.

## 4. Sötét hátterek

- Csak a sötét blokkok alá: `hatter-hullam`, `hatter-dune`, `hatter-dune-tukor`. Egymás után következő két sötét blokk ne kapja ugyanazt a hátteret.
- Mindig sötét overlay-jel együtt (`linear-gradient(rgba(12,24,27,.6–.85), …)`), hogy a fehér szöveg legalább WCAG AA kontrasztú legyen.
- `background-size: cover; background-position: center`. Parallaxot és fixált hátteret ne használj.

## 5. Elhelyezési térkép (összefoglaló)

| Blokk | Kép |
|---|---|
| Hero | András fotója (marad) |
| Hero alatti csík | monogramok (kép nincs) |
| Kvíz | 4 útvonal-illusztráció a csempéken |
| 01 Ismerős helyzet? | 6 problema-illusztráció a kártyákon |
| 02 Három hónap múlva | `foto-02-harom-honap` + háttér: `hatter-hullam` |
| 03 Kettévált a piac | `foto-03-dashboard` |
| 04 Február | háttér: `hatter-dune`; a panelen a kiválasztott útvonal illusztrációja |
| 05 Pillérek | fülenként fotó: tudás / tanácsadó / nyelv |
| 06 Katalógus, Így tanulsz | tréningfal (oktatói portrék), 5 tanulas-illusztráció, videó-bélyegkép Andrással |
| 07 Miben más | Tudás–Állás–Nyelv illusztrációsor |
| 08 Eredmények | monogramok (kép nincs) |
| 09 Kik állnak mögött | András + oktatói portrék (marad) |
| 10 Így indulsz | `foto-10-anya-mobil` + 5 lepes-illusztráció |
| Kinek való? | `foto-14-kinek-valo` + `kinek-valo` illusztráció |
| 11 Ajánlat + ár | háttér: `hatter-dune-tukor` |
| 13 Szakképesítés | `foto-13-tesztelo` |
| GYIK | `gyik` illusztráció |
| Záró | eredeti háttér (marad) + `ejtoernyo` illusztráció |

## 6. Teljesítmény és Elementor-átadás

- Minden `<img>`-nek legyen `width`, `height`, `loading="lazy"` (a hero kivételével) és `decoding="async"` attribútuma.
- A fájlneveket ne nevezd át, és ne ágyazd be őket base64-ként: az Elementor-átadásnál ugyanezekkel a nevekkel kerülnek a WordPress médiatárba.
- Új képet ne generálj és ne rajzolj (SVG-vel sem) a meglévők helyett. Ha valahol hiányzik egy kép, hagyj helyőrzőt `TODO: kép` jelöléssel, és sorold fel a végén.

## 7. Ha új kép kell (generálási sablonok, Nano Banana Pro)

**Fotó** (angolul, a [ ] részeket cseréld):
> Realistic everyday documentary photo of a real unposed moment, shot by a professional photographer for a Hungarian adult-education brand, not a stock photo. An ordinary-looking Hungarian [nő/férfi, kor] with Central European features and fair skin, not model-like, [haj, ruha]. [Jelenet egy pesti lakásban / hétköznapi irodában]. A turquoise [bögre / mappa / párna] in the scene. Subject in the right third of the frame, calm space on the left. Shot on Fujifilm X-T5, 35mm lens at f/4, no creamy bokeh. Kodak Portra 400 film look, slightly muted colors, cool graphite-teal shadows, warm natural skin tones, fine film grain. Avoid glossy AI look, perfect teeth, glowing or plastic skin, HDR, oversaturation, heavy bokeh, extra fingers, readable text, logos, watermark.

**Illusztráció** (mindig sorban, egy képen generálva, utána szétvágva):
> A unified set of [N] spot illustrations for the Gerilla Mentor Klub website, arranged in one horizontal row, evenly spaced, each the same size and visual weight: 1) [...] 2) [...]. Style: flat 2D editorial illustration with a slightly hand-drawn line, consistent 3px dark graphite (#333b41) outline, flat fills only from this palette: turquoise #5baeaf, light mint #84e0db, pale teal #e6f4f4, graphite #333b41, a sparing warm orange accent #f1a246, white; simple minimal people with fair skin tone #f1d3bd and no detailed faces. No gradients, no 3D, no glossy effects, only one flat pale-teal ground ellipse under each spot. Plain flat background #f4f7f7. No text, no numbers, no letters, no logos.
