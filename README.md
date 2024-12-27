# Next.js 15 Infinite Loading Bug

This repository demonstrates a bug in a Next.js 15 application where the loading state persists indefinitely when fetching data from a slow API route. The application uses `React.useState` and `fetch` to retrieve data.  The issue arises because the initial render completes before the data is fetched, leaving the loading indicator active.

## Reproduction

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe that the page displays 'Loading...' indefinitely.

## Solution

The solution involves using `useSWR` or similar data fetching hook that handles loading states more effectively.