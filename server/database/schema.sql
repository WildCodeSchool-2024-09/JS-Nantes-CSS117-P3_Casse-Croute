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
    recette_ref VARCHAR(100),
    titre VARCHAR(100) NOT NULL,
    description VARCHAR(200) NOT NULL,
    date_publication DATETIME DEFAULT CURRENT_TIMESTAMP,
    image_url VARCHAR(255),
    saison ENUM("printemps", "été", "automne", "hiver", "toutes saisons") DEFAULT NULL,
    type_id VARCHAR (10),
    difficulte_id VARCHAR (20),
    temps_id VARCHAR (4),
    utilisateur_id INT ON DELETE CASCADE
);

-- Table ingredient_recette
CREATE TABLE ingredient_recette (
    recette_ref VARCHAR(100) NOT NULL,
    ingredient_id INT NOT NULL,
    quantite FLOAT NOT NULL,
    unite VARCHAR(15) NOT NULL,
    PRIMARY KEY (recette_ref, ingredient_id)
    -- FOREIGN KEY (recette_id) REFERENCES recette(id) ON DELETE CASCADE,
    -- FOREIGN KEY (ingredient_id) REFERENCES ingredient(id)
);

-- Table etape_preparation
CREATE TABLE etape_preparation (
    id INT PRIMARY KEY AUTO_INCREMENT,
    recette_ref VARCHAR(100) NOT NULL,
    ordre INT NOT NULL,
    description TEXT NOT NULL
    -- FOREIGN KEY (recette_ref) REFERENCES recette(recette_ref) ON DELETE CASCADE
);

-- Table avis
CREATE TABLE avis (
    id INT PRIMARY KEY AUTO_INCREMENT,
    recette_id INT NOT NULL,
    utilisateur_id INT NOT NULL,
    note TINYINT NOT NULL CHECK (note BETWEEN 1 AND 5),
    commentaire VARCHAR(500),
    date_avis DATE NOT NULL,
    FOREIGN KEY (recette_id) REFERENCES recette(id) ON DELETE CASCADE,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id) ON DELETE CASCADE
);



-- Insertion des données initiales
-- Utilisateurs
INSERT INTO utilisateur (pseudo, email, mot_de_passe, date_inscription, est_admin) VALUES
("admin", "admin@example.com", "adminpasswordhash", CURDATE(), TRUE),
("user1", "user1@example.com", "user1passwordhash", CURDATE(), FALSE),
("user3", "user3@example.com", "user3passwordhash", CURDATE(), FALSE),
("user4", "user4@example.com", "user4passwordhash", CURDATE(), FALSE),
("user5", "user5@example.com", "user5passwordhash", CURDATE(), FALSE),
("user6", "user6@example.com", "user6passwordhash", CURDATE(), FALSE),
("user7", "user7@example.com", "user7passwordhash", CURDATE(), FALSE),
("user8", "user8@example.com", "user8passwordhash", CURDATE(), FALSE),
("user9", "user9@example.com", "user9passwordhash", CURDATE(), FALSE);

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
("Steak", "Viande", "https://cdn-icons-png.flaticon.com/512/1046/1046769.png", "toutes saisons"),
("Filet de poulet", "Viande", "https://cdn-icons-png.flaticon.com/512/1046/1046769.png", "toutes saisons"),
("Escalope de dinde", "Viande", "https://cdn-icons-png.flaticon.com/512/1046/1046769.png", "toutes saisons"),
("Côte de porc", "Viande", "https://cdn-icons-png.flaticon.com/512/1046/1046769.png", "toutes saisons"),
("Lardons", "Viande", "https://cdn-icons-png.flaticon.com/512/1046/1046769.png", "toutes saisons"),
("Agneau", "Viande", "https://cdn-icons-png.flaticon.com/512/1046/1046769.png", "printemps"),
("Canard", "Viande", "https://cdn-icons-png.flaticon.com/512/1046/1046769.png", "automne"),
("Jambon cru", "Viande", "https://cdn-icons-png.flaticon.com/512/1046/1046769.png", "toutes saisons"),
("Pintade", "Viande", "https://cdn-icons-png.flaticon.com/512/1046/1046769.png", "automne"),
("Pigeon", "Viande", "https://cdn-icons-png.flaticon.com/512/1046/1046769.png", "automne"),
("Poulet fermier", "Viande", "https://cdn-icons-png.flaticon.com/512/1046/1046769.png", "toutes saisons"),
("Veau", "Viande", "https://cdn-icons-png.flaticon.com/512/1046/1046769.png", "printemps"),
("Sanglier", "Viande", "https://cdn-icons-png.flaticon.com/512/1046/1046769.png", "automne"),
("Chevreuil", "Viande", "https://cdn-icons-png.flaticon.com/512/1046/1046769.png", "automne"),
("Lapin", "Viande", "https://cdn-icons-png.flaticon.com/512/1046/1046769.png", "printemps"),
("Bœuf haché", "Viande", "https://cdn-icons-png.flaticon.com/512/1046/1046769.png", "toutes saisons"),

-- Poissons
("Saumon", "Poisson", "https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png", "hiver"),
("Cabillaud", "Poisson", "https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png", "hiver"),
("Thon", "Poisson", "https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png", "été"),
("Crevettes", "Fruits de mer", "https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png", "toutes saisons"),
("Moules", "Fruits de mer", "https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png", "automne"),
("Saint-Jacques", "Fruits de mer", "https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png", "automne"),
("Sardine", "Poisson", "https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png", "été"),
("Haddock", "Poisson", "https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png", "hiver"),
("Merlu", "Poisson", "https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png", "printemps"),
("Lieu noir", "Poisson", "https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png", "printemps"),
("Lieu jaune", "Poisson", "https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png", "printemps"),
("Sole", "Poisson", "https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png", "printemps"),
("Turbot", "Poisson", "https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png", "automne"),
("Colin", "Poisson", "https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png", "hiver"),
("Lingue", "Poisson", "https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png", "hiver"),
("Maquereau", "Poisson", "https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png", "été"),
("Truite", "Poisson", "https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png", "printemps"),
("Hareng", "Poisson", "https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png", "hiver"),
("Sandre", "Poisson", "https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png", "printemps"),
("Perche", "Poisson", "https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png", "printemps"),
("Brochet", "Poisson", "https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png", "printemps"),

-- Produits laitiers
("Beurre", "Produits laitiers", "https://cdn-icons-png.flaticon.com/512/4831/4831610.png", "toutes saisons"),
("Crème fraîche", "Produits laitiers", "https://cdn-icons-png.flaticon.com/512/4831/4831610.png", "toutes saisons"),
("Fromage râpé", "Produits laitiers", "https://cdn-icons-png.flaticon.com/512/4831/4831610.png", "toutes saisons"),
("Lait", "Produits laitiers", "https://cdn-icons-png.flaticon.com/512/4831/4831610.png", "toutes saisons"),
("Mozzarella", "Produits laitiers", "https://cdn-icons-png.flaticon.com/512/4831/4831610.png", "été"),
("Yaourt nature", "Produits laitiers", "https://cdn-icons-png.flaticon.com/512/4831/4831610.png", "toutes saisons"),
("Parmesan", "Produits laitiers", "https://cdn-icons-png.flaticon.com/512/4831/4831610.png", "toutes saisons"),
("Brie", "Produits laitiers", "https://cdn-icons-png.flaticon.com/512/4831/4831610.png", "automne"),
("Camembert", "Produits laitiers", "https://cdn-icons-png.flaticon.com/512/4831/4831610.png", "automne"),
("Roquefort", "Produits laitiers", "https://cdn-icons-png.flaticon.com/512/4831/4831610.png", "automne"),
("Chèvre", "Produits laitiers", "https://cdn-icons-png.flaticon.com/512/4831/4831610.png", "printemps"),
("Comté", "Produits laitiers", "https://cdn-icons-png.flaticon.com/512/4831/4831610.png", "automne"),
("Reblochon", "Produits laitiers", "https://cdn-icons-png.flaticon.com/512/4831/4831610.png", "hiver"),
("Bleu dAuvergne", "Produits laitiers", "https://cdn-icons-png.flaticon.com/512/4831/4831610.png", "automne"),
("Gruyère", "Produits laitiers", "https://cdn-icons-png.flaticon.com/512/4831/4831610.png", "toutes saisons"),
("Ricotta", "Produits laitiers", "https://cdn-icons-png.flaticon.com/512/4831/4831610.png", "été"),
("Feta", "Produits laitiers", "https://cdn-icons-png.flaticon.com/512/4831/4831610.png", "été"),
("Mascarpone", "Produits laitiers", "https://cdn-icons-png.flaticon.com/512/4831/4831610.png", "printemps"),
("Fromage blanc", "Produits laitiers", "https://cdn-icons-png.flaticon.com/512/4831/4831610.png", "toutes saisons"),
("Petit suisse", "Produits laitiers", "https://cdn-icons-png.flaticon.com/512/4831/4831610.png", "toutes saisons"),
("Beurre demi-sel", "Produits laitiers", "https://cdn-icons-png.flaticon.com/512/4831/4831610.png", "toutes saisons"),

-- Œufs
("Oeuf de poule", "Oeuf", "https://cdn-icons-png.flaticon.com/512/5222/5222963.png", "toutes saisons"),
("Oeuf de caille", "Oeuf", "https://cdn-icons-png.flaticon.com/512/5222/5222963.png", "toutes saisons"),
("Oeuf de canard", "Oeuf", "https://cdn-icons-png.flaticon.com/512/5222/5222963.png", "toutes saisons"),
("Oeuf d'oie", "Oeuf", "https://cdn-icons-png.flaticon.com/512/5222/5222963.png", "toutes saisons"),
("Oeuf de poisson", "Oeuf", "https://cdn-icons-png.flaticon.com/512/5222/5222963.png", "hiver"),
-- Fruits
("Pomme", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "automne"),
("Banane", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "toutes saisons"),
("Orange", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "hiver"),
("Citron", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "hiver"),
("Fraise", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "printemps"),
("Framboise", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "été"),
("Ananas", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "toutes saisons"),
("Mangue", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "hiver"),
("Papaye", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "hiver"),
("Fruit de la passion", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "hiver"),
("Kiwi", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "hiver"),
("Litchi", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "hiver"),
("Goyave", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "hiver"),
("Mytille", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "été"),
("Cassis", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "été"),
("Groseille", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "été"),
("Clémentine", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "hiver"),
("Pamplemousse", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "hiver"),
("Bergamote", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "hiver"),
("Kumquat", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "hiver"),
("Pêche", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "été"),
("Nectarine", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "été"),
("Prune", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "été"),
("Cerise", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "été"),
("Poire", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "automne"),
("Raisin", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "automne"),
("Coing", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "automne"),
("Figue", "Fruit", "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", "automne");
-- Alcools
INSERT INTO ingredient (nom, categorie, icone_categorie, saison) VALUES
("Vin rouge", "Alcool", "https://cdn-icons-png.flaticon.com/512/7438/7438544.png", "toutes saisons"),
("Vin blanc", "Alcool", "https://cdn-icons-png.flaticon.com/512/7438/7438544.png", "toutes saisons"),
("Bière", "Alcool", "https://cdn-icons-png.flaticon.com/512/7438/7438544.png", "toutes saisons"),
("Champagne", "Alcool", "https://cdn-icons-png.flaticon.com/512/7438/7438544.png", "toutes saisons"),
("Rhum", "Alcool", "https://cdn-icons-png.flaticon.com/512/7438/7438544.png", "toutes saisons"),
("Vodka", "Alcool", "https://cdn-icons-png.flaticon.com/512/7438/7438544.png", "toutes saisons"),
("Gin", "Alcool", "https://cdn-icons-png.flaticon.com/512/7438/7438544.png", "toutes saisons"),
("Tequila", "Alcool", "https://cdn-icons-png.flaticon.com/512/7438/7438544.png", "toutes saisons"),
("Cognac", "Alcool", "https://cdn-icons-png.flaticon.com/512/7438/7438544.png", "toutes saisons"),
("Porto", "Alcool", "https://cdn-icons-png.flaticon.com/512/7438/7438544.png", "toutes saisons"),
("Vermouth", "Alcool", "https://cdn-icons-png.flaticon.com/512/7438/7438544.png", "toutes saisons"),
("Absinthe", "Alcool", "https://cdn-icons-png.flaticon.com/512/7438/7438544.png", "toutes saisons"),
("Liqueur de café", "Alcool", "https://cdn-icons-png.flaticon.com/512/7438/7438544.png", "toutes saisons"),
("Limoncello", "Alcool", "https://cdn-icons-png.flaticon.com/512/7438/7438544.png", "toutes saisons"),
("Cidre brut", "Alcool", "https://cdn-icons-png.flaticon.com/512/7438/7438544.png", "automne"),
("Cidre doux", "Alcool", "https://cdn-icons-png.flaticon.com/512/7438/7438544.png", "automne");


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
INSERT INTO ingredient_recette (recette_ref, ingredient_id, quantite, unite)
VALUES
(1, 1, 300, "g"),
(1, 2, 150, "g"),
(1, 3, 450, "g"),
(2, 3, 200, "g");

-- Table etape_preparation
INSERT INTO etape_preparation (recette_ref, ordre, description)
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

