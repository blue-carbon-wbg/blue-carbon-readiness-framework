import { List, ListItem, Typography } from "@mui/joy";
import { MainContentCard } from "../../../components/MainContentCard";

import { ReactComponent as ComplementaryIcon } from "../../../assets/static/complementary.svg";
import { CompletedPillarProps } from "..";
import { EmissionsRemovals } from "./EmissionsRemovals";
import { NoEmissionsRemovals } from "./NoEmissionsRemovals";
import { NoPlan } from "./NoPlan";
import { PlanGovernance } from "./PlanGovernance";

export function Pillar2({ structuredData, okContinue }: CompletedPillarProps) {
  return (
    <>
      {structuredData.emissionsRemovals ? (
        <EmissionsRemovals reddPlus={!!structuredData.reddPlus} />
      ) : (
        <NoEmissionsRemovals reddPlus={!!structuredData.reddPlus} />
      )}
      {!structuredData.ndcPlan && (
        <NoPlan reddPlus={!!structuredData.reddPlus} />
      )}
      {!structuredData.planGovernance && (
        <PlanGovernance reddPlus={!!structuredData.reddPlus} />
      )}
      {okContinue && (
        <>
          <MainContentCard
            cardHeader={"Use results from completed action/steps to:"}
            content={
              <List marker="disc">
                <ListItem>
                  <Typography level="body-lg">
                    Use input data to inform biennial NDC reporting and
                    accounting
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography level="body-lg">
                    Design commitments for subsequent rounds of NDCs and
                    long-term plans
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography level="body-lg">
                    Seek synergies with policy actions across the board (SDG
                    focus)
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
