import { List, ListItem, Typography } from "@mui/joy";
import { MainContentCard } from "../../../components/MainContentCard";
import { ReactComponent as RecommendedIcon } from "../../../assets/static/recommended.svg";
import { ReactComponent as FocusIcon } from "../../../assets/static/focusIcon.svg";
import { ReactComponent as ReddPlusIcon } from "../../../assets/static/redd_plus.svg";

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
            <List marker="disc">
              <ListItem>
                <Typography level="body-lg">
                  Make sure your GHG inventory can accurately report emissions
                  and removals from BCE(s). If your country cannot yet do this,
                  you can still acknowledge the mitigation impact of BC
                  interventions (Move to Box 2 below.)
                </Typography>
              </ListItem>
              <ListItem>
                <Typography level="body-lg">
                  Turning this procedural milestone into a target, e. g., by
                  [Year] or when submitting the second Biennial Transparency
                  Report, [Country] will use the WS13 and account for all
                  anthropogenic carbon stock changes in [BC Habitat] and [BC
                  Habitat 2].
                </Typography>
              </ListItem>
            </List>
            {reddPlus && (
              <Typography level="body-lg">
                If your country has a REDD+ framework that integrates BCEs, you
                should also build reference levels for conservation aligned with
                REDD+ targets, and define sequestration targets for restoration.
              </Typography>
            )}
          </>
        }
        icon={<RecommendedIcon />}
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
            <List marker="disc">
              <ListItem>
                <Typography level="body-lg">
                  Halt and reverse all degradation in [BC Habitat]
                </Typography>
              </ListItem>
              <ListItem>
                <Typography level="body-lg">
                  Restore [#] hectares of [BC Habitat]
                </Typography>
              </ListItem>
            </List>
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
          CardProps={{ sx: { border: "2px dashed #A5A24A" } }}
        />
      )}
    </>
  );
}
