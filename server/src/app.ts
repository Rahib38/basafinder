import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandlers';
import authRouter from './app/modules/auth/auth.route';
import landloardRouter from './app/modules/landlord/landloard.route';
import tenantRoutes from './app/modules/tenant/tenant.route';
import adminRoutes from './app/modules/admin/admin.route';
const app: Application = express();
// const port = 3000;
app.use(express.json());
app.use(cors());



app.use('/api/auth', authRouter);
app.use('/api/admin', adminRoutes);
app.use('/api/landlords', landloardRouter);
app.use('/api/tenants', tenantRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use(globalErrorHandler);
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    StatusCode: StatusCodes.NOT_FOUND,
    message: 'Route not found',
  });
});

export default app;
