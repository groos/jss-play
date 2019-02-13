import React, { useState } from 'react';
import { Text, RichText, Placeholder } from '@sitecore-jss/sitecore-jss-react';

const NickHook = (props) => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>NickHook Component</p>
      <Text field={props.fields.heading} />
      <RichText field={props.fields.content}/>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(0)}>Clear count</button>

      <Placeholder name="jss-nick-placeholder" rendering={props.rendering} />
    </div>
  );
}

export default NickHook;