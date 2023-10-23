
<template>
    <div class="w-screen">
        <SideBar />

        <div class="h-screen bg-base-300 w-5/6 fixed right-0">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup>
import SideBar from '../components/SideBar.vue';

</script>
