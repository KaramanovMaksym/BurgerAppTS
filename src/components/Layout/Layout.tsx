import React from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigations/Toolbar/Toolbar'

interface Props {}
const layout: React.FC<Props> = ( props ) => {
  return (
    <Aux>
      <Toolbar />
      <div>
        Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  )
}

export default layout
