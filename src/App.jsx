import './App.css'
import TopBar from "./sections/TopBar"
import HeroSection from "./sections/HeroSection"
import SkillSection from "./sections/SkillSection"
import WorkExperience from './sections/WorkSection'
import ProjectSection from './sections/ProjectSection'
import ResumeContact from './sections/ContactSection'

function App() {


  return (
    <>
      <div>
        <TopBar />
        <HeroSection />
        <SkillSection />
        <WorkExperience />
        <ProjectSection />
        <ResumeContact />
      </div>
    </>
  )
}

export default App
