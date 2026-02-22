import { useEffect, useState } from "react"
import StaggeredMenu from '../components/Navbar/StaggeredMenu'

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
 
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' },
]
const socialItems = [
  {
    label: "Instagram",
    link: "https://www.instagram.com/tradewith_shubham7?igsh=dDM0MDRsc2FjMWV0"
  }
];

function NavbarPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
<div className="fixed top-0 left-0 w-full h-[70px] z-40">

  {/* Blur Background Layer */}
  <div
    className={`
      absolute inset-0 transition-all duration-300
      ${scrolled ? "backdrop-blur-xl bg-black/40" : "bg-transparent"}
    `}
  />

  {/* Transparent Bottom Border */}
  <div
    className={`
      absolute bottom-0 left-0 w-full h-px
      bg-white/10 transition-opacity duration-300
      ${scrolled ? "opacity-100" : "opacity-0"}
    `}
  />

  {/* Navbar Content */}
  <div className="relative h-full flex items-center justify-end px-6">
    <StaggeredMenu
      isFixed={true}
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering
      menuButtonColor="#ffffff"
      openMenuButtonColor="#000000"
      changeMenuColorOnOpen
      colors={['#B19EEF', '#5227FF']}
      accentColor="#303de8"
    />
  </div>

</div>

)

}

export default NavbarPage
