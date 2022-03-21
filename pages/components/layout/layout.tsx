import Header from './header/header'
import Footer from './footer/footer'
import Carousel from '../carousel/carousel'

const Layout: React.FC = ({ children }) => {
    return (
      <>
        <Header></Header>
        <Carousel></Carousel>
        <main className="w-full">
            <div className="container mx-auto">
                {children}
            </div>
        </main>  
        <Footer></Footer>
      </>
    )
  }
  
  export default Layout; 