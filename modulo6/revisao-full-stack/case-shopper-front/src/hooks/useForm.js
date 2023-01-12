import { useState } from "react";

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChange = (e) => {
        const {name, value} = e.target
        const newForm = {...form, [name]: value}
        setForm(newForm)
    }

    const clear = () => {
        setForm(initialState)
    }

    return [form, onChange, clear]
}