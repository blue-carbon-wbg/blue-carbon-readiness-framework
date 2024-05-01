import { Text, View } from "@react-pdf/renderer";
import { styles } from "../styles";
type Variant =
  | "action"
  | "recommendation"
  | "complementary"
  | "privateSector"
  | "reddPlus";
export const MainContentCard = ({
  cardHeader,
  content,
  icon,
  variant,
}: any) => (
  <View style={{ ...styles.card, ...getVariantMixin(variant) }} wrap={false}>
    <View style={styles.header}>
      {icon && <View style={{ marginRight: "8px" }}>{icon}</View>}
      <Text>{cardHeader}</Text>
    </View>
    <View style={styles.content}>{content}</View>
  </View>
);

const getVariantMixin = (variant: Variant) => {
  switch (variant) {
    case "recommendation":
      return styles._recommendation;
    case "complementary":
      return styles._complementary;
    case "privateSector":
      return styles._privateSector;
    case "reddPlus":
      return styles._reddPlus;
    case "action":
    default:
      return styles._action;
  }
};
