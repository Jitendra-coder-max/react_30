import React ,{useState}from 'react'

const Form = () => {

    const [formData, setFormdata]= useState({name:'', email:'', password:''})

    const [errors, setErrors] = useState({})


    const handleChange =(e)=>{

        setFormdata({...formData, [e.target.name]: e.target.value})

        // setFormdata( prevForm=>( {...prevForm,[e.target.name]:e.target.value}))
        // setFormdata(prevForm => ({...prevForm, [e.target.name]: e.target.value}))
        
     
    }

    

    const validate = ()=>{

let newErrors = {}

if(!formData.name){

    newErrors.name = 'Name is required'
}

if(!formData.email){

    newErrors.email= 'Email is required'
}


if(!formData.password){
    newErrors.password = 'passsword is required'

}

else if(formData.password.length<6){

    newErrors.password= 'Password length should be greater than 6'
}

return newErrors
    }

    const handleSubmit =(e)=>{
        e.preventDefault()


      const validationErrors =  validate()
console.log(validationErrors)
      if(Object.keys(validationErrors).length>0){

        setErrors(validationErrors)
      }


      else{

      
  
      console.log('Form submitted successfully!', formData);

      }
      // Reset form or handle successful submission
    
    }
  return (
    <div>Form

 <form onSubmit={handleSubmit}>
   <label>Name</label>
        <input  type='text'    name='name' placeholder='Enter your name' value={formData.name}  onChange={handleChange}/>
        {errors.name && <p>{errors.name}</p>}
        <label>Email</label>
        <input  type="text"  name='email' placeholder='Enter email'  value={formData.email} onChange={handleChange}/>
       {errors.email && <p>{errors.email}</p>}
        
        <br/>
        <label>Password</label>
        <input type="text"  name="password" placeholder='Enter password' value={formData.password}  onChange={handleChange} />
        {errors.password && <p>{errors.password}</p>}
        <button  type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form