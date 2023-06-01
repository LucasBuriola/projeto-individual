create database strengthofmotivation;
use strengthofmotivation;

CREATE TABLE usuario (
	id INT PRIMARY KEY auto_increment,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);


CREATE TABLE imc (
	idImc int PRIMARY KEY auto_increment,
	PesoKG VARCHAR(50),
	AlturaCM VARCHAR(200),
);

CREATE TABLE Gasto_de_calorias (
	idGC int PRIMARY KEY auto_increment,
	genero VARCHAR(45),
	PesoKG VARCHAR(50)

);

CREATE TABLE Treino (
	idT int PRIMARY KEY auto_increment,
	Treino VARCHAR(45)
); 

CREATE TABLE musculo (
	idM int PRIMARY KEY auto_increment,
	peito VARCHAR(45),
	biceps VARCHAR(45),
	triceps VARCHAR(45),
	costas VARCHAR(45),
	antebraço VARCHAR(45),
	perna VARCHAR(45),
	ombro VARCHAR(45)
);


select * from usuario; 	