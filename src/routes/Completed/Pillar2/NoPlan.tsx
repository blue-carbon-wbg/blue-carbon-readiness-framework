import { Box, List, ListItem, Stack, Typography } from "@mui/joy";
import { MainContentCard } from "../../../components/MainContentCard";
import { ReactComponent as NextStepsIcon } from "../../../assets/static/next_steps.svg";
import { ReactComponent as PrivateSectorIcon } from "../../../assets/static/private_sector.svg";

export function NoPlan({ reddPlus }: { reddPlus: boolean }) {
  return (
    <>
      <MainContentCard
        cardHeader="Because your country does not have an NDC implementation plan:"
        content={
          <>
            <List component="ul" marker="decimal">
              <ListItem>
                <Typography level="body-lg">
                  Where feasible, prepare a cost-benefit analysis for
                  conservation and restoration options (use CWON and other
                  datasets for valuation)
                </Typography>
              </ListItem>
              <ListItem>
                <Typography level="body-lg">
                  Develop a bespoke Blue Carbon Strategy
                </Typography>
              </ListItem>
              <ListItem>
                <Typography level="body-lg">
                  Work through MSP and ICZM
                </Typography>
              </ListItem>
              <ListItem>
                <Typography level="body-lg">
                  Focus on land tenure and community involvement
                </Typography>
              </ListItem>
              <ListItem>
                <Typography level="body-lg">
                  Tackle bottlenecks to implementation
                </Typography>
              </ListItem>
              <ListItem>
                <Typography level="body-lg">
                  Design the plan with Section 4 (Financing) in mind
                </Typography>
              </ListItem>
              <ListItem>
                <Typography level="body-lg">
                  Create benefit-sharing arrangements
                </Typography>
              </ListItem>
              <ListItem>
                <Typography level="body-lg">
                  Consider policy reforms for BCE conservation, restoration, or
                  sustainable management through NBS
                </Typography>
              </ListItem>
            </List>
            <Typography level="body-lg">
              Refer to{" "}
              <a href="checklists/checklist_7-WBG_BLUE_CARBON.pdf">
                Checklist 7
              </a>{" "}
              for a detailed list of next steps.{" "}
            </Typography>
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
                  Because you engage in REDD+, you should also review
                  integration of BCE(s) in your REDD+ policy framework
                </Typography>
              </Box>
            )}
          </>
        }
        icon={<NextStepsIcon />}
      />
      <MainContentCard
        cardHeader="Address the private sector:"
        content={
          <Stack>
            <Typography level="body-lg">
              Set out investment parameters and clear guidance for the private
              sector (cf. Section 4: Financing; see below).
            </Typography>
            <Typography level="body-lg">
              Promote private sector initiatives and create institutional
              structures for private sector and community involvement (planning,
              decision-making, and implementation).
            </Typography>
          </Stack>
        }
        icon={<PrivateSectorIcon />}
        CardProps={{ sx: { bgcolor: "#ADDDAC" } }}
      />
    </>
  );
}
