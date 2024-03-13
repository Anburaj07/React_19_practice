import "./App.css";
import AddToCartForm from "./components/AddToCartForm";
import Joke from "./components/Joke";
import Message from "./components/Message";
import PostForm from "./components/PostForm";
import PostForm2 from "./components/PostForm2";
import Posts from "./components/Posts";
import ShoppingCart from "./components/ShoppingCart";
import Theme from "./components/Theme";

function App() {
  return (
    <div className="App w-[50%] m-auto">
      {/* <Joke /> */}
      {/* <Posts /> */}
      {/* <Message/> */}
      {/* <Theme/> */}
      {/* <PostForm/> */}
      {/* <ShoppingCart/> */}
      {/* <PostForm2/> */}
      <AddToCartForm itemID='1' itemTitle="JavaScript > The Definitive Guide"/>
      <AddToCartForm itemID='2' itemTitle="JavaScript > The Good Parts"/>
    </div>
  );
}

export default App;
