import axios from 'axios'

export const getFullAddress = async (cep: string) => {
    const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    return {
        logradouro: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf
    }
}