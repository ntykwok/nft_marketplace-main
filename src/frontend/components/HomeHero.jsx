import React from 'react';
import np from "../assets/np.png"

function HomeHero() {
 return (
   <div className="w-screen h-screen text-white" style={{
     background: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(33,33,21,1) 98%, rgba(38,38,20,1) 100%)"
   }}>
     <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
       <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center" alt="hero" src={np} />
       <div class="text-center lg:w-5/12 w-full">
         <h1 className="my-4 text-5xl font-bold leading-tight">
           Tap into the future of identity 
         </h1>
         <p className="text-2xl mb-8">
           Ship products 5-10x faster with your existing design tools, tech stacks & workflows!
         </p>
         <br />
       </div>
     </div>
   </div >
 );
}

export default HomeHero