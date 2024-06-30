import "./Contact.scss";

import { Figure } from "../../img";

const Contact = () => {
  return (
    <div>
      <span>
        This is an <b>example</b> of bold text which is not important. B
      </span>

      <hr />

      <span>
        This is an <strong>example</strong> of bold text which is not important.
        STRONG
      </span>

      <hr />

      <span>
        This is <abbr>W2S</abbr>. ABBR
      </span>

      <hr />

      <span>
        This is an <em>example</em> of some italic text that will be read by
        screenreader. EM
      </span>

      <form className="form">
        <h4 contentEditable>
          Example of fieldset and legend tags. This heading has contenteditable
          attribute
        </h4>

        <fieldset>
          <legend>Required</legend>
          <input placeholder="Enter your name..." type="text" />
          <input placeholder="Enter your password..." type="password" />
        </fieldset>

        <input placeholder="Enter your email..." type="email" />
      </form>

      <hr />

      <h4 draggable>
        Example of figure and figcaption tags. This heading has draggable
        attribute
      </h4>

      <figure className="figure">
        <img width="30%" alt="Weird figure" src={Figure} />
        <figcaption>That is some weird figure</figcaption>
      </figure>

      <hr />

      <p>
        This is <kbd>Ctrl</kbd> key
      </p>
    </div>
  );
};

export default Contact;
