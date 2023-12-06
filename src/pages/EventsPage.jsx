import "../styles/eventsPage.css";
import EventCard from "../components/Event/EventCard";
import { useClient } from "../contexts/client/ClientContext";
import { useEffect, useState } from "react";

const EventsPage = () => {
  const {client} = useClient()
  const [data, setData] = useState([])
  useEffect(() => {
    client.get('/events/').then(res => {
      setData(res.data)
    })
  }, [])
  
  return (
    <div>
      <div className="events-container" gap={50} wrap="wrap">
        {data.map((event) => (
          <EventCard key={event.id} data={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
