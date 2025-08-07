# ⚽ Voetbalclub Website

Een moderne, responsieve website voor het promoten van voetbalclub inschrijvingen voor verschillende leeftijdscategorieën (U6 tot U15). Gebouwd met React en Vite, met een prachtig geel en zwart kleurenschema.

## 🎯 Functies

### Kernfunctionaliteit
- **Leeftijdscategorie Selectie**: Interactieve kaarten voor U6, U8, U10, U12 en U15 categorieën
- **Inschrijfformulier**: Volledig inschrijfformulier met validatie
- **Responsief Ontwerp**: Mobile-first aanpak met hamburger menu
- **Formuliervalidatie**: Real-time validatie met foutmeldingen
- **Succesmeldingen**: Geanimeerde succesmeldingen na formulierverzending

### Gebruikerservaring
- **Vloeiend Scrollen**: Ankerlinks met vloeiende scrollbeweging
- **Interactieve Elementen**: Hover-effecten en animaties
- **Mobiel Menu**: Inklapbare navigatie voor mobiele apparaten
- **Visuele Feedback**: Geselecteerde staten en laadindicatoren

### Ontwerpkenmerken
- **Geel & Zwart Thema**: Professionele voetbalclub branding
- **Moderne UI**: Schone, moderne interface met gradiënten en schaduwen
- **Toegankelijkheid**: Juiste contrastverhoudingen en toetsenbordnavigatie
- **Cross-browser Compatibel**: Werkt op alle moderne browsers

## 🚀 Aan de Slag

### Vereisten
- Node.js (versie 14 of hoger)
- npm of yarn package manager

### Installatie

1. **Kloon de repository**
   ```bash
   git clone <repository-url>
   cd analytics
   ```

2. **Installeer dependencies**
   ```bash
   npm install
   ```

3. **Start de ontwikkelserver**
   ```bash
   npm run dev
   ```

4. **Open je browser**
   Ga naar `http://localhost:5173` om de website te bekijken

### Bouwen voor Productie

```bash
npm run build
```

De gebouwde bestanden staan in de `dist` directory.

## 📁 Projectstructuur

```
analytics/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx          # Hoofdapplicatie component
│   ├── App.css          # Component-specifieke stijlen
│   ├── index.css        # Globale stijlen en CSS variabelen
│   ├── main.jsx         # Applicatie entry point
│   └── assets/
│       └── react.svg
├── index.html           # HTML template
├── package.json         # Dependencies en scripts
├── vite.config.js       # Vite configuratie
└── README.md           # Project documentatie
```

## 🎨 Ontwerpsysteem

### Kleurenpalet
- **Primair Geel**: `#ffd700` (Gouden geel)
- **Secundair Geel**: `#ffed4e` (Licht geel)
- **Primair Zwart**: `#000000` (Zuiver zwart)
- **Secundair Zwart**: `#1a1a1a` (Donkergrijs)
- **Fout Rood**: `#ff4444` (Validatiefouten)
- **Succes Groen**: `#4CAF50` (Succesmeldingen)

### Typografie
- **Lettertype**: Arial, system-ui, sans-serif
- **Koppen**: Vetgedrukte gewichten met grotere formaten
- **Body Tekst**: Normale gewicht met goede regelafstand

### Spatiëring
- **Container**: Max-breedte 1200px met 20px padding
- **Secties**: 80px verticale padding
- **Kaarten**: 2rem padding met 15px border radius

## 🔧 Aanpassing

### Leeftijdscategorieën
Bewerk de `ageCategories` array in `App.jsx` om te wijzigen:
- Categorienamen en beschrijvingen
- Leeftijdsbereiken
- Trainingsfocusgebieden

### Styling
- **Kleuren**: Update CSS custom properties in `index.css`
- **Layout**: Wijzig grid systemen in `App.css`
- **Animaties**: Pas transitietijden en effecten aan

### Inhoud
- **Club Informatie**: Update contactgegevens en trainingstijden
- **Hero Sectie**: Wijzig welkomstbericht en statistieken
- **Formuliervelden**: Voeg inschrijfformuliervelden toe of verwijder

## 📱 Responsieve Breakpoints

- **Mobiel**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🧪 Testen

### Handmatige Test Checklist
- [ ] Formuliervalidatie werkt correct
- [ ] Mobiel menu opent en sluit
- [ ] Leeftijdscategorie selectie werkt
- [ ] Succesmelding verschijnt na verzending
- [ ] Responsief ontwerp op verschillende schermformaten
- [ ] Vloeiend scrollen navigatie
- [ ] Alle links werken correct

### Browser Testen
- Chrome (nieuwste)
- Firefox (nieuwste)
- Safari (nieuwste)
- Edge (nieuwste)

## 🚀 Deployment

### Vercel (Aanbevolen)
1. Verbind je GitHub repository met Vercel
2. Vercel detecteert automatisch het Vite project
3. Deploy met standaard instellingen

### Netlify
1. Bouw het project: `npm run build`
2. Upload de `dist` folder naar Netlify
3. Configureer build instellingen indien nodig

### Andere Platforms
De gebouwde bestanden in de `dist` directory kunnen worden gedeployed naar elke statische hosting service.

## 📞 Ondersteuning

Voor vragen of problemen:
- **E-mail**: info@voetbalclub.com
- **Telefoon**: +32 123 456 789

## 📄 Licentie

Dit project is gemaakt voor de Voetbalclub opgericht in september 2024. Alle rechten voorbehouden.

---

**Opgericht**: September 2024  
**Laatst Bijgewerkt**: December 2024  
**Versie**: 1.0.0
