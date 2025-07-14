
import { PricingPlan } from './types.ts';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'base',
    name: 'Piano BASE',
    price: '€590',
    description: "Solo per chi vuole esserci, ma non vendere.",
    features: [
      { id: 'base_1', name: 'Tour 3D navigabile (300m²)', shortDescription: 'Un tour compatto per piccoli spazi.' },
      { id: 'base_2', name: 'Fino a 5 hotspot statici', shortDescription: 'Per testi e immagini di base.' },
      { id: 'base_3', name: 'QR Code & Assistenza minima', shortDescription: 'Per la condivisione e il supporto iniziale.' },
    ],
    styleClasses: {
      bg: 'bg-slate-900',
      border: 'border-cyan-700/50',
      text: 'text-slate-300',
      titleColor: 'text-cyan-400',
      hoverShadow: 'hover:shadow-cyan-500/10',
      buttonBg: 'bg-cyan-500/10',
      buttonHoverBg: 'hover:bg-cyan-500/20',
    },
    detailedFeatures: [
      {
        title: '✅ COSA INCLUDE (TECNICO):',
        items: [
          'Tour 3D navigabile (fino a 300 m²)',
          'Fino a 5 hotspot base: solo testi o immagini statiche',
          'Nessun video fusion o tag cliccabile',
          '1 tag prezzo informativo statico su un prodotto (senza link)',
          'No route automatica',
          'No Calendly, no call to action',
          'Branding minimo: solo logo inserito nel tour',
          'QR code base per brochure o vetrina',
        ],
      },
      {
        title: '📣 Diffusione e pubblicazione',
        items: [
            'QR code fornito in .png',
            'Aiuto base per inserimento sul sito (link diretto)',
            'Nessuna pubblicazione social o video promozionale inclusa',
            'Nessuna pubblicazione su Google Maps',
        ]
      },
      {
          title: '📊 Controllo e dati',
          items: [
            'Nessun accesso a dashboard o analytics',
            'Nessun accesso all’editor',
            '0 aggiornamenti inclusi',
            'Modifiche future su richiesta: €90 cad.',
          ]
      },
      {
          title: '🧩 Assistenza inclusa',
          items: [
            'Supporto via WhatsApp solo per 7 giorni (durante attivazione)',
            'Mini guida PDF (navigazione + QR)',
            'Nessun tutorial video',
            'Nessun supporto integrazione social/sito',
          ]
      }
    ],
  },
  {
    id: 'standard',
    name: 'Piano STANDARD',
    price: '€1.190',
    description: "Ottimo punto di partenza, ma senza spinta.",
    features: [
      { id: 'standard_1', name: 'Tour 3D navigabile (700m²)', shortDescription: 'Un tour dettagliato per spazi di medie dimensioni.' },
      { id: 'standard_2', name: 'Hotspot interattivi (15-20)', shortDescription: 'Con tag prodotto, video e CTA.' },
      { id: 'standard_3', name: 'Branding & Calendly', shortDescription: 'Logo personalizzato e prenotazione appuntamenti.' },
      { id: 'standard_4', name: 'QR Code & Diffusione Social', shortDescription: 'Strumenti base per la condivisione.' },
      { id: 'standard_5', name: 'Assistenza e 1 aggiornamento', shortDescription: 'Supporto iniziale e una modifica gratuita.' },
    ],
    styleClasses: {
      bg: 'bg-slate-900',
      border: 'border-blue-500',
      text: 'text-slate-300',
      titleColor: 'text-blue-400',
      hoverShadow: 'hover:shadow-blue-500/10',
      buttonBg: 'bg-blue-500/10',
      buttonHoverBg: 'hover:bg-blue-500/20',
    },
    detailedFeatures: [
      {
        title: '✅ COSA INCLUDE (TECNICO):',
        items: [
          'Tour 3D navigabile (fino a 700 m²)',
          'Hotspot interattivi (fino a 15–20) che includono: Testi, immagini, link, 2–3 tag prodotto, 1 video Fusion dimostrativo e Call to Action base (“chiedi info”).',
          '1 pannello pubblicitario digitale (es: “Promo Saldi -30%”)',
          'Calendly integrato per appuntamenti (link standard)',
          'Route automatica base: visita guidata preimpostata',
          'Branding leggero: logo + URL personalizzato (es: realsee.link/intermobil)',
          'Embedding sito web semplice (con supporto)',
        ],
      },
      {
        title: '📣 Diffusione e pubblicazione',
        items: [
            'QR code statico fornito (per brochure, sito, vetrina)',
            'Assistenza per l\'inserimento nel sito',
            'Post social di lancio + immagini pronte all’uso (immagine “visita il tour”)',
            'Inserimento link nel profilo Instagram o Facebook',
            'Possibilità di pubblicarlo su Google Maps',
        ]
      },
      {
          title: '📊 Controllo e dati',
          items: [
            'Accesso base alla dashboard visualizzazioni (solo principali metriche)',
            'Nessun accesso all’editor: modifiche su richiesta',
            '1 aggiornamento gratuito incluso entro 30 giorni',
            'Aggiornamenti extra: €70 cad.',
          ]
      },
      {
          title: '🧩 Assistenza inclusa',
          items: [
            'Supporto WhatsApp per 2 settimane',
            'Mini guida PDF su come usare il tour',
            '1 video tutorial base (navigazione + QR + social)',
            'Supporto per integrazione sito/social (1 volta)',
          ]
      }
    ],
  },
  {
    id: 'pro',
    name: 'Piano PRO',
    price: '€1.950',
    description: 'Il vero showroom digitale, che vende da solo.',
    features: [
      { id: 'pro_1', name: 'Tour 3D navigabile completo', shortDescription: 'Showroom digitale che vende da solo.' },
      { id: 'pro_2', name: 'Video Fusion e Hotspot illimitati', shortDescription: 'Massima interattività e call to action.' },
      { id: 'pro_3', name: 'Analytics e Controllo Completo', shortDescription: 'Dashboard e pannello di modifica autonomo.' },
      { id: 'pro_4', name: 'Diffusione e Marketing inclusi', shortDescription: 'QR code, social, Google Maps e altro.' },
      { id: 'pro_5', name: 'Assistenza Premium e Aggiornamenti', shortDescription: 'Supporto prioritario e formazione 1-1.' },
    ],
    styleClasses: {
      bg: 'bg-slate-900',
      border: 'border-violet-500',
      text: 'text-slate-300',
      titleColor: 'text-violet-400',
      hoverShadow: 'hover:shadow-violet-500/10',
      buttonBg: 'bg-violet-500/10',
      buttonHoverBg: 'hover:bg-violet-500/20',
    },
    detailedFeatures: [
      {
        title: '✅ COSA INCLUDE (TECNICO):',
        items: [
          'Tour 3D navigabile (fino a 1.000 m² o più)',
          'Video Fusion su ogni prodotto chiave (15–20 sec)',
          'Hotspot illimitati (Testi, immagini, video, audio, tag vendita, CTA)',
          'Pannelli pubblicitari digitali (promo, offerte, campagne)',
          'Oggetti 3D interattivi (mobili, texture, rotazione)',
          'Calendly integrato per prenotazione appuntamenti',
          'Route automatica per visita guidata',
          'Live 3D Calls con navigazione sincronizzata e chat',
          'Integrazione mappa negozio e panorami esterni con drone',
          'Branding completo: logo, colori, dominio personalizzato',
        ],
      },
      {
        title: '📊 Analytics e controllo completo',
        items: [
          'Dashboard con visualizzazioni in tempo reale',
          'Tracciamento interazioni per ogni hotspot',
          'Accesso a pannello editor per modifiche autonome',
          'Corso personalizzato + video tutorial su tutto il sistema',
        ],
      },
      {
        title: '📣 Pubblicazione e diffusione del Virtual Tour',
        items: [
          'QR code personalizzati (brochure, biglietti da visita, esterno negozio)',
          'Integrazione nel sito web (embedding diretto + banner)',
          'Lancio social (reel, caroselli, post)',
          'Video pubblicitario del Virtual Tour per i social',
          'Inserimento su Google Maps e Street View con link diretto',
          'Pubblicazione su YouTube',
          'Newsletter e DEM promozionali',
          'Distribuzione a interior designer e architetti locali',
        ],
      },
      {
        title: '🧩 Assistenza premium + aggiornamenti',
        items: [
          'Assistenza 24/7 via chat o WhatsApp',
          'Modifica hotspot illimitata durante il setup',
          '1 aggiornamento gratuito/mese per 3 mesi',
          'Corso 1-1 su analytics, modifiche e live tour',
          'Possibilità di gestione continuativa',
          'Scalabilità futura (e-commerce, sezioni extra)',
          'Aggiornamenti stagionali e tematici (saldi, nuove collezioni)',
        ],
      },
    ],
  },
];