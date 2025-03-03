import { z } from 'zod';

export const rentalRequestValidation = z.object({
  body: z.object({
    rentalHouse: z.string({ required_error: ' rental house ID is required' }),
    tenant: z.string({ required_error: ' telnant ID is required' }),
    status: z.enum(['pending', 'approved', 'rejected']).default('pending'),

    paymentStatus: z.enum(['pending', 'paid']).default('pending'),
    additionalMessage: z
      .string()
      .min(10, 'Message must be within 10 characters'),
  }),
});
export const rentalUpdateRequestValidation = z.object({
  body: z.object({
    rentalHouse: z.string({ required_error: ' rental house ID is required' }).optional(),
    tenant: z.string({ required_error: ' telnant ID is required' }).optional(),
    status: z.enum(['pending', 'approved', 'rejected']).default('pending').optional(),

    paymentStatus: z.enum(['pending', 'paid']).default('pending').optional(),
    additionalMessage: z
      .string()
      .min(10, 'Message must be within 10 characters').optional(),
  }),
});
