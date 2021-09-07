import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { save, getBlockData, openSnack } from "../store/adminReducer";

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
  }, [data, name]);

  const onChange = useCallback(
    field =>
      ({ target, value }) =>
        setValues(v => ({ ...v, [field]: value !== undefined ? value : target?.value })),
    [setValues],
  );

  const onSave = useCallback(() => {
    dispatch(save({ ...values, block: name }));
    initialValue[name] = null;

    dispatch(openSnack({ msg: "Bloco salvo", type: "success" }));
  }, [dispatch, values, name]);

  const onReset = useCallback(() => setValues(initialValue[name] || {}), [name]);

  return { values, onChange, onSave, onReset };
};

export default useBlock;
