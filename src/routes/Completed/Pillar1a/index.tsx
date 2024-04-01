import { List, ListItem, Typography } from "@mui/joy";
import { MainContentCard } from "../../../components/MainContentCard";
import { EmergingActionItem } from "./EmergingActionItem";

import { ReactComponent as RecommendedIcon } from "../../../assets/static/recommended.svg";
import { ReactComponent as ComplementaryIcon } from "../../../assets/static/complementary.svg";
import { CompletedPillarProps } from "..";

export function Pillar1a({ structuredData, okContinue }: CompletedPillarProps) {
  return (
    <>
      {structuredData.emerging.length !== 0 && (
        <EmergingActionItem emergingItems={structuredData.emerging} />
      )}
      {!(
        structuredData.missing.mangroves.length === 0 &&
        structuredData.missing.seagrasses.length === 0 &&
        structuredData.missing.saltmarshes.length === 0
      ) && <EstablishedActionItem missingData={structuredData.missing} />}
      {okContinue && (
        <>
          <MainContentCard
            cardHeader={"Recommended: Economic Valuation"}
            content={
              <Typography level="body-lg">
                If economic valuations of your established BCEs are not
                available, it is recommended that you conduct economic valuation
                using global, regional, or local data.
              </Typography>
            }
            CardProps={{
              color: "primary",
              variant: "outlined",
              sx: { borderWidth: "2px" },
            }}
            icon={<RecommendedIcon />}
          />

          <MainContentCard
            cardHeader={"Use results from completed action/steps to:"}
            content={
              <List marker="disc">
                <ListItem>
                  <Typography level="body-lg">
                    Build up your country’s capacity to collect blue carbon data
                    by funding and/or collaborating with technical and
                    scientific organizations
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography level="body-lg">
                    Leverage collaborations—interagency as well as the private
                    sector—to further development of robust and relevant
                    datasets on BCE’s foryour country
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography level="body-lg">
                    Pilot or encourage non-state-actors to pilot Blue Carbon
                    projects by providing access to site and data
                  </Typography>
                </ListItem>
              </List>
            }
            CardProps={{
              color: "complementary",
              variant: "outlined",
              sx: { borderWidth: "2px", mb: 3 },
            }}
            icon={<ComplementaryIcon />}
          />
        </>
      )}
    </>
  );
}

function EstablishedActionItem({
  missingData,
}: {
  missingData: {
    saltmarshes: string[];
    seagrasses: string[];
    mangroves: string[];
  };
}) {
  const missingTextElems: string[] = Object.keys(missingData)
    .map((i) => {
      if (missingData[i as keyof typeof missingData].length === 0) return "";
      return `${missingData[i as keyof typeof missingData]
        .map((j) => (j === "human" ? "human activity" : "spatial"))
        .join(" and ")} data for ${i}`;
    })
    .filter((i) => i !== "");

  const missingText =
    missingTextElems.length === 1
      ? missingTextElems[0]
      : missingTextElems.length === 2
      ? `${missingTextElems[0]} and ${missingTextElems[1]}`
      : `${missingTextElems
          .slice(0, -1)
          .join(", ")} and ${missingTextElems.slice(-1)}`;

  return (
    <MainContentCard
      cardHeader={`Because your country is missing ${missingText}:`}
      content={<EstablishedBCEs />}
      CardProps={{
        color: "action",
        variant: "outlined",
        sx: { borderWidth: "2px" },
      }}
    />
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
