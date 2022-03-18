import Image from 'next/image'
import boars from '../images/boars.gif'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'

function Header() {
  const { user } = useMoralis()

  return (
    <div>
      <div className=" s sticky top-0 z-50 grid grid-cols-5 items-end bg-green-900 p-5 lg:grid-cols-6 lg:items-center  
      border-b-emerald-500 ">
        <div className="relative mx-auto hidden h-24 w-24 lg:inline-grid">
          <Image
            className="rounded-full"
            objectFit="cover"
            src={boars}
            layout="fill"
          />
        </div>
        <div className=" col-span-4 text-left text-green-200 shadow-sm lg:text-center">
          <div className="relative h-48 w-48 rounded-full border-8 border-green-500 lg:mx-auto">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl">{user.getUsername()} where you BEEN ??</h1>
          <h2 className="truncate text-5xl font-bold ">{user.getUsername()}</h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  )
}

export default Header
