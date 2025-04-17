
export interface EventSet {
  id: string;
  name: string;
  description: string;
  date: string;
  status: boolean;
}

export interface Event {
  id: string;
  eventSetId: string;
  name: string;
  description: string;
  date: string;
  status: boolean;
}
