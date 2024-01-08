import { useState } from "react"
import "./CodeGenerator.css"
const CodeGenerator = () => {
 const [text, setText] = useState("hello")

 const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`

  return (
    <div>
     <div className="CodeGenerator">
      <h2>Code Generator App</h2>
      <div className="animation"></div>
      <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter your text." type="text" />
      <img width={"150px"} src={apiUrl} alt="QRCode_"/>
     </div>
    </div>
  )
}

export default CodeGenerator
