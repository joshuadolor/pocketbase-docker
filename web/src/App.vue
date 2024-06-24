<template>
    <DashboardLayout v-if="!isLoggedIn">
        <RouterView />
    </DashboardLayout>
    <UnauthenticatedLayout v-else>
        <RouterView />
    </UnauthenticatedLayout>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import DashboardLayout from '@/layout/Dashboard';
import UnauthenticatedLayout from '@/layout/Unauthenticated';

const route = useRoute();

const isLoggedIn = computed(() => route.name === 'login');

</script>
