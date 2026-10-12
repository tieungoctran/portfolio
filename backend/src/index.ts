import { createApp } from './app';

const app = createApp();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 [Backend] Server is running at http://localhost:${PORT}`);
  console.log(`🩺 [Backend] Health check: http://localhost:${PORT}/health`);
  console.log(`📦 [Backend] API Info: http://localhost:${PORT}/api/v1/info`);
});
