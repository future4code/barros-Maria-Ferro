enum SECTOR {
    MARKETING = "marketing",
    SALES = "vendas",
    FINANCE = "financeiro"
}

type Employees = {
    nome: string,
    salário: number,
    setor: SECTOR;
    presencial: boolean
}

const employeesList: Employees[] = [
	{ nome: "Marcos", salário: 2500, setor: SECTOR.MARKETING, presencial: true},
	{ nome: "Maria", salário: 1500, setor: SECTOR.SALES, presencial: false},
	{ nome: "Salete", salário: 2200, setor: SECTOR.FINANCE, presencial: true},
	{ nome: "João", salário: 2800, setor: SECTOR.MARKETING, presencial: false},
	{ nome: "Josué", salário: 5500, setor: SECTOR.FINANCE, presencial: true},
	{ nome: "Natalia", salário: 4700, setor: SECTOR.SALES, presencial: true},
	{ nome: "Paola", salário: 3500, setor: SECTOR.MARKETING, presencial: true}
]

function organizeEmployees(list: Employees[]): Employees[] {
    const filteredList: Employees[] = list.filter((item: Employees) => {
        return item.presencial === true && item.setor === "marketing"
    })

    return filteredList
}

console.table(organizeEmployees(employeesList))