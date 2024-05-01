import { Box, List, ListItem, Typography } from "@mui/joy";
import { MainContentCard } from "../../../components/MainContentCard";
import { ReactComponent as FocusIcon } from "../../../assets/static/focusIcon.svg";

export function PlanGovernance({ reddPlus }: { reddPlus: boolean }) {
  return (
    <MainContentCard
      cardHeader={
        "Because your plan doesn't incorporate the appropriate institutional/governance frameworks:"
      }
      content={
        <>
          <Typography level="title-lg">
            Focus on the design of a bespoke governance framework.
          </Typography>
          <Typography level="body-lg">Review Checklist 8.</Typography>
          {reddPlus && (
            <Box
              sx={{
                border: "2px dashed #A5A24A",
                borderRadius: "8px",
                p: 1,
                my: 1,
              }}
            >
              <Typography level="body-lg">
                Because you engage in REDD+, you should also check to see
                whether your REDD+ framework provides key structures that can be
                adjusted as needed
              </Typography>
            </Box>
          )}
          <List marker="decimal" component="ul">
            <ListItem>
              <Typography level="body-lg">
                Identifying and using or synchronizing with parallel governance
                frameworks on adaptation/resilience, private sector initiatives,
                technology transfer, and more.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography level="body-lg">
                Developing an institutional/governance framework:
              </Typography>
              <List marker="disc">
                <ListItem>
                  Technical governance (task force /technical unit) for FRL
                  calculation, MRV, and others
                </ListItem>
                <ListItem>Institutions & policy governance</ListItem>
                <ListItem>
                  Financial governance (receiving and distributing funding in
                  line with benefit sharing arrangements)
                </ListItem>
                <ListItem>
                  Community governance models to drive implementation
                </ListItem>
              </List>
            </ListItem>
          </List>
        </>
      }
      icon={<FocusIcon />}
    />
  );
}
