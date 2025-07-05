import NoteForm from "@/components/NoteForm/NoteForm";
import css from "./CreateNote.module.css";

export const metadata = {
  title: "Notehub - Create Note",
  description: "Create a new note to organize your tasks.",
  url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
  openGraph: {
    title: "Notehub - Create Note",
    description: "Create a new note to organize your tasks.",
    url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Create Note",
      },
    ],
  },
};

const CreateNote = () => {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
};

export default CreateNote;
