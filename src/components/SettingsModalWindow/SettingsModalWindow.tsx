import { FC } from 'react';
import { Card, CardHeader, Modal, Stack } from '@mui/material';

import { InputWithArrows } from '../InputWithArrows';
import { CustomSwitcher } from '../Switcher';
import { SettingsModalWindowStyles as Styled } from './SettingsModalWindow.styles';
import { SettingsModalWindowRowItem } from './SettingsModalWindowRowItem';
import { useSettingsModalWindowState } from './SettingsModalWindow.state';
import { ISettingsModalWindowProps } from './types';

export const SettingsModalWindow: FC<ISettingsModalWindowProps> = (props) => {
  const { isOpenModalWindow, onToggleModalWindow } = props;

  const {
    inputFields,
    isDarkMode,
    isNotification,
    onAddTimeClickButtonHandler,
    onSubstructTimeClickButtonHandler,
    onChangeIsDarkModeHandler,
    onChangeIsNotificationHandler,
  } = useSettingsModalWindowState();

  return (
    <Modal open={isOpenModalWindow} onClose={onToggleModalWindow} sx={{ m: 1 }}>
      <Card sx={Styled.CardSX}>
        <CardHeader
          title="Settings"
          sx={{
            p: 0,
            pb: 2,
            width: 1,
            position: 'relative',
            alignSelf: 'flex-start',
          }}
          action={
            <Styled.CloseButton
              component="span"
              onClick={onToggleModalWindow}
            />
          }
        />
        <Stack spacing={3} width={1}>
          <SettingsModalWindowRowItem title="Dark mode">
            <CustomSwitcher
              onChange={onChangeIsDarkModeHandler}
              checked={isDarkMode}
            />
          </SettingsModalWindowRowItem>

          {inputFields.map((item) => (
            <SettingsModalWindowRowItem key={item.title} title={item.title}>
              <InputWithArrows
                onChange={item.onChange}
                name={item.fieldName}
                value={item.value.toString()}
                onAddTimeClickButtonHandler={onAddTimeClickButtonHandler}
                onSubstructTimeClickButtonHandler={
                  onSubstructTimeClickButtonHandler
                }
              />
            </SettingsModalWindowRowItem>
          ))}

          <SettingsModalWindowRowItem title="Notification">
            <CustomSwitcher
              onChange={onChangeIsNotificationHandler}
              checked={isNotification}
            />
          </SettingsModalWindowRowItem>
        </Stack>
      </Card>
    </Modal>
  );
};
