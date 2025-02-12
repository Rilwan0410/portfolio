import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import { Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <Navbar />
      <Container>
        <App />
      </Container>
    </Provider>
  </StrictMode>
);
