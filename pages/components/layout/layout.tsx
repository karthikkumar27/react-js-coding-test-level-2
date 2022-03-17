import Header from './header/header'
import Footer from './footer/footer'
import Carousel from '../carousel/carousel'

export default function Layout({ children }) {
    return (
      <>
        <Header></Header>
        <Carousel></Carousel>
        <div className="flex min-h-screen flex-col items-center justify-center">
            {children}
        </div>
        <Footer></Footer>
      </>
    )
  }