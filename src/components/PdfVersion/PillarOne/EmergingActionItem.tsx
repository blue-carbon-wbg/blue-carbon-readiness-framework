import { ReactNode } from "react";
import { Text, View, Svg, Path } from "@react-pdf/renderer";
import { styles } from "../styles";
import { MainContentCard } from "../components/MainContentCardPdf";
import { ContentSection } from "../components/ContentSection";

export const EmergingActionItem = ({ emergingItems }: any) => {
  const emergingText =
    emergingItems.length > 1
      ? `${emergingItems.slice(0, -1).join(", ")} and ${emergingItems.slice(
          -1
        )}`
      : emergingItems[0];

  return (
    <MainContentCard
      cardHeader={`Because your country has the emerging BCE${
        emergingItems.length > 1 ? "s" : " "
      } ${emergingText}:`}
      content={<EmergingBCEs />}
    />
  );
};

const EmergingBCEs = () => (
  <ContentSection
    title="Perform actionability assessment"
    body={<EmergingBCEBody />}
  />
);
const EmergingBCEBody = () => (
  <>
    <Text>
      Mangroves, salt marshes, and seagrass beds are considered the established
      or “actionable” Blue Carbon ecosystems. Some emerging Blue Carbon
      ecosystems may be on their way to actionability if they meet all the
      following requirements:
    </Text>
    {[
      "Scale: The scale of greenhouse gas removals or emissions is significant",
      "Longevity: The ecosystems can store the CO2 sequestered long-term",
      "Threat: Anthropogenic impacts on the ecosystems are leading to CO2 emissions",
      "Viability: It is practically viable to manage the ecosystems concerned sustainably and reduce CO2 emissions or enhance existing carbon stock",
      "Knowledge: The science behind these findings is sufficiently robust",
    ].map((text) => (
      <EmergingBCEListItem>{text}</EmergingBCEListItem>
    ))}
  </>
);
const EmergingBCEListItem = ({ children }: { children: ReactNode }) => (
  <View style={styles.listItem}>
    <MuiCheckmarkCircleOutlined />
    <Text style={{ marginLeft: "8px" }}>{children}</Text>
  </View>
);
const MuiCheckmarkCircleOutlined = () => (
  <Svg
    height="12px"
    width="12px"
    viewBox="0 0 22 22"
    preserveAspectRatio=""
    style={{ marginTop: "1.5px" }}
  >
    <Path
      d={
        "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"
      }
      fill="black"
    />
  </Svg>
);
