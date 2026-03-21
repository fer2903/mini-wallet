type Props = {
    placeholder: string;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({placeholder, type = "text", onChange}: Props) => {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            className="border p-2 w-full mb-3"
            onChange={onChange}
        />
    )
}

export default Input;