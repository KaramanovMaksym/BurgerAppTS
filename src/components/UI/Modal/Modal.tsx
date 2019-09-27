import React from 'react'
import classes from './Modal.css'


interface Props {

}

const modal: React.FC<Props> = (props) => (
  <div className={classes.Modal}>
    {props.children}
  </div>
)

export default modal
