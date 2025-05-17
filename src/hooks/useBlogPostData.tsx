
import { useMemo } from 'react';
import { getBlogPostIdFromSlug } from '@/utils/blogSlug';
import { extractTableOfContents } from '@/utils/blogUtils';

// Get simulated blog post data (in a real application, this would come from a CMS)
const useBlogPostData = (slug: string | undefined) => {
  // Extract ID from slug
  const id = useMemo(() => slug ? getBlogPostIdFromSlug(slug) : 1, [slug]);
  
  const post = useMemo(() => {
    // Handle specific article IDs
    if (id === 10) {
      return {
        id: 10,
        title: "Comment déménager son matelas sans stress (ni mauvaise surprise)",
        content: `
          <p>Un matelas, ça paraît léger… jusqu'à ce qu'il faille le faire passer dans un escalier étroit, sous la pluie, ou dans un coffre trop petit. Mal protégé, il peut se salir, se déchirer ou se déformer. Voici le guide complet pour déménager un matelas en toute sécurité, seul ou avec des pros.</p>
          
          <h2 id="preparer-matelas">1. Avant de bouger quoi que ce soit : préparer son matelas</h2>
          <p>Avant de le soulever ou de l'emballer, prenez 10 minutes pour bien le préparer. Ce sont des étapes simples, mais essentielles.</p>
          
          <h3>Nettoyer le matelas</h3>
          <p>Passez l'aspirateur sur les deux faces, y compris sur les côtés. Cela évite de piéger poussières, acariens ou poils d'animaux pendant le transport.</p>
          
          <h3>Aérer quelques heures</h3>
          <p>Si vous le pouvez, laissez le matelas à l'air libre quelques heures (fenêtre ouverte ou extérieur). Cela élimine les odeurs éventuelles et limite les risques de moisissures s'il reste emballé longtemps.</p>
          
          <h2 id="proteger-matelas">2. Protéger votre matelas comme un pro</h2>
          <p>C'est le point le plus critique. Transporter un matelas sans protection, c'est comme expédier une télé sans carton.</p>
          
          <h3>Choisir la bonne protection</h3>
          <p>La meilleure option : la housse en plastique épais avec zip. Étanche à la poussière, à l'eau et à l'humidité. Résistante aux frottements. Réutilisable pour le stockage ou un autre déménagement.</p>
          
          <h3>Autres alternatives</h3>
          <p>Bâches et couvertures, film plastique étirable, draps ou vieux textiles.</p>
          
          <h2 id="transporter-matelas">3. Comment porter et transporter un matelas (sans se faire mal)</h2>
          
          <h3>Faut-il plier un matelas ?</h3>
          <p>Non, sauf cas exceptionnels. À ressorts ou hybrides : jamais. En mousse / latex : OK temporairement, si fait doucement.</p>
          
          <h3>À deux c'est mieux</h3>
          <p>Un matelas est encombrant. Faites-le à deux, par les extrémités ou avec des sangles.</p>
          
          <h3>Camion, coffre ou toit ?</h3>
          <p>Camion : à plat ou vertical bien calé. Coffre : ok pour 1 place. Toit : déconseillé.</p>
          
          <h2 id="reinstaller-matelas">4. Une fois arrivé : bien le réinstaller</h2>
          
          <h3>Vérifiez l'état du matelas</h3>
          <p>Vérifiez s'il est sec, propre, non déformé. Retirez la housse et laissez-le respirer.</p>
          
          <h3>Laissez-le reprendre sa forme</h3>
          <p>Si vous l'avez roulé (matelas mousse), attendez quelques heures avant de le réutiliser.</p>
          
          <h2 id="materiel-recommande">5. Matériel recommandé pour déménager un matelas</h2>
          <p>Housse de protection, sangles de portage, gants antidérapants, couverture, scotch.</p>
          
          <h2 id="faq">6. Questions fréquentes (FAQ)</h2>
          
          <div class="tip-box">
            <p><strong>Puis-je stocker un matelas emballé plusieurs jours ?</strong><br>
            Oui, si au sec et ventilé.</p>
            
            <p><strong>Peut-on dormir dessus tout de suite ?</strong><br>
            Oui, s'il est sec, propre, non compressé.</p>
            
            <p><strong>Et dans l'ascenseur ?</strong><br>
            Pliez-le légèrement (mousse), ou prenez les escaliers si nécessaire.</p>
          </div>
          
          <h2 id="conclusion">Conclusion</h2>
          <p>Déménager un matelas peut vite devenir un cauchemar. Mais bien préparé, protégé et transporté, tout se passe sans accroc.</p>
        `,
        image: "/lovable-uploads/be71ce46-fa4b-499d-8ef1-64f2962d0dfd.png",
        date: "10 Mai 2025",
        readTime: "6 min de lecture",
        category: "blog",
        author: {
          name: "Hélène Mirmande",
          avatar: "https://i.pravatar.cc/150?u=helene",
          role: "Expert Déménagement",
          bio: "Hélène est spécialisée dans les conseils de déménagement et de protection des objets fragiles."
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
        tags: ["Transport", "Matelas", "Déménagement", "Protection"],
        language: 'fr'
      };
    } else if (id === 11) {
      return {
        id: 11,
        title: "Top 8 des meilleures housses matelas pour les déménagement",
        content: `
          <p>Protéger son matelas pendant un déménagement est essentiel pour éviter les salissures, les déchirures, ou l'humidité.</p>
          
          <h2 id="importance-housse">Pourquoi utiliser une housse de matelas ?</h2>
          <p>Une housse de protection est indispensable pour préserver votre matelas des aléas du transport et du stockage temporaire.</p>
          
          <h2 id="top-housses">Notre sélection des 8 meilleures housses</h2>
          <p>Après des tests rigoureux, voici notre classement des housses les plus performantes du marché :</p>
          
          <ul>
            <li>PackShield Premium - Protection complète imperméable</li>
            <li>MoveGuard Pro - Résistance aux déchirures</li>
            <li>MatProtect - Qualité/prix optimal</li>
            <li>TransportEase - Facilité de manipulation</li>
            <li>MattressCover Deluxe - Durabilité exceptionnelle</li>
            <li>EasyMove - Léger et pratique</li>
            <li>StorageMaster - Idéal pour stockage longue durée</li>
            <li>SecureWrap - Système de fermeture innovant</li>
          </ul>
          
          <blockquote>
            <p>"Une bonne housse de matelas est un investissement minime pour protéger un objet coûteux."</p>
          </blockquote>
          
          <h2 id="criteres-choix">Critères de choix d'une housse</h2>
          <p>Plusieurs facteurs sont à considérer avant d'acheter votre housse de protection :</p>
          
          <h2 id="conclusion">Conclusion</h2>
          <p>Investir dans une housse de qualité vous épargnera bien des soucis et prolongera la durée de vie de votre matelas.</p>
        `,
        image: "/lovable-uploads/241f7930-bdd5-4cab-87f2-f5031b99cd9b.png",
        date: "8 Mai 2025",
        readTime: "7 min de lecture",
        category: "blog",
        author: {
          name: "Hélène Mirmande",
          avatar: "https://i.pravatar.cc/150?u=helene",
          role: "Expert Déménagement",
          bio: "Hélène est spécialisée dans les conseils de déménagement et de protection des objets fragiles."
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
        tags: ["Housses", "Matelas", "Déménagement", "Protection"],
        language: 'fr'
      };
    }
    
    // Default article data for other IDs
    return {
      id,
      title: id === 1 
        ? "How to Properly Store a Mattress" 
        : id === 2 
          ? "Moving Day Tips: Protect Your Furniture" 
          : "Why Quality Storage Matters",
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
        <h2 id="why-proper-storage">Why Proper Storage Matters</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        
        <div class="tip-box">
          <p><strong>Pro Tip:</strong> Consider using vacuum-sealed bags for smaller fabric items before placing them in storage containers. This reduces the volume by up to 75% and provides extra protection against moisture.</p>
        </div>
        
        <h2 id="best-practices">Best Practices for Long-Term Storage</h2>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
        
        <ul>
          <li>Clean thoroughly before storing</li>
          <li>Use proper protective covers</li>
          <li>Store in a climate-controlled environment when possible</li>
          <li>Keep items elevated off the floor</li>
          <li>Avoid direct exposure to sunlight</li>
        </ul>
        
        <blockquote>
          <p>"Proper storage is an investment that pays off by protecting the lifespan and quality of your furniture and belongings."</p>
        </blockquote>
        
        <h2 id="choosing-products">Choosing the Right Storage Products</h2>
        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
        
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
        
        <h2 id="conclusion">Conclusion</h2>
        <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
      `,
      image: id === 1 
        ? "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
        : id === 2 
          ? "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aW5nJTIwZGF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=870&q=80" 
          : "https://images.unsplash.com/photo-1595332230117-8310b582a860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RvcmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=870&q=80",
      date: "May 8, 2025",
      readTime: "5 min read",
      category: "Storage",
      author: {
        name: "Sarah Johnson",
        avatar: "https://i.pravatar.cc/150?u=sarah",
        role: "Storage Expert",
        bio: "Sarah is a storage expert with over 10 years of experience in the moving and storage industry. She specializes in creating guides for proper item care and maintenance during storage and relocation."
      },
      relatedPosts: [
        {
          id: id === 1 ? 2 : 1,
          title: id === 1 ? "Moving Day Tips: Protect Your Furniture" : "How to Properly Store a Mattress",
          image: id === 1 
            ? "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aW5nJTIwZGF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
            : "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          date: "May 5, 2025"
        },
        {
          id: 3,
          title: "Why Quality Storage Matters",
          image: "https://images.unsplash.com/photo-1595332230117-8310b582a860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RvcmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          date: "May 1, 2025"
        }
      ],
      tags: ["Storage", "Storage Tips", "Protection"]
    };
  }, [id]);

  // Parse content to extract table of contents
  const tableOfContents = useMemo(() => extractTableOfContents(post.content), [post.content]);

  return {
    post,
    tableOfContents
  };
};

export default useBlogPostData;
