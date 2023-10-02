import ItemManager from './itemManager';

class Project {
  constructor(title, description, dueDate) {
    this.Title = title;
    this.Description = description;
    this.DueDate = dueDate;
    this.Manager = new ItemManager();
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

  get items() {
    return this.Manager.items;
  }

  get manager() {
    return this.Manager;
  }
}

export default Project;
