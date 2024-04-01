import {
  Card,
  Typography,
  CardContent,
  CardActions,
  CardProps,
  Box,
  Stack,
} from "@mui/joy";
import { ReactNode } from "react";

interface MainContentCardProps {
  cardHeader: ReactNode | string;
  content: ReactNode;
  actions?: ReactNode;
  CardProps?: CardProps;
  icon?: ReactNode;
}

export function MainContentCard(props: MainContentCardProps) {
  const { cardHeader, content, actions, CardProps, icon } = props;
  return (
    <Card
      {...CardProps}
      sx={{
        mx: 2,
        mt: 1,
        flex: 1,
        p: 3,
        // minHeight: "250px",
        ...CardProps?.sx,
      }}
    >
      <Stack direction="row" alignItems="center">
        {icon && <Box sx={{ height: 50, width: 50, mr: 3 }}>{icon}</Box>}
        <Typography level="title-lg">{cardHeader}</Typography>
      </Stack>
      <CardContent>{content}</CardContent>
      {actions && (
        <CardActions sx={{ justifyContent: "center" }}>{actions}</CardActions>
      )}
    </Card>
  );
}
