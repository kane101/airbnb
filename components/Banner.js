import Image from 'next/image';
const Banner = () => {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
            <Image src='https://links.papareact.com/0fm' layout='fill' objectFit='cover' />
            <div className='absolute inset-1/2 transform w-full text-center -translate-x-1/2 -translate-y-1/2'>
                <p className='text-m sm:text-lg'>Not sure where to go? Perfect.</p>
                <button
                    className='text-purple-500 bg-white px-10 py-4 rounded-full shadow-md my-3 font-bold
                hover:shadow-xl active:scale-90 transition-transform duration-150'
                >
                    I'm Flexible
                </button>
            </div>
        </div>
    );
};

export default Banner;
