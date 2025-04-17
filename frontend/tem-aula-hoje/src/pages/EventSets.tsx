
import { useState, useEffect } from 'react';
import { Trash2, Edit2, Eye, ToggleLeft, ToggleRight } from 'lucide-react';
import { eventSetService } from '../domain/services/eventSetService';
import { EventSet } from '../domain/models/EventSet';

export const EventSets = () => {
  const [eventSets, setEventSets] = useState<EventSet[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEventSet, setNewEventSet] = useState({ name: '', description: '' });

  useEffect(() => {
    loadEventSets();
  }, []);

  const loadEventSets = async () => {
    try {
      const data = await eventSetService.getEventSets();
      setEventSets(data);
    } catch (error) {
      console.error('Error loading event sets:', error);
    }
  };

  const handleCreateEventSet = async () => {
    try {
      await eventSetService.createEventSet({
        ...newEventSet,
        date: new Date().toISOString(),
        status: true,
      });
      setIsModalOpen(false);
      setNewEventSet({ name: '', description: '' });
      loadEventSets();
    } catch (error) {
      console.error('Error creating event set:', error);
    }
  };

  const filteredEventSets = eventSets.filter(eventSet =>
    eventSet.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create New Event Set
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search event sets..."
          className="w-full max-w-md px-4 py-2 border rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Description</th>
              <th className="px-6 py-3 text-center">Status</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEventSets.map((eventSet) => (
              <tr key={eventSet.id} className="border-t">
                <td className="px-6 py-4">{new Date(eventSet.date).toLocaleDateString()}</td>
                <td className="px-6 py-4">{eventSet.name}</td>
                <td className="px-6 py-4">{eventSet.description}</td>
                <td className="px-6 py-4 text-center">
                  {eventSet.status ? <ToggleRight className="inline" /> : <ToggleLeft className="inline" />}
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 size={20} />
                    </button>
                    <button className="text-blue-500 hover:text-blue-700">
                      <Edit2 size={20} />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      <Eye size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Create Event Set</h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded mb-4"
              value={newEventSet.name}
              onChange={(e) => setNewEventSet({ ...newEventSet, name: e.target.value })}
            />
            <textarea
              placeholder="Description"
              className="w-full px-4 py-2 border rounded mb-4"
              value={newEventSet.description}
              onChange={(e) => setNewEventSet({ ...newEventSet, description: e.target.value })}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateEventSet}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
