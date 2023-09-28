import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import RegistrationForm from "./RegistrationForm";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RegistrationForm />
  </StrictMode>
);
