import { Text } from "@react-pdf/renderer";
import { MainContentCard } from "../components/MainContentCardPdf";
import { RecommendationIcon } from "../icons/RecommendationIcon";

export function EconomicValuation() {
  return (
    <MainContentCard
      cardHeader={"Recommended: Economic Valuation"}
      content={
        <Text>
          If economic valuations of your established BCEs are not available, it
          is recommended that you conduct economic valuation using global,
          regional, or local data.
        </Text>
      }
      icon={<RecommendationIcon />}
      variant="recommendation"
    />
  );
}
