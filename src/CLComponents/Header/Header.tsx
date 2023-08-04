import { Navbar } from "../../component/Navbar/Navbar";
import { List } from "../../component/List/List";
import { Typography } from "../../component/Typography/Typography";
import { HiLightningBolt } from "react-icons/hi";
import { Button } from "../../component/Button/button.styled";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdOutlineLightMode } from "react-icons/md";
import { Icon } from "../../component/Icons/Icons";

export const Header = (): JSX.Element => (
  <>
    <Navbar>
      <Icon icon={<HiLightningBolt />} size={24} color={"#ffffff"} />
      <div className="flex-row">
        <Button variation="ghost">
          <Icon icon={<AiFillLinkedin />} size={24} color={"#ffffff"} />
        </Button>
        <Button variation="ghost">
          <Icon icon={<AiFillGithub />} size={24} color={"#ffffff"} />
        </Button>
        <Button variation="ghost">
          <Icon icon={<MdOutlineLightMode />} size={24} color={"#ffffff"} />
        </Button>
      </div>
    </Navbar>
  </>
);
