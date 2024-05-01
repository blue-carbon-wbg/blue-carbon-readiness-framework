import { Text, View } from "@react-pdf/renderer";
import { styles } from "../styles";
import React, { ReactNode } from "react";

// ListItemView component
export const OrderedListItem = ({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) => (
  <View style={styles.listItem}>
    <Text style={styles.bulletPoint}>{index + 1}.</Text>
    <Text style={{ paddingRight: 4 }}>{children}</Text>
  </View>
);
