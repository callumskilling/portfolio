import { useState } from "react"
import "./HomeHero.css"

export const HomeHero = () => {
  const headshot_desktop = "/src/assets/images/images/headshot.jpg"
  const headshot_desktop_2x = "/src/assets/images/images/headshot.jpg"
  const headshot_tablet = "/src/assets/images/images/headshot.jpg"
  const headshot_tablet_2x = "/src/assets/images/images/headshot.jpg"
  const headshot_mobile = "/src/assets/images/images/headshot.jpg"
  const headshot_mobile_2x = "/src/assets/images/images/headshot.jpg"
  const headshot_lookup_desktop = "/src/assets/images/images/headshot_lookup.jpg"
  const headshot_lookup_desktop_2x = "/src/assets/images/images/headshot_lookup.jpg"
  const headshot_lookup_tablet = "/src/assets/images/images/headshot_lookup.jpg"
  const headshot_lookup_tablet_2x = "/src/assets/images/images/headshot_lookup.jpg"
  const headshot_lookup_mobile = "/src/assets/images/images/headshot_lookup.jpg"
  const headshot_lookup_mobile_2x = "/src/assets/images/images/headshot_lookup.jpg"

  const [image, setImage] = useState()

  return (
    <>
      <div id="home_hero_container">
        <div id="about_me_container">
          <p>I’m a frontend developer who loves building beautiful and functional websites that are user-friendly and responsive.</p>
        </div>
        <div id="headshot_container">
          <h2 id="home_hero_title">Callum Skilling<br /><span id="home_hero_subtitle">Frontend Developer</span></h2>
          <div id="headshot_wrapper">
            <picture id="headshot_lookup" className="headshot">
              <source media="(min-width: 1440px)" srcSet={`${headshot_lookup_desktop} 1110w, ${headshot_lookup_desktop_2x} 2220w`} />
              <source media="(min-width: 768px)" srcSet={`${headshot_lookup_tablet} 688w, ${headshot_lookup_tablet_2x} 1376w`} />
              <source srcSet={`${headshot_lookup_mobile} 311w, ${headshot_lookup_mobile_2x} 622w`} />
              <img src={`${headshot_lookup_desktop_2x}`} alt={`Headshot of Callum Skilling`} />
            </picture>
            <picture id="headshot" className="headshot">
              <source media="(min-width: 1440px)" srcSet={`${headshot_desktop} 1110w, ${headshot_desktop_2x} 2220w`} />
              <source media="(min-width: 768px)" srcSet={`${headshot_tablet} 688w, ${headshot_tablet_2x} 1376w`} />
              <source srcSet={`${headshot_mobile} 311w, ${headshot_mobile_2x} 622w`} />
              <img src={`${headshot_desktop_2x}`} alt={`Headshot of Callum Skilling`} />
            </picture>
          </div>
        </div>
      </div>
    </>
  )
}