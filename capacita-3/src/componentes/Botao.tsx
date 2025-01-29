
import Link from "next/link";

interface props {
    titulo: string;
    className: string;
}
export default function Botao({titulo, className}: props){
    return (
        <button className={`flex p-6 w-[100%] border-2 rounded-lg border-purple-600 ${className}`}>
            {titulo}
        </button>
    );
}