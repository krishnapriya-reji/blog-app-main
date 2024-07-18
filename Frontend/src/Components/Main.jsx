import React from 'react'
import Navbarr from './Navbarr'

const Main = ({props}) => {
  return (
    <div>
      <Navbarr/>
      {props.child}
    </div>
  )
}

export default Main
