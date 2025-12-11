"use client"

import { useRouter } from "next/navigation";

import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const redirecionar = () => {
    router.push("/home");
  };

  return (
    <main className="flex w-full">
      <div className="w-[50vw] h-[100vh] bg-primary">
        <section>
          <Image
            className="mt-8 ml-8"
            src="/omega2.png"
            alt="Omega Logo"
            width={80}
            height={80}
            priority
          />
          <h1 className="font-bold text-5xl text-white justify-center flex -m-8">Omega Board</h1>
        </section>
        <section className="w-[50vw] h-[80vh] bg-primary flex flex-col justify-center items-center gap-6">
            <h2 className="font-bold text-3xl text-white">Entrar</h2>
          <input className="bg-foreground text-white p-2 w-[20vw] h-[6vh] rounded-lg border-white border-1" type="text" placeholder="Email / Username" />
          <input className="bg-foreground text-white p-2 w-[20vw] h-[6vh] rounded-lg border-white border-1" type="password" placeholder="Senha" />
          <input className="bg-button text-black p-2 w-[20vw] h-[6vh] rounded-lg border-blue-500 border-1 cursor-pointer hover:opacity-80 transition-opacity" type="button" value="Entrar" onClick={redirecionar}></input>
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
