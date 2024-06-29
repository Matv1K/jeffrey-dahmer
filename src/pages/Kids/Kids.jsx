import { useMemo, useState } from "react";

import "./Kids.scss";

const Kids = () => {
  const [name, setName] = useState("Matthew");

  const options = [
    {
      name: "Matthew",
      value: "matthew",
    },
    {
      name: "Timothee",
      value: "timothee",
    },
  ];

  const handleChange = (e) => {
    const name = e.target.value;
    setName(name[0].toUpperCase() + name.slice(1));
  };

  return (
    <div>
      <form className="form">
        <textarea className="textarea"></textarea>

        <div className="radioArea">
          <label>
            <input className="radioButton" type="radio" name="cars" value="1" />
            <span className="custom-radioButton"></span>
          </label>

          <label>
            <input className="radioButton" type="radio" name="cars" value="2" />
            <span className="custom-radioButton"></span>
          </label>
        </div>

        <label>
          <input className="checkbox" name="fruits" type="checkbox" value="1" />
          <span className="custom-checkbox"></span>
        </label>

        <label>
          <input className="checkbox" name="fruits" type="checkbox" value="2" />
          <span className="custom-checkbox"></span>
        </label>

        <label>
          <input className="checkbox" name="fruits" type="checkbox" value="3" />
          <span className="custom-checkbox"></span>
        </label>

        <select onChange={handleChange} name="names" className="select">
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            );
          })}
        </select>

        {name && <p className="paragraph-caption">The chosen kid is {name}</p>}
      </form>
    </div>
  );
};

export default Kids;
