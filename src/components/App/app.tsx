import m from 'mithril';
import { Example } from '../Example/Example';
import { TodoList } from '../TodoList/TodoList';

export class App {
	view() {
		return (
			<div class='flex flex-col justify-center items-center h-screen bg-gradient-to-t from-[#9c0e2d] to-indigo-400'>
				<TodoList />
			</div>
		);
	}
}