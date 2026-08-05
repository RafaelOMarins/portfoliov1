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


    {/* TESTAR F0T0 DEPOIS
    <div className="flex justify-end">
      <Image
      src="/imagens/foto.jpeg"
      alt="foto de perfil"
      width={256}
      height={256}
      className="w-64 h-64 rounded-full object-cover" 
       />
      </div>
      */}
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
    
    

    
      <main>
      </main>
    </div>
  );
}
