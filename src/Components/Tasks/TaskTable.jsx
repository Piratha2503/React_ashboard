import { Table, Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import { taskColumns } from '../../SystemConfig'
import axios from 'axios'
import { taskListApi } from '../ApiFunctions'



const items = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];

const TaskTable = () => {
    const [allTasks,setAllTasks] = useState([])

    const onChange = (key) => {
      console.log(key);
    };

    const getTasks = async () => {
        const dataSource = await axios.get(taskListApi);
        setAllTasks(dataSource.data.results.taskList)
    } 

    useEffect(() => {
        getTasks()
    },[])
console.log(allTasks)
  return (
    <div className='flex flex-col justify-center content-center'>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} className='bg-slate-500 w-1/3'/>
      <Table
        bordered={true}
        columns={taskColumns}
        pagination={{pageSize: 7}}
        dataSource={allTasks}
      />
    </div>
  )
}

export default TaskTable

