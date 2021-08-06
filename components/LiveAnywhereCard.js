import Image from 'next/image';

const LiveAnywhereCard = ({ cardsData: { img, title } }) => {
    return (
        <div className='cursor-pointer hover:scale-105 transition transform duration-200 ease-out'>
            <div className='relative w-80 h-80'>
                <Image src={img} layout='fill' className='rounded-xl' />
            </div>
            <h3>{title}</h3>
        </div>
    );
};

export default LiveAnywhereCard;
