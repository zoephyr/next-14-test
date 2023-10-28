// No longer needs to be a client component
// "use shared component"


import { saveNote } from '@/actions/saveNote';

interface NoteEditorProps{
    note: {
        title: string,
        body: string,
    },
}

export default function NoteEditor(props: NoteEditorProps) {
  const note = props.note;
  return (
    <form  method="POST" action={saveNote}>
      <input className="text-blue-700 w-[300px]" name="title" defaultValue={note.title} />
      <textarea className="text-blue-700 w-[300px]"  name="body" defaultValue={note.body}></textarea>
        <div>
          <button>Save Submission</button>  
        </div>
        
    </form>
  );
}