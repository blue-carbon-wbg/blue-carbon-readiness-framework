import { StyleSheet } from "@react-pdf/renderer";

const BODY_FONT_SIZE = 11;
const SUBHEADING_FONT_SIZE = BODY_FONT_SIZE + 2;
const HEADING_FONT_SIZE = BODY_FONT_SIZE + 4;

const DOCUMENT_GUTTERS = 24;
const SPACING = 8;

export const styles = StyleSheet.create({
  document: {
    backgroundColor: "#E5FAFF",
    fontSize: BODY_FONT_SIZE,
    fontFamily: "BCRF",
    paddingLeft: DOCUMENT_GUTTERS,
    paddingRight: DOCUMENT_GUTTERS,
  },
  card: {
    paddingLeft: SPACING * 2,
    paddingRight: SPACING * 2,
    paddingTop: SPACING,
    paddingBottom: SPACING / 2,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: SPACING,
    marginTop: SPACING,
  },
  header: {
    fontSize: SUBHEADING_FONT_SIZE,
    fontWeight: "medium",
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  content: { marginBottom: SPACING },
  contentTitle: { fontWeight: "bold", fontSize: HEADING_FONT_SIZE },
  actions: {
    justifyContent: "center",
    textAlign: "center",
    marginTop: 10,
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    marginLeft: SPACING * 2,
    marginTop: SPACING / 2,
    alignItems: "flex-start",
  },
  orderedListContainer: {
    marginLeft: 10,
  },
  bulletPoint: {
    width: 10,
    marginRight: 5,
  },
  pageHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -15,
    marginBottom: 10,
    fontSize: BODY_FONT_SIZE - 3,
  },
  pageFooter: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: -15,
    marginTop: 10,
    fontSize: BODY_FONT_SIZE - 3,
    position: "absolute",
    bottom: DOCUMENT_GUTTERS * 1.5,
    right: DOCUMENT_GUTTERS,
  },
  _action: {
    borderColor: "rgb(154, 186, 224)",
    backgroundColor: "rgb(204, 220, 239)",
  },
  _recommendation: {
    borderColor: "rgb(154, 186, 224)",
    backgroundColor: "rgb(255, 255, 255)",
  },
  _complementary: {
    borderColor: "rgb(67, 64, 14)",
    backgroundColor: "rgb(226, 226, 218)",
  },
  _privateSector: {
    borderColor: "#9AC29B",
    backgroundColor: "#ADDDAC",
  },
  _reddPlus: {
    border: "2px dashed #A5A24A",
  },
});
