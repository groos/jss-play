import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const NickTab = (props) => (
  <div>
    <p>NickTab Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default NickTab;