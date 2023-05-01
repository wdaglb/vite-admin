<template>
    <a-layout has-sider>
        <a-layout-sider class="sider">
            <Menu :routes="routes" />
        </a-layout-sider>

        <a-layout :style="{ marginLeft: '200px' }">
            <a-layout-header class="header">

            </a-layout-header>
            <a-layout-content>
                <router-view />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script setup lang="ts">
import routes from '@/routes'
import Menu from './components/Menu.vue'

console.log('r', routes)
</script>

<style lang="less">
.sider {
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
}
.header {
    background: #fff;
    padding: 0;
}
</style>
