import { Text, View, Image } from "@react-pdf/renderer";

export function Head(props: any) {
  const { image, pillar, title, subtitle } = props;
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 42,
        marginBottom: 8,
      }}
    >
      <Image src={image} style={{ width: "1.5in" }} />
      <View style={{ marginLeft: 8 }}>
        <Text>Pillar {pillar}</Text>
        <Text style={{ fontSize: 20 }}>{title}</Text>
        <Text style={{ fontSize: 14 }}>{subtitle}</Text>
      </View>
    </View>
  );
}
