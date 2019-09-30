import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigations/Toolbar/Toolbar'
import SideDrawer from '../Navigations/SideDrawer/SideDrawer'

interface Props {

}
interface State {

}

class Layout extends Component<Props, State> {
  state = {
    showSideDrawer: false
  }
  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState: {showSideDrawer: boolean}) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} />

        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout
