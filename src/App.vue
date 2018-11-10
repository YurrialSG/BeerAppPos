<template>
  <v-app>

    <v-toolbar app :clipped-left="clipped">
      <router-link to="/" >
         <v-img
          src="https://images-na.ssl-images-amazon.com/images/I/31635HTsCVL.jpg"
          aspect-ratio="1"
          width="50px"
          height="50px"
          contain

        ></v-img>
      </router-link>



      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-badge right>
          <span slot="badge">{{count}}</span>
          <v-icon
            large
            color="grey lighten-1"
          >
            shopping_cart
          </v-icon>
        </v-badge>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>

    <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed app>
      <cartList />
    </v-navigation-drawer>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import CartList from "./components/CartList.vue";

import store from "@/store/cart.js";

export default {
  name: "App",
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "bubble_chart",
          title: "Inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Beer Company"
    };
  },
  computed: {
    count() {
      return store.state.count;
    }
  },
  components: {
    CartList
  }
};
</script>
