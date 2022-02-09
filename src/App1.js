

import AboutTextMonk from './components/AboutTextMonk';
import Textarea from './components/Textarea';
import TextcontentsNav from './components/TextcontentsNav';
import React,{useState} from 'react';
import Alert from './components/Alert';

 //importing router v6
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App1() {

const[Mode,setMode]=useState('dark');
const[Text,setText]=useState('light');
const [pal, setpal] = useState('dull');

const[Changemode,setChangemode]=useState('Enable Dark Mode');


const [alert, setAlert] = useState(``);


 const ToggleMode=()=>{
   
       if(Mode==='light'){
          setMode('dark'); 
          setText('light');
          document.body.style.backgroundColor='#8D8381';
          document.body.style.color='white';
          setChangemode('Disbale Dark Mode');
          ShowAlert('Dark Mode has been enabled','success');
          setpal(<span class="badge bg-primary mx-2">primary</span>
          ); 
       }
       else{
         setMode('light');
         setText('dark');
         document.body.style.backgroundColor='white';
         document.body.style.color='black';  
         setChangemode('Enable Dark Mode');
         ShowAlert('Dark Mode has been Disabled','success');
         setpal( <span class="badge bg-secondary mx-2"></span>
         ); 
       }
          console.log();

 }
 const ShowAlert = (message, type)=>{
   setAlert({
   msg: message,
   Type: type
   })

   setTimeout(() => {
      setAlert(null)
      
   }, 2000);
   }

  return (

    <Router>
      <div >
        
         <TextcontentsNav about="AboutTextMonk"  mode={Mode}  togglemode={ToggleMode} text={Text}  Changemode={Changemode}  pal={pal} /> 
        
          <Alert alert={alert}/> 
         
       

           
           <Routes>
           <Route path="/about" element={<AboutTextMonk mode={Mode}/>} />
           <Route path="/" element={<Textarea  ShowAlert={ShowAlert} heading="Try TextM characters counter words counter remove extra spaces and get Analysis " mode={Mode}/>} />
          
          </Routes>
         
          </div>
          </Router> 
     );
}

export default App1;
