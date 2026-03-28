import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import { FourCornersQuestion, FourCornersTimer } from './components/GameFourCorners'
import SharePrompts from './components/SharePrompts'
import { ClumpsIntro } from './components/GamePirate'
import { BiathlonIntro } from './components/GameBiathlon'
import WinterOlympics from './components/WinterOlympics'
import PassingEgg from './components/PassingEgg'
import FloorIsLava from './components/FloorIsLava'
import FloorLavaVideo from './components/FloorLavaVideo'
import TicTacToe from './components/TicTacToe'
import TicTacToeDemoImages from './components/TicTacToeDemoImages'
import WinnerAnnouncement from './components/WinnerAnnouncement'
import Thanks from './components/Thanks'
import CelebrationModal from './components/CelebrationModal'
import NavDots from './components/NavDots'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('game1-q')
  const [showCelebration, setShowCelebration] = useState(false)
  const [winnerName, setWinnerName] = useState('')

  const handleAnnounceWinner = (name) => {
    setWinnerName(name || 'Winners')
    setShowCelebration(true)
  }

  const handleCloseCelebration = () => {
    setShowCelebration(false)
  }

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const handleScroll = () => {
      const scrollY = window.scrollY
      let current = 'game1-q'
      sections.forEach((sec) => {
        const top = sec.offsetTop
        if (scrollY >= top - 150) current = sec.id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="app">
        <Hero />

        {/* First challenge: 4 Corners */}
        <section id="game1-q" className="section--compact">
          <FourCornersQuestion />
        </section>
        <section id="game1-share" className="section--compact section--share-tight">
          <SharePrompts />
        </section>
        <section id="game1-timer">
          <FourCornersTimer />
        </section>

        {/* Challenge 2: Electricity */}
        <section id="game2-intro">
          <ClumpsIntro />
        </section>

        {/* Winter Olympics Transition */}
        <section id="olympics" className="section--olympics-full">
          <WinterOlympics />
        </section>

        <PassingEgg />

        <FloorIsLava />

        <FloorLavaVideo />

        {/* Challenge 3: Freeze Frame */}
        <section id="game3-intro">
          <BiathlonIntro />
        </section>

        <section id="tic-tac-toe" className="section--tic-stack">
          <TicTacToe />
          <TicTacToeDemoImages />
        </section>

        {/* Winner */}
        <section id="winners">
          <WinnerAnnouncement onAnnounce={handleAnnounceWinner} />
        </section>

        {/* End */}
        <section id="thanks">
          <Thanks />
        </section>
      </div>

      <NavDots activeSection={activeSection} />

      <CelebrationModal
        isOpen={showCelebration}
        teamName={winnerName}
        onClose={handleCloseCelebration}
      />
    </>
  )
}

export default App
