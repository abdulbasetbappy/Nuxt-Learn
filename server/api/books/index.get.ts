import { Book } from "~/server/model/book.model"
export default defineEventHandler( async ()=>{
        try {
                const books = await Book.find({}); // Fetch all books from the database
                return { success: true, data: books }; // Return the list of books
            } catch (error: any) {
                return { success: false, error: error.message }; // Handle errors
            }
})