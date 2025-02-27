import useSWR from 'swr'

function SomeComponent() {
  const { data } = useSWR(
    query,
    () => client.fetch(query),
    {
      revalidateOnFocus: false, // Reduce unnecessary revalidation
      dedupingInterval: 60000, // Cache for 1 minute
    }
  )
  // ...
} 