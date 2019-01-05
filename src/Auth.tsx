import React, { useContext } from 'react';
import { AppCtx } from './App';

const Auth = (props: {}) => {
  const [state, dispatch] = useContext(AppCtx)
  return (
    <>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <pre>{JSON.stringify(dispatch, null, 2)}</pre>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};

export default Auth;