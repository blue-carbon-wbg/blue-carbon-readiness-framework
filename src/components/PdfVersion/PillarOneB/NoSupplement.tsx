import { Text, View } from "@react-pdf/renderer";
import { MainContentCard } from "../components/MainContentCardPdf";
import { ContentSection } from "../components/ContentSection";
import { StandardListItem } from "../components/StandardListItem";

export function NoSupplement() {
  return (
    <MainContentCard
      cardHeader={`Because your country does not include apply the 2013 Wetlands Supplement/2019 Refinement:`}
      content={
        <ContentSection
          title="Improve your GHG Inventory via integration of WS13/R19"
          body={
            <View>
              <StandardListItem>
                Identify where bottleneck(s) are – e.g., soil carbon data
              </StandardListItem>
              <StandardListItem>
                Review Checklist 3 for ways to improve your existing inventory
              </StandardListItem>
            </View>
          }
        />
      }
      CardProps={{
        color: "action",
        variant: "outlined",
        sx: { borderWidth: "2px" },
      }}
    />
  );
}
