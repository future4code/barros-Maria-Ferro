import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />

            <Post
            nomeUsuario={'maria'}
            fotoUsuario={'https://picsum.photos/id/1013/50/50'}
            fotoPost={'https://picsum.photos/id/237/200/150'}
          />

            <Post
            nomeUsuario={'matheus'}
            fotoUsuario={'https://picsum.photos/id/777/50/50'}
            fotoPost={'https://picsum.photos/id/12/200/150'}
          />
  </div>
)

}


export default App;
