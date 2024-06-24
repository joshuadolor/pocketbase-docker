<template>
    <v-responsive class="border rounded" min-height="screen">
        <v-app app>
            <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
                <slot></slot>
            </v-main>
        </v-app>
    </v-responsive>
</template>
