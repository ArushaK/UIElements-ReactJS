import React from 'react';
import Card from './UI/Card'
import Input from './UI/Input'
import Modal from './UI/Modal'

function App() {
  return (
    <div className="App">
     <Card>
       <Input label="Name"
        input={{
          id: "name",
          type: "text",
          defaultValue: " ",
        }}/>
   
       </Card>
    </div>
  );
}

export default App;
