import './App.css'
import Button from './components/Button';
import Greeting from './components/Greeting'
import Product from './components/Product';
import ProductList from './components/ProductList';
import UserProfile from './components/UserProfile';
import Notification from './components/Notification';
import Card from './components/Card';

function App() {
  const name1 = "Yonatan";
  const name2 = "Daniel";
  const label = "Click me";
  const myUsername = "yonatandudai";
  const myAvatarURL = "https://gravatar.com/avatar/ef7da3d726919d8b2dfddac21f819625?s=400&d=robohash&r=x";
  const message = "Hey There! It's a sunny day outside :)";
  const myType = "success";
  const myTitle = "Welcome to Yonatan's Card";
  const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ducimus quo ab temporibus suscipit illo sunt ipsam dignissimos itaque illum dicta libero excepturi, perspiciatis assumenda quod necessitatibus possimus. Nisi, nesciunt.";

  return (
    <div>
      <Greeting name = {name1} ></Greeting>
      <Greeting name = {name2} ></Greeting>
      <ProductList></ProductList>
      <Button label = {label} ></Button>
      <UserProfile username = {myUsername} avatarURL = {myAvatarURL} ></UserProfile>
      <Notification message = {message} type = {myType} ></Notification>
      <Notification message = "Hey There! It's raining outside..." type = 'error' ></Notification>
      <Card title = {myTitle} content = {content} ></Card>
    </div>
  )
}

export default App
