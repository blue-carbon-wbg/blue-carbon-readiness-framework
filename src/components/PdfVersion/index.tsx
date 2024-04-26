import { ReactNode } from "react";
import FontRoboto from "../../assets/Roboto/Roboto-Regular.ttf";
import FontRobotoMedium from "../../assets/Roboto/Roboto-Medium.ttf";
import FontRobotoBold from "../../assets/Roboto/Roboto-Bold.ttf";
import FontMain from "@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  fonts: [
    { src: FontRoboto },
    { src: FontRobotoMedium, fontWeight: "medium" },
    { src: FontRobotoBold, fontWeight: "bold" },
  ],
});
// Define styles
const styles = StyleSheet.create({
  card: {
    padding: "24px",
    borderWidth: 2,
    borderColor: "rgb(154, 186, 224)",
    backgroundColor: "rgb(204, 220, 239)",
    borderStyle: "solid",
    borderRadius: "8px",
    marginLeft: "16px",
    marginRight: "16px",
    marginTop: "8px",
    flex: 1,
    fontFamily: "Roboto",
  },
  header: {
    fontSize: "14px",
    fontWeight: "medium",
    marginBottom: 10,
  },
  content: {
    marginBottom: 10,
  },
  actions: {
    justifyContent: "center",
    textAlign: "center",
    marginTop: 10,
  },
  listItem: {
    marginLeft: 10,
    marginTop: 5,
  },
});

// Adapted MainContentCard for @react-pdf/renderer
const MainContentCard = ({ cardHeader, content }: any) => (
  <View style={styles.card}>
    <Text style={styles.header}>{cardHeader}</Text>
    <View style={styles.content}>{content}</View>
  </View>
);

// Adapted EmergingActionItem for @react-pdf/renderer
const EmergingActionItem = ({ emergingItems }: any) => {
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

// Adapted EmergingBCEs for @react-pdf/renderer
const EmergingBCEs = () => (
  <>
    <Text
      style={{ fontFamily: "Roboto", fontWeight: "bold", fontSize: "16px" }}
    >
      Perform actionability assessment
    </Text>
    <Text style={{ fontFamily: "Roboto", fontSize: "12px" }}>
      Mangroves, salt marshes, and seagrass beds are considered the established
      or “actionable” Blue Carbon ecosystems. Some emerging Blue Carbon
      ecosystems may be on their way to actionability if they meet all the
      following requirements:
    </Text>
    {[
      "Scale: The scale of greenhouse gas removals or emissions is significant",
      "Longevity: The ecosystems can store the CO2 sequestered long-term",
    ].map((text) => (
      <Text key={text} style={styles.listItem}>
        {text}
      </Text>
    ))}
  </>
);

// Example usage inside a Document
const MyDocument = () => (
  <Document>
    <Page size="A4" style={{ flex: 1, padding: 30 }}>
      <EmergingActionItem
        emergingItems={["Mangroves", "Salt Marshes", "Seagrass Beds"]}
      />
    </Page>
  </Document>
);

export default MyDocument;
