import { icons } from "../../assets/icons/iconNames";
import { type IconNames } from "../../types/icon";
import { StyledIcon } from "./styles";
import { css, cx } from "@emotion/css";

interface IconProps {
  name: IconNames;
  className?: string;
}

const iconClass = css({
  height: "100%",
  display: "flex",
  alignItems: "center",
});

const Icon: React.FC<IconProps> = ({ name, className }): React.ReactNode => {
  return (
    <StyledIcon
      aria-hidden={true}
      className={cx(iconClass, className)}
      icon={true}
      id="icon-element"
      dangerouslySetInnerHTML={{ __html: icons[name] }}
    />
  );
};

export default Icon;
