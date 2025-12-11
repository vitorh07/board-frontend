"use client"

import{useRouter} from 'next/navigation'

import {
    LogOut
} from 'lucide-react' //Icones

import Image from  'next/image' // é quem sobe as imagens

const estilosdoincone = {
    size: 34,
    color: "#CFC8FF",
    strokeWidth: 2.5
}

export default function Menu(){
     const router = useRouter()

     //Criar uma função e redirecionar

     return(
          <div className="w-screen h-[15vh] bg-secondary flex items-center justify-around">
               <div className="flex flex-col items-center gap-2">
                    <Image
                    src="/omega2.png"
                    alt="logo"
                    width={100}
                    height={100}
                    />  
               </div>

               <div className="font-bold text-5xl text-white justify-center flex p-4">
                    <h2>Quadro</h2>
               </div>

               <div>
                    <span 
                    onClick={()=>{router.push('/login')}}
                    className="flex gap-2 px-2 hover:bg-gray-900 rounded-xl p-2 w-full cursor-pointer justify-start">
                         <LogOut 
                         size={estilosdoincone.size} 
                         color={estilosdoincone.color}
                         strokeWidth={estilosdoincone.strokeWidth}/>
                    </span>
               </div>
          </div>
     )
}