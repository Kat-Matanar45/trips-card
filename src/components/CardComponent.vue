<template>
        <div class="item-wrapper d-flex flex-column">
            <img :src="require(`@/assets/img/${card.image}`)" class="mb-3" :alt="card.image">
            <h3>{{ card.title }}</h3>
            <div class="description">
                {{ card.text }}
            </div>
        </div>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            Required: true
        }
    }
}
</script>