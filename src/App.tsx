import { Sheet, CssVarsProvider } from "@mui/joy";
import theme from "./theme";
import { Intro } from "./intro";

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <Sheet
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Intro />
      </Sheet>
    </CssVarsProvider>
  );
}

export default App;
