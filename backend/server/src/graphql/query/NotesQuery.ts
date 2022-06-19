import { NoteService } from '../../services/NoteService.js';

export const NotesQuery = async () => {
  const noteService = new NoteService();
  const notes = await noteService.getAllNotes();

  return notes;
};
