import Posts from './components/post/posts'
import Header from './components/header/header'
import './App.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
    
      <Header/>
      <Posts  profileImage="https://picsum.photos/200/300"
      username="John Doe"
      date="February 18, 2023"
      postContent="This is my first Facebook post!"
      postImage="https://picsum.photos/200/300"/>
      <Posts  profileImage="https://picsum.photos/200/300"
      username="John Doe"
      date="February 18, 2023"
      postContent="This is my first Facebook post!"
      postImage="https://picsum.photos/200/300"/>
      
    </Container>
  );
}

export default App;
