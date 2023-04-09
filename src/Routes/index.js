import React from "react";
import {Routes,Route} from 'react-router-dom'
import {Home, AddScenerio, AddVehicle, AllScenerios} from '../Pages'
function Roughter(){
    return(
           <>
                   <Routes>
                     <Route path='/' element={<Home/>}/>
                     <Route path='/addscenerio' element={<AddScenerio/>}/>
                     <Route path='/allscenerios' element={<AllScenerios/>}/>
                     <Route path='/addvehicle' element={<AddVehicle/>}/>
                     
                   </Routes>
           </>
          
    )
}
export default Roughter;