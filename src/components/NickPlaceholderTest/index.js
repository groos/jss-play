import React from 'react';

import { Text, withPlaceholder } from '@sitecore-jss/sitecore-jss-react';

const NickPlaceholderTest = ({tabs, fields}) => {
  return (
    <div>
      <Text tag="h3" field={fields.heading}/>
      {tabs}
    </div>
  );
};

export default withPlaceholder('tabs')(NickPlaceholderTest);