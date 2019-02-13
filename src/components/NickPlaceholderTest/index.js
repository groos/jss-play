import React from 'react';

import { withPlaceholder } from '@sitecore-jss/sitecore-jss-react';

const NickPlaceholderTest = ({tabs}) => {
  return (
    <div>
      {tabs}
    </div>
  );
};

export default withPlaceholder('tabs')(NickPlaceholderTest);