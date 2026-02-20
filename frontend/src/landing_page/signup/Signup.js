import React from 'react';
import SignupHero from './SignupHero';
import Demataccount from "./demataccount";  
import Opendemataccount from "./Opendemataccount";
import Accounttypes from "./Accounttypes";
import FAQs from "./FAQs";
import OpenAccount from "../OpenAccount";

function Signup() {
    return ( 
        <>
         <SignupHero/>
         <Demataccount/>
         <Opendemataccount/>
         <Accounttypes/>
         <FAQs/>
         <OpenAccount/>
        </>
     );
}

export default Signup;