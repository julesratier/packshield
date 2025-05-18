import { FaqSection } from "@/components/ui/faq-section";

const CustomFAQ = () => {
  // Updated FAQ items with removed emoticons and uniform categories
  const faqItems = [
    {
      icon: "📦",
      question: "Que propose Packshield ?",
      answer: "Packshield conçoit et commercialise des produits de qualité pour le déménagement et le stockage, pensés pour protéger vos biens efficacement. Tous nos produits sont imaginés en France, avec une attention particulière portée à la praticité, la résistance des matériaux, et l'esthétique."
    },
    {
      icon: "📞",
      question: "Comment vous contacter ?",
      answer: "Pour toute question avant ou après votre achat, vous pouvez nous écrire à contact@packshield-official.com. Si votre question concerne une commande en cours, nous vous recommandons également de contacter le service client Amazon pour une prise en charge rapide."
    },
    {
      icon: "💳",
      question: "Quels moyens de paiement acceptez-vous ?",
      answer: "Les paiements sont gérés par Amazon. Vous pouvez payer avec carte bancaire, chèques-cadeaux Amazon, ou tout autre moyen proposé par Amazon dans votre région."
    },
    {
      icon: "🔄",
      question: "Puis-je retourner un produit ?",
      answer: "Oui, tous les achats effectués sur Amazon bénéficient de leur politique de retour standard. Vous pouvez généralement retourner un produit sous 30 jours après réception."
    },
    {
      icon: "⏱️",
      question: "Quels sont les délais de livraison ?",
      answer: "Les délais de livraison dépendent des conditions Amazon. En général, vous recevez votre commande en 1 à 3 jours ouvrés si vous êtes membre Prime, ou sous 3 à 5 jours en livraison standard."
    },
    {
      icon: "🛒",
      question: "Comment accéder à vos produits sur Amazon ?",
      answer: "Chaque fiche produit sur notre site contient un lien direct vers la page Amazon correspondante. Il vous suffit de cliquer sur le bouton 'Acheter sur Amazon' pour finaliser votre commande."
    },
    {
      icon: "🏬",
      question: "Où puis-je acheter vos produits ?",
      answer: "Tous nos produits sont disponibles exclusivement sur Amazon. Packshield.shop est notre vitrine officielle, mais l'achat se fait directement via la plateforme Amazon pour vous garantir un paiement sécurisé, une livraison rapide, et un service client fiable."
    }
  ];

  return (
    <FaqSection
      title="Tout savoir sur Packshield"
      items={faqItems.map(item => ({
        question: (
          <>
            <span className="inline-block mr-2 text-xl align-middle">{item.icon}</span>{item.question}
          </>
        ),
        answer: item.answer
      }))}
      className="pt-4 pb-16 md:pb-20 bg-white"
    />
  );
};

export default CustomFAQ;
