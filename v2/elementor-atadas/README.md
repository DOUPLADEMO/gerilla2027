# GMK sales oldal 2027 – Elementor átadás (F verzió)

## Hogyan kerül át Elementorba
1. **Képek:** a `kepek/` mappa tartalmát töltsd fel a WordPress Médiatárba (mind WebP, max 1600 px; a portrék 360×360). Fájlnév = a táblázatban lévő név, így könnyű visszakeresni.
2. **Szerkezet:** minden blokk egy Elementor *Container* (Flexbox), benne natív Heading, Text Editor, Button, Image és Icon Box elemek. Nincs iframe, nincs egyedi HTML-widget, így a mérés (GA4, Meta pixel) a saját oldalon fut.
3. **Globális színek és betű (Site Settings → Global):**
   - Sötét: #0C181B · Mély teal: #306364 · Teal: #2F7F80 · Gomb: #12908D → #0B7A80 · Világos teal: #84E0DB · Narancs (címke): #F1A246 · Szöveg: #2B302F
   - Betű: Poppins (cím 800, gomb 700), törzs Inter 400/500. Gomb: nagybetűs, 12 px sugár, min. magasság 52 px.
4. **Animációk:** a belépő animációt Elementorban a *Motion Effects → Entrance Animation: Fade In Up* adja; a tréningfal és az útvonal-fülek a Pro *Loop Carousel* / *Tabs* / *Toggle* widgetekkel építhetők.
5. **Tematikus oldalak:** az F oldal a `?utvonal=adatelemzes`, `projektmenedzsment`, `ai` címkével jön. Elementorban ez három külön oldal (az alap oldal duplikátuma), mert Elementor URL-paraméterre nem cserél szöveget. Az eltérő blokkok: hero, Ismerős?, Képzeld el, Miért most?, Az útvonal lépései.

## Blokkok sorrendje
1. Fejléc + ragadós alsó CTA-sáv (alacsony; a haladásjelző a *Scroll Progress* eleme)
2. Hero: bal oldalon cím és szöveg, jobbra András fotója az árkártyával
3. Eredménykártyák (3 db, belóg a hero aljába)
4. „Melyik útvonal a tiéd?” kvíz (4 útvonal, kategóriaszínes kártyák)
5. Februári tematikus blokk (3 fül, gombok kiemelve)
6. Ismerős? → Képzeld el → Miért most?
7. Az útvonal lépései (csak a tematikus oldalakon)
8. Pillérek: Tudás · Állás · Nyelv (3 fül, alapból zárva)
9. Katalógus: tréningfal (2 sor, ellentétes irányban) + kategóriák
10. Számok (A1–C1 pill) · Hogyan tanulsz
11. Tagjaink eredményei + Google-értékelés sáv
12. Oktatók (sötét, egyszínű háttér) · 18 éve segítünk
13. Kinek való? → Ajánlat és ár (Mit kapsz / Mennyibe kerülne máshol)
14. Szakképesítés (két oszlop egyforma magas, kép az üres helyen)
15. GYIK · záró CTA · lábléc

## Képek
A `kepek/` mappa tartalmazza az összeset: András hero-fotója, a brand- és illu- háttérképek, logók (színes és fehér), a 10 teszt-oktatói portré. A végleges fotókat (András, trénerek) ugyanilyen néven cseréld le.

## Még hiányzó külső adat
- Google-átlag és az értékelés-link
- András valódi fotója, a többi oktató fotója (jelenleg 10 teszt-portré)
- Engedélyek az „ENGEDÉLYRE VÁR” sikertörténetekhez
- A docx-ben jelölt „[egyeztetendő]”, „[forrás bekérendő]” szövegek
- Háttérképek a februári és az ár blokkhoz (hosszú egyenes vonalak nélkül)
- Szilvi táblázatának piros soraihoz a trénernevek, a katalógus a végleges adatból frissítendő
