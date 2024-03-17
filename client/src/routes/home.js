import {Icon} from '@iconify/react'
import IconText from '../components/shared/icontext';
import { Link } from 'react-router-dom';

const cardsData1 = [ 
    {
        title:"Hello",
        description:"This is description",
        imgUrl:"https://www.gingercrush.com/cdn/shop/products/playlist-closeup_650x.jpg?v=1679727733",
    }, 
    {
        title:"Hello1",
        description:"This is description",
        imgUrl:"https://www.gingercrush.com/cdn/shop/products/playlist-closeup_650x.jpg?v=1679727733"
    }, 
    {
        title:"Hello2",
        description:"This is description",
        imgUrl:"https://www.gingercrush.com/cdn/shop/products/playlist-closeup_650x.jpg?v=1679727733"
    }, 
    {
        title:"Hello3",
        description:"This is description",
        imgUrl:"https://www.gingercrush.com/cdn/shop/products/playlist-closeup_650x.jpg?v=1679727733"
    }, 
    {
        title:"Hello4",
        description:"This is description",
        imgUrl:"https://www.gingercrush.com/cdn/shop/products/playlist-closeup_650x.jpg?v=1679727733"
    },
];

const HomeComponent = ()=>{
    return (
        <div className='flex h-full w-full'>
            <div className='leftpanel h-full bg-black w-1/5'>
            <div className="logo p-4 pb-4 border-b border-solid border-gray-200 w-full flex justify-center">
            <Icon icon="el:spotify" width="40"/>
            </div>
            <div className='mt-8'><IconText iconName="ic:round-home" displayText="Home" active/></div>
            <div className='mt-5'><IconText iconName="ic:round-search" displayText="Search"/></div>
            <div className='mt-5'><IconText iconName="fluent-mdl2:library" displayText="Library"/></div>
            <div className='mt-12'><IconText iconName="material-symbols:add-box" displayText="Create Playlist"/></div>
            <div className='mt-5'><IconText iconName="icon-park-solid:like" displayText="Liked Songs"/></div>
            </div>
            <div className='rightbody h-full w-4/5'>
            <div className='navbar w-full h-1/10 bg-gray-900 flex items-center justify-end pr-10'>
                <Link to='/signup'><div className='text-gray-400 hover:text-white cursor-pointer'> Sign up</div></Link>
                <div className='login-button ml-4 p-6 bg-white flex items-center justify-center h-1/2 rounded-full cursor-pointer'>
                <Link to='/login'><div className='text-gray-600 hover:text-black font-semibold'>Login</div></Link>
                </div>
                </div>
            <div className='body h-9/10 w-full  bg-black bg-opacity-50 overflow-auto'>
                <CardrowView title="Focus" cardData={cardsData1}/>
                <CardrowView title="Featured" cardData={cardsData1}/>
            </div>
            </div>
            </div>
    )
}

const CardrowView = ({title,cardData})=>{
    return(
        <div className='cards-1row p-5'> 
                    <div className='font-bold pt-4 pb-3 pl-8 text-2xl'>{title}</div>
                    <div className='flex justify-around space-x-4'>
                    {/* <Card title="Hello" description="This is description"/>
                    <Card title="Hello" description="This is description"/>
                    <Card title="Hello" description="This is description"/>
                    <Card title="Hello" description="This is description"/>
                    <Card title="Hello" description="This is description"/> */}
                    { 
                    cardData.map((item)=>{
                        return(
                            <Card 
                            title={item.title} 
                            description={item.description}
                            imgUrl={item.imgUrl}
                            />

                        );
                    })
                }
                    </div>
                </div>
    )
}

const Card = ({title, description,imgUrl})=>{
    return(
        <div className='p-4 text-white bg-gray-800 w-1/5 rounded-md bg-opacity-30 cursor-pointer'>
            <img className="w-full p-1 rounded-md"alt="img" src={imgUrl}/>
            <div className='title-desc'>
                <div className='title font-semibold'>{title}</div>
                <div className='desc text-sm text-gray-200'> {description}</div>
            </div>
        </div>
    )
}

export default HomeComponent;