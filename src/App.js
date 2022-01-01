import React, { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import './App.css';
import header from './dance.gif';
import logo from './logo.png';
import me from './me.jpg';
import sleep from './sleep.png';
import turle1 from './turtle1.png';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  let pageRef = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const scrollToRef = ref => ref.current.scrollIntoView({behavior: "smooth", block: "start"});
  const scrollToPane = num => scrollToRef(pageRef[num]);

  return (
    <>

      <nav class=" turtleHeader flex fixed w-screen invisible md:visible">
        <div class="flex-1 flex justify-center mr-auto self-center">
            <a href="#responsive-header" class="text-lg mr-6 text-white font-semibold	" onClick={() =>scrollToPane(1)}>
              ABOUT
            </a>
            <a href="#responsive-header" class="text-lg mr-6 text-white font-semibold	" onClick={() =>scrollToPane(2)}>
              ROADMAP
            </a>
            <a href="#responsive-header" class="text-lg mr-6 text-white font-semibold	" onClick={() =>scrollToPane(3)}>
              FAQ
            </a>
        </div>
        <img src={header} className='max-h-32 cursor-pointer' onClick={() =>scrollToPane(0)}/>
        <div class="flex-1 flex justify-center ml-auto self-center">
          <a href="#" class="turtleButton inline-block text-lg font-semibold px-6 py-4 text-black">Coming Soon</a>
        </div>
      </nav>



      <div className='flex h-screen turtleHeader'  ref={pageRef[0]}>
        <div class="grid lg:grid-cols-2 md:grid-cols-1  m-auto container">
          <img src={logo} className="w-3/4 lg:w-full "/>
          <div className='text-center m-auto w-3/4'>
            <h1 className='text-xl lg:text-2xl text-white font-semibold'>It's those aquatic reptiles. 1,800 Voxel Turtles are coming to the Ethereum network.</h1>
            <h1 className='text-4xl lg:text-6xl text-white font-semibold mt-5'>COMING SOON!</h1>
            <a href='https://discord.gg/CJxtVD3D4m' target="_blank">
            <button class="text-xl lg:text-3xl bg-blue-500 text-black font-medium lg:py-6 lg:px-12 py-3 px-3 mt-10 turtleButton">
              Join the Discord
            </button>
            </a>
          </div>
        </div>
      </div>   


      <header class="flex items-center justify-center py-80 bg-fixed bg-center bg-cover custom-img " ></header>


      <div className='flex p-6 turtleHeader' ref={pageRef[1]}>
        <div class=" m-auto container"> 
            <div class="grid lg:grid-cols-2 grid-cols-1 m-auto container text-center mt-20 ">
              <p className='text-xl lg:text-2xl text-white font-semibold whitespace-pre-wrap text-left w-full mx-auto mt-5'>
              <h1 className='text-4xl lg:text-6xl	text-white font-semibold mt-5 w-full m-auto '>About Voxel Turtle Club</h1>  
                <br/>
                Voxel Turtle Club a is digitally generated collection of turtles with different types of attributes such as head wear, face style, tops and more. Each Voxel Turtle are secured by the Ethereum blockchain with one owner at a time. Our mission is to use the Voxel Turtle Club to build awareness and contribute to turtles rescue and other sea creatures. 
              </p>
              <img src={turle1} className='w-1/3 justify-self-center self-end '/>
            </div>
        </div>
      </div> 

  
      <div className='flex py-28 turtleHeader' ref={pageRef[2]}>
        <div class=" m-auto container">
          <h1 className='text-4xl lg:text-6xl	text-white font-semibold mt-5 text-center w-full m-auto '>Voxel Turtle Roadmap</h1>   

          <div class="grid lg:grid-cols-4 grid-cols-1 m-auto container text-center mt-20 lg:divide-x">

            <div className='p-2'>
              <p className='text-md lg:text-md text-white font-semibold mb-2'>Phase 1</p>
              <p className='text-3xl lg:text-4xl text-white font-semibold mb-5 self-end'>20 piece Collection Rare drop</p>
              <p className='text-md lg:text-lg text-white font-semibold whitespace-pre-wrap'>
                We will begin minting 20 1/1 rare Voxel Turtles. These will be only available for grabs on OpenSea. Holders will not only hold a rare Voxel Turtle but will also get a chance to win more exclusive Voxel Turtles in the future!
              </p>
            </div>
            
            <div className='p-2'>
              <p className='text-md lg:text-md text-white font-semibold mb-2'>Phase 2</p>
              <p className='text-3xl lg:text-4xl text-white font-semibold mb-5 self-end'>1,800 Voxel Turtles for mint</p>
              <p className='text-md lg:text-lg text-white font-semibold whitespace-pre-wrap'>
                We want the rest of the world to be a part of the Voxel Turtle club too! We look forward to dropping 1,800 Voxel Turtles in 2022.
              </p>
            </div>

            <div className='p-2'>
              <p className='text-md lg:text-md text-white font-semibold mb-2'>Phase 3</p>
              <p className='text-3xl lg:text-4xl text-white font-semibold mb-5 self-end'>Augmented Reality <br/> Application </p>
              <p className='text-md lg:text-lg text-white font-semibold whitespace-pre-wrap'> We look forward to bringing your Voxel Turtle to life! We plan on developing a Augmented Reality application for Android and IOS that allows you to interract with your Voxel Turtle in the real world. </p>


            </div>

            <div className='p-2'>
              <p className='text-md lg:text-md text-white font-semibold mb-2'>Phase 4</p>
              <p className='text-3xl lg:text-4xl text-white font-semibold mb-5 self-end'>Giving Back to <br/>IRL Turtles</p>
              <p className='text-md lg:text-lg text-white font-semibold whitespace-pre-wrap'>We plan to give back for a bigger cause. Voxel Turtle Club will donate a percentage of each NFT minted to a selected organization that mission ties with rescuing sea turtles and other sea life.</p>            
            </div>

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

                <details class="mb-4">
                  <summary class="py-2 px-4 text-2xl font-semibold cursor-pointer	 ">
                    How do I get a Voxel Turtle?
                  </summary>
                  <p className='px-10 text-lg font-semibold whitespace-pre-wrap'>
                    Voxel Turtles will be available in early 2022. You will need an Ethereum wallet with Ethereum funds.
                    <br />
                    <br />
                    <a href='https://ethereum.org/en/wallets/'>Learn more here</a> 
                  </p>
                </details>

                <details class="mb-4">
                  <summary class="py-2 px-4 text-2xl font-semibold cursor-pointer	">
                    How much will it cost to mint a Voxel Turtle?
                  </summary>
                  <p className='px-10 text-lg font-semibold whitespace-pre-wrap'>
                    Voxel Turtles will start at 0.055 ETH. 
                    <br />
                    The 20 1/1 rare Voxel Turtles will start at 0.1 ETH.
                  </p>
                </details>

                <details class="mb-4">
                  <summary class="py-2 px-4 text-2xl font-semibold cursor-pointer	">
                    When will Voxel Turtles will be available?
                  </summary>
                  <p className='px-10 text-lg font-semibold whitespace-pre-wrap'>
                    Early 2022
                  </p>
                </details>
              </div>

              <img src={sleep} className='w-1/2 justify-self-center self-start '/>
            </div>
          </div>
        </div>
  
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

export default App;
