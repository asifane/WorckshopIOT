import { useRef } from "react"; 
import Axios from "axios";


//passing props to the component's function

function Device_card({key,id,name,status,type,onClick}) {




    return (
  
    <div id="card" className="card" style={{backgroundColor: status? "#74A35E":""}} onClick={onClick}>
        <div className="card__container" >
            <div className="card__status">
                <text className="card__status--title" style={{color: status? "white":"black" }}>Status</text>
                <text className="card__status--value" style={{color: status? "white":"black" }}>{status? "ON":"OFF"}</text>
            </div>

            <div className="card__logo">
                <img id="logo" src={'/images/'+type+'.svg'} alt="device" className="card__logo--img"/>
                <text className="card__logo--title" style={{color: status? "white":"black" }}>{name}</text>
                <text className="card__logo--subtitle">{id}</text>
            </div>
        </div>
    </div>

    );
  }
  



export default Device_card;