import Button from "./components/Button";
import Alert from "./components/Alert";
import Input from "./forms/Input";

import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div className="m-3 text-center">
      {alertVisible && (
        <Alert color="success" onClose={() => setAlertVisibility(false)}>
          Bet succesfully entered!
        </Alert>
      )}

      <h1>Betting App</h1>
      <Input>1000</Input>

      <Button
        color="primary"
        onClick={() => console.log(setAlertVisibility(true))}
      >
        LOCK IN YOUR BET
      </Button>
    </div>
  );
}

export default App;
