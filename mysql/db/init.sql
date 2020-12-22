use production_db;

create table scores(
    id int auto_increment not null primary key,
    player varchar(32) not null,
    score int not null
);

insert into
    scores(player,score)
values
    ('Hoge',100);