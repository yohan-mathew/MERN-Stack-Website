
import Header from './Header'
import Footer from './Footer'

const MainLayout = ({children}) => {
  return (
    <div className='bg-dark'>
      <Header />
      {children}
      
      <Footer />
    </div>
  )
}

export default MainLayout
