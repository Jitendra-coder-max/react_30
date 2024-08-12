import React, { useState } from 'react'

const Upload = () => {

    const [file, setFile] = useState(null)

    const handleFileChange =(e)=>{
       const selectedFile   = e.target.files[0]

       setFile(selectedFile)

              
    }
  return (
    <div>Upload

        <input  type='file'  accept='image/*'  onChange={handleFileChange}/>

             {file && 
             <img  src={URL.createObjectURL(file)}  alt='Uploaded image'/>
             }
    </div>
  )
}

export default Upload
