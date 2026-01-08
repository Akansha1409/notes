# 📝 Modern Notes App

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

A full-stack **CRUD (Create, Read, Update, Delete)** application built with **Next.js 15 (App Router)** and **MongoDB**. This project features a modern, responsive UI designed with Tailwind CSS, utilizing glassmorphism, gradients, and smooth hover effects.

---

## 🚀 Features

- **Full CRUD Functionality**: Create, View, Edit, and Delete notes instantly.
- **Modern UI/UX**: Clean card-based layout with hover effects and color-coded borders.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.
- **Direct Database Access**: Utilizes server-side MongoDB connections for faster performance.
- **Search Optimization**: Built with Next.js Server Components for better SEO and speed.

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js 15](https://nextjs.org/), React 19
- **Backend**: Next.js API Routes (Serverless Functions)
- **Database**: [MongoDB Atlas](https://www.mongodb.com/atlas/database) (Mongoose ODM)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: Google Fonts (Inter)
- **Icons**: Heroicons (via SVG)

---

## ⚙️ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (v18 or higher)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) Account (for the database)

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/](https://github.com/)<YOUR-USERNAME>/nextjs-mongodb-notes-app.git
   cd nextjs-mongodb-notes-app
   ```

 2. **Install Dependencies**
    ```bash
    npm install
    ```

 3. **Set Up Evironment Variables**
    ```bash
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/notes_db
    ```
 4. **Run the Development Server**
    ```bash
    npm run dev
    ```

     ---

## 📂 Project Structure
```bash

├── src/
│   ├── app/
│   │   ├── api/notes/       # Backend API routes
│   │   ├── addNote/         # Page to create notes
│   │   ├── editNote/[id]/   # Page to update notes
│   │   ├── globals.css      # Global styles
│   │   ├── layout.js        # Root layout with Navbar
│   │   └── page.js          # Home page (Notes List)
│   ├── components/          # Reusable UI components
│   ├── libs/                # MongoDB connection logic
│   └── models/              # Mongoose Schema
├── public/                  # Static assets
├── .env.local               # Environment variables (Ignored by Git)
├── tailwind.config.js       # Tailwind configuration
└── package.json             # Project dependencies
```

---

## 📡 API Documentation

### 1. Get All Notes
Fetches all notes from the database, sorted by creation date (newest first).

* **URL:** `/api/notes`
* **Method:** `GET`
* **Response:**
```json
{
  "notes": [
    {
      "_id": "65a1234567890abcdef12345",
      "title": "Project Idea",
      "content": "Build a Next.js app with MongoDB...",
      "createdAt": "2023-10-25T10:00:00.000Z",
      "updatedAt": "2023-10-25T10:00:00.000Z",
      "__v": 0
    }
  ]
}
```
---


    
       
