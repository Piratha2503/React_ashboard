import React from 'react'
import MainPage from '../MainPage'

const FrontPageMain = (props) => {
  const {childComp} = props;
  return (
    <div>
    <MainPage childComp={childComp}/>
    </div>
  )
}

export default FrontPageMain
