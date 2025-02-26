<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const title = ref('');
const content = ref('');
const writer = ref('');
const router = useRouter();


const createPost = async () => {
  if (!title.value.trim() || !content.value.trim() || !writer.value.trim()) return; 

  await axios.post('http://192.0.4.97:8080/board/register', {
    title: title.value,
    content: content.value,
    writer: writer.value
  });

  router.push({ path: "/" }); 
};
</script>

<template>
  <div>
    <h1>새 게시글 작성</h1>
    <input v-model="title" placeholder="제목" />
    <input v-model="writer" placeholder="작성자" />
    <textarea v-model="content" placeholder="내용"></textarea>
    <button @click="createPost">등록</button>

    <router-link to="/">목록으로</router-link>
  </div>
</template>
