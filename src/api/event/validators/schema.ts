import { z } from 'zod';

export const eventSchema = z.object({
  id: z.number(),
  name: z.string(),
  date: z.string(),
  registrationClosingDate: z.string(),
  location: z.string(),
  cashPrize: z.string(),
  linkLocation: z.string(),
  linkEvent: z.string(),
  imageUrl: z.string(),
  assetsUrl: z.string()
});
