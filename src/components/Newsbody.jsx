import React from 'react'
import styled from 'styled-components'
import Cards from './Cards'
function Newsbody( {data}) {
  return (
    <Back >
         <Cards data={data}/>
    </Back>
  )
}

export default Newsbody

const Back = styled.div`
  width: 100%;
  min-height: 100vh; /* Ensure the height adapts dynamically */
  background-image: url("/newsbackground.jpg"); /* Path to your background image */
  background-size: cover; /* Scale the image to cover the container */
  background-repeat: no-repeat; /* Prevent tiling */
  background-position: center; /* Center the image */
  background-attachment: fixed; /* Keep the image fixed during scroll */
  overflow-x: hidden; /* Prevent horizontal scroll */
  box-sizing: border-box; /* Include padding and border in width/height */
`;

