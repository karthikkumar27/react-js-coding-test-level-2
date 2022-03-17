import Header from './components/layout/header/header'
import Footer from './components/layout/footer/footer'
import Carousel from './components/carousel/carousel'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Header></Header>
      <Carousel></Carousel>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          
      </main>

      
      <Footer></Footer>
    </div>
  )
}
