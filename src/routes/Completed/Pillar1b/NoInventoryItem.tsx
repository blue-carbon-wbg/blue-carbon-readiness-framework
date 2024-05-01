import { Typography } from "@mui/joy";
import { MainContentCard } from "../../../components/MainContentCard";

export function NoInventoryItem() {
  return (
    <MainContentCard
      cardHeader={`Because your country does not include BCEs in its GHG inventory:`}
      content={
        <Typography level="body-lg">
          Use the Wetland Supplement and Tier 1 default values (or Tier 2/3
          depending on available data) to determine carbon stock values for your
          country’s BCE(s). Refer to{" "}
          <a href="checklists/checklist_3-WBG_BLUE_CARBON.pdf">Checklist 3</a>{" "}
          for steps and guidelines.
        </Typography>
      }
      CardProps={{
        color: "action",
        variant: "outlined",
        sx: { borderWidth: "2px" },
      }}
    />
  );
}
