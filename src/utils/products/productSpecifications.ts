
import { ProductSpecification } from './types';

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
        "Taille des sacs": "XL: 90cm x 70cm, XXL: 90cm x 110cm",
        "Taille des coffres": "40cm x 40cm x 20cm, 40cm x 60cm x 30cm",
        "Valve": "Valve anti-retour double fermeture"
      };
    case 6:
      return {
        "Contenu": "2 sacs sous vide + 2 coffres de rangement",
        "Matériau sacs": "Polyéthylène et nylon",
        "Matériau coffres": "Tissu non tissé respirant",
        "Taille des sacs": "XL: 90cm x 70cm, XXL: 90cm x 110cm",
        "Taille des coffres": "40cm x 40cm x 20cm, 40cm x 60cm x 30cm",
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
