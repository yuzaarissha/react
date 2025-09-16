import { useCallback, useRef, useState } from "react";
import "./FullName.css";

function FullName() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
  });

  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  const showData = useCallback(() => {
    if (data) {
      alert(`First Name: ${data.firstName}, \nLast Name: ${data.lastName}`);
    }
  }, [data]);

  return (
    <>
      <input
        type="text"
        placeholder="First Name"
        value={data.firstName}
        onChange={(event) =>
          setData({ firstName: event.target.value, lastName: data.lastName })
        }
      />
      <input
        type="text"
        placeholder="Last Name"
        ref={inputRef}
        value={data.lastName}
        onChange={(event) =>
          setData({ firstName: data.firstName, lastName: event.target.value })
        }
      />
      <div className="buttons">
        <button onClick={handleFocus}>Focus</button>
        <button onClick={showData}>Show</button>
      </div>
    </>
  );
}

export default FullName;
