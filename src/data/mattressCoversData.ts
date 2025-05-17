
interface MattressCover {
  id: number;
  rank: number;
  title: string;
  price: string;
  image: string;
  amazonLink: string;
  verdict: string;
  description: string;
  isBestChoice?: boolean;
  isBestValue?: boolean;
  rating?: number;
}

export const mattressCoversData: MattressCover[] = [
  {
    id: 1,
    rank: 1,
    title: "Packshield - Housse Matelas Déménagement Oxford",
    price: "À partir de 24,90€",
    image: "/lovable-uploads/9bf86611-f2e3-4cbb-a7d7-dee74d19e63e.png",
    amazonLink: "https://amzn.to/43aXBYX",
    verdict: "Le choix de la sérénité durable",
    description: "Dès la première prise en main, la housse Packshield en Oxford inspire confiance. Le matériau épais et imperméable est un gage de protection contre les aléas du déménagement : frottements contre les meubles, éclaboussures accidentelles, voire même une exposition rapide à une légère pluie lors du chargement ou du déchargement. Lors de notre test d'imperméabilité, l'eau perlait littéralement à la surface sans laisser la moindre trace d'humidité.",
    isBestChoice: true,
    rating: 5
  },
  {
    id: 2,
    rank: 2,
    title: "Packshield - Housse Matelas Déménagement en Plastique Epais",
    price: "À partir de 18,90€",
    image: "/lovable-uploads/9506d2f3-665b-4e21-8afc-30d67d79eaba.png",
    amazonLink: "https://amzn.to/43aXBYX",
    verdict: "L'efficacité robuste à prix accessible",
    description: "Si le modèle Oxford mise sur la durabilité du tissu, cette version en plastique épais et résistant offre une barrière impénétrable contre l'humidité et les saletés. Lors de nos tests, même des projections d'eau plus importantes n'ont pas réussi à traverser le matériau. C'est un point crucial pour les déménagements où le risque d'exposition aux éléments est plus élevé.",
    isBestValue: true,
    rating: 4.8
  },
  {
    id: 3,
    rank: 3,
    title: "Mottez - Housse de Protection pour matelas",
    price: "10,90€",
    image: "/lovable-uploads/8356953e-3e1a-49ca-b97c-9b3247b0fd12.png",
    amazonLink: "https://amzn.to/4k6fDT4",
    verdict: "L'option dépannage pour les petits budgets",
    description: "Le modèle Mottez se positionne clairement comme une solution économique à usage unique. Son prix attractif en fait une option envisageable pour un déménagement rapide et sur une courte distance, où le risque de dommages importants est limité.",
    rating: 3.5
  },
  {
    id: 4,
    rank: 4,
    title: "U-Haul - Mattress Bag",
    price: "56,55€",
    image: "/lovable-uploads/5b3dfff2-dc47-422b-9dd2-b40528c57f4c.png",
    amazonLink: "https://amzn.to/3S1x8bb",
    verdict: "La réputation américaine à prix d'importation",
    description: "La marque U-Haul est très populaire aux États-Unis pour ses solutions de déménagement, et leur housse de matelas ne fait pas exception en termes de plastique épais et de sensation de robustesse. L'existence en version ventilée ou non est une fonctionnalité intéressante, permettant de choisir l'option la plus adaptée aux conditions de stockage ou de transport.",
    rating: 4.2
  },
  {
    id: 5,
    rank: 5,
    title: "Weidebach - Housse de Protection pour Matelas",
    price: "18,99€",
    image: "/lovable-uploads/337d709d-85fc-4a93-b89a-09b89407402e.png",
    amazonLink: "https://amzn.to/3ZccRn7",
    verdict: "Le compromis qualité-prix made in Germany",
    description: "La housse Weidebach se distingue par son plastique imperméable, offrant une bonne protection contre les liquides et l'humidité. L'aspect lavable et réutilisable est un avantage économique et écologique, permettant d'amortir l'investissement sur plusieurs déménagements ou périodes de stockage.",
    rating: 4.0
  },
  {
    id: 6,
    rank: 6,
    title: "Garoop - Housse Matelas en plastique avec Fermeture Éclair",
    price: "16,99€",
    image: "/lovable-uploads/82ddd7e9-aed9-4271-bfac-33109fbde9be.png",
    amazonLink: "https://amzn.to/3SxkgJW",
    verdict: "Une alternative équilibrée en milieu de gamme",
    description: "La housse Garoop propose une fermeture sur 3 côtés, un avantage significatif pour faciliter l'installation et le retrait du matelas. Le plastique PE résistant de couleur blanche semble suffisamment robuste pour un déménagement standard, et sa compatibilité avec les matelas jusqu'à 25 cm d'épaisseur la rend polyvalente.",
    rating: 3.8
  },
  {
    id: 7,
    rank: 7,
    title: "Joycemall - Housse en matière bâche",
    price: "43,32€",
    image: "/lovable-uploads/cfbed207-cdcb-42cf-8fe9-c3c6992298ef.png",
    amazonLink: "https://amzn.to/4j0cBih",
    verdict: "La forteresse pour le stockage longue durée",
    description: "La housse Joycemall se positionne comme une solution spécialisée pour le stockage longue durée. Sa matière bâche très résistante inspire une confiance totale quant à sa capacité à protéger le matelas des éléments, de la poussière, et même d'une certaine humidité ambiante pendant une période prolongée.",
    rating: 4.4
  },
  {
    id: 8,
    rank: 8,
    title: "Zouway - Protege Matelas Imperméable à Double Fermeture éclair",
    price: "14,99€",
    image: "/lovable-uploads/74a7fb8d-bfee-48c1-9272-9290a8bdae65.png",
    amazonLink: "https://amzn.to/3GNHCsa",
    verdict: "L'option économique pour les matelas spécifiques",
    description: "La housse Zouway se présente comme une solution économique avec une double fermeture éclair, ce qui pourrait théoriquement faciliter l'insertion du matelas. Lors de nos tests, l'utilisation s'est avérée assez facile, bien que la fermeture éclair sur un seul côté offre une ouverture moins large que les modèles à trois côtés ou intégrales.",
    rating: 3.5
  }
];
