import { validateObjectSchema } from 'src/config/zod';
import { z } from 'zod';
import { eventSchema } from './validators/schema';
import axios from 'axios';
import { Event } from 'src/model/event';
import { FromEventResponseDtoToEventModel } from './mapper/mapper';

export const EventApis = {
  async getAllEvents(): Promise<Event[]> {
    const res = await axios.get('/events/events.json');
    const validRes = validateObjectSchema(z.array(eventSchema), res.data);
    return validRes.map((event) => FromEventResponseDtoToEventModel(event));
  },
  async getAllPreviousEvents(): Promise<Event[]> {
    const res = await axios.get('/events/events.json');
    const validRes = validateObjectSchema(z.array(eventSchema), res.data);
    const mappedRes = validRes.map((event) =>
      FromEventResponseDtoToEventModel(event)
    );
    return mappedRes.filter((event) => event.date < new Date());
  },
  async getAllNextEvents(): Promise<Event | null> {
    const res = await axios.get('/events/events.json');
    const validRes = validateObjectSchema(z.array(eventSchema), res.data);
    const mappedRes = validRes.map((event) =>
      FromEventResponseDtoToEventModel(event)
    );
    const nextEvents = mappedRes.filter((event) => event.date > new Date());
    return nextEvents.length > 0 ? nextEvents[0] : null;
  }
};
