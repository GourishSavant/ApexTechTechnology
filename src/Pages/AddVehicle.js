import './AddVehicle.css'
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddVehicle(){
    const [data, setData] = useState([]);
    const [record, setRecords] = useState(data);
    const [count, setCount] = useState(0);
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const initialState = 0;
    useEffect(()=> {
 
        axios.get('http://localhost:3030/posts')
        .then(res => {
          setData(res.data)
          setRecords(res.data);
        })
        .catch(err => console.log(err))
      },[])
  
    const handleReset = () => {
      setCount(initialState);
      window.location.reload();
    };
  
    const [values,setValues] =useState({
        ScenerioName:' ',
        VehicleName :' ',
        Speed:' ',
        positionX:' ',
        positionY:'  ',
        Direction:'  '


    })
    const navigate = useNavigate();

    const VehicleSubmit =(event) =>{
        event.preventDefault()
        axios.post('http://localhost:3030/addData',values)
        .then(res => {
            alert("Data Added successfully");
            navigate('/');
        })
        .catch(err => console.log(err))

    }
    function goBack(){
        navigate('/allscenerios')
    }
    useEffect(() => {
        axios.get('http://localhost:3030/posts')
          .then((response) => setOptions(response.data))
          .catch((error) => console.log(error));
      }, []);


    
    return(
        <>
        <div className="vehicle-container">
            <div className='vehicle1'>
                <h3>Vehicle/add</h3>
                <h1>Add Vehicle</h1>
            </div>

            <div className='vehicle2-container' > 
                <form >
                    <div className='vehicle-sub1'>
                            
                            <label className='label11'>Scenerio List</label>
                            <select className='list' id="options" onChange={e =>setValues({...values,ScenerioName:e.target.value})}>
                            <option value="">Select an option</option>
                            {options.map((option) => (
    
                            <option className='option-1' key={option.id} value={option.ScenerioName}>
                                {option.ScenerioName}
                            </option>
                    
                    ))}
                </select>
                            <div>
                            <label className='label12'>Vehicle Name</label>
                            <input className='input1' type ='text' name='VehicleName' placeholder='Target abc'
                                     onChange={e =>setValues({...values, VehicleName:e.target.value})}
                           ></input>
                   
                            </div>
                            <div>
                            <label className='label13'>Speed</label><br></br>
                            <input className='input2' type ='text' name='Speed' placeholder='2'
                             onChange={e =>setValues({...values,Speed:e.target.value})}
                           ></input>
                            </div>
                    </div>

                    <div className='vehicle-sub2'>
                            <label className='label11'>Psition X</label>
                            <input className='input3'type='text'   name='positionX' placeholder='1000'
                            onChange={e =>setValues({...values,positionX:e.target.value})} ></input>

                            <label className='label12'>Position Y</label>
                            <input className='input4' type ='text' name='positionY' placeholder='20'
                            onChange={e =>setValues({...values,positionY:e.target.value})}></input>

                            <label className='label13' name='Direction'>Direction</label>
                            <select className='select2' onChange={e =>setValues({...values,Direction:e.target.value})} >
                                <option className='option-1' >Towrds</option>
                                <option className='option-1' >Backwards</option>
                                <option className='option-1' >Upwards</option>
                                <option className='option-1'>Downwards</option>
                            </select>
                    </div>
                </form>
            </div>

            <div className='vehicle3'>
                <button className='btn btn1' onClick={VehicleSubmit}> Add </button>
                <button  className='btn btn2' onClick ={handleReset}> Reset</button>
                <button  className='btn btn3' onClick ={goBack}> Go Back</button>   
            </div>
           
        </div>
        </>

    )


}

export default AddVehicle;