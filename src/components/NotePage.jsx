import React, { useState, useEffect } from "react";
import "../App.css";
import ProfilePicture from "./avatar-edit";
import "./NotePage.styles.css";

function NotePage() {
  const [entries, setEntries] = useState([]);
  const [currentEntry, setCurrentEntry] = useState("");

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("entries"));
    if (savedEntries) {
      setEntries(savedEntries);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  function handleEntryChange(event) {
    setCurrentEntry(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (currentEntry) {
      setEntries([...entries, currentEntry]);
      setCurrentEntry("");
    }
  }

  function handleDelete(index) {
    const newEntries = [...entries];
    newEntries.splice(index, 1);
    setTimeout(() => {
      setEntries(newEntries);
    }, 15000);
  }

  return (
    <div className="container">
      <div className="note-page">
        <div className="trash">
          <img
            className="img"
            src="https://cdn.dribbble.com/users/31664/screenshots/10486826/media/e7786f03eaa8e97d706d5da42ffec864.gif"
          />
        </div>
        <div className="Boxcenter" style={{}}>
          <div className="boxcenter" style={{}}>
            <div>
              <ProfilePicture />
              <form className="text-form" onSubmit={handleSubmit}>
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Problems
                </label>
                <textarea
                  rows="4"
                  class="w-100 h-100 block p-2.5 w-full text-sm text-gray-900 bg-black-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 note dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-black"
                  placeholder="You can write anything you want right here..."
                  value={currentEntry}
                  onChange={handleEntryChange}
                />
                <button className="submitbtn" type="submit">
                  Jettison
                </button>
              </form>
              <ul>
                {entries.map((entry, index) => (
                  <li className="Li" key={index}>
                    {entry}
                    <div>
                      <p>{handleDelete(index)}</p>
                      {/* //   onClick={() => handleDelete(index)}
                  //   type="button"
                  //   class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-small rounded-lg text-sm px-2 py-2.5 text-center mr-2 mb-2"
                  // >
                  //   Delete */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotePage;
