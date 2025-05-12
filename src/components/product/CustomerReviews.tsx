
import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Review {
  name: string;
  rating: number;
  title: string;
  date: string;
  comment: string;
}

interface CustomerReviewsProps {
  reviews: Review[];
  productId: number;
}

const CustomerReviews = ({ reviews, productId }: CustomerReviewsProps) => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  // Définir les reviews pour tous les produits concernés
  let displayReviews: Review[] = [];
  
  // Produits 1-2: Housses de protection plastique
  if (productId === 1 || productId === 2) {
    displayReviews = [
      {
        name: "caro22",
        rating: 5,
        title: "",
        date: "1er mai 2025",
        comment: "protège super bien le matelas. plastique épai comme indiqué. je recommande a 100%"
      },
      {
        name: "Julien",
        rating: 4,
        title: "",
        date: "19 avril 2025",
        comment: "Bonne housse, elle fait le job. Pas évident à enfiler seul, mais une fois mise, le matelas est bien protégé. Un petit bémol : la fermeture aurait pu être plus pratique."
      },
      {
        name: "Michèle A.",
        rating: 5,
        title: "",
        date: "23 mars 2025",
        comment: "Parfait pour stocker un matelas à la cave. La matière est résistante et épaisse, ça ne se perce pas facilement. Livraison rapide aussi. Je suis très satisfaite de cet achat."
      },
      {
        name: "Raf",
        rating: 4,
        title: "",
        date: "11 février 2025",
        comment: "Plastique bien épais, utilisé pr un déménagement. Ca a tenu nickel. Je mets 4 étoiles pcq ya pas de poignée, sinon top."
      },
      {
        name: "Aline D.",
        rating: 5,
        title: "",
        date: "28 avril 2025",
        comment: "Très bon produit ! Mon matelas 140x190 est bien rentré dedans, ça ferme bien et ça tient. J'avais peur que ce soit fragile mais franchement la qualité est là. Je recommande sans hésiter."
      },
      {
        name: "momo62",
        rating: 5,
        title: "",
        date: "6 mai 2025",
        comment: "rien a dire top! utilisé pr proteger un matelas ds mon garage. pas un gramme de poussiere passé"
      },
      {
        name: "Céline",
        rating: 4,
        title: "",
        date: "9 mars 2025",
        comment: "Le plastique est vraiment épais comme promis. Juste un peu galère à replier après, sinon très bon achat."
      },
      {
        name: "Kevin",
        rating: 5,
        title: "",
        date: "3 avril 2025",
        comment: "Reçu en bon état, bien emballé. Housse très résistante. Je l'ai utilisée pour protéger le matelas dans le grenier, et il est toujours nickel après plusieurs semaines."
      },
      {
        name: "PatiPata",
        rating: 4,
        title: "",
        date: "17 février 2025",
        comment: "bien costaud. pas de mauvaise surprise. j'aurais juste aimé une fermeture un peu plus large. bon produit."
      },
      {
        name: "Maxime R.",
        rating: 5,
        title: "",
        date: "26 mars 2025",
        comment: "Solide, simple, efficace. Que demander de plus ? Mon matelas est à l'abri de l'humidité et de la poussière. Très satisfait."
      }
    ];
  }
  // Produits 3-4: Housses de protection Oxford
  else if (productId === 3 || productId === 4) {
    displayReviews = [
      {
        name: "Thierry.l",
        rating: 5,
        title: "Article conforme",
        date: "27 mars 2025",
        comment: "Fait le job, pratique et suffisamment solide"
      },
      {
        name: "Amazon Customer",
        rating: 5,
        title: "Pratique",
        date: "11 février 2025",
        comment: "Protège bien le matelas"
      },
      {
        name: "Van",
        rating: 5,
        title: "Produit de qualité",
        date: "29 janvier 2025",
        comment: "Housse correspondante aux dimensions indiquées. Utilisée pour un matelas standard, remisé dans un grenier. Mise en place facile grâce à la fermeture éclair 3 côtés. Housse qui semble de bonne facture et ne s'est pas déchirée. Munie de poignées, très pratiques pour le bouger une fois dans la housse. Pour le prix, je recommande !"
      },
      {
        name: "eliane rascalou",
        rating: 4,
        title: "Taille bien adapté au grand matelas",
        date: "9 février 2025",
        comment: "Produit de bonne qualité"
      },
      {
        name: "Agence T.",
        rating: 5,
        title: "Excellent produit",
        date: "23 avril 2025",
        comment: "Produit qualitatif. Adapté au matelas même très épais"
      },
      {
        name: "Florence5622",
        rating: 5,
        title: "Housse de protection",
        date: "4 mai 2025",
        comment: "Housse solide, non transparente, elle enveloppe bien le matelas."
      },
      {
        name: "Chereau",
        rating: 5,
        title: "facile d'utilisation",
        date: "7 janvier 2025",
        comment: "Excellent produit pour transporter et stoker un matelas, parfait pour protéger un matelas de Camping-car pendant l'hivernage …"
      },
      {
        name: "Soso",
        rating: 5,
        title: "Top",
        date: "10 avril 2025",
        comment: "Top"
      }
    ];
  }
  // Produits 5-6: Kits de rangement sous vide
  else if (productId === 5 || productId === 6) {
    displayReviews = [
      {
        name: "bocquet",
        rating: 5,
        title: "",
        date: "22 avril 2025",
        comment: "Articles très pratique"
      },
      {
        name: "Spock",
        rating: 4,
        title: "",
        date: "28 janvier 2025",
        comment: "Le kit était bien emballé dans un petit carton inclus lui-même dans le colis Amazon. Les sacs de rangement sont bien avec une belle couleur bleu marine conforme aux photos, à voir leur résistance dans le temps, mais à première vue la qualité est bonne. Les housses sous vide fonctionnent bien et conservent le vide sous réserve des précautions d'usage : ne pas trop remplir, bien insister en fermant la glissière, éviter de faire une seule pile de bas en haut sinon l'air du bas peut ne pas bien se vider (préférer un empilage côte à côte voir même en vrac). Mais je n'en ai jamais trouvé de parfaites sur cet aspect. Ici j'ai juste eu un petit problème avec un pli de vêtement qui appuyait sur l'intérieur de la valve : il a juste suffi que je décale un peu pour que la valve se retrouve sur un petit creux. Après avoir testé les 4 housses pendant 2 semaines, en dehors de ces petites précautions, les valves fonctionnent très bien et ne perdent pas d'air, tout comme les fermetures à glissières. Il manquerait éventuellement une sangle de serrage de la housse sous vide intégrée au sac, comme ça elle ne peut pas se regonfler : ça existe mais c'est bien plus cher en principe (après on peut toujours acheter une sangle séparément). Donc très satisfait après 2 semaines d'utilisation."
      },
      {
        name: "Neau solenn",
        rating: 5,
        title: "",
        date: "28 mars 2025",
        comment: "Top et conforme à la description 👍"
      },
      {
        name: "maryline chartrain",
        rating: 3,
        title: "",
        date: "8 juin 2024",
        comment: "Les poches sous vide sont de taille correcte et tiennent dans le temps mais les sacs bleu marine sont très fragiles au niveau des poignées"
      },
      {
        name: "Lili",
        rating: 5,
        title: "",
        date: "10 décembre 2024",
        comment: "Je suis hyper satisfaite de mon achat ! Il faut savoir que j'habite un petit appartement donc peu de rangement et grâce à ces housses je peux stocker énormément de vêtements ou autre et Hop dans les placards ! C'est un gain de place considérable. Je ne regrette absolument pas et je recommande sans hésiter"
      },
      {
        name: "ac92",
        rating: 5,
        title: "",
        date: "10 décembre 2024",
        comment: "Les articles sont conformes. J'apprécie la solidité des produits. Les sacs sous vides sont hyper pratiques pour les couettes et les oreillers. C'est un gain de place énorme. Je recommande!"
      },
      {
        name: "Vaz",
        rating: 5,
        title: "",
        date: "20 juin 2024",
        comment: "Produit efficace et top, gain de place dans le placard, conforme aux photos. Les poches sous vides sont de grande contenance, très pratique avec la fermeture éclair sur la housse c'est une bonne idée… Ainsi que les poignées facilement transportables et solides."
      },
      {
        name: "Hannibal",
        rating: 5,
        title: "",
        date: "30 janvier 2025",
        comment: "conforme à la description du vendeur"
      },
      {
        name: "Djabali",
        rating: 5,
        title: "",
        date: "22 décembre 2024",
        comment: "J'ai reçus le collis rapidement. Facile d'utilisation surtout qu'il a deux taille c'est pratique car on peut mettre plein de vêtements dedans."
      }
    ];
  }
  else {
    displayReviews = [];
  }
  
  // Le nombre de reviews à afficher par défaut
  const initialReviewCount = 6;
  
  // Les reviews visibles actuellement
  const visibleReviews = showAllReviews 
    ? displayReviews 
    : displayReviews.slice(0, initialReviewCount);

  // Déterminer s'il y a plus de reviews à afficher
  const hasMoreReviews = displayReviews.length > initialReviewCount;

  return (
    <div className="mt-8 p-6 bg-white border rounded-lg">
      <h3 className="text-xl font-semibold text-packshield-navy mb-4">Avis clients</h3>
      <div className="space-y-6">
        {visibleReviews.length > 0 ? (
          visibleReviews.map((review, index) => (
            <div key={index} className={index < visibleReviews.length - 1 ? "border-b pb-4 mb-4" : ""}>
              <div className="flex items-start mb-2">
                <div>
                  <div className="font-medium">{review.name}</div>
                  <div className="flex items-center mt-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor" 
                      />
                    ))}
                    {review.title && <span className="ml-2 text-sm">{review.title}</span>}
                  </div>
                  <div className="text-xs text-packshield-grey mb-2">Avis laissé en France le {review.date}</div>
                </div>
              </div>
              <p className="text-sm">{review.comment}</p>
            </div>
          ))
        ) : (
          <p>Aucun avis client pour ce produit.</p>
        )}
        
        {hasMoreReviews && (
          <div className="text-center mt-4">
            <Button 
              variant="link" 
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="text-packshield-orange hover:text-packshield-orange/90"
            >
              {showAllReviews ? "Voir moins" : "Voir plus"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerReviews;
