import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define styles
const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: "#000",
    borderStyle: "solid",
  },
  header: {
    fontSize: 18,
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
const MainContentCard = ({ cardHeader, content }) => (
  <View style={styles.card}>
    <Text style={styles.header}>{cardHeader}</Text>
    <View style={styles.content}>{content}</View>
  </View>
);

// Adapted EmergingActionItem for @react-pdf/renderer
const EmergingActionItem = ({ emergingItems }) => {
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
