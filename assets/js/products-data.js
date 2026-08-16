/**
 * UNIQUEART — CATÁLOGO DE PRODUTOS
 * Para adicionar um produto novo: copia um objeto {...} e ajusta os campos.
 * `price`: número em MT, ou null se for "Sob consulta".
 * `image`: caminho da foto em assets/images/products/{categoria}/
 */

const PRODUCTS = [

  // --- CAIXA PERSONALIZADA ---
  {
    id: 'caixa-personalizada',
    category: 'caixa-personalizada',
    categoryLabel: 'Caixas Personalizadas',
    name: 'Shadow Box "You Are The World"',
    price: 1550,
    image: '/assets/images/products/caixa-personalizada/caixa-personalizada.jpg',
    description: 'Moldura e frase personalizável. Ideal para o Dia das Mães ou aniversários especiais.'
  },
  {
    id: 'caixa-texto',
    category: 'caixa-personalizada',
    categoryLabel: 'Caixas Personalizadas',
    name: 'Caixa com texto personalizado',
    price: 1550,
    image: '/assets/images/products/caixa-personalizada/caixa-texto.jpg',
    description: 'Personalizamos o seu presente com o versículo, citação ou frase especial.'
  },

  // --- FRASCOS ---
  {
    id: 'frascos',
    category: 'frascos',
    categoryLabel: 'Recipientes multiuso',
    name: 'Recipientes multiuso',
    price: 1300,
    image: '/assets/images/products/frascos/frascos.jpg',
    description: 'Recipiente personalizado com nome, ou outro conteúdo à tua escolha.'
  },
  {
    id: 'frascos',
    category: 'frascos',
    categoryLabel: 'Recipientes multiuso',
    name: 'Recipientes multiuso',
    price: 1300,
    image: '/assets/images/products/frascos/frasco.jpg',
    description: 'Recipiente personalizado com nome, ou outro conteúdo à tua escolha.'
  },

  // --- QUADROS PERSONALIZADOS ---
  {
    id: 'quadros-personalizados',
    category: 'quadros-personalizados',
    categoryLabel: 'Quadros Personalizados',
    name: 'Quadros Personalizados',
    price: 1700,
    image: '/assets/images/products/quadros-personalizados/quadros-personalizados.jpg',
    description: 'A tua inicial em 3D, coberta de flores de papel artesanais. Escolhe a letra e a paleta de cores.'
  },
    {
    id: 'quadros-personalizados',
    category: 'quadros-personalizados',
    categoryLabel: 'Quadros Personalizados',
    name: 'Quadros Personalizados',
    price: 1700,
    image: '/assets/images/products/quadros-personalizados/quadros.jpg',
    description: 'Perfeito para presentear a quem mais amamos'
  },

  // --- BOUQUETS ---
  {
    id: 'bouquet',
    category: 'bouquets',
    categoryLabel: 'Bouquets',
    name: 'Bouquet de Ténis',
    price: 3500,
    image: '/assets/images/products/bouquets/bouquets.jpg',
    description: 'Um bouquet criativo e diferente — os teus ténis preferidos embrulhados como um ramo de flores.'
  },
  {
    id: 'bouquet-chocolate',
    category: 'bouquets',
    categoryLabel: 'Bouquets',
    name: 'Bouquet de Chocolates',
    price: null,
    image: '/assets/images/products/bouquets/bouquet-chocolate.jpg',
    description: 'Bouquet com chocolates Ferrero e embrulho premium — perfeito para surpreender.'
  },

  // --- CHAVEIROS & ACRÍLICO ---
  {
    id: 'chaveiros-acrilico',
    category: 'chaveiros-acrilico',
    categoryLabel: 'Chaveiros & Acrílico',
    name: 'Chaveiro Acrílico com Nome — Metálico',
    price: 250,
    image: '/assets/images/products/chaveiros/chaveiros-acrilico.jpg',
    description: 'Chaveiro transparente com o teu nome em vinil metálico e borla decorativa.'
  },
  {
    id: 'chaveiro-decorado',
    category: 'chaveiros-acrilico',
    categoryLabel: 'Chaveiros & Acrílico',
    name: 'Chaveiro Acrílico com Nome — Resina',
    price: 350,
    image: '/assets/images/products/chaveiros-acrilico/chaveiro-decorado.jpg',
    description: 'Acabamento em resina com efeito artístico personalizado, nome em vinil dourado.'
  },

  // --- CAMISETAS PERSONALIZADAS ---
  {
    id: 'estampagem',
    category: 'estampagem',
    categoryLabel: 'Camisetas Personalizadas',
    name: 'Camiseta Personalizada — Nome',
    price: 450,
    image: '/assets/images/products/camisetas/estampagem.jpg',
    description: 'Aplicação de nome à tua escolha, várias cores de camiseta e vinil disponíveis.'
  },

  // --- PAPELARIA ---
  {
    id: 'cadernos',
    category: 'papelaria',
    categoryLabel: 'Papelaria',
    name: 'Livro de Receitas Personalizado',
    price: 700,
    image: '/assets/images/products/papelaria/cadernos.jpg',
    description: 'Caderno ilustrado para guardares as tuas receitas favoritas, com nome na capa.'
  },
  {
    id: 'agendas',
    category: 'papelaria',
    categoryLabel: 'Papelaria',
    name: 'Agenda A5 Personalizado',
    price: 450,
    image: '/assets/images/products/papelaria/agenda.jpg',
    description: 'Agenda A5 com capa personalizada — ideal para o dia a dia ou como lembrança.'
  },

  // --- BRINDES ---
  {
    id: 'brindes',
    category: 'brindes',
    categoryLabel: 'Brindes Personalizados',
    name: 'Brindes Personalizados — Ocasiões Especiais',
    price: null,
    image: '/assets/images/products/doces/doces-eid-chocolate.jpg',
    description: 'Brindes personalisados com rótulo para Eid, aniversários ou eventos.'
  },

];