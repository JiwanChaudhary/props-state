import { useState } from 'react';
import Alert from './Alert';
import Count from './Count';

function New(props) {
  const { text } = props;
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(false);

  function handleClick() {
    setMessage(true);
    setCount(count + 1);
    // setNewText('React is life');
  }
  return (
    <section>
      <p>{text}</p>
      <button type="submit" onClick={handleClick}>
        Click Me
      </button>
      {message && <Alert />}
      {count && <Count />}
    </section>
  );
}

export default New;
