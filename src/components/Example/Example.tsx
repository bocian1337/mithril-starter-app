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
			<div>
				<button onclick={(event) => this.handleClick(event)}>
					{text} - clicked {this.count} times
				</button>
				<input 
					placeholder='Input something'
					value={this.value}
					oninput={(event) => this.handleInput(event)}
				/>
			</div>
		);
	}
}