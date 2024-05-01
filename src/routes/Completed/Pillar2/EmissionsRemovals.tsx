import { List, ListItem, Typography } from "@mui/joy";
import { MainContentCard } from "../../../components/MainContentCard";
import { ReactComponent as FocusIcon } from "../../../assets/static/focusIcon.svg";

export function EmissionsRemovals({ reddPlus }: { reddPlus: boolean }) {
  return (
    <MainContentCard
      cardHeader={
        "Because your country includes BCE emissions and removals in its NDC:"
      }
      content={
        <>
          <Typography level="title-lg">
            Focus on Accounting for Emissions Reduction/Removals
          </Typography>
          <Typography level="body-lg">
            Review{" "}
            <a href="checklists/checklist_5-WBG_BLUE_CARBON.pdf">Checklist 5</a>{" "}
            and{" "}
            <a href="checklists/checklist_6-WBG_BLUE_CARBON.pdf">Checlist 6</a>
          </Typography>
          <List component="ol" marker="decimal">
            <ListItem>
              <Typography level="body-lg">
                Consider inclusion in economy-wide or sector-wide (AFOLU)
                targets
              </Typography>
            </ListItem>
            <ListItem>
              <Typography level="body-lg">
                Include action-specific targets such as "restore x hectares of
                mangroves by [date]"
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
      icon={<FocusIcon />}
    />
  );
}
