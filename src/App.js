import React,{useState} from 'react';
import Button from './UI/Button';
import Card from './UI/Card'
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
