import "./NewHobbyForm.css";
import { useState } from "react";

const NewHobbyForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setNewDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const hobbyData = {
      title: newTitle,
      description: newDescription,
    };
    console.log(hobbyData);
    setNewTitle(" ");
    setNewDescription(" ");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-hobby__controls">
        <div className="new-hobby__control">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-hobby__control">
          <label>Description</label>
          <input
            type="text"
            value={newDescription}
            onChange={descriptionChangeHandler}
          />
        </div>
      </div>
      <div className="new-hobby__actions">
        <button type="submit">Add New Hobby</button>
      </div>
    </form>
  );
};

export default NewHobbyForm;
