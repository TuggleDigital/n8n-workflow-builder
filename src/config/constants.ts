// Get environment variables
const N8N_HOST = process.env.N8N_HOST || '';
const N8N_API_KEY = process.env.N8N_API_KEY || '';

// Validate environment variables
if (!N8N_HOST) {
  console.error('N8N_HOST environment variable is not set!');
  console.error('Please define it in your environment or .env file.');
  console.error('Example: N8N_HOST=https://n8n.example.com/api/v1');
  // Don't exit process here to allow for graceful handling
}

if (!N8N_API_KEY) {
  console.error('N8N_API_KEY environment variable is not set!');
  console.error('Please define it in your environment or .env file.');
  console.error('Get your API key from the n8n instance settings.');
  // Don't exit process here to allow for graceful handling
}

// Export constants
export { N8N_HOST, N8N_API_KEY };
