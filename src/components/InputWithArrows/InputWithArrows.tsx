import { FC } from 'react';
import { Stack, TextFieldProps } from '@mui/material';

import { InputWithArrowsStyles as Styled } from './InputWithArrows.styles';

type TInputWithArrowsProps = {
  onSubstructTimeClickButtonHandler: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  onAddTimeClickButtonHandler: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
} & TextFieldProps;

export const InputWithArrows: FC<TInputWithArrowsProps> = (props) => {
  const {
    onAddTimeClickButtonHandler,
    onSubstructTimeClickButtonHandler,
    onChange,
    name,
    value,
    ...others
  } = props;

  return (
    <Stack
      direction="row"
      sx={{
        border: (theme) => `1px solid ${theme.palette.inputBorder.main}`,
        borderRadius: 1,
        width: 96,
        height: 40,
      }}
    >
      <Styled.StyledInput
        onChange={onChange}
        name={name}
        value={value}
        variant="standard"
        type="number"
        {...others}
      />
      <Stack
        sx={{
          width: 29,
          borderLeft: (theme) => `1px solid ${theme.palette.inputBorder.main}`,
        }}
      >
        <Styled.StyledButton
          size="small"
          name={name}
          onClick={onAddTimeClickButtonHandler}
        />
        <Styled.StyledButton
          size="small"
          name={name}
          onClick={onSubstructTimeClickButtonHandler}
          sx={{
            '&::before': {
              borderWidth: '10px 6px 0 6px',
              borderColor: (theme) =>
                `${theme.palette.text.primary} transparent transparent transparent`,
            },
          }}
        />
      </Stack>
    </Stack>
  );
};
