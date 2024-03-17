import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const IconText = ({iconName,displayText, active, targetLink})=>{
    return (
    <Link to={targetLink}>
    <div className="flex text-white items-center ml-6 cursor-pointer">

            <div><Icon icon={iconName}color={active?"white":"gray"} width="23"></Icon></div>
            <div className={`${active?"text-white":"text-gray-400"} pl-3  hover:text-white`}>{displayText}</div>

        </div>    
    </Link>
    )
}

export default IconText;