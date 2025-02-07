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
  return (
    <div>
      <Greeting name = {name1}></Greeting>
      <Greeting name = {name2}></Greeting>
      <ProductList></ProductList>
      <Button label={"Click me"}></Button>
      <UserProfile username={"yonatandudai"} avatarURL={"https://gravatar.com/avatar/ef7da3d726919d8b2dfddac21f819625?s=400&d=robohash&r=x"}></UserProfile>
      <Notification message={"Hey There! It's a sunny day outside :)"} type={'success'}></Notification>
      <Notification message={"Hey There! It's raining outside..."} type={'error'}></Notification>
      <Card title={"Welcome to Yonatan's Card"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ducimus quo ab temporibus suscipit illo sunt ipsam dignissimos itaque illum dicta libero excepturi, perspiciatis assumenda quod necessitatibus possimus. Nisi, nesciunt."}></Card>
    </div>
  )
}



export default App
