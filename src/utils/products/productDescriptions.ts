
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
