import { Card, CardContent } from '@shadcn/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@shadcn/components/ui/carousel';
import { AsyncQueryView } from '../../utils/AsyncQueryView/AsyncQueryView';

import { useGetAllEventsPreviousQuery } from 'src/api/event/event.queries';
import { useNavigate } from 'react-router';

export function CarouselEvents() {
  const getAllPreviousEventsQuery = useGetAllEventsPreviousQuery();
  const navigate = useNavigate();
  return (
    <AsyncQueryView
      query={getAllPreviousEventsQuery}
      data={(events) => (
        <Carousel className="w-full my-4 ">
          <CarouselContent>
            {events.map((event) => (
              <CarouselItem
                key={event.id}
                className=" md:basis-1/2 lg:basis-1/3 "
              >
                <div className="p-1">
                  <Card
                    className="p-0 overflow-hidden cursor-pointer grayscale-100  md:w-[300px] hover:grayscale-0"
                    onClick={() => navigate(`/event/${event.id}`)}
                  >
                    <CardContent className="flex aspect-square items-center justify-center p-0 h-full ">
                      <img
                        src={event.imageUrl}
                        alt="Locandina evento"
                        className="object-contain"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    />
  );
}
