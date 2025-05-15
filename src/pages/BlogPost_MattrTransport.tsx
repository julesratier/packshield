
import { useEffect, useState } from 'react';
import BlogLayout from '@/components/blog/BlogLayout';
import { extractTableOfContents } from '@/utils/blogUtils';
import BlogTags from '@/components/blog/BlogTags';
import BlogShareButtons from '@/components/blog/BlogShareButtons';
import BlogAuthorCard from '@/components/blog/BlogAuthorCard';

const BlogPostMattrTransport = () => {
  const [activeSection, setActiveSection] = useState("");
  
  // Blog post content
  const post = {
    id: 10,
    title: "🚚 Comment transporter son matelas efficacement ?",
    content: `
      <p>
        Que ce soit pour un déménagement, un changement de literie ou un simple déplacement ponctuel, transporter un matelas est une étape souvent sous-estimée… jusqu'à ce qu'on s'y confronte. Encombrant, fragile et exposé à la saleté, un matelas mal protégé peut facilement se tacher, se déformer ou s'endommager. Voici nos conseils pour un <strong>transport serein et efficace</strong>.
      </p>
      
      <h2 id="preparation">✅ 1. Préparez votre matelas avant le transport</h2>
      
      <p>Avant de déplacer votre matelas, quelques précautions sont à prendre :</p>
      
      <ul>
        <li>
          <strong>Aérez-le</strong> pendant quelques heures.
        </li>
        <li>
          <strong>Nettoyez-le rapidement</strong> à l'aide d'un aspirateur pour retirer poussière et acariens.
        </li>
        <li>
          Assurez-vous qu'il est <strong>parfaitement sec</strong>, sans humidité résiduelle.
        </li>
      </ul>
      
      <p>👉 Cette étape permet d'éviter les odeurs désagréables et réduit les risques de moisissures, surtout si le transport dure plus d'une journée.</p>
      
      <h2 id="protection">✅ 2. Utilisez une housse de protection adaptée</h2>
      
      <p>Ne transportez jamais un matelas à nu :</p>
      
      <ul>
        <li>
          Optez pour une <strong>housse de déménagement zippée</strong>, résistante et imperméable.
        </li>
        <li>
          Les modèles dotés de <strong>poignées intégrées</strong> facilitent grandement la manutention, notamment dans les escaliers.
        </li>
        <li>
          Choisissez un matériau <strong>épais mais respirant</strong>, qui évite la condensation pendant le trajet.
        </li>
      </ul>
      
      <p>💡 Les housses Packshield sont conçues spécialement pour répondre à ces exigences.</p>
      
      <h2 id="transport">✅ 3. Transportez le matelas à plat si possible</h2>
      
      <p>Si votre véhicule le permet, il est préférable de <strong>placer le matelas à plat</strong> pour éviter qu'il ne se plie ou s'affaisse :</p>
      
      <ul>
        <li>
          Positionnez-le sur une surface plane (fond de camion, sommier démonté, etc.).
        </li>
        <li>
          <strong>Évitez de poser des objets lourds dessus</strong>, surtout au centre.
        </li>
      </ul>
      
      <p>Si vous devez le <strong>transporter debout</strong>, veillez à bien le caler à l'aide de sangles ou entre deux meubles, afin qu'il ne glisse pas ni ne se déforme.</p>
      
      <h2 id="precautions">✅ 4. Protégez-le des chocs, de l'humidité et de la saleté</h2>
      
      <p>Durant le transport, plusieurs risques peuvent endommager votre matelas :</p>
      
      <ul>
        <li>
          <strong>Protégez les coins</strong> avec des renforts ou du carton si vous devez passer par des cages d'escalier étroites.
        </li>
        <li>
          <strong>Ne posez jamais le matelas directement au sol</strong>, surtout à l'extérieur.
        </li>
        <li>
          <strong>Évitez de déménager par temps de pluie</strong>, ou prévoyez une bâche supplémentaire pour une protection maximale.
        </li>
      </ul>
      
      <h2 id="arrivee">✅ 5. Déballez-le rapidement à l'arrivée</h2>
      
      <p>Une fois le matelas arrivé à destination :</p>
      
      <ul>
        <li>
          Retirez la housse de transport dès que possible pour lui permettre de <strong>respirer</strong>.
        </li>
        <li>
          Laissez-le <strong>à plat pendant quelques heures</strong> avant de le réutiliser.
        </li>
        <li>
          Vérifiez qu'il <strong>n'a subi aucune déformation</strong> durant le transport.
        </li>
      </ul>
      
      <h2 id="resume">🧠 En résumé</h2>
      
      <blockquote>
        <p>✔️ Nettoyez et aérez le matelas avant le transport</p>
        <p>✔️ Protégez-le avec une housse zippée et résistante</p>
        <p>✔️ Transportez-le à plat ou bien calé debout</p>
        <p>✔️ Évitez les chocs, la pluie et les sols sales</p>
        <p>✔️ Déballez-le rapidement pour qu'il retrouve sa forme</p>
      </blockquote>
      
      <p>
        Un matelas bien transporté, c'est un matelas préservé. Pour cela, <strong>une housse adaptée est indispensable</strong>. Les <strong>housses Packshield</strong> associent robustesse, praticité et design pensé pour une manutention simplifiée.
      </p>
      
      <p>
        <a href="https://amzn.to/43aXBYX" target="_blank" rel="noopener noreferrer" className="text-packshield-orange hover:underline">➡️ Découvrez nos modèles sur Amazon</a>
      </p>
    `,
    image: "/lovable-uploads/de586984-0cb1-4c86-8ede-3e1f44572b17.png",
    date: "10 Mai 2025",
    readTime: "6 min de lecture",
    category: "Déménagement",
    author: {
      name: "Hélène Mirmande",
      avatar: "/lovable-uploads/552f045e-6d5b-4d23-a7ce-18789ffeb237.png",
      role: "Responsable Produits chez Packshield",
      slug: "helene-mirmande",
      bio: "Hélène est spécialisée dans la conception de produits pour la maison et la décoration. Elle accorde une grande importance à la qualité et imagine des solutions simples et pratiques, pensées pour faciliter le quotidien."
    },
    relatedPosts: [
      {
        id: 11,
        title: "Top 8 des meilleures housses matelas pour les déménagement",
        image: "/lovable-uploads/241f7930-bdd5-4cab-87f2-f5031b99cd9b.png",
        date: "8 Mai 2025"
      },
      {
        id: 2,
        title: "Moving Day Tips: Protect Your Furniture",
        image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aW5nJTIwZGF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        date: "5 Mai 2025"
      }
    ],
    tags: ["Déménagement", "Matelas", "Protection"]
  };

  // Extract table of contents
  const tableOfContents = extractTableOfContents(post.content);

  // Intersection Observer to highlight active section in table of contents
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    document.querySelectorAll('h2[id]').forEach(header => observer.observe(header));
    
    return () => observer.disconnect();
  }, [post.content]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Function to handle smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <BlogLayout
        id={post.id}
        title={post.title}
        content={post.content}
        image={post.image}
        date={post.date}
        readTime={post.readTime}
        category={post.category}
        author={post.author}
        relatedPosts={post.relatedPosts}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
        tableOfContents={tableOfContents}
        language="fr"
      />
      
      {/* Tags, Share Buttons, and Author Card rendered outside of BlogLayout */}
      <div className="container mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3">
            <BlogTags tags={post.tags} />
            <BlogShareButtons title={post.title} language="fr" />
            <BlogAuthorCard author={post.author} />
          </div>
          <div className="lg:w-1/3"></div>
        </div>
      </div>
    </>
  );
};

export default BlogPostMattrTransport;
