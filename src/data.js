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
    question: 'Qu\'est-ce qu\'un MCD ?',
    answer: `
      <p><strong>Modèle Conceptuel de Données</strong></p>
      <p>C'est une représentation <strong>métier</strong> et abstraite des données, indépendante de la base de données finale (agnostique).</p>
      <ul style="text-align: left; padding-left: 1.5rem;">
        <li><strong>Entité :</strong> Objet de gestion (ex: Client).</li>
        <li><strong>Propriété :</strong> Information élémentaire (ex: Nom).</li>
        <li><strong>Identifiant :</strong> Propriété unique (soulignée).</li>
        <li><strong>Association :</strong> Lien entre entités avec des cardinalités (ex: 0,n).</li>
      </ul>
    `,
    keywords: ['Conceptuel', 'Entité', 'Métier']
  },
  {
    id: 17,
    category: 'Merise',
    question: 'Qu\'est-ce qu\'un MLD ?',
    answer: `
      <p><strong>Modèle Logique de Données</strong></p>
      <p>C'est la traduction du MCD vers une structure de <strong>base de données relationnelle</strong>.</p>
      <ul style="text-align: left; padding-left: 1.5rem;">
        <li><strong>Table :</strong> Correspond à l'entité.</li>
        <li><strong>Colonne :</strong> Correspond à la propriété.</li>
        <li><strong>Clé Primaire (PK) :</strong> Identifiant unique de la table.</li>
        <li><strong>Clé Étrangère (FK) :</strong> Référence à une autre table pour gérer les relations.</li>
      </ul>
    `,
    keywords: ['Logique', 'Relationnel', 'Tables']
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
  {
    id: 9,
    category: 'UML',
    question: 'Diagramme de Cas d\'Utilisation (Use Case)',
    answer: `
      <p>Il décrit les fonctionnalités du système du point de vue de l'utilisateur.</p>
      <ul style="text-align: left; padding-left: 1.5rem;">
        <li><strong>Acteurs :</strong> Utilisateurs ou systèmes externes interagissant avec l'application.</li>
        <li><strong>Cas d'utilisation :</strong> Fonctionnalité ou objectif à atteindre.</li>
        <li><strong>Relations :</strong>
          <ul>
            <li><strong>Include :</strong> Le cas A inclut TOUJOURS le cas B (ex: S'authentifier).</li>
            <li><strong>Extend :</strong> Le cas B est optionnel et étend le cas A sous certaines conditions.</li>
          </ul>
        </li>
      </ul>
    `,
    keywords: ['Fonctionnel', 'Acteurs', 'Include/Extend']
  },
  {
    id: 16,
    category: 'UML',
    question: 'Diagramme de Séquence',
    answer: `
      <p>Représente les interactions entre objets (ou acteurs) selon un <strong>point de vue temporel</strong>.</p>
      <ul style="text-align: left; padding-left: 1.5rem;">
        <li>Montre <strong>l'ordre chronologique</strong> des messages échangés.</li>
        <li><strong>Ligne de vie :</strong> Période durant laquelle l'objet existe.</li>
        <li><strong>Messages :</strong> Synchrones (bloquants), Asynchrones, de Retour.</li>
      </ul>
      <p><em>Utile pour détailler la logique d'un scénario précis d'un Cas d'Utilisation.</em></p>
    `,
    keywords: ['Chronologie', 'Messages', 'Temps']
  },

  // Base de Données
  {
    id: 10,
    category: 'Database',
    question: 'Différence DDL vs DML',
    answer: `
      <div style="text-align: left;">
        <p><strong>DDL (Data Definition Language) :</strong><br>
        Agit sur la <strong>STRUCTURE</strong> de la base.</p>
        <ul style="margin-bottom: 1rem;">
          <li><code>CREATE</code> : Créer (table, vue...)</li>
          <li><code>ALTER</code> : Modifier la structure</li>
          <li><code>DROP</code> : Supprimer définitivement</li>
          <li><code>TRUNCATE</code> : Vider une table</li>
        </ul>
        
        <p><strong>DML (Data Manipulation Language) :</strong><br>
        Agit sur les <strong>DONNÉES</strong> (Lignes).</p>
        <ul>
          <li><code>SELECT</code> : Lire / Interroger</li>
          <li><code>INSERT</code> : Ajouter des données</li>
          <li><code>UPDATE</code> : Mettre à jour</li>
          <li><code>DELETE</code> : Supprimer des données</li>
        </ul>
      </div>
    `,
    keywords: ['SQL', 'Structure vs Données']
  },
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
  },
  {
    id: 18,
    category: 'Database',
    question: 'Requêtes Complexes SQL',
    answer: `
      <div style="text-align: left;">
        <p><strong>Sous-requêtes :</strong> Une requête imbriquée dans une autre (ex: <code>WHERE id IN (SELECT ...)</code>).</p>
        <p><strong>Agrégations :</strong></p>
        <ul style="margin-bottom: 0.5rem;">
          <li><code>GROUP BY</code> : Regrouper les résultats par colonne.</li>
          <li><code>HAVING</code> : Filtrer <em>après</em> une agrégation (contrairement au WHERE).</li>
        </ul>
        <p><strong>Opérateurs Ensemblistes :</strong></p>
        <ul>
          <li><code>UNION</code> : Combine les résultats (sans doublons).</li>
          <li><code>INTERSECT</code> : Résultats communs.</li>
          <li><code>EXCEPT</code> : Résultats présents dans A mais pas B.</li>
        </ul>
      </div>
    `,
    keywords: ['Subqueries', 'GroupBy', 'Having']
  },
  {
    id: 19,
    category: 'Database',
    question: 'Fonctions SQL',
    answer: `
      <div style="text-align: left;">
        <p><strong>Fonctions d'Agrégation (sur un groupe) :</strong></p>
        <ul style="margin-bottom: 1rem;">
          <li><code>COUNT()</code> : Compte les lignes.</li>
          <li><code>SUM()</code>, <code>AVG()</code> : Somme, Moyenne.</li>
          <li><code>MIN()</code>, <code>MAX()</code> : Minimum, Maximum.</li>
        </ul>
        <p><strong>Fonctions Scalaires (sur une ligne) :</strong></p>
        <ul>
          <li>Texte : <code>UPPER()</code>, <code>LOWER()</code>, <code>CONCAT()</code>.</li>
          <li>Math : <code>ROUND()</code>, <code>ABS()</code>.</li>
          <li>Date : <code>NOW()</code>, <code>DATEDIFF()</code>, <code>YEAR()</code>.</li>
        </ul>
      </div>
    `,
    keywords: ['Count', 'Sum', 'Scalar']
  },
  // Architecture
  {
    id: 20,
    category: 'Architecture',
    question: 'Couches Architecturales',
    answer: `
      <p>Séparation des responsabilités en couches globales (ex: Métier, UI, Connexion BDD).</p>
      <ul style="text-align: left; padding-left: 1.5rem;">
        <li><strong>Avantages :</strong> Maintenabilité, Scalabilité, Évolutions facilitées.</li>
        <li><strong>Principe :</strong> Chaque couche a un rôle précis et ne communique qu'avec les couches adjacentes.</li>
      </ul>
    `,
    keywords: ['Séparation', 'Responsabilité', 'Scalabilité']
  },
  {
    id: 21,
    category: 'Architecture',
    question: 'Pattern MVC',
    answer: `
      <div style="text-align: left;">
        <p><strong>Model :</strong> Le métier et les données.</p>
        <p><strong>View :</strong> L'affichage (ce que voit l'utilisateur).</p>
        <p><strong>Controller :</strong> Orchestrateur, fait le lien entre Model et View.</p>
        <p><em>Bonne pratique :</em> Ajouter des <strong>Services</strong> ou <strong>Interfaces</strong> pour éviter les "Fat Controllers" et déléguer la logique métier complexe.</p>
      </div>
    `,
    keywords: ['Orchestration', 'Séparation', 'Pattern']
  },
  {
    id: 22,
    category: 'Architecture',
    question: 'Monolithe vs Microservices',
    answer: `
      <div style="text-align: left;">
        <p><strong>Monolithe :</strong> Un seul projet contient tout (Front + Back ou Back complet). Simple mais difficile à scaler.</p>
        <p><strong>Microservices :</strong> Séparation par fonctionnalité (mini-apps déployées séparément).</p>
        <ul style="margin-top: 0.5rem;">
          <li><strong>Avantages :</strong> Scalabilité fine, technos hétérogènes.</li>
          <li><strong>Coûts :</strong> Complexité d'orchestration, performance (réseau), sécurité.</li>
        </ul>
      </div>
    `,
    keywords: ['Déploiement', 'Scalabilité', 'Complexité']
  },
  {
    id: 23,
    category: 'Architecture',
    question: 'Couplage et Cohésion',
    answer: `
      <div style="text-align: left;">
        <p><strong>Faible Couplage (Objectif) :</strong> Limiter les dépendances entre modules. Facilite la modification d'un module sans casser les autres.</p>
        <p><strong>Forte Cohésion (Objectif) :</strong> Une classe/module doit avoir une responsabilité unique et grouper les éléments logiquement liés (Encapsulation).</p>
      </div>
    `,
    keywords: ['Dépendances', 'Qualité', 'Maintenance']
  },
  {
    id: 24,
    category: 'Architecture',
    question: 'Design Patterns',
    answer: `
      <p>Solutions génériques à des problèmes récurrents de conception.</p>
      <p><strong>Singleton :</strong> Garantit une instance unique d'une classe.</p>
      <p><em>Attention :</em> Considéré comme un <strong>Anti-pattern</strong> car il rend le code difficilement testable (état global partagé). Utilisé parfois par les ORM.</p>
    `,
    keywords: ['Singleton', 'Réutilisabilité', 'Anti-pattern']
  },
  {
    id: 25,
    category: 'Architecture',
    question: 'Clean / Hexagonale Architecture',
    answer: `
      <p>Architecture centrée sur le <strong>Domaine Métier</strong> (au centre), isolé de l'extérieur (UI, BDD, API).</p>
      <ul style="text-align: left; padding-left: 1.5rem;">
        <li><strong>Principe d'Inversion de Dépendance :</strong> Le centre ne dépend de rien (définit des Interfaces). L'extérieur dépend du centre (implémente les Interfaces).</li>
        <li><strong>Couches :</strong> Domain -> Use Cases -> Adapters (Controllers) -> Infra.</li>
      </ul>
    `,
    keywords: ['Inversion Dépendance', 'Domaine', 'Isolation']
  },
  {
    id: 26,
    category: 'Architecture',
    question: 'Principes SOLID',
    answer: `
      <ul style="text-align: left; padding-left: 1.5rem;">
        <li><strong>S</strong>ingle Responsibility (Responsabilité unique).</li>
        <li><strong>O</strong>pen/Closed (Ouvert à l'extension, fermé à la modif).</li>
        <li><strong>L</strong>iskov Substitution (Sous-types substituables).</li>
        <li><strong>I</strong>nterface Segregation (Interfaces spécifiques).</li>
        <li><strong>D</strong>ependency Inversion (Dépendre des abstractions).</li>
      </ul>
    `,
    keywords: ['Qualité', 'POO', 'Maintenance']
  },
  {
    id: 27,
    category: 'Architecture',
    question: 'Complexité Algorithmique',
    answer: `
      <p>Mesure de la performance d'un algo (Temps ou Mémoire) en fonction de la taille de l'entrée (n).</p>
      <ul style="text-align: left; padding-left: 1.5rem;">
        <li><strong>O(1) Constant :</strong> Temps identique quelque soit n (Objectif).</li>
        <li><strong>O(log n) Logarithmique :</strong> Très performant (ex: recherche dichotomique).</li>
        <li><strong>O(n) Linéaire :</strong> Temps proportionnel à n (ex: boucle simple).</li>
      </ul>
    `,
    keywords: ['Performance', 'Big O', 'Optimisation']
  },
  // Architecture (Suite)
  {
    id: 28,
    category: 'Architecture',
    question: 'Rôles : Controller vs Service vs Repository',
    answer: `
      <div style="text-align: left;">
        <p><strong>Controller :</strong> Point d'entrée. Reçoit la requête (HTTP), valide les entrées sommairement, appelle le Service, et retourne la réponse (JSON/Vue) ou une erreur HTTP.</p>
        <p><strong>Service :</strong> Cœur du métier. Contient la logique business, les calculs, les transformations. Orchestre les appels aux Repositories ou services externes.</p>
        <p><strong>Repository :</strong> Accès aux données. Interface avec la BDD (CRUD). Gère la sérialisation/désérialisation et parfois le cache.</p>
      </div>
    `,
    keywords: ['Responsabilité', 'Couches', 'Organisation']
  },

  // API
  {
    id: 29,
    category: 'API',
    question: 'Principes API REST',
    answer: `
      <ul style="text-align: left; padding-left: 1.5rem;">
        <li><strong>Stateless :</strong> Le serveur ne garde aucun état client entre deux requêtes (chaque requête contient tout le nécessaire, ex: Token).</li>
        <li><strong>Verbes HTTP :</strong> Utilisation sémantique (GET=Lire, POST=Créer, PUT/PATCH=Modifier, DELETE=Supprimer).</li>
        <li><strong>Ressources :</strong> Identifiées par des URI uniques (ex: /users/123).</li>
        <li><strong>Interface Uniforme :</strong> Réponses standardisées (JSON/XML).</li>
      </ul>
    `,
    keywords: ['Stateless', 'Verbes HTTP', 'Ressources']
  },
  {
    id: 30,
    category: 'API',
    question: 'PUT vs PATCH',
    answer: `
      <div style="text-align: left;">
        <p><strong>PUT (Remplacement complet) :</strong></p>
        <ul style="margin-bottom: 0.5rem;">
          <li>Envoie la ressource <strong>entière</strong>. Si un champ manque, il est remis à null/défaut.</li>
          <li><strong>Idempotent :</strong> Faire 10 fois la requête donne le même résultat que la faire 1 fois.</li>
        </ul>
        <p><strong>PATCH (Modification partielle) :</strong></p>
        <ul>
          <li>Envoie uniquement les champs à modifier. Plus performant (moins de data).</li>
          <li><strong>Non Idempotent</strong> (théoriquement, bien que souvent implémenté comme tel).</li>
        </ul>
      </div>
    `,
    keywords: ['Idempotence', 'Performance', 'Update']
  },
  {
    id: 31,
    category: 'API',
    question: 'Codes et Gestion des Erreurs',
    answer: `
      <div style="text-align: left;">
        <p><strong>Codes HTTP :</strong></p>
        <ul style="margin-bottom: 0.5rem;">
          <li><strong>2xx :</strong> Succès (200 OK, 201 Created).</li>
          <li><strong>4xx :</strong> Erreur Client (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found).</li>
          <li><strong>5xx :</strong> Erreur Serveur (500 Internal Server Error).</li>
        </ul>
        <p><strong>Gestion :</strong></p>
        <ul>
          <li>Ne jamais exposer une 500 brute (faille sécu). Logger l'erreur et renvoyer un message générique.</li>
          <li>Valider les entrées dans le Controller pour renvoyer des 400 précises.</li>
        </ul>
      </div>
    `,
    keywords: ['Status Codes', 'Sécurité', 'Validation']
  },

  // Security
  {
    id: 32,
    category: 'Security',
    question: 'Authentification vs Autorisation',
    answer: `
      <div style="text-align: left;">
        <p><strong>Authentification (Qui es-tu ?) :</strong></p>
        <p>Vérification de l'identité (Login/Mdp, Clé API, Biométrie). <em>"Je suis l'utilisateur 123"</em>.</p>
        <br>
        <p><strong>Autorisation (Que peux-tu faire ?) :</strong></p>
        <p>Vérification des droits/permissions d'accès aux ressources. <em>"L'utilisateur 123 a le droit de supprimer ce post"</em>.</p>
      </div>
    `,
    keywords: ['Identité', 'Permissions', 'Accès']
  },
  {
    id: 33,
    category: 'Security',
    question: 'Méthodes d\'Authentification',
    answer: `
      <ul style="text-align: left; padding-left: 1.5rem;">
        <li><strong>Session/Cookie :</strong> Stateful. Le serveur garde la session en mémoire.</li>
        <li><strong>JWT (JSON Web Token) :</strong> Stateless. Le token signé contient les infos (payload). Le serveur vérifie juste la signature.</li>
        <li><strong>OAuth2 :</strong> Délégation d'authentification (ex: "Se connecter avec Google").</li>
        <li><strong>2FA (MFA) :</strong> Double facteur (Ce que je sais + Ce que je possède).</li>
      </ul>
    `,
    keywords: ['JWT', 'OAuth2', 'Stateless']
  },

  // Database (Suite)
  {
    id: 34,
    category: 'Database',
    question: 'ORM (Object Relational Mapping)',
    answer: `
      <p>Technique de programmation pour convertir des données entre un langage objet (Java, PHP, JS) et une base relationnelle (SQL).</p>
      <ul style="text-align: left; padding-left: 1.5rem;">
        <li><strong>Avantages :</strong> Productivité (moins de SQL à écrire), Sécurité (échappement auto), Abstraction de la BDD.</li>
        <li><strong>Inconvénients :</strong> Performance (requêtes générées parfois lourdes), Effet "Boîte noire", Difficulté sur requêtes complexes.</li>
      </ul>
    `,
    keywords: ['Abstraction', 'Productivité', 'Performance']
  },

  // Code Quality
  {
    id: 35,
    category: 'Code Quality',
    question: 'Clean Code',
    answer: `
      <ul style="text-align: left; padding-left: 1.5rem;">
        <li><strong>Nommage :</strong> Variables et fonctions explicites (ex: <code>daysUntilExpiration</code> vs <code>d</code>).</li>
        <li><strong>Fonctions :</strong> Courtes, font une seule chose.</li>
        <li><strong>Commentaires :</strong> Le code doit s'expliquer lui-même. Commenter le "Pourquoi", pas le "Comment".</li>
        <li><strong>DRY (Don't Repeat Yourself) :</strong> Éviter la duplication.</li>
        <li><strong>Prévisibilité :</strong> Pas d'effets de bord inattendus.</li>
      </ul>
    `,
    keywords: ['Lisibilité', 'Maintenance', 'DRY']
  },
  {
    id: 36,
    category: 'Code Quality',
    question: 'Refactoring',
    answer: `
      <p>Processus de modification de la structure interne du code sans changer son comportement externe.</p>
      <ul style="text-align: left; padding-left: 1.5rem;">
        <li><strong>But :</strong> Améliorer la lisibilité, réduire la complexité, faciliter la maintenance (réduire la dette technique).</li>
        <li><strong>Pré-requis indispensable :</strong> Avoir des <strong>Tests Unitaires</strong> solides pour garantir la non-régression.</li>
      </ul>
    `,
    keywords: ['Dette Technique', 'Maintenance', 'Tests']
  }
];

export const categories = ['All', 'Agile', 'UI/UX', 'Merise', 'UML', 'Database', 'Architecture', 'API', 'Security', 'Code Quality'];
