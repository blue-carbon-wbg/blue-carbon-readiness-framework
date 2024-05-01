import { MainContentCard } from "../components/MainContentCardPdf";
import { RecommendationIcon } from "../icons/RecommendationIcon";
import { FocusIcon } from "../icons/FocusIcon";
import { ReddPlusIcon } from "../icons/ReddPlusIcon";
import { Typography } from "../components/Typography";
import { View } from "@react-pdf/renderer";
import { StandardListItem } from "../components/StandardListItem";

export function NoEmissionsRemovals({ reddPlus }: { reddPlus: boolean }) {
  return (
    <>
      <MainContentCard
        cardHeader={
          "Because your country does not include BCE emissions and removals in its NDC:"
        }
        content={
          <>
            <Typography level="title-lg">
              1. Consider extending the scope of your NDC to account for BCEs
            </Typography>
            <View>
              <StandardListItem>
                Make sure your GHG inventory can accurately report emissions and
                removals from BCE(s). If your country cannot yet do this, you
                can still acknowledge the mitigation impact of BC interventions
                (Move to Box 2 below.)
              </StandardListItem>
              <StandardListItem>
                Turning this procedural milestone into a target, e. g., by
                [Year] or when submitting the second Biennial Transparency
                Report, [Country] will use the WS13 and account for all
                anthropogenic carbon stock changes in [BC Habitat] and [BC
                Habitat 2].
              </StandardListItem>
            </View>
            {reddPlus && (
              <Typography level="body-lg">
                If your country has a REDD+ framework that integrates BCEs, you
                should also build reference levels for conservation aligned with
                REDD+ targets, and define sequestration targets for restoration.
              </Typography>
            )}
          </>
        }
        icon={<RecommendationIcon />}
      />
      <MainContentCard
        cardHeader={
          "Because your country does not include BCE emissions and removals in its NDC:"
        }
        content={
          <>
            <Typography level="title-lg">
              2. Focus on acknowledging mitigation impact of Blue Carbon
              interventions and formulating stand-alone (action) targets:
            </Typography>
            <View>
              <StandardListItem>
                Halt and reverse all degradation in [BC Habitat]
              </StandardListItem>
              <StandardListItem>
                Restore [#] hectares of [BC Habitat]
              </StandardListItem>
            </View>
          </>
        }
        icon={<FocusIcon />}
      />
      {reddPlus && (
        <MainContentCard
          cardHeader={"Because your country participates in REDD+:"}
          content={
            <Typography level="body-lg">
              Synchronize and refine with existing policy instruments beyond
              mitigation (and/or climate change), notably National Adaptation
              Plans (NBSAPs)
            </Typography>
          }
          icon={<ReddPlusIcon />}
          variant="reddPlus"
        />
      )}
    </>
  );
}
