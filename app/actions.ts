'use server'

import { revalidatePath } from 'next/cache'
import { sql } from '@vercel/postgres'
import { z } from 'zod'

export async function createTodo(prevState: any, formData: FormData) {
  const schema = z.object({
    todo: z.string().nonempty(),
  })
  const data = schema.parse({
    todo: formData.get('todo'),
  })

  try {
    await sql`
    INSERT INTO todos (text)
    VALUES (${data.todo})
  `

    revalidatePath('/')
    return { message: `Added todo ${data.todo}` }
  } catch (e) {
    return { message: 'Failed to create todo' }
  }
}

export async function deleteTodo(prevState: any, formData: FormData) {
  const schema = z.object({
    id: z.string().nonempty(),
    todo: z.string().nonempty(),
  })
  const data = schema.parse({
    id: formData.get('id'),
    todo: formData.get('todo'),
  })

  try {
    await sql`
      DELETE FROM todos
      WHERE id = ${data.id};
    `

    revalidatePath('/')
    return { message: `Deleted todo ${data.todo}` }
  } catch (e) {
    return { message: 'Failed to delete todo' }
  }
}
