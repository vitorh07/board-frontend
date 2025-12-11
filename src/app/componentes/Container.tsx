"use client"

import{
    CirclePlus
} from 'lucide-react'

const estilosdoincone = {
    size: 48,
    color: "#3A2E5C",
    strokeWidth: 2.5
}

import { useState } from "react";

export default function Container({children, title}: {children: React.ReactNode, title?: string}) {

    const [mostraModal, setMostraModal] = useState(false)
        const [concluiu, setConcluiu] = useState(false)
    
        const clique = () => {
            setMostraModal(!mostraModal)
        }
    
        const concluido = () => {
            setMostraModal(!mostraModal)
            setConcluiu(true)
            setTimeout(() => {
                setConcluiu(false)
            }, 10000)
        }

    return(
        <div className="flex items-center">
            <div className="w-[15vw] h-[70vh] bg-button rounded-xl shadow-lg overflow-hidden flex flex-col m-4">
                {title && <h1 className="text-black text-2xl font-bold p-4">{title}</h1>}
                <div className="flex-1">
                    {children}
                </div>
                <CirclePlus
                onClick={clique} 
                className="self-end m-4 cursor-pointer hover:opacity-70"
                         size={estilosdoincone.size} 
                         color={estilosdoincone.color}
                         strokeWidth={estilosdoincone.strokeWidth}/>
            </div>

            {mostraModal &&

                <div className="absolute inset-0 z-10 w-screen h-screen bg-black/50 flex items-center justify-center">
                    <div className="h-[25vh] rounded-lg shadow-md flex flex-col gap-2 p-4 bg-white">
                        <h1>Adicione um novo card</h1>

                        <div className="w-full">
                            <input
                                type="text"
                                placeholder="Titulo do card"
                                className="px-4 py-2 rounded-md shadow-sm outline-2 outline-red-500 text-black font-semibold cursor-pointer"
                            />

                        </div>

                        <div className="flex w-full justify-center">
                            <input
                                type="button"
                                value="Fechar"
                                onClick={clique}
                                className="px-4 py-2 m-2 rounded-md shadow-sm bg-red-500 text-white font-semibold cursor-pointer"
                            />
                            <input
                                type="button"
                                value="Concluir"
                                onClick={concluido}
                                className="px-4 py-2 m-2 rounded-md shadow-sm bg-green-500 text-black font-semibold cursor-pointer"
                            />
                        </div>
                    </div>
                </div>}

            {concluiu &&

                <div className="absolute inset-0 w-screen h-screen z-10 flex justify-end p-8">
                    <div className="bg-gray-300 text-black p-4 h-fit flex gap-8 rounded-xl">
                        <h1>Item enviado com sucesso!</h1>
                        <input
                            type="button"
                            value="X"
                            className="rounded-full bg-gray-700 text-white w-8"
                        />
                    </div>

                </div>
            }
        </div>
    )
}