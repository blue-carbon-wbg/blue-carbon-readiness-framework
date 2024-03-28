import { Box, Button, Container, Typography } from "@mui/joy";
import { HeadingBox } from "../components/HeadingBox";
import { MainContentCard } from "../components/MainContentCard";
import { RouterButton } from "../components/RouterButton";

export function NoActions() {
  return (
    <Container sx={{ height: "100%", width: "100%" }}>
      <HeadingBox icon={null} title="" subtitle="" />
      <MainContentCard
        cardHeader={"No blue carbon actions available"}
        content={
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "stretch",
              flex: 1,
              display: "flex",
            }}
          >
            <Typography level="body-lg">
              Thank you for using the Blue Carbon Assessment Tool. As your
              country does not currently have or previously had any BCEs, there
              are no blue carbon actions available.
            </Typography>
          </Box>
        }
        actions={<RouterButton to="/">Start over</RouterButton>}
      />
    </Container>
  );
}
