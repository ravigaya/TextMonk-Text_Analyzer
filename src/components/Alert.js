import React from 'react';

export default function Alert(props) {
  return (
  
   <div style={{height:'50px'}}>
    {props.alert &&<div>
     <div class={`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">
          <strong>{props.alert.Type}</strong>: {props.alert.msg}
          
      </div>
      </div>}
      </div>
  )
}
