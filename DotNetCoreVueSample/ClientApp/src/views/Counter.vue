<template>
    <div class="counter">
        <h1>Counter</h1>
        <p>This is a simple example of a Vue component.</p>
        <p aria-live="polite">Current count: <strong>{{currentCount}}</strong></p>
        <b-button variant="primary" v-on:click="incrementCounter">Increment</b-button>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        data() {
            return {
                currentCount: 0
            }
        },
        methods: {
            incrementCounter: function () {
                this.currentCount += 1
            }
        }
    }
</script>

<style scoped>

</style>
