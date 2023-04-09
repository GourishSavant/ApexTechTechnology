import './chart.css'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";


    
  
  

function Chart(){
const data = [
    {
    }
    ];

    return (
       
        <div className='chart1'>
        <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300}
        //   data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />

        </LineChart>
      </ResponsiveContainer>
          
        </div>

    )
}

export default Chart;