import { Layout } from 'antd'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ItemList from './components/ItemList'
import Copyright from './components/Copyright'
const { Content } = Layout

function App() {
  return (
    <Layout>
      <Navbar />
      <Content className="site-layout" style={{ marginTop: 64, padding: '0 50px' }}>
        <Hero />
        <ItemList />
      </Content>
      <Copyright />
    </Layout>
  )
}

export default App
