import LiveAnywhereCard from './LiveAnywhereCard';

const LiveAnywhere = ({ cardsData }) => {
    return (
        <section>
            <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
            <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
                {cardsData?.map((data, index) => (
                    <LiveAnywhereCard key={index} cardsData={data} />
                ))}
            </div>
        </section>
    );
};

export default LiveAnywhere;
