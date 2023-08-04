import { NavbarStyle, NavbarProps } from "./Navbar.styled";

export const Navbar = ({ ...props }: NavbarProps): JSX.Element => (
  <NavbarStyle {...props}></NavbarStyle>
);
