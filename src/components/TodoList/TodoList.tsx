import m from 'mithril';
import { TodoItem } from './TodoItem';

interface Item {
  id: string;
  text: string;
}

export class TodoList {
  inputValue = '';
  items: Item[] = [];

  handleInput(event) {
		this.inputValue = event.target.value;
	}

  handleClick() {
    if (this.inputValue) {
      this.items.push({ id: Math.random().toString(), text: this.inputValue });
      this.inputValue = '';
    }
  }

  handleRemove(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  view() {
    return (
      <div class='mt-6'>
        <input
          class='rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline w-3/5' 
          placeholder='Input Todo'
          value={this.inputValue}
          oninput={(event) => this.handleInput(event)}
        />
        <button 
          class='bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-2/5'
          onclick={() => this.handleClick()}
        >
          Submit Todo
        </button>
        <ul>
          {
            this.items.map((item) => <TodoItem key={item.id} text={item.text} clickHandler={() => this.handleRemove(item.id)}/>)
          }
        </ul>
      </div>
    );
  }
}