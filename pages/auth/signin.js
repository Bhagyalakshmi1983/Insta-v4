import React from "react";
import { getProviders, signIn } from "next-auth/react"
import Header from "../../Components/Header"

export default function signin({providers}) {
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img className="hidden object-cover rotate-6 md:inline-flex md:w-48" src="https://jetdigital.in/wp-content/uploads/2021/08/instagram-6560837_640.png" alt="instagram-image" />
        <div className="">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex flex-col items-center">
              <img className="w-28 object-cover" src="https://i.imgur.com/1vXHxLD.webp" alt="" />
              <p className="text-sm italic my-10 text-center">This app is created for learning purpose</p>
              <button onClick={()=>signIn(provider.id,{callbackUrl:"/"})}
                className="bg-red-500 rounded-lg p-3 text-white hover:bg-red-600">Sign in with {provider.name}</button>
  </div>
))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props:{providers}
  }
}
