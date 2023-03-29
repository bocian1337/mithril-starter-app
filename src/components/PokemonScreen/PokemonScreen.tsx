import m, { Vnode, VnodeDOM } from 'mithril';

export class PokemonScreen {
  value = '';

	oncreate(v: VnodeDOM) {
		console.log('Lifecycle method: ', v);
  }

	handleInput(event) {
		this.value = event.target.value;
	}

	view() {
		return (
      <div class='bg-[#313131]'>
        <div class='flex items-center justify-center bg-pokemon-background bg-no-repeat bg-contain min-h-screen'>
          <div class='p-2 w-1/4 rounded-xl bg-[#313131] opacity-80'>
            <div class='w-1/2'>
              <input class='w-3/6 px-3 py-2 rounded-md'/>
              <button class='w-1/6 px-3 py-2 rounded-md bg-white'>Search</button>
            </div>
          </div>
        </div>
      </div>
		);
	}
} 