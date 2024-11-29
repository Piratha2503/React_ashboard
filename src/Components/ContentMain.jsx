import React from 'react'

const ContentMain = (props) => {
    const {childComp} = props
  return (
    <div className='bg-slate-100 h-full'>
     {childComp}
    </div>
  )
}

export default ContentMain
