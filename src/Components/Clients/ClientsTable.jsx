import { Button, Table } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { clientsListApi } from '../ApiFunctions';
import { clientColumns } from '../../SystemConfig';

const ClientsTable = () => {
  const [allCLients,setAllCLients] = useState([])
  
  const getAllClients = async()=>{

    const dataSource = await axios.get(clientsListApi)
    setAllCLients(dataSource.data.users)
  }
  useEffect(()=>{
    
    getAllClients()
    
  },[])

  console.log(allCLients)
  return (
    <div>
      <Table
        bordered={true}
        columns={clientColumns}
        pagination={{pageSize: 7}}
        dataSource={allCLients}
        rowKey="key"
      />
    </div>
  )
}

export default ClientsTable
