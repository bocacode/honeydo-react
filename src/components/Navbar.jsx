import { Layout, Menu } from 'antd'
const { Header } = Layout

export default function Navbar({ setUser }) {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item onClick={() => setUser(null)} key="1">Logout</Menu.Item>
      </Menu>
    </Header>
  )
}