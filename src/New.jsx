import { useState } from 'react';
import Alert from './Alert';

function New(props) {
  const { text } = props;
  const [message, setMessage] = useState(false);
  function handleClick() {
    setMessage(true);
    // setNewText('React is life');
  }

  // function handleCloseMessage() {
  //   setMessage(false);
  // }
  return (
    <section>
      <p>{text}</p>
      <button type="submit" onClick={handleClick}>
        Click Me
      </button>
      {message && <Alert props/>}
    </section>
  );
}

export default New;
