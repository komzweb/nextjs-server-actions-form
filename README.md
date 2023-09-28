# Next.js Server Actions Form

This example is based on [Forms with Next.js and Server Actions](https://github.com/vercel/next.js/tree/canary/examples/next-forms) published by [Next.js](https://nextjs.org/), with the following additions:

- Using [shadcn/ui](https://ui.shadcn.com/)
  - Some components
  - Dark mode
- Using [Tailwind CSS](https://tailwindcss.com/)
- Implementing form reset

## Run locally

First, create `.env.local` in the root and set your Vercel Postgres secrets to it:

```
POSTGRES_URL="************"
POSTGRES_PRISMA_URL="************"
POSTGRES_URL_NON_POOLING="************"
POSTGRES_USER="************"
POSTGRES_HOST="************"
POSTGRES_PASSWORD="************"
POSTGRES_DATABASE="************"
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
