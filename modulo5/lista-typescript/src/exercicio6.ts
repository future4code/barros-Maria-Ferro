type Clients = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clients: Clients[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function negativeBalace(clientList: Clients[]): Clients[] {
    for (let i = 0; i < clientList.length; i++) {
        let balance: number = clientList[i].debitos.reduce(function(balance, value) {
            return balance + value
        }, 0)
        clientList[i].saldoTotal -= balance;
        clientList[i].debitos = []
        balance = 0
    }

    const newClientList: Clients[] = clientList.filter((client) => {
        return client.saldoTotal < 0
    })

    return newClientList
}

console.table(negativeBalace(clients))