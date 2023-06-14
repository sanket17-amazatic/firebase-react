import "./App.css";
import { signInWithGoogle } from "./firebaseConfig";

function App() {
  return (
    <div className="App">
      <button className="login__btn login__google" onClick={signInWithGoogle}>
        Login with Google
      </button>
    </div>
  );
}

export default App;
