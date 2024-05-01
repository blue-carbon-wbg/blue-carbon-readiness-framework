import { MainContentCard } from "../components/MainContentCardPdf";
import { ConsiderIcon } from "../icons/ConsiderIcon";
import { Typography } from "../components/Typography";
import { View } from "@react-pdf/renderer";
import { StandardListItem } from "../components/StandardListItem";
export function NoOperationalizationOrMarkets({ which }: { which: string }) {
  return (
    <MainContentCard
      cardHeader={
        which === "markets"
          ? "Because your country doesn't intend to use carbon markets as a means of investment:"
          : "Because your country hasn't operationalized specific funding tools:"
      }
      content={
        <>
          <Typography level="title-lg">
            Consider operationalizing funding tools, leveraging tools such as:
          </Typography>
          <View>
            <StandardListItem>
              Concessional instruments, including blended finance instruments
              and philanthropy
            </StandardListItem>
            <StandardListItem>
              Dedicated sovereign and/or corporate debt finance instruments
              (blue loans, blue bonds)
            </StandardListItem>
            <StandardListItem>
              Blue infrastructure /NBS finance
            </StandardListItem>
            <StandardListItem>
              Business models that stack multiple revenue streams
            </StandardListItem>
            <StandardListItem>
              Results-Based Carbon Finance (RBCF)
            </StandardListItem>
            <StandardListItem>
              Blue carbon project finance (carbon markets)
            </StandardListItem>
          </View>
          <Typography level="body-lg">
            Review Checklist 9 for examples and guidelines on leveraging
            investment.
          </Typography>
        </>
      }
      icon={<ConsiderIcon />}
    />
  );
}
