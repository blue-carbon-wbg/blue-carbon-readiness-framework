import { Avatar, Container } from "@mui/joy";
import { Checklist1 } from "./Checklist";
import { ReactComponent as P1Icon } from "../../assets/static/p1.svg";
import { HeadingBox } from "../../components/HeadingBox";
import { Outlet } from "react-router-dom";

export function Pillar1a() {
  return (
    <Container sx={{ height: "100%", width: "100%" }}>
      <HeadingBox
        icon={<P1Icon />}
        title="Pillar 1: Data and Analytics"
        subtitle="Evaluate Blue Carbon Actions"
        subicon={
          <Avatar color="success" variant="solid" size="sm" sx={{ mr: 1 }}>
            A
          </Avatar>
        }
      />
      <Outlet />
      <Checklist1 />
    </Container>
  );
}
