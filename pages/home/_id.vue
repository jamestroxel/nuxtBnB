<template>
<div>
    <div style="display:flex">
        <img v-for="image in home.images" :key="image" :src="image" width="200px" height="150px"/>
    </div>
    {{ home.title }}<br/>
    ${{ home.pricePerNight }}<br/>
    <img src='/images/marker.svg' width="20px" height="20px"/> {{ home.location.address }} {{ home.location.city }} {{ home.location.state }} {{ home.location.country }}<br/>
    <img src='/images/star.svg' width="20px" height="20px"/> {{ home.reviewValue }}<br/>
    {{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.beds }} beds, {{ home.bathrooms }} bath<br/>
    {{ home.description }}
    <div ref="map" style="height:800px;width:800px"></div>
    <div v-for="review in reviews" :key="review.objectID">
        <img :src="review.reviewer.image"/><br/>
        {{ review.reviewer.name}}<br/>
        {{ formatDate(review.date) }}<br/>
        <short-text :text="review.comment" :target="150"></short-text><br/>
    </div>
    </div>
</template>

<script>

export default {
    head() {
        return {
            title: this.home.title
        }
    },
  
    mounted(){
        this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng)
    },
    async asyncData({params, $dataApi, error}){
        const homeResponse = await $dataApi.getHome(params.id)
        if(!homeResponse.ok) return error({ statusCode: homeResponse.status, message: homeResponse.statusText})
        
        const reviewResponse = await $dataApi.getReviewsByHomeId(params.id)
        if(!reviewResponse.ok) return error({ statusCode: reviewResponse.status, message: reviewResponse.statusText})

        return {
            home: homeResponse.json,
            reviews: reviewResponse.json.hits
        }
    },
    methods:{
        formatDate(dateStr){
            const date = new Date(dateStr)
            return date.toLocaleString(undefined, { month: 'long', year: 'numeric' })
        }
    }
}
</script>