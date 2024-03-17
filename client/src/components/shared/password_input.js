const PasswordInput = ({label,placeholder,className,value,setValue})=>{
    return <div className={`flex flex-col space-y-2 font-bold w-full ${className}`}>

    <label for={label}>{label}</label>

    <input type="password" id = {label}
    placeholder={placeholder}
    value={value}
    onChange={(e)=>{setValue(e.target.value)}}
    className="p-2 text-white focus:bg-white focus:text-black bg-transparent border border-solid border-gray-600 rounded placeholder-gray-500 italic"
    />

    </div>;
};

export default PasswordInput;