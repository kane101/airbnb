import ExploreCard from './ExploreCard';

const Explore = ({ exploreData }) => {
    return (
        <section className='pt-6'>
            <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {exploreData?.map((data, index) => (
                    <ExploreCard key={index} exploreCardData={data} />
                ))}
            </div>
        </section>
    );
};

export default Explore;
