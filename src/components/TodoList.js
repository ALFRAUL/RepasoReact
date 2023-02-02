import React,{useState} from 'react'
import { Todo } from './Todo'

export const TodoList = () => {
    const [tarea, setTarea] = useState('')
    const [todos, settodos] = useState([])
    const handleInput = (e) => {        
        if(e.key==='Enter'){            
            settodos([
                ...todos,
                {tarea,
                 isActive:false,
                 id:generateUUID()}
            ]);
            setTarea('')
        }
    }
    const deleteTodo = ()=>{
        console.log("En algun momento borrare la tarea")
    }

    function generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }
    
  return (
    <div className='TodoList'>
        <input 
        placeholder='Ingrese la nueva tarea'
        name="tarea"
        value={tarea}
        onChange={(e)=>{setTarea(e.target.value)}}
        onKeyDown={handleInput}        
         />
        {
            todos.map((todo)=>(
                <Todo 
                    key={todo.id} 
                    tarea={todo.tarea} 
                    isActive={todo.isActive}
                    onClick={deleteTodo}
                />
            ))
        }
    </div>
  )
}
