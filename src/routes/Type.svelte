<script lang="ts">
    import type { MBTIType } from './Types';

    
    export let mbtiType: MBTIType;
    export let outerRadius: number;
    export let innerRadius: number;
    let middleRadius: number;
    let middleAngle: number;
    export let angle: number;
    let current = "";


    // middleAngle = Math.PI / 16 * (innerRadius/outerRadius);

    

    middleRadius = (outerRadius + innerRadius) / 2;
    middleAngle = Math.PI / 16 * (innerRadius/outerRadius);


    let isExtroverted: boolean = mbtiType.abbreviation[0] == 'E';

    
    if (isExtroverted) {
        let temp = innerRadius;
        innerRadius = outerRadius;
        outerRadius = temp;
        middleAngle = Math.PI / 8 - middleAngle;
    }

    function polarToCartesian(r: number, theta: number): number[] {
        return [r*Math.cos(theta), r*Math.sin(theta)];
    }

</script>

<g class="{mbtiType.abbreviation} {current === mbtiType.abbreviation ? 'selected' : ''} typePiece {isExtroverted ? 'extroverted' : 'introverted'}">
    <g  transform="rotate({angle})">

        <!-- Primary Function -->
        <path d="
            M {polarToCartesian(middleRadius, -middleAngle)}
            L {polarToCartesian(innerRadius, -2*Math.PI / 16)}
            A {innerRadius} {innerRadius} 0 0 1 {polarToCartesian(innerRadius, 2*Math.PI / 16)}
            L {polarToCartesian(middleRadius, middleAngle)}
            A {middleRadius} {middleRadius} 0 0 0 {polarToCartesian(middleRadius, -middleAngle)} 
            " stroke-width="0"
            class="{mbtiType.primaryFunction.toString()}"/>

        <!-- Secondary Function -->
        <path d="
            M {outerRadius} 0
            L {polarToCartesian(middleRadius, -middleAngle)}
            A {middleRadius} {middleRadius} 0 0 1 {polarToCartesian(middleRadius, middleAngle)}
            L {outerRadius} 0
            " stroke-width="0"
            class="{mbtiType.secondaryFunction.toString()}"/>

        <!-- Surrounding Line -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <path d="
            M {outerRadius} 0
            L {polarToCartesian(innerRadius, -2*Math.PI / 16)}
            A {innerRadius} {innerRadius} 0 0 1 {polarToCartesian(innerRadius, 2*Math.PI / 16)}
            L {outerRadius} 0
            " stroke-width="1" stroke-opacity="0.7" fill-opacity="0" stroke="black"
            on:click={(e) => current == mbtiType.abbreviation ? current = "" : current = mbtiType.abbreviation }
            />
    </g>
</g>

<style>

    g.selected.introverted {
        transition: 0.3s;
        filter:grayscale();
        /* transform:scale(0.98); */
    }
    g.selected.extroverted {
        transition: 0.3s;
        filter:grayscale();
        /* transform:scale(1.02); */
    }

    .introverted:hover {
        transition: 0.3s;
        filter:brightness(1.5);
        /* transform:scale(0.98); */
    }
    .extroverted:hover {
        transition: 0.3s;
        filter:brightness(1.5);
        /* transform:scale(1.02); */
    }

    .Fi {
        fill: hwb(0 0% 25%);
    }
    .Fe {
        fill: hwb(0 25% 0%);
    }
    .Ti {
        fill: hwb(240 0% 25%);
    }
    .Te {
        fill: hwb(240 25% 0%);
    }
    .Si {
        fill: hwb(120 0% 25%);
    }
    .Se {
        fill: hwb(120 25% 0%);
    }
    .Ni {
        fill: hwb(283 0% 25%);
    }
    .Ne {
        fill: hwb(283 25% 0%);
    }
    
</style>