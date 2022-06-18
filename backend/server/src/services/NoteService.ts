import { MongoDbRepo } from '../repository/mongoDbRepository.js';

export class NoteService {
  NoteRepository: MongoDbRepo

  constructor() {
    this.NoteRepository = new MongoDbRepo('Notes');
  }

  getAllNotes() {
    return this.NoteRepository.getAll();
  }

  updateNote(_id: any, opt: any) {
    return this.NoteRepository.updateOne(_id, opt);
  }

  deleteNote(_id: any) {
    return this.NoteRepository.deleteOne(_id);
  }

  createNote(opt: any) {
    return this.NoteRepository.create(opt);
  }
}
