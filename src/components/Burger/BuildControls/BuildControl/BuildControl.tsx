import React from 'react'
import classes from './BuildControl.css'


interface Props {
  label: string
  added: any
  removed: any
  disable: any
}

const buildControl: React.FC<Props> = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less} onClick={props.removed} disabled={props.disable}>Less</button>
    <button className={classes.More} onClick={props.added} >More</button>
  </div>
)

export default buildControl
