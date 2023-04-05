import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import worldImage from '../images/world.png'
import spaceImage from '../images/space.jpeg'
import astronautStar from '../images/astronaut-star.png'
import rocket from '../images/rocket.png'
import planet from '../images/planet.png'
import marsSurface from '../images/mars-surface.jpg'
import mars from '../images/mars.png'
import dog from '../images/dog.png'
import miniWorld from '../images/miniWorld.png'
import space2 from '../images/space2.jpg'
import Image from 'next/image'
export default function Home() {
  return (
    <Parallax pages={4}>
      <ParallaxLayer
        offset={0}
        speed={0.5}
        className="flex items-center justify-center overflow-hidden revalative"
        style={{
          backgroundImage : `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),url(${spaceImage.src})`,
          backgroundSize: 'cover',
          minHeight : '100vh'
        }}
      >
                  <ParallaxLayer
            offset={0.35}
            speed={-0.9}
            className='absolute'
            style={{marginLeft: '10%'}}
          >
          <Image 
              src={astronautStar}
              alt="astronaut"
              width={140}
              height={140}
        />
          </ParallaxLayer>
          <ParallaxLayer
          offset={0.6}
            speed={-0.4}
            className='absolute inset-y-0 right-0'
            style={{marginLeft: '84%'}}
            
          >
          <Image 
              src={rocket}
              alt="rocket"
              width={130}
              height={130}
        />
          </ParallaxLayer>
          <ParallaxLayer
          offset={0.09}
            speed={-0.2}
            className='absolute inset-y-0 right-0'
            style={{marginLeft: '65%'}}
            
          >
          <Image 
              src={planet}
              alt="rocket"
              width={150}
              height={150}
        />
          </ParallaxLayer>
        <div>


        <ParallaxLayer
      speed={0.8}
      className="flex items-center justify-center h-full "
    >
      <h1 className="text-center text-white text-6xl mt-[-25%]">Welcome To Space</h1>
    </ParallaxLayer>
        <Image 
              src={worldImage}
              alt="Picture of the author"
              width={900}
              height={900}
              className='revalative mb-[-75%]'
        />
        </div>
      </ParallaxLayer>
      



      <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            backgroundImage : `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),url(${spaceImage.src})`,
            backgroundSize: 'cover',
            minHeight : '100vh'
          }}
          className='revalative overflow-hidden'
      >
        <ParallaxLayer 
          speed={-0.25}
          className='z-10'
        >
        <Image 
              src={dog}
              alt="Mars"
              width={120}
              height={120}
              style={{marginLeft : '45%'}}
        />
        </ParallaxLayer>

        <ParallaxLayer 
          speed={0.12}
          className='z-10'
        >
        <Image 
              src={miniWorld}
              alt="Mars"
              width={120}
              height={120}
              style={{marginLeft : '85%' , marginTop : '33%'}}
        />
        </ParallaxLayer>
        <ParallaxLayer
            speed={0.2}
            style={{marginLeft : '-10%' , marginTop : '10%'}}
            className='absolute'
        >
        <Image 
              src={mars}
              alt="Mars"
              width={750}
              height={750}
              className=''
        />
        </ParallaxLayer>


          <ParallaxLayer 
          speed={0.05}
            className='flex items-center justify-end'
          >

          <div style={{marginRight : '12%', maxWidth : '550px'}} className='bg-gray-950 bg-opacity-50 rounded-xl shadow-lg p-8'>
            <h1 className="text-center text-white text-5xl">Mars</h1>
            <br></br>
            <p className="text-center text-white text-sm opacity-60 leading-8 content">
              Mars is the fourth planet from the sun and has a thin atmosphere composed mostly of carbon dioxide. The planet's surface is rocky and dusty, with large mountains, valleys, and craters. It is also home to the largest volcano in the solar system, Olympus Mons, and the deepest canyon, Valles Marineris. Mars' thin atmosphere means that the planet experiences large temperature swings, with daytime temperatures reaching a high of 70°F (20°C) near the equator and dropping to -100°F (-73°C) at night. The planet also has a reddish appearance due to the presence of iron oxide, or rust, on its surface.
            </p>
        </div>
          </ParallaxLayer>
      </ParallaxLayer>



      <ParallaxLayer
          offset={2}
          speed={0.5}
      >
        <h1 className='text-center text-white text-6xl'>Welcome To Space 3</h1>
      </ParallaxLayer>




      <ParallaxLayer
          offset={3}
          speed={0.5}
      >
        <h1 className='text-center text-white text-6xl'>Welcome To Space 4</h1>
      </ParallaxLayer>
    </Parallax>
  )
}