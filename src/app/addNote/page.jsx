"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("Title and content are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, content }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create a note");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New Note</h1>
        
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-3 mb-4"
          type="text"
          placeholder="Note Title"
        />

        <textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-3 mb-6"
          placeholder="Note Content"
          rows="5"
        />

        <button
          type="submit"
          className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-colors"
        >
          Save Note
        </button>
      </form>
    </div>
  );
}