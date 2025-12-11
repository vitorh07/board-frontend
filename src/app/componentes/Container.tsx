export default function Container({children, title}: {children: React.ReactNode, title?: string}) {
    return(
        <div className="flex items-center">
            <div className="w-[15vw] h-[70vh] bg-button rounded-xl shadow-lg overflow-hidden flex flex-col m-4">
                {title && <h1 className="text-black text-2xl font-bold p-4">{title}</h1>}
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </div>
    )
}