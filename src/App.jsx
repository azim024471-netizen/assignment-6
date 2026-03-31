

import './App.css'
import Banner from './Component/Banner/Banner'
import NavBar from './Component/NavBar/NavBar'
import Stats from './Component/Stats'

function App() {
  

  return (
    <>
     <nav>
         <NavBar></NavBar>
     </nav>
           
       <section className='Banner'>
        <Banner></Banner>

       </section>

       <section>
        <Stats></Stats>
       </section>

    </>
  )
}

export default App
