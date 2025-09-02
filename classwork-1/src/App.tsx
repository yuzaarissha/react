import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <ProfileCard
      name="Alisher"
      email="abasalisher12@gmail.com"
      />
      <Footer/>
    </div>
  )
}


export default App