<template>
    <v-responsive class="border rounded" min-height="screen">
        <v-app>
            <v-navigation-drawer>
                <v-list>
                    <v-list-item title="Navigation drawer"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-app-bar title="Application bar"></v-app-bar>

            <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
                <slot> </slot>
            </v-main>
        </v-app>
    </v-responsive>
</template>
