import {useEffect, useState} from "react";
import Form from "../form/Form";
import './app.css'
import List from "../list/List";

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/'
  const [reqType, setReqType] = useState('users')
  const [items, setItems] = useState([])

  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`)
        const datas = await response.json()
        setItems(datas)
      } catch (err) {
        console.log(err)
      }
    }
    fetchItems()
  },[reqType])



  return (
    <div className="App">
      <Form
          reqType={reqType}
          setReqType={setReqType}
      />
      <List items={items} />
    </div>
  );
}

export default App;
