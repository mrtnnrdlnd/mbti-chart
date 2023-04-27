<script lang="ts">

import Type from './Type.svelte';

import { MBTITypes, type MBTIType, CognetiveFunction } from './Types'



let outerRadius: number = 400;

let innerRadius: number = 300;



</script>


<svg height='{outerRadius * 2.1}' width='{outerRadius * 2.1}'>

    
    <g transform="translate({outerRadius* 1.05}, {outerRadius* 1.05}), rotate({-90-360/32})">

        {#each [...Array(16).keys()] as index}
            
            <Type
                outerRadius="{outerRadius}" 
                innerRadius="{innerRadius}" 
                angle="{360/8*(index*0.5)}"
                mbtiType={MBTITypes[index]}
                />

        {/each}

    </g>

</svg>



<style>

    

    /* svg:hover path {
    transition: d 0.2s;
    d: path("M2,5 C2,2 8,2 8,5");
    } */

</style>
