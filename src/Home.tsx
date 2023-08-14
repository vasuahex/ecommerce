import FeatureProduct from './components/FeatureProduct'
import Herosection from './components/Herosection'
import Services from './components/Services'
import Trusted from './components/Trusted'
const Home = () => {
  const data = {
    name: "Vasu store"
  }
  return (
    <div>
      <Herosection Data={data} />
      <FeatureProduct/>
      <Services />
      <Trusted />
    </div>
  )
}

export default Home