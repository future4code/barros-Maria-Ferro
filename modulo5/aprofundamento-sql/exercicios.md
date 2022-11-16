```sql
SET SQL_SAFE_UPDATES = 0;
SELECT * FROM Actor;
SELECT * FROM Movies;
```

## Exercício 1

### A) 
Este comando exclui a coluna salary da tabela Actor.

### B)
Este comando muda o nome da coluna gender na tabela Actor para o nome 'sex', mantendo como VARCHAR(6).

### C)
Este comando está mantendo o nome como gender, porém alterando para que ele aceite até 255 caracteres.

### D)
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

## Exercício 2

### A)
```sql
UPDATE Actor
SET name = "Marieta Severo", birth_date = "1946/11/02"
WHERE id = "003";
```

### B)
```sql
UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = 005;

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = 005;
```

### C)
```sql
UPDATE Actor
SET name = "Pedro Cardoso", salary = 300000, birth_date = "1962/12/31", gender = "male"
WHERE id = 005;
```

### D)
```sql
UPDATE Actor
SET name = "Pedro Cardoso", salary = 300000, birth_date = "1962/12/31", gender = "male"
WHERE id = 009;
```
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0. 
Nenhuma linha correspondente, portanto nenhuma linha afetada e alterada.

## Exercício 3
### A)
```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```
Essa query não deletou nada, pois no exercício anterior foi alterado o nome do id 003, que era a Fernanda Montenegro.

### B)
```sql
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

## Exercício 4
### A) 
```sql
SELECT MAX(salary) FROM Actor;
```

### B)
```sql
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

### C)
```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

### D)
```sql
SELECT SUM(salary) FROM Actor;
```

## Exercício 5
### A)
```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
```
Estamos contando a quantidade de atores na tabela Actor e agrupando pelo gênero, ou seja, quantos tem de cada gênero.

### B)
```sql
SELECT id, name FROM Actor
ORDER BY name DESC;
```

### C)
```sql
SELECT * FROM Actor
ORDER BY salary ASC;
```

### D)
```sql
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

### E)
```sql
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```

## Exercício 6
### A)
```sql
ALTER TABLE Movies ADD playing_limit_date DATE;
```

### B)
```sql
ALTER TABLE Movies CHANGE rating RATING FLOAT;
```

### C)
```sql
UPDATE Movies
SET playing_limit_date = "2022/12/25"
WHERE id = "002";

UPDATE Movies
SET playing_limit_date = "2022/01/01"
WHERE id = "004";
```

### D)
```sql
DELETE FROM Movies WHERE id = "002";

UPDATE Movies
SET summary = "Blablabla"
WHERE id = "002";
```
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0.
Nenhuma linha correspondente, portanto nenhuma linha afetada e alterada.