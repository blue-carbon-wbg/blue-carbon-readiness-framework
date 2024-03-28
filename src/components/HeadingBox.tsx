import { Stack, Box, Typography, Avatar } from "@mui/joy";

interface HeadingBoxProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  subicon?: React.ReactNode;
}

export function HeadingBox(props: HeadingBoxProps) {
  const { icon, title, subtitle, subicon } = props;
  return (
    <Stack
      sx={{ m: 5, alignItems: "center", justifyContent: "flex-start" }}
      direction="row"
    >
      <Box sx={{ height: "14rem", width: "14rem" }}>{icon}</Box>
      <Box sx={{ ml: 5 }}>
        <Typography level="h2">{title}</Typography>
        <Stack
          sx={{ my: 1, alignItems: "center", justifyContent: "flex-start" }}
          direction="row"
        >
          {subicon !== undefined && subicon}
          <Typography level="h3">{subtitle}</Typography>
        </Stack>
      </Box>
    </Stack>
  );
}
