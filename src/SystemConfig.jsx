import { Button } from "antd";
import { Link } from "react-router-dom";
import OpenModalFunction from "./Components/Tasks/ViewTaskModal";
import { HomeIcon } from "@heroicons/react/16/solid";

const handleEdit = (record) => {
  console.log("Edit record", record);
  // Add edit functionality here
};

const handleDelete = (record) => {
  console.log("Delete record", record);
  // Add delete functionality here, e.g., remove item from list
};

// Client Management System
export const sideMenuItems =[
    {
        label: 'Home',
        key: 'dashboard',
        link:"/",
        icon:`${<HomeIcon/>}`
      },
      {
        label: 'Project Management',
        key: 'products',
        link:'/products',
        icon:`${<HomeIcon/>}`,
        submenu: [
          { label: 'Add Product', key: 'project1',link:"/products/addProduct", },
          { label: 'Search Product', key: 'project2',link:"/products/searchProduct", },
        ],
      },
      {
        label: 'Task Management',
        key: 'Task Management',
        link:'/tasks',
        icon:`${<HomeIcon/>}`,
        submenu: [
          { label: 'Create', key: 'create', link:"/tasks/createTask", },
          { label: 'Assign', key: 'assign', link:"/tasks/assignTask",},
        ],
      },
      {
        label: 'Client Management',
        key: 'check',
        icon:`${<HomeIcon/>}`,
        submenu: [
          { label: 'Profile', key: 'profile',link:"/check/clicking-1",},
          { label: 'Account', key: 'account',link:"/check/clicking-2",},
        ],
      },
];

export const clientColumns = [
  {
    title: 'Name',
    dataIndex: 'lastName',
    key: 'lastName',
    render: (record) => (
      <div className=' text-center'>
      <h1 className={`font-semibold `}>{record}</h1>
      </div>
    )
  },
  {
    title: 'University',
    dataIndex: 'university',
    key: 'university',
    render: (record) => (
      <div className=' text-center'>
      <h1 className={`font-semibold `}>{record}</h1>
      </div>
    )
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (record) => (
      <div className=' text-center'>
      <h1 className={`font-semibold `}>{record}</h1>
      </div>
    )
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    render: (record) => (
      <div className=' text-center'>
      <h1 className={`font-semibold `}>{record}</h1>
      </div>
    )
  },
  {
    title: 'Actions',
    key: 'actions',
    render: (_, record) => (
      <div className='flex justify-evenly'>
        <Button 
          type="primary" 
          onClick={() => handleEdit(record)} 
          className="mr-2"
        >
          Modify
        </Button>
        <Button 
          type="primary" 
          onClick={() => handleDelete(record)} 
          danger
        >
          Delete
        </Button>
      </div>
    ),
  },

];

export const productColumns = [
  {
    title: 'Name',
    dataIndex: 'title',
    key: 'title',
    render: (record) => (
      <div className=' text-center'>
      <h1 className={`font-semibold `}>{record}</h1>
      </div>
    )
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    render: (record) => (
      <div className=' text-center'>
      <h1 className={`font-semibold `}>{record}</h1>
      </div>
    )
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (record) => (
      <div className=' text-center'>
      <h1 className={`font-semibold `}>{record}</h1>
      </div>
    )
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand',
    render: (record) => (
      <div className=' text-center'>
      <h1 className={`font-semibold `}>{record}</h1>
      </div>
    )
  },
  {
    title: 'Availability',
    dataIndex: 'availabilityStatus',
    key: 'availabilityStatus',
    render: (record) => (
      <div className=' text-center'>
      <h1 className={`${record === 'Low Stock' ? 'text-red-700':'text-green-700'}
      font-bold `}>{record}</h1>
      </div>
    )
  },
  {
    title: 'Actions',
    key: 'actions',
    render: (_, record) => (
      <div className='flex justify-evenly'>
        <Button 
          type="primary" 
          onClick={() => handleEdit(record)} 
          className="mr-2"
        >
          Modify
        </Button>
        <Button 
          type="primary" 
          onClick={() => handleDelete(record)} 
          danger
        >
          Delete
        </Button>
      </div>
    ),
  },

];

export const taskColumns = [
  {
    title: 'Task',
    dataIndex: 'name',
    key: 'name',
    render: (record) => (
      <div className=' text-center'>
      <h1 className={`font-semibold `}>{record}</h1>
      </div>
    )
  },
  {
    title: 'Assigned To',
    dataIndex: 'assignedUserName',
    key: 'assignedUserName',
    render: (record) => (
      <div className=' text-center'>
      <h1 className={`font-semibold `}>{record}</h1>
      </div>
    )
  },
  {
    title: 'Due Date',
    dataIndex: 'dueDate',
    key: 'dueDate',
    render: (record) => (
      <div className=' text-center'>
      <h1 className={`font-semibold `}>{record}</h1>
      </div>
    )
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (record) => (
      <div className=' text-center'>
      <h1 className={`font-semibold `}>{record}</h1>
      </div>
    )
  },
  {
    title: 'Actions',
    key: 'actions',
    render: (_, record) => (
      <OpenModalFunction id={record.id} />
    ),
  },

];
