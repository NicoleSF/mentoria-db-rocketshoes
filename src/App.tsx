import { OidcProvider } from "@axa-fr/react-oidc";
import { CartContextProvider } from "./context/CartContex";
import { Routers } from "./routes";

const configuration = {
  client_id: "interactive.public.short",
  redirect_uri: window.location.origin + "/authentication/callback",
  silent_redirect_uri:
    window.location.origin + "/authentication/silent-callback",
  scope: "openid profile email api offline_access", // offline_access scope allow your client to retrieve the refresh_token
  authority: "https://demo.duendesoftware.com",
  service_worker_relative_url: "/OidcServiceWorker.js",
  service_worker_only: false,
};

function App() {
  return (
    <OidcProvider configuration={configuration}>
      <CartContextProvider>
        <div>
          <Routers />
        </div>
      </CartContextProvider>
    </OidcProvider>
  );
}

export default App;
