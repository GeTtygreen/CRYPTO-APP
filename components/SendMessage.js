import React from 'react'
import { useMoralis } from 'react-moralis'
import { useState } from 'react'

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis()
  const [message, setMessage] = useState('')

  const sendMessage = (e) => {
    e.preventDefault()

    if (!message) return

    const Messages = Moralis.Object.extend('Messages')
    const messages = new Messages()

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get('ethAddress'),
      })
      .then(
        (message) => {
          // The object was saved successfully.
        },
        (error) => {
          console.log(error.message)
        }
      )

    endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' })
    setMessage("");
  }
  return (
    <form className="fixed bottom-10 flex w-11/12 max-w-2xl rounded-full border-4 border-emerald-300 bg-green-900 px-6 py-4 opacity-80 shadow-xl">
      <input
      className=" flex-grow bg-transparent pr-5 text-white placeholder-gray-500 outline-none"
      value={message}
      type="text"
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a message ${user.getUsername()}...`}
      />
      <button
        type="submit "
        onClick={sendMessage}
        className="font-bold text-emerald-400 "
      >
        Send
      </button>
    </form>
  )
}

export default SendMessage
