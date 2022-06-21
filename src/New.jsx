import { useState } from 'react';
import Alert from './Alert';

function New(props) {
  const { text } = props;
  // const [newText, setNewText] = useState(text);
  const [message, setMessage] = useState(false);

  function handleClick() {
    setMessage(true);
    // setNewText('React is life');
  }
  return (
    <section>
      <p>{text}</p>
      <button type="submit" onClick={handleClick}>
        Click Me
      </button>
      {message && <Alert />}
    </section>
  );
}

export default New;
