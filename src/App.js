import React,{useState} from 'react';
import Button from './UI/Button';
import Card from './UI/Card'
import Header from './UI/Header';
import Input from './UI/Input'
import Modal from './UI/Modal'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
    const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="App">
     <Card>
       <Header onShowCart={showCartHandler} />
       <Input label="Name"
        input={{
          id: "name",
          type: "text",
          defaultValue: " ",
        }}/>
   <Button onClick={showCartHandler}>Submit</Button>
    {cartIsShown && <Modal onClose={hideCartHandler}>Modal is working !</Modal>}
       </Card>
    </div>
  );
}

export default App;
