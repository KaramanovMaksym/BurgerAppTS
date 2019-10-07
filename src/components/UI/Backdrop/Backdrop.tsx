import React from 'react'
import classes from './Backdrop.css'

interface Props {
  show: boolean | null
  clicked: any
}

const backdrop: React.FC<Props> = (props) => (
  props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
)

export default backdrop
