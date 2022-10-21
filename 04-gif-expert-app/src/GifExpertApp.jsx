import { useState } from "react"
import { AddCategory, GiftGrid } from "./components"

export const GifExpertApp = () => {

  const [categories, useCategories] = useState(['One Punch'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    //useCategories([...categories,'Michaen'])
    //useCategories(cat=>[...categories,'Michaen'])
    useCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={onAddCategory}
      />
        {categories.map(category => {
          return(
            <GiftGrid key={category} category={category}/>
          )
        })}
    </>
  )
}
