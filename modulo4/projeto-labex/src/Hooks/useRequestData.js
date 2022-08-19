import { useState, useEffect } from "react";
import axios from "axios";

export function useRequestData(url, headers) {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [reload, setReload] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get(url, headers)
        .then((response) => {
            setIsLoading(false)
            setData(response.data)
        })
        .catch((error) => {
            setIsLoading(false)
            setError(error)
        })
    }, [url, reload])

    return [data, isLoading, error, reload, setReload]
}