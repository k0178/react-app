import Button from "./components/Button";
import Alert from "./components/Alert";
import Input from "./forms/Input";
import ListGroup from "./components/ListGroup";
import { BiMoneyWithdraw } from "react-icons/bi";
import { useState } from "react";
import Like from "./components/Like";

function App() {
  let items = ["Los Angeles Lakers", "Denver Nuggets"];
  const [alertVisible, setAlertVisibility] = useState(false);
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div className="m-3 text-center">
      {alertVisible && (
        <Alert color="success" onClose={() => setAlertVisibility(false)}>
          Bet succesfully placed!
        </Alert>
      )}
      <BiMoneyWithdraw size={30} />

      <h1>Betting App</h1>
      <Input>1000</Input>

      <h1>Teams</h1>

      <ListGroup
        items={items}
        heading=""
        onSelectItem={handleSelectItem}
      ></ListGroup>

      <Button
        buttonClass="btn rounded-pill"
        color="success"
        onClick={() => console.log(setAlertVisibility(true))}
      >
        LOCK IN YOUR BET
      </Button>

      <Like onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;
