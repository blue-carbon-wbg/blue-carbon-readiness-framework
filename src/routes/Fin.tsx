import { Box, Button, Stack, Typography } from "@mui/joy";
import { MainContentCard } from "../components/MainContentCard";
import { ReactComponent as FinishedIcon } from "../assets/static/youre_done.svg";
export function Fin() {
  return (
    <Stack
      sx={{
        flexBasis: "1000px",
        flexGrow: 0,
        display: "flex",
      }}
    >
      <MainContentCard
        cardHeader="Congratulations! You have finished the assessment."
        content={
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <FinishedIcon />
          </Box>
        }
        actions={<Button>Download Report</Button>}
      />
    </Stack>
  );
}
