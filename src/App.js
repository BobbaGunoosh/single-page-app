import { Navbar} from 'react-bootstrap';
import {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([])
  const [load, setLoad ] = useState(false)
  const [error , setError] = useState('')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/3')
     .then(res => {
       setPosts(res.data);
       setLoad(true);
     })
     .catch(err => {
       setError(error.message);
       setLoad(true)
     })
  })

  return (
    <div className='Home'>
      <Navbar bg='dark' variant='light'>
        <Navbar.Brand style={{color: 'white'}}>
      NavBar for Single-Page-App  
        </Navbar.Brand>
      </Navbar> 
      <div className="main">
        <section className='content'>
          {/* <div>content: {posts.map((post, index) => <p key={index}>{post.body}</p> )} </div> */}
          <div>
            <p>{posts.body}</p>
           
          </div>
         
        </section>
      </div>    
    </div>
  );
}

export default App;
