
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
