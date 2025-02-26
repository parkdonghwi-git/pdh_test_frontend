<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute(); 
const router = useRouter(); 

const post = ref(null); 
const postId = route.params.id; 


const fetchPost = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/board/read/${postId}`);
    console.log(" API 응답 데이터:", response.data);
    post.value = response.data;
  } catch (error) {
    console.error("게시글을 불러오는 중 오류 발생:", error);
  }
};


onMounted(fetchPost);
</script>

<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p><strong>작성자:</strong> {{ post.writer }}</p>
    <p>{{ post.content }}</p>

    <button @click="deletePost">삭제</button>
    <router-link to="/">목록으로</router-link>
  </div>
  <div v-else>
    <p>게시글을 불러오는 중...</p>
  </div>
</template>
