import { View } from "@react-pdf/renderer";
import { ComplementaryCard } from "../components/ComplementaryCard";
import { StandardListItem } from "../components/StandardListItem";

export function ComplementaryActions() {
  const stepsContent = [
    "Strengthen calculated carbon stocks by substituting regional/local values in place of Tier 1 default values",
    "Compare calculated carbon stock values to existing activity data, and use results to improve your GHG inventory",
    "Integrate calculated carbon stocks into your FRL/FREL",
  ];

  return (
    <ComplementaryCard>
      <View>
        {stepsContent.map((step, index) => (
          <StandardListItem key={index}>{step}</StandardListItem>
        ))}
      </View>
    </ComplementaryCard>
  );
}
