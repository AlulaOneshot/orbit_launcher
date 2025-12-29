import LanguageSetup from "./initial_setup/LanguageSetup.vue";
import {createMemoryHistory, createRouter} from "vue-router";

const routes = [
    { path: "/initial_setup/language", component: LanguageSetup },
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes
});