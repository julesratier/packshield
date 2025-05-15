
import { useEffect, useState } from 'react';
import BlogLayout from '@/components/blog/BlogLayout';
import { extractTableOfContents } from '@/utils/blogUtils';
import BlogTags from '@/components/blog/BlogTags';
import BlogShareButtons from '@/components/blog/BlogShareButtons';
import BlogAuthorCard from '@/components/blog/BlogAuthorCard';

const BlogPostTop8Housses = () => {
  const [activeSection, setActiveSection] = useState("");
  
  // Blog post content
  const post = {
    id: 11,
    title: "Top 8 des meilleures housses matelas pour les déménagement",
    content: `
      <p>Choisir la bonne housse de matelas pour un déménagement est essentiel pour protéger votre literie pendant le transport. Une housse de qualité protège contre la poussière, l'humidité, les déchirures et les taches, préservant ainsi votre investissement. Voici notre sélection des meilleures options disponibles sur le marché.</p>
      
      <h2 id="pourquoi-proteger">Pourquoi protéger son matelas lors d'un déménagement ?</h2>
      <p>Avant de découvrir notre sélection, rappelons pourquoi il est crucial de bien protéger votre matelas :</p>
      
      <ul>
        <li>Les matelas sont des investissements coûteux qui méritent d'être protégés</li>
        <li>Ils sont particulièrement vulnérables à la saleté, la poussière et l'humidité</li>
        <li>Le transport peut facilement endommager leur structure et leur revêtement</li>
        <li>Une fois abîmé, un matelas ne peut généralement pas être réparé</li>
      </ul>
      
      <div class="tip-box">
        <p><strong>Conseil important :</strong> Ne vous contentez jamais d'une simple couverture ou d'une bâche pour protéger votre matelas ! Ces solutions improvisées n'offrent pas la protection nécessaire et peuvent même créer de la condensation.</p>
      </div>
      
      <h2 id="criteres-selection">Critères de sélection d'une bonne housse de matelas</h2>
      <p>Nous avons évalué les housses selon plusieurs critères essentiels :</p>
      
      <ul>
        <li><strong>Matériau :</strong> imperméabilité, résistance et respirabilité</li>
        <li><strong>Fermeture :</strong> système de fermeture sécurisé et hermétique</li>
        <li><strong>Ergonomie :</strong> présence de poignées pour faciliter le transport</li>
        <li><strong>Durabilité :</strong> qualité des coutures et résistance générale</li>
        <li><strong>Rapport qualité-prix :</strong> équilibre entre caractéristiques et coût</li>
      </ul>
      
      <h2 id="meilleures-housses">Notre top 8 des meilleures housses de matelas</h2>
      
      <p>Après avoir testé plus de 20 modèles différents, voici notre sélection des 8 meilleures housses pour protéger efficacement votre matelas lors d'un déménagement :</p>
      
      <h2 id="packshield-premium">1. Housse Packshield Premium - Notre coup de cœur</h2>
      <p>La housse Packshield Premium combine protection optimale et praticité avec ses 6 poignées de transport renforcées et son tissu imperméable respirant. Sa fermeture éclair sur trois côtés facilite l'installation tandis que son traitement anti-moisissures en fait l'option idéale pour les stockages de longue durée.</p>
      
      <blockquote>
        <p>"La housse Packshield est devenue notre référence pour la protection des matelas. Sa conception répond parfaitement aux contraintes d'un déménagement professionnel."</p>
        <p>- Marc Leroy, Déménageur professionnel</p>
      </blockquote>
      
      <h2 id="conclusion">Conclusion: faites le bon choix pour votre matelas</h2>
      <p>Investir dans une housse de qualité est un petit prix à payer pour protéger un matelas qui vous a coûté plusieurs centaines d'euros. Prenez en compte la taille exacte de votre matelas, ses particularités (comme l'épaisseur pour les matelas à mémoire de forme) et vos besoins spécifiques (stockage long terme ou simple déménagement).</p>
      
      <p>Quelle que soit l'option choisie, n'oubliez pas que la protection de votre literie pendant un déménagement n'est pas un détail à négliger, mais un investissement dans la durabilité de votre confort quotidien.</p>
    `,
    image: "/lovable-uploads/241f7930-bdd5-4cab-87f2-f5031b99cd9b.png",
    date: "8 Mai 2025",
    readTime: "7 min de lecture",
    category: "Guides d'achat",
    author: {
      name: "Hélène Mirmande",
      avatar: "/lovable-uploads/552f045e-6d5b-4d23-a7ce-18789ffeb237.png",
      role: "Responsable Produits chez Packshield",
      slug: "helene-mirmande",
      bio: "Hélène est spécialisée dans la conception de produits pour la maison et la décoration. Elle accorde une grande importance à la qualité et imagine des solutions simples et pratiques, pensées pour faciliter le quotidien."
    },
    relatedPosts: [
      {
        id: 10,
        title: "Comment transporter son matelas efficacement ?",
        image: "/lovable-uploads/de586984-0cb1-4c86-8ede-3e1f44572b17.png",
        date: "10 Mai 2025"
      },
      {
        id: 2,
        title: "Moving Day Tips: Protect Your Furniture",
        image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aW5nJTIwZGF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        date: "5 Mai 2025"
      }
    ],
    tags: ["Guides d'achat", "Matelas", "Déménagement"]
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

export default BlogPostTop8Housses;
