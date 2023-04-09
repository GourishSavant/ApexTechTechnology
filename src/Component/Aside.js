import './Aside.css';
import AsideBarData from '../Data/AsiddeBarData'
import { NavLink } from "react-router-dom"

function Aside(){
    return(
        <>
        <div className='aside-container'>
            {
            AsideBarData.map((item,index)=>{
                return(
                    <div key={index} className="navbar">
                        <NavLink to={item.path} style={{ textDecoration: 'none' }} className='link'  activeclassName="active" >
                        <div className="navitem">{item.title}</div>
                        </NavLink>
                    </div>
                )
            })
            }
        </div>
        </>
    )


}

export default Aside;