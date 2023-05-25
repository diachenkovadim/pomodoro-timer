import { FC, SVGProps } from 'react';

import { ReactComponent as iconDots } from 'assets/icons/ic_dots.svg';
import { ReactComponent as iconNext } from 'assets/icons/ic_next.svg';
import { ReactComponent as iconPlay } from 'assets/icons/ic_play.svg';
import { ReactComponent as iconStop } from 'assets/icons/ic_stop.svg';
import { ReactComponent as iconFocusLabel } from 'assets/icons/ic_focus_label.svg';
import { ReactComponent as iconBreakLabel } from 'assets/icons/ic_break_label.svg';

const ICONS = {
  iconFocusLabel,
  iconBreakLabel,
  iconPlay,
  iconNext,
  iconDots,
  iconStop,
};

export type TIconType = keyof typeof ICONS;

interface IIconProps extends SVGProps<SVGSVGElement> {
  type: TIconType;
}

export const Icon: FC<IIconProps> = (props) => {
  const { type, ...other } = props;
  const NewIcon = ICONS[type];
  return <NewIcon {...other} />;
};
