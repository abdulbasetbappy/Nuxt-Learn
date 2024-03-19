import { Book } from "~/server/model/book.model";

export default defineEventHandler(async (event) => {
  try {
    // Read the request body
    const body = await readBody(event);

    // Check if the body exists and contains data
    if (!body || !Object.keys(body).length) {
      throw new Error("Request body is empty or missing data");
    }

    // Extract book data from the request body
    const { title, author, genre, year } = body;

    // Create a new book in the database
    const newBook = await Book.create({ title, author, genre, year });

    // Return the newly created book
    return { success: true, data: newBook };
  } catch (error: any) {
    return { success: false, error: error.message }; // Handle errors
  }
});
