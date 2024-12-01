import { db } from "../../db/dbservice.js";  
import { todo } from "~/server/db/schema/todo.js";

export default defineEventHandler(async (event) => {
    try {
      const body = await readBody(event);  
      const { title, status } = body;  
  
      const newTodo = await db.insert(todo).values({
        title,
        status,
      })
  
      console.log("Created Todo:", newTodo);  
      return newTodo;  
    } catch (e) {
      console.error("Error creating todo:", e); 
  
      throw createError({
        statusCode: 500,  
        message: "Error creating todo",  
        data: e
      });
    }
  });