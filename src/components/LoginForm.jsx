import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { Form, Input, Button } from 'antd'

const firebaseConfig = {
  apiKey: "AIzaSyCsqbZU4c4L_KQP2tn0x6hA0-iHRp7qTcg",
  authDomain: "honeydo-bc.firebaseapp.com",
  projectId: "honeydo-bc",
  storageBucket: "honeydo-bc.appspot.com",
  messagingSenderId: "326954222068",
  appId: "1:326954222068:web:56e5e8e78e806e5e5639a1"
}

export default function LoginForm({ setUser }) {
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const handleLogin = (values) => {
    const { email, password } = values
    signInWithEmailAndPassword(auth, email, password)
      .then(response => {
        setUser(response.user)
      })
      .catch(err => alert(err.message))
  }
  const loginWithGoogle = (event) => {
    event.preventDefault()
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then(response => {
        setUser(response.user)
      })
      .catch(err => alert(err.message))
  }
  return (
    <Form onFinish={handleLogin} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      <Form.Item label="Email" name="email"
        rules={[{ required: true, message: 'Please include your email'}]}>
          <Input />
      </Form.Item>
      <Form.Item label="Password" name="password"
        rules={[{ required: true, message: 'Please enter your password'}]}>
          <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
        &nbsp;
        <Button onClick={loginWithGoogle} type="default">Login with Google</Button>
      </Form.Item>
    </Form>
  )
}