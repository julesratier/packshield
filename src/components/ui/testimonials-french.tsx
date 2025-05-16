
import React from "react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

// French testimonials data
const testimonials = [
  {
    text: "Super qualité pour cette housse qui me permet de laisser mon matelas sous le lit alors que les enfants viennent l'été. Le matelas est super, bien protégé et la housse est très solide.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Madeleine Dupont",
    role: "Cliente fidèle",
  },
  {
    text: "Avec notre matelas de 140*200cm pour le déménagement, cette protection est idéale. Facile à poser sur le matelas et le déplacement nickel. Je recommande !",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Thomas Lefebvre",
    role: "Client satisfait",
  },
  {
    text: "Je suis hyper satisfaite de mon achat ! Grâce à ces housses je peux stocker énormément de vêtements ou autre dans mon petit appartement. C'est un gain de place considérable.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Sophie Martin",
    role: "Cliente récente",
  },
  {
    text: "Produit de très bonne qualité, résistant et facile à utiliser. Parfait pour protéger mon matelas pendant mon déménagement et maintenant pour le stockage.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Philippe Dubois",
    role: "Client satisfait",
  },
  {
    text: "Excellente housse, très résistante et facile à fermer. Je l'utilise pour protéger mes vêtements d'hiver et elle fait parfaitement le job !",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Claire Moreau",
    role: "Cliente fidèle",
  },
  {
    text: "Les housses sont arrivées rapidement et sont exactement comme décrites. Elles m'ont sauvé pendant mon déménagement. Je les recommande vivement.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Julien Rousseau",
    role: "Client récent",
  },
  {
    text: "Produit conforme à la description, matière solide, bonne finition. J'ai acheté plusieurs tailles et toutes sont parfaites pour ranger mes affaires de saison.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Aurélie Petit",
    role: "Cliente satisfaite",
  },
  {
    text: "Achat pour le déménagement de ma fille, les housses sont très pratiques et de bonne qualité. On les garde maintenant pour le stockage des vêtements.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Michel Bernard",
    role: "Parent satisfait",
  },
  {
    text: "Parfait pour mon déménagement ! Les housses ont bien protégé mes matelas et mon canapé. La fermeture éclair est robuste et fonctionne bien.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Nathalie Leroy",
    role: "Cliente récente",
  },
];

// Split testimonials into three columns
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsFrench = () => {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-packshield-navy text-white relative">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-white/20 py-1 px-4 rounded-lg">Témoignages</div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-5 text-center">
            Ce que disent nos clients
          </h2>
          <p className="text-center mt-2 text-gray-300 max-w-2xl mx-auto">
            Des milliers de clients sont satisfaits partout en France. Merci pour votre confiance ❤️ depuis 10 ans déjà.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export { TestimonialsFrench };
