import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { save, getBlockData } from "../store/adminReducer";

let initialValue;
const useBlock = name => {
  const [values, setValues] = useState({});
  const dispatch = useDispatch();
  const data = useSelector(getBlockData(name));
  
  useEffect(() => {
    if (initialValue == null && data != null) {
      initialValue = data;
      setValues(data);
    }
  }, [data]);
  
  const onChange = useCallback(
    field =>
      ({ target }) =>
        setValues(v => ({ ...v, [field]: target.value })),
    [setValues],
  );

  const onSave = useCallback(() => dispatch(save({ ...values, block: name })), [dispatch, values, name]);

  const onReset = useCallback(() => {}, []);

  return { values, onChange, onSave, onReset };
};

export default useBlock;
