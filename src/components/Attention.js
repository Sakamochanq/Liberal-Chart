import React from 'react'

const Attention = () => {
  return (
    <div className="attention-container">
        <div className="attention-contents">
            <img className="cry-logo" src="https://em-content.zobj.net/source/microsoft/310/smiling-face-with-tear_1f972.png" alt="Crying face emoji"/>
            <br />
            <h3>Oops... Sorry！</h3>
            <br />
            <b>Responsive of this size is not supported.</b>
            <p className="attention-text">このサイズのレスポンシブには対応していません。</p>
        </div>
    </div>
  )
}

export default Attention