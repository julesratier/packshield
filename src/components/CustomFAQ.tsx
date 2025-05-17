
import { FaqSectionWithCategories } from "@/components/ui/faq-with-categories";

const CustomFAQ = () => {
  // Updated FAQ items with removed emoticons and uniform categories
  const faqItems = [
    {
      question: "Que propose Packshield ?",
      answer: "Packshield conçoit et commercialise des <strong>produits de qualité pour le déménagement et le stockage</strong>, pensés pour protéger vos biens efficacement. Tous nos produits sont <strong>imaginés en France</strong>, avec une attention particulière portée à la praticité, la résistance des matériaux, et l'esthétique.",
      category: "Notre Entreprise"
    },
    {
      question: "Où puis-je acheter vos produits ?",
      answer: "Tous nos produits sont disponibles <strong>exclusivement sur Amazon</strong>. Packshield.shop est notre vitrine officielle, mais l'achat se fait directement via la plateforme Amazon pour vous garantir un paiement sécurisé, une livraison rapide, et un service client fiable.",
      category: "Achats"
    },
    {
      question: "Comment accéder à vos produits sur Amazon ?",
      answer: "Chaque fiche produit sur notre site contient un <strong>lien direct vers la page Amazon correspondante</strong>. Il vous suffit de cliquer sur le bouton \"Acheter sur Amazon\" pour finaliser votre commande.",
      category: "Achats"
    },
    {
      question: "Quels sont les délais de livraison ?",
      answer: "Les délais de livraison dépendent des conditions Amazon. En général, vous recevez votre commande en <strong>1 à 3 jours ouvrés</strong> si vous êtes membre Prime, ou sous <strong>3 à 5 jours</strong> en livraison standard.",
      category: "Livraison"
    },
    {
      question: "Puis-je retourner un produit ?",
      answer: "Oui, tous les achats effectués sur Amazon bénéficient de leur <strong>politique de retour standard</strong>. Vous pouvez généralement retourner un produit sous <strong>30 jours</strong> après réception.",
      category: "Service Client"
    },
    {
      question: "Quels moyens de paiement acceptez-vous ?",
      answer: "Les paiements sont gérés par Amazon. Vous pouvez payer avec <strong>carte bancaire, chèques-cadeaux Amazon</strong>, ou tout autre moyen proposé par Amazon dans votre région.",
      category: "Paiement"
    },
    {
      question: "Comment vous contacter ?",
      answer: "Pour toute question avant ou après votre achat, vous pouvez nous écrire à <strong>contact@packshield-official.com</strong>. Si votre question concerne une commande en cours, nous vous recommandons également de contacter le <strong>service client Amazon</strong> pour une prise en charge rapide.",
      category: "Contact"
    }
  ];

  return (
    <FaqSectionWithCategories
      title="Tout savoir sur Packshield"
      items={faqItems.map(item => ({
        ...item,
        answer: <span dangerouslySetInnerHTML={{ __html: item.answer }} />
      }))}
      className="py-16 md:py-20 bg-white"
    />
  );
};

export default CustomFAQ;
