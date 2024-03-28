import { Avatar, Container } from "@mui/joy";

import { ReactComponent as P2Icon } from "../../assets/static/p2.svg";
import { HeadingBox } from "../../components/HeadingBox";
import { Outlet } from "react-router-dom";

export function Pillar1b() {
  return (
    <Container sx={{ height: "100%", width: "100%" }}>
      <HeadingBox
        icon={<P2Icon />}
        title="Pillar 1: Data and Analytics"
        subtitle="Assess GHG Inventories"
        subicon={
          <Avatar color="success" variant="solid" size="sm" sx={{ mr: 1 }}>
            B
          </Avatar>
        }
      />
      <Outlet />
    </Container>
  );
}
