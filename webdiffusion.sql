#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: messages
#------------------------------------------------------------

CREATE TABLE messages(
        id              Int  Auto_increment  NOT NULL ,
        nr_webdiffusion Int NOT NULL ,
        pseudo          Varchar (30) NOT NULL ,
        message         Varchar (255) NOT NULL ,
        created_at      TimeStamp NOT NULL
	,CONSTRAINT messages_PK PRIMARY KEY (id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: compteurs
#------------------------------------------------------------

CREATE TABLE compteurs(
        compteur        Int  Auto_increment  NOT NULL ,
        nr_webdiffusion Int NOT NULL
	,CONSTRAINT compteurs_PK PRIMARY KEY (compteur)
)ENGINE=InnoDB;

