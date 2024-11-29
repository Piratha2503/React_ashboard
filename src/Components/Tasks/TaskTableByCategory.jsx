import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { taskListGroupedApi } from '../ApiFunctions';
import { Table } from 'antd';
import { taskColumns } from '../../SystemConfig';

const TaskTableByCategory = () => {
    const [newTaskList, setNewTaskList] = useState([])
    const [completedTaskList, setCompletedTaskList] = useState([])
    const [progressTaskList, setProgressTaskList] = useState([])
    const [dateLapsedTaskList, setDateLapsedTaskList] = useState([])

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const key = params.get("key")

    const getTaskListByStatus = async()=>{
        const taskListByStatus = await axios.get(taskListGroupedApi)
        const taskGroup = taskListByStatus.data.results.taskList
        setNewTaskList(taskGroup.find(TaskList=>TaskList.New).New)
        setCompletedTaskList(taskGroup.find(TaskList=>TaskList.Completed).Completed)
        setProgressTaskList(taskGroup.find(TaskList=>TaskList.Processing).Processing)
        setDateLapsedTaskList(taskGroup.find(TaskList=>TaskList.DateLapsed).DateLapsed)
    }
    useEffect(()=>{
        getTaskListByStatus()
    },[])

    let taskListPreview = [];

    if(key === "New") taskListPreview = newTaskList
    if(key === "Completed") taskListPreview = completedTaskList
    if(key === "Processing") taskListPreview = progressTaskList
    if(key === "DateLapsed") taskListPreview = dateLapsedTaskList 

  return (
    <div>
      <Table
        bordered={true}
        columns={taskColumns}
        pagination={{pageSize: 7}}
        dataSource={taskListPreview}
        rowKey="key"
      />
    </div>
  )
}

export default TaskTableByCategory
