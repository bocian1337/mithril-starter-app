import m, { Vnode } from 'mithril';
import { MithrilTsxComponent } from 'mithril-tsx-component';

export interface TodoItemAttrs {
	text: string;
  clickHandler: () => void;
}

export class TodoItem extends MithrilTsxComponent<TodoItemAttrs>{
  view(vNode: Vnode<TodoItemAttrs>) {
    const { text, clickHandler } = vNode.attrs;
  
    return (
      <li 
        class='rounded mt-2 bg-gray-600 text-white font-bold text-center p-2 cursor-pointer hover:bg-gray-700'
        onclick={clickHandler}
      >
        {text}
      </li>
    );
  }
}
