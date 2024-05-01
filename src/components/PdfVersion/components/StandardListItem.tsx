import { Circle, Svg, Text, View } from "@react-pdf/renderer";
import { styles } from "../styles";
import { ReactNode } from "react";

export function StandardListItem({ children }: { children: ReactNode }) {
  return (
    <View style={styles.listItem}>
      <Svg
        height="12px"
        width="12px"
        viewBox="0 0 12 12"
        preserveAspectRatio=""
        style={{ marginTop: "2px" }}
      >
        <Circle cx="6" cy="6" r="2.5" fill="black" />
      </Svg>
      <Text style={{ marginLeft: 8, paddingRight: 4 }}>{children}</Text>
    </View>
  );
}
