<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const posts = ref([]);

onMounted(async () => {
  const response = await axios.get('http://192.0.4.97:8080/board/list');
  posts.value = response.data;
});
</script>

<template>
  <div>
    <h1>게시글 목록</h1>
    <router-link to="/board/register">새 글 작성</router-link>
    <ul>
        <li v-for="post in posts" :key="post.id">
        <router-link :to="`/board/read/${post.id}`">
          {{ post.title }} - {{ post.writer }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
