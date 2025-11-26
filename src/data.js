export const cards = [
  // Agile
  {
    id: 1,
    category: 'Agile',
    question: 'Quelles sont les 4 valeurs du Manifeste Agile ?',
    answer: `
      <ul style="text-align: left; padding-left: 1.5rem; margin-bottom: 1rem;">
        <li><strong>Individus et interactions</strong> plutôt que processus et outils.</li>
        <li><strong>Logiciel fonctionnel</strong> plutôt que documentation exhaustive.</li>
        <li><strong>Collaboration avec les clients</strong> plutôt que négociation contractuelle.</li>
        <li><strong>Adaptation au changement</strong> plutôt que l'exécution d'un plan.</li>
      </ul>
      <p><em>Note : Il y a de la valeur dans les éléments à droite, mais nous privilégions ceux de gauche.</em></p>
    `,
    keywords: ['Manifeste', 'Valeurs', 'Adaptation']
  },
  {
    id: 2,
    category: 'Agile',
    question: 'Quelles sont les difficultés principales de la méthode Agile ?',
    answer: `
      <p><strong>Contractualisation et Cadrage :</strong></p>
      <p>Il est difficile de fixer un périmètre (scope) et un coût précis dès le départ car l'Agile repose sur l'adaptabilité.</p>
      <p>Les contraintes de temps (deadlines) ne sont pas toujours en adéquation avec la philosophie d'itérations et d'amélioration continue.</p>
    `,
    keywords: ['Contraintes', 'Contractualisation', 'Scope']
  },

  // UI/UX
  {
    id: 3,
    category: 'UI/UX',
    question: 'Wireframe vs Maquette vs Prototype',
    answer: `
      <div style="text-align: left;">
        <p><strong>1. Wireframe (Fil de fer) :</strong><br>
        Schéma simplifié, structurel. Représente le squelette de l'interface sans design graphique (noir et blanc, boîtes). Sert à valider l'ergonomie et les fonctionnalités.</p>
        <br>
        <p><strong>2. Maquette (Mockup) :</strong><br>
        Représentation visuelle fidèle (High-fidelity). Intègre la charte graphique (couleurs, typos, images). C'est le rendu statique final.</p>
        <br>
        <p><strong>3. Prototype :</strong><br>
        Version interactive. Permet de simuler les parcours utilisateurs (clics, navigation) pour tester l'expérience utilisateur (UX) avant le développement.</p>
      </div>
    `,
    keywords: ['Structure', 'Visuel', 'Interaction']
  },

  // Merise
  {
    id: 6,
    category: 'Merise',
    question: 'Différence MCD vs MLD',
    answer: `
      <div style="text-align: left;">
        <p><strong>MCD (Modèle Conceptuel de Données) :</strong><br>
        Niveau métier. On parle d'<strong>Entités</strong> et d'<strong>Associations</strong>. Il est agnostique de la technique (pas de notion de clé étrangère ici, mais d'identifiants).</p>
        <br>
        <p><strong>MLD (Modèle Logique de Données) :</strong><br>
        Niveau base de données relationnelle. On parle de <strong>Tables</strong>, <strong>Colonnes</strong>, <strong>Clés Primaires</strong> et <strong>Clés Étrangères</strong>.</p>
      </div>
    `,
    keywords: ['Conception', 'Données', 'Abstraction']
  },
  {
    id: 7,
    category: 'Merise',
    question: 'Règles de passage MCD vers MLD',
    answer: `
      <ul style="text-align: left; padding-left: 1.5rem;">
        <li>Chaque <strong>Entité</strong> devient une <strong>Table</strong>.</li>
        <li>Chaque <strong>Propriété</strong> devient une <strong>Colonne</strong>.</li>
        <li>L'<strong>Identifiant</strong> devient la <strong>Clé Primaire</strong>.</li>
        <li><strong>Associations 1,n - 1,1 :</strong> La clé primaire du côté 1,n devient clé étrangère du côté 1,1.</li>
        <li><strong>Associations n,n :</strong> Création d'une <strong>Table d'association</strong> (ou table de jointure) contenant les deux clés primaires comme clés étrangères.</li>
      </ul>
    `,
    keywords: ['Transformation', 'Cardinalités', 'Normalisation']
  },

  // UML
  {
    id: 8,
    category: 'UML',
    question: 'Diagramme de Classes',
    answer: `
      <p>Représente la structure statique du système orienté objet.</p>
      <ul style="text-align: left; padding-left: 1.5rem;">
        <li><strong>Classes :</strong> Nom, Attributs, Méthodes.</li>
        <li><strong>Relations :</strong>
          <ul>
            <li>Héritage (Généralisation)</li>
            <li>Association</li>
            <li>Agrégation / Composition (Relation fort/faible)</li>
            <li>Dépendance</li>
          </ul>
        </li>
      </ul>
    `,
    keywords: ['Structure', 'POO', 'Relations']
  },

  // Base de Données
  {
    id: 11,
    category: 'Database',
    question: 'Les Jointures SQL',
    answer: `
      <ul style="text-align: left; padding-left: 1.5rem;">
        <li><strong>INNER JOIN :</strong> Retourne les lignes qui ont une correspondance dans les DEUX tables.</li>
        <li><strong>LEFT JOIN :</strong> Retourne TOUTES les lignes de la table de gauche (A), même s'il n'y a pas de correspondance dans la table de droite (B) (les colonnes de B seront NULL).</li>
        <li><strong>RIGHT JOIN :</strong> Inverse du LEFT JOIN.</li>
        <li><strong>FULL OUTER JOIN :</strong> Retourne TOUTES les lignes des deux tables, qu'il y ait correspondance ou non.</li>
      </ul>
    `,
    keywords: ['SQL', 'Relations', 'Sets']
  },
  {
    id: 12,
    category: 'Database',
    question: 'Transactions ACID',
    answer: `
      <div style="text-align: left;">
        <p><strong>Atomicité :</strong> La transaction est indivisible. Soit tout réussit, soit tout échoue (Rollback).</p>
        <p><strong>Cohérence :</strong> La transaction amène la BDD d'un état valide à un autre état valide (respect des contraintes).</p>
        <p><strong>Isolation :</strong> Les transactions concurrentes ne doivent pas interférer entre elles (niveaux d'isolation).</p>
        <p><strong>Durabilité :</strong> Une fois validée (Commit), la modification est permanente, même en cas de panne.</p>
      </div>
    `,
    keywords: ['Intégrité', 'Sécurité', 'Fiabilité']
  },
  {
    id: 13,
    category: 'Database',
    question: 'Index et Performance',
    answer: `
      <p>Un <strong>Index</strong> est une structure de données (souvent un B-Tree) qui améliore la vitesse des opérations de lecture (SELECT avec WHERE, JOIN, ORDER BY).</p>
      <p><strong>Contrepartie :</strong></p>
      <ul>
        <li>Ralentit les écritures (INSERT, UPDATE, DELETE) car l'index doit être mis à jour à chaque modification.</li>
        <li>Occupe de l'espace disque supplémentaire.</li>
      </ul>
      <p><em>Best practice : Indexer les colonnes souvent recherchées ou utilisées dans les jointures.</em></p>
    `,
    keywords: ['Optimisation', 'Lecture vs Écriture']
  },
  {
    id: 15,
    category: 'Database',
    question: 'Normalisation (1NF, 2NF, 3NF)',
    answer: `
      <p>Processus pour organiser les données afin de réduire la redondance et améliorer l'intégrité.</p>
      <ul style="text-align: left; padding-left: 1.5rem;">
        <li><strong>1NF :</strong> Valeurs atomiques (pas de listes dans une case), identifiant unique.</li>
        <li><strong>2NF :</strong> 1NF + Tout attribut non-clé dépend de TOUTE la clé primaire (pas de dépendance partielle si clé composée).</li>
        <li><strong>3NF :</strong> 2NF + Tout attribut non-clé dépend DIRECTEMENT de la clé primaire (pas de dépendance transitive via un autre attribut).</li>
      </ul>
    `,
    keywords: ['Formes Normales', 'Redondance', 'Intégrité']
  }
];

export const categories = ['All', 'Agile', 'UI/UX', 'Merise', 'UML', 'Database'];
