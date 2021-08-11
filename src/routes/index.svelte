<script>
    import { onMount } from 'svelte';
    import {pokemons, fetchPokemons} from '../stores/pokedex/pokestore'
    import Card from '../components/Card/container.svelte';
    import Image from '../components/Card/image.svelte';
    import Content from '../components/Card/content.svelte';
    import LabelGroup from '../components/Card/labelGroup.svelte';
    let pokedex = [...$pokemons];
	let promise = [];
    onMount(async () => {
		promise = await fetchPokemons();
	});
</script>

<div class="relative w-full py-3">
   <h4 class="text-5xl text-blue-500 text-center font-thin">
       Svelte Pokedex
   </h4>
    <div class="max-w-7xl mx-auto">
        <input 
        class="w-full border-2 border-gray-400 rounded-md bg-gray-200 mt-4 p-3 focus:bg-white"
        placeholder="Search ..."
        >
    </div>
    <div class="grid grid-cols-6 grid-flow-row gap-5 py-3 justify-center space-x-0.5 m-2.5">
        {#await promise}
            <p>...waiting a</p>
        {:then res}
            {#each res as pokemon}
                <Card >
                    <Image src={pokemon.img}/>
                    <Content>
                        <h1 class="text-center hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">{pokemon.name}</h1>
                        <LabelGroup labels={pokemon.types} />
                    </Content>
                </Card>
            {/each}
        {:catch error}
	        <p style="color: red">{error.message}</p>
        {/await}
    </div>
</div>


