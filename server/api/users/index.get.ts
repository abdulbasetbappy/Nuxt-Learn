import { Schema, model } from "mongoose"

const userSchema = new Schema({
    email:{
        type: "string",
        required: true,
        unique: true
    },
    name:{
        type: "string",
        required: true
    },
})
export const User = model<any>('User', userSchema);

export default defineEventHandler( async (e)=>{
    const users = await User.find()
    return users

})