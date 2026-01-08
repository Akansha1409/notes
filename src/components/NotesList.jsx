import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import connectMongoDB from "@/libs/mongodb";
import Note from "@/models/note";

const getNotes = async () => {
  try {
    await connectMongoDB();
    const notes = await Note.find().sort({ createdAt: -1 });
    return notes;
  } catch (error) {
    console.log("Error loading notes: ", error);
    return [];
  }
};

export default async function NotesList() {
  const rawNotes = await getNotes();
  const notes = JSON.parse(JSON.stringify(rawNotes));

  // Colors for random visual variety (Optional, cycling through them)
  const borderColors = ["border-indigo-500", "border-pink-500", "border-emerald-500", "border-amber-500"];

  return (
    <>
      {notes.length === 0 ? (
        <div className="text-center mt-20 opacity-50">
           <h3 className="text-xl font-semibold text-slate-500">No notes yet...</h3>
           <p>Click "Create Note" to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {notes.map((t, index) => (
            <div
              key={t._id}
              className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group border-t-4 ${borderColors[index % 4]}`}
            >
              {/* Note Content */}
              <div className="mb-8">
                <h2 className="font-bold text-xl text-slate-800 mb-2 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                  {t.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-4">
                  {t.content}
                </p>
              </div>

              {/* Footer: Date & Actions */}
              <div className="absolute bottom-5 left-6 right-6 flex justify-between items-center pt-4 border-t border-slate-50">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  {new Date(t.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
                
                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Link href={`/editNote/${t._id}`} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors" title="Edit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 7.125L16.862 4.487" />
                    </svg>
                  </Link>
                  <RemoveBtn id={t._id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}