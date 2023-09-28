import { sql } from '@vercel/postgres'
import { AddForm } from '@/app/add-form'
import { DeleteForm } from '@/app/delete-form'
import { ModeToggle } from '@/components/mode-toggle'

export const runtime = 'edge'
export const preferredRegion = 'home'

export default async function Home() {
  let data = await sql`SELECT * FROM todos`
  const { rows: todos } = data

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="w-96">
        <h1 className="sr-only">Todos</h1>
        <div className="text-right">
          <ModeToggle />
        </div>
        <AddForm />
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="mb-2.5 flex items-center justify-between rounded border bg-slate-100 p-2.5 dark:bg-slate-900"
            >
              <span className="mr-4">{todo.text}</span>
              <DeleteForm id={todo.id} todo={todo.text} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
