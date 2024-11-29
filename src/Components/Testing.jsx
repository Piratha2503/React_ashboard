import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { clientsListApi, productsListApi, taskListGroupedApi } from './ApiFunctions';
import './FrontPage/FrontStyle.css';
import Chart from 'react-google-charts';

const Testing = () => {
  const [newCount,setNewCount] = useState(0)
  const [completedCount,setCompletedCount] = useState(0)
  const [dateLapsedCount,setDateLapsedCount] = useState(0)
  const [progressCount,setProgressCount] = useState(0)

  const Counting = async ()=>{
    const taskListGroup = await axios.get(taskListGroupedApi);
    const taskList = taskListGroup.data.results.taskList;
      
      const newTasksGroup = taskList.find(taskGroup => taskGroup.New); // Look for the "New" tasks group
      const newCount = newTasksGroup && Array.isArray(newTasksGroup.New) ? newTasksGroup.New.length : 0;
      setNewCount(newCount);

      const completedTasksGroup = taskList.find(taskGroup => taskGroup.Completed); // Look for the "New" tasks group
      const completedCount = completedTasksGroup && Array.isArray(completedTasksGroup.Completed) ? completedTasksGroup.Completed.length : 0;
      setCompletedCount(completedCount);

      const dateLapsedTasksGroup = taskList.find(taskGroup => taskGroup.DateLapsed); // Look for the "New" tasks group
      const dateLapsedCount = dateLapsedTasksGroup && Array.isArray(dateLapsedTasksGroup.DateLapsed) ? dateLapsedTasksGroup.DateLapsed.length : 0;
      setDateLapsedCount(dateLapsedCount);

      const progressTasksGroup = taskList.find(taskGroup => taskGroup.Processing); // Look for the "New" tasks group
      const progressCount = progressTasksGroup && Array.isArray(progressTasksGroup.Processing) ? progressTasksGroup.Processing.length : 0;
      setProgressCount(progressCount);
      console.log(newTasksGroup);
  };
  useEffect(()=>{
    Counting()
  },[])
  
  const category = [
    {id:"one",label:"New",count:newCount, link:"/taskCategory",key:"New",color:'text-blue-600'},
    {id:"two",label:"Completed",count:completedCount, link:"/taskCategory",key:"Completed",color:'text-green-600'},
    {id:"three",label:"In-Progress",count:progressCount, link:"/taskCategory",key:"Processing",color:'text-yellow-600'},
    {id:"four",label:"Date Lapsed",count:dateLapsedCount, link:"/taskCategory",key:"DateLapsed",color:'text-red-600'},

]
const totalCount = newCount+completedCount+progressCount+dateLapsedCount;
  return (
    <div className='FrontPageContentMainDiv'>
    <div className='FrontPageContentSummaryDiv'>
    {category.map(category =>(
       <Link key={category.key} className='SummaryButton' to={`${category.link}?key=${category.key}`}>
       <div className='SummaryButtonTitle'>
       <h1 className='text-lg font-semibold'>{category.label}</h1>
       </div>
       <div className="relative size-25">
  <svg className="rotate-90 size-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
  <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth={3} strokeDasharray="100" strokeLinecap="round"></circle> 
  <circle cx="18" cy="18" r="16" fill="none" className={`stroke-current ${category.color}`} strokeWidth={3} strokeDasharray={`${(category.count/totalCount)*100} 100`} strokeLinecap="round"></circle>
  </svg>

  <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <span className={`text-2xl font-bold ${category.color}`}>{category.count}</span>
  </div>
</div>
       </Link>
    ))}
    </div>
    <div className='h-12'></div>
     <div className='flex justify-center'>
     <Chart 
        chartType='ColumnChart'
        data={[
          ["Month","New","Completed","Progress","Date Lapsed"],
          ["January",25,14,23,1],
          ["February",18,12,20,1],
          ["March",26,8,29,2],
          ["April",41,21,21,0],
          ["May",37,10,17,1],
          ["June",19,17,13,3],
          ["July",33,34,37,7],
          ["August",26,19,41,2],
          ["September",41,36,5,1],
          ["October",22,27,12,3],
          ["November",19,40,22,0],
          ["December",37,5,33,2]
        ]}
        options={{
        title: "Average Weight by Age",
        colors: ["#444da1","#2ea224","#f8af19","#e75253",],
        hAxis: {
      title: "Months",
      slantedText: true,
      slantedTextAngle: 90
    },
        vAxis:{title:"Count"},
        height: 400,
        width: 1000,
        bar: { groupWidth: "40%" },
      }}
      legendToggle

      />
     </div>
      
    </div>
  )
}

export default Testing
