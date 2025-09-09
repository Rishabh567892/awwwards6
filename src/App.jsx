import Header from './Components/Header/Header'
import { Provider } from '../useAppContext';
import Home from './Components/Home/Home';
import SidePanel from "./Components/SidePanel"
import { Route, Routes, useLocation } from 'react-router-dom';
import Navigation from './Components/Header/Navigation';
import { AnimatePresence } from 'framer-motion';
import About from './Components/About/About';
import Project from './Components/Projects/Project';
import Archives from './Components/Archives/Archives';
import StartProject from './Components/StartProject/StartProject';

let paths = {
  "/": null,
  "/menu": <Navigation />,
  "/about": <About />,
  "/works/:project": <Project />,
  "/archives": <Archives />,
  "/start-a-project": <StartProject />
}

const App = () => {

  const location = useLocation()

  return (
    <div className="relative min-h-screen w-screen bg-[#101010] text-white font-['Helvetica']">

      <div className="bg-[linear-gradient(#fff,#fff)]"></div>

      <Header />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          {
            Object.keys(paths).map((v, i) => {
              return <Route key={i} path={v.replace(" ", "-")} element={<SidePanel key={i} panelContent={paths[v]} />} />
            })
          }
        </Routes>
      </AnimatePresence>
      <Home />
    </div>
  )
}

export default App