-- Table utilisateur
CREATE TABLE utilisateur (
    id INT PRIMARY KEY AUTO_INCREMENT,
    pseudo VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    mot_de_passe VARCHAR(255) NOT NULL,
    date_inscription DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    photo_profil VARCHAR(255),
    est_admin BOOLEAN NOT NULL DEFAULT FALSE
);

-- Table type_recette
CREATE TABLE type_recette (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL
);

-- Table difficulte
CREATE TABLE difficulte (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL
);

-- Table temps_preparation
CREATE TABLE temps_preparation (
    id INT PRIMARY KEY AUTO_INCREMENT,
    heure INT NOT NULL CHECK (heure BETWEEN 0 AND 72),
    minute INT NOT NULL CHECK (minute BETWEEN 0 AND 59)
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

-- Table ingredient_recette (relation entre recettes et ingrédients)
CREATE TABLE ingredient_recette (
    recette_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    quantite FLOAT NOT NULL,
    unite VARCHAR(15) NOT NULL,
    PRIMARY KEY (recette_id, ingredient_id),
    FOREIGN KEY (recette_id) REFERENCES recette(id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) REFERENCES ingredient(id)
);

-- Table etape_preparation (étapes de préparation des recettes)
CREATE TABLE etape_preparation (
    id INT PRIMARY KEY AUTO_INCREMENT,
    recette_id INT NOT NULL,
    ordre INT NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (recette_id) REFERENCES recette(id) ON DELETE CASCADE
);

-- Table avis (avis des utilisateurs sur les recettes)
CREATE TABLE avis (
    id INT PRIMARY KEY AUTO_INCREMENT,
    recette_id INT NOT NULL,
    utilisateur_id INT NOT NULL,
    note TINYINT NOT NULL CHECK (note BETWEEN 1 AND 5),
    commentaire VARCHAR(500),
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
INSERT INTO type_recette (nom) VALUES
("Entrée"),
("Plat"),
("Dessert"),
("Boisson");

-- Niveaux de difficulté
INSERT INTO difficulte (nom) VALUES
("Facile"),
("Moyen"),
("Difficile");

-- Temps de préparation
INSERT INTO temps_preparation (heure, minute) VALUES
(1, 30),
(0, 30),
(1, 0),
(2, 0);


-- Table ingredient
INSERT INTO ingredient (nom, categorie, icone_categorie, saison) VALUES

-- Viandes
("Steak", "Viande", "https://cdn-icons-png.flaticon.com/128/1046/1046769.png", "toutes saisons"),
("Filet de poulet", "Viande", "/images/categories/viande.jpg", "toutes saisons"),
("Escalope de dinde", "Viande", "/images/categories/viande.jpg", "toutes saisons"),
("Côte de porc", "Viande", "https://cdn-icons-png.flaticon.com/128/14476/14476803.png", "toutes saisons"),
("Lardons", "Viande", "https://cdn-icons-png.flaticon.com/128/590/590709.png", "toutes saisons"),
("Agneau", "Viande", "https://cdn-icons-png.flaticon.com/128/1702/1702830.png", "printemps"),
("Canard", "Viande", "/images/categories/viande.jpg", "automne"),
("Jambon cru", "Viande", "/images/categories/viande.jpg", "toutes saisons"),
("Pintade", "Viande", "/images/categories/viande.jpg", "automne"),
("Pigeon", "Viande", "/images/categories/viande.jpg", "automne"),
("Poulet fermier", "Viande", "/images/categories/viande.jpg", "toutes saisons"),
("Veau", "Viande", "/images/categories/viande.jpg", "printemps"),
("Sanglier", "Viande", "/images/categories/viande.jpg", "automne"),
("Chevreuil", "Viande", "/images/categories/viande.jpg", "automne"),
("Lapin", "Viande", "/images/categories/viande.jpg", "printemps"),
("Bœuf haché", "Viande", "https://cdn-icons-png.flaticon.com/128/10806/10806535.png", "toutes saisons"),

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
("Beurre", "Produits laitiers", "https://cdn-icons-png.flaticon.com/128/4729/4729898.png", "toutes saisons"),
("Crème fraîche", "Produits laitiers", "https://cdn-icons-png.flaticon.com/128/12755/12755399.png", "toutes saisons"),
("Fromage râpé", "Produits laitiers", "https://cdn-icons-png.flaticon.com/128/4900/4900721.png", "toutes saisons"),
("Lait", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "toutes saisons"),
("Mozzarella", "Produits laitiers", "https://cdn-icons-png.flaticon.com/128/4900/4900721.png", "été"),
("Yaourt nature", "Produits laitiers", "https://cdn-icons-png.flaticon.com/128/4900/4900721.png", "toutes saisons"),
("Parmesan", "Produits laitiers", "https://cdn-icons-png.flaticon.com/128/4900/4900721.png", "toutes saisons"),
("Brie", "Produits laitiers", "https://cdn-icons-png.flaticon.com/128/4900/4900721.png", "automne"),
("Camembert", "Produits laitiers", "https://cdn-icons-png.flaticon.com/128/4900/4900721.png", "automne"),
("Roquefort", "Produits laitiers", "https://cdn-icons-png.flaticon.com/128/4900/4900721.png", "automne"),
("Chèvre", "Produits laitiers", "https://cdn-icons-png.flaticon.com/128/4900/4900721.png", "printemps"),
("Comté", "Produits laitiers", "https://cdn-icons-png.flaticon.com/128/4900/4900721.png", "automne"),
("Reblochon", "Produits laitiers", "https://cdn-icons-png.flaticon.com/128/4900/4900721.png", "hiver"),
("Bleu dAuvergne", "Produits laitiers", "https://cdn-icons-png.flaticon.com/128/4900/4900721.png", "automne"),
("Gruyère", "Produits laitiers", "https://cdn-icons-png.flaticon.com/128/4900/4900721.png", "toutes saisons"),
("Ricotta", "Produits laitiers", "https://cdn-icons-png.flaticon.com/128/4900/4900721.png", "été"),
("Feta", "Produits laitiers", "https://cdn-icons-png.flaticon.com/128/4900/4900721.png", "été"),
("Mascarpone", "Produits laitiers", "https://cdn-icons-png.flaticon.com/128/4900/4900721.png", "printemps"),
("Fromage blanc", "Produits laitiers", "https://cdn-icons-png.flaticon.com/128/12755/12755399.png", "toutes saisons"),
("Petit suisse", "Produits laitiers", "https://cdn-icons-png.flaticon.com/128/4391/4391600.pngg", "toutes saisons"),
("Beurre demi-sel", "Produits laitiers", "https://cdn-icons-png.flaticon.com/128/4729/4729898.png", "toutes saisons"),

-- Œufs
("Oeuf de poule", "Oeuf", "https://cdn-icons-png.flaticon.com/128/1951/1951379.png", "toutes saisons"),
("Oeuf de caille", "Oeuf", "https://cdn-icons-png.flaticon.com/128/1951/1951379.png", "toutes saisons"),
("Oeuf de canard", "Oeuf", "https://cdn-icons-png.flaticon.com/128/1951/1951379.png", "toutes saisons"),
("Oeuf d'oie", "Oeuf", "https://cdn-icons-png.flaticon.com/128/1951/1951379.png", "toutes saisons"),
("Oeuf de poisson", "Oeuf", "https://cdn-icons-png.flaticon.com/128/1841/1841343.png", "hiver"),

-- Legumes


("Asperge", "Légume", "https://cdn-icons-png.flaticon.com/128/2353/2353687.png", "printemps"),
("Épinard", "Légume", "https://cdn-icons-png.flaticon.com/128/3523/3523477.png", "printemps"),
("Petit pois", "Légume", "https://cdn-icons-png.flaticon.com/128/4311/4311558.png", "printemps"),
("Radis", "Légume", "https://cdn-icons-png.flaticon.com/128/9234/9234572.png", "printemps"),
("Navet", "Légume", "https://cdn-icons-png.flaticon.com/128/4056/4056819.png", "printemps"),

("Tomate", "Légume", "https://cdn-icons-png.flaticon.com/128/4264/4264717.png", "été"),
("Courgette", "Légume", "https://cdn-icons-png.flaticon.com/128/6127/6127453.png", "été"),
("Aubergine", "Légume", "https://cdn-icons-png.flaticon.com/128/2518/2518009.png", "été"),
("Poivron", "Légume", "https://cdn-icons-png.flaticon.com/128/883/883559.png", "été"),
("Haricots verts", "Légume", "https://cdn-icons-png.flaticon.com/128/2149/2149876.png", "été"),
("Concombre", "Légume", "https://cdn-icons-png.flaticon.com/128/7315/7315557.png", "été"),


("Potiron", "Légume", "https://cdn-icons-png.flaticon.com/128/2329/2329809.png", "automne"),
("Betterave", "Légume", "https://cdn-icons-png.flaticon.com/128/2909/2909846.png", "automne"),
("Champignon", "Légume", "https://cdn-icons-png.flaticon.com/128/1790/1790412.png", "automne"),
("Fenouil", "Légume", "https://cdn-icons-png.flaticon.com/128/6490/6490162.png", "automne"),
("Chou rouge", "Légume", "https://cdn-icons-png.flaticon.com/128/5346/5346282.png", "automne"),


("Poireau", "Légume", "https://cdn-icons-png.flaticon.com/128/7696/7696656.png", "hiver"),
("Carotte", "Légume", "https://cdn-icons-png.flaticon.com/128/8511/8511087.png", "hiver"),
("Chou frisé", "Légume", "https://cdn-icons-png.flaticon.com/128/765/765618.png", "hiver"),
("Céleri", "Légume", "https://cdn-icons-png.flaticon.com/128/1581/1581804.png", "hiver"),
("Brocoli", "Légume", "https://cdn-icons-png.flaticon.com/128/680/680956.png", "hiver"),
("Oignon", "Légume", "https://cdn-icons-png.flaticon.com/128/680/680940.png", "hiver"),


("Pomme de terre", "Légume", "https://cdn-icons-png.flaticon.com/128/1073/1073343.png", "toutes saisons"),
("Salade verte", "Légume", "https://cdn-icons-png.flaticon.com/128/5346/5346444.png", "toutes saisons"),
("Ail", "Légume", "https://cdn-icons-png.flaticon.com/128/5137/5137115.png", "toutes saisons"),
("Persil", "Légume", "https://cdn-icons-png.flaticon.com/128/680/680947.png", "toutes saisons"),
("Basilic", "Légume", "https://cdn-icons-png.flaticon.com/128/12242/12242749.png", "toutes saisons"),

-- Fruits
("Pomme", "Fruit", "https://cdn-icons-png.flaticon.com/128/17898/17898390.png", "automne"),
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
("Mytille", "Fruit", "https://cdn-icons-png.flaticon.com/128/2548/2548584.png", "été"),
("Cassis", "Fruit", "https://cdn-icons-png.flaticon.com/128/3651/3651857.png", "été"),
("Groseille", "Fruit", "https://cdn-icons-png.flaticon.com/128/3830/3830691.png", "été"),
("Clémentine", "Fruit", "https://cdn-icons-png.flaticon.com/128/1704/1704398.png", "hiver"),
("Pamplemousse", "Fruit", "https://cdn-icons-png.flaticon.com/128/2659/2659549.png", "hiver"),
("Bergamote", "Fruit", "https://cdn-icons-png.flaticon.com/128/14923/14923315.png", "hiver"),
("Kumquat", "Fruit", "https://cdn-icons-png.flaticon.com/128/1135/1135517.png", "hiver"),
("Pêche", "Fruit", "https://cdn-icons-png.flaticon.com/128/1791/1791377.png", "été"),
("Nectarine", "Fruit", "https://cdn-icons-png.flaticon.com/128/1791/1791377.png", "été"),
("Prune", "Fruit", "https://cdn-icons-png.flaticon.com/128/4057/4057267.png", "été"),
("Cerise", "Fruit", "https://cdn-icons-png.flaticon.com/128/2347/2347091.png", "été"),
("Poire", "Fruit", "https://cdn-icons-png.flaticon.com/128/680/680972.png", "automne"),
("Raisin", "Fruit", "https://cdn-icons-png.flaticon.com/128/8043/8043436.png", "automne"),
("Coing", "Fruit", "https://cdn-icons-png.flaticon.com/128/8043/8043427.png", "automne"),
("Figue", "Fruit", "https://cdn-icons-png.flaticon.com/128/6192/6192458.png", "automne"),

-- Alcools
("Vin rouge", "Alcool", "https://cdn-icons-png.flaticon.com/128/539/539596.png", "toutes saisons"),
("Vin blanc", "Alcool", "https://cdn-icons-png.flaticon.com/128/539/539596.png", "toutes saisons"),
("Bière", "Alcool", "https://cdn-icons-png.flaticon.com/128/2072/2072651.png", "toutes saisons"),
("Champagne", "Alcool", "https://cdn-icons-png.flaticon.com/128/282/282735.png", "toutes saisons"),
("Rhum", "Alcool", "https://cdn-icons-png.flaticon.com/128/850/850233.png", "toutes saisons"),
("Vodka", "Alcool", "https://cdn-icons-png.flaticon.com/128/850/850233.png", "toutes saisons"),
("Gin", "Alcool", "https://cdn-icons-png.flaticon.com/128/850/850233.png", "toutes saisons"),
("Tequila", "Alcool", "https://cdn-icons-png.flaticon.com/128/850/850233.png", "toutes saisons"),
("Cognac", "Alcool", "https://cdn-icons-png.flaticon.com/128/850/850233.png", "toutes saisons"),
("Porto", "Alcool", "https://cdn-icons-png.flaticon.com/128/850/850233.png", "toutes saisons"),
("Vermouth", "Alcool", "https://cdn-icons-png.flaticon.com/128/850/850233.png", "toutes saisons"),
("Absinthe", "Alcool", "https://cdn-icons-png.flaticon.com/128/850/850233.png", "toutes saisons"),
("Liqueur de café", "Alcool", "/https://cdn-icons-png.flaticon.com/128/850/850233.png", "toutes saisons"),
("Limoncello", "Alcool", "https://cdn-icons-png.flaticon.com/128/850/850233.png", "toutes saisons"),
("Cidre brut", "Alcool", "https://cdn-icons-png.flaticon.com/128/850/850233.png", "automne"),
("Cidre doux", "Alcool", "https://cdn-icons-png.flaticon.com/128/850/850233.png", "automne");


-- Table recette
INSERT INTO recette (titre, description, date_publication, image_url, saison, type_id, difficulte_id, temps_id, utilisateur_id)
VALUES
("Soupe d'hiver", "Une soupe chaude pour l'hiver.", "2023-01-15", "https://media.istockphoto.com/id/1038979532/fr/photo/soupe-tomate-aux-lentilles-rouges-au-curry-et-noix-de-coco-d%C3%A9licieuse-nourriture-v%C3%A9g%C3%A9tarienne.jpg?s=612x612&w=0&k=20&c=P9aAkXmxQ4h4bfhFWuTtJfw8JefqxbPZ2VqWo-W0vtw=", "hiver", 2, 2, 3, 1),
("Buddha Bowl", "Pour une alimentation équilibrée avec du tofu, du quinoa, des légumes", "2025-01-23", "https://media.istockphoto.com/id/2150471415/fr/photo/buddha-bowl-v%C3%A9g%C3%A9talien-pour-une-alimentation-%C3%A9quilibr%C3%A9e-avec-du-tofu-du-quinoa-des-l%C3%A9gumes-et.jpg?s=612x612&w=0&k=20&c=a2RkFZlMwaLKucEgj7aEwZW6uGCEuAUWX8tdB7Mpj88=", "été", 1, 1, 1, 2),
("Poulet braisé", "Poulet rôti avec pommes de terre et oignons", "2025-01-23", "https://media.istockphoto.com/id/1360064510/fr/photo/poulet-r%C3%B4ti-avec-pommes-de-terre-et-oignons.jpg?s=612x612&w=0&k=20&c=iZlsp-xAaw8h3SKU_MJ7pOPWPB_u4r9UgTmSkScDf20=", "été", 1, 1, 1, 2),
("Gâteau de Noël", "Gâteau de Noël italien traditionnel Panettone", "2022-01-23", "https://media.istockphoto.com/id/1805465945/fr/photo/g%C3%A2teau-de-no%C3%ABl-italien-traditionnel-panettone-avec-d%C3%A9corations-festives.jpg?s=612x612&w=0&k=20&c=mIDta2Rcx_rEGkgRH7VtZD6MyVtjvF8IggarLrtfMb4=", "hiver", 3, 2, 2, 2),
("Fondue au fromage", "Fondue au fromage avec vin, pain et raisin", "2022-01-23", "https://media.istockphoto.com/id/1154139425/fr/photo/fondue-au-fromage-avec-vin-de-pain-et-raisin.jpg?s=612x612&w=0&k=20&c=PNR9MytdVe3l3zbBCHPWm10U8h-2Vk5sh0fqgLNaDTU=", "hiver", 2, 1, 2, 2),
("Ragoût", "Ragoût fait maison avec de la viande et des légumes", "2022-01-23", "https://media.istockphoto.com/id/614712998/fr/photo/rago%C3%BBt-fait-maison-avec-de-la-viande-et-des-l%C3%A9gumes.jpg?s=612x612&w=0&k=20&c=w3K22nteo-a_8d56FsCjUj89dpCBj0jdSDL3-LCdOA0=", "hiver", 2, 2, 4, 2),
("Poulet Riggies", "Pâtes cuites au four avec du boeuf haché et du fromage", "2025-01-23", "https://media.istockphoto.com/id/1098150768/fr/photo/poulet-riggies.jpg?s=612x612&w=0&k=20&c=xRyWBscDAlDA_ke4iZQqrOi_4KY63vVSD_Q9Vb-pnhg=", "hiver", 2, 1, 3, 2),
("Gratin", "Gratin de pommes de terre au fromage maison", "2025-01-23", "https://media.istockphoto.com/id/1442601396/fr/photo/gratin-de-pommes-de-terre-au-fromage-maison.jpg?s=612x612&w=0&k=20&c=yJp1IfY2kuj7ShcCkzOWWABT0YMS-6C1CyuBFptCSSQ=", "hiver", 2, 1, 2, 2),
("Salade estivale", "Une salade fraîche pour l'été.", "2023-06-15", "path/to/salade.jpg", "été", 1, 1, 1, 2);

-- Table ingredient_recette
-- Correction de la table ingredient_recette pour avoir des ingrédients variés

-- Suppression des anciennes associations incorrectes
DELETE FROM ingredient_recette;

-- 🌿 Soupe d'hiver (uniquement légumes)
INSERT INTO ingredient_recette (recette_id, ingredient_id, quantite, unite)
VALUES
(1, 81, 300, "g"), -- Carotte
(1, 86, 200, "g"), -- Pomme de terre
(1, 85, 1, "unité"), -- Oignon
(1, 83, 1, "L");  -- Bouillon de légumes (remplacé par céleri)

-- 🥗 Buddha Bowl (quinoa, tofu, légumes)
INSERT INTO ingredient_recette (recette_id, ingredient_id, quantite, unite)
VALUES
(2, 64, 150, "g"), -- Asperge
(2, 65, 200, "g"), -- Épinard
(2, 69, 100, "g"), -- Tomate
(2, 72, 100, "g"); -- Poivron

-- 🍗 Poulet braisé (poulet + légumes)
INSERT INTO ingredient_recette (recette_id, ingredient_id, quantite, unite)
VALUES
(3, 2, 500, "g"), -- Filet de poulet
(3, 86, 300, "g"), -- Pomme de terre
(3, 85, 1, "unité"), -- Oignon
(3, 88, 1, "gousse"); -- Ail

-- 🍰 Gâteau de Noël (aucune viande)
INSERT INTO ingredient_recette (recette_id, ingredient_id, quantite, unite)
VALUES
(4, 58, 250, "g"), -- Beurre
(4, 59, 4, "unités"), -- Oeuf de poule
(4, 60, 150, "g"), -- Sucre
(4, 61, 100, "g"); -- Farine

-- 🧀 Fondue au fromage (fromage + vin)
INSERT INTO ingredient_recette (recette_id, ingredient_id, quantite, unite)
VALUES
(5, 49, 200, "g"), -- Comté
(5, 52, 200, "g"), -- Gruyère
(5, 121, 100, "ml"), -- Vin blanc
(5, 88, 1, "gousse"); -- Ail

-- 🍲 Ragoût (ajoutons des légumes)
INSERT INTO ingredient_recette (recette_id, ingredient_id, quantite, unite)
VALUES
(6, 16, 500, "g"), -- Bœuf haché
(6, 85, 1, "unité"), -- Oignon
(6, 81, 200, "g"), -- Carotte
(6, 83, 1, "L"); -- Bouillon de légumes (remplacé par céleri)

-- 🍝 Poulet Riggies (pâtes + poulet)
INSERT INTO ingredient_recette (recette_id, ingredient_id, quantite, unite)
VALUES
(7, 66, 250, "g"), -- Pâtes
(7, 2, 300, "g"), -- Filet de poulet
(7, 69, 200, "ml"), -- Sauce tomate
(7, 44, 100, "g"); -- Parmesan

-- 🥘 Gratin (pommes de terre + fromage)
INSERT INTO ingredient_recette (recette_id, ingredient_id, quantite, unite)
VALUES
(8, 86, 400, "g"), -- Pomme de terre
(8, 39, 200, "ml"), -- Crème fraîche
(8, 40, 150, "g"); -- Fromage râpé

-- 🥗 Salade estivale (salade et légumes)
INSERT INTO ingredient_recette (recette_id, ingredient_id, quantite, unite)
VALUES
(9, 87, 200, "g"), -- Salade verte
(9, 69, 150, "g"), -- Tomate
(9, 74, 100, "g"), -- Concombre
(9, 90, 50, "ml"); -- Basilic pour l’assaisonnement


-- Table etape_preparation
INSERT INTO etape_preparation (recette_id, ordre, description)
VALUES


(1, 1, "Épluchez et coupez les carottes et les pommes de terre."),
(1, 2, "Émincez l'oignon et faites-le revenir dans une casserole avec un peu d'huile."),
(1, 3, "Ajoutez les légumes et le bouillon de légumes."),
(1, 4, "Laissez mijoter 30 minutes puis mixez."),
(1, 5, "Servez chaud avec des croûtons."),


(2, 1, "Faites cuire le quinoa selon les instructions du paquet."),
(2, 2, "Découpez le tofu en dés et faites-le revenir dans une poêle avec un peu d'huile."),
(2, 3, "Coupez les tomates et les poivrons en morceaux."),
(2, 4, "Assemblez tous les ingrédients dans un bol et ajoutez une sauce."),


(3, 1, "Découpez les pommes de terre en morceaux."),
(3, 2, "Émincez l'oignon et faites-le revenir dans une cocotte."),
(3, 3, "Ajoutez les morceaux de poulet et faites-les dorer."),
(3, 4, "Ajoutez les pommes de terre et l'ail."),
(3, 5, "Laissez mijoter à feu doux pendant 45 minutes."),

(4, 1, "Mélangez la farine, les œufs, le sucre et le beurre fondu."),
(4, 2, "Pétrissez la pâte et laissez-la reposer pendant 1 heure."),
(4, 3, "Versez la pâte dans un moule beurré."),
(4, 4, "Enfournez à 180°C pendant 40 minutes."),
(4, 5, "Laissez refroidir avant de démouler."),


(5, 1, "Frottez le caquelon avec une gousse d'ail."),
(5, 2, "Faites chauffer le vin blanc."),
(5, 3, "Ajoutez progressivement les fromages râpés en remuant constamment."),
(5, 4, "Lorsque le mélange est homogène, servez avec des morceaux de pain."),


(6, 1, "Coupez la viande en morceaux."),
(6, 2, "Faites revenir les morceaux de viande dans une cocotte."),
(6, 3, "Ajoutez les oignons, les carottes et le bouillon."),
(6, 4, "Laissez mijoter à feu doux pendant 2 heures."),


(7, 1, "Faites cuire les pâtes selon les instructions du paquet."),
(7, 2, "Faites revenir le poulet coupé en morceaux."),
(7, 3, "Ajoutez la sauce tomate et laissez mijoter."),
(7, 4, "Ajoutez le parmesan et mélangez avant de servir."),


(8, 1, "Épluchez et coupez les pommes de terre en rondelles."),
(8, 2, "Disposez-les dans un plat à gratin."),
(8, 3, "Ajoutez la crème et parsemez de fromage râpé."),
(8, 4, "Enfournez à 200°C pendant 40 minutes."),


(9, 1, "Lavez et essorez la salade."),
(9, 2, "Coupez les tomates en quartiers."),
(9, 3, "Préparez une vinaigrette légère."),
(9, 4, "Mélangez tous les ingrédients et servez frais.");


-- Table avis
INSERT INTO avis (recette_id, utilisateur_id, note, commentaire, date_avis)
VALUES
(1, 2, 5, "Excellente soupe, très réconfortante.", "2025-01-16"),
(2, 1, 4, "Salade fraîche et délicieuse.", "2025-06-16");

