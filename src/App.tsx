import './App.css'
import './components/2/2.css'

import ChatStatus from './components/2/info/ChatStatus'
import Content from './components/2/content/Content'
import Footer from './components/2/Footer'
import Name from './components/2/info/Name'
import ProfilePicture from './components/2/info/ProfilePicture'
import SocialLinkBlock from './components/2/info/SocialLinkBlock'

// import Footer from './components/1/Footer'
// import Header from './components/1/Header'
// import MainContent from './components/1/MainContent'

function App() {
  return (
    <div>
      {/* <Header />
      <MainContent />
      <Footer /> */}
      <ProfilePicture />
      <Name />
      <ChatStatus />
      <SocialLinkBlock />
      <Content />
      <Footer />
    </div>
  )
}

export default App
