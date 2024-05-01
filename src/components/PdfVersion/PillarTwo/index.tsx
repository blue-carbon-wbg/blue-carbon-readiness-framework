import { MainContentCard } from "../components/MainContentCardPdf";

import { ComplementaryIcon } from "../icons/ComplemenetaryIcon";

import { EmissionsRemovals } from "./EmissionsRemovals";
import { NoEmissionsRemovals } from "./NoEmissionsRemovals";
import { NoPlan } from "./NoPlan";
import { PlanGovernance } from "./PlanGovernance";

import P2Logo from "../../../assets/p2@0.5x.png";
import { Head } from "../components/Head";
import { PillarProps } from "..";
import { processPillarData } from "../../../routes/Completed/utils";
import { View } from "@react-pdf/renderer";
import { StandardListItem } from "../components/StandardListItem";
import { ComplementaryCard } from "../components/ComplementaryCard";

function P2Head() {
  return (
    <Head
      image={P2Logo}
      pillar={2}
      title="POLICY & INSTITUTIONS"
      subtitle="NDC Commitments & Implementation"
    />
  );
}

export function PillarTwo(props: PillarProps) {
  const { data } = props;
  const { processedData: structuredData, okContinue } = processPillarData(
    data,
    "1b"
  );

  return (
    <>
      <P2Head />
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

      <ComplementaryCard>
        <View>
          <StandardListItem>
            Use input data to inform biennial NDC reporting and accounting
          </StandardListItem>
          <StandardListItem>
            Design commitments for subsequent rounds of NDCs and long-term plans
          </StandardListItem>
          <StandardListItem>
            Seek synergies with policy actions across the board (SDG focus)
          </StandardListItem>
        </View>
      </ComplementaryCard>
    </>
  );
}
