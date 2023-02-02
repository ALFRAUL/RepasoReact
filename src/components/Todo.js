import React from 'react'

export const Todo = ({tarea, isActive,onClick}) => {
  return (
    <div>{isActive?<span>✓</span>:null} 
        {tarea} 
        <button onClick={onClick}>
            X
        </button>
    </div>
  )
}
