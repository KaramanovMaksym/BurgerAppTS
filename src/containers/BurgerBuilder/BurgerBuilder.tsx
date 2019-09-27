import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

interface Props {

}
interface State {
  ingredients: {
    [ingredient: string]: number
  }
  totalPrice: number
  purchasable: boolean
}

const INGREDIENT_PRICES: {[ingredient: string]: number} = {
  salad: 0.5,
  cheese: 0.6,
  meat: 1.5,
  bacon: 0.8
}

export default class BurgerBuilder extends Component<Props, State> {
  state: State = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false
  }

  updatePurchaseState (ingredients: {[ingredient: string]: number}) {

    const sum = Object.keys(ingredients)
        .map( igKey => {
          return ingredients[igKey]
        })
        .reduce( (sum, el) => {
          return sum + el
        }, 0)
    this.setState({purchasable: sum > 0})
  }

  addIngredientHandler = (type: string) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceAdditions = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAdditions
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
    debugger
    this.updatePurchaseState(updatedIngredients)
  }

  removeIngredientHandler = (type: string) => {
    const oldCount = this.state.ingredients[type]
    if (oldCount <= 0) {
      return
    }
    const updatedCount = oldCount - 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceDeduction = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceDeduction
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
    this.updatePurchaseState(updatedIngredients)

  }

  render() {
    const disableInfo: {[ingredient: string]: number|boolean} = {
      ...this.state.ingredients
    }
    for (const key in disableInfo) {
        disableInfo[key] = disableInfo[key] <= 0
    }
    return (
      <Aux>
        <Modal >
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disable={disableInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          />

      </Aux>
    )
  }
}
