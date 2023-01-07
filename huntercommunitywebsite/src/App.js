import Header from './NavBar'
import { Route, Routes } from 'react-router'
import About from './About/about.js'
import Degreemap from './DegreeMap/degreemap.js'
import Internshipguide from './Internship Guide/internshipguide'
import Resources from './Resoucres/resources'
import Team from './Team/team'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/degreemap" element={<Degreemap />}></Route>
        <Route path="/internshipguide" element={<Internshipguide />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/team" element={<Team />}></Route>
      </Routes>
    </div>
  )
}

export default App
