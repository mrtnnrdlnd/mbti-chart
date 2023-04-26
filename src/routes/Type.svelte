<script lang="ts">
    import type { MBTIType } from './Types';

    
    export let mbtiType: MBTIType;
    export let outerRadius: number;
    export let innerRadius: number;
    let middleRadius: number;
    let middleAngle: number;
    export let angle: number;


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


<g class="{mbtiType.abbreviation} typePiece {isExtroverted ? 'extroverted' : 'introverted'}">
    <path d="
        M {outerRadius} 0
        L {polarToCartesian(middleRadius, -middleAngle)}
        A {middleRadius} {middleRadius} 0 0 1 {polarToCartesian(middleRadius, middleAngle)}
        L {outerRadius} 0
        " stroke-width="0"
        transform="rotate({angle})"
        class="{mbtiType.secondaryFunction.toString()}"/>

    <path d="
        M {polarToCartesian(middleRadius, -middleAngle)}
        L {polarToCartesian(innerRadius, -2*Math.PI / 16)}
        A {innerRadius} {innerRadius} 0 0 1 {polarToCartesian(innerRadius, 2*Math.PI / 16)}
        L {polarToCartesian(middleRadius, middleAngle)}
        A {middleRadius} {middleRadius} 0 0 0 {polarToCartesian(middleRadius, -middleAngle)} 
        " stroke-width="0"
        transform="rotate({angle})"
        class="{mbtiType.primaryFunction.toString()}"/>
</g>

<style>

    .introverted:hover {
        transform:scale(0.95);
    }
    .extroverted:hover {
        transform:scale(1.05);
    }

    .Fi {
        fill: darkred;
    }
    .Fe {
        fill: lightcoral;
    }
    .Ti {
        fill: darkblue;
    }
    .Te {
        fill: lightblue;
    }
    .Si {
        fill: darkgreen;
    }
    .Se {
        fill: lightgreen;
    }
    .Ni {
        fill: darkmagenta;
    }
    .Ne {
        fill: magenta;
    }
    
</style>