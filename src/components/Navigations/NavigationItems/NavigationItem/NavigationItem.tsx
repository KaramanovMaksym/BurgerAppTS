import React from 'react'
import classes from './NavigationItem.css'

interface Props {
  link: string
  active?: boolean
}

const navigationItem: React.FC<Props> = props => (
  <li className={classes.NavigationItem}>
    <a href={props.link} className={props.active ? classes.active : undefined}>
      {props.children}
    </a>
  </li>
)

export default navigationItem
