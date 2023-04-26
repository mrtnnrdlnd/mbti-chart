<script lang="ts">

import Type from './Type.svelte';


let colors: string[] = ["#fa3632", "#fca02b", "#f1f83a", "#5ff642", "#24e5fb", "#2875fb", "#5738f7", "#f649f0" ];

let outerRadius: number = 400;

let innerRadius: number = 270;


</script>



<svg height='{outerRadius * 2}' width='{outerRadius * 2}'>
    <!-- <circle class='outerRing' cx='100' cy='100' r='{radius}'/>
    <circle class='innerRing' cx='100' cy='100' r='{radius_small}' style="fill:white"/> -->

    
    <g transform="translate({outerRadius}, {outerRadius})">

        {#each [1, 2, 3, 4, 5, 6, 7, 8] as angle}
            <Type color="{colors[angle - 1]}" outerRadius="{outerRadius}" innerRadius="{innerRadius}" angle="{360/8*(angle + 0.5)}" />
            <Type color="{colors[angle - 1]}" introverted="{false}" outerRadius="{outerRadius}" innerRadius="{innerRadius}" angle="{360/8*(angle)}" />
        {/each}

    </g>

</svg>



<style>

    /* svg:hover path {
    transition: d 0.2s;
    d: path("M2,5 C2,2 8,2 8,5");
    } */

</style>
