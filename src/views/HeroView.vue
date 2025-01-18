<template>
    <div class="container">
        <div class="grid d-flex justify-content-between flex-wrap">
            <CardComponent 
                v-for="card in cards"
                :key="card.id"
                :card="card"
            />
        </div>
    </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';

export default {
    components: {
        CardComponent
    },
    computed: {
        cards() {
            return this.$store.getters['getCards']
        }
    }
}
</script>