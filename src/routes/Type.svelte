<script lang="ts">
    import { onMount } from 'svelte';
    import type Coordinate from './Coordinate';

    export let outerRadius: number;
    export let innerRadius: number;
    let middleRadius: number;
    let middleAngle: number;
    export let angle: number;
    export let color: string;
    export let introverted: boolean = true;


    // middleAngle = Math.PI / 16 * (innerRadius/outerRadius);

    

    middleRadius = (outerRadius + innerRadius) / 2;
    middleAngle = Math.PI / 16 * (innerRadius/outerRadius);
    
    if (!introverted) {
        let temp = innerRadius;
        innerRadius = outerRadius;
        outerRadius = temp;
        middleAngle = Math.PI / 8 - middleAngle;
    }

    function polarToCartesian(r: number, theta: number): number[] {
        return [r*Math.cos(theta), r*Math.sin(theta)];
    }

</script>


<g>
    <path d="
        M {outerRadius} 0
        L {polarToCartesian(middleRadius, -middleAngle)}
        A {middleRadius} {middleRadius} 0 0 1 {polarToCartesian(middleRadius, middleAngle)}
        L {outerRadius} 0
        " stroke="black" fill="{color}" stroke-width="0"
        transform="rotate({angle})"/>

    <path d="
        M {polarToCartesian(middleRadius, -middleAngle)}
        L {polarToCartesian(innerRadius, -2*Math.PI / 16)}
        A {innerRadius} {innerRadius} 0 0 1 {polarToCartesian(innerRadius, 2*Math.PI / 16)}
        L {polarToCartesian(middleRadius, middleAngle)}
        A {middleRadius} {middleRadius} 0 0 0 {polarToCartesian(middleRadius, -middleAngle)} 
        " stroke="black" fill="black" stroke-width="0"
        transform="rotate({angle})"/>
</g>

