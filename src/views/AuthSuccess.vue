<script setup>
import { useRoute, useRouter } from 'vue-router';
import Loading from '../components/Loading.vue';

const route = useRoute();
const router = useRouter();

const token = route.query.token;

if (token) {
  localStorage.setItem('token', token);
  router.push({ name: 'account-page' });
} else {
  router.push({ name: 'login' });
}
</script>

<template>
  <Loading />
</template>