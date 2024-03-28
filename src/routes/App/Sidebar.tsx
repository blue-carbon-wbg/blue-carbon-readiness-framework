import { Stepper, Step, StepIndicator } from "@mui/joy";

export function Sidebar() {
  return (
    <Stepper orientation="vertical" size="sm">
      <Step
        indicator={
          <StepIndicator sx={{ bgcolor: "#3AB608", color: "#FFF" }}>
            1a
          </StepIndicator>
        }
      >
        <b>Data & Analytics</b>
        <span>Evaluate Blue Carbon Actions</span>
        {/* <Typography fontWeight="bold">Data & Analytics</Typography>
              <Typography>Evaluate Blue Carbon Actions</Typography> */}
      </Step>
      <Step
        indicator={
          <StepIndicator sx={{ bgcolor: "#3AB608", color: "#FFF" }}>
            1b
          </StepIndicator>
        }
      >
        <b>Data & Analytics</b>
        <span>Assess GHG Inventories</span>
      </Step>
      <Step
        indicator={
          <StepIndicator sx={{ bgcolor: "#2C7905", color: "#FFF" }}>
            2
          </StepIndicator>
        }
      >
        <b>Policies & Institutions</b>
        <span>NDC Commitments & Implementation</span>
      </Step>
      <Step
        indicator={
          <StepIndicator sx={{ bgcolor: "#1C6E5A", color: "#FFF" }}>
            3
          </StepIndicator>
        }
      >
        <b>Finance</b>
        <span>Leverage Blue Carbon Finance</span>
      </Step>
    </Stepper>
  );
}
