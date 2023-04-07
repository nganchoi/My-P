import React, { useState, useEffect } from "react";
import "../App.css";

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
    }, 150000);
  }

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "400px",
            padding: "20px",
            border: "1px solid black",
            textAlign: "center",
          }}
        >
          <div>
            <form onSubmit={handleSubmit}>
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Problems
              </label>
              <textarea
                id="message"
                rows="4"
                class="w-100 h-100 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="You can write anything you want right here..."
                value={currentEntry}
                onChange={handleEntryChange}
              />
              <button
                type="submit"
                class="text-gray-900 hover:text-white border border-gray-200 hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-100 dark:focus:ring-gray-200"
              >
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
  );
}

export default NotePage;
