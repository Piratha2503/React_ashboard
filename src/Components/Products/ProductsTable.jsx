import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { productColumns } from "../../SystemConfig";
import { productsListApi } from '../ApiFunctions';

const ProductsTable = () => {
  const [allProducts,setAllProducts] = useState([])
    
  const getAllClients = async()=>{
    const dataSource = await axios.get(productsListApi)
    setAllProducts(dataSource.data.products)
   
  }
 
  useEffect(()=>{
    
    getAllClients()
   
  },[])
   
  return (
    <div>
      <Table
        bordered={true}
        columns={productColumns}
        pagination={{pageSize: 7}}
        dataSource={allProducts}
      />
    </div>
  )
}

export default ProductsTable
