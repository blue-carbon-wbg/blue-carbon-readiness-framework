import {
  Card,
  Typography,
  CardContent,
  Stepper,
  Step,
  StepIndicator,
  CardActions,
  Button,
  Link,
} from "@mui/joy";
import { ArrowForward, Checklist, ListAlt } from "@mui/icons-material";

export function Intro() {
  return (
    <Card sx={{ mx: "2rem", maxWidth: "750px" }}>
      <Typography level="h2" textAlign="center">
        Welcome to the Blue Carbon Readiness Framework
      </Typography>
      <CardContent>
        <Typography level="body-lg">
          The{" "}
          <Link
            href="https://www.worldbank.org/en/publication/unlocking-blue-carbon-development"
            target="_blank"
            rel="noreferrer noopener"
          >
            Blue Carbon Readiness Framework
          </Link>{" "}
          brings you a decision tree approach to assessing and identifying steps
          in pursuing blue carbon readiness within your country.
        </Typography>
        <Stepper
          orientation="vertical"
          size="lg"
          sx={{ "--Stepper-verticalGap": "30px", my: 2 }}
        >
          <Step
            indicator={
              <StepIndicator color="pathway" variant="solid">
                <ArrowForward />
              </StepIndicator>
            }
          >
            Pathways
            <Typography level="body-lg" fontWeight="normal">
              Starting with Pillar 1, move your way through the tree. Your
              progress will be saved, so you can come back at any time.
            </Typography>
          </Step>
          <Step
            indicator={
              <StepIndicator color="action" variant="solid">
                <Checklist />
              </StepIndicator>
            }
          >
            Checklists
            <Typography level="body-lg" fontWeight="normal">
              Pay special attention to ‘Checklists’ which may correspond to a
              specific action/step. Checklists provide in-depth descriptions of
              steps to continue along your journey to readiness.
            </Typography>
          </Step>
          <Step
            indicator={
              <StepIndicator color="complementary" variant="solid">
                <ListAlt htmlColor="white" />
              </StepIndicator>
            }
          >
            Complementary actions
            <Typography level="body-lg" fontWeight="normal">
              Complementary actions can be completed in tandem with the next
              section of the tree.
            </Typography>
          </Step>
        </Stepper>
      </CardContent>
      <CardActions>
        <Button>Start</Button>
      </CardActions>
    </Card>
  );
}
