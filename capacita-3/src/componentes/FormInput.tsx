
interface props{
    label: string;
    placeHolder?: string;
    tipo?: string;
}

export default function FormInput({label, placeHolder, tipo}:props){
    return (
        <div>
            <label>{label}</label>
            <input className="border-2 border-red-500 w-[100%] rounded-md p-2" placeholder={placeHolder} type={tipo} />
        </div>
    );
}
