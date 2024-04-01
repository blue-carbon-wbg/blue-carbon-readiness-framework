import { List, ListItem, Typography } from "@mui/joy";
import { MainContentCard } from "../../../components/MainContentCard";

export function NoSupplementItem() {
  return (
    <MainContentCard
      cardHeader={`Because your country does not include apply the 2013 Wetlands Supplement/2019 Refinement:`}
      content={
        <>
          <Typography level="body-lg">
            Improve your GHG Inventory via integration of WS13/R19
          </Typography>
          <List marker="disc">
            <ListItem>
              <Typography level="body-lg">
                Identify where bottleneck(s) are – e.g., soil carbon data{" "}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography level="body-lg">
                Review Checklist 3 for ways to improve your existing inventory
              </Typography>
            </ListItem>
          </List>
        </>
      }
      CardProps={{
        color: "action",
        variant: "outlined",
        sx: { borderWidth: "2px" },
      }}
    />
  );
}
