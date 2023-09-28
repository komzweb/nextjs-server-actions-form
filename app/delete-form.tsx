'use client'

import { experimental_useFormState as useFormState } from 'react-dom'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { deleteTodo } from '@/app/actions'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const initialState = {
  message: null,
}

function DeleteButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      className={pending ? 'cursor-not-allowed opacity-50' : ''}
    >
      Delete
    </Button>
  )
}

export function DeleteForm({ id, todo }: { id: number; todo: string }) {
  const [state, formAction] = useFormState(deleteTodo, initialState)

  return (
    <form action={formAction}>
      <Input type="hidden" name="id" value={id} />
      <Input type="hidden" name="todo" value={todo} />
      <DeleteButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  )
}
