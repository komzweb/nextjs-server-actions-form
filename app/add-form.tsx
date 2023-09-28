'use client'

import { useRef } from 'react'
import { experimental_useFormState as useFormState } from 'react-dom'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { createTodo } from '@/app/actions'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const initialState = {
  message: null,
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      className={`my-2 w-full ${
        pending ? 'cursor-not-allowed opacity-50' : ''
      }`}
    >
      Add
    </Button>
  )
}

export function AddForm() {
  const [state, formAction] = useFormState(createTodo, initialState)
  const ref = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={ref}
      action={async (formData) => {
        await formAction(formData)
        ref.current?.reset()
      }}
    >
      <Label htmlFor="todo">Enter Task</Label>
      <Input type="text" id="todo" name="todo" autoComplete="off" required />
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  )
}
