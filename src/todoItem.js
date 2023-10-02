export const Status = {
  Backlog: 'Backlog',
  Todo: 'Todo',
  Doing: 'Doing',
  Done: 'Done',
};

export const Priority = {
  Urgent: 0,
  High: 1,
  Medium: 2,
  Low: 3,
};

export class TodoItem {
  constructor(title, description, dueDate, priority = Priority.Medium, status = Status.Backlog) {
    this.Title = title;
    this.Description = description;
    this.DueDate = dueDate;
    this.Priority = priority;
    this.Status = status;
  }

  set title(title) {
    this.Title = title;
  }

  get title() {
    return this.Title;
  }

  set description(description) {
    this.Description = description;
  }

  get description() {
    return this.Description;
  }

  set dueDate(dueDate) {
    this.DueDate = dueDate;
  }

  get dueDate() {
    return this.DueDate;
  }

  set priority(priority) {
    this.Priority = priority;
  }

  get priority() {
    return this.Priority;
  }

  set status(status) {
    this.status = status;
  }

  get status() {
    return this.status;
  }
}
