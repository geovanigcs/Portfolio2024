"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircle } from "./BackgroundCircle";
import Link from "next/link";

export const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Olá, me chamo Geovani",
      "Sou desenvolver",
      "Também sou Designer",
      "<Amo codar/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        className="relative rounded-full h-36 w-36 mx-auto object-cover"
        src="https://avatars.githubusercontent.com/u/142992351?v=4"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Engenheiro de Software
        </h2>
        <h1 className="text-5xl lg:text-6x1 font-semibold scroll-px-10">
          <span>{text}</span>
          <Cursor cursorColor="#4169E1" />
        </h1>
        <div className="pt-5">
            <Link href={"Sobre"}><button className="heroButton">Sobre</button></Link>
            <Link href={"Experiência"}><button className="heroButton">Experiência</button></Link>
            <Link href={"Skills"}><button className="heroButton">Skills</button></Link>
            <Link href={"Projetos"}><button className="heroButton">Projetos</button></Link>
        </div>
      </div>
    </div>
  )
}
