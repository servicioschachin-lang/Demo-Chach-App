/* Configuración de la aplicación */
export const CONFIG = {
  CREAWEB_URL: 'https://chachingt.com',
  FORMSPREE: 'https://formspree.io/f/xrengvqb',
  DOMINIO: 'empresagt.com',
  LIMITE_HTML: 900000,
  STORE_KEY: 'creaweb_estado_v1',
  RESERVADOS: ['www', 'admin', 'mail', 'correo', 'ftp', 'api', 'app', 'panel', 'creaweb', 'soporte', 'ayuda', 'test'],
  TEMPLATES: [
    { nombre: 'Joyerías', icon: 'store', url: 'https://demojoy.chachin.workers.dev' },
    { nombre: 'Librerías', icon: 'store', url: 'https://demolib.chachin.workers.dev' },
    { nombre: 'Pollería', icon: 'utensils', url: 'https://polleria2026.netlify.app'},
     { nombre: 'Tiendas', icon: 'store', url: 'https://demotienda.chachin.workers.dev' },
    { nombre: 'Carnicería', icon: 'utensils', url: 'https://carniceria2026.netlify.app' },
     { nombre: 'Barberías', icon: 'store', url: 'https://demobarber.chachin.workers.dev' },
    { nombre: 'Parqueo', icon: 'heart', url: 'https://demoparqueo.chachin.workers.dev' },
    { nombre: 'Cafetería', icon: 'utensils', url: 'https://democoffee.chachin.workers.dev'},
    { nombre: 'ERP contable', icon: 'store', url: 'https://demoerp.chachin.workers.dev' },
     { nombre: 'Gym', icon: 'store', url: 'https://demogym.chachin.workers.dev' },
    { nombre: 'CRM centralizador', icon: 'store', url: 'https://democrm.chachin.workers.dev' },
    { nombre: 'Cosmiqueteria', icon: 'store', url: 'https://democos.chachin.workers.dev' },
    { nombre: 'Farmacias', icon: 'target', url: 'https://demofarma.chachin.workers.dev' },
    { nombre: 'Agropecuarias', icon: 'target', url: 'https://demoagro.chachin.workers.dev' },
     { nombre: 'Ferretería', icon: 'store', url: 'https://demoferret.chachin.workers.dev' },
  ],
  RETAILS: [
    { nombre: 'Walmart', icon: 'store', url: 'https://walmart.com' },
    { nombre: 'Amazon', icon: 'shopping-cart', url: 'https://amazon.com' },
    { nombre: 'Mercado Libre', icon: 'package', url: 'https://mercadolibre.com' },
    { nombre: 'eBay', icon: 'tag', url: 'https://ebay.com' },
    { nombre: 'Alibaba', icon: 'box', url: 'https://alibaba.com' },
    { nombre: 'Target', icon: 'target', url: 'https://target.com' },
    { nombre: 'Best Buy', icon: 'box', url: 'https://bestbuy.com' },
    { nombre: 'Costco', icon: 'shopping-cart', url: 'https://costco.com' },
    { nombre: 'Liverpool', icon: 'shopping-bag', url: 'https://liverpool.com.mx' },
    { nombre: 'Falabella', icon: 'store', url: 'https://falabella.com' },
    { nombre: 'Ripley', icon: 'shopping-bag', url: 'https://ripley.com' },
    { nombre: 'Oxxo', icon: 'shopping-bag', url: 'https://oxxo.com' },
    { nombre: 'Agroinsumos', icon: 'leaf', url: 'https://agroinsumos.com' },
    { nombre: 'Semillas', icon: 'seedling', url: 'https://semillas.com' },
    { nombre: 'Fertilizantes', icon: 'flask', url: 'https://fertilizantes.com' },
    { nombre: 'Tractor y Maquinaria', icon: 'truck', url: 'https://tractores.com' },
    { nombre: 'Agrovet', icon: 'paw', url: 'https://agrovet.com' },
    { nombre: 'Riego', icon: 'droplet', url: 'https://riego.com' },
    { nombre: 'Control de Plagas', icon: 'bug', url: 'https://controlplagas.com' },
    { nombre: 'Granja', icon: 'farm', url: 'https://granja.com' }
  ]
};

export const SOCIAL_PATTERNS = /(facebook\.com|fb\.com|instagram\.com|tiktok\.com|wa\.me|whatsapp\.com|twitter\.com|x\.com|youtube\.com|youtu\.be|linkedin\.com|t\.me|telegram)/i;

export const SOCIAL_NAMES = [
  [/facebook|fb\.com/i, 'Facebook'],
  [/instagram/i, 'Instagram'],
  [/tiktok/i, 'TikTok'],
  [/wa\.me|whatsapp/i, 'WhatsApp'],
  [/twitter|x\.com/i, 'X / Twitter'],
  [/youtube|youtu\.be/i, 'YouTube'],
  [/linkedin/i, 'LinkedIn'],
  [/t\.me|telegram/i, 'Telegram']
];
