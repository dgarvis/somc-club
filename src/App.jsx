import './App.css'
import HeroSection from './Components/HeroSection/HeroSection'
import JoinToOurDiscord from './Components/JoinToOurDiscord/JoinToOurDiscord'
import GitHubSection from './Components/GitHubSection/GitHubSection'
import MeetupGroupScreenshots from './Components/MeetupGroupScreenshots/MeetupGroupScreenshots'
import { Donation } from './Components/Donation/Donation'
import AnalyticsSection from './Components/AnalyticsSection/AnalyticsSection'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <HeroSection />
      <JoinToOurDiscord />
      <GitHubSection />
      <MeetupGroupScreenshots />
      <Donation />
      <AnalyticsSection />
      <Footer />
    </>
  )
}

export default App
