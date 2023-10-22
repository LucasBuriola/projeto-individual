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
	AlturaCM VARCHAR(200)
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
	peito int,
	biceps int,
	triceps int,
	costas int,
	antebraço int,
	perna int,
	fkusuario int, 
	constraint user foreign key (fkusuario)
	references usuario(id)
);

