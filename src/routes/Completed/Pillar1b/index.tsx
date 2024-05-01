import { List, ListItem, Typography } from "@mui/joy";
import { MainContentCard } from "../../../components/MainContentCard";

import { ReactComponent as ComplementaryIcon } from "../../../assets/static/complementary.svg";
import { CompletedPillarProps } from "..";
import { NoInventoryItem } from "./NoInventoryItem";
import { NoSupplementItem } from "./NoSupplementItem";
import { ForestReferenceLevels } from "./ForestReferenceLevels";

export function Pillar1b({ structuredData, okContinue }: CompletedPillarProps) {
  return (
    <>
      {!structuredData.bceInventory && <NoInventoryItem />}
      {!structuredData.wetlandsSupplement && <NoSupplementItem />}
      {structuredData.reddPlus && (
        <ForestReferenceLevels yes={!!structuredData.frel} />
      )}
      {true && (
        <MainContentCard
          cardHeader={"Use results from completed action/steps to:"}
          content={
            <List marker="disc">
              <ListItem>
                <Typography level="body-lg">
                  Strengthen calculated carbon stocks by substituting regional/
                  local values in place of Tier 1 default values
                </Typography>
              </ListItem>
              <ListItem>
                <Typography level="body-lg">
                  Compare calculated carbon stock values to existing activity
                  data, and use results to improve your GHG inventory
                </Typography>
              </ListItem>
              <ListItem>
                <Typography level="body-lg">
                  Integrate calculated carbon stocks into your FRL/FREL
                </Typography>
              </ListItem>
            </List>
          }
          CardProps={{
            color: "complementary",
            variant: "outlined",
            sx: { borderWidth: "2px", my: 3 },
          }}
          icon={<ComplementaryIcon />}
        />
      )}
    </>
  );
}
