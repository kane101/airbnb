import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import { format } from 'date-fns';
import Map from '../components/Map';

const Search = ({ searchResults }) => {
    const router = useRouter();

    const { location, startDate, endDate, guestNumber } = router.query;
    const formatedStartDate = format(new Date(startDate), 'dd MMMM yy');
    const formatedEndDate = format(new Date(endDate), 'dd MMMM yy');
    const range = `${formatedStartDate} - ${formatedEndDate}`;

    return (
        <div className='flex h-screen flex-col justify-between'>
            <Header placeholder={`${location} | ${range} | ${guestNumber} guest`} />
            <main className='flex flex-grow mx-auto'>
                <section className='pt-14 px-6 md:px-10'>
                    <p className='text-xs'>
                        300+ Stays - {range} - for {guestNumber} guests
                    </p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More Filters</p>
                    </div>
                    <div className='flex flex-col'>
                        {searchResults?.map((item, index) => (
                            <InfoCard key={index} data={item} />
                        ))}
                    </div>
                </section>
                <section className='hidden xl:inline-flex min-w-[600px]'>
                    <Map searchResults={searchResults} />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Search;

export async function getServerSideProps() {
    const searchRequest = await fetch('https://links.papareact.com/isz');
    const searchResults = await searchRequest.json();
    return {
        props: {
            searchResults,
        },
    };
}
