const PasswordInput = ({label,placeholder,className})=>{
    return <div className={`flex flex-col space-y-2 font-bold w-full ${className}`}>

    <label for={label}>{label}</label>

    <input type="password" id = {label}
    placeholder={placeholder}
    className="p-2 border border-solid border-gray-600 rounded placeholder-gray-500 italic"
    />

    </div>;
};

export default PasswordInput;