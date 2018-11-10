<template>
  <div v-if="!performingQuery">
    <v-container grid-list-md text-xs-center>
      <v-flex xs12>
        <h1 class="text-sm-left">{{beer.name}}</h1>
        <v-img
          :src="beer.image_url"
          aspect-ratio="1"
          height="400px"
          contain
        ></v-img>

        <v-btn round color="primary" dark v-on:click="addToCart(beer)">Adicionar ao carrinho</v-btn>

        <v-list two-line>
          <v-toolbar color="cyan" dark>
            <v-toolbar-title>Maltes</v-toolbar-title>
          </v-toolbar>
          <template v-for="(hop, index) in beer.ingredients.hops">
            <v-list-tile-content>
              <v-list-tile-title v-html="hop.name"></v-list-tile-title>
              <v-list-tile-sub-title v-html="hop.attribute"></v-list-tile-sub-title>
            </v-list-tile-content>
          </template>
        </v-list>
      </v-flex>
    </v-container>

  </div>

</template>

<script>
import axios from "axios";
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
