import * as React from "react";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { FormControlLabel } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";

const options = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"];

export default function App(props) {
  const [selected, setSelected] = useState(null);
  const { size, setSize } = props;
  function onChange(i) {
    setSelected((prev) => (i === prev ? null : i));
  }

  return (
    <span>
      <FormControl className=" text-light">
        <FormLabel className="text-light float-left">Size</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="M"
          name="radio-buttons-group"
          onChange={(e) => {
            setSize(e.target.value);
            console.log(size);
          }}
          aria-required
        >
          {options.map((o, i) => (
            <FormControlLabel
              className="text-light"
              required
              key={i}
              value={o}
              control={<Radio className="text-light" />}
              checked={i === selected}
              onChange={() => onChange(i)}
              label={o}
            />
          ))}
          {/* <br /> */}
        </RadioGroup>
      </FormControl>
    </span>
  );
}
