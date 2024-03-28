import { Sheet, CssVarsProvider, Stack } from "@mui/joy";
import theme from "../../theme";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { AppContextProvider } from "../../context";

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <AppContextProvider>
        <Stack
          direction="row"
          sx={{ minHeight: "100vh", height: "100%", width: "100%" }}
          component={Sheet}
          variant="soft"
        >
          <Sheet
            variant="soft"
            invertedColors
            sx={{
              pt: "4rem",
              pl: "1rem",
              display: "flex",
              justifyContent: "end",
              width: "344px",
            }}
          >
            <Sidebar />
          </Sheet>
          <Sheet
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              width: "100%",
            }}
            variant="soft"
          >
            <Outlet />
          </Sheet>
        </Stack>
      </AppContextProvider>
    </CssVarsProvider>
  );
}

export default App;
