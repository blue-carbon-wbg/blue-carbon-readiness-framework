import { Text } from "@react-pdf/renderer";
import { MainContentCard } from "../components/MainContentCardPdf";

export function NoInventory() {
  return (
    <MainContentCard
      cardHeader={`Because your country does not include BCEs in its GHG inventory:`}
      content={
        <Text>
          Use the Wetland Supplement and Tier 1 default values (or Tier 2/3
          depending on available data) to determine carbon stock values for your
          country’s BCE(s). Refer to Checklist 3 for steps and guidelines.
        </Text>
      }
    />
  );
}
