import { List, ListItem, Typography } from "@mui/joy";
import { MainContentCard } from "../../../components/MainContentCard";
import { ReactComponent as FocusIcon } from "../../../assets/static/focusIcon.svg";

export function BlueCarbonFinanceFramework() {
  return (
    <MainContentCard
      cardHeader={
        "Because your country has a blue carbon finance and investment framework in place:"
      }
      content={
        <>
          <Typography level="title-lg">
            Focus on accessing grant funding
          </Typography>
          <Typography level="body-lg">
            Accessing grant funding for capacity-building and related needs,
            namely:
          </Typography>
          <List marker="disc">
            <ListItem>
              <Typography level="body-lg">
                Design and operationalize the governance framework
              </Typography>
            </ListItem>
            <ListItem>
              <Typography level="body-lg">Inventory work</Typography>
            </ListItem>
            <ListItem>
              <Typography level="body-lg">
                BCE mapping and carbon stock assessments
              </Typography>
            </ListItem>
            <ListItem>
              <Typography level="body-lg">
                Preparation of a pipeline of shovel-ready projects
              </Typography>
            </ListItem>
            <ListItem>
              <Typography level="body-lg">
                Conceptualization of blue infrastructure finance
              </Typography>
            </ListItem>
          </List>
        </>
      }
      icon={<FocusIcon />}
    />
  );
}
