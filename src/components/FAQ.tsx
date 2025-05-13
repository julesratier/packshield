
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Comment choisir la bonne taille de housse pour mon matelas ?",
    answer: "Mesurez votre matelas (longueur, largeur et épaisseur) et choisissez une housse légèrement plus grande pour faciliter l'insertion. Nos housses sont disponibles en plusieurs tailles standards (90x190, 140x190, 140x200, 160x200, 180x200 cm) et s'adaptent à des épaisseurs jusqu'à 30 cm."
  },
  {
    question: "Les housses Packshield sont-elles imperméables ?",
    answer: "Oui, nos housses de protection en plastique épais sont 100% imperméables et protègent efficacement votre matelas contre l'eau, l'humidité et les liquides. Nos housses en tissu oxford offrent une excellente protection contre la poussière et la saleté avec une résistance limitée à l'eau."
  },
  {
    question: "Combien de temps puis-je stocker mon matelas dans une housse Packshield ?",
    answer: "Nos housses sont conçues pour un stockage de longue durée. Vous pouvez conserver votre matelas dans nos housses pendant plusieurs années sans problème, à condition de le stocker dans un endroit sec et à l'abri des variations de température extrêmes."
  },
  {
    question: "Comment entretenir mes housses de protection ?",
    answer: "Nos housses en tissu oxford peuvent être nettoyées avec un chiffon humide ou lavées à la main avec un détergent doux. Les housses en plastique épais peuvent être essuyées avec un chiffon humide. Assurez-vous que les housses soient complètement sèches avant de les réutiliser ou de les ranger."
  },
  {
    question: "Les housses Packshield protègent-elles contre les punaises de lit ?",
    answer: "Oui, nos housses de protection hermétiques créent une barrière efficace contre les punaises de lit, les acariens et autres nuisibles. Pour une protection maximale, assurez-vous que la fermeture éclair est complètement fermée et que la housse n'est pas percée."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-packshield-navy mb-10 text-center">Questions fréquentes</h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className={`w-full text-left flex justify-between items-center p-4 md:p-5 ${
                    openIndex === index ? 'bg-packshield-lightGrey/30' : 'bg-white'
                  }`}
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="font-medium text-packshield-navy">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-packshield-orange" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-packshield-navy" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-4 md:p-5 bg-white">
                    <p className="text-packshield-grey">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
