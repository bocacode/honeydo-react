import { useState } from 'react'
import { Layout } from 'antd'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ItemList from './components/ItemList'
import Copyright from './components/Copyright'
const { Content } = Layout

function App() {
  const uid = 1
  const [listItems, setListItems] = useState()
  const [loading, setLoading] = useState(false)
  return (
    <Layout>
      <Navbar />
      <Content className="site-layout" style={{ marginTop: 64, padding: '0 50px' }}>
        <Hero uid={uid} setLoading={setLoading} setListItems={setListItems} />
        <ItemList
          uid={uid}
          listItems={listItems}
          setListItems={setListItems}
          setLoading={setLoading}
          loading={loading} />
      </Content>
      <Copyright />
    </Layout>
  )
}

export default App
