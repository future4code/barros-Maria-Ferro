// exercício 02 e 05

type Users = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}

type Posts = {
    id: number,
    title: string,
    body: string,
    userId: number
}

// exercício 03

export const users: Users[] = [
    {
        id: 1,
        name: "Maria",
        phone: "333 333 333",
        email: "maria@maria.com",
        website: "www.maria.com.br"
    },
    {
        id: 2,
        name: "Luiza",
        phone: "777 777 777",
        email: "luiza@luiza.com",
        website: "www.luiza.com.br"
    },
    {
        id: 3,
        name: "Matheus",
        phone: "212 121 212",
        email: "matheus@matheus.com",
        website: "www.matheus.com.br"
    },
    {
        id: 4,
        name: "Bananinha",
        phone: "444 444 444",
        email: "bananinha@bananinha.com",
        website: "www.bananinha.com.br"
    }
]

// exercício 06

export const posts: Posts[] = [
    {
        id: 1,
        title: "Lavender Haze",
        body: "I feel the lavender haze creeping up on me...",
        userId: 1
    },
    {
        id: 2,
        title: "Maroon",
        body: "When the silence came we were shaking, blind and hazy...",
        userId: 1
    },
    {
        id: 3,
        title: "Anti-Hero",
        body: "It's me, hi! I'm the problem, it's me.",
        userId: 2
    },
    {
        id: 4,
        title: "Snow on the Beach",
        body: "It's coming down, no sound, it's all around...",
        userId: 2
    },
    {
        id: 5,
        title: "You're on your own, kid",
        body: "Everything you lose is a step you take...",
        userId: 3,
    },
    {
        id: 6,
        title: "Midnight Rain",
        body: "You wanted a bride, I was making my own name...",
        userId: 3
    }
] // seguindo o que foi proposto no exercício, crie a array de posts como um tipo separado fora da array de usuários, porém acredito que seria melhor criar dentro, para já ficar interligado aos usuários.


