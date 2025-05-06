import { z } from 'zod';
import { eventSchema } from '../validators/schema';

export type EventResponseDTO = z.infer<typeof eventSchema>;
