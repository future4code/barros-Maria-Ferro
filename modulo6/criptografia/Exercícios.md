# Resolução dos Exercícios - Criptografia

## 1
### a) O Round utilizado no código do BCrypt se refere ao "cost" do método de criptografia da lib, e está relacionado à segurança da senha. Os valores do cost podem ser até 99, mas é recomendável utilizar um valor adequado para o sistema em que está sendo implementado, pois quanto maior o cost, maior o tempo de de execução. Eu optei por utilizar o cost 12, por ser o padrão normalmente.

## 2
### a) Para realizar os testes corretamente, devemos primeiro implementar a criptografia no cadastro. Pois é preciso primeiramente enviar a senha criptograda para o banco, para só então o login poder compará-las.
### d) Não é necessário modificar o endpoint Profile, pois ele utiliza a autenticação através do token, e não através do hash.

