
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
          <div>Si l'on en croit sa nature apparemment légère et malléable, un matelas pourrait aisément être perçu comme un objet facile à déplacer. Détrompez-vous ! Quiconque a déjà tenté l'expérience de le manœuvrer dans l'étroitesse d'une cage d'escalier sinueuse, sous les assauts d'une averse inattendue, ou de le contraindre à s'insérer dans un coffre de voiture visiblement trop exigu, comprendra immédiatement la complexité de l'entreprise. Un matelas mal protégé durant un déménagement s'expose à une multitude de désagréments : salissures tenaces, déchirures malencontreuses, et même des déformations irréversibles qui compromettraient son confort futur. Fort de ce constat, ce guide exhaustif se propose de vous accompagner pas à pas, que vous envisagiez de relever ce défi en solitaire ou de faire appel à des professionnels aguerris, afin de garantir un transport de votre précieux matelas en toute sécurité et sans le moindre accroc.</div>
          
          <h2 id="preparer-matelas">1. Préparer Minutieusement Son Matelas : La Clé d'un Déménagement Réussi</h2>
          <p>Avant de céder à la hâte et de vous saisir de votre matelas, accordez-vous une dizaine de minutes pour une préparation méthodique. Ces étapes, bien que simples en apparence, constituent le fondement d'un déménagement sans encombre et préviennent bien des soucis ultérieurs.</p>
          
          <h3>Un Nettoyage Rigoureux : Éliminer les Intrus Invisibles</h3>
          <p>Commencez par offrir à votre matelas un nettoyage en profondeur. Munissez-vous de votre aspirateur et passez-le méticuleusement sur les deux faces, sans oublier les flancs. Cette action simple permet d'éliminer efficacement les poussières accumulées, les colonies d'acariens souvent invisibles à l'œil nu, ainsi que les éventuels poils laissés par vos compagnons à quatre pattes. En évitant de piéger ces particules durant le transport, vous préservez l'hygiène de votre literie et limitez les risques d'allergies dans votre nouveau foyer.</p>
          
          <h3>Une Bouffée d'Air Frais : Assainir et Prévenir l'Humidité</h3>
          <p>Si les conditions météorologiques et votre emploi du temps le permettent, offrez à votre matelas une séance de "respiration" en le laissant à l'air libre pendant quelques heures. Une fenêtre ouverte dans une pièce bien ventilée ou un emplacement extérieur abrité feront parfaitement l'affaire. Cette aération contribue à dissiper les odeurs potentiellement imprégnées dans les fibres du matelas et réduit considérablement les risques de développement de moisissures si celui-ci devait rester emballé pendant une période prolongée.</p>
          
          <h2 id="proteger-matelas">2. L'Art de Protéger Son Matelas : Un Investissement pour la Tranquillité d'Esprit</h2>
          <p>Considérez cette étape comme absolument cruciale. Transporter un matelas sans une protection adéquate revient à expédier un appareil électronique fragile sans son emballage d'origine. Les conséquences peuvent être coûteuses et frustrantes.</p>
          
          <h3>Le Choix Judicieux de la Protection : La Housse, Votre Alliée Incontournable</h3>
          <p>L'option la plus recommandée, et de loin la plus efficace, est l'utilisation d'une housse de protection en plastique épais, idéalement dotée d'une fermeture éclair robuste. Ce type de housse offre une barrière impénétrable contre la poussière, l'eau et l'humidité, autant d'éléments qui pourraient compromettre la qualité de votre matelas. Sa résistance aux frottements et aux déchirures assure une protection optimale durant les manipulations et le transport. De plus, cet investissement s'avère durable, car la housse peut être réutilisée pour le stockage futur de votre matelas ou lors d'un prochain déménagement.</p>
          
          <h3>Solutions Alternatives : S'Adapter à Vos Besoins et Ressources</h3>
          <p>Si une housse spécifique n'est pas immédiatement disponible, d'autres solutions peuvent être envisagées, bien qu'elles offrent généralement une protection moindre. Des bâches épaisses et des couvertures peuvent envelopper le matelas, offrant une protection contre les éraflures et une certaine protection contre la saleté. Le film plastique étirable, souvent utilisé pour sécuriser les meubles, peut également être une option, mais veillez à l'appliquer soigneusement en plusieurs couches. Enfin, des draps ou de vieux textiles peuvent offrir une protection de base contre la poussière, mais ils seront moins efficaces contre l'humidité ou les déchirures.</p>
          
          <h2 id="transporter-matelas">3. Techniques de Port et de Transport : Préserver Votre Dos et Votre Matelas</h2>
          
          <h3>Plier un Matelas : Une Question Délicate</h3>
          <p>La question de savoir s'il est judicieux de plier un matelas est fréquente, et la réponse est généralement négative, sauf dans des cas très spécifiques et temporaires. Pour les matelas à ressorts ou hybrides (combinant ressorts et mousse), le pliage est formellement déconseillé car il risque d'endommager la structure interne et de compromettre le soutien du matelas. Pour les matelas entièrement en mousse ou en latex, un pliage temporaire et délicat peut être envisagé pour faciliter le passage dans des espaces très restreints, mais il est crucial de le remettre à plat dès que possible pour éviter toute déformation permanente.</p>
          
          <h3>L'Union Fait la Force : Le Travail à Deux, une Nécessité</h3>
          <p>Un matelas, même individuel, est un objet encombrant. Tenter de le porter seul, surtout dans des environnements complexes comme des escaliers, augmente considérablement les risques de blessures pour vous et de dommages pour le matelas. Idéalement, effectuez le portage à deux personnes, en vous saisissant des extrémités opposées. L'utilisation de sangles de portage spécialement conçues peut également faciliter la tâche en répartissant le poids de manière plus uniforme et en offrant une meilleure prise.</p>
          
          <h3>Choisir le Bon Véhicule : Adapter le Transport à la Taille</h3>
          <p>Le choix du véhicule de transport dépendra de la taille de votre matelas et de la distance à parcourir. Un camion de déménagement offre l'espace idéal pour transporter un matelas à plat ou verticalement, en veillant à ce qu'il soit correctement calé pour éviter tout mouvement durant le trajet. Pour un matelas une place, un grand coffre de voiture peut parfois suffire, mais assurez-vous qu'il ne soit pas plié de manière excessive. Le transport sur le toit d'une voiture est fortement déconseillé en raison des risques de chute, d'exposition aux intempéries et des réglementations de sécurité routière.</p>
          
          <h2 id="reinstaller-matelas">4. Installation dans le Nouveau Foyer : Les Gestes Qui Comptent</h2>
          
          <h3>Vérification et Aération : Un Rituel Essentiel</h3>
          <p>Avant de vous précipiter pour installer votre matelas, prenez le temps de vérifier son état. Assurez-vous qu'il est sec, propre et qu'il n'a subi aucune déformation durant le transport. Retirez la housse de protection et laissez-le respirer quelques instants dans la pièce.</p>
          
          <h3>Le Temps de la Récupération : Patience est Mère de Confort</h3>
          <p>Si votre matelas en mousse a été roulé pour faciliter le transport (une pratique courante pour certains types de matelas), il est crucial de lui accorder le temps nécessaire pour qu'il reprenne sa forme initiale. Suivez les instructions du fabricant, mais en général, quelques heures suffisent pour qu'il retrouve son volume et son confort optimal.</p>
          
          <h2 id="materiel-recommande">5. L'Équipement Indispensable : Votre Boîte à Outils du Déménageur de Matelas</h2>
          <p>Pour un déménagement de matelas en toute sérénité, certains accessoires se révèlent particulièrement utiles :</p>
          <ul>
            <li>Housse de protection robuste avec fermeture éclair : L'investissement de base pour une protection optimale.</li>
            <li>Sangles de portage : Pour faciliter le transport à deux et réduire la fatigue.</li>
            <li>Gants antidérapants : Pour une meilleure prise et une protection des mains.</li>
            <li>Couvertures épaisses : Pour une protection supplémentaire contre les chocs et les frottements.</li>
            <li>Ruban adhésif résistant (scotch) : Pour sécuriser les bâches ou les films plastiques.</li>
          </ul>
          
          <h2 id="conclusion">Conclusion</h2>
          <p>Déménager un matelas peut vite devenir un cauchemar. Mais bien préparé, protégé et transporté, tout se passe sans accroc.</p>
        `,
        image: "/lovable-uploads/4b62c8ae-6aa6-41f5-924e-b6fd5bd9744d.png",
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
          <div>Protéger son matelas pendant un déménagement est essentiel pour éviter les salissures, les déchirures, ou l'humidité.</div>
          
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
            title: "Comment déménager son matelas sans stress (ni mauvaise surprise)",
            image: "/lovable-uploads/4b62c8ae-6aa6-41f5-924e-b6fd5bd9744d.png",
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
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        
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
