import { compareAsc } from 'date-fns';
import { TodoItem, Status } from './todoItem';

class ItemManager {
  constructor() {
    this.Items = [];
    this.FilterDone = false;
  }

  createItem(name, description, dueDate, priority) {
    this.Items.push(new TodoItem(name, description, dueDate, priority));
  }

  deleteItem(item) {
    this.Items = this.Items.splice(this.Items.indexOf(item), 1);
  }

  updateItem(item, name, description, dueDate, priority) {
    this.Items[this.Items.indexOf(item)].name = name;
    this.Items[this.Items.indexOf(item)].description = description;
    this.Items[this.Items.indexOf(item)].dueDate = dueDate;
    this.Items[this.Items.indexOf(item)].priority = priority;
  }

  sortDateThenPriority() {
    this.Items = this.Items.sort((a, b) => {
      const dateComparison = compareAsc(a.dueDate, b.dueDate);
      if (dateComparison === 0) {
        // If dates are equal, sort by priority in descending order (priority 1 > priority 3);
        return b.priority - a.priority;
      }
      return dateComparison;
    });
  }

  sortPriorityThenDate() {
    this.Items = this.Items.sort((a, b) => {
      const priorityComparison = b.priority - a.priority;
      if (priorityComparison === 0) {
        // If priorities are equal, sort by dates in ascending order
        return compareAsc(a.dueDate, b.dueDate);
      }
      return priorityComparison;
    });
  }

  set filterDone(filter) {
    this.FilterDone = filter;
  }

  get filterDone() {
    return this.FilterDone;
  }

  get items() {
    return this.filterDone
      ? [...this.Items].filter((item) => item.status !== Status.Done)
      : this.Items;
  }
}

export default ItemManager;
