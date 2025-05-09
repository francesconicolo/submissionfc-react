import { TypographyH1 } from '@shadcn/components/Typography';
import { LoaderCircle } from 'lucide-react';
import { useParams } from 'react-router';
import { useGetEventById } from 'src/api/event/event.queries';
import { AsyncQueryView } from 'src/shared/components/utils/AsyncQueryView/AsyncQueryView';
import MainContent from './MainContent';

export default function EventsPage() {
  const params = useParams();
  const getEventByIdQuery = useGetEventById(Number(params.id));
  return (
    <div>
      <AsyncQueryView
        query={getEventByIdQuery}
        data={(event) =>
          event ? (
            <MainContent event={event}></MainContent>
          ) : (
            <p>No event data available</p>
          )
        }
        loading={
          <div className="h-[700px] flex items-center justify-center">
            <LoaderCircle className="size-20 animate-spin" />
          </div>
        }
        error={() => (
          <div className="h-[700px] flex items-center justify-center">
            <TypographyH1 className="text-center">
              Evento non trovato!
            </TypographyH1>
          </div>
        )}
      />
    </div>
  );
}
