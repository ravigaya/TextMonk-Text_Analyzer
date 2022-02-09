import React from 'react'
// import { robots } from './robots'
import Cards from './Cards'

export default function Cardslist({robots}) {

    
    return (
    
        
      <div>

          {
      robots.map((user,i)=>
      {
    return (<Cards id={robots[i].id} 
        name= {robots[i].name} 
        username={robots[i].username}
        email={robots[i].email}/>
      )})

    }
    {/* {cardArray} */}
    {/* //     <Cards id={robots[0].id} name= {robots[0].name} username= {robots[0].username} email={robots[0].email}/>
    //    <Cards id={robots[1].id} name= {robots[1].name} username= {robots[1].username} email={robots[1].email}/>
    //    <Cards id={robots[2].id} name= {robots[2].name} username= {robots[2].username} email={robots[2].email}/>
    //    <Cards id={robots[3].id} name= {robots[3].name} username= {robots[3].username} email={robots[3].email}/> */}
        </div>
    )
}
