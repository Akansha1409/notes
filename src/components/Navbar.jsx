import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white px-8 py-5 rounded-2xl shadow-sm border border-slate-100">
      <Link className="flex items-center gap-2" href={"/"}>
        <div className="bg-indigo-600 text-white p-2 rounded-lg">
          {/* Simple SVG Logo */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        </div>
        <span className="font-bold text-xl text-slate-800 tracking-tight">Notes<span className="text-indigo-600">App</span></span>
      </Link>
      
      <Link 
        className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-2.5 rounded-full font-medium shadow-lg shadow-indigo-200 hover:shadow-xl hover:scale-105 transition-all duration-300" 
        href={"/addNote"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Create Note
      </Link>
    </nav>
  );
}