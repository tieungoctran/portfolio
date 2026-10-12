import { Request, Response } from 'express';

export const getProjectInfo = (_req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    data: {
      name: 'TN-Project',
      description: 'Nền tảng Full-stack Web & DevOps hiện đại',
      stack: {
        frontend: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS'],
        backend: ['Node.js', 'Express', 'TypeScript'],
        devops: ['Docker Multi-stage', 'Docker Compose', 'Nginx', 'GitHub Actions CI/CD'],
      },
      status: 'active',
      version: '1.0.0',
    },
  });
};
