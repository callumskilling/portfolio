import "./HomeHero.css"

export const HomeHero = () => {
  const headshot_desktop = "/src/assets/images/images/desktop/headshot_desktop.jpg"
  const headshot_desktop_2x = "/src/assets/images/images/desktop/headshot_desktop_2x.jpg"
  const headshot_tablet = "/src/assets/images/images/tablet/headshot_tablet.jpg"
  const headshot_tablet_2x = "/src/assets/images/images/tablet/headshot_tablet_2x.jpg"
  const headshot_mobile = "/src/assets/images/images/mobile/headshot_mobile.jpg"
  const headshot_mobile_2x = "/src/assets/images/images/mobile/headshot_mobile_2x.jpg"
  const headshot_lookup_desktop = "/src/assets/images/images/desktop/headshot_desktop_lookup.jpg"
  const headshot_lookup_desktop_2x = "/src/assets/images/images/desktop/headshot_lookup_desktop_2x.jpg"
  const headshot_lookup_tablet = "/src/assets/images/images/tablet/headshot_lookup_tablet.jpg"
  const headshot_lookup_tablet_2x = "/src/assets/images/images/tablet/headshot_lookup_tablet_2x.jpg"
  const headshot_lookup_mobile = "/src/assets/images/images/mobile/headshot_lookup_mobile.jpg"
  const headshot_lookup_mobile_2x = "/src/assets/images/images/mobile/headshot_lookup_mobile`_2x.jpg"

  return (
    <>
      <div id="home_hero_container">
        <div id="about_me_container">
          <p>I’m a front-end developer who loves building beautiful and functional websites that are user-friendly and responsive.</p>
        </div>
        <div id="headshot_container">
          <div id="headshot_wrapper">
            <picture id="headshot_lookup" className="headshot">
              <source media="(min-width: 1440px)" srcSet={`${headshot_lookup_desktop} 1544w, ${headshot_lookup_desktop_2x} 3088w`} />
              <source media="(min-width: 768px)" srcSet={`${headshot_lookup_tablet} 958w, ${headshot_lookup_tablet_2x} 1915w`} />
              <source srcSet={`${headshot_lookup_mobile} 431w, ${headshot_lookup_mobile_2x} 862w`} />
              <img src={`${headshot_lookup_desktop_2x}`} alt={`Headshot of Callum Skilling`} />
            </picture>
            <picture id="headshot" className="headshot">
              <source media="(min-width: 1440px)" srcSet={`${headshot_desktop} 1544w, ${headshot_desktop_2x} 3088w`} />
              <source media="(min-width: 768px)" srcSet={`${headshot_tablet} 958w, ${headshot_tablet_2x} 1915w`} />
              <source srcSet={`${headshot_mobile} 431w, ${headshot_mobile_2x} 862w`} />
              <img src={`${headshot_desktop_2x}`} alt={`Headshot of Callum Skilling`} />
            </picture>
          </div>
        </div>
      </div>
    </>
  )
}