# CLAUDE.md

Tento soubor poskytuje pokyny pro Claude Code (claude.ai/code) při práci s kódem v tomto repozitáři.

## Projekt

Statický web pro salon **Kadeřnictví V Okružní** — čistý HTML, CSS a JavaScript s Bootstrap 5, bez frameworku, bez build nástroje a bez package manageru. Přístup **mobile first**.

**Motto:** Krása začíná péčí o sebe.

## Základní informace

### Kadeřnický salón
- Markéta Olexová
- IČO: 08383103
- Telefon: 605 247 032
- Provozní doba dle objednání

### Kosmetický salón
- Andrea Ludkiviczová
- IČO: 75213826
- Telefon: 737 345 731
- Provozní doba dle objednání

Adresa: Okružní 239, 551 02 Jaroměř 3-Josefov

## Struktura webu

Vícestránkový web:

**index.html** — hlavní stránka se sekcemi:
1. Úvod / Hero
2. Recenze zákaznic
3. O nás
4. Kontakt

**sluzby.html** — samostatná stránka s ceníkem:
- Kadeřnictví (střihy, barvení, melír, trvalá, styling…)
- Kosmetický salón (čištění pleti, manikúra, řasy, depilace…)

Fotografie budou dodány jako vlastní soubory do složky `images/`.

## Spuštění lokálně

Otevři `index.html` přímo v prohlížeči, nebo spusť lokální server:

```
npx serve .
# nebo
python -m http.server
```

Funguje také rozšíření VS Code Live Server.

## Struktura souborů

```
index.html      # hlavní (a jediná) stránka
style.css       # vlastní styly nad Bootstrap 5
js/main.js      # JavaScript
images/         # fotky dodané zákazníkem
```

## Omezení

- Žádné build nástroje, žádný npm, žádný bundler — soubory se servírují přímo
- Žádný TypeScript — pouze čistý `.js`
- Bootstrap 5 načtený přes CDN, vlastní CSS jen pro přizpůsobení
