import React from 'react'
export default function About(props) {

  // const [myStyle, setMystyle] =  useState({
  //   color : "black",
  //   backgroundColor:"#042743",
  // })
  // const [btnText , setBtnText] = useState("Enable Dark Mode")
  // const toggleStyle = ()=>{
  //   if(myStyle.color === "black"){
  //      setMystyle({
  //       color : "white",
  //       backgroundColor:"#042743",
  //       border:'0.2px solid white' 
  //     })
  //     setBtnText("Enable Light Mode")
  //   }
  //   else{
  //     setMystyle({
  //       color : "black",
  //       backgroundColor:"white", 
  //     })
  //     setBtnText("Enable Dark Mode")
  //   } 
  // }


  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#042753' : 'white'
  }
  return (
    <div className="Container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h2 className="mx-3">About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="card">
          <div className="card-header" id="headingOne" style={myStyle}>
            <h5 className="mb-0">
              <button className="btn btn-link" type="button"   data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
              </button>
            </h5>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample" style={myStyle}>
            <div className="card-body" style={myStyle}>
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count 
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo" style={myStyle}>
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free To Use</strong> 
              </button>
            </h5>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample" style={myStyle}>
            <div className="card-body" style={myStyle}>
              TextUtils is a free chracter counter tool that provides instant character count & word count 
              statistics for a given text. TextUtils reports the number of words and characters . Thus it is suitable for writing text with word/ character
              limits. 
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree"style={myStyle}>
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
              </button>
            </h5>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample" style={myStyle}>
            <div className="card-body" style={myStyle}>
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. it suits to Count Characters in facebook, bolg, books, excel document, pdf document, essays etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <button onClick={toggleStyle} type="button" class="btn btn-primary my-3">{btnText}</button>
      </div>  */}
    </div>
  )
}
