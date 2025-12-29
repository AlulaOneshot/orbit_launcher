import LanguageSetup from "./initial_setup/LanguageSetup.vue";
import {createMemoryHistory, createRouter} from "vue-router";
import SetupBanner from "./initial_setup/SetupBanner.vue";

const routes = [
    { path: "/initial_setup/", component: SetupBanner, meta: { index: 0 } },
    { path: "/initial_setup/language", component: LanguageSetup, meta: { index: 0 } },
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes
});