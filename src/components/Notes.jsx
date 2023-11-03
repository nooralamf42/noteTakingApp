import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { AiOutlineEdit } from "react-icons/ai";
import { CiSaveDown1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import {AiOutlineClose} from "react-icons/ai"

export default function Notes() {
  let { notes, setNotes, edit, setEdit } = useContext(AppContext);
  function clickHandler(e) {
    let currentNoteTitle = e.currentTarget.parentElement.id;
    let filteredNotes = notes.filter(
      (note, index) => index != currentNoteTitle
    );
    localStorage.setItem("Notes", JSON.stringify(filteredNotes));
    setNotes(() => filteredNotes);
  }

  function changeHandler(index, e) {
    let currentElementName = e.currentTarget.name;
    let currentElementValue = e.currentTarget.value;

    let editedNotes = notes;
    editedNotes[index][currentElementName] = currentElementValue;

    localStorage.setItem("Notes", JSON.stringify(editedNotes));
    setNotes(() => editedNotes);
  }

  function editHandler(index) {
    setEdit((pre) => {
      if (pre === index) return null;
      else return index;
    });
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10 items-start pb-8">
      {notes.map((note, index) => {
        return (
          <div
            className="w-[300px] bg-white border rounded-xl p-5 relative min-h-[150px] sm:h-[280px] overflow-hidden hover:shadow-2xl"
            key={index}
            id={index}
          >
            {edit === index ? (
              <>
                <input
                  required
                  maxLength={23}
                  placeholder="Title"
                  type="text"
                  name="Title"
                  onInput={(e) => changeHandler(index, e)}
                  defaultValue={note.Title}
                  className="outline outline-1 outline-blue-500 mb-2 text-xl  w-full"
                />

                <textarea
                  required
                  maxLength={260}
                  placeholder="Description"
                  name="Note"
                  onInput={(e) => changeHandler(index, e)}
                  defaultValue={note.Note}
                  id=""
                  cols="30"
                  rows="8"
                  className="outline outline-1 outline-blue-500 w-full"
                ></textarea>
              </>
            ) : (
              <>
                <h1 className="text-xl font-semibold">{note.Title}</h1>
                <p className="w-[100%]">{note.Note}</p>
              </>
            )}

            <button
              className="absolute right-0 top-0 m-2"
              onClick={clickHandler}
            >
              <AiOutlineClose size={23}/>
            </button>
            <button
              className="absolute right-[-5px] bottom-0 m-3 mb-4"
              onClick={() => editHandler(index)}
            >
              {edit === index ? <CiSaveDown1 size={23} /> : <AiOutlineEdit size={23}/>}
            </button>
          </div>
        );
      })}

      {!notes.length && (
        <div className="mt-40 mx-auto w-fit text-center">
          <h1 className="font-bold text-3xl mb-10">No notes are found</h1>
          <Link
            to={"/add"}
            className="py-4 px-10 text-gray-600  hover:shadow-2xl border border-gray-200 w-fit bg-green-200 rounded-full shadow-inner"
          >
            Create task
          </Link>
        </div>
      )}
    </div>
  );
}
