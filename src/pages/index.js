import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import worldImage from '../images/world.png'
import spaceImage from '../images/space.jpeg'
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
      >
        <h1 className='text-center text-white text-6xl'>Welcome To Space 2</h1>
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