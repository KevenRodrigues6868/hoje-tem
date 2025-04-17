
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  status: boolean;
}

const Events = () => {
  const { eventSetId } = useParams();
  const [events, setEvents] = useState<Event[]>([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // TODO: Load events for the specific event set
    console.log('Loading events for event set:', eventSetId);
  }, [eventSetId]);

  const handleSave = () => {
    // TODO: Save events
    console.log('Saving events...');
    setIsEditing(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl">Event Set: {eventSetId}</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isEditing ? 'Cancel' : 'Edit Events'}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Description</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-t">
                <td className="px-6 py-4">
                  {isEditing ? (
                    <input
                      type="text"
                      value={event.name}
                      className="w-full px-2 py-1 border rounded"
                      onChange={(e) => {
                        const updatedEvents = events.map((ev) =>
                          ev.id === event.id ? { ...ev, name: e.target.value } : ev
                        );
                        setEvents(updatedEvents);
                      }}
                    />
                  ) : (
                    event.name
                  )}
                </td>
                <td className="px-6 py-4">
                  {isEditing ? (
                    <input
                      type="text"
                      value={event.description}
                      className="w-full px-2 py-1 border rounded"
                      onChange={(e) => {
                        const updatedEvents = events.map((ev) =>
                          ev.id === event.id ? { ...ev, description: e.target.value } : ev
                        );
                        setEvents(updatedEvents);
                      }}
                    />
                  ) : (
                    event.description
                  )}
                </td>
                <td className="px-6 py-4">
                  {isEditing ? (
                    <input
                      type="date"
                      value={event.date}
                      className="px-2 py-1 border rounded"
                      onChange={(e) => {
                        const updatedEvents = events.map((ev) =>
                          ev.id === event.id ? { ...ev, date: e.target.value } : ev
                        );
                        setEvents(updatedEvents);
                      }}
                    />
                  ) : (
                    new Date(event.date).toLocaleDateString()
                  )}
                </td>
                <td className="px-6 py-4 text-center">
                  {isEditing ? (
                    <input
                      type="checkbox"
                      checked={event.status}
                      onChange={(e) => {
                        const updatedEvents = events.map((ev) =>
                          ev.id === event.id ? { ...ev, status: e.target.checked } : ev
                        );
                        setEvents(updatedEvents);
                      }}
                    />
                  ) : (
                    event.status ? 'Active' : 'Inactive'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isEditing && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default Events;
