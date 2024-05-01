import { Text } from "@react-pdf/renderer";
import { EmergingActionItem } from "./EmergingActionItem";
import { EconomicValuation } from "./EconomicValuation";
import { ComplementaryActions } from "./ComplementaryActions";
import { EstablishedActionItem } from "./EstablishedActionItems";
import P1Logo from "../../../assets/p1@0.5x.png";
import { processPillarData } from "../../../routes/Completed/utils";
import { Head } from "../components/Head";
import { PillarProps } from "..";

function P1Head() {
  return (
    <Head
      image={P1Logo}
      pillar={1}
      title="DATA & ANALYTICS"
      subtitle={
        <>
          <Text style={{ color: "#44BF00", fontWeight: "bold" }}>A: </Text>
          Evaluate Blue Carbon Actions
        </>
      }
    />
  );
}
export function PillarOne(props: PillarProps) {
  const { data } = props;
  const { processedData: structuredData, okContinue } = processPillarData(
    data,
    "1a"
  );
  return (
    <>
      <P1Head />
      {structuredData.emerging.length !== 0 && (
        <EmergingActionItem emergingItems={structuredData.emerging} />
      )}
      {!(
        structuredData.missing.mangroves.length === 0 &&
        structuredData.missing.seagrasses.length === 0 &&
        structuredData.missing.saltmarshes.length === 0
      ) && <EstablishedActionItem missingData={structuredData.missing} />}
      {structuredData.established.length !== 0 && <EconomicValuation />}
      <ComplementaryActions />
    </>
  );
}
