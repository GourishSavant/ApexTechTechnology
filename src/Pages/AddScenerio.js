import { useNavigate } from 'react-router-dom';
import './AddScenerio.css'
import React,{useState} from 'react';
import axios from 'axios';

function AddScenerio(){
    const [values,setValues] =useState({
        ScenerioName:' ',
        ScenerioTime:' ',
        count:0
    })
    const [counter,setCounter] =useState('')

    const handleReset =(event) =>{
        setCounter("");
        window.location.reload();
    }
    const navigate = useNavigate();

    const handleSubmit =(event) =>{
        event.preventDefault()
        axios.post('http://localhost:3030/posts',values)
        .then(res => {
            alert("Data Added successfully");
            navigate('/');
        })
        .catch(err => console.log(err))

    }
function goBack(){
    navigate('/allscenerios')
}


    return(
        <>
        <div className="main-container">
        <div className='item1'>
            <div className='item1-2'>
            <h3>Scenerio/add</h3>
            <h1>Add Scenerio</h1>
            </div>
            <div className='item2' > 
                <form  >
                    <label>Scenerio Name</label>
                    <input  type='text' name='ScenerioName' placeholder='Test Scenerio'
                    onChange={e =>setValues({...values,ScenerioName:e.target.value})}></input>
                    <label>Scenerio Time</label>
                    <input type ='text' name='ScenerioTime' placeholder='Time in Second'
                    onChange={e =>setValues({...values,ScenerioTime:e.target.value})}></input>
                    <label name='count' placeholder='Time in Second'
                    onChange={e =>setValues({...values,count:e.target.value})}></label>
                </form>
            </div>
            <div className='item3'>
                <button className='btn btn1' onClick={handleSubmit}> Add </button>
                <button  className='btn btn2' type ="button" onClick={handleReset}> Reset</button>
                <button  className='btn btn3' onClick={goBack}> Go Back</button>
            </div>
        </div>
        </div>
        </>
        
    )
}
export default AddScenerio;