import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessage } from '../redux/message/message';

const Greeting = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getMessage());
  }, []);

  return (
    <div className="greeting">
      <p>{message}</p>
    </div>
  );
};

export default Greeting;
