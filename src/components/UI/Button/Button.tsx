import React from 'react'
import classes from './Button.css'


interface Props {
  clicked: any
  btnType: string
}

const button: React.FC<Props> = (props) => (
  <button
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}>
    {props.children}
  </button>
)

export default button
