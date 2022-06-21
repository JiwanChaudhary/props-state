import { useState } from 'react';

function New(props) {
  const {text} = props;
  const [newText, setNewText] = useState(text);

  function handleClick() {
    setNewText('Learning Props');
  }
  return (
    <section>
      <p>{newText}</p>
      <button type="submit" onClick={handleClick}>
        Click Me
      </button>
    </section>
  );
}

export default New;
