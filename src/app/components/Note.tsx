//import db from 'db'; 
// (A1) We import from NoteEditor.js - a Client Component.
import NoteEditor from './NoteEditor';
import * as fs from 'fs/promises';
interface NoteProps {
    id: string,
    isEditing: boolean
}

export default async function Note(props: NoteProps) {
  const {id, isEditing} = props;
  // (B) Can directly access server data sources during render, e.g. databases
  //const note = await db.posts.get(id);
  const postData = (await fs.readFile('./src/app/constants/example-post.txt')).toString();

  const postTitle = (await fs.readFile('./src/app/constants/title.txt')).toString();

  const note = {
    title: postTitle,
    body: postData,
  }

  return (
    <div>
      <h1 className="text-white bg-blue-600">{postTitle}</h1>
      <section className="text-white bg-red-600">{postData}</section>
      <section className="text-white bg-purple-600">{id}</section>
      {/* (A2) Dynamically render the editor only if necessary */}
      {isEditing 
        ? <NoteEditor note={note} />
        : null
      }
    </div>
  );
}