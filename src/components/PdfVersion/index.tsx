import FontMain from "@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff";
import FontMedium from "@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-500-normal.woff";
import FontBold from "@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-700-normal.woff";
import FontSerif from "@fontsource/ibm-plex-serif/files/ibm-plex-serif-latin-500-normal.woff";
import {
  Document,
  Page,
  Font,
  Svg,
  Circle,
  Path,
  PDFViewer,
  View,
  Text,
} from "@react-pdf/renderer";

import { styles } from "./styles";
import { useAppContext } from "../../context";
import { StateData } from "../../types";
import { PillarOneB } from "./PillarOneB";
import { PillarOne } from "./PillarOne";
import { PillarTwo } from "./PillarTwo";
import { PillarThree } from "./PillarThree";
import { IntroPage } from "./IntroPage";

export interface PillarProps {
  data: StateData[];
}

Font.register({
  family: "BCRF",
  fonts: [
    { src: FontMain },
    { src: FontMedium, fontWeight: "medium" },
    { src: FontBold, fontWeight: "bold" },
  ],
});

Font.register({ family: "FontSerif", src: FontSerif });
// Example usage inside a Document
const MyDocument = () => {
  const {
    state: [data],
  } = useAppContext();
  console.log(data);
  return (
    <div style={{ height: "100vh", width: "100%", display: "flex" }}>
      <PDFViewer width="100%">
        <DocumentBase data={data} />
      </PDFViewer>
    </div>
  );
};

export const DocumentBase = ({ data }: { data: StateData[] }) => (
  <Document>
    <Page size="LETTER" style={{ flex: 1, padding: 30, ...styles.document }}>
      <IntroPage />
    </Page>
    <Page size="LETTER" style={{ flex: 1, padding: 30, ...styles.document }}>
      <Header />
      <PillarOne data={data} />
      <Footer />
    </Page>
    <Page size="LETTER" style={{ flex: 1, padding: 30, ...styles.document }}>
      <Header />
      <PillarOneB data={data} />
      <Footer />
    </Page>
    <Page size="LETTER" style={{ flex: 1, padding: 30, ...styles.document }}>
      <Header />
      <PillarTwo data={data} />
      <Footer />
    </Page>
    <Page size="LETTER" style={{ flex: 1, padding: 30, ...styles.document }}>
      <Header />
      <PillarThree data={data} />
      <Footer />
    </Page>
  </Document>
);
export default MyDocument;

function Header() {
  return (
    <View style={styles.pageHeader} fixed>
      <Text>Custom Report</Text>
      <Text style={{ textAlign: "right" }}>
        Blue Carbon Readiness Framework
      </Text>
    </View>
  );
}

function Footer() {
  return (
    <View
      style={styles.pageFooter}
      fixed
      render={({ pageNumber }) => (
        <Text style={{ fontSize: 10, textAlign: "center" }}>
          Page {pageNumber}
        </Text>
      )}
    />
  );
}
/*
const CircledOne = () => (
  <Svg viewBox="0 0 256 256" height={22} width={22}>
    <Path
      fill="#1eb100"
      fill-rule="evenodd"
      stroke="none"
      d="M 256 128 C 256 57.307556 198.692444 0 128 0 C 57.307552 0 0 57.307556 0 128 C 0 198.692444 57.307552 256 128 256 C 198.692444 256 256 198.692444 256 128 Z"
    />
    <Path
      fill="#ffffff"
      fill-rule="evenodd"
      stroke="none"
      d="M 85.5625 96.64502 L 85.5625 82.183075 C 99.18615 80.855637 108.68763 78.637451 114.067223 75.528473 C 119.446823 72.419495 123.463989 65.066315 126.118858 53.46875 L 141 53.46875 L 141 202.908966 L 120.879021 202.908966 L 120.879021 96.64502 Z"
    />
  </Svg>
);
*/
