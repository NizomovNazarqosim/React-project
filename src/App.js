import {useEffect, useState} from 'react'
import useMediaQuery from './hooks/useMediaQuery'
import Navbar from './scenes/Navbar'
import MySkills from './scenes/MySkills'
import Testimonials from './scenes/Testimonials'
import Contact from './scenes/Contact'
import DotGroup from "./scenes/DotGroup"
import Landing from "./scenes/Landing"
import Projects from "./scenes/Projects"
import Footer from "./scenes/Footer"
import LineGradient from './components/LineGradient'

function App() {

  const [selectedPage, setSelectedPage] = useState('home')
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="App">
     <Navbar
     isTopOfPage={isTopOfPage}
      selectedPage={selectedPage} setSelectedPage={setSelectedPage}
     />
     <div className='w-5/6 mx-auto md:h-full'>
      {isAboveMediumScreens && (
        <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      )}
      <Landing setSelectedPage={setSelectedPage} />
     </div>
     <LineGradient/>
     <div className='w-5/6 mx-auto md:h-full'>
        <MySkills/>
     </div>
     <LineGradient/>
     <div className='w-5/6 mx-auto'>
        <Projects/>
     </div>
     <LineGradient/>
     <div className='w-5/6 mx-auto md:h-full'>
        <Testimonials/>
     </div>
     <LineGradient/>
     <div className='w-5/6 mx-auto md:h-full'>
        <Contact/>
     </div>
    <Footer/>
    </div>
  );
}

export default App;
