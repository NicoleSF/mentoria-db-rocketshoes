import { CartContextProvider } from "./context/CartContex";
import { Routers } from "./routes";

function App() {
  return (
    <CartContextProvider>
      <div>
        <Routers />
      </div>
    </CartContextProvider>
  );
}

export default App;
