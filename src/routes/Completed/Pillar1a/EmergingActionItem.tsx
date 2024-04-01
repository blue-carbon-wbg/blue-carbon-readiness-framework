import { List, ListItem, ListItemDecorator, Typography } from "@mui/joy";
import { MainContentCard } from "../../../components/MainContentCard";
import { CheckCircleOutline } from "@mui/icons-material";

export function EmergingActionItem({
  emergingItems,
}: {
  emergingItems: string[];
}) {
  const emergingText: string = emergingItems
    ? emergingItems.length > 1
      ? `${emergingItems.slice(0, -1).join(", ")} and ${emergingItems.slice(
          -1
        )}`
      : emergingItems[0]
    : "";

  return (
    <MainContentCard
      cardHeader={`Because your country has the emerging BCE${
        emergingItems.length > 1 ? "s " : " "
      } ${emergingText}:`}
      content={<EmergingBCEs />}
      CardProps={{
        color: "action",
        variant: "outlined",
        sx: { borderWidth: "2px" },
      }}
    />
  );
}

function EmergingBCEs() {
  return (
    <>
      <Typography level="h4">Perform actionability assessment</Typography>
      Mangroves, salt marshes, and seagrass beds are considered the established
      or “actionable” Blue Carbon ecosystems. Some emerging Blue Carbon
      ecosystems may be on their way to actionability if they meet all the
      following requirements:
      <List>
        <EmergingBCEListItem text="Scale: The scale of greenhouse gas removals or emissions is significant" />
        <EmergingBCEListItem text="Longevity: The ecosystems can store the CO2 sequestered long-term" />
        <EmergingBCEListItem text="Threat: Anthropogenic impacts on the ecosystems are leading to CO2 emissions" />
        <EmergingBCEListItem text="Viability: It is practically viable to manage the ecosystems concerned sustainably and reduce CO2 emissions or enhance existing carbon stock" />
        <EmergingBCEListItem text="Knowledge: The science behind these findings is sufficiently robust" />
      </List>
    </>
  );
}

function EmergingBCEListItem({ text }: { text: string }) {
  return (
    <ListItem>
      <ListItemDecorator>
        <CheckCircleOutline />
      </ListItemDecorator>
      {text}
    </ListItem>
  );
}
