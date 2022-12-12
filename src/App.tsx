import React from 'react';
import Layout from "./Components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import All from "./Containers/All/All";
import Form from "./Components/Form/Form";

function App() {
  return (
    <Layout>
     <Routes>
       <Route path='/' element={<All/>}/>
       <Route path='/new-meal' element={<Form/>}/>
        <Route path='/edit-meal/:id' element={<Form/>}/>
     </Routes>
    </Layout>
  );
}

export default App;
