import { parseISO } from 'date-fns';
import { EventResponseDTO } from '../dto/response';
import { Event } from 'src/model/event';

export const FromEventResponseDtoToEventModel = (
  source: EventResponseDTO
): Event => {
  return {
    id: source.id,
    name: source.name,
    date: parseISO(source.date),
    registrationClosingDate: parseISO(source.registrationClosingDate),
    location: source.location,
    cashPrize: source.cashPrize,
    linkLocation: source.linkLocation,
    linkEvent: source.linkEvent,
    imageUrl: source.imageUrl
  };
};
