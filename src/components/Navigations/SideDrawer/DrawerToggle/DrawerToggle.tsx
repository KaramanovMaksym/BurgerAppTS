import React from 'react'
import classes from './DrawerToggle.css'

interface Props {
  clicked: any
}

const drawerToggle: React.FC<Props> = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export default drawerToggle
