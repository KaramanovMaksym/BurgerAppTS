import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
]
interface Props {
  ingredientAdded: Function
  ingredientRemoved: Function
  disable: {[ingredient: string]: boolean|number}
}

const buildControls: React.FC<Props> = props => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => {
      return (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disable={props.disable[ctrl.type]}
        />
      )
    })}
  </div>
)


export default buildControls
