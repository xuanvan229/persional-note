import { useState, useEffect } from "react";

export const useInputValue = (initial, schema, file = false) => {
  const [value, setValue] = useState(initial);
  const [error, setErr] = useState("");
  const onChange = (e, val) => {
    if (file) {
      setValue(e ? e.target.files : val)
    } else {
      setValue(e ? e.target.value : val);
    }
    if (schema) {
      if (schema.validate(value).error) {
        setErr(schema.validate(value).error.details[0].message);
      } else {
        setErr(false);
      }
    }
  };
  const onFocus = onChange;
  return { value, onChange, onFocus, error, setValue };
};