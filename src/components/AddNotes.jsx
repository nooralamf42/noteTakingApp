import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";


export default function AddNotes() {
  let navigate = useNavigate()
  let { setNotes } = useContext(AppContext);
  function submitHandler(e) {
    e.preventDefault();

    let Title = e.target[0].value;
    let Note = e.target[1].value;

    navigate("/taskadded")
    setNotes((oldData) => {
      let newData = [...oldData, { Title, Note }];
      localStorage.setItem("Notes", JSON.stringify(newData));
      return newData;
    });

  }

  return (
    <div className="mt-20">
      <form action="" className="flex flex-col gap-4" onSubmit={submitHandler}>
        <input
          className="shadow-md outline outline-1 outline-gray-200 p-3 text-lg"
          type="text"
          placeholder="Title"
          required
        />

        <textarea
          required
          placeholder="Description"
          className="shadow-inner outline outline-1 outline-gray-200 p-3"
          name="your note here"
          id=""
          cols="30"
          rows="10"
        ></textarea>

        <button className="py-4 px-10 text-gray-600  hover:shadow-2xl border border-gray-200 w-fit bg-green-200 rounded-full shadow-inner">
          Add Note
        </button>
      </form>
    </div>
  );
}
