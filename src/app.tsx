import m from 'mithril';
import { Example } from './components/Example/Example';

export class App {
	view() {
		return (
			<div>
				<h1>Mithril Starter App</h1>
				<Example text="Sample Button"/>
			</div>
		);
	}
}