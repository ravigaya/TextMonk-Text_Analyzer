import React, { useState } from 'react'




export default function Textarea(props) {
  const [text, setText] = useState('');
  let words = text.split(' ').filter((e)=>{return e.length!==0});

  const clickUp = () => {

    let newtext = text.toUpperCase();
    setText(newtext);
    props.ShowAlert("Converted to UpperCase","success");
    

  }
  const clickLo = () => {

    let newtext = text.toLowerCase();
    setText(newtext);
    props.ShowAlert("Converted to Lower Case","success")

  }
  // const clickCopy = () => {


  //   let mybox = text.select()

  //   setText(navigator.clipboard.writeText(mybox))
  //   props.ShowAlert("Copied to ClipBoard","Success")

  // }
  const handleextraSpaces = () => {

    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.ShowAlert("Extra Spaces Removed","success")


  }


  const clear = () => {
      setText("");
     props.ShowAlert("Text Cleared","warning")

  }
  // helps to write the contents on text area 
  const onChange = (e) => {

    setText(e.target.value);

  }



  return (
    <div>

      <>

        <div className='container mb-3 mx-3 my-4' >
        

          <h3 >{props.heading}</h3>
          <textarea value={text} onChange={onChange} className="form-control " id="my-box" id="exampleFormControlTextarea1" rows="8" style={{ width: "700px" }}>
          </textarea>
          <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={clickUp}>Convert upperCase</button>
          <button type="button"  disabled={text.length===0}className="btn btn-secondary mx-1 my-2" onClick={clickLo}>Convert LowerCase</button>
          {/* <button type="button" className="btn btn-primary mx-1 my-2" onClick={clickCopy}>Copy all text </button> */}
          <button type="button"  disabled={text.length===0} className="btn btn-danger mx-1 my-2" onClick={clear}>Clear</button>
          <button type="button"  disabled={text.length===0} className="btn btn-danger mx-1 my-2" onClick={handleextraSpaces}>HandleSaces </button>

        </div>


        <div className='container my-4 mx-3'>

          <h1>Your text summery</h1>
          <p>{text.length} chracters and {words.length} words </p>
          <p> You can read above text: </p>

          <div className={`text-${props.text}`}>
            <table className='table'  >
              <thead>
                <tr>
                  <th scope="col">Time Taken to read </th>
                  <th scope="col">Slow Read (125 wpm)</th>
                  <th scope="col">Average Read(350 wpm) </th>
                  <th scope="col">Fast Read(450 wpm)</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <th scope="row">Seconds</th>
                  <td>{0.480 * words.length}</td>
                  <td>{0.192 * words.length}</td>
                  <td>{0.144 * words.length}</td>
                </tr>

              </tbody>
            </table>
            <h2>Preview</h2>

            <p> {text}</p>


          </div>
        </div>


      </>
    </div>


  )
}
