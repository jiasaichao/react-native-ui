import React from 'react';
import addons from '@kadira/storybook-addons';
import Story from './components/Story';
import { renderToStaticMarkup } from'react-dom/server';

export class WithNotes extends React.Component {
  render() {
    const { children, notes } = this.props;
    const channel = addons.getChannel();
    let aaa = children.type.aaaaa;
    let story=renderToStaticMarkup(<Story>{children}</Story>);
    //console.log('222222222222333',story);
    // send the notes to the channel.
    //document.querySelector('.Pane.horizontal.Pane1').firstChild.firstChild.innerHTML='6666'
    channel.emit('kadira/notes/add_notes', story);

    // return children elements.
    // console.log('fffff', JSON.stringify({aaa,bbb:children.type.name}));
    return children;
  }
}
