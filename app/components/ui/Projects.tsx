import "../assets/Projects.css";
import Image from "next/image";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "/Dispositivos.jpg",
      title: "UPS Clone",
      description:
        "Projetinho aqui que não tem nada, mas irá servir para dizer que tem!",
    },
    {
      id: 2,
      image: "/Dispositivos2.jpg",
      title: "Projeto 2",
      description: "Descrição do projeto 2.",
    },
    {
      id: 3,
      image: "/Dispositivos3.jpg",
      title: "Projeto 3",
      description: "Descrição do projeto 3.",
    },
    {
      id: 4,
      image: "/Dispositivos4.jpg",
      title: "Projeto 4",
      description: "Descrição do projeto 4.",
    },
    {
      id: 5,
      image: "/Dispositivos5.jpg",
      title: "Projeto 5",
      description: "Descrição do projeto 5.",
    },
  ];

  return (
    <div className="projects h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projetos
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-screen flex-shrink-0 snap-start flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <Image
              className="projects_img"
              src={project.image}
              alt={`Project ${project.id}`}
              width={600}
              height={400}
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#4169E1]/50">
                  Case Study {project.id} of {projects.length}:
                </span>
                {project.title}
              </h4>
              <p className="text-lg text-center md:text-left">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#4169E1]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
};
