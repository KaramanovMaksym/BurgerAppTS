import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

interface Props {
  ingredients: any
  purchaseCancelled: any
  purchaseContinued: any
}

const orderSummary: React.FC<Props> = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
      .map(igKey => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>
              {igKey}: {props.ingredients[igKey]}
            </span>
          </li>
        )
      })

  return (
    <Aux>
      <h3>Youre Order</h3>
      <p>A delicius burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
      <Button btnType='Danger' clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  )
}

export default orderSummary
