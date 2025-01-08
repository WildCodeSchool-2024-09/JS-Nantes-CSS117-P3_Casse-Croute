-- Création de la base de données
DROP DATABASE IF EXISTS cassecroute_db;
CREATE DATABASE cassecroute_db;
USE cassecroute_db;


-- Table Utilisateur
CREATE TABLE Utilisateur (
    ID_Utilisateur INT PRIMARY KEY AUTO_INCREMENT,
    Pseudo VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL UNIQUE,
    MotDePasse VARCHAR(255) NOT NULL,
    DateInscription DATE NOT NULL,
    PhotoProfil VARCHAR(255),
    isAdmin BOOLEAN NOT NULL DEFAULT FALSE
);


-- Table TypeRecette
CREATE TABLE TypeRecette (
    ID_Type INT PRIMARY KEY AUTO_INCREMENT,
    NomType VARCHAR(50) NOT NULL,
    ImageType VARCHAR(255) NOT NULL
);


-- Table Difficulte
CREATE TABLE Difficulte (
    ID_Difficulte INT PRIMARY KEY AUTO_INCREMENT,
    NomDifficulte VARCHAR(50) NOT NULL,
    ImageDifficulte VARCHAR(255) NOT NULL
);


-- Table TempsPreparation
CREATE TABLE TempsPreparation (
    ID_Temps INT PRIMARY KEY AUTO_INCREMENT,
    Heure INT NOT NULL CHECK (Heure BETWEEN 0 AND 72),
    Minute INT NOT NULL CHECK (Minute BETWEEN 0 AND 59),
    ImageTemps VARCHAR(255) NOT NULL
);


-- Table Ingredient
CREATE TABLE Ingredient (
    ID_Ingredient INT PRIMARY KEY AUTO_INCREMENT,
    NomIngredient VARCHAR(50) NOT NULL,
    CategorieIngredient VARCHAR(50),
    Saisonnalite VARCHAR(255),
    CategorieIcone VARCHAR(255)
);


-- Table Recette
CREATE TABLE Recette (
    ID_Recette INT PRIMARY KEY AUTO_INCREMENT,
    Titre VARCHAR(100) NOT NULL,
    Description TEXT,
    DatePublication DATE NOT NULL,
    ID_Type INT NOT NULL,
    ID_Difficulte INT NOT NULL,
    ID_Temps INT NOT NULL,
    ID_Utilisateur INT NOT NULL,
    FOREIGN KEY (ID_Type) REFERENCES TypeRecette(ID_Type),
    FOREIGN KEY (ID_Difficulte) REFERENCES Difficulte(ID_Difficulte),
    FOREIGN KEY (ID_Temps) REFERENCES TempsPreparation(ID_Temps),
    FOREIGN KEY (ID_Utilisateur) REFERENCES Utilisateur(ID_Utilisateur)
);


-- Table CompositionRecette
CREATE TABLE CompositionRecette (
    ID_Recette INT NOT NULL,
    ID_Ingredient INT NOT NULL,
    Quantite FLOAT NOT NULL,
    Unite VARCHAR(50),
    PRIMARY KEY (ID_Recette, ID_Ingredient),
    FOREIGN KEY (ID_Recette) REFERENCES Recette(ID_Recette),
    FOREIGN KEY (ID_Ingredient) REFERENCES Ingredient(ID_Ingredient)
);


-- Insertion des données initiales
-- Utilisateurs
INSERT INTO Utilisateur (Pseudo, Email, MotDePasse, DateInscription, isAdmin) VALUES
('admin', 'admin@example.com', 'adminpasswordhash', CURDATE(), TRUE),
('user1', 'user1@example.com', 'user1passwordhash', CURDATE(), FALSE),
('user2', 'user2@example.com', 'user2passwordhash', CURDATE(), FALSE);


-- Types de recettes
INSERT INTO TypeRecette (NomType, ImageType) VALUES
('Entrée', '/images/types/entree.jpg'),
('Plat', '/images/types/plat.jpg'),
('Dessert', '/images/types/dessert.jpg'),
('Boisson', '/images/types/boisson.jpg');


-- Niveaux de difficulté
INSERT INTO Difficulte (NomDifficulte, ImageDifficulte) VALUES
('Facile', '/images/difficulte/niveau.jpg'),
('Moyen', '/images/difficulte/niveau.jpg'),
('Difficile', '/images/difficulte/niveau.jpg');


-- Temps de préparation
INSERT INTO TempsPreparation (Heure, Minute, ImageTemps) VALUES
(0, 30, '/images/temps/icone.jpg'),
(1, 0, '/images/temps/icone.jpg'),
(1, 30, '/images/temps/icone.jpg'),
(2, 0, '/images/temps/icone.jpg');


-- Ingrédients
INSERT INTO Ingredient (NomIngredient, CategorieIngredient, CategorieIcone, Saisonnalite) VALUES
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

