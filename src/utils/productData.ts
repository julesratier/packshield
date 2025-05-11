
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
    image: "/lovable-uploads/749c660d-8352-4181-86b7-f56c7326e2ee.png",
    additionalImages: [
      "/lovable-uploads/749c660d-8352-4181-86b7-f56c7326e2ee.png",
      "/lovable-uploads/805497d7-8696-4cc6-bb18-5289ed33c40a.png",
      "/lovable-uploads/8a8ae62e-38d3-486c-ace5-ddba71582b9c.png"
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
    image: "/lovable-uploads/6e9d7aa1-0c99-43a7-9763-b3cfa618b7cf.png",
    additionalImages: [
      "/lovable-uploads/6e9d7aa1-0c99-43a7-9763-b3cfa618b7cf.png",
      "/lovable-uploads/26b3c3e3-de7b-4f74-a954-3c155d6b84cd.png",
      "/lovable-uploads/a3026e2f-1df4-49f7-a286-b19f2e52e58a.png"
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
    image: "/lovable-uploads/0a3c1900-8ac0-4945-bc9d-481040406f50.png",
    additionalImages: {
      "140x200": [
        "/lovable-uploads/0a3c1900-8ac0-4945-bc9d-481040406f50.png",
        "/lovable-uploads/625f51dc-185c-496c-9cc8-593860582555.png", 
        "/lovable-uploads/c0e1521b-de5a-475c-a7c4-7f0a54c018e6.png", // Updated image 3
        "/lovable-uploads/81c480a7-4e56-4431-9299-dbab8669e8cc.png", // Updated image 4
        "/lovable-uploads/e3c6c0f4-d1f5-4fa3-a658-107354a0dbd9.png", // Updated image 5
        "/lovable-uploads/35604239-0177-4ea6-a88a-2e4ced991900.png"  // Updated image 6
      ],
      "160x200": [
        "/lovable-uploads/0a3c1900-8ac0-4945-bc9d-481040406f50.png",
        "/lovable-uploads/abd6a3cd-56a5-4417-8c4b-fb1859c12c9b.png", 
        "/lovable-uploads/c0e1521b-de5a-475c-a7c4-7f0a54c018e6.png", // Updated image 3
        "/lovable-uploads/81c480a7-4e56-4431-9299-dbab8669e8cc.png", // Updated image 4
        "/lovable-uploads/e3c6c0f4-d1f5-4fa3-a658-107354a0dbd9.png", // Updated image 5
        "/lovable-uploads/35604239-0177-4ea6-a88a-2e4ced991900.png"  // Updated image 6
      ],
      "180x200": [
        "/lovable-uploads/0a3c1900-8ac0-4945-bc9d-481040406f50.png",
        "/lovable-uploads/c82c0160-ed55-4c12-a0ac-52be391099ee.png",
        "/lovable-uploads/c0e1521b-de5a-475c-a7c4-7f0a54c018e6.png", // Updated image 3
        "/lovable-uploads/81c480a7-4e56-4431-9299-dbab8669e8cc.png", // Updated image 4
        "/lovable-uploads/e3c6c0f4-d1f5-4fa3-a658-107354a0dbd9.png", // Updated image 5
        "/lovable-uploads/35604239-0177-4ea6-a88a-2e4ced991900.png"  // Updated image 6
      ]
    },
    sizes: ["140x200", "160x200", "180x200"],
    price: 29.90,
    rating: 4.5,
    reviews: 355, 
    category: "matelas2p",
    featured: true,
    amazonChoice: true
  },
  {
    id: 4,
    title: "Housse de protection pour matelas en tissu oxford - 4 poignées - Matelas 1 personne",
    image: "/lovable-uploads/4ef2324a-7042-495e-9299-31b2a6e05c33.png",
    additionalImages: [
      "/lovable-uploads/4ef2324a-7042-495e-9299-31b2a6e05c33.png",
      "/lovable-uploads/fa8ab4cc-52bc-40d2-9b01-7cc2fcc4415b.png",
      "/lovable-uploads/f229ab7c-0d8b-428e-894d-8c3fc630eb3a.png",
      "/lovable-uploads/15b53996-e3be-42eb-90f7-49487696a43a.png",
      "/lovable-uploads/aaacb1c2-9364-4f06-843f-0c57a04911a6.png",
      "/lovable-uploads/e06bb97f-3264-4ae6-bd47-a960f157e455.png"
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
    "Facile à nettoyer et à réutiliser"
  ];
  
  switch (productId) {
    case 1:
    case 2:
      return [
        "Tissu Oxford imperméable et robuste",
        ...baseFeatures,
        "Plastique transparent pour une identification facile",
        "Épaisseur supplémentaire pour résistance aux perforations",
        "Système de fermeture à glissière sécurisé"
      ];
    case 3:
    case 4:
      return [
        "Tissu Oxford imperméable et robuste",
        ...baseFeatures,
        "Matelas jusqu'à 30 cm d'épaisseur",
        "4 poignées pour un transport facilité",
        "Fermeture éclair renforcée sur 3 côtés",
        "Design anti-poussière et anti-humidité"
      ];
    case 5:
    case 6:
      return [
        "Matériau imperméable robuste",
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
