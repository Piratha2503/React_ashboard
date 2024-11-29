import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ClientsTable from './Components/Clients/ClientsTable.jsx';
import FrontPageContent from './Components/FrontPage/FrontPageContent.jsx';
import FrontPageMain from './Components/FrontPage/FrontPageMain';
import ProductsTable from './Components/Products/ProductsTable.jsx';
import TaskTable from './Components/Tasks/TaskTable.jsx';
import TaskTableByCategory from './Components/Tasks/TaskTableByCategory.jsx';
import IndividualTask from './Components/Tasks/IndividualTask.jsx';
import AddTask from './Components/Tasks/AddTask.jsx';

function App() {
  return (
    <div className="">
    <Router>
    <Routes>
      <Route path='/' element={<FrontPageMain childComp={<FrontPageContent/>}/>}/>
      <Route path='/clients' element={<FrontPageMain childComp={<ClientsTable/>}/>}/>
      <Route path="/products" element={<FrontPageMain childComp={<ProductsTable/>}/>}/>
      <Route path="/tasks" element={<FrontPageMain childComp={<TaskTable/>}/>}/>
      <Route path="/taskCategory" element={<FrontPageMain childComp={<TaskTableByCategory/>}/>}/>
      <Route path="/tasks/individual" element={<FrontPageMain childComp={<IndividualTask/>}/>}/>
      <Route path="/taskCategory/individual" element={<FrontPageMain childComp={<IndividualTask/>}/>}/>
      <Route path="/tasks/createTask" element={<FrontPageMain childComp={<AddTask/>}/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
