<script>
    import Label from './label.svelte';
    export let labels = [];
</script>
<ul class='flex space-x-2 justify-center'>
    {#each labels as l}
    <Label color={l.color} text={l.text}/>
    {/each}
</ul>