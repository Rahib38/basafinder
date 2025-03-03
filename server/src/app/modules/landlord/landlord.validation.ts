import { z } from 'zod';

// Listing Validation Schema using Zod
export const listingValidationSchema = z.object({
  body: z.object({
    location: z.string().min(3, 'Location must be at least 3 characters long'),
    description: z
      .string()
      .min(10, 'Description must be at least 10 characters long'),
    rent: z.number().min(1000, 'Rent must be at least 1000'),
    bedrooms: z.number().int().min(1, 'Bedrooms must be at least 1'),
    landlord: z.string({required_error:"landlord id is required"}),
  }),
});
export const listingUpdateValidationSchema = z.object({
  body: z.object({
    location: z.string().min(3, 'Location must be at least 3 characters long').optional(),
    description: z
      .string()
      .min(10, 'Description must be at least 10 characters long').optional(),
    rent: z.number().min(1000, 'Rent must be at least 1000').optional(),
    bedrooms: z.number().int().min(1, 'Bedrooms must be at least 1').optional(),
    landlord: z.string({required_error:"landlord id is required"}).optional(),
  }),
});
