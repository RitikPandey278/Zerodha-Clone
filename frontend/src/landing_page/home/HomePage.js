import React from 'react'
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Hero from './HeroHome';
import Award from './AwardHome';

function HomePage() {
    return ( 
        <>
            
             <Hero />
             <Award />
             <Stats />
             <Pricing />
             <Education />
             <OpenAccount />
            


        </>
     );
}

export default HomePage;