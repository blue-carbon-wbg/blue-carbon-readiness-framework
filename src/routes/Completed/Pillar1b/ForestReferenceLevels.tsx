import { List, ListItem, Typography } from "@mui/joy";
import { MainContentCard } from "../../../components/MainContentCard";

export function ForestReferenceLevels({ yes }: { yes: boolean }) {
  return (
    <MainContentCard
      cardHeader={`Because your country engages in REDD+ and has ${
        yes ? "" : "not"
      } submitted a Forest Reference Level / Forest Reference Emission Levels `}
      content={
        <List marker="disc">
          {yes ? (
            <>
              <ListItem>
                <Typography level="body-lg">
                  Consider developing a REDD+ FRL/FREL with Blue Carbon
                  integration
                </Typography>
              </ListItem>
              <ListItem>
                <Typography level="body-lg">
                  Decide whether to build a separate blue carbon framework
                  (using synergies)
                </Typography>
              </ListItem>
            </>
          ) : (
            <>
              <ListItem>
                <Typography level="body-lg">Review Checklist 4</Typography>
              </ListItem>
              <ListItem>
                <Typography level="body-lg">
                  Confirm and iterate consistency between your Forest Reference
                  Levels (FRL)/ Forest Reference Emission Levels (FREL) and your
                  GHG inventory
                </Typography>
              </ListItem>
            </>
          )}
        </List>
      }
      CardProps={{
        color: "action",
        variant: "outlined",
        sx: { borderWidth: "2px" },
      }}
    />
  );
}
