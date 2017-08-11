<template>
    <div>
        <canvas id="canvas" style="background:#000">
            your browser not support canavs
        </canvas>
    </div>
</template>

<script>
    import './assets/Martrix.min';
    export default {
        name: 'app',
        mounted() {
            martrix('canvas', {
                cW: 1390,
                cH: 700,
                wordColor: '#13CE66',
                fontSize: 13,
                speed: 0.13,
            });
        }
    }
</script>

<style>
    body {
        margin: 0;
        padding: 0;
    }
    #canvas {
        width: 100%;
        height: 100%;
    }
</style>
