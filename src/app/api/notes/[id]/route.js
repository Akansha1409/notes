import connectMongoDB from "@/libs/mongodb";
import Note from "@/models/note";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = await params; // <--- ADD await HERE
  const { newTitle: title, newContent: content } = await request.json();
  await connectMongoDB();
  await Note.findByIdAndUpdate(id, { title, content });
  return NextResponse.json({ message: "Note updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = await params; // <--- ADD await HERE
  await connectMongoDB();
  const note = await Note.findOne({ _id: id });
  return NextResponse.json({ note }, { status: 200 });
}

export async function DELETE(request, { params }) {
    const { id } = await params; // <--- ADD await HERE
    await connectMongoDB();
    await Note.findByIdAndDelete(id);
    return NextResponse.json({ message: "Note deleted" }, { status: 200 });
}