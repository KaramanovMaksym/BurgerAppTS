import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

interface Props {
  ingredients: {
    [ingredient: string]: number
  }
}

const burger: React.FC<Props> = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey: string) => {
      return [...Array(props.ingredients[igKey])].map(((_,i) => {
        return <BurgerIngredient key={igKey+i} type={igKey} />
      }))
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])
  if (transformedIngredients.length === 0) {
    transformedIngredients.push(<p key={(transformedIngredients.length+1).toString()}>
      Please start adding ingredients!</p>)
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default burger
