import { ReactNode } from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "../styles";

export const ContentSection = ({
  title,
  body,
}: {
  title: string;
  body: ReactNode;
}) => (
  <>
    <Text style={styles.contentTitle}>{title}</Text>
    <View>{body}</View>
  </>
);
