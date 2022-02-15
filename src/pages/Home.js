import React, { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import FadeInSection from'../components/fadeInSection'
import header from '../imgs/dance.gif';
import logo from '../imgs/logo.png';
import sleep from '../imgs/sleep.png';
import turle1 from '../imgs/turtle1.png';
import Mint from './Mint'
import Countdown from 'react-countdown';
import { FaTwitter, FaInstagram } from "react-icons/fa";


import '../styles/index.css';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  let pageRef = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const scrollToRef = ref => ref.current.scrollIntoView({behavior: "smooth", block: "start"});
  const scrollToPane = num => scrollToRef(pageRef[num]);


  const renderer = ({ days,hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return  <div class="grid grid-cols-1 text-4xl lg:text-6xl text-white font-semibold mt-5"> 
                <h1 className='text-4xl lg:text-6xl text-white font-semibold mt-5 uppercase'>Now Available</h1>
                <a onClick={() =>scrollToPane(4)}>
                  <button class="text-xl lg:text-3xl text-black font-medium lg:py-6 lg:px-12 py-3 px-3 mt-10 turtleButton">
                    Mint Now
                  </button>
                </a>
              </div>
    } else {
      // Render a countdown
      return <div class="grid grid-cols-4 text-4xl lg:text-6xl text-white font-semibold mt-5 divide-x"> 
              <div>
                {days}
                <p className="text-sm lg:text-lg text-white">Days</p>
              </div> 
              <div>
                {hours}
                <p className="text-sm lg:text-lg text-white">Hours</p>
              </div> 
              <div>
                {minutes}
                <p className="text-sm lg:text-lg text-white">Minutes</p>
              </div> 
              <div>
                {seconds}
                <p className="text-sm lg:text-lg text-white">Seconds</p>
              </div>
            </div>;
    }
  };

  return (
    <>
      <nav class=" turtleHeader flex fixed w-screen invisible lg:visible z-10">
        <div class="flex-1 flex justify-center mr-auto self-center">
            <a class="text-lg mr-6 text-white font-semibold	cursor-pointer" onClick={() =>scrollToPane(1)}>
              ABOUT
            </a>
            <a class="text-lg mr-6 text-white font-semibold	cursor-pointer" onClick={() =>scrollToPane(2)}>
              ROADMAP
            </a>
            <a class="text-lg mr-6 text-white font-semibold	cursor-pointer" onClick={() =>scrollToPane(3)}>
              FAQ
            </a>
        </div>
        <img src={header} className='max-h-32 cursor-pointer' onClick={() =>scrollToPane(0)}/>
        <div class="flex-1 flex justify-center ml-auto self-center">
          <a href="https://twitter.com/VoxelTurtleClub" target={"_blank"} class="inline-block text-lg font-semibold text-white cursor-pointer self-center m-5" ><FaTwitter size={32}/></a>
          <a href="https://www.instagram.com/voxelturtleclub/" target={"_blank"} class="inline-block text-lg font-semibold text-white cursor-pointer self-center m-5"><FaInstagram size={32}/></a>
          <a class="turtleButton inline-block text-lg font-semibold px-6 py-4 text-black cursor-pointer self-center m-5" onClick={() =>scrollToPane(4)}> Mint Now</a>
        </div>
      </nav>

      <div className='flex h-screen turtleHeader'  ref={pageRef[0]}>
        <div class="grid lg:grid-cols-2 md:grid-cols-1  m-auto w-5/6">
          <img src={logo} className="w-3/4 lg:w-full "/>
          <div className='text-center m-auto w-3/4'>
            <h1 className='text-xl lg:text-2xl text-white font-semibold'>It's those aquatic reptiles. 1,800 Voxel Turtles are on the Polygon Network.</h1>
            {/* <h1 className='text-4xl lg:text-6xl text-white font-semibold mt-5'>COMING SOON!</h1> */}
            <Countdown date={new Date("2-15-2022") } renderer={renderer} />

            <a href='https://discord.gg/aZCmD2NCd5' target="_blank">
            <button class="text-xl lg:text-3xl text-black font-medium lg:py-6 lg:px-12 py-3 px-3 mt-10 turtleButton">
              Join the Discord
            </button>
            </a>
            <br/>
            <a href="https://twitter.com/VoxelTurtleClub" target={"_blank"} class="inline-block text-lg font-semibold text-white cursor-pointer self-center m-5 lg:hidden visible"><FaTwitter size={32}/></a>
            <a href="https://www.instagram.com/voxelturtleclub/" target={"_blank"} class="inline-block text-lg font-semibold text-white cursor-pointer self-center m-5 md:invisible visible"><FaInstagram size={32}/></a>
          </div>
        </div>
      </div>   


      <header class="flex items-center justify-center py-80 bg-fixed bg-center bg-cover custom-img " ></header>


      <div className='flex p-6 turtleHeader' ref={pageRef[1]}>
          <div class="m-auto w-5/6"> 
              <div class="grid lg:grid-cols-2 grid-cols-1 m-auto container text-center mt-20 ">
                <p className='text-xl lg:text-2xl text-white font-semibold whitespace-pre-wrap text-left w-full mx-auto mt-5'>
                  <FadeInSection>
                    <h1 className='text-4xl lg:text-6xl	text-white font-semibold mt-5 w-full m-auto '>About Voxel Turtle Club</h1>  
                  </FadeInSection>
                  <br/>
                  <FadeInSection>
                    Voxel Turtle Club is a digitally generated NFT collection of turtles with different types of attributes such as head wear, face style, tops and more. Each Voxel Turtle are secured by the Polygon Network with one owner at a time. Our mission is to use the Voxel Turtle Club to build awareness and contribute to turtles and sea life rescue. 
                  </FadeInSection>
                </p>
                <img src={turle1} className='w-1/3 justify-self-center self-end '/>
              </div>
          </div>
      </div> 

  
      <div className='flex py-28 turtleHeader' ref={pageRef[2]}>
        <div class=" m-auto w-5/6">
          <FadeInSection>
            <h1 className='text-4xl lg:text-6xl	text-white font-semibold mt-5 text-center w-full m-auto '>Voxel Turtle Roadmap</h1>   
          </FadeInSection>
          <div class="grid lg:grid-cols-4 grid-cols-1 m-auto container text-center mt-20 lg:divide-x">  
            <FadeInSection>
              <div className='p-2'>
                <p className='text-md lg:text-md text-white font-semibold mb-2'>Phase 1</p>
                <p className='text-3xl lg:text-4xl text-white font-semibold mb-5 self-end'>1,800 Voxel Turtles for mint</p>
                <p className='text-md lg:text-lg text-white font-semibold whitespace-pre-wrap'>
                  We want the world to be a part of the Voxel Turtle club! We look forward to dropping 1,800 Voxel Turtles in 2022.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className='p-2'>
                <p className='text-md lg:text-md text-white font-semibold mb-2'>Phase 2</p>
                <p className='text-3xl lg:text-4xl text-white font-semibold mb-5 self-end'>20 piece Collection Rare drop</p>
                <p className='text-md lg:text-lg text-white font-semibold whitespace-pre-wrap'>
                  20 1/1 rare Voxel Turtles will be up for grabs! These rare Voxel Turtles will be only available on OpenSea. Holders will not only hold a rare Voxel Turtle but will also get additional chances to win more exclusive Voxel Turtles in the future!
                </p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className='p-2'>
                <p className='text-md lg:text-md text-white font-semibold mb-2'>Phase 3</p>
                <p className='text-3xl lg:text-4xl text-white font-semibold mb-5 self-end'>Giving Back to <br/>IRL Turtles</p>
                <p className='text-md lg:text-lg text-white font-semibold whitespace-pre-wrap'>
                  We plan to give back to a bigger cause. Voxel Turtle Club will donate 20% of each Voxel Turtle minted to a selected organization that mission ties with sea turtles and sea life rescue.
                </p>            
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className='p-2'>
                <p className='text-md lg:text-md text-white font-semibold mb-2'>Phase 4</p>
                <p className='text-3xl lg:text-4xl text-white font-semibold mb-5 self-end'>Voxel Turtle <br/> Application</p>
                <p className='text-md lg:text-lg text-white font-semibold whitespace-pre-wrap'> 
                  Our team looks forward to keeping the Voxel Turtle Club alive for a long time. We look forward to creating different types of applications to make your Voxel Turtle come to life. This includes to not limited to virtual reality worlds, augmented reality applications, and video games.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div> 

     
        <div class="lg:w-1/2 w-full mx-auto px-5 py-28 mx-auto " ref={pageRef[3]}>
          
          <div class="text-center mb-20">
            <h1 className='text-4xl lg:text-6xl	text-black font-semibold mt-5 text-center w-full m-auto '>FAQ</h1>  
          </div>

          <div class="flex flex-wrap ">
            <div class="grid grid-cols-1 lg:grid-cols-2 w-full px-4">
              <div>
                <FadeInSection>
                  <details class="mb-4">
                    <summary class="py-2 px-4 text-2xl font-semibold cursor-pointer	">
                      What are NFTs?
                    </summary>
                    <p className='px-10 text-lg font-semibold whitespace-pre-wrap'>
                      Non-Fungible Tokens
                      <br />
                      <br />
                      NFTs are tokens that we can use to represent ownership of unique items. They let us tokenise things like art, collectibles, even real estate. They can only have one official owner at a time and they're secured by the Ethereum blockchain – no one can modify the record of ownership or copy/paste a new NFT into existence.
                      <br />
                      <br />
                      <a href='https://ethereum.org/en/nft/'>Learn more here</a> 
                    </p>
                  </details>  
                </FadeInSection>
                <FadeInSection>
                  <details class="mb-4">
                    <summary class="py-2 px-4 text-2xl font-semibold cursor-pointer	 ">
                      How do I get a Voxel Turtle?
                    </summary>
                    <p className='px-10 text-lg font-semibold whitespace-pre-wrap'>
                      Voxel Turtles will be available in early 2022. You will need an Polygon wallet with MATIC funds.
                      <br />
                      <br />
                      <a href='https://wallet.polygon.technology/'>Learn more here</a> 
                    </p>
                  </details>
                </FadeInSection>
                <FadeInSection>
                  <details class="mb-4">
                    <summary class="py-2 px-4 text-2xl font-semibold cursor-pointer	">
                      How much will it cost to mint a Voxel Turtle?
                    </summary>
                    <p className='px-10 text-lg font-semibold whitespace-pre-wrap'>
                      Voxel Turtles will start at 80 MATIC. 
                      <br />
                      The 20 1/1 rare Voxel Turtles will start at 120 MATIC.
                    </p>
                  </details>
                </FadeInSection>

                <FadeInSection>
                  <details class="mb-4">
                    <summary class="py-2 px-4 text-2xl font-semibold cursor-pointer	">
                      When will Voxel Turtles will be available?
                    </summary>
                    <p className='px-10 text-lg font-semibold whitespace-pre-wrap'>
                      February 15th, 2022
                    </p>
                  </details>
                </FadeInSection>
              </div>
              <img src={sleep} className='w-1/2 justify-self-center self-start '/>
            </div>
          </div>
        </div>

        <Mint refProp={pageRef[4]}/>
  
        {/* <div className='flex py-10 turtleHeader' ref={pageRef[3]}>
        <div class="grid grid-cols-1 lg:grid-cols-2 m-auto lg:w-1/2 w-full mx-auto">

          <img src={me} className='w-3/4 justify-self-center rounded-full'/>
          <div className='text-left m-auto w-full p-10'>
            <p className='text-2xl text-white font-semibold mb-2 self-end'>The Creator</p>
            <p className='text-4xl text-white font-semibold mb-5 self-end'>Sergio Garcia</p>
            <p className='text-lg text-white font-semibold whitespace-pre-wrap'>From first discovering what the blockchain was to creating a whole universe for a bigger cause.</p>
            <br/>
            <p className='text-lg text-white font-semibold whitespace-pre-wrap'>"With Turtles being one of my favorite animals, I wanted to create a world that was full of them. After learning more about NFTs, I figured it was a perfect time to start this venture and take advantage of the available technologies."</p>
            <br/>
          </div>
        </div>
      </div>   */}

      <div className='flex py-6 turtleHeader'>
        <div class=" grid grid-cols-1 m-auto container">
          <hr/>  
          <img src={turle1} className="w-20 justify-self-center mt-3"/>
          <p className='text-sm text-white font-semibold whitespace-pre-wrap text-center w-2/3 mx-auto'>
             Copyright @ 2022 Voxel Turtle Club  
          </p>
        </div>
      </div> 

    </>
  );
}

export default Home;
