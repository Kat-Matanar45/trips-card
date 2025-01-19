<template>
    <div class="container ">
        <div class="col-lg-10 offset-1">
            <img class="mb-4 w-100" :src="require(`@/assets/img/${card.image}`)" :alt="card.image">
            <h2>{{ card.title }}</h2>
            <div class="description">
                {{ card.text }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        card() {
            return this.$store.getters['getCards'](this.$route.params.id)
        }
    }
}
</script>