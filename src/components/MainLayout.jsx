
import Header from './Header'
import Footer from './Footer'

const MainLayout = ({children}) => {
  return (
    <div className='bg-dark overflow-clip'>
      <Header />
      {children}
      
      <Footer />
    </div>
  )
}

export default MainLayout
