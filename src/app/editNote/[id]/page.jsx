import EditNoteForm from "@/components/EditNoteForm";

const getNoteById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch note");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null; // Return null if fetch fails
  }
};

export default async function EditNote({ params }) {
  const { id } = await params;
  
  // 1. Get the data
  const data = await getNoteById(id);

  // 2. Check if data or the note itself is missing
  if (!data || !data.note) {
    return (
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-2xl font-bold text-red-500">Note not found!</h1>
        <p>The note you are trying to edit does not exist.</p>
      </div>
    );
  }

  const { title, content } = data.note;

  // 3. Render the form if note exists
  return <EditNoteForm id={id} title={title} content={content} />;
}