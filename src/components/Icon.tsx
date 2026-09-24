import type { IconType } from "react-icons";

type IconProps = {
  icon: IconType;
  size?: number;
  color?: string;
};

export default function Icon({
  icon: IconComponent,
  size = 24,
  color = "currentColor",
}: IconProps) {
  return <IconComponent size={size} color={color} />;
}
