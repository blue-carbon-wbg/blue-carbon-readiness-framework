import { List, ListItem, Typography } from "@mui/joy";
import { MainContentCard } from "../../../components/MainContentCard";
import { ReactComponent as ConsiderIcon } from "../../../assets/static/consider.svg";

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
          <List marker="disc">
            <ListItem>
              <Typography level="body-lg">
                Concessional instruments, including blended finance instruments
                and philanthropy
              </Typography>
            </ListItem>
            <ListItem>
              <Typography level="body-lg">
                Dedicated sovereign and/or corporate debt finance instruments
                (blue loans, blue bonds)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography level="body-lg">
                Blue infrastructure /NBS finance
              </Typography>
            </ListItem>
            <ListItem>
              <Typography level="body-lg">
                Business models that stack multiple revenue streams
              </Typography>
            </ListItem>
            <ListItem>
              <Typography level="body-lg">
                Results-Based Carbon Finance (RBCF)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography level="body-lg">
                Blue carbon project finance (carbon markets)
              </Typography>
            </ListItem>
          </List>
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
