export enum StatusType {
    NotStarted = 'Not Started',
    InProgress = 'In Progress',
    Completed  = 'Completed'
};
  
export interface Task {
    id: number;
    status: StatusType;
    title: string;
    description?: string;
};