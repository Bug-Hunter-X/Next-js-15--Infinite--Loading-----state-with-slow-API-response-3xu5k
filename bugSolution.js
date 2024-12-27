```javascript
// pages/index.js
import useSWR from 'swr';

export default function Home() {
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data, error } = useSWR('/api/hello', fetcher);

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Hello {data.name}!</h1>
    </div>
  );
}
```
```javascript
// pages/api/hello.js
export default async function handler(req, res) {
  // Simulate a delay to reproduce the issue
  await new Promise(resolve => setTimeout(resolve, 5000)); 

  res.status(200).json({ name: 'John Doe' });
}
```