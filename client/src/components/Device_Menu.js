import Device_card from "./device_card";
import { useRef, useState, useEffect } from "react";
import Axios from "axios";

function Device_Menu() {
  const device_id = useRef();
  const device_name = useRef();
  const device_type = useRef();

  const [devices, setdevices] = useState([]);

  useEffect(() => {
      // fetch request
      Axios.get("http://localhost:3001/Devices").then(res=>{
      const data = res.data
      console.log(res.data)
      setdevices(res.data);
    })
  }, [devices]);

/*
  const device_list = [
    {id:1, status:"ON", name:"LED", type:"light"},
    {id:2, status:"ON", name:"AC", type:"air_cond"},
    {id:3, status:"OFF", name:"BLIND", type:"blind"},
    {id:4, status:"OFF", name:"FAN", type:"fan"},
    {id:5, status:"OFF", name:"MOTOR", type:"motor"},
    {id:6, status:"OFF", name:"TV", type:"device"},
    {id:7, status:"OFF", name:"BLIND", type:"blind"},
    {id:8, status:"OFF", name:"FAN", type:"fan"},
    {id:9, status:"OFF", name:"MOTOR", type:"motor"},
    {id:10, status:"OFF", name:"TV", type:"device"},
    {id:11, status:"OFF", name:"blind", type:"blind"},
    {id:12, status:"OFF", name:"FAN", type:"fan"},
    {id:13, status:"OFF", name:"blind", type:"blind"},
    {id:14, status:"OFF", name:"LAMP", type:"light"},
    {id:15, status:"OFF", name:"FAN", type:"fan"},
    {id:16, status:"OFF", name:"MOTOR", type:"motor"},
    {id:17, status:"OFF", name:"TV", type:"device"},
    {id:18, status:"OFF", name:"BLIND", type:"blind"}
  ]
 */
  function handle_Add_button(){
    console.log(device_name.current.value);
    console.log(device_id.current.value);
    // create request
    Axios.post("http://localhost:3001/createDevice",{
      id: device_id.current.value,
      name: device_name.current.value,
      type: device_type.current.value,
      status:false
    }).then(res=>{
      
      // fetch request
      Axios.get("http://localhost:3001/Devices").then(res=>{
        const data = res.data
        //console.log(res.data)
        //device_list.push(res.data)
        setdevices(res.data);
      })

    })
}

function handle_card_click(id){
  console.log("clicked",id);
  //edit request
 Axios.post("http://localhost:3001/toogle",{
  "id":id
  }).then(res=>{
    //console.log(res)
  }) 

}
 
// const handle_card_click = (event) => {
//   // Handle the click event
//   console.log('Device card clicked!', event);
// };

/* // fetch request
Axios.get("",).then(res=>{
  //console.log(res)
})

//delete request
Axios.post("",).then(res=>{
  //console.log(res)
})
 */


    return (
      <main className="main">
        <div className="main__container">
            <div className="main__container-form">

                <text className="container-form--title">Register new device</text>
                <form className="container-form--form">
                    <input 
                    id="name" 
                    placeholder="Input Name" 
                    className="form--input"
                    ref={device_name}
                    />
                    <input
                    id="id" 
                    placeholder="Input ID" 
                    className="form--input"
                    ref={device_id}
                    />
                    <input
                    id="type" 
                    placeholder="Input Type" 
                    className="form--input"
                    ref={device_type}
                    />
                    <button 
                    id="add_button" 
                    className="form--button"
                    title="Add"
                    type="button"
                    onClick={handle_Add_button}
                    >Add</button>
                </form>
            </div>
            <div className="main__container-card">
            {devices.map( device=>{
              return(
                <Device_card               //passing props to the component
                key={device._id}
                id={device.id}
                name={device.name}
                status={device.status}
                type={device.type}
                onClick={()=>handle_card_click(device.id)}
                />
              )
            })
            }
            
            </div>
        </div>    
      </main>
      
    );
  }
  



export default Device_Menu;