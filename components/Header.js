import { useState } from 'react';
import Image from 'next/image';
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useRouter } from 'next/dist/client/router';

const Header = ({ placeholder }) => {
    const [searchInput, setSearchInput] = useState('');
    const [guestNumber, setGuestNumber] = useState(1);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const router = useRouter();
    const selectionRange = {
        startDate,
        endDate,
        key: 'selection',
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                guestNumber,
            },
        });
    };

    const resetInput = () => {
        setSearchInput('');
        setStartDate(new Date());
        setEndDate(new Date());
    };

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            {/* {left} */}
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image
                    onClick={() => router.push('/')}
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>
            {/* {middle} */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shaodw-sm'>
                <input
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                    type='text'
                    placeholder={placeholder || 'Start your search'}
                    className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400'
                />
                <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
            </div>
            {/* {right} */}
            <div className='flex space-x-4 items-center justify-end text-gray-500'>
                <p className='hidden md:inline-block whitespace-nowrap'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />
                <div className='flex border-2 p-2 space-x-2 rounded-full items-center'>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>

            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#FD5B61']}
                        onChange={handleSelect}
                    />
                    <div className='flex items-center border-b mb-4'>
                        <h2 className='text-2xl flex-grow font-semibold'>Number of Guest</h2>
                        <UsersIcon className='h-5' />
                        <input
                            value={guestNumber}
                            onChange={(e) => setGuestNumber(e.target.value)}
                            type='number'
                            min={1}
                            className='w-12 p-2 text-lg outline-none'
                        />
                    </div>
                    <div className='flex'>
                        <button className='flex-grow text-gray-500' onClick={resetInput}>
                            Cancel
                        </button>
                        <button onClick={search} className='flex-grow text-red-400'>
                            Search
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
