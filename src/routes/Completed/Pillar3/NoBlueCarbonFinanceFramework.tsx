import { List, ListItem, Typography } from "@mui/joy";
import { MainContentCard } from "../../../components/MainContentCard";
import { ReactComponent as FocusIcon } from "../../../assets/static/focusIcon.svg";

export function NoBlueCarbonFinanceFramework() {
  return (
    <MainContentCard
      cardHeader={
        "Because your country doesn't have a blue carbon finance and investment framework in place:"
      }
      content={
        <>
          <Typography level="title-lg">
            Focus on developing a framework that integrates with your
            implementation plan
          </Typography>
          <List component="ol" marker="decimal">
            <ListItem>
              <Typography level="body-lg">
                Scrutinizing existing funding flows to benefit/disadvantage Blue
                Carbon investments
              </Typography>
            </ListItem>
            <ListItem>
              <Typography level="body-lg">
                Conduct Stock-take of financing approaches (including the use of
                mechanisms such as Article 6 and jurisdictional REDD+/RBCF) and
                sources/instruments (concessional and non-concessional,
                considering innovative business models)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography level="body-lg">
                Set out stable investment parameters for the private sector,
                including with respect to carbon finance: Define and allocate
                carbon rights, create mandates for carbon trading, and present
                models for community involvement and benefit sharing
              </Typography>
            </ListItem>
          </List>
        </>
      }
      icon={<FocusIcon />}
    />
  );
}
