import React, { useState } from "react";
import Button from "./UI/Button";
import Card from "./UI/Card";
import Header from "./UI/Header";
import Input from "./UI/Input";
import Modal from "./UI/Modal";
import SideDrawer from "./UI/SideDrawer";

function App() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <div className="App">
      <Card>
        {drawerIsOpen && (
          <Modal onClose={closeDrawer}>Modal is working !</Modal>
        )}
        <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
          <ul>
            <li>1. MENU</li>

            <li>2. MENU</li>

            <li>3. MENU</li>
          </ul>
        </SideDrawer>
        <Header onShowCart={openDrawer} />
        <Input
          label="Name"
          input={{
            id: "name",
            type: "text",
            defaultValue: " ",
          }}
        />
        <Button onClick={openDrawer}>Submit</Button>
      </Card>
    </div>
  );
}

export default App;
