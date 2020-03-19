import React, {useState, useEffect} from 'react'
import Axios from 'axios';


const List = () => {

    const [list, setList] = useState([]);
    const [title, setTitle] = useState('')

    useEffect(() => {
        Axios.get('api/customers')
            .then(res => {
                setList(res.data)
                setTitle('hohoho')
            })
            .catch(err => console.log(err))
    },[]);

  return (
    <div>
      <h2>{title}</h2>
      <ol>
          { 
            list.map(item => {
                const {id, firstName, lastName} = item
                return( <li key={id}> {`${firstName} ${lastName} `} </li>)
            })
          }
      </ol>
    </div>
  )
}

export default List
