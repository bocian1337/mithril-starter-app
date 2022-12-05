import m from 'mithril';
import { Example } from '../Example/Example';

export class App {
	view() {
		return (
			<div class='flex justify-center items-center'>
				<Example text="Sample Button"/>
			</div>
		);
	}
}