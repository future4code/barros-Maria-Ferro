```sql
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```

## Exercício 1

### A) 
Comando VARCHAR(255) estabelece que a informação id é uma string de até 255 caracteres, o mesmo para a informação name e gender (máximo 6 caracteres). Primary Key é a chave primária, que é uma informação única na tabela. Os comando NOT NULL estabelecem que estas informações não podem ser nulas nas linhas, e o comando DATE estabelece que esta informação é no formato de data YYYY-MM-DD.

### B)

```sql
SHOW DATABASES;
```

Este comando gera uma tabela com o nome das bases de dados existentes.

```sql
SHOW TABLES;
```

Este comando gera uma tabela com o nome das tabelas existentes no banco de dados que está sendo utilizado.

### C)
```sql
DESCRIBE Actor;
```

Este comando gera uma tabela especificando todos os campos que existem na tabela Actor, os tipos de dados esperados, e as restrições.

## Exercício 2
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
```

### A)
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);
```

### B)
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"002",
    "Carolina Dieckmann",
    1200000,
    "1978-09-16",
    "female"
);
```

Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'. Gerou um código de erro dizendo que o dado '002' está duplicado para a chave primária.

### C)

```sql
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

Error Code: 1136. Column count doesn't match value count at row 1. Quer dizer que o número de colunas informada não corresponde ao número de valores informados para a linha.

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

1 row(s) affected.

### D)
```sql
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```

Error Code: 1364. Field 'name' doesn't have a default value. Quer dizer que o campo 'name' não possui um valor padrão, ou seja, ele não foi informado na inserção e não possui um valor para ser usado por padrão.

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

### E)

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```

Error Code: 1292. Incorrect date value: '1950' form column 'birth_date' art row 1. O valor informado para a coluna birth_date está incorreto. É esperada uma string e foi informado um número.

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

### F)
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"006",
    "Wagner Moura",
    1500000,
    "1976-06-27",
    "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"007",
    "Sônia Braga",
    750000,
    "1950-06-08",
    "female");
```
    
## Exercício 3
### A)
```sql
SELECT * FROM Actor WHERE gender = "female";
```

### B)
```sql
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```

### C)
```sql
SELECT * FROM Actor WHERE gender = "invalid";
```
O comando retornou uma tabela com valores nulos, porque não existe este resultado.

### D)
```sql
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
```

### E)
```sql
SELECT id, nome FROM Actor WHERE id = "002";
```
Error Code: 1054. Unknown column 'nome' in 'field list'. Não existe a columa 'nome' na lista de campos, o nome correto é 'name'.

## Exercício 4
```sql
SELECT * FROM Actor WHERE (name LIKE "a%" OR name LIKE "j%") AND salary > 300000;
```

### A) 
Estamos selecionando todas as informações da tabela Actor onde o campo name inicia com A ou J e o salário é maior que R$300.000,00.

### B)
```sql
SELECT * FROM Actor WHERE name NOT LIKE "a%" AND salary > 350000;
```

### C)
```sql
SELECT * FROM Actor WHERE name LIKE "%g%";
```

### D)
```sql
SELECT * FROM Actor WHERE (name LIKE "%a%" OR "%g%") AND salary BETWEEN 350000 AND 900000;
```

## Exercício 5
### A)
```sql
CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    summary TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);
```

Esta query cria uma tabela chamada Movies, com os seguintes campos: id, title, summary, release_date e rating. O tipo TEXT aceita um número quase ilimitado de caracteres, porém vi que ultimamente vem sendo pouco utilizado e é mais recomendado utilizar o VARCHAR.

### B)
```sql
INSERT INTO Movies (id, title, summary, release_date, rating)
VALUES (
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7);
```

### C)
```sql
INSERT INTO Movies (id, title, summary, release_date, rating)
VALUES (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10);
```

### D)
```sql
INSERT INTO Movies (id, title, summary, release_date, rating)
VALUES (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8);
```
    
### E)
```sql
INSERT INTO Movies (id, title, summary, release_date, rating)
VALUES (
	"004",
    "Bacurau",
    "Num futuro próximo, Bacurau, uma pequena cidade brasileira no oeste de Pernambuco, lamenta a perda de sua matriarca, Carmelita, que viveu até os 94 anos. Dias depois, seus habitantes aos poucos percebem algo estranho acontecer na região: enquanto drones passeiam pelos céus, estrangeiros chegam pela primeira vez na cidade com planos de exterminar toda a população ali residente, carros são atingidos por tiros e cadáveres começam a aparecer. Os habitantes chegam à conclusão de que estão sendo atacados. Resta identificar o inimigo e criar coletivamente um meio de defesa.",
    "2019-08-29",
    8);
```
    
## Exercício 6
### A)
```sql
SELECT id, title, rating FROM Movies WHERE id = "002";
```

### B)
```sql
SELECT * FROM Movies WHERE title = "Se Eu Fosse Você";
```

### C)
```sql
SELECT id, title, summary FROM Movies WHERE rating >= 7;
```

## Exercício 7
### A)
```sql
SELECT * FROM Movies WHERE title LIKE "%vida%";
```

### B)
```sql
SELECT * FROM Movies WHERE title LIKE "%dia%" OR summary LIKE "%dia%";
```

### C)
```sql
SELECT * FROM Movies WHERE release_date < "2022-11-08";
```

### D)
```sql
SELECT * FROM Movies WHERE (title LIKE "%dia%" OR summary LIKE "%dia%") AND release_date < "2022-11-08" AND rating >= 7;
```