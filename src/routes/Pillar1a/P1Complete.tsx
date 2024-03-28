import { List, ListItem, ListItemDecorator, Typography } from "@mui/joy";
import { MainContentCard } from "../../components/MainContentCard";
import { useAppContext } from "../../context";
import { Check, CheckCircleOutline, Done } from "@mui/icons-material";

export function P1Complete() {
  const {
    state: [data, setData],
  } = useAppContext();

  const emergingItems = data
    .find((i) => i.id === 1)
    ?.value.filter((i) => ["macroalgae", "sediments", "mudflats"].includes(i));

  const establishedItems = data
    .find((i) => i.id === 1)
    ?.value.filter((i) =>
      ["mangroves", "saltmarshes", "seagrasses"].includes(i)
    );

  const prevEstablishedItems = data
    .find((i) => i.id === 3)
    ?.value.filter((i) =>
      ["mangroves", "saltmarshes", "seagrasses"].includes(i)
    );

  const establishedData = data.find((i) => i.id === 2)?.value;

  return (
    <>
      <MainContentCard
        cardHeader={"Actions: Emerging BCEs"}
        content={<EmergingBCEs />}
        actions={[]}
        CardProps={{
          color: "action",
          variant: "outlined",
          sx: { borderWidth: "2px" },
        }}
      />
      <MainContentCard
        cardHeader={"Actions: Established BCE Data"}
        content={<EstablishedBCEs />}
        actions={[]}
        CardProps={{
          color: "action",
          variant: "outlined",
          sx: { borderWidth: "2px" },
        }}
      />
      <MainContentCard
        cardHeader={"Recommended: Economic Valuation"}
        content={
          <Typography>
            Conduct economic valuation using global regional or local data
          </Typography>
        }
        actions={[]}
        CardProps={{
          color: "primary",
          variant: "outlined",
          sx: { borderWidth: "2px" },
        }}
      />
      <MainContentCard
        cardHeader={"Use results from completed action/steps to:"}
        content={
          <List marker="disc">
            <ListItem>
              Build up your country’s capacity to collect blue carbon data by
              funding and/or collaborating with technical and scientific
              organizations
            </ListItem>
            <ListItem>
              Leverage collaborations—interagency as well as the private
              sector—to further development of robust and relevant datasets on
              BCE’s foryour country
            </ListItem>
            <ListItem>
              Pilot or encourage non-state-actors to pilot Blue Carbon projects
              by providing access to site and data
            </ListItem>
          </List>
        }
        actions={[]}
        CardProps={{
          color: "complementary",
          variant: "outlined",
          sx: { borderWidth: "2px" },
        }}
      />
    </>
  );
}

function EstablishedBCEs() {
  return (
    <>
      <List component="ol" marker="decimal">
        <ListItem>
          Follow Checklist 2 for GHG inventories steps to gather the necessary
          data and;
        </ListItem>
        <ListItem>
          Check if relevant data can be extrapolated from existing policy and/
          or knowledge frameworks, such as the Ramsar Convention or National
          Adaptation Plan
        </ListItem>
      </List>
    </>
  );
}

function EmergingBCEs() {
  return (
    <>
      <Typography level="title-md">Perform actionability assessment</Typography>
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
