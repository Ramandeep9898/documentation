import { Header } from "../CLComponents/Header/Header";
import { SideBar } from "../CLComponents/Sidebar/Sidebar";
import { ButtonDoc } from "../documentation/ButtonDoc";
import { AvatarDoc } from "../documentation/AvatarDoc";
import { AlertDoc } from "../documentation/AlertDoc";
import { BadgeDoc } from "../documentation/BadgeDoc";
import { CardDoc } from "../documentation/CardDoc";
import { IconDoc } from "../documentation/IconDoc";
import { ListDoc } from "../documentation/ListDoc";
import { TypographyDoc } from "../documentation/TypographyDoc";

export const Documentation = ({ ...props }): JSX.Element => (
  <>
    <Header />
    <div className="flex-row">
      <SideBar />
      <TypographyDoc />
      {/* <ListDoc /> */}
      {/* <IconDoc /> */}
      {/* <CardDoc /> */}
      {/* <BadgeDoc /> */}
      {/* <AvatarDoc /> */}
      {/* <AlertDoc /> */}
      {/* <ButtonDoc /> */}
    </div>
  </>
);
