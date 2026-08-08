import { useEffect, useState, useRef } from "react"
import StaggeredMenu from '../components/Navbar/StaggeredMenu'

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Blog', ariaLabel: 'Read trading blog', link: '/blog' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' },
]
const socialItems = [
  {
    label: "Instagram",
    link: "https://www.instagram.com/tradewith_shubham7?igsh=dDM0MDRsc2FjMWV0"
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/shubhamv7/"
  }
];

function NavbarPage() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Blur background logic
      setScrolled(currentScrollY > 20);

      // Smart Hide/Show Logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false); // Scrolling down - Hide
      } else {
        setVisible(true); // Scrolling up - Show
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<div className={`fixed top-0 left-0 w-full z-40 transition-transform duration-500 ease-in-out ${visible ? "translate-y-0" : "-translate-y-[90px]"} h-[80px] md:h-[90px]`}>

  {/* Blur Background Layer */}
  <div
    className={`
      absolute inset-0 transition-all duration-300
      ${scrolled ? "backdrop-blur-xl bg-black/40 border-b border-white/10" : "bg-transparent"}
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
          colors={['#10b981', '#059669']} 
          accentColor="#10b981"
        />
  </div>

</div>

)

}

export default NavbarPage
