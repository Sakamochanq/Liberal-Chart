import React from 'react'
import './Attention.css'

const Attention = () => {
  return (
    <div className="attention-container">
        <div className="attention-contents">
            <img style={{margin:"30% 0px 20px 0px", pointerEvents:"none"}} width={"100px"} className="cry-logo" src="https://em-content.zobj.net/source/microsoft/310/smiling-face-with-tear_1f972.png"/>
            <br />
            <h3>Oops... Sorry！</h3>
            <br />
            <b>Responsive of this size is not supported.</b>
            <p style={{marginTop:"10px"}}>このサイズのレスポンシブには対応していません。</p>
        </div>
    </div>
  )
}

export default Attention