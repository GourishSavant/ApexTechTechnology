import './Home.css'
import React,{ useEffect, useState} from 'react';
import axios from 'axios';
import {AiFillDelete} from  "react-icons/ai";
import {GrEdit} from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import Chart from "./Chart";

function Home(){
    const [data, setData]=useState([])
    const [uvehivle,usetVehicle] = useState('')
    const [uSpeed,usetSpeed] = useState('')
    const [uPositionX,usetPositionX] = useState('')
    const [uPositionY,usetPositionY] = useState('')
    const [uDirection,usetDirection] = useState('')
    const [editId,setEditId] = useState(-1)
    const [points, setPoints] = useState([]);
    const [record,setRecords] =useState(data);
    

 

    useEffect(()=> {
 
      axios.get('http://localhost:3030/addData')
      .then(res => {
        setData(res.data)
        setRecords(res.data);
      })
      .catch(err => console.log(err))
    },[])

    const navigate =useNavigate();

    const handleVehicleEdit =(id) =>{
        axios.get('http://localhost:3030/adddata/'+id)
        .then(res =>{
          console.log(res.data)
          usetVehicle(res.data[0].VehicleName)
          usetSpeed(res.data[0].Speed)
          usetPositionX(res.data[0].positionX)
          usetPositionY(res.data[0].positionY)
          usetDirection(res.data[0].Direction)
        } )
        .catch(err => console.log(err))
        setEditId(id)
       }
    
       const handleVehicleUpdate = () =>{
        axios.put('http://localhost:3030/adddata/'+editId, {id:editId,VehicleName:uvehivle,Speed:uSpeed,positionX:uPositionX
                              ,positionY:uPositionY,Direction:uDirection})
        .then(res => {
          console.log(res);
          setEditId(-1);
        })
        .catch(err => console.log(err))
       }

    const handleVehicleDelete =(id)=>{
        const confirm =window.confirm("would you need to delete?");
        if(confirm){
          axios.delete('http://localhost:3030/adddata/'+id)
          .then(res =>{
            alert("data deleted");
            window.location.reload();
            navigate('/');
          }) .catch(err => console.log(err));
        }
       }
       useEffect(() => {
        axios.get('http://localhost:3030/posts')
          .then((response) => setPoints(response.data))
          .catch((error) => console.log(error));
      }, []);
    
     const Filter =(event) => {
        console.log(record.filter(f =>f.ScenerioName.toLowerCase().includes(event.target.value)))
        const filterdata = record.filter(f =>f.ScenerioName.toLowerCase().includes(event.target.value))
        console.log(filterdata)
        setData(filterdata);

       }
       
    return(
       <>
       <div className="container">
        <div className='sub1'>
                <h3>Scenerio</h3>
                <select className='cont-sub1' id="Points" onChange={Filter}>
                <option value="">Select an option</option> 
                    {points.map((option) => (
                    <option className='sen'  key={option.id} value={option.ScenerioName}>
                        {option.ScenerioName}

                    </option>
                    ))}
                </select>
        </div>

        <div className='table1'>
            <table>
                <thead>
                    <th>Vehicle Id</th>
                    <th>Vehicle Name</th>
                    <th>Position X</th>
                    <th>Position Y</th>
                    <th>Speed</th>
                    <th>Direction</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                {/* <tbody> */}
                <tbody>
                    {data.map((d, i) => (
                        d.id === editId ?
                        <tr>
                        <td>{d.id}</td>
                        <td><input type="text" value={uvehivle} onChange={e=>usetVehicle(e.target.value)}/></td>
                        <td><input type="text" value={uSpeed} onChange={e=>usetSpeed(e.target.value)}/></td>
                        <td><input type="text" value={uPositionX} onChange={e=>usetPositionX(e.target.value)}/></td>
                        <td><input type="text" value={uPositionY} onChange={e=>usetPositionY(e.target.value)}/></td>
                        <td><input type="text" value={uDirection} onChange={e=>usetDirection(e.target.value)}/></td>
                        <td><button onClick ={handleVehicleUpdate}>Update</button></td>
                        </tr>
                    :
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.VehicleName}</td>
                        <td>{d.Speed}</td>
                        <td>{d.positionX}</td>
                        <td>{d.positionY}</td>
                        <td>{d.Direction}</td>
                    
                        <td> 
                        <button onClick={() => handleVehicleEdit(d.id)}><GrEdit/></button>
                        </td>
                        <td>
                        <button type='button' onClick = {e => handleVehicleDelete(d.id)}><AiFillDelete/></button>
                        </td>
                        
                    </tr> 
                ))} 
            </tbody>
            </table>
            <div className='btns'>
                <button className='Start' > Start Simulation </button>
                <button className='Stop'> Stop Simulation</button>   
            </div>
          <div className='chart'> 
            <Chart/>
          </div>
           
              
        </div>
       
       </div>
       
       </>
    )
}

export default Home;