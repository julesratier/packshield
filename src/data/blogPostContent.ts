// Sample blog post content
export const getBlogPostById = (id: number): { title: string; content: string; image: string; language?: 'en' | 'fr' } => {
  // Blog post ID 10 - Mattress transportation in French
  if (id === 10) {
    return {
      title: "Comment déménager son matelas sans stress (ni mauvaise surprise)",
      content: `
          
          <h2 id="preparer-matelas">1. La Préparation du Matelas : Un Prélude Indispensable à un Déménagement Réussi</h2>
          <p>Avant de vous lancer dans le portage ou l'emballage, consacrez une dizaine de minutes à préparer votre matelas avec soin. Ces gestes simples, mais ô combien importants, constituent la pierre angulaire d'un déménagement sans embûches et vous éviteront bien des désagréments par la suite.</p>
          
          <h3>Nettoyage en Profondeur : Assainir pour un Nouveau Départ</h3>
          <p>Commencez par offrir à votre matelas un nettoyage méticuleux. À l'aide de votre aspirateur, passez soigneusement les deux faces ainsi que les bords. Cette action permet d'éliminer efficacement la poussière, les acariens souvent invisibles, et les éventuels poils d'animaux qui pourraient s'être incrustés. En évitant de les emprisonner durant le transport, vous préservez l'hygiène de votre literie et contribuez à un environnement plus sain dans votre nouveau foyer.</p>
          
          <h3>Aération Bienfaisante : Éliminer les Odeurs et Prévenir l'Humidité</h3>
          <p>Si le temps et les conditions le permettent, offrez à votre matelas une cure d'air frais en l'exposant quelques heures. Une pièce bien ventilée avec une fenêtre ouverte ou un espace extérieur abrité seront parfaits. Cette aération permet de dissiper les odeurs qui pourraient s'être imprégnées dans les fibres et de minimiser le risque de développement de moisissures si le matelas devait rester emballé pendant une période prolongée.</p>
          
          <h2 id="proteger-matelas">2. La Protection du Matelas : Un Rempart Essentiel Contre les Aléas du Déménagement</h2>
          <p>Cette étape est absolument cruciale. Transporter un matelas sans une protection adéquate l'expose inutilement aux risques de dommages. Considérez cette précaution comme un investissement pour la tranquillité d'esprit.</p>
          
          <h3>Le Choix Stratégique de la Housse : Votre Bouclier Protecteur</h3>
          <p>L'option la plus efficace et vivement recommandée est l'utilisation d'une housse de protection en plastique épais, idéalement munie d'une fermeture éclair robuste. Ce type de housse constitue une barrière impénétrable contre la poussière, l'eau et l'humidité, autant d'éléments qui pourraient compromettre l'intégrité de votre matelas. Sa résistance aux frottements et aux déchirures assure une protection optimale durant les manipulations et le transport. De plus, cette housse peut être réutilisée pour le stockage futur ou lors de prochains déménagements, ce qui en fait un choix économique et durable.</p>
          
          <h3>Alternatives Possibles : Adapter la Protection à Vos Ressources</h3>
          <p>Si une housse spécifique n'est pas immédiatement disponible, d'autres solutions peuvent être envisagées, bien qu'elles offrent généralement un niveau de protection inférieur. Des bâches épaisses et des couvertures peuvent envelopper le matelas, le protégeant ainsi des éraflures et offrant une certaine barrière contre la saleté. Le film plastique étirable, souvent utilisé pour sécuriser les meubles, peut également être une option, mais veillez à l'appliquer méticuleusement en plusieurs couches pour une protection plus efficace. Enfin, des draps ou de vieux textiles peuvent offrir une protection de base contre la poussière, mais ils seront moins efficaces contre l'humidité ou les risques de déchirure.</p>
          
          <h2 id="transporter-matelas">3. Techniques de Portage et de Transport : Manœuvrer avec Efficacité et Précaution</h2>
          <p>La manipulation d'un matelas, de par sa taille et son poids parfois conséquent, exige une approche méthodique pour prévenir les blessures et les dommages matériels.</p>
          
          <h3>Faut-il Plier un Matelas ? Une Question de Structure</h3>
          <p>La question du pliage d'un matelas revient fréquemment, et la réponse est généralement négative, sauf dans des situations très spécifiques et pour une durée limitée. Pour les matelas à ressorts ou hybrides, le pliage est fortement déconseillé car il risque d'endommager la structure interne et de compromettre le soutien qu'ils offrent. Pour les matelas entièrement composés de mousse ou de latex, un pliage délicat et temporaire peut être envisagé pour faciliter le passage dans des espaces particulièrement étroits, mais il est impératif de le remettre à plat dès que possible pour éviter toute déformation permanente.</p>
          
          <h3>L'Importance du Travail d'Équipe : Deux Bras Valent Mieux Qu'Un</h3>
          <p>Un matelas, même de taille individuelle, est un objet volumineux. Tenter de le porter seul, surtout dans des environnements complexes tels que des escaliers, augmente considérablement les risques de blessures pour vous et de dommages pour le matelas. L'idéal est de procéder au portage à deux personnes, en vous saisissant des extrémités opposées. L'utilisation de sangles de portage spécialement conçues peut également faciliter la tâche en répartissant le poids de manière plus équilibrée et en offrant une meilleure prise en main.</p>
          
          <h3>Choisir le Bon Mode de Transport : Adapter le Véhicule à la Taille du Matelas</h3>
          <p>Le choix du véhicule de transport dépendra des dimensions de votre matelas et de la distance à parcourir. Un camion de déménagement offre l'espace optimal pour transporter un matelas à plat ou verticalement, en veillant à ce qu'il soit correctement arrimé pour éviter tout mouvement pendant le trajet. Pour un matelas une place, un grand coffre de voiture peut parfois suffire, mais assurez-vous qu'il ne soit pas plié de manière excessive. Le transport sur le toit d'une voiture est fortement déconseillé en raison des risques de chute, d'exposition aux intempéries et des réglementations de sécurité routière.</p>
          
          <h2 id="reinstaller-matelas">4. L'Installation dans le Nouveau Logis : Les Derniers Détails Qui Font la Différence</h2>
          <p>Une fois arrivé à destination, l'attention que vous porterez à la réinstallation de votre matelas est tout aussi cruciale que les étapes précédentes.</p>
          
          <h3>Inspection et Ventilation : Un Rituel de Bienvenue</h3>
          <p>Avant de vous précipiter pour installer votre matelas, prenez le temps de l'examiner attentivement. Assurez-vous qu'il est sec, propre et qu'il n'a subi aucune déformation durant le transport. Retirez la housse de protection et laissez-le s'aérer quelques instants dans la pièce.</p>
          
          <h3>Le Temps de la Reprise de Forme : Patience et Confort Retrouvé</h3>
          <p>Si votre matelas en mousse a été roulé pour faciliter son transport (une pratique courante pour certains modèles), il est essentiel de lui accorder le temps nécessaire pour qu'il retrouve sa forme initiale. Suivez scrupuleusement les instructions du fabricant, mais en général, quelques heures suffisent pour qu'il retrouve son volume et son niveau de confort optimal.</p>
          
          <h2 id="materiel-recommande">5. L'Équipement Essentiel : Votre Panoplie du Déménageur de Matelas Avisé</h2>
          <p>Pour un déménagement de matelas qui se déroule sans encombre, certains accessoires se révèlent particulièrement précieux :</p>
          <ul>
            <li>Une housse de protection robuste avec fermeture éclair : L'investissement de base pour une protection maximale.</li>
            <li>Des sangles de portage : Pour faciliter le transport à deux et réduire la fatigue physique.</li>
            <li>Des gants antidérapants : Pour une meilleure prise en main et une protection accrue de vos mains.</li>
            <li>Des couvertures épaisses : Pour une protection supplémentaire contre les chocs et les frottements éventuels.</li>
            <li>Du ruban adhésif résistant (type scotch) : Pour sécuriser efficacement les bâches ou les films plastiques.</li>
          </ul>
          
          <h2 id="conclusion">Conclusion</h2>
          <p>Déménager un matelas peut vite devenir un cauchemar. Mais bien préparé, protégé et transporté, tout se passe sans accroc.</p>
        `,
      image: "/lovable-uploads/4b62c8ae-6aa6-41f5-924e-b6fd5bd9744d.png",
      language: 'fr'
    };
  }
  
  // Default blog post content (English)
  return {
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
        : "https://images.unsplash.com/photo-1595332230117-8310b582a860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RvcmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=870&q=80"
  };
};

// Blog post meta data
export const getBlogPostMetaData = (id: number) => {
  // Blog post ID 10 - Mattress transportation in French
  if (id === 10) {
    return {
      date: "10 Mai 2025",
      readTime: "6 min de lecture",
      category: "blog",
      author: {
        name: "Hélène Mirmande",
        avatar: "/lovable-uploads/4b62c8ae-6aa6-41f5-924e-b6fd5bd9744d.png",
        role: "Expert Déménagement",
        bio: "Hélène est content writer chez Packshield, spécialisée dans la rédaction de contenus pratiques liés au déménagement et à la protection des objets fragiles.",
        slug: "helene-mirmande"
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
      tags: ["Transport", "Matelas", "Déménagement", "Protection"]
    };
  }
  
  // Default blog post metadata (English)
  return {
    date: "May 8, 2025",
    readTime: "5 min read",
    category: "Storage",
    author: {
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      role: "Storage Expert",
      bio: "Sarah is a storage expert with over 10 years of experience in the moving and storage industry. She specializes in creating guides for proper item care and maintenance during storage and relocation.",
      slug: "sarah-johnson"
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
};
