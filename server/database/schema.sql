-- Création de la base de données
DROP DATABASE IF EXISTS cassecroute_db;
CREATE DATABASE cassecroute_db;
USE cassecroute_db;

-- Table utilisateur
CREATE TABLE utilisateur (
    id INT PRIMARY KEY AUTO_INCREMENT,
    pseudo VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    mot_de_passe VARCHAR(255) NOT NULL,
    date_inscription DATE NOT NULL,
    photo_profil VARCHAR(255),
    est_admin BOOLEAN NOT NULL DEFAULT FALSE
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
    saisonnalite VARCHAR(255),
    icone_categorie VARCHAR(255)
);

-- Table recette
CREATE TABLE recette (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(100) NOT NULL,
    description TEXT,
    date_publication DATE NOT NULL,
    type_id INT NOT NULL,
    difficulte_id INT NOT NULL,
    temps_id INT NOT NULL,
    utilisateur_id INT NOT NULL,
    FOREIGN KEY (type_id) REFERENCES type_recette(id),
    FOREIGN KEY (difficulte_id) REFERENCES difficulte(id),
    FOREIGN KEY (temps_id) REFERENCES temps_preparation(id),
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id)
);

-- Table composition_recette
CREATE TABLE composition_recette (
    recette_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    quantite FLOAT NOT NULL,
    unite VARCHAR(50),
    PRIMARY KEY (recette_id, ingredient_id),
    FOREIGN KEY (recette_id) REFERENCES recette(id),
    FOREIGN KEY (ingredient_id) REFERENCES ingredient(id)
);

-- Insertion des données initiales
-- Utilisateurs
INSERT INTO utilisateur (pseudo, email, mot_de_passe, date_inscription, est_admin) VALUES
('admin', 'admin@example.com', 'adminpasswordhash', CURDATE(), TRUE),
('user1', 'user1@example.com', 'user1passwordhash', CURDATE(), FALSE),
('user2', 'user2@example.com', 'user2passwordhash', CURDATE(), FALSE);

-- Types de recettes
INSERT INTO type_recette (nom, image) VALUES
('Entrée', '/images/types/entree.jpg'),
('Plat', '/images/types/plat.jpg'),
('Dessert', '/images/types/dessert.jpg'),
('Boisson', '/images/types/boisson.jpg');

-- Niveaux de difficulté
INSERT INTO difficulte (nom, image) VALUES
('Facile', '/images/difficulte/niveau.jpg'),
('Moyen', '/images/difficulte/niveau.jpg'),
('Difficile', '/images/difficulte/niveau.jpg');

-- Temps de préparation
INSERT INTO temps_preparation (heure, minute, image) VALUES
(0, 30, '/images/temps/icone.jpg'),
(1, 0, '/images/temps/icone.jpg'),
(1, 30, '/images/temps/icone.jpg'),
(2, 0, '/images/temps/icone.jpg');

-- Ingrédients
INSERT INTO ingredient (nom, categorie, icone_categorie, saisonnalite) VALUES
-- viandes
("Steak", "Viande", "/images/categories/viande.jpg", "Printemps,Été,Automne,Hiver"),
("Filet de poulet", "Viande", "/images/categories/viande.jpg", "Printemps,Été,Automne,Hiver"),
("Escalope de dinde", "Viande", "/images/categories/viande.jpg", "Printemps,Été,Automne,Hiver"),
("Côte de porc", "Viande", "/images/categories/viande.jpg", "Printemps,Été,Automne,Hiver"),
("Lardons", "Viande", "/images/categories/viande.jpg", "Printemps,Été,Automne,Hiver"),
("Agneau", "Viande", "/images/categories/viande.jpg", "Printemps,Automne"),
("Canard", "Viande", "/images/categories/viande.jpg", "Automne,Hiver"),
("Jambon cru", "Viande", "/images/categories/viande.jpg", "Printemps,Été,Automne,Hiver"),
("Pintade", "Viande", "/images/categories/viande.jpg", "Automne,Hiver"),
("Pigeon", "Viande", "/images/categories/viande.jpg", "Automne,Hiver"),
("Poulet fermier", "Viande", "/images/categories/viande.jpg", "Printemps,Été,Automne,Hiver"),
("Veau", "Viande", "/images/categories/viande.jpg", "Printemps"),
("Sanglier", "Viande", "/images/categories/viande.jpg", "Automne,Hiver"),
("Chevreuil", "Viande", "/images/categories/viande.jpg", "Automne,Hiver"),
("Lapin", "Viande", "/images/categories/viande.jpg", "Printemps,Automne,Hiver"),
("Bœuf haché", "Viande", "/images/categories/viande.jpg", "Printemps,Été,Automne,Hiver"),
-- poissons
("Saumon", "Poisson", "/images/categories/poisson.jpg", "Hiver,Printemps"),
("Cabillaud", "Poisson", "/images/categories/poisson.jpg", "Hiver"),
("Thon", "Poisson", "/images/categories/poisson.jpg", "Été"),
("Crevettes", "Fruits de mer", "/images/categories/poisson.jpg", "Printemps,Été,Automne,Hiver"),
("Moules", "Fruits de mer", "/images/categories/poisson.jpg", "Automne,Hiver"),
("Saint-Jacques", "Fruits de mer", "/images/categories/poisson.jpg", "Automne,Hiver"),
("Sardine", "Poisson", "/images/categories/poisson.jpg", "Été"),
("Haddock", "Poisson", "/images/categories/poisson.jpg", "Hiver"),
("Merlu", "Poisson", "/images/categories/poisson.jpg", "Printemps"),
("Lieu noir", "Poisson", "/images/categories/poisson.jpg", "Printemps,Été"),
("Lieu jaune", "Poisson", "/images/categories/poisson.jpg", "Printemps,Été"),
("Sole", "Poisson", "/images/categories/poisson.jpg", "Printemps"),
("Turbot", "Poisson", "/images/categories/poisson.jpg", "Automne,Hiver"),
("Colin", "Poisson", "/images/categories/poisson.jpg", "Hiver"),
("Lingue", "Poisson", "/images/categories/poisson.jpg", "Hiver"),
("Maquereau", "Poisson", "/images/categories/poisson.jpg", "Été"),
("Truite", "Poisson", "/images/categories/poisson.jpg", "Printemps"),
("Hareng", "Poisson", "/images/categories/poisson.jpg", "Hiver"),
("Sandre", "Poisson", "/images/categories/poisson.jpg", "Printemps,Été"),
("Perche", "Poisson", "/images/categories/poisson.jpg", "Printemps,Été"),
("Brochet", "Poisson", "/images/categories/poisson.jpg", "Printemps,Été"),
-- produits laitiers
("Beurre", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "Printemps,Été,Automne,Hiver"),
("Crème fraîche", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "Printemps,Été,Automne,Hiver"),
("Fromage râpé", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "Printemps,Été,Automne,Hiver"),
("Lait", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "Printemps,Été,Automne,Hiver"),
("Mozzarella", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "Été"),
("Yaourt nature", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "Printemps,Été,Automne,Hiver"),
("Parmesan", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "Printemps,Été,Automne,Hiver"),
("Brie", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "Printemps,Automne,Hiver"),
("Camembert", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "Printemps,Automne,Hiver"),
("Roquefort", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "Automne,Hiver"),
("Chèvre", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "Printemps,Été"),
("Comté", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "Printemps,Été,Automne"),
("Reblochon", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "Hiver"),
("Bleu dAuvergne", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "Automne,Hiver"),
("Gruyère", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "Printemps,Été,Automne,Hiver"),
("Ricotta", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "Été"),
("Feta", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "Été"),
("Mascarpone", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "Printemps,Été"),
("Fromage blanc", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "Printemps,Été,Automne,Hiver"),
("Petit suisse", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "Printemps,Été,Automne,Hiver"),
("Beurre demi-sel", "Produits laitiers", "/images/categories/produits_laitiers.jpg", "Printemps,Été,Automne,Hiver"),
-- oeufs
("Oeuf de poule", "Oeuf", "/images/categories/oeuf.jpg", "Printemps,Été,Automne,Hiver"),
("Oeuf de caille", "Oeuf", "/images/categories/oeuf.jpg", "Printemps,Été,Automne,Hiver"),
("Oeuf de canard", "Oeuf", "/images/categories/oeuf.jpg", "Printemps,Été,Automne,Hiver"),
("Oeuf d'oie", "Oeuf", "/images/categories/oeuf.jpg", "Printemps,Été,Automne,Hiver"),
("Oeuf de poisson", "Oeuf", "/images/categories/oeuf.jpg", "Printemps,Hiver"),
-- fruits
("Pomme", "Fruit", "/images/categories/fruit.jpg", "Automne,Hiver"),
("Banane", "Fruit", "/images/categories/fruit.jpg", "Printemps,Été,Automne,Hiver"),
("Orange", "Fruit", "/images/categories/fruit.jpg", "Hiver"),
("Citron", "Fruit", "/images/categories/fruit.jpg", "Hiver,Printemps"),
("Fraise", "Fruit", "/images/categories/fruit.jpg", "Printemps,Été"),
("Framboise", "Fruit", "/images/categories/fruit.jpg", "Été"),
("Ananas", "Fruit", "/images/categories/fruit.jpg", "Printemps,Été,Automne,Hiver"),
("Mangue", "Fruit", "/images/categories/fruit.jpg", "Été,Hiver"),
("Papaye", "Fruit", "/images/categories/fruit.jpg", "Été,Hiver"),
("Fruit de la passion", "Fruit", "/images/categories/fruit.jpg", "Été,Hiver"),
("Kiwi", "Fruit", "/images/categories/fruit.jpg", "Hiver,Printemps"),
("Litchi", "Fruit", "/images/categories/fruit.jpg", "Hiver"),
("Goyave", "Fruit", "/images/categories/fruit.jpg", "Hiver"),
("Mytille", "Fruit", "/images/categories/fruit.jpg", "Été"),
("Cassis", "Fruit", "/images/categories/fruit.jpg", "Été"),
("Groseille", "Fruit", "/images/categories/fruit.jpg", "Été"),
("Clémentine", "Fruit", "/images/categories/fruit.jpg", "Hiver"),
("Pamplemousse", "Fruit", "/images/categories/fruit.jpg", "Hiver"),
("Bergamote", "Fruit", "/images/categories/fruit.jpg", "Hiver"),
("Kumquat", "Fruit", "/images/categories/fruit.jpg", "Hiver"),
("Pêche", "Fruit", "/images/categories/fruit.jpg", "Été"),
("Nectarine", "Fruit", "/images/categories/fruit.jpg", "Été"),
("Prune", "Fruit", "/images/categories/fruit.jpg", "Été"),
("Cerise", "Fruit", "/images/categories/fruit.jpg", "Été"),
("Poire", "Fruit", "/images/categories/fruit.jpg", "Automne"),
("Raisin", "Fruit", "/images/categories/fruit.jpg", "Automne"),
("Coing", "Fruit", "/images/categories/fruit.jpg", "Automne"),
("Figue", "Fruit", "/images/categories/fruit.jpg", "Automne"),
-- alcools
("Vin rouge", "Alcool", "/images/categories/alcool.jpg", "Printemps,Été,Automne,Hiver"),
("Vin blanc", "Alcool", "/images/categories/alcool.jpg", "Printemps,Été,Automne,Hiver"),
("Bière", "Alcool", "/images/categories/alcool.jpg", "Printemps,Été,Automne,Hiver"),
("Champagne", "Alcool", "/images/categories/alcool.jpg", "Printemps,Été,Automne,Hiver"),
("Rhum", "Alcool", "/images/categories/alcool.jpg", "Printemps,Été,Automne,Hiver"),
("Vodka", "Alcool", "/images/categories/alcool.jpg", "Printemps,Été,Automne,Hiver"),
("Gin", "Alcool", "/images/categories/alcool.jpg", "Printemps,Été,Automne,Hiver"),
("Tequila", "Alcool", "/images/categories/alcool.jpg", "Printemps,Été,Automne,Hiver"),
("Cognac", "Alcool", "/images/categories/alcool.jpg", "Printemps,Été,Automne,Hiver"),
("Porto", "Alcool", "/images/categories/alcool.jpg", "Printemps,Été,Automne,Hiver"),
("Vermouth", "Alcool", "/images/categories/alcool.jpg", "Printemps,Été,Automne,Hiver"),
("Absinthe", "Alcool", "/images/categories/alcool.jpg", "Printemps,Été,Automne,Hiver"),
("Liqueur de café", "Alcool", "/images/categories/alcool.jpg", "Printemps,Été,Automne,Hiver"),
("Limoncello", "Alcool", "/images/categories/alcool.jpg", "Printemps,Été,Automne,Hiver"),
("Cidre brut", "Alcool", "/images/categories/alcool.jpg", "Automne,Hiver"),
("Cidre doux", "Alcool", "/images/categories/alcool.jpg", "Automne,Hiver");

