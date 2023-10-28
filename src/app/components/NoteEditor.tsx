// NoteEditor.js - Client Component

'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

interface NoteEditorProps{
    note: {
        title: string,
        body: string,
    },
}

export default function NoteEditor(props: NoteEditorProps) {
  const note = props.note;
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  const router = useRouter();
  const updateTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };
  const updateBody = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.currentTarget.value);
  };
//   const submit = (event: FormEvent<HTMLFormElement>) => {
//     // ...save note...
//     event.preventDefault()
//     alert("Saved Submission")

//     fetch("/api/saveNote", {
//         method: "POST",
//         body: JSON.stringify(
//             {
//                 title: title,
//                 body: body,
//             }
//         )
//     } ).then(
//         response=>{
//             router.refresh();
//         }
//     )
//   };
  return (
    <form  method="POST" action="/api/saveNote">
      <input className="text-blue-700 w-[300px]" name="title" defaultValue={title} />
      <textarea className="text-blue-700 w-[300px]"  name="body" defaultValue={body}></textarea>
        <div>
          <button>Save Submission</button>  
        </div>
        
    </form>
  );
}