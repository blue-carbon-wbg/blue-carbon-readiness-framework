import { List, ListItem, Typography } from "@mui/joy";
import { MainContentCard } from "../../../components/MainContentCard";

import { ReactComponent as ConsiderIcon } from "../../../assets/static/consider.svg";

import { CompletedPillarProps } from "..";
import { BlueCarbonFinanceFramework } from "./BlueCarbonFinanceFramework";
import { NoBlueCarbonFinanceFramework } from "./NoBlueCarbonFinanceFramework";
import { NoOperationalizationOrMarkets } from "./NoOperationalizationOrMarkets";

export function Pillar3({ structuredData, okContinue }: CompletedPillarProps) {
  return (
    <>
      {structuredData.blueCarbonFinance ? (
        <BlueCarbonFinanceFramework />
      ) : (
        <NoBlueCarbonFinanceFramework />
      )}
      {(!structuredData.specificTools || !structuredData.carbonMarkets) && (
        <NoOperationalizationOrMarkets
          which={structuredData.specificTools ? "markets" : "specific"}
        />
      )}
      {okContinue && (
        <>
          <MainContentCard
            cardHeader={"Consider:"}
            content={
              <List marker="disc">
                <ListItem>
                  <Typography level="body-lg">
                    Using Article 6 of the Paris Climate Agreement
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography level="body-lg">
                    Allowing Voluntary Carbon Markets with corresponding
                    adjustments
                  </Typography>
                </ListItem>
              </List>
            }
            CardProps={{
              sx: { mb: 3 },
            }}
            icon={<ConsiderIcon />}
          />
        </>
      )}
    </>
  );
}
