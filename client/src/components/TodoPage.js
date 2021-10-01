import React, { useState, useEffect } from "react";

function TodoPage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/todoPage/")
      .then((res) => res.json())
      .then((data) => setList(data.message));
  });

  return (
    <div>
      <p>Here is todos!</p>
      <p>{list}</p>
    </div>
  );
}

export default TodoPage;
