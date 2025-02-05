-- Table utilisateur
CREATE TABLE utilisateur (
    id INT PRIMARY KEY AUTO_INCREMENT,
    pseudo VARCHAR(50),
    email VARCHAR(255) UNIQUE,
    mot_de_passe VARCHAR(255) NOT NULL,
    date_inscription DATETIME DEFAULT CURRENT_TIMESTAMP,
    photo_profil VARCHAR(255),
    est_admin BOOLEAN DEFAULT FALSE
);

-- Table type_recette
CREATE TABLE type_recette (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    image VARCHAR(255) NOT NULL
);

-- Table difficulte
CREATE TABLE difficulte (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    image VARCHAR(255) NOT NULL
);

-- Table temps_preparation
CREATE TABLE temps_preparation (
    id INT PRIMARY KEY AUTO_INCREMENT,
    heure INT NOT NULL CHECK (heure BETWEEN 0 AND 72),
    minute INT NOT NULL CHECK (minute BETWEEN 0 AND 59),
    image VARCHAR(255) NOT NULL
);

-- Table ingredient
CREATE TABLE ingredient (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    categorie VARCHAR(50),
    saison ENUM("printemps", "été", "automne", "hiver", "toutes saisons") NOT NULL,
    icone_categorie VARCHAR(255)
);

-- Table recette
CREATE TABLE recette (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(100) NOT NULL,
    description VARCHAR(200) NOT NULL,
    date_publication DATE NOT NULL,
    image_url VARCHAR(255),
    saison ENUM("printemps", "été", "automne", "hiver", "toutes saisons") DEFAULT NULL,
    type_id INT NOT NULL,
    difficulte_id INT NOT NULL,
    temps_id INT NOT NULL,
    utilisateur_id INT NOT NULL,
    FOREIGN KEY (type_id) REFERENCES type_recette(id),
    FOREIGN KEY (difficulte_id) REFERENCES difficulte(id),
    FOREIGN KEY (temps_id) REFERENCES temps_preparation(id),
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id)
);

-- Table ingredient_recette
CREATE TABLE ingredient_recette (
    recette_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    quantite FLOAT NOT NULL,
    unite VARCHAR(15) NOT NULL,
    PRIMARY KEY (recette_id, ingredient_id),
    FOREIGN KEY (recette_id) REFERENCES recette(id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) REFERENCES ingredient(id)
);

-- Table etape_preparation
CREATE TABLE etape_preparation (
    id INT PRIMARY KEY AUTO_INCREMENT,
    recette_id INT NOT NULL,
    ordre INT NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (recette_id) REFERENCES recette(id) ON DELETE CASCADE
);

-- Table avis
CREATE TABLE avis (
    id INT PRIMARY KEY AUTO_INCREMENT,
    recette_id INT NOT NULL,
    utilisateur_id INT NOT NULL,
    note TINYINT NOT NULL CHECK (note BETWEEN 1 AND 5), -- Note sur 5
    commentaire VARCHAR(500), -- Limitation à 500 caractères
    date_avis DATE NOT NULL,
    FOREIGN KEY (recette_id) REFERENCES recette(id) ON DELETE CASCADE,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id)
);



-- Insertion des données initiales
-- Utilisateurs
INSERT INTO utilisateur (pseudo, email, mot_de_passe, date_inscription, est_admin) VALUES
("admin", "admin@example.com", "adminpasswordhash", CURDATE(), TRUE),
("user1", "user1@example.com", "user1passwordhash", CURDATE(), FALSE),
("user2", "user2@example.com", "user2passwordhash", CURDATE(), FALSE);

-- Types de recettes
INSERT INTO type_recette (nom, image) VALUES
("Entrée", "/images/types/entree.jpg"),
("Plat", "/images/types/plat.jpg"),
("Dessert", "/images/types/dessert.jpg"),
("Boisson", "/images/types/boisson.jpg");

-- Niveaux de difficulté
INSERT INTO difficulte (nom, image) VALUES
("Facile", "/images/difficulte/niveau.jpg"),
("Moyen", "/images/difficulte/niveau.jpg"),
("Difficile", "/images/difficulte/niveau.jpg");

-- Temps de préparation
INSERT INTO temps_preparation (heure, minute, image) VALUES
(0, 30, "/images/temps/icone.jpg"),
(1, 0, "/images/temps/icone.jpg"),
(1, 30, "/images/temps/icone.jpg"),
(2, 0, "/images/temps/icone.jpg");

-- Table ingredient
INSERT INTO ingredient (nom, categorie, icone_categorie, saison) VALUES

-- Viandes
("Steak", "Viande", "/images/categories/viande.jpg", "toutes saisons"),
("Filet de poulet", "Viande", "/images/categories/viande.jpg", "toutes saisons"),
("Escalope de dinde", "Viande", "/images/categories/viande.jpg", "toutes saisons"),
("Côte de porc", "Viande", "/images/categories/viande.jpg", "toutes saisons"),
("Lardons", "Viande", "/images/categories/viande.jpg", "toutes saisons"),
("Agneau", "Viande", "/images/categories/viande.jpg", "printemps"),
("Canard", "Viande", "/images/categories/viande.jpg", "automne"),
("Jambon cru", "Viande", "/images/categories/viande.jpg", "toutes saisons"),
("Pintade", "Viande", "/images/categories/viande.jpg", "automne"),
("Pigeon", "Viande", "/images/categories/viande.jpg", "automne"),
("Poulet fermier", "Viande", "/images/categories/viande.jpg", "toutes saisons"),
("Veau", "Viande", "/images/categories/viande.jpg", "printemps"),
("Sanglier", "Viande", "/images/categories/viande.jpg", "automne"),
("Chevreuil", "Viande", "/images/categories/viande.jpg", "automne"),
("Lapin", "Viande", "/images/categories/viande.jpg", "printemps"),
("Bœuf haché", "Viande", "/images/categories/viande.jpg", "toutes saisons"),

-- Poissons
("Saumon", "Poisson", "https://cdn-icons-png.flaticon.com/512/6341/6341973.png", "hiver"),
("Cabillaud", "Poisson", "https://cdn-icons-png.flaticon.com/512/6341/6341973.png", "hiver"),
("Thon", "Poisson", "/images/categories/poisson.jpg", "été"),
("Crevettes", "Fruits de mer", "/images/categories/poisson.jpg", "toutes saisons"),
("Moules", "Fruits de mer", "/images/categories/poisson.jpg", "automne"),
("Saint-Jacques", "Fruits de mer", "/images/categories/poisson.jpg", "automne"),
("Sardine", "Poisson", "/images/categories/poisson.jpg", "été"),
("Haddock", "Poisson", "https://cdn-icons-png.flaticon.com/512/6341/6341973.png", "hiver"),
("Merlu", "Poisson", "/images/categories/poisson.jpg", "printemps"),
("Lieu noir", "Poisson", "/images/categories/poisson.jpg", "printemps"),
("Lieu jaune", "Poisson", "/images/categories/poisson.jpg", "printemps"),
("Sole", "Poisson", "/images/categories/poisson.jpg", "printemps"),
("Turbot", "Poisson", "/images/categories/poisson.jpg", "automne"),
("Colin", "Poisson", "https://cdn-icons-png.flaticon.com/512/6341/6341973.png", "hiver"),
("Lingue", "Poisson", "https://cdn-icons-png.flaticon.com/512/6341/6341973.png", "hiver"),
("Maquereau", "Poisson", "/images/categories/poisson.jpg", "été"),
("Truite", "Poisson", "/images/categories/poisson.jpg", "printemps"),
("Hareng", "Poisson", "https://cdn-icons-png.flaticon.com/512/6341/6341973.png", "hiver"),
("Sandre", "Poisson", "/images/categories/poisson.jpg", "printemps"),
("Perche", "Poisson", "/images/categories/poisson.jpg", "printemps"),
("Brochet", "Poisson", "/images/categories/poisson.jpg", "printemps"),

-- Produits laitiers
("Beurre", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "toutes saisons"),
("Crème fraîche", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "toutes saisons"),
("Fromage râpé", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "toutes saisons"),
("Lait", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "toutes saisons"),
("Mozzarella", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "été"),
("Yaourt nature", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "toutes saisons"),
("Parmesan", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "toutes saisons"),
("Brie", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "automne"),
("Camembert", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "automne"),
("Roquefort", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "automne"),
("Chèvre", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "printemps"),
("Comté", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "automne"),
("Reblochon", "Produits laitiers", "https://cdn-icons-png.flaticon.com/128/4900/4900721.png", "hiver"),
("Bleu dAuvergne", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "automne"),
("Gruyère", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "toutes saisons"),
("Ricotta", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "été"),
("Feta", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "été"),
("Mascarpone", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "printemps"),
("Fromage blanc", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "toutes saisons"),
("Petit suisse", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "toutes saisons"),
("Beurre demi-sel", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "toutes saisons"),

-- Œufs
("Oeuf de poule", "Oeuf", "/images/categories/oeuf.jpg", "toutes saisons"),
("Oeuf de caille", "Oeuf", "/images/categories/oeuf.jpg", "toutes saisons"),
("Oeuf de canard", "Oeuf", "/images/categories/oeuf.jpg", "toutes saisons"),
("Oeuf d'oie", "Oeuf", "/images/categories/oeuf.jpg", "toutes saisons"),
("Oeuf de poisson", "Oeuf", "   https://cdn-icons-png.flaticon.com/512/18287/18287966.png ", "hiver"),

-- Legumes

("Chou rouge", "Legume", "https://cdn-icons-png.flaticon.com/128/3944/3944192.png", "hiver"),
("Chou frisé", "Legume", "https://cdn-icons-png.flaticon.com/128/8026/8026244.png", "hiver"),

-- Fruits
("Pomme", "Fruit", "/images/categories/fruit.jpg", "automne"),
("Banane", "Fruit", "/images/categories/fruit.jpg", "toutes saisons"),
("Orange", "Fruit", "https://cdn-icons-png.flaticon.com/128/1728/1728765.png", "hiver"),
("Citron", "Fruit", "https://cdn-icons-png.flaticon.com/128/6866/6866595.png", "hiver"),
("Citrouille", "Fruit", "https://cdn-icons-png.flaticon.com/512/6135/6135960.png", "hiver"),
("Fraise", "Fruit", "/images/categories/fruit.jpg", "printemps"),
("Framboise", "Fruit", "/images/categories/fruit.jpg", "été"),
("Ananas", "Fruit", "/images/categories/fruit.jpg", "toutes saisons"),
("Mangue", "Fruit", "https://cdn-icons-png.flaticon.com/128/6866/6866546.png", "hiver"),
("Papaye", "Fruit", "https://cdn-icons-png.flaticon.com/128/14476/14476708.png", "hiver"),
("Fruit de la passion", "Fruit", "https://cdn-icons-png.flaticon.com/128/5402/5402298.png", "hiver"),
("Kiwi", "Fruit", "https://cdn-icons-png.flaticon.com/128/3944/3944170.png", "hiver"),
("Litchi", "Fruit", "https://cdn-icons-png.flaticon.com/128/3944/3944244.png", "hiver"),
("Goyave", "Fruit", "https://cdn-icons-png.flaticon.com/128/5402/5402118.png", "hiver"),
("Mytille", "Fruit", "/images/categories/fruit.jpg", "été"),
("Cassis", "Fruit", "/images/categories/fruit.jpg", "été"),
("Groseille", "Fruit", "/images/categories/fruit.jpg", "été"),
("Clémentine", "Fruit", "https://cdn-icons-png.flaticon.com/128/1704/1704398.png", "hiver"),
("Pamplemousse", "Fruit", "https://cdn-icons-png.flaticon.com/128/2659/2659549.png", "hiver"),
("Bergamote", "Fruit", "https://cdn-icons-png.flaticon.com/128/14923/14923315.png", "hiver"),
("Kumquat", "Fruit", "https://cdn-icons-png.flaticon.com/128/1135/1135517.png", "hiver"),
("Pêche", "Fruit", "/images/categories/fruit.jpg", "été"),
("Nectarine", "Fruit", "/images/categories/fruit.jpg", "été"),
("Prune", "Fruit", "/images/categories/fruit.jpg", "été"),
("Cerise", "Fruit", "/images/categories/fruit.jpg", "été"),
("Poire", "Fruit", "/images/categories/fruit.jpg", "automne"),
("Raisin", "Fruit", "/images/categories/fruit.jpg", "automne"),
("Coing", "Fruit", "/images/categories/fruit.jpg", "automne"),
("Figue", "Fruit", "/images/categories/fruit.jpg", "automne");
-- Alcools
INSERT INTO ingredient (nom, categorie, icone_categorie, saison) VALUES
("Vin rouge", "Alcool", "/images/categories/alcool.jpg", "toutes saisons"),
("Vin blanc", "Alcool", "/images/categories/alcool.jpg", "toutes saisons"),
("Bière", "Alcool", "/images/categories/alcool.jpg", "toutes saisons"),
("Champagne", "Alcool", "/images/categories/alcool.jpg", "toutes saisons"),
("Rhum", "Alcool", "/images/categories/alcool.jpg", "toutes saisons"),
("Vodka", "Alcool", "/images/categories/alcool.jpg", "toutes saisons"),
("Gin", "Alcool", "/images/categories/alcool.jpg", "toutes saisons"),
("Tequila", "Alcool", "/images/categories/alcool.jpg", "toutes saisons"),
("Cognac", "Alcool", "/images/categories/alcool.jpg", "toutes saisons"),
("Porto", "Alcool", "/images/categories/alcool.jpg", "toutes saisons"),
("Vermouth", "Alcool", "/images/categories/alcool.jpg", "toutes saisons"),
("Absinthe", "Alcool", "/images/categories/alcool.jpg", "toutes saisons"),
("Liqueur de café", "Alcool", "/images/categories/alcool.jpg", "toutes saisons"),
("Limoncello", "Alcool", "/images/categories/alcool.jpg", "toutes saisons"),
("Cidre brut", "Alcool", "/images/categories/alcool.jpg", "automne"),
("Cidre doux", "Alcool", "/images/categories/alcool.jpg", "automne");


-- Table recette
INSERT INTO recette (titre, description, date_publication, image_url, saison, type_id, difficulte_id, temps_id, utilisateur_id)
VALUES
("Soupe d'hiver", "Une soupe chaude pour l'hiver.", "2023-01-15", "https://media.istockphoto.com/id/1038979532/fr/photo/soupe-tomate-aux-lentilles-rouges-au-curry-et-noix-de-coco-d%C3%A9licieuse-nourriture-v%C3%A9g%C3%A9tarienne.jpg?s=612x612&w=0&k=20&c=P9aAkXmxQ4h4bfhFWuTtJfw8JefqxbPZ2VqWo-W0vtw=", "hiver", 2, 2, 3, 1),
("Buddha Bowl", "Pour une alimentation équilibrée avec du tofu, du quinoa, des légumes", "2025-01-23", "https://media.istockphoto.com/id/2150471415/fr/photo/buddha-bowl-v%C3%A9g%C3%A9talien-pour-une-alimentation-%C3%A9quilibr%C3%A9e-avec-du-tofu-du-quinoa-des-l%C3%A9gumes-et.jpg?s=612x612&w=0&k=20&c=a2RkFZlMwaLKucEgj7aEwZW6uGCEuAUWX8tdB7Mpj88=", "été", 1, 1, 1, 2),
("Poulet bresé", "Poulet rôti avec pommes de terre et oignons", "2025-01-23", "https://media.istockphoto.com/id/1360064510/fr/photo/poulet-r%C3%B4ti-avec-pommes-de-terre-et-oignons.jpg?s=612x612&w=0&k=20&c=iZlsp-xAaw8h3SKU_MJ7pOPWPB_u4r9UgTmSkScDf20=", "été", 1, 1, 1, 2),
("Gâteau de Noël", "Gâteau de Noël italien traditionnel Panettone", "2022-01-23", "https://media.istockphoto.com/id/1805465945/fr/photo/g%C3%A2teau-de-no%C3%ABl-italien-traditionnel-panettone-avec-d%C3%A9corations-festives.jpg?s=612x612&w=0&k=20&c=mIDta2Rcx_rEGkgRH7VtZD6MyVtjvF8IggarLrtfMb4=", "hiver", 1, 1, 1, 2),
("Fondue au fromage", "Fondue au fromage avec vin de pain et raisin", "2022-01-23", "https://media.istockphoto.com/id/1154139425/fr/photo/fondue-au-fromage-avec-vin-de-pain-et-raisin.jpg?s=612x612&w=0&k=20&c=PNR9MytdVe3l3zbBCHPWm10U8h-2Vk5sh0fqgLNaDTU=", "hiver", 1, 1, 1, 2),
("Ragoût", "Ragoût fait maison avec de la viande et des légumes", "2022-01-23", "https://media.istockphoto.com/id/614712998/fr/photo/rago%C3%BBt-fait-maison-avec-de-la-viande-et-des-l%C3%A9gumes.jpg?s=612x612&w=0&k=20&c=w3K22nteo-a_8d56FsCjUj89dpCBj0jdSDL3-LCdOA0=", "hiver", 1, 1, 1, 2),
("Poulet Riggies", "Pâtes de blé entier cuites au four avec du boeuf haché et du fromage", "2025-01-23", "https://media.istockphoto.com/id/1098150768/fr/photo/poulet-riggies.jpg?s=612x612&w=0&k=20&c=xRyWBscDAlDA_ke4iZQqrOi_4KY63vVSD_Q9Vb-pnhg=", "hiver", 1, 1, 1, 2),
("Gratin", "Gratin de pommes de terre au fromage maison", "2025-01-23", "https://media.istockphoto.com/id/1442601396/fr/photo/gratin-de-pommes-de-terre-au-fromage-maison.jpg?s=612x612&w=0&k=20&c=yJp1IfY2kuj7ShcCkzOWWABT0YMS-6C1CyuBFptCSSQ=", "hiver",1, 1, 1, 2),
("Salade estivale", "Une salade fraîche pour l'été.", "2023-06-15", "path/to/salade.jpg", "été", 1, 1, 1, 2);





-- Table ingredient_recette
INSERT INTO ingredient_recette (recette_id, ingredient_id, quantite, unite)
VALUES
(1, 1, 300, "g"),
(1, 2, 150, "g"),
(1, 3, 450, "g"),
(2, 3, 200, "g");

-- Table etape_preparation
INSERT INTO etape_preparation (recette_id, ordre, description)
VALUES
(1, 1, "Épluchez et coupez les carottes."),
(1, 2, "Faites cuire les carottes dans l'eau bouillante pendant 20 minutes."),
(1, 3, "Mixez les carottes avec un peu de crème."),
(2, 1, "Coupez les tomates et les fraises."),
(2, 2, "Mélangez-les avec un peu de vinaigrette.");

-- Table avis
INSERT INTO avis (recette_id, utilisateur_id, note, commentaire, date_avis)
VALUES
(1, 2, 5, "Excellente soupe, très réconfortante.", "2025-01-16"),
(2, 1, 4, "Salade fraîche et délicieuse.", "2025-06-16");

