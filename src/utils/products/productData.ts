
export interface Product {
  id: number;
  title: string;
  image: string;
  additionalImages: string[] | { [key: string]: string[] };
  price: number;
  rating: number;
  reviews: number;
  category: string;
  featured: boolean;
  amazonChoice: boolean;
  sizes?: string[];
}

export const getProductDescription = (productId: number): string => {
  switch (productId) {
    case 1:
      return "Protégez votre matelas avec notre housse en plastique épais, idéale pour les déménagements et le stockage. Robuste et imperméable, elle assure une protection maximale contre la poussière, les liquides et les déchirures.";
    case 2:
      return "Nos sacs de rangement sous vide sont la solution idéale pour économiser de l'espace dans vos placards et valises. Réutilisables et faciles à utiliser, ils protègent vos vêtements de la poussière, de l'humidité et des insectes.";
    case 3:
      return "La housse de protection en tissu Packshield est conçue pour offrir une protection respirante à votre matelas. Idéale pour une utilisation quotidienne, elle protège contre les acariens, la poussière et les allergènes.";
    case 4:
      return "Optimisez votre espace de rangement avec notre kit comprenant des sacs sous vide et des coffres non tissés. Parfait pour organiser vos vêtements, couettes et oreillers tout en les protégeant de la poussière et de l'humidité.";
    case 5:
      return "Notre kit de rangement compact est spécialement conçu pour les petits espaces. Il comprend des boîtes pliables, des séparateurs et des étiquettes pour une organisation optimale de vos affaires.";
    case 6:
      return "Maximisez votre espace de rangement avec notre kit complet comprenant 4 sacs sous vide et 4 coffres non tissés. Idéal pour ranger vos vêtements hors saison, couettes et oreillers en toute sécurité.";
    default:
      return "Protégez vos biens avec nos solutions de stockage innovantes et durables. Conçues pour répondre à tous vos besoins, nos produits vous offrent une protection maximale et une organisation optimale.";
  }
};

export const getProductFeatures = (productId: number): string[] => {
  switch (productId) {
    case 1:
      return [
        "Plastique épais et résistant",
        "Imperméable et anti-déchirure",
        "Protection contre la poussière et les liquides",
        "Facile à installer et à retirer"
      ];
    case 2:
      return [
        "Économie d'espace jusqu'à 80%",
        "Réutilisables et durables",
        "Protection contre la poussière, l'humidité et les insectes",
        "Facile à utiliser avec n'importe quel aspirateur"
      ];
    case 3:
      return [
        "Tissu respirant et doux",
        "Protection contre les acariens et les allergènes",
        "Lavable en machine",
        "Idéal pour une utilisation quotidienne"
      ];
    case 4:
      return [
        "Sacs sous vide réutilisables",
        "Coffres non tissés robustes",
        "Protection contre la poussière et l'humidité",
        "Facile à assembler et à utiliser"
      ];
    case 5:
      return [
        "Boîtes pliables pour un rangement facile",
        "Séparateurs ajustables",
        "Étiquettes incluses pour une organisation optimale",
        "Conception compacte pour les petits espaces"
      ];
    case 6:
      return [
        "4 sacs sous vide de grande capacité",
        "4 coffres non tissés robustes",
        "Protection maximale contre la poussière et l'humidité",
        "Idéal pour ranger les vêtements hors saison"
      ];
    default:
      return [
        "Solutions de stockage innovantes",
        "Matériaux durables et de haute qualité",
        "Protection maximale contre les éléments",
        "Organisation optimale de vos biens"
      ];
  }
};

export const getProductSpecifications = (productId: number): { [key: string]: string } => {
  switch (productId) {
    case 1:
      return {
        "Matériau": "Plastique polyéthylène épais",
        "Dimensions": "240 x 180 cm",
        "Épaisseur": "0.15 mm",
        "Poids": "500 g"
      };
    case 2:
      return {
        "Matériau": "PA + PE",
        "Dimensions": "60 x 80 cm (x5), 80 x 100 cm (x5)",
        "Épaisseur": "0.08 mm",
        "Poids": "800 g"
      };
    case 3:
      return {
        "Matériau": "Tissu non tissé",
        "Dimensions": "160 x 200 cm",
        "Densité": "90 g/m²",
        "Poids": "700 g"
      };
    case 4:
      return {
        "Matériau": "PA + PE (sacs), Non tissé (coffres)",
        "Dimensions": "50 x 70 x 30 cm (coffres)",
        "Capacité": "70 litres (par coffre)",
        "Poids": "1.5 kg"
      };
    case 5:
      return {
        "Matériau": "Polypropylène",
        "Dimensions": "30 x 30 x 15 cm (boîtes)",
        "Nombre de pièces": "8",
        "Poids": "1 kg"
      };
    case 6:
      return {
        "Matériau": "PA + PE (sacs), Non tissé (coffres)",
        "Dimensions": "60 x 80 x 40 cm (coffres)",
        "Capacité": "90 litres (par coffre)",
        "Poids": "2 kg"
      };
    default:
      return {
        "Matériau": "Variable selon le produit",
        "Dimensions": "Variable selon le produit",
        "Capacité": "Variable selon le produit",
        "Poids": "Variable selon le produit"
      };
  }
};

const products = [
  {
    id: 1,
    title: "Housse protection matelas en plastique épais",
    image: "/lovable-uploads/07997799-3799-467a-b33d-346a98e5599c.png",
    price: 19.90,
    additionalImages: [
      "/lovable-uploads/07997799-3799-467a-b33d-346a98e5599c.png",
      "https://m.media-amazon.com/images/I/61EjpJ29BCL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61jbJ68QtPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/715oQt9cXEL._AC_SL1500_.jpg"
    ],
    rating: 4.5,
    reviews: 124,
    amazonChoice: true,
    category: "matelas2p",
    featured: true
  },
  {
    id: 2,
    title: "Lot de 10 sacs de rangement sous vide",
    image: "https://m.media-amazon.com/images/I/71aaron9TGL._AC_SL1500_.jpg",
    price: 29.90,
    additionalImages: [
      "https://m.media-amazon.com/images/I/71aaron9TGL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71QKfqcwXEL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71t8G2jJWDL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71lmKnVUPDL._AC_SL1500_.jpg"
    ],
    rating: 4.3,
    reviews: 89,
    amazonChoice: false,
    category: "rangementSacs",
    featured: false
  },
  {
    id: 3,
    title: "Housse protection matelas en tissu",
    image: "https://m.media-amazon.com/images/I/71Lqy2YsLDL._AC_SL1500_.jpg",
    price: 24.90,
    additionalImages: {
      "140x200": [
        "https://m.media-amazon.com/images/I/71Lqy2YsLDL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71aaron9TGL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71QKfqcwXEL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71t8G2jJWDL._AC_SL1500_.jpg"
      ],
      "160x200": [
        "https://m.media-amazon.com/images/I/71Lqy2YsLDL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71aaron9TGL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71QKfqcwXEL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71t8G2jJWDL._AC_SL1500_.jpg"
      ],
      "180x200": [
        "https://m.media-amazon.com/images/I/71Lqy2YsLDL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71aaron9TGL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71QKfqcwXEL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71t8G2jJWDL._AC_SL1500_.jpg"
      ]
    },
    rating: 4.0,
    reviews: 67,
    amazonChoice: false,
    category: "matelas2p",
    featured: false,
    sizes: ["140x200", "160x200", "180x200"]
  },
  {
    id: 4,
    title: "Kit de rangement sous vide - 2 sacs sous vide et 2 coffres non tissés",
    image: "https://m.media-amazon.com/images/I/81JHFSt7UVL._AC_SL1500_.jpg",
    price: 24.90,
    additionalImages: [
      "https://m.media-amazon.com/images/I/81JHFSt7UVL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/711vQoVqAbL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81OpAgnQsEL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71qJgg0nyoL._AC_SL1500_.jpg"
    ],
    rating: 4.2,
    reviews: 48,
    amazonChoice: true,
    category: "rangementSacs",
    featured: true
  },
  {
    id: 5,
    title: "Kit de rangement compact",
    image: "https://m.media-amazon.com/images/I/71qJgg0nyoL._AC_SL1500_.jpg",
    price: 34.90,
    additionalImages: [
      "https://m.media-amazon.com/images/I/71qJgg0nyoL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81OpAgnQsEL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/711vQoVqAbL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81JHFSt7UVL._AC_SL1500_.jpg"
    ],
    rating: 4.4,
    reviews: 52,
    amazonChoice: false,
    category: "rangementSacs",
    featured: true
  },
  {
    id: 6,
    title: "Kit de rangement sous vide - 4 sacs sous vide et 4 coffres non tissés",
    image: "https://m.media-amazon.com/images/I/81OpAgnQsEL._AC_SL1500_.jpg",
    price: 39.90,
    additionalImages: [
      "https://m.media-amazon.com/images/I/81OpAgnQsEL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/711vQoVqAbL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81JHFSt7UVL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71qJgg0nyoL._AC_SL1500_.jpg"
    ],
    rating: 4.2,
    reviews: 36,
    amazonChoice: false,
    category: "rangementSacs",
    featured: false
  },
];

export default products;
