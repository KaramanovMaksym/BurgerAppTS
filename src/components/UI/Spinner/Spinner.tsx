import React from 'react'
import classes from './Spinner.css'


interface Props {

}

const Spinner: React.FC<Props> = () => (
  <div className={classes.Loader}>Loading...</div>
)

export default Spinner
