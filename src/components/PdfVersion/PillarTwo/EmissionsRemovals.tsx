import { MainContentCard } from "../components/MainContentCardPdf";
import { FocusIcon } from "../icons/FocusIcon";
import { Text, View } from "@react-pdf/renderer";
import { ContentSection } from "../components/ContentSection";
import { OrderedListItem } from "../components/OrderedListItem";

export function EmissionsRemovals({ reddPlus }: { reddPlus: boolean }) {
  return (
    <MainContentCard
      cardHeader={
        "Because your country includes BCE emissions and removals in its NDC:"
      }
      content={
        <ContentSection
          title="Focus on Accounting for Emissions Reduction/Removals"
          body={<EmissionsRemovalsContent reddPlus={reddPlus} />}
        />
      }
      icon={<FocusIcon />}
    />
  );
}

function EmissionsRemovalsContent({ reddPlus }: { reddPlus: boolean }) {
  return (
    <>
      <Text>Review checklists 5 and 6.</Text>
      <View>
        <OrderedListItem index={1}>
          Consider inclusion in economy-wide or sector-wide (AFOLU) targets
        </OrderedListItem>
        <OrderedListItem index={2}>
          Include action-specific targets such as "restore x hectares of
          mangroves by [date]"
        </OrderedListItem>
      </View>
      {reddPlus && (
        <Text>
          If your country has a REDD+ framework that integrates BCEs, you should
          also build reference levels for conservation aligned with REDD+
          targets, and define sequestration targets for restoration.
        </Text>
      )}
    </>
  );
}
