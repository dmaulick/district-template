import { NoteService } from '../../services/NoteService.js';

const CreateNoteMutation = async (content: string) => {
  console.log('CreateNoteMutation;', content);
  const noteService = new NoteService();
  const newNote = await noteService.createNote({ content });

  return newNote;
};

const DeleteNoteMutation = async (_id: any) => {
  const noteService = new NoteService();
  const res = await noteService.deleteNote(_id);

  // @ts-ignore
  if (res.ok) {
    return _id;
  }
};

const UpdateNoteMutation = async (_id: any, content: string) => {
  const noteService = new NoteService();
  const updatedNote = await noteService.updateNote(_id, { content });

  return updatedNote;
};

export { CreateNoteMutation, DeleteNoteMutation, UpdateNoteMutation }
