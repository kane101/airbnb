import React from 'react';

const Footer = () => {
    return (
        <div className='grid md:grid-cols-4 gap-y-10 px-10 md:px-32 py-14 bg-gray-100 text-gray-600'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold uppercase'>About</h5>
                <p>How about Airbnb</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold uppercase'>Community</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>Its a pretty awesome clone</p>
                <p>Refferals accepted</p>
                <p>Papa fam</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold uppercase'>Host</h5>
                <p>Papa React</p>
                <p>Presents</p>
                <p>Zero to Full Stack Hero</p>
                <p>Hundreds of students</p>
                <p>Join Now</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold uppercase'>Support</h5>
                <p>Help Centre</p>
                <p>Trust & Safety</p>
                <p>Say Hi Youtube</p>
                <p>Easter Eggs</p>
                <p>For the win</p>
            </div>
        </div>
    );
};

export default Footer;
