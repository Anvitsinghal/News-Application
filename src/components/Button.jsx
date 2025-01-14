import React from 'react'
import PropTypes from 'prop-types'


function Button({text,settext}) {
 const seturll=()=>{
         console.log({text});
        
         settext(text);
  
}
  return (
    <>
    <div>
      <button onClick={seturll} style={{color:'white', backgroundColor:'grey' ,height:'50px',width:'220px',gap:'100px'}}>{text}</button>
    </div>
    </>
  )
}

export default Button

