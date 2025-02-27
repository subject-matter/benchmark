// Add caching to your Sanity client
const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: true, // Enable this if not already
  // Add cache configuration
  token: process.env.SANITY_API_TOKEN,
}) 