type Props = {
   label: string;
   onClick?: () => void;
}

const Button = ({label, onClick}: Props) =>{
    return (
        <button className="bg-blue-500 text-white p-2 w-full rounded" onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;
