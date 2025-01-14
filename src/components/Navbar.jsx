// import React from 'react'
// import styled from 'styled-components'
// import Button from './Button'

// function Navbar({setfiltereddata , urll , seturl}) {
//     const filter=(e)=>{
//         const searchvalue=e.target.value;
//         console.log(searchvalue);
//         if(searchvalue==='')setfiltereddata(null);
//         else{
//         setfiltereddata(searchvalue);
  
//         }
//     }

//     const handleSearch = (e) => {
//         e.preventDefault(); // Prevent the default form submission
//         seturl(urll); // Set the input value to the URL state
//         console.log('Search value submitted:', urll);
//       };
    

  

//   return (
//     <Stylingg>
//       <nav   className="navbar navbar-expand-lg navbar-dark bg-dark" style={{width:'100%'}}>
//   <a className="navbar-brand" href="#">Navbar</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
  
//   <div  id="navbarSupportedContent">
//     <Fle>
//     <Button text="INDIA"/>
//   <Button text="DELHI"/>
//   <Button text="INTERNATIONAL"/>
//   <Button text="SPORTS"/>
//   </Fle>
//     <form   className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
//       <input  value={urll} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={filter} />
//       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
// </nav>
//     </Stylingg>
//   )
// }

// export default Navbar

// const Stylingg = styled.div`
//       display:flex;
//       justify-content:space-between;
      
// `
// const Fle=styled.div`
//  display:flex;
//       justify-content:space-between;
    
// `
import React from 'react';
import styled from 'styled-components';
import Button from './Button';

function Navbar({ setfiltereddata, urll, seturl,settext }) {
  const filter = (e) => {
    const searchvalue = e.target.value;
    console.log('Input value changed:', searchvalue); // Log the input value
    if (searchvalue === '') {
      setfiltereddata(null);
    } else {
      setfiltereddata(searchvalue);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission
    console.log('Form submitted. Current input value:', urll); // Log the input value on submit
    seturl(urll); // Update URL state
  };

  return (
    <Stylingg>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ width: '100%' }}>
        <a className="navbar-brand" href="#">
         -:News:-
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbarSupportedContent">
          <Fle>
          <Button text="INDIA" settext={settext}/>
            <Button text="DELHI" settext={settext}/>
            <Button text="INTERNATIONAL" settext={settext}/>
            <Button text="SPORTS" settext={settext}/>
            <Button text="Politics" settext={settext}/>
            <Button text="Business" settext={settext}/>
            <Button text="Technology" settext={settext}/>
            <Button text="Health" settext={settext}/>
            <Button text="Entertainment" settext={settext}/>
            <Button text="Sports" settext={settext}/>
            <Button text="Science" settext={settext}/>
            <Button text="Lifestyle" settext={settext}/>
            <Button text="Crime" settext={settext}/>
            <Button text="Muzaffarnagar" settext={settext}/>
            <Button text="Uttar Pradesh" settext={settext}/>
          </Fle>
          <form className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
          
          </form>
        </div>
      </nav>
    </Stylingg>
  );
}

export default Navbar;

const Stylingg = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Fle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  gap:10px;

`;
