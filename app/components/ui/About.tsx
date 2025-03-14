import Image from "next/image";
import "../assets/About.css";

export const About = () => {
  return (
    <div className="about flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Sobre
      </h3>
      <Image
        className="about_img -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="/pagode.jpg"
        alt="Eu"
        width={1440}
        height={1800}
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Aqui está{" "}
          <span className="underline decoration-[#4169E1]">um pouco</span> da
          minha história
        </h4>
        <p className="text-sm">
          Sou um entusiasta da programação com três anos de experiência 💻, e a
          cada dia que passa, minha paixão por frontend se intensifica. Adoro
          criar interfaces envolventes e dinâmicas, onde animações e design se
          entrelaçam para proporcionar experiências memoráveis aos usuários
          🎨✨. Atualmente, estou em busca de uma oportunidade como
          desenvolvedor júnior 🚀, onde possa aplicar minhas habilidades e
          continuar aprendendo em um ambiente colaborativo. Minha trajetória no
          ambiente corporativo me permitiu desenvolver não apenas habilidades
          técnicas, mas também competências de liderança 👥, tendo liderado uma
          equipe de 20 pessoas. Essa experiência me ensinou a importância da
          comunicação clara e eficaz, e nunca tive dificuldades em me apresentar
          para grandes públicos 🎤. Estou animado para embarcar em novos
          desafios e contribuir com minha criatividade e dedicação! 🌟
        </p>
      </div>
    </div>
  );
};
