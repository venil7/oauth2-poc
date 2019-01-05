import React, { useContext } from 'react';
import { authenticate } from './actions';
import { AppCtx } from './App';

const Home = (props: any) => {
  const [, dispatch] = useContext(AppCtx);
  const { history } = props;
  return (
    <>
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
      <span>perform API call</span>
      <button onClick={() => dispatch(authenticate(history))}>action</button>
    </>
  );
};

export default Home;