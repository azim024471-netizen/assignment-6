
import './App.css'
import Banner from './Component/Banner/Banner'
import NavBar from './Component/NavBar/NavBar'
import Products from './Component/Products'
import Stats from './Component/Stats'
import Steps from './Component/Steps-Section/Steps';

const productsData = async()=>{
  const res =await fetch("/ProductData.json")
  return res.json()
}

const productsPromise = productsData();


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

       <section>
        <main>
          <Products productsPromise ={productsPromise}></Products>
        </main>
       </section>
       <section className='bg-[#F9FAFC]'>
        <Steps></Steps>
       </section>



    </>
  )
}

export default App
