import React, { useState } from 'react'

export const TrafficLight = () => {
    const [colors,setColors] = useState([
        {id:'red'},
        {id:'yellow'},
        {id:'green'},
        {id:'blue'}
    ]);
    const [colorIluminated,setColorIluminated]=useState('');     

  return (
    <div className='luz-container'>
       { 
       colors.map(({id})=>(
            <div 
            key={id} 
            className={`luz ${id} ${colorIluminated==id?'iluminado':''}`} 
            onClick={()=>{setColorIluminated(id)}}>                
            </div>
        ))
        }
    </div>
  )
}
