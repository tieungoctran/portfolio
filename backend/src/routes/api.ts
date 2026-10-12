import { Router } from 'express';
import { getHealth } from '../controllers/healthController';
import { getProjectInfo } from '../controllers/projectController';

const router = Router();

// Health check endpoint (phục vụ Kubernetes / Docker / AWS health checks)
router.get('/health', getHealth);

// REST API routes
router.get('/info', getProjectInfo);

export default router;
