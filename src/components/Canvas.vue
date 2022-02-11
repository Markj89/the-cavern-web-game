<template>
    <div class="wrapper">
        <div class="canvas_wrapper">
            <MainCharacter />
        </div>
        <div class="Xaxis">
            <span>X: {{ x }}</span>
        </div>
        <div class="Yaxis">
            <span>Y: {{ y }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { eventBus } from '../eventbus';
import  MainCharacter from './MainCharacter.vue';

export default {
    name: 'Canvas',
    components: {
        MainCharacter
    },
    data() {
        return {
            x: 0,
            y: 0
        }
    },
    mounted() {
        eventBus.$on('get-coords', (data) => {
            this.x = data.x;
            this.y = data.y;
        });
    }
};
</script>
<style scoped>
.container {
    position: relative;
}
#myCanvas {
    margin: auto;
    display: block;
    width: 80%;
    height: 400px;
    background-color: transparent;
    border: 3px solid black;
}
</style>