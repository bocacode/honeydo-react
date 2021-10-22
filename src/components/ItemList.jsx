import { useEffect } from 'react'
import { List } from 'antd'

export default function ItemList({ uid, listItems, setListItems, loading, setLoading }) {
  useEffect(() => {
    setLoading(true)
    if(!uid) {
      setListItems(null)
      setLoading(false)
    } else {
      fetch(`https://honeydo-api-bc.web.app/items/${uid}`)
        .then(response => response.json())
        .then(data => {
          setListItems(data)
          setLoading(false)
        })
        .catch(err => alert(err))
    }
  }, [uid])
  return (
    <List
      size="large"
      bordered
      dataSource={listItems}
      loading={loading}
      renderItem={item => <List.Item>{item.name}</List.Item>}
     />
  )
}