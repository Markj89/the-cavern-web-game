<template>
    <div ref="mainCharacter" id="main-character" @keydown="navigate(event)"></div>
</template>
<script lang="ts">
import { eventBus } from './../eventbus';
export default {
    name: 'MainCharacter',
    data() {
        return {
            axisX: 10,
            axisY: 10,
            movementX: 0,
            movementY: 0
        }
    },
    mounted() {
        /*window.addEventListener('keydown', event => {
            if (!event.repeat) {
                console.log(event.key);
            } else {
                console.log(event.key);
            }
        });*/
    },
    created() {
        window.addEventListener('keydown', this.navigate);
    },
    destroyed() {
        window.addEventListener('keyup', this.navigate);
    },
    methods: {
        navigate() {
            if (event.key !== undefined) {
                switch (event.key) {
                    case "Right": // Right arrow
                    case "ArrowRight":
                        this.axisX++;
                        this.$refs.mainCharacter.style.left = (this.$refs.mainCharacter.offsetLeft + this.axisX) + 'px';
                        break;
                    case  "Left": // Left Arrow
                    case "ArrowLeft":
                        this.axisX--;
                        this.$refs.mainCharacter.style.left = (this.$refs.mainCharacter.offsetLeft - this.axisX) + 'px';
                        break;
                    case "Up": // Up arrow
                    case "ArrowUp":
                        this.axisY--;
                        this.$refs.mainCharacter.style.top = (this.$refs.mainCharacter.offsetTop - this.axisY) + 'px';
                        break;
                    case "Down": // Down arrow
                    case "ArrowDown":
                        this.axisY++;
                        this.$refs.mainCharacter.style.top = (this.$refs.mainCharacter.offsetTop + this.axisY) + 'px';
                        break;
                    default:
                        break;
                }
            } else if (event.keyIdentifier !== undefined) {  
                switch (event.keyIdentifier) {
                    case "Right": // Right arrow
                    case "ArrowRight":
                        this.axisX++;
                        this.$refs.mainCharacter.style.left = (this.$refs.mainCharacter.offsetLeft + this.axisX) + 'px';
                        break;
                    case  "Left": // Left Arrow
                    case "ArrowLeft":
                        this.axisX--;
                        this.$refs.mainCharacter.style.left = (this.$refs.mainCharacter.offsetLeft - this.axisX) + 'px';
                        break;
                    case "Up": // Up arrow
                    case "ArrowUp":
                        this.axisY--;
                        this.$refs.mainCharacter.style.top = (this.$refs.mainCharacter.offsetTop - this.axisY) + 'px';
                        break;
                    case "Down": // Down arrow
                    case "ArrowDown":
                        this.axisY++;
                        this.$refs.mainCharacter.style.top = (this.$refs.mainCharacter.offsetTop + this.axisY) + 'px';
                        break;
                    default:
                        break;
                }
            } else if (event.keyCode !== undefined) {
                switch (event.keyCode) {
                    case "Right": // Right arrow
                    case "ArrowRight":
                        this.axisX++;
                        this.$refs.mainCharacter.style.left = (this.$refs.mainCharacter.offsetLeft + this.axisX) + 'px';
                        break;
                    case  "Left": // Left Arrow
                    case "ArrowLeft":
                        this.axisX--;
                        this.$refs.mainCharacter.style.left = (this.$refs.mainCharacter.offsetLeft - this.axisX) + 'px';
                        break;
                    case "Up": // Up arrow
                    case "ArrowUp":
                        this.axisY--;
                        this.$refs.mainCharacter.style.top = (this.$refs.mainCharacter.offsetTop - this.axisY) + 'px';
                        break;
                    case "Down": // Down arrow
                    case "ArrowDown":
                        this.axisY++;
                        this.$refs.mainCharacter.style.top = (this.$refs.mainCharacter.offsetTop + this.axisY) + 'px';
                        break;
                    default:
                        break;
                }
            } else if (event.code !== undefined) {
                switch (event.code) {
                     case "Right": // Right arrow
                    case "ArrowRight":
                        this.axisX++;
                        this.$refs.mainCharacter.style.left = (this.$refs.mainCharacter.offsetLeft + this.axisX) + 'px';
                        break;
                    case  "Left": // Left Arrow
                    case "ArrowLeft":
                        this.axisX--;
                        this.$refs.mainCharacter.style.left = (this.$refs.mainCharacter.offsetLeft - this.axisX) + 'px';
                        break;
                    case "Up": // Up arrow
                    case "ArrowUp":
                        this.axisY--;
                        this.$refs.mainCharacter.style.top = (this.$refs.mainCharacter.offsetTop - this.axisY) + 'px';
                        break;
                    case "Down": // Down arrow
                    case "ArrowDown":
                        this.axisY++;
                        this.$refs.mainCharacter.style.top = (this.$refs.mainCharacter.offsetTop + this.axisY) + 'px';
                        break;
                    default:
                        break;
                }
            }
            const axisPoints = { x: this.axisX, y: this.axisY };
            eventBus.$emit('get-coords', axisPoints);            
        },
    }
};
</script>

<style scoped>
    #main-character {
        box-shadow: 50px 50px 0 0 rgba(255, 235, 59, 1), 55px 50px 0 0 rgba(255, 235, 59, 1), 60px 50px 0 0 rgba(255, 235, 59, 1), 50px 55px 0 0 rgba(255, 235, 59, 1), 55px 55px 0 0 rgba(48, 63, 70, 1), 60px 55px 0 0 rgba(255, 235, 59, 1), 45px 60px 0 0 rgba(255, 235, 59, 1), 50px 60px 0 0 rgba(255, 235, 59, 1), 55px 60px 0 0 rgba(0, 0, 0, 1), 60px 60px 0 0 rgba(255, 235, 59, 1), 65px 60px 0 0 rgba(255, 235, 59, 1), 40px 65px 0 0 rgba(255, 235, 59, 1), 50px 65px 0 0 rgba(63, 81, 181, 1), 55px 65px 0 0 rgba(255, 235, 59, 1), 60px 65px 0 0 rgba(63, 81, 181, 1), 70px 65px 0 0 rgba(255, 235, 59, 1), 40px 70px 0 0 rgba(255, 235, 59, 1), 50px 70px 0 0 rgba(255, 235, 59, 1), 55px 70px 0 0 rgba(255, 235, 59, 1), 60px 70px 0 0 rgba(255, 235, 59, 1), 70px 70px 0 0 rgba(255, 235, 59, 1), 50px 75px 0 0 rgba(255, 235, 59, 1), 60px 75px 0 0 rgba(255, 235, 59, 1), 45px 80px 0 0 rgba(255, 235, 59, 1), 50px 80px 0 0 rgba(255, 235, 59, 1), 60px 80px 0 0 rgba(255, 235, 59, 1), 65px 80px 0 0 rgba(255, 235, 59, 1);
        height: 5px;
        width: 5px;
        color: black;
        font-size: 14px;
        position: absolute;
        z-index: 9;
    }
</style>