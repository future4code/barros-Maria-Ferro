## Exercício 1

```sql
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);
```

### A) 
Chave estrangeira é um dado que relaciona duas tabelas, para que seja possível referenciar uma tabela em outra;

### B)
```sql
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Adoro esse filme",
    7,
	"001"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"002",
    "Gostei muito das atuações.",
    9,
	"003"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"032",
    "Dormi assistindo.",
    6,
	"004"
);
```

### C)
```sql
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"005",
    "Adorei!",
    10,
	"002"
);
```

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4416465-maria-ferro`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`)).
Ocorreu um erro pois existe uma restrição na foreign key.

### D)
```sql
ALTER TABLE Movies DROP COLUMN Rating;
```

### E)
```sql
DELETE FROM Movies WHERE id = "001";
```

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jbl-4416465-maria-ferro`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`)).
Não foi possível excluir pois existe uma restrição pela ligação à foreign key.

## Exercício 2

```sql
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

### A)
Esta tabela possui duas colunas apenas, responsáveis por referenciar as tabelas Movies e Actors. 

### B)
```sql
INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
	"001",
    "002"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
	"001",
    "004"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
	"003",
    "001"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
	"003",
    "005"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
	"004",
    "004"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
	"004",
    "003"
);
```

### C)
```sql
INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
	"001",
    "008"
);
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4416465-maria-ferro`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`)).
Não é possível pois o actor_id referencia o id de Actor, que neste caso não existe.

### D)
```sql
DELETE FROM Actor WHERE id = "001";
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jbl-4416465-maria-ferro`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`)).
Não é possível excluir uma linha em que esteja referenciado uma foreign key.

## Exercício 3
```sql
SELECT * FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;
```

### A)
Esta query está selecionar todas as informações da tabela Movies que possuem referência na tabela Rating, ou seja em que o Movies.id seja igual ao Rating.movie_id;

### B)
```sql
SELECT Movies.title, Movies.id, Rating.rate FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;
```