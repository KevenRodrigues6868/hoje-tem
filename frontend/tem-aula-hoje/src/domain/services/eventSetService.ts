
import { EventSet, Event } from '../models/EventSet';
import api from './api';

export const eventSetService = {
  async getEventSets() {
    const response = await api.get('/event-sets');
    return response.data as EventSet[];
  },

  async createEventSet(eventSet: Omit<EventSet, 'id'>) {
    const response = await api.post('/event-sets', eventSet);
    return response.data as EventSet;
  },

  async updateEventSet(id: string, eventSet: Partial<EventSet>) {
    const response = await api.put(`/event-sets/${id}`, eventSet);
    return response.data as EventSet;
  },

  async deleteEventSet(id: string) {
    await api.delete(`/event-sets/${id}`);
  },

  async getEvents(eventSetId: string) {
    const response = await api.get(`/event-sets/${eventSetId}/events`);
    return response.data as Event[];
  },

  async updateEvents(eventSetId: string, events: Event[]) {
    const response = await api.put(`/event-sets/${eventSetId}/events`, events);
    return response.data as Event[];
  }
};
