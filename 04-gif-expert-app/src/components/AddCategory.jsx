import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState()

    const onInputChange = ({target}) => {
        setinputValue(target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        if(inputValue.trim().length<=1)return
        /* useCategories(categories=>[inputValue,...categories]) */
        onNewCategory(inputValue.trim())
        setinputValue('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input 
            value={inputValue} 
            onChange={onInputChange} 
            type="text" 
            placeholder="Buscar Gifs" />
        </form>
    )
}
