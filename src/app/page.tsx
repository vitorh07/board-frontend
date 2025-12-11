import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full">
      <div className="w-[50vw] h-[100vh] bg-primary">
        <h1 className="font-bold text-5xl text-white justify-center flex p-4">Omega Board</h1>
        <section className="w-[50vw] h-[100vh] bg-primary flex flex-col justify-center items-center gap-6">
          <h2 className="font-bold text-2xl text-white">Entrar</h2>
          <input className="bg-foreground text-white p-2 w-[20vw] rounded-lg border-white border-1" type="text" placeholder="Email / Username" />
          <input className="bg-foreground text-white p-2 w-[20vw] rounded-lg border-white border-1" type="password" placeholder="Senha" />
          <button className="bg-button text-black p-2 w-[20vw] rounded-lg border-blue-500 border-1">Entrar</button>
        </section>
      </div>
      <div className="w-[50vw] h-[100vh] justify-center items-center flex">
        <Image
          className=""
          src="/omega.png"
          alt="Omega Image"
          width={500}
          height={500}
          priority
        />
      </div>
    </main>
  );
}
