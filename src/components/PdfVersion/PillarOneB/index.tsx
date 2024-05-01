import { Text } from "@react-pdf/renderer";

import P1Logo from "../../../assets/p1b@0.5x.png";
import { ReddPlusActionCard } from "./ReddPlusActionCard";
import { processPillarData } from "../../../routes/Completed/utils";
import { Head } from "../components/Head";
import { PillarProps } from "..";
import { ComplementaryActions } from "./ComplementaryActions";
import { NoSupplement } from "./NoSupplement";
import { NoInventory } from "./NoInventory";

function P1BHead() {
  return (
    <Head
      image={P1Logo}
      pillar={1}
      title="DATA & ANALYTICS"
      subtitle={
        <>
          <Text style={{ color: "#44BF02", fontWeight: "bold" }}>B: </Text>
          Assess GHG Inventories
        </>
      }
    />
  );
}

export function PillarOneB(props: PillarProps) {
  const { data } = props;
  const { processedData: structuredData, okContinue } = processPillarData(
    data,
    "1b"
  );

  return (
    <>
      <P1BHead />
      {!structuredData.bceInventory && <NoInventory />}
      {!structuredData.wetlandsSupplement && <NoSupplement />}
      {structuredData.reddPlus && (
        <ReddPlusActionCard yes={!!structuredData.reddPlus} />
      )}
      <ComplementaryActions />
    </>
  );
}
