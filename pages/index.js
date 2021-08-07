import Head from 'next/head';
import Banner from '../components/Banner';
import Explore from '../components/Explore';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import LiveAnywhere from '../components/LiveAnywhere';

export default function Home({ exploreData, cardsData }) {
    return (
        <>
            <Head>
                <title>Kanes Airbnb</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='flex h-screen flex-col justify-between'>
                <Header />
                <main className='flex-grow'>
                    <Banner />
                    <div className='max-w-7xl mx-auto px-8 sm:px-16'>
                        <Explore exploreData={exploreData} />
                        <LiveAnywhere cardsData={cardsData} />
                        <LargeCard
                            img='https://links.papareact.com/4cj'
                            title='the greatest Outdoors'
                            description='Wishlist curated by Airbnb'
                            buttonText='Get Inspired'
                        />
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export async function getStaticProps() {
    const request = await fetch('https://links.papareact.com/pyp');
    const exploreData = await request.json();

    const request2 = await fetch('https://links.papareact.com/zp1');
    const cardsData = await request2.json();
    return {
        props: { exploreData, cardsData },
    };
}
