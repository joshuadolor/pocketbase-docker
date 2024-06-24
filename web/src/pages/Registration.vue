<script setup lang="ts">
import RegistrationForm from '@/components/forms/Registration';
import Logo from '@/components/logo/Logo.vue';
</script>

<template>
    <v-row class="h-screen" no-gutters>
        <v-col cols="12" class="d-flex align-center bg-lightprimary">
            <v-container>
                <div class="pa-7 pa-sm-12">
                    <v-row justify="center">
                        <v-col cols="12" lg="10" xl="6" md="7">
                            <v-card elevation="0" class="loginBox">
                                <v-card variant="outlined">
                                    <v-card-text class="pa-9">
                                        <v-row>
                                            <v-col cols="12" class="text-center">
                                                <Logo />
                                            </v-col>
                                        </v-row>
                                        <RegistrationForm />
                                    </v-card-text>
                                </v-card>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </v-col>
    </v-row>
</template>
<style lang="scss">
.loginBox {
    max-width: 475px;
    margin: 0 auto;
}
</style>
