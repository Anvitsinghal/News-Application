
import './App.css';
import Navbar from './components/Navbar';
import Newsbody from './components/Newsbody';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'




function App(props) {
  const [text,settext]=useState('');
   const[urll,seturl]=useState('');
  const[data,setdata]=useState(null);
  const[loading,setloading]=useState(false);
  const[error,seterror]=useState(null);
  const[filtereddata,setfiltereddata]=useState();
  const BASE_URL=`https://newsapi.org/v2/everything?q=${text}&apiKey=253b5afd229e442fbd17a6b2af2a8525`;
  
  
  useEffect(()=>{
    const fetchingdata= async()=>{
      setloading(true);
          try{
          
           const response = await fetch(BASE_URL);
           const json = await response.json();
           console.log(json);
           setdata(json);
           setloading(false);
           setfiltereddata(json);
          }
          catch(error){
            seterror("Unable to fetch data:(");
          }
    }
    if(text.trim()){
    fetchingdata();
    }
    
  } , [text])

  if(error) return <div>{error}</div>
  if(loading)return <div>Loading.....</div>
  
  return (
   <>
       <Navbar setfiltereddata={setfiltereddata} urll={urll} seturl={seturl} settext={settext}/>
       <Newsbody data={filtereddata} />
       
   
   </>
  );
}

export default App;
