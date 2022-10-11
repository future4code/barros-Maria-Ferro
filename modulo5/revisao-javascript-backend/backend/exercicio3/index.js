const contas = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]

const login = (email, senha) => {

    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const regexSenha = /.{6,}/

    if (typeof email !== 'string' || !regexEmail.test(email)) {
       return "E-mail em formato inválido."
    } else if (typeof senha !== 'string') {
        return "Senha em formato inválido."
    } else if (!regexSenha.test(senha)) {
        return "Senha deve possuir no mínimo 6 caracteres"
    } else {

        let user

        for (let i = 0; i < contas.length; i++) {
            if (contas[i].email === email) {
                user = i
                if (contas[user].password === senha) {
                    return "Login bem sucedido."
                } else { return "Senha incorreta." }
            }
        }

        if (user === undefined) {
            return "E-mail não cadastrado."
        }
    }
}

console.log(login("astrodev@labenu.com", "abc123"))
console.log(login("bananinha@gmail.com", "banana"))
console.log(login("astrodev.labenu.com", "abc123"))
console.log(login("bananinha@gmail.com", "ba"))
console.log(login("astrodev@labenu.com", 123456))
console.log(login("maria@labenu.com", "maria123"))
