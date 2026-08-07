import Image from "next/image";
import Link from "next/link";
import Button from "next/Button"


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
       <h1 className="p-4"> [13:45, 05/08/2026] Rafael Marins: Dá tempo de eu casar no mesmo tempo que você tenta superar esse quase nada
            [13:45, 05/08/2026] Rafael Marins: Atualmente você está dando liberar seu butic9
            [13:45, 05/08/2026] Rafael Marins: E da minha família só Zé Pedro tá solteiro oficialmente falando que ele deve ter cinco pretendentes escondido dos pais
            [13:45, 05/08/2026] Rafael Marins: Não
            [13:45, 05/08/2026] Rafael Marins: Eu já respondi isso ontem
            [13:45, 05/08/2026] Rafael Marins: Maluco como é que tu vai namorar se tu não arruma
            [13:45, 05/08/2026] Rafael Marins: As mina não vem até nós não cara
            [13:45, 05/08/2026] Rafael Marins: Dá tempo de eu casar no mesmo tempo que você tenta superar esse quase nada
            [13:45, 05/08/2026] Rafael Marins: Atualmente você está dando liberar seu butic9
            [13:45, 05/08/2026] Rafael Marins: E da minha família só Zé Pedro tá solteiro oficialmente falando que ele deve ter cinco pretendentes escondido dos pais
            [13:45, 05/08/2026] Rafael Marins: Não
            [13:45, 05/08/2026] Rafael Marins: Eu já respondi isso ontem
            [13:45, 05/08/2026] Rafael Marins: Maluco como é que tu vai namorar se tu não arruma
            [13:45, 05/08/2026] Rafael Marins: As mina não vem até nós não cara
        </h1>

        
      </div>

        <div className="border mt-22 p-60">
          <h1>Trajetória</h1>
          
        </div>
      
      </div>

      <div className="flex-1 p-24 border mt-12"> {/*PROJETOSS E TECNOLOGIA AINDA*/}

      <div>
        <h1 className="text-5xl">Projects and <br></br>Technology </h1>
        
        <div className="mt-22 flex gap-12 justify-center ">
        
        <div className="border p-12">
          <h1>Development</h1>
          <p>React Native</p>
          <p>Next.js</p>
          <p>Java Script</p>
          <p>Type script</p>
          <p>SQL</p>         
        </div>
        
        <div className="border p-12">
          <h1>What im studying now</h1>
          <p>DevOps</p>
          <p>Java</p>
          <p>C</p>
        </div>
        
        <div className="border p-12">
          <h1>Tools</h1>
          <p>Visual Studio</p>
          <p>Inteliji</p>
          <p>Docker</p>
          <p>MySQL</p>
        </div>
      
      </div>

      <div>
        <h1 className="text-5xl mt-22">Wich i did ?</h1>
        
        <div className="flex justify-center gap-12 mt-26"> 
        
        <div className="border p-12">
          <h1>Development</h1>
          <p>React Native</p>
          <p>Next.js</p>
          <p>Java Script</p>
          <p>Type script</p>
          <p>SQL</p>         
        </div>
        
        <div className="border p-12">
          <h1>What im studying now</h1>
          <p>DevOps</p>
          <p>Java</p>
          <p>C</p>
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
