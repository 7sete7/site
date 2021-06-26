import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { save, getBlockData } from "../store/adminReducer";

const initialValue = {};
const useBlock = name => {
  const [values, setValues] = useState({});
  const dispatch = useDispatch();
  const data = useSelector(getBlockData(name));

  useEffect(() => {
    if (initialValue[name] == null && data != null) {
      initialValue[name] = data;
      setValues(data);
    }
  }, [data]);

  const onChange = useCallback(
    field =>
      ({ target }) =>
        setValues(v => ({ ...v, [field]: target?.value || target })),
    [setValues],
  );

  const onSave = useCallback(() => dispatch(save({ ...values, block: name })), [dispatch, values, name]);

  const onReset = useCallback(() => setValues(initialValue[name] || {}), [initialValue]);

  return { values, onChange, onSave, onReset };
};

export default useBlock;
