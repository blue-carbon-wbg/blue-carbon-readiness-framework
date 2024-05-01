import { View } from "@react-pdf/renderer";
import { MainContentCard } from "../components/MainContentCardPdf";
import { StandardListItem } from "../components/StandardListItem";

export function ReddPlusActionCard({ yes }: { yes: boolean | null }) {
  return (
    <MainContentCard
      cardHeader={`Because your country engages in REDD+ and has${
        yes ? "" : " not"
      } submitted a Forest Reference Level / Forest Reference Emission Levels:`}
      content={<REDDPlusActionDetails yes={yes} />}
    />
  );
}

function REDDPlusActionDetails({ yes }: { yes: boolean | null }) {
  const content = yes
    ? [
        "Consider developing a REDD+ FRL/FREL with Blue Carbon integration",
        "Decide whether to build a separate blue carbon framework (using synergies)",
      ]
    : [
        "Review Checklist 4",
        "Confirm and iterate consistency between your Forest Reference Levels (FRL)/ Forest Reference Emission Levels (FREL) and your GHG inventory",
      ];

  return (
    <View>
      {content.map((text, index) => (
        <StandardListItem key={index}>{text}</StandardListItem>
      ))}
    </View>
  );
}
