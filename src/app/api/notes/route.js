// app/api/notes/route.js
import connectMongoDB from "@/libs/mongodb";
import Note from "@/models/note";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, content } = await request.json();
  await connectMongoDB();
  await Note.create({ title, content });
  return NextResponse.json({ message: "Note Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const notes = await Note.find();
  return NextResponse.json({ notes });
}