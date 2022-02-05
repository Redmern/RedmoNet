import { createApp, provide, h } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option"
import { provideApolloClient } from "@vue/apollo-composable";
import { DefaultApolloClient } from "@vue/apollo-composable";

import gsap from "gsap";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import 'animate.css';

let httpLickUri = ""

if (process.env.NODE_ENV === "production") {
    httpLickUri = 'https://test-redmonet.herokuapp.com/';
}
else{
    httpLickUri = 'http://localhost:4000/';
}

const httpLick = createHttpLink({
    uri: httpLickUri,
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    link: httpLick,
    cache,
});

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
});

createApp({
    setup(){
        provide(DefaultApolloClient, apolloClient)

    },
    render(){
        return h(App)
    }
}).use(store).use(apolloProvider).use(router).use(gsap).mount("#app")

provideApolloClient(apolloClient)


// createApp(App).use(store).use(router).use(apolloProvider).mount("#app");

