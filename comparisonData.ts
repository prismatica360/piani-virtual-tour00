import { ComparisonSection } from './types.ts';

// Basato sulle caratteristiche del piano PRO come fonte di verità.
// Le caratteristiche sono state interpretate per mostrare la progressione di valore.
export const COMPARISON_DATA: ComparisonSection[] = [
  {
    title: 'TECNICO',
    features: [
      { name: 'Tour 3D navigabile', base: true, standard: true, pro: true },
      { name: 'Video Fusion su prodotti chiave', base: false, standard: true, pro: true },
      { name: 'Hotspot illimitati (Testi, immagini, video, audio, tag vendita, CTA)', base: false, standard: false, pro: true },
      { name: 'Hotspot interattivi (fino a 15–20)', base: false, standard: true, pro: true },
      { name: 'Hotspot base (fino a 5, statici)', base: true, standard: true, pro: true },
      { name: 'Pannelli pubblicitari digitali', base: false, standard: true, pro: true },
      { name: 'Oggetti 3D interattivi', base: false, standard: false, pro: true },
      { name: 'Calendly integrato', base: false, standard: true, pro: true },
      { name: 'Route automatica per visita guidata', base: false, standard: true, pro: true },
      { name: 'Live 3D Calls con navigazione sincronizzata e chat', base: false, standard: false, pro: true },
      { name: 'Integrazione mappa negozio e panorami esterni con drone', base: false, standard: false, pro: true },
      { name: 'Branding completo: logo, colori, dominio personalizzato', base: false, standard: false, pro: true },
      { name: 'Branding leggero: logo + URL personalizzato', base: false, standard: true, pro: true },
      { name: 'Branding minimo: solo logo', base: true, standard: true, pro: true },
    ]
  },
  {
    title: 'ANALYTICS E CONTROLLO',
    features: [
      { name: 'Dashboard con visualizzazioni in tempo reale', base: false, standard: false, pro: true },
      { name: 'Accesso base alla dashboard', base: false, standard: true, pro: true },
      { name: 'Tracciamento interazioni per ogni hotspot', base: false, standard: false, pro: true },
      { name: 'Accesso a pannello editor per modifiche autonome', base: false, standard: false, pro: true },
      { name: 'Corso personalizzato + video tutorial su tutto il sistema', base: false, standard: false, pro: true },
    ]
  },
  {
    title: 'PUBBLICAZIONE E DIFFUSIONE',
    features: [
      { name: 'QR code personalizzati (brochure, biglietti da visita, etc)', base: false, standard: false, pro: true },
      { name: 'QR code standard', base: true, standard: true, pro: true },
      { name: 'Integrazione nel sito web (embedding diretto + banner)', base: false, standard: false, pro: true },
      { name: 'Assistenza inserimento sito', base: true, standard: true, pro: true },
      { name: 'Lancio social (reel, caroselli, post)', base: false, standard: true, pro: true },
      { name: 'Video pubblicitario del Virtual Tour per i social', base: false, standard: false, pro: true },
      { name: 'Inserimento su Google Maps e Street View', base: false, standard: true, pro: true },
      { name: 'Pubblicazione su YouTube', base: false, standard: false, pro: true },
      { name: 'Newsletter e DEM promozionali', base: false, standard: false, pro: true },
      { name: 'Distribuzione a interior designer e architetti locali', base: false, standard: false, pro: true },
    ]
  },
  {
    title: 'ASSISTENZA E AGGIORNAMENTI',
    features: [
      { name: 'Assistenza 24/7 via chat o WhatsApp', base: false, standard: false, pro: true },
      { name: 'Assistenza via WhatsApp (2 settimane)', base: false, standard: true, pro: true },
      { name: 'Assistenza via WhatsApp (7 giorni)', base: true, standard: true, pro: true },
      { name: 'Modifica hotspot illimitata durante il setup', base: false, standard: false, pro: true },
      { name: '1 aggiornamento gratuito/mese per 3 mesi', base: false, standard: false, pro: true },
      { name: '1 aggiornamento gratuito (primi 30 giorni)', base: false, standard: true, pro: true },
      { name: 'Corso 1-1 su analytics, modifiche e live tour', base: false, standard: false, pro: true },
      { name: 'Video tutorial base', base: false, standard: true, pro: true },
      { name: 'Mini guida PDF', base: true, standard: true, pro: true },
      { name: 'Possibilità di gestione continuativa', base: false, standard: false, pro: true },
      { name: 'Scalabilità futura (e-commerce, sezioni extra)', base: false, standard: false, pro: true },
      { name: 'Aggiornamenti stagionali e tematici', base: false, standard: false, pro: true },
    ]
  },
];
