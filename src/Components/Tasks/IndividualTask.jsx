import React from 'react'
import './TaskStyle.css'
const IndividualTask = (props) => {
  const { task } = props
  return (
    <div className='border-2 w-full flex gap-5 flex-wrap justify-evenly'>
          <label className='flex gap-3'> <h1 className='taskKey'>Name:-</h1> <h1 className='taskValue'>{task.name}</h1></label>
          <label className='flex gap-3'> <h1 className='taskKey'>Name:-</h1> <h1 className='taskValue'>{task.name}</h1></label>
          <label className='flex gap-3'> <h1 className='taskKey'>Name:-</h1> <h1 className='taskValue'>{task.name}</h1></label>
          <label className='flex gap-3'> <h1 className='taskKey'>Name:-</h1> <h1 className='taskValue'>{task.name}</h1></label>
          <label className='flex gap-3'> <h1 className='taskKey'>Name:-</h1> <h1 className='taskValue'>{task.name}</h1></label>
    </div>
  )
}

export default IndividualTask

/*
     */