"use client"

import "../assets/Contact.css";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  nome: string;
  assunto: string;
  email: string;
  mensagem: string;
};

export const Contact = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:geovanigcs.dev@gmail?assunto=${formData.assunto}&body=Olá, meu nome é${formData.nome}. ${formData.mensagem} (${formData.email})`;
  };
  return (
    <div className="h-screen flex flex-col text-center relative md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contato
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Eu tenho exatamente o que você precisa.{" "}
          <span className="decoration-[#4169E1]/50 underline">
            Vamos conversar!
          </span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#4169E1] h-7 animate-pulse" />
            <p className="text-2xl">+55(61)98328-0727</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#4169E1] h-7 animate-pulse" />
            <p className="text-2xl">geovanigcs.dev@gmail.com</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("nome")}
              placeholder="Nome"
              type="text"
              className="contactInput"
            />
            <input
              {...register("email")}
              placeholder="E-mail"
              type="email"
              className="contactInput"
            />
          </div>
          <input
            {...register("assunto")}
            placeholder="Assunto"
            type="text"
            className="contactInput"
          />
          <textarea
            {...register("mensagem")}
            placeholder="Mensagem"
            className="contactInput"
          />
          <button
            type="submit"
            className="py-5 px-10 rounded-md text-black font-bold bg-[#4169E1] text-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
