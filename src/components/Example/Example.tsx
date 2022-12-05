import m, { Vnode, VnodeDOM } from 'mithril';
import { MithrilTsxComponent } from 'mithril-tsx-component';

export interface ExampleAttrs {
	text: string;
}

export class Example extends MithrilTsxComponent<ExampleAttrs> {
	count = 0;
	value = '';

	oncreate(v: VnodeDOM<ExampleAttrs>) {
		console.log('Lifecycle method: ', v);
	}

	handleClick(event) {
		console.log(event);
		this.count++;
	}

	handleInput(event) {
		console.log(event);
		this.value = event.target.value;
	}

	view(vnode: Vnode<ExampleAttrs>) {
		const { text } = vnode.attrs;

		return (
			<div class='mt-4'>
				<button class='bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded' onclick={(event) => this.handleClick(event)}>
					{text} - clicked {this.count} times
				</button>
				<input 
					class='border rounded ml-2 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline'
					placeholder='Input something'
					value={this.value}
					oninput={(event) => this.handleInput(event)}
				/>
			</div>
		);
	}
}