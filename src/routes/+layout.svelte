<script>
    import "../app.css";

    let { children } = $props();
</script>

<div id="parchment"></div>
<svg>
    <filter id="wavy2">
        <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1"></feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="20" />
    </filter>
</svg>

<div id="contain">
    {@render children()}
</div>
