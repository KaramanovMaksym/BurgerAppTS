import React from 'react'

interface Props {
  clicked: any
}

const drawerToggle: React.FC<Props> = (props) => (
  <div onClick={props.clicked}>MENU</div>
)

export default drawerToggle
