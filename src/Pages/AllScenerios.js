import './AllScenerio.css'
import React,{ useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {AiFillDelete} from  "react-icons/ai";
import {GrEdit,GrAddCircle} from "react-icons/gr";
import { NavLink } from "react-router-dom"



function AllScenerios(){
   const [data, setData]=useState([])
   const [uname,usetName] = useState('')
   const [uTime,usetTime] = useState('')
   const [editId,setEditId] = useState(-1)
   const [count ,setCount]=useState(0);
   const navigate =useNavigate();
   
   useEffect(()=> {

     axios.get('http://localhost:3030/posts')
     .then(res => setData(res.data))
     .catch(err => console.log(err))
   },[])
 

   const handleDelete =(id)=>{
    const confirm =window.confirm("would you need to delete?");
    if(confirm){
      axios.delete('http://localhost:3030/posts/'+id)
      .then(res =>{
        alert("data deleted");
        window.location.reload();
      }) .catch(err => console.log(err));
    }
   }
   
   const handleEdit =(id) =>{
    axios.get('http://localhost:3030/posts/'+id)
    .then(res =>{
      console.log(res.data)
      usetName(res.data[0].ScenerioName)
      usetTime(res.data[0].ScenerioTime)
    } )
    .catch(err => console.log(err))
    setEditId(id)
   }

   const handleUpdate = () =>{
    axios.put('http://localhost:3030/posts/'+ editId, {id:editId,ScenerioName:uname,ScenerioTime:uTime})
    .then(res => {
      console.log(res);
      setEditId(-1);
    })
    .catch(err => console.log(err))
   }

   const handleClick=(id)=>{
     const d = data.find(d => d.id === id);
     const updateRecord ={...d,count: d.count+1};
     console.log(updateRecord)
     axios.put('http://localhost:3030/posts/' + id,{ScenerioName:updateRecord.ScenerioName,ScenerioTime:updateRecord.ScenerioTime,
                   count:updateRecord.count})
     .then(res => {
           window.location.reload();
     })
     .catch(err => console.log(err))
   }
    return(
         
      <>
      <div className="allscenerio-container">
      <div className='scenerio'>
        <h2>AllScenerios </h2>
       <NavLink to='/addscenerio'><button className='button btn-1'>New Scenerio</button></NavLink> 
       <NavLink to='/addvehicle'><button className='button btn-2' >Add Vehicle</button></NavLink> 
        <button className='button btn-3'>Delete All</button>
      </div>
      </div>
      <div>
      <table>
      <thead>
            <tr id="header">
            <th scope="col">Scenerio Id</th>
                <th scope="col">ScenerioName</th>
                <th scope="col">ScenerioTime</th>
                <th scope="col">Number of Vehicles</th>
                <th scope="col">Add Vehicle</th>
                <th scope="col">Edit</th>
                <th scope="col" >Delete</th>
            </tr>
      </thead>
      <tbody>
        {data.map((d, i) => (
          d.id === editId ?
          <tr>
             <td>{d.id}</td>
             <td><input type="text" value={uname} onChange={e=>usetName(e.target.value)}/></td>
             <td><input type="text" value={uTime} onChange={e=>usetTime(e.target.value)}/></td>
             <td><button onClick ={handleUpdate}>Update</button></td>
          </tr>
          :
          <tr key={i}>
            <td>{d.id}</td>
            <td>{d.ScenerioName}</td>
            <td>{d.ScenerioTime}</td>
            <td>{d.count }</td>
            <td  onClick={() =>handleClick(d.id)} ><GrAddCircle/></td>
            <td> 
              <button onClick={() => handleEdit(d.id)}><GrEdit/></button>
            </td>
            <td>
              <button type='button' onClick = {e => handleDelete(d.id)}><AiFillDelete/></button>
            </td>
              
          </tr> 
        ))} 
      </tbody>
        </table> 
        </div>
      </> 
        
    )
    


}

export default AllScenerios;