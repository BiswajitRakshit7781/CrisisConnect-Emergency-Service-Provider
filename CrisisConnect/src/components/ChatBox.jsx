import React from 'react'
import "./ChatBox.css"
import { useState } from 'react'

const ChatBox = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [btnVisible, setBtnVisible] = useState(true)

    const buttonHide = () => {
        setIsVisible(true);
        setBtnVisible(false)
    }

    const handleHideAlert = () => {
        setIsVisible(false);
        setBtnVisible(true);
    }
    return (
        <div className="absolute bottom-10 right-10">
            {isVisible &&
                <div className="chatbox h-96 w-80 bg-white">
                    <div className="chatbox-header flex items-center justify-between px-4 py-2 mb-2 border-b bg-blue-300">
                        <h3>Chat</h3>
                        <button onClick={handleHideAlert} className='text-red-700 chatbtn'>X</button>
                    </div>
                    <div className="messages flex">
                        <p className="reply">hello</p>
                        <p className="sending">hii</p>
                    </div>
                    <div className='send flex gap-4'>
                        <input className='sendmsg' placeholder="Enter Message" />
                        <button className='sndbtn'>Send</button>
                    </div>
                </div>
            }
            {btnVisible && <button onClick={buttonHide} className='bg-blue-300 chat border-none rounded-xl w-24 h-12 shadow-xl shadow-slate-800 cursor-pointer'><h3>Chat Now</h3></button>}
        </div>
    )
}

export default ChatBox
