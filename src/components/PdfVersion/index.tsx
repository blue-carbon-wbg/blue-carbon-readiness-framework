import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E7F9FF",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  recommendedBox: {
    border: "2px solid #A9C7E6",
  },
});

export function PdfVersion({ data }: { data: any[] }) {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
}
