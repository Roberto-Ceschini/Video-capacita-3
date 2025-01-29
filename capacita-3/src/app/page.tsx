import Botao from "@/componentes/Botao";
import FormInput from "@/componentes/FormInput"

export default function Home() {
  return (
    <div className="border-2 border-red-600 w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="border-2 border-green-500 w-[70%] h-[60%] rounded-2xl flex items-center justify-center">
        <div className="border-2 border-blue-700 w-[90%] h-[90%] flex flex-col">
          <h1 className="border-2 border-black text-center">Login</h1>
          <form className="border-2 border-yellow-600 flex flex-col gap-4 w-[100%]">
            <FormInput label="Usuário" placeHolder="email@email"/>
            <FormInput label="Senha" placeHolder="Senha" tipo="password"/>
            <Botao titulo="Login" className="bg-purple-500"/>
            <Botao titulo="Cadastrar" className="bg-purple-500"/>
          </form>
        </div>
      </div>
    </div>
  );
}
