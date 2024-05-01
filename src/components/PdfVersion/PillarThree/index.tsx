import { MainContentCard } from "../components/MainContentCardPdf";

import { ConsiderIcon } from "../icons/ConsiderIcon";

import { BlueCarbonFinanceFramework } from "./BlueCarbonFinanceFramework";
import { NoBlueCarbonFinanceFramework } from "./NoBlueCarbonFinanceFramework";
import { NoOperationalizationOrMarkets } from "./NoOperationalizationOrMarkets";
import { Text, View } from "@react-pdf/renderer";

import P3Logo from "../../../assets/p3@0.5x.png";

import { Head } from "../components/Head";
import { PillarProps } from "..";
import { processPillarData } from "../../../routes/Completed/utils";
import { StandardListItem } from "../components/StandardListItem";

function P3Head() {
  return (
    <Head
      image={P3Logo}
      pillar={3}
      title="FINANCE"
      subtitle="Leverage Blue Carbon Finance"
    />
  );
}

export function PillarThree(props: PillarProps) {
  const { data } = props;
  const { processedData: structuredData, okContinue } = processPillarData(
    data,
    "1b"
  );

  return (
    <>
      <P3Head />
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

      <MainContentCard
        cardHeader={"Consider:"}
        content={
          <View>
            <StandardListItem>
              Using Article 6 of the Paris Climate Agreement
            </StandardListItem>
            <StandardListItem>
              Allowing Voluntary Carbon Markets with corresponding adjustments
            </StandardListItem>
          </View>
        }
        icon={<ConsiderIcon />}
      />
    </>
  );
}
