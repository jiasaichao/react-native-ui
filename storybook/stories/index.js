import React from 'react';
import { Text } from 'react-native';
import { storiesOf, action, linkTo, setAddon } from '@kadira/react-native-storybook';
import infoAddon from '../addons/react-storybook-addon-info';

import { Button, Container } from '../../src/components';
import CenterView from './CenterView';
import Welcome from './Welcome';
import { WithNotes } from '../addons/addon-info';

setAddon(infoAddon);

storiesOf('Welcome1', module)
  .add('to Storybook', () => (
    <WithNotes notes={'This is a very simple Button and you can click on it.'}>
      <Welcome showApp={linkTo('Button')} />
    </WithNotes>
  ));

storiesOf('Button', module)
  // .addDecorator(getStory => (
  //   <CenterView>{getStory()}</CenterView>
  // ))
  .add('Submit', () => (
    <Container.Page>
      <Button.Submit label='提交'>
      </Button.Submit>
    </Container.Page>
  ));
