import { useState, useEffect } from 'react'
import axios from 'axios'

export const useRequestData = (url) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [up, setUp] = useState(false)

    useEffect(() => {
        console.log("Hello, World")
        setIsLoading(true)
        axios
        .get(url)
        .then((res) => {
            setData(res.data)
            setIsLoading(false)
        }).catch((error) => {
            setError(error)
            setIsLoading(false)
        })
    }, [url, up])

    return [data, isLoading, error, up, setUp]
}