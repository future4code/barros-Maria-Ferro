type Users = {
    name: string,
    email: string,
    role: string
}

const usersList: Users[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
]

function filterUsers(list: Users[]): string[] {
/*     let emailList: string[] = []

    list.forEach((item: Users) => {
        if(item.role === "admin") {
            emailList.push(item.email)
        }
    })

    return emailList */

    let adminUsers: Users[] = list.filter((item: Users) => {
        return item.role === "admin"
    })

    let emails: string[] = adminUsers.map((item) => {
        return item.email
    })

    return emails
}

console.table(filterUsers(usersList))