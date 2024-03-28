import {
  Card,
  Typography,
  CardContent,
  CardActions,
  CardProps,
} from "@mui/joy";
import { ReactNode } from "react";

interface MainContentCardProps {
  cardHeader: ReactNode | string;
  content: ReactNode;
  actions: ReactNode;
  CardProps?: CardProps;
}

export function MainContentCard(props: MainContentCardProps) {
  const { cardHeader, content, actions, CardProps } = props;
  return (
    <Card
      {...CardProps}
      sx={{
        mx: "2rem",
        mt: "4rem",
        maxWidth: "750px",
        minWidth: "500px",
        // minHeight: "250px",
        ...CardProps?.sx,
      }}
    >
      <Typography level="title-lg" sx={{ mb: 0 }}>
        {cardHeader}
      </Typography>
      <CardContent>{content}</CardContent>
      <CardActions sx={{ justifyContent: "center" }}>{actions}</CardActions>
    </Card>
  );
}
