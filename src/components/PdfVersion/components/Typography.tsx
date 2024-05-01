import { styles } from "../styles";
import { Text } from "@react-pdf/renderer";
export function Typography({
  level,
  children,
}: {
  level: string;
  children: React.ReactNode;
}) {
  return (
    <Text style={level === "title-lg" ? styles.contentTitle : {}}>
      {children}
    </Text>
  );
}
