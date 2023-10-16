import Project from './project';

class ProjectManager {
  constructor() {
    this.Items = [];
    this.FilterDone = false;
  }

  createItem(title, description, dueDate) {
    this.Items.push(new Project(title, description, dueDate));
  }

  updateItem(item, title, description, dueDate) {
    this.Items[this.Items.indexOf(item)].title = title;
    this.Items[this.Items.indexOf(item)].description = description;
    this.Items[this.Items.indexOf(item)].dueDate = dueDate;
  }

  set filterDone(filter) {
    this.FilterDone = filter;
  }

  get filterDone() {
    return this.FilterDone;
  }
}

export default ProjectManager;
