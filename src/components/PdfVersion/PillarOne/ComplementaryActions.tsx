import { View } from "@react-pdf/renderer";
import { StandardListItem } from "../components/StandardListItem";
import { ComplementaryCard } from "../components/ComplementaryCard";

export function ComplementaryActions() {
  return (
    <ComplementaryCard>
      <View>
        {content.map((c) => (
          <StandardListItem>{c}</StandardListItem>
        ))}
      </View>
    </ComplementaryCard>
  );
}

const content = [
  "Build up your country’s capacity to collect blue carbon data by funding and/or collaborating with technical and scientific organizations",
  "Leverage collaborations—interagency as well as the private sector—to further development of robust and relevant datasets on BCE’s for your country",
  "Pilot or encourage non-state-actors to pilot Blue Carbon projects by providing access to site and data",
];
