import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import worldImage from "../images/world.png";
import spaceImage from "../images/space.jpeg";
import astronautStar from "../images/astronaut-star.png";
import rocket from "../images/rocket.png";
import planet from "../images/planet.png";
import planet2 from "../images/planet2.png";
import mars from "../images/mars.png";
import dog from "../images/dog.png";
import neptune from "../images/neptune.png";
import miniWorld from "../images/miniWorld.png";
import aAnda from "../images/a-a.png";
import aMoon from "../images/astronaut-moon.png";
import jupiter from "../images/jupiter.png";

import Image from "next/image";
import { useEffect, useState } from "react";
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600 && window.innerHeight < 800);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? <div className="alert">Not Available On Mobile Devices.</div> : 
   (
    <Parallax pages={4}>
      <ParallaxLayer
        offset={0}
        speed={0.5}
        className="flex items-center justify-center revalative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),url(${spaceImage.src})`,
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <ParallaxLayer
          offset={0.35}
          speed={-0.9}
          className="absolute"
          style={{ marginLeft: "10%" }}
        >
          <Image src={astronautStar} alt="astronaut" width={140} height={140} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.6}
          speed={-0.4}
          className="absolute inset-y-0 right-0"
          style={{ marginLeft: "84%" }}
        >
          <Image src={rocket} alt="rocket" width={130} height={130} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.09}
          speed={-0.2}
          className="absolute inset-y-0 right-0"
          style={{ marginLeft: "65%" }}
        >
          <Image src={planet} alt="planets" width={150} height={150} />
        </ParallaxLayer>
        <div>
          <ParallaxLayer
            speed={0.8}
            className="flex items-center justify-center h-full "
          >
            <h1 className="text-center text-white text-6xl mt-[-25%]">
              Welcome To Space
            </h1>
          </ParallaxLayer>
          <Image
            src={worldImage}
            alt="world"
            width={900}
            height={900}
            className="revalative mb-[-75%]"
          />
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),url(${spaceImage.src})`,
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
        className="revalative overflow-hidden"
      >
        <ParallaxLayer speed={-0.25} className="z-10">
          <Image
            src={dog}
            alt="dog"
            width={120}
            height={120}
            style={{ marginLeft: "45%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer speed={0.12} className="z-10">
          <Image
            src={miniWorld}
            alt="mini-world"
            width={120}
            height={120}
            style={{ marginLeft: "85%", marginTop: "33%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.2}
          style={{ marginLeft: "-10%", marginTop: "10%" }}
          className="absolute"
        >
          <Image src={mars} alt="Mars" width={750} height={750} className="" />
        </ParallaxLayer>

        <ParallaxLayer speed={0.05} className="flex items-center justify-end">
          <div
            style={{ marginRight: "12%", maxWidth: "550px" }}
            className="bg-gray-950 bg-opacity-50 rounded-xl shadow-lg p-8"
          >
            <h1 className="text-center text-white text-5xl">Mars</h1>
            <br></br>
            <p className="text-center text-white text-sm opacity-60 leading-8 content">
              Mars is the fourth planet from the sun and has a thin atmosphere
              composed mostly of carbon dioxide. The planet's surface is rocky
              and dusty, with large mountains, valleys, and craters. It is also
              home to the largest volcano in the solar system, Olympus Mons, and
              the deepest canyon, Valles Marineris. Mars' thin atmosphere means
              that the planet experiences large temperature swings, with daytime
              temperatures reaching a high of 70°F (20°C) near the equator and
              dropping to -100°F (-73°C) at night. The planet also has a reddish
              appearance due to the presence of iron oxide, or rust, on its
              surface.
            </p>
          </div>
        </ParallaxLayer>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={0.5}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),url(${spaceImage.src})`,
          backgroundSize: "cover",
        }}
        className="revalative"
      >
        <ParallaxLayer
          offset={1.4}
          speed={0.9}
          style={{ marginLeft: "5%" }}
          className="z-10"
        >
          <Image src={aAnda} alt="astronaut-alien" width={140} height={140} />
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.25}
          offset={0.5}
          className="flex items-center justify-start"
        >
          <div
            style={{ marginLeft: "12%", maxWidth: "550px" }}
            className="bg-gray-950 bg-opacity-50 rounded-xl shadow-lg p-8"
          >
            <h1 className="text-center text-white text-5xl">Neptune</h1>
            <br></br>
            <p className="text-center text-white text-sm opacity-60 leading-8 content">
              Neptune is the eighth planet from the sun and the farthest known
              planet in our solar system. It is classified as a gas giant and
              has a thick atmosphere primarily composed of hydrogen and helium,
              with traces of methane that give it a blue color. Neptune has the
              strongest winds of any planet in our solar system, with wind
              speeds reaching up to 1,200 miles per hour. The planet has 14
              known moons, the largest of which is Triton, and a faint ring
              system composed of three main rings. Neptune has a very tilted
              magnetic field and rotates on its axis in about 16 hours. It takes
              Neptune about 165 Earth years to complete one orbit around the
              sun.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          speed={0.5}
          offset={0.9}
          style={{ marginLeft: "50%" }}
          className="absolute"
        >
          <Image
            src={neptune}
            alt="Neptune"
            width={750}
            height={750}
            className=""
          />
        </ParallaxLayer>
      </ParallaxLayer>

      <ParallaxLayer
        offset={3}
        speed={0.5}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),url(${spaceImage.src})`,
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
        className="revalative"
      >
        <ParallaxLayer offset={0.75} speed={0.25} className="z-10">
          <Image
            src={aMoon}
            alt="astronaut-moon"
            width={120}
            height={120}
            style={{ marginLeft: "45%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer speed={0.12} className="z-10">
          <Image
            src={planet2}
            alt="planet-2"
            width={120}
            height={120}
            style={{ marginLeft: "85%", marginTop: "33%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.2}
          offset={0.55}
          style={{ marginLeft: "-10%" }}
          className="absolute"
        >
          <Image
            src={jupiter}
            alt="jupiter"
            width={750}
            height={750}
            className=""
          />
        </ParallaxLayer>

        <ParallaxLayer speed={0.05} className="flex items-center justify-end">
          <div
            style={{ marginRight: "12%", maxWidth: "550px" }}
            className="bg-gray-950 bg-opacity-50 rounded-xl shadow-lg p-8"
          >
            <h1 className="text-center text-white text-5xl">Jupiter</h1>
            <br></br>
            <p className="text-center text-white text-sm opacity-60 leading-8 content">
              Jupiter is the fifth planet from the sun and the largest planet in
              our solar system. It is classified as a gas giant and has a thick
              atmosphere primarily composed of hydrogen and helium, with traces
              of methane and ammonia. Jupiter has the shortest day of any planet
              in our solar system, with a day lasting only about 10 hours. The
              planet has a faint ring system and at least 79 known moons, the
              largest of which is Ganymede. Jupiter is famous for its massive
              Great Red Spot, a giant storm that has been raging for over 300
              years. Jupiter's magnetic field is the strongest of any planet in
              our solar system, and it traps high-energy particles, creating
              intense radiation belts. Jupiter has a strong gravitational pull
              that has helped shape the orbits of other planets and asteroids in
              our solar system. The Galileo spacecraft was sent to explore
              Jupiter and its moons in 1995 and discovered evidence of a
              subsurface ocean on Europa, one of Jupiter's moons.
            </p>
          </div>
        </ParallaxLayer>
      </ParallaxLayer>
    </Parallax>
  );
}
