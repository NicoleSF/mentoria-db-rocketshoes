import { CartContextProvider } from "./context/CartContex";
import { Routers } from "./routes";

function App() {
  return (
    <CartContextProvider>
      <Routers />
    </CartContextProvider>
  );
}

export default App;
