import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex-1">
      <header className="flex gap-4 justify-end p-4"> {/*cabeçalho*/}
        <Link href="main">MAIN</Link> 
        <Link href="main">ABOUT-ME</Link> 
        <Link href="main">PROJECTS</Link> 
        <Link href="main">CONTACT</Link> 
      </header>

    <div className="flex-1 p-24 border"> {/*Tela principal*/}
      <h1 className="text-5xl ">RAFAEL MARINS  </h1>
      <p className="text-lg"> DEVELOPER / DEVOPS </p>

      <div className="mt-124">
      <button className="p-2 mr-4 border">View Projects</button>
      <button className="p-2 border">View Contact</button>
       </div>
      </div>

      <div className="flex-1 p-24 border mt-12"> {/*Sobre mim*/}
        <header className="text-5xl">Who I'm?</header>
        <p className="text-lg">ABOUT-ME</p>

        
      <div className="flex mt-22 border ">
      <Image
      src="/imagens/foto.jpeg"
      alt="foto de perfil"
      width={256}
      height={256}
      className="w-70 h-90 object-cover" 
       />
       <h1 className="p-4">
        <text className="text-2xl">Olá!</text> 
        <br></br>Sou Rafael Marins, atualmente sou técnico em Análise e Desenvolvimento de Sistemas e estudante de ciência da computação na FACAPE. 
        <br></br>Entusiasta da tecnologia e do desenvolvimento de software.Tenho experiência acadêmica e prática com Java, Spring Boot, MySQL, APIs REST, Git e GitHub, além de conhecimentos em desenvolvimento Front-End com HTML, CSS, JavaScript, React e Next.js. 
        <br></br>Atualmente, venho direcionando meus estudos para Backend com Java e Spring boot, além disso também DevOps, explorando tecnologias e práticas como Docker, CI/CD, Terraform e Kubernetes.
        <br></br>Gosto de transformar ideias em projetos reais e utilizo meus projetos como forma de colocar em prática o que aprendo, buscando sempre escrever código mais organizado, seguro e escalável.
        Estou constantemente buscando evoluir minhas habilidades, aprender novas tecnologias e me preparar para atuar profissionalmente na área de desenvolvimento de software, com foco em Backend Java e DevOps.
        </h1>

        
      </div>

        <div className="border mt-22 p-4">
          <h1>Trajetória</h1>
          <p>01 — O começo

Formação em Análise e Desenvolvimento de Sistemas

Foi durante minha formação que tive meus primeiros contatos com programação, bancos de dados e desenvolvimento de aplicações. Comecei explorando diferentes tecnologias e descobrindo em qual área gostaria de me aprofundar.

HTML CSS JavaScript MySQL Firebase

02 — Explorando o desenvolvimento

Do Front-End ao desenvolvimento de aplicações

Passei a desenvolver projetos utilizando tecnologias modernas de Front-End, enquanto aprendia conceitos importantes de programação, APIs e integração entre sistemas.

React Next.js Tailwind CSS REST API

03 — Foco em Backend

Java + Spring Boot

Com o tempo, comecei a direcionar meus estudos para Backend. Java e Spring Boot se tornaram parte importante da minha jornada, permitindo que eu trabalhasse com APIs, banco de dados, autenticação, regras de negócio e arquitetura de aplicações.

Java Spring Boot JPA Hibernate MySQL

04 — Construindo projetos reais

Aprender fazendo

Passei a transformar os conhecimentos adquiridos em projetos próprios, como sistemas de reserva e aplicações de gerenciamento. Esses projetos me ajudaram a entender melhor como diferentes partes de uma aplicação se conectam.

Backend Frontend Database Authentication

05 — Entrando no DevOps

Do código para produção

Atualmente, estou expandindo meus conhecimentos para DevOps, estudando como automatizar, empacotar, testar e disponibilizar aplicações.

Git GitHub Docker CI/CD Terraform Kubernetes

06 — Próximo passo

Continuar evoluindo.

Meu objetivo é continuar evoluindo como desenvolvedor, aprofundando meus conhecimentos em Backend Java e DevOps e construindo projetos cada vez mais completos, seguros e escaláveis.

LEARNING = TRUE</p>
          
        </div>
      
      </div>

      <div className="flex-1 p-24 border mt-12"> {/*PROJETOSS E TECNOLOGIA AINDA*/}

      <div>
        <h1 className="text-5xl">Projects and <br></br>Technology </h1>
        
        <div className="mt-22 flex gap-12 justify-center ">
        
        <div className="border p-12">
          <h1>Frontend</h1>
          <p>React</p>
          <p>Next.js</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>         
        </div>
        
        <div className="border p-12">
          <h1>Backend</h1>
          <p>Java</p>
          <p>Spring boot</p>
          <p>MySql</p>
          <p>API Rest</p>
          <p>Jpa/Hibernate</p>
        </div>
        
        <div className="border p-12">
          <h1>DevOps</h1>
          <p>Github Actions</p>
          <p>Docker</p>
          <p>Terraform</p>
          <p>Kubernetes</p>
        </div>
      
      </div>

      <div>
        <h1 className="text-5xl mt-22">Wich i did ?</h1>
        
        <div className="flex justify-center gap-12 mt-26"> 
        
        <div className="border p-12">
          <h1>reservaLab</h1>      
        </div>
        
        <div className="border p-12">
          <h1>Tools</h1>
          <p>Visual Studio</p>
          <p>Inteliji</p>
          <p>Docker</p>
          <p>MySQL</p>
        </div>
        </div>
      

        <div className="flex gap-2 items-center mt-20">
          
        <button className="border p-2 ">Click here to view more</button>
        <Image 
          src="/imagens/GITHUB.LOGO.png"
          alt="foto logo"
          width={128}
          height={128}
          className="w-12 h-12 object-cover rounded-full"
          />
        </div>

      </div>
    </div>
  </div>

        <div className="flex-1 p-24 border mt-12"> {/*CONTATO*/}
          <h1 className="text-5xl ">My Contacts</h1>
          <p>Do you liked? Make contact to me</p>


        
          <div className="mt-22">
            <h1 className="text-xl">There are my links</h1>

            <div className="mt-12">
            <h1 className="mb-8 border">My Gmail</h1>
            <h1 className="mb-8 border">My GitHub</h1>
            <h1 className="mb-8 border">My GitLab</h1>
            <h1 className="mb-8 border">My Linkedin</h1>
            </div>
            


          </div>
        </div>
        <h1 className="mt-6 mb-2">@RafaelMarins 2026</h1>

    
    

    
      <main>
      </main>
    </div>
  );
}
