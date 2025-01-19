<template>
        <div class="item-wrapper d-flex flex-column">
            <img :src="require(`@/assets/img/${card.image}`)" class="mb-3" :alt="card.image">
            <h3>{{ card.title }}</h3>
            <div class="description" v-if='card.text.length < 550'>
                {{ card.text }}
            </div>
            <div class="description" v-else>
                {{ card.text.slice(0, 550) + '...' }}
                <br><span>Читать далее...</span>
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