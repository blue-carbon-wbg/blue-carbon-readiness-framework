import { View } from "@react-pdf/renderer";
import { MainContentCard } from "../components/MainContentCardPdf";
import { styles } from "../styles";
import React, { ReactNode } from "react";
import { OrderedListItem } from "../components/OrderedListItem";

export function EstablishedActionItem({
  missingData,
}: {
  missingData: {
    saltmarshes: string[];
    seagrasses: string[];
    mangroves: string[];
  };
}) {
  const content = Object.keys(missingData)
    .map((key) => {
      const dataTypes = missingData[key as keyof typeof missingData]
        .map((type) => (type === "human" ? "human activity" : "spatial"))
        .join(" and ");
      return dataTypes.length > 0 ? `${dataTypes} data for ${key}` : "";
    })
    .filter((text) => text !== "");

  const formattedText =
    content.length === 1
      ? content[0]
      : content.length === 2
      ? `${content[0]} and ${content[1]}`
      : `${content.slice(0, -1).join(", ")} and ${content.slice(-1)}`;

  return (
    <MainContentCard
      cardHeader={`Because your country is missing ${formattedText}:`}
      content={<ActionSteps />}
    />
  );
}

function ActionSteps() {
  return (
    <View>
      <OrderedListView>
        {[
          "Follow Checklist 2 for GHG inventories steps to gather the necessary data and;",
          "Check if relevant data can be extrapolated from existing policy and/or knowledge frameworks, such as the Ramsar Convention or National Adaptation Plan",
        ].map((step, idx) => (
          <OrderedListItem index={idx}>{step}</OrderedListItem>
        ))}
      </OrderedListView>
    </View>
  );
}

// OrderedListView component
const OrderedListView = ({ children }: { children: ReactNode }) => (
  <View style={styles.content}>{children}</View>
);
