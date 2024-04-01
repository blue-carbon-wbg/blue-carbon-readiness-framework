import { Avatar, Stack } from "@mui/joy";
import { ReactComponent as P1aIcon } from "../../assets/static/p1.svg";
import { ReactComponent as P1bIcon } from "../../assets/static/p1b.svg";
import { ReactComponent as P2Icon } from "../../assets/static/p2.svg";
import { ReactComponent as P3Icon } from "../../assets/static/p3.svg";
import { HeadingBox } from "../../components/HeadingBox";
import { Outlet, useParams } from "react-router-dom";
import { useAppContext } from "../../context";

export function Pillar() {
  const { pillar } = useParams();
  const { structure } = useAppContext();
  const currentPillar = structure.find(
    (s) => s.pillar === pillar?.toUpperCase()
  );

  if (!currentPillar) {
    return <div>Pillar not found</div>;
  }
  return (
    <Stack
      sx={{
        flexBasis: "1000px",
        flexGrow: 0,
        display: "flex",
      }}
    >
      <HeadingBox
        icon={renderIcon(pillar!)}
        title={`Pillar ${pillar?.slice(0, 1)}: ${currentPillar.title}`}
        subtitle={`${currentPillar.subtitle}`}
        subicon={
          <Avatar
            color="success"
            variant="solid"
            size="sm"
            sx={{ mr: 1, bgcolor: "#3AB608" }}
          >
            {currentPillar.subicon}
          </Avatar>
        }
      />
      <Outlet />
    </Stack>
  );
}

function renderIcon(pillar: string) {
  switch (pillar) {
    case "1a":
      return <P1aIcon />;
    case "1b":
      return <P1bIcon />;
    case "2":
      return <P2Icon />;
    case "3":
      return <P3Icon />;
    default:
      return null;
  }
}
