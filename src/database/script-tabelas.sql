-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database cultures;
use cultures;

create table usuario (
	id int primary key auto_increment, 
    nome varchar (100), 
    email varchar(50),
    senha varchar(50)
);

create table perfil (
	id int primary key auto_increment, 
    bio varchar (200),
    fk_usuario int unique, 
    constraint fkUsuario foreign key (fk_usuario) references usuario(id)
);

create table post (
	id int primary key auto_increment,
    titulo varchar(100),
    conteudo varchar(200), 
    dataPost datetime default current_timestamp,
    fk_usuario int,
    constraint fkUsuario_post foreign key (fk_usuario) references usuario(id)
);

create table foto_post (
	id int primary key auto_increment,
    caminho varchar (255), 
    fk_post int, 
   constraint fkPosts foreign key (fk_post) references post(id)
);

create table comentarios(
	id int primary key auto_increment, 
    texto varchar(255),
    dataComentario datetime default current_timestamp, 
    fk_usuario int, 
    fk_post int,
    fk_comentarioPai int,
    constraint fk_usuario_comentario foreign key (fk_usuario) references usuario(id),
    constraint fk_post_comentario foreign key (fk_post) references post(id),
    constraint comentario_pai foreign key (fk_comentarioPai) references comentarios(id)
);

CREATE TABLE seguidor (
idSeguidor int primary key auto_increment,
fkUsuario int,
fkSeguindo int,
foreign key (fkUsuario) references usuario(id),
foreign key (fkSeguindo) references usuario(id)
);
create table evento (
idEvento int,
nomeEvento varchar(100),
dataEvento datetime,
qtdPessoas int,
fkUsuario int,
primary key (idEvento, fkUsuario),
constraint fk_usuario_evento foreign key (fkUsuario) references usuario(id)
);

INSERT INTO usuario (nome, email, senha) VALUES
('João', 'joao@email.com', '123'),
('Maria', 'maria@email.com', '123'),
('Carlos', 'carlos@email.com', '123'),
('Ana', 'ana@email.com', '123');

truncate table  perfil;
truncate table usuario;

INSERT INTO perfil (bio, fk_usuario) VALUES
('Fav culture', 1),
('Reação arte e cultura', 2),
('Instituto Coragem', 3),
('The Cultures', 4);

INSERT INTO post (conteudo, fk_usuario) VALUES
('Meu primeiro post!', 1),
('Hoje estudei banco de dados.', 2),
('Aprendendo Node.js.', 1),
('Projeto novo em andamento.', 3);

INSERT INTO foto_post (caminho, fk_post) VALUES
('foto1.jpg', 1),
('foto2.jpg', 1),
('foto3.jpg', 2),
('foto4.jpg', 3),
('foto5.jpg', 4);

INSERT INTO comentarios
(texto, fk_usuario, fk_post)
VALUES
('Muito bom!', 2, 1),
('Parabéns!', 3, 1),
('Gostei do conteúdo.', 4, 2);

INSERT INTO comentarios
(texto, fk_usuario, fk_post, fk_comentarioPai)
VALUES
('Concordo!', 1, 1, 1),
('Também achei.', 2, 1, 1),
('Ótima explicação.', 3, 2, 3);


INSERT INTO seguidor (fkUsuario, fkSeguindo) VALUES
(1,2),
(1,3),
(2,1),
(3,4),
(4,1);

insert into evento
(idEvento, nomeEvento, dataEvento, qtdPessoas, fkUsuario)
values (1, 'reggae do maneiro', '2026-04-01 20:00:00', 150, 1), (2, 'pagofunk', '2026-04-05 21:00:00', 200, 1),
(1, 'samba do negueba', '2026-04-10 19:30:00', 300, 2), (2, 'faeti', '2026-04-12 22:00:00', 100, 2), 
(1, 'mc kevinho', '2026-04-18 23:00:00', 500, 3), (2, 'pagodao da nega', '2026-04-20 20:30:00', 400, 3);

SELECT 
    usuario.nome,
    perfil.bio
FROM usuario
JOIN perfil 
ON usuario.id = perfil.fk_usuario;


SELECT 
    usuario.nome,
    post.conteudo,
    post.dataPost
FROM usuario
JOIN post
ON usuario.id = post.fk_usuario;

SELECT 
    post.conteudo,
    foto_post.caminho
FROM post
JOIN foto_post
ON post.id = foto_post.fk_post;

SELECT 
    usuario.nome,
    comentarios.texto
FROM comentarios
JOIN usuario
ON usuario.id = comentarios.fk_usuario;

SELECT 
    usuario.nome,
    post.conteudo,
    comentarios.texto
FROM comentarios
JOIN usuario
ON usuario.id = comentarios.fk_usuario
JOIN post
ON post.id = comentarios.fk_post;

-- feed completo

SELECT 
    usuario.nome,
    post.conteudo,
    foto_post.caminho,
    comentarios.texto
FROM post
JOIN usuario
ON usuario.id = post.fk_usuario
LEFT JOIN foto_post
ON post.id = foto_post.fk_post
LEFT JOIN comentarios
ON comentarios.fk_post = post.id;

-- insert para a dash 

-- total de eventos que cada usuário fez
select
    u.nome,
    count(e.idEvento) as totalEventos
from usuario u
inner join evento e
on u.id = e.fkUsuario
group by u.nome;

-- total de pessoas ao todo 

select
    u.nome,
    sum(e.qtdPessoas) as totalPessoas
from usuario u
inner join evento e
on u.id = e.fkUsuario
group by u.nome;

-- nome do dono do evento, nome do evento e quantidade de pessoas

select
    u.nome,
    e.nomeEvento,
    e.qtdPessoas
from usuario u
inner join evento e
on u.id = e.fkUsuario
order by u.nome;

-- todas as colunas e seus dados 

select *
from evento e
inner join usuario u
on e.fkUsuario = u.id;