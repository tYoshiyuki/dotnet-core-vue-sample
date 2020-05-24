<template>
    <div>
        <h1 id="tabelLabel">Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        <b-table-simple className='table table-striped' aria-labelledby="tabelLabel">
            <b-thead>
                <b-tr>
                    <b-th>Date</b-th>
                    <b-th>Temp. (C)</b-th>
                    <b-th>Temp. (F)</b-th>
                    <b-th>Summary</b-th>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="forecast in forecasts" v-bind:key="forecast.date">
                    <b-td>{{forecast.date}}</b-td>
                    <b-td>{{forecast.temperatureC}}</b-td>
                    <b-td>{{forecast.temperatureF}}</b-td>
                    <b-td>{{forecast.summary}}</b-td>
                </b-tr>
            </b-tbody>
        </b-table-simple>
    </div>
</template>

<script>
    export default {
        name: "FetchData",
        data() {
            return {
                forecasts: null
            }
        },
        mounted() {
            this.axios
                .get('weatherforecast')
                .then(response => (this.forecasts = response.data))
        }
    }
</script>

<style scoped>
</style>
