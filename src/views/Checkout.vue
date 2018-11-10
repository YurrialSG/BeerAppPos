<template>
  <div class="about">
    <h1>This is an checkout page</h1>
  </div>
</template>

<script>
import store from "@/store/cart.js";

export default {
  beforeMount() {
    let api = "https://api.punkapi.com/v2/beers/" + this.$route.params.id;

    axios.get(api).then(response => {
      this.beer = response.data[0];
      this.performingQuery = false;
    });
  },
  updated() {
    console.log(this.beer);
  },
  data() {
    return {
      // Criamos um dado para fazer o storage das nossas cervejas
      beer: null,
      performingQuery: true
    };
  },
  methods: {
    addToCart(beer) {
      store.commit("addToCart", beer);
    }
  }
};
</script>
