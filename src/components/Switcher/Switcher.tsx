import { FC } from 'react';
import { SwitchProps } from '@mui/material';

import { StyledSwitch } from './Switcher.styles';

export const CustomSwitcher: FC<SwitchProps> = (props) => {
  const { onChange, checked, ...others } = props;
  return (
    <StyledSwitch
      onChange={onChange}
      checked={checked}
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...others}
    />
  );
};
