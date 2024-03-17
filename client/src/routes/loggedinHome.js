import {Icon} from '@iconify/react'
import IconText from '../components/shared/icontext';
import { Link } from 'react-router-dom';
import {Howl, Howler} from 'howler';
import { useContext, useState } from 'react';
import songContext from '../contexts/songContext';
import LoggedInComponent from '../containers/loggedinComponent';


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

const LoggedInHomeComponent = ()=>{

    const [soundPlayed, setsoundPlayed] = useState(null)
    const {currentSong,setCurrentSong} = useContext(songContext)

    const playSound = (songsrc)=>{
        if(soundPlayed) soundPlayed.stop()
        let sound = new Howl({
            src: [songsrc],
            html5: true
        });
        setsoundPlayed(sound);
        sound.play();
        console.log(sound)
    }

    return (
       <LoggedInComponent activePage={'home'}>

            <div className='body h-9/10 w-full  bg-black bg-opacity-50 overflow-auto'>
                <CardrowView title="Focus" cardData={cardsData1}/>
                <CardrowView title="Featured" cardData={cardsData1}/>
            </div>
            
            </LoggedInComponent>
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

export default LoggedInHomeComponent;