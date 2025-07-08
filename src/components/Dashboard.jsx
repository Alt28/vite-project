import React, { useRef, useEffect, useState } from 'react'
import dragonbg from '../assets/dragonbg.mp4'
import charabg from '../assets/charabg.jpg'
import characterstitle from '../assets/characters_title.png'
import gogeta from '../assets/gogeta.png'
import broly from '../assets/broly.png'
import gohan from '../assets/gohan.png'
import gokufri from '../assets/gokufri.png'
import gokussj from '../assets/gokussj.png'
import eventsbg from '../assets/eventsbg.jpg'
import newsbg from '../assets/newsbg.jpg'
import googleplay from '../assets/googleplay.png'
import appstore from '../assets/appstore.png'
import icon from '../assets/icon.jpg'
import appdltxt from '../assets/appdltxt.png'

function Dashboard() {
  const cardRef = useRef(null)
  const [showTitle, setShowTitle] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
        setShowTitle(true)
      } else {
        setShowTitle(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-950 to-blue-700 overflow-x-hidden">
      {/* Video Background */}
      <div className="relative w-screen h-[700px] flex items-center justify-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60 pointer-events-none rounded-2xl"
          src={dragonbg}
          autoPlay
          loop
          muted
          playsInline
          style={{ mixBlendMode: 'overlay' }}
        />
        {/* Gradient overlay for blending edges */}
        <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none rounded-2xl"
          style={{
            background: 'linear-gradient(to bottom, #172554 0%, transparent 20%, transparent 80%, #1e3a8a 100%)'
          }}
        />
        {/* Welcome Content on top of video */}
        <div className="relative z-20 flex flex-col items-center w-full">
          <h1 className="text-6xl font-extrabold font-dokkan text-yellow-400 mb-4 mt-10 text-center uppercase tracking-wider drop-shadow-[2px_2px_0px_rgba(0,0,0,0.7)] text-shadow-2xs text-shadow-sky-400">
            Welcome to Dokkan Battle Hub
          </h1>
          <p className="text-2xl font-dokkan text-white mb-4 text-center max-w-2xl drop-shadow-[1px_1px_0px_rgba(0,0,0,0.7)] tracking-wide">
            Your one-stop destination for everything Dragon Ball Dokkan Battle! Explore characters, stay updated on events, and catch up with the latest news.
          </p>
        </div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full mt-10">
        <div className="flex flex-col gap-10 w-full max-w-2xl mb-10">
          <img 
            src={appdltxt}
            alt="Appdltxt"
            className={`h-9 w-90S mr-4 flex-col items-center mt-3 `}
          />
  <div className="flex flex-row justify-center items-center mb-4">
    <a
      href="https://play.google.com/store/apps/details?id=com.bandainamcogames.dbzdokkanww"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img 
        src={googleplay}
        alt="Google Play"
        className="h-30 w-80 mr-4 flex-col items-center mt-0 hover:scale-110 transition-transform duration-300"
      />
    </a>
    <a
      href="https://apps.apple.com/app/id951286422"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img 
        src={appstore}
        alt="App Store"
        className="h-30 w-80 flex-col item-center mt-0 hover:scale-110 transition-transform duration-300"
      />
    </a>
  </div>
          <a
          href="https://play.google.com/store/apps/details?id=com.bandai.dbscgapp&hl=en" 
          target="_blank"
          rel="nonopener nonreferrer"
          >
           <img 
            src={icon}
            alt="App"
            className="h-30 w-80 flex-col item-center rounded-2xl ml-45 hover:scale-110 transition-transform duration-300"
          />
          </a>
          
          {/* Characters Card */}
          <div class="md:flex"></div>
            <div class="md:shrink-0"></div>
          <div
            ref={cardRef}
            className="w-screen mt-0 mb-6 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-170 rounded-lg shadow-xl overflow-hidden"
          >
            {/* Background image layer */}
            <img
              src={charabg}
              alt="Characters Background"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-39"
              style={{ mixBlendMode: 'multiply', zIndex: 0 }}
            />
            {/* Gradient overlay for blending edges */}
            <div
              className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, #172554 0%, transparent 20%, transparent 80%, #1e3a8a 100%)'
              }}
            />
            {/* Character Title at the top */}
            <div className="relative z-20 flex flex-col items-center w-full pt-4">
              <img
                src={characterstitle}
                alt="Characters Title"
                className={`h-20 w-200 transition-all duration-1000 ease-out mb-2
        ${showTitle ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 -translate-y-10'}
      `}
                style={{ maxWidth: 340 }}
              />
            </div>
            {/* Characters Pop Animation - centered and bigger, close together */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-10">
              {/* 1. Gogeta - center */}
              <img
                src={gogeta}
                alt="Gogeta"
                className={`
      absolute self-center bottom-1 w-150 h-150 object-contain
      -translate-x-1/2 -translate-y-1/2
      transition-all duration-700 ease-out
      ${showTitle
                    ? 'opacity-100 scale-100 translate-x-0 translate-y-0'
                    : 'opacity-0 scale-50'}
    `}
                style={{ transitionDelay: '0ms' }}
              />
              {/* 2. Broly - right, close to center */}
              <img
                src={broly}
                alt="Broly"
                className={`
      absolute left-[50%] top-1/2 w-150 h-150 object-contain
      -translate-y-1/2
      transition-all duration-700 ease-out
      ${showTitle
                    ? 'opacity-100 scale-100 translate-x-0'
                    : 'opacity-0 scale-50 translate-x-8'}
    `}
                style={{ transitionDelay: '200ms' }}
              />
              {/* 3. Gohan - top right, close to center */}
              <img
                src={gohan}
                alt="Gohan"
                className={`
      absolute left-[47%] top-[35%] w-150 h-150 object-contain
      transition-all duration-700 ease-out
      ${showTitle
                    ? 'opacity-100 scale-100 translate-x-0 translate-y-0'
                    : 'opacity-0 scale-50 -translate-x-4 -translate-y-4'}
    `}
                style={{ transitionDelay: '400ms' }}
              />
              {/* 4. Gokufri - left, close to center */}
              <img
                src={gokufri}
                alt="Gokufri"
                className={`
      absolute right-[45%] top-1/2 w-150 h-150 object-contain
      -translate-y-1/2
      transition-all duration-700 ease-out
      ${showTitle
                    ? 'opacity-100 scale-100 translate-x-0'
                    : 'opacity-0 scale-50 -translate-x-8'}
    `}
                style={{ transitionDelay: '600ms' }}
              />
              {/* 5. Goku SSJ - top left, close to center */}
              <img
                src={gokussj}
                alt="Goku SSJ"
                className={`
      absolute right-[40%] top-[50%] w-150 h-150 object-contain
      transition-all duration-700 ease-out
      ${showTitle
                    ? 'opacity-100 scale-100 translate-x-0 translate-y-0'
                    : 'opacity-0 scale-50 translate-x-4 -translate-y-4'}
    `}
                style={{ transitionDelay: '800ms' }}
              />
            </div>
          </div>
          {/* Events */}
          <div className="bg-blue-900 rounded-lg shadow-xl p-8 flex flex-col items-center justify-center w-screen h-150 mb-6 mt-40 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <nav className="absolute right-[30%] top-[3%] min-h-20 w-150 bg-black flex items-center px-10 shadow-md"></nav>
            <div class="md:flex">
            <div class="md:shrink-0"></div>
            <img
              src={eventsbg}
              alt="Characters Background"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-39"
              style={{ mixBlendMode: 'multiply', zIndex: 0 }}
            />  
            </div>
          </div>
          {/* News */}
          <div className="bg-blue-900 rounded-lg shadow-xl p-8 flex flex-col items-center justify-center w-screen h-150 mb-6 mt-40 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <div class="md:flex">
            <div class="md:shrink-0"></div>
             <img
              src={newsbg}
              alt="Characters Background"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-39"
              style={{ mixBlendMode: 'multiply', zIndex: 0 }}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard