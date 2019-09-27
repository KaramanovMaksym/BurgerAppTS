import React from 'react'
import burgerLogo from '../../../assets/images/burger-logo.png'
import classes from './Logo.css'

interface Props {

}

const logo: React.FC<Props> = () => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="MyBurger"/>
  </div>
)

export default logo
