import { useState, useCallback } from "react";
import "./About.scss";

import { TodoItem, Button } from "../../components";

const About = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const handleClick = () => {
    setItems(() => {
      return [...items, { id: Date.now(), title: value }];
    });

    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleItemRemove = useCallback((index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  }, []);

  return (
    <div className="about">
      <p className="about__items-amount">Amount of items: {items.length}</p>

      <form className="about__form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="about__input"
          type="name"
          placeholder="Enter task's name"
          value={value}
          onChange={handleChange}
        />

        <Button onClick={handleClick} disabled={!value}>
          Add Item
        </Button>
      </form>

      {items.map(({ title, id }, index) => {
        return (
          <TodoItem
            key={id}
            title={title}
            handleClick={() => handleItemRemove(index)}
          />
        );
      })}
    </div>
  );
};

export default About;
