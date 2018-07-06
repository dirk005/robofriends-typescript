import * as React from 'react';

interface IAppProps {
	children?: JSX.Element
}
const Scroll = (props:IAppProps) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;