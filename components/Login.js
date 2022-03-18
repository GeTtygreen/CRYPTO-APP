import React from 'react'
import Image from 'next/image'
import NFT from '../images/NFT.gif'
import GETTY from '../images/GETTY.jpeg'
import { useMoralis } from 'react-moralis'

export default function Login() {
  const { authenticate } = useMoralis()
  return (
    <div className="relative bg-black text-white">
      <div className="absolute z-50 flex h-4/6 w-full flex-col items-center justify-center space-y-4">
        <Image
          className="rounded-full object-cover"
          src={NFT}
          height={300}
          width={300}
        />

        <button
          onClick={authenticate}
          className="animate-pulse rounded-lg bg-gradient-to-r from-green-900 
    to-green-500 p-5 font-bold"
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="h-screen w-full blur-md ">
        <Image src={GETTY} layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}
