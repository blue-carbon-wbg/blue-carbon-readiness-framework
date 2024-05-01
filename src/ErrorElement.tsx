import { Button, Sheet } from "@mui/joy";

export function ErrorElement() {
  return (
    <Sheet>
      An error occurred.{" "}
      <Button component="a" href="/blue-carbon-readiness-framework">
        Go home
      </Button>
    </Sheet>
  );
}
