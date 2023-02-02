import React,{useState} from 'react'

export const Form = () => {
    
    const [form, setform] = useState({
        email:'',
        password:'',
        edad:''
    })
    const handleForm = (e)=>{
        setform(
            { ...form,
              [e.target.name]:e.target.value,
            }
        )
    }

  return (
    <form>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input 
        type="email" 
        className="form-control" 
        id="exampleInputEmail1"
        name="email"
        value={form.email}
        onChange={handleForm} 
        />  
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input 
        type="password" 
        className="form-control" 
        id="exampleInputPassword1"
        name="password"
        value={form.password}
        onChange={handleForm}
        />
    </div>
    <div className="mb-3">
        <label 
        htmlFor="exampleInputAge1" 
        className="form-label">Edad</label>
        <input 
        type="password" 
        className="form-control" 
        id="exampleInputAge1"
        name="edad"
        value={form.edad}
        onChange={handleForm}
        />
    </div>
    <button 
        type="submit"
        className="btn btn-primary"
    >Submit
    </button>
    </form>
  )
}
