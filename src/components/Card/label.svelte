<script>
    export let color = '';
    export let text = '';
</script>

<li class={color ? color + ' text-white text-md px-4 rounded-3xl' : ''}>{text}</li>

<style>
   .normal-label { background-color: #FEF3C7}
   .fire-label { background-color: #D97821}
   .water-label { background-color: #3A82F6}
   .grass-label { background-color: #49BA82}
   .electric-label { background-color: #F59E27}
   .ice-label { background-color: #93C5FD}
   .fighting-label { background-color: #DC3A26}
   .poison-label { background-color: #A7F3D0}
   .ground-label { background-color: #FDE68A}
   .flying-label { background-color: #C7D2FE}
   .psychic-label { background-color: #EF4444}
   .bug-label { background-color: #53D49A}
   .rock-label { background-color: #D97821}
   .ghost-label { background-color: #1F3A8A}
   .dark-label { background-color: #B45319}
   .dragon-label { background-color: #2463EB}
   .steel-label { background-color: #D1D5DB}
   .fairy-label { background-color: #FBCACA}
</style>
