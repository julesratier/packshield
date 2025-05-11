
interface ProductSpecification {
  [key: string]: string;
}

export interface ProductImage {
  [key: string]: string[];
}

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

// Updated product data with switched images and review counts
export const products: Product[] = [
  {
    id: 1,
    title: "Housse de protection pour matelas en plastique épais - Matelas 2 personnes",
    image: "/lovable-uploads/749c660d-8352-4181-86b7-f56c7326e2ee.png", // Switched with product 2
    additionalImages: [
      "/lovable-uploads/749c660d-8352-4181-86b7-f56c7326e2ee.png",
      "Housse de protection pour matelas en plastique - Matelas 2 personnes - Image 2",
      "Housse de protection pour matelas en plastique - Matelas 2 personnes - Image 3"
    ],
    price: 21.90,
    rating: 4.5,
    reviews: 133,
    category: "matelas2p",
    featured: true,
    amazonChoice: false
  },
  {
    id: 2,
    title: "Housse de protection pour matelas en plastique épais - Matelas 1 personne",
    image: "/lovable-uploads/6e9d7aa1-0c99-43a7-9763-b3cfa618b7cf.png", // Switched with product 1
    additionalImages: [
      "/lovable-uploads/6e9d7aa1-0c99-43a7-9763-b3cfa618b7cf.png",
      "Housse de protection pour matelas en plastique épais - Matelas 1 personne - Image 2",
      "Housse de protection pour matelas en plastique épais - Matelas 1 personne - Image 3"
    ],
    price: 17.90,
    rating: 4.5,
    reviews: 133,
    category: "matelas1p",
    featured: true,
    amazonChoice: false
  },
  {
    id: 3,
    title: "Housse de protection pour matelas en tissu oxford - 4 poignées - Matelas 2 personnes",
    image: "/lovable-uploads/0af1396d-ec9f-4fca-91cd-0a52d845fe1d.png", // Nouvelle image principale
    additionalImages: {
      "140x200": [
        "/lovable-uploads/0af1396d-ec9f-4fca-91cd-0a52d845fe1d.png",
        "/lovable-uploads/625f51dc-185c-496c-9cc8-593860582555.png", // Updated image for 140cm
        "/lovable-uploads/c4147a2c-767a-4a07-b1b7-db48cc4cb112.png",
        "/lovable-uploads/4d825d9c-c8ea-4fa0-a188-269722ae141e.png",
        "/lovable-uploads/7c9f60c9-8bf9-4aa1-bc32-eda8ce1b9871.png",
        "/lovable-uploads/055260c1-0d88-4ac2-b84c-e05dd7fa10af.png"
      ],
      "160x200": [
        "/lovable-uploads/0af1396d-ec9f-4fca-91cd-0a52d845fe1d.png",
        "/lovable-uploads/abd6a3cd-56a5-4417-8c4b-fb1859c12c9b.png", // Nouvelle image 2 pour 160cm
        "/lovable-uploads/c4147a2c-767a-4a07-b1b7-db48cc4cb112.png",
        "/lovable-uploads/4d825d9c-c8ea-4fa0-a188-269722ae141e.png",
        "/lovable-uploads/7c9f60c9-8bf9-4aa1-bc32-eda8ce1b9871.png",
        "/lovable-uploads/055260c1-0d88-4ac2-b84c-e05dd7fa10af.png"
      ],
      "180x200": [
        "/lovable-uploads/0af1396d-ec9f-4fca-91cd-0a52d845fe1d.png",
        "/lovable-uploads/c82c0160-ed55-4c12-a0ac-52be391099ee.png",
        "/lovable-uploads/c4147a2c-767a-4a07-b1b7-db48cc4cb112.png",
        "/lovable-uploads/4d825d9c-c8ea-4fa0-a188-269722ae141e.png",
        "/lovable-uploads/7c9f60c9-8bf9-4aa1-bc32-eda8ce1b9871.png",
        "/lovable-uploads/055260c1-0d88-4ac2-b84c-e05dd7fa10af.png"
      ]
    },
    sizes: ["140x200", "160x200", "180x200"],
    price: 29.90,
    rating: 4.5,
    reviews: 355, // Updated review count
    category: "matelas2p",
    featured: true,
    amazonChoice: true
  },
  {
    id: 4,
    title: "Housse de protection pour matelas en tissu oxford - 4 poignées - Matelas 1 personne",
    image: "/lovable-uploads/e5fdd6a6-494d-4b06-bd6a-c8bc4855a803.png",
    additionalImages: [
      "/lovable-uploads/e5fdd6a6-494d-4b06-bd6a-c8bc4855a803.png",
      "/lovable-uploads/6a2cdbe6-6983-4333-b99e-03a02241d408.png", // Oxford mattress 1 place - Image 2
      "/lovable-uploads/dce49061-e72d-4ffa-814e-a921f5df9dd8.png", // Oxford mattress 1 place - Image 3
      "/lovable-uploads/9f599893-9cc6-4a05-8f82-985b543f8c8d.png", // Oxford mattress 1 place - Image 4
      "/lovable-uploads/82ddd7e9-aed9-4271-bfac-33109fbde9be.png", // Oxford mattress 1 place - Image 5
      "/lovable-uploads/eb9361d4-37fa-494a-9374-f31bca0c120a.png"  // Oxford mattress 1 place - Image 6
    ],
    price: 24.90,
    rating: 4.5,
    reviews: 355, // Updated review count
    category: "matelas1p",
    featured: false,
    amazonChoice: false
  },
  {
    id: 5,
    title: "Kit de rangement sous vide - 4 sacs sous vide et 4 coffres non tissés",
    image: "/lovable-uploads/8c803c29-2912-4a3b-b160-64c59a0e4642.png", 
    additionalImages: [
      "/lovable-uploads/8c803c29-2912-4a3b-b160-64c59a0e4642.png",
      "/lovable-uploads/c5db4083-6963-4c79-a130-78d0af7018a2.png",
      "/lovable-uploads/fa391208-f7f3-4551-8747-af5cbb2e3039.png",
      "/lovable-uploads/50694c0f-48a0-4d8d-b845-36397926d112.png",
      "/lovable-uploads/ed1cbc56-1f8b-4341-b60a-4288d1316949.png",
      "/lovable-uploads/6711d68e-221c-4e6a-bd27-1f039876f830.png"
    ],
    price: 37.90,
    rating: 4.0,
    reviews: 450, // Updated review count
    category: "rangementSacs",
    featured: true,
    amazonChoice: false
  },
  {
    id: 6,
    title: "Kit de rangement sous vide - 2 sacs sous vide et 2 coffres non tissés",
    image: "/lovable-uploads/b268c516-e549-401b-a4be-3e36df6e9332.png",
    additionalImages: [
      "/lovable-uploads/b268c516-e549-401b-a4be-3e36df6e9332.png",
      "/lovable-uploads/40bd4bc8-f5b7-47af-9edd-1109ee1eb6a8.png", // 2SET image 2
      "/lovable-uploads/a0f19279-812e-4e80-8dca-d4a98a1931ea.png", // 2SET image 3
      "/lovable-uploads/1a5b12d7-beec-45a2-8317-ab9f74ae692d.png", // 2SET image 4
      "/lovable-uploads/763e8bc1-77b8-4d6b-9157-caf246095514.png", // 2SET image 5
      "/lovable-uploads/de4efd90-a4e0-44a5-90de-d7c58053158a.png"  // 2SET image 6
    ],
    price: 23.90,
    rating: 4.0,
    reviews: 450, // Updated review count
    category: "rangementSacs",
    featured: false,
    amazonChoice: false
  }
];

// Descriptions de produits personnalisées
export const getProductDescription = (productId: number): string => {
  switch (productId) {
    case 1:
      return "Notre housse de protection pour matelas en plastique épais offre une protection supérieure contre la poussière, la saleté, l'humidité et les nuisibles. Parfaite pour le déménagement, le stockage ou la protection quotidienne de votre matelas deux personnes.";
    case 2:
      return "Notre housse de protection pour matelas en plastique épais offre une protection supérieure contre la poussière, la saleté, l'humidité et les nuisibles. Parfaite pour le déménagement, le stockage ou la protection quotidienne de votre matelas une personne.";
    case 3:
      return "Cette housse de matelas premium en tissu oxford résistant avec 4 poignées est idéale pour faciliter le transport et le déménagement. Protection optimale contre la poussière, l'humidité et les déchirures pour votre matelas deux personnes.";
    case 4:
      return "Cette housse de matelas premium en tissu oxford résistant avec 4 poignées est idéale pour faciliter le transport et le déménagement. Protection optimale contre la poussière, l'humidité et les déchirures pour votre matelas une personne.";
    case 5:
      return "Kit complet de rangement sous vide comprenant 4 sacs sous vide et 4 coffres non tissés. Solution parfaite pour maximiser votre espace de rangement tout en protégeant vos vêtements et linges de maison.";
    case 6:
      return "Kit complet de rangement sous vide comprenant 2 sacs sous vide et 2 coffres non tissés. Solution parfaite pour maximiser votre espace de rangement tout en protégeant vos vêtements et linges de maison.";
    default:
      return "Notre produit de protection offre une solution efficace pour préserver vos biens contre la poussière, la saleté, l'humidité et les nuisibles.";
  }
};

// Caractéristiques des produits personnalisées
export const getProductFeatures = (productId: number): string[] => {
  const baseFeatures = [
    "Matériau imperméable robuste",
    "Facile à nettoyer et à réutiliser"
  ];
  
  switch (productId) {
    case 1:
    case 2:
      return [
        ...baseFeatures,
        "Plastique transparent pour une identification facile",
        "Épaisseur supplémentaire pour résistance aux perforations",
        "Système de fermeture à glissière sécurisé"
      ];
    case 3:
    case 4:
      return [
        ...baseFeatures,
        "Tissu Oxford premium de haute qualité",
        "4 poignées pour un transport facilité",
        "Fermeture éclair renforcée sur 3 côtés",
        "Design anti-poussière et anti-humidité"
      ];
    case 5:
    case 6:
      return [
        ...baseFeatures,
        "Sacs sous vide avec valve anti-retour",
        "Compression maximale pour gagner jusqu'à 80% d'espace",
        "Coffres non tissés avec fenêtre transparente",
        "Protection optimale contre la poussière et les insectes"
      ];
    default:
      return baseFeatures;
  }
};

// Spécifications des produits personnalisées
export const getProductSpecifications = (productId: number): ProductSpecification => {
  switch (productId) {
    case 1:
      return {
        "Matériau": "Polyéthylène haute densité",
        "Épaisseur": "4 mil (extra épais)",
        "Couleur": "Bleu / Transparent",
        "Fermeture": "Fermeture éclair sur toute la longueur",
        "Taille": "Convient aux matelas 2 personnes (140-160cm x 190-200cm)",
        "Contenu du paquet": "1 Housse de Matelas"
      };
    case 2:
      return {
        "Matériau": "Polyéthylène haute densité",
        "Épaisseur": "4 mil (extra épais)",
        "Couleur": "Bleu / Transparent",
        "Fermeture": "Fermeture éclair sur toute la longueur",
        "Taille": "Convient aux matelas 1 personne (80-90cm x 190-200cm)",
        "Contenu du paquet": "1 Housse de Matelas"
      };
    case 3:
      return {
        "Matériau": "Tissu Oxford 600D",
        "Couleur": "Gris",
        "Fermeture": "Fermeture éclair sur 3 côtés avec rabat de protection",
        "Poignées": "4 poignées renforcées",
        "Taille": "Convient aux matelas 2 personnes (140-160cm x 190-200cm)",
        "Contenu du paquet": "1 Housse de Matelas"
      };
    case 4:
      return {
        "Matériau": "Tissu Oxford 600D",
        "Couleur": "Gris",
        "Fermeture": "Fermeture éclair sur 3 côtés avec rabat de protection",
        "Poignées": "4 poignées renforcées",
        "Taille": "Convient aux matelas 1 personne (80-90cm x 190-200cm)",
        "Contenu du paquet": "1 Housse de Matelas"
      };
    case 5:
      return {
        "Contenu": "4 sacs sous vide + 4 coffres de rangement",
        "Matériau sacs": "Polyéthylène et nylon",
        "Matériau coffres": "Tissu non tissé respirant",
        "Taille des sacs": "80cm x 100cm",
        "Taille des coffres": "45cm x 30cm x 20cm",
        "Valve": "Valve anti-retour double fermeture"
      };
    case 6:
      return {
        "Contenu": "2 sacs sous vide + 2 coffres de rangement",
        "Matériau sacs": "Polyéthylène et nylon",
        "Matériau coffres": "Tissu non tissé respirant",
        "Taille des sacs": "80cm x 100cm",
        "Taille des coffres": "45cm x 30cm x 20cm",
        "Valve": "Valve anti-retour double fermeture"
      };
    default:
      return {
        "Matériau": "Haute qualité",
        "Épaisseur": "Standard",
        "Couleur": "Variée",
        "Contenu du paquet": "1 produit"
      };
  }
};
