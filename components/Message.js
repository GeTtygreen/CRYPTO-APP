import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import TimeAgo from 'timeago-react'


function Message({ message }) {
  const { user } = useMoralis()

  const isUserMessage = message.get('ethddress') === user.get('ethAddress')
  return (
    <div
      className={`flex items-end space-x-2 relative  ${
        isUserMessage && 'justify-end'
      }`}
    >
        <div className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`}>
            <Avatar username={message.get("username")}/>
        </div>
      <div
        className={`flex space-x-4 rounded-lg p-3 ${
          isUserMessage
            ? 'rounded-br-none bg-emerald-300'
            : ' rounded-bl-none bg-green-100'
        }`}
      >
<TimeAgo
className={`text-[10px] italic text-gray-400 ${isUserMessage && "order-first pr-1"}`}
  datetime={message.createdAt}
//   locale='zh_CN'
/>

        <p>{message.get('message')}</p>
      </div>
      {/* time stamp */}
    <p className={`absolute -bottom-5 text-xs ${isUserMessage ? "text-purple-500" : "text-emerald-200"}`}>
        {message.get("username")}
    </p>
    </div>
  )
}

export default Message
