

import  React,{useState}  from 'react'

export default function AboutTextMonk(props) {

  //   const[MyStyle, setMyStyle]= useState({

  //       color: 'black',
  //       backgroundColor:'white',
  //       border: 'black 1px solid'

  //   })

  //  const [btnText, setbtnText] = useState('enable dark mode ')
  //  const[borderBottom,setborderBottom]=useState({
           
  //                         borderBottom: 'solid 1px black'

  //  })
  //  const[boder,setborder]=useState({       
  //   border: 'solid 1px black'
  //   })


    let MyStyle = {
      Color: props.mode === 'dark'?'#463a3a': 'black',
      backgroundColor: props.mode ==='light'?'white': '#463a3a'
       
      }

    // let ToggleContents=()=>{

    //        if(MyStyle.color==='black') {
             

    //         // console.log('button pressed');
    //              setMyStyle({
    //              color: 'white',
    //              backgroundColor:'black',
    //              border: 'white 1px solid'              
    //           })
    //            setborder({
    //                     border:'white 1px solid'
    //            })
    //            setborderBottom({
    //              borderBottom:'white 1px solid'

    //            })
    //           setbtnText('enable normal mode')
             
    //         }
    //           else{
    //               setMyStyle({
    //                 color: 'black',
    //                 backgroundColor:'white',
    //                 border: 'black 1px solid'

    //               })
    //               setborder({
    //                 border:'black 1px solid'
    //                   })
    //                 setborderBottom({
    //                     borderBottom:'black 1px solid'
    //                   })

    //               setbtnText('enable dark mode')

    //     }
              
    // }
       
    return (

        <div className='container'  >
        
            <div className=" container card text-center  my-5" style={MyStyle} >
                <div className="card-header" >
                    Text Monk
                </div>
                <div className="card-body">
                    <h5 className="card-title" >About Text monk</h5>
                    <p className="card-text" style={MyStyle}>Text Monk is text utility app which let to convert your manupulate your text in following ways: 
                     upper case and lower case manupulation <br/>
                     Happy texing </p>
                      
                </div>
                
                
            </div>
            
  
            {/* <button type='button'  onClick={ToggleContents}  className='btn btn-success'>{btnText}</button>
         */}
        </div>
    )
    }
