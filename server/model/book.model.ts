import { Schema, model } from "mongoose"

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
      },
      author: {
        type: String,
  
      },
      genre: {
        type: String,

      },
      year: {
        type: Number,

      }
})
export const Book = model<any>('Book', bookSchema);