import { Button, ButtonProps } from "@mui/joy";
import { Link, LinkProps } from "react-router-dom";

interface RouterButtonProps extends Partial<ButtonProps> {
  children: React.ReactNode;
  to: string;
  LinkProps?: Partial<LinkProps>;
}

export function RouterButton(props: RouterButtonProps) {
  const { children, to, LinkProps, ...other } = props;
  return (
    <Button
      component={(props: any) => <Link to={to} {...props} {...LinkProps} />}
      {...other}
    >
      {children}
    </Button>
  );
}
