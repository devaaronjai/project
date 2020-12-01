import React, { useState } from 'react'

const RedirectPage = () => {
    const [input,setInput] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault()

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="start typing..." value={input} onChange={e=>setInput(e.target.value)}   />
              <button>Submit</button>
            </form>
            <p>Try checking your Page or using different words</p>
        </div>
    )
}

export default RedirectPage
