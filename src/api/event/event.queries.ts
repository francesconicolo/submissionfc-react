import { EventApis } from './event.api';
import { useQuery } from '@tanstack/react-query';

export const EventKeys = {
  all: ['events'],
  previous: ['previous-events'],
  next: ['next-events']
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useGetAllEventsQuery = () => {
  return useQuery({
    queryKey: EventKeys.all,
    queryFn: () => EventApis.getAllEvents()
  });
};
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useGetAllEventsPreviousQuery = () => {
  return useQuery({
    queryKey: EventKeys.previous,
    queryFn: () => EventApis.getAllPreviousEvents()
  });
};
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useGetAllEventsNextQuery = () => {
  return useQuery({
    queryKey: EventKeys.next,
    queryFn: () => EventApis.getAllNextEvents()
  });
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useGetEventById = (id: number) => {
  return useQuery({
    queryKey: EventKeys.next,
    queryFn: () => EventApis.getEventById(id)
  });
};
