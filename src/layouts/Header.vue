<script>
import Navbar from './Navbar.vue'
import LeftSideHeader from './LeftSideHeader.vue'
import RightSideHeader from './RightSideHeader.vue'

export default{
    name: 'Header',
    components: {
        LeftSideHeader,
        RightSideHeader
    }
}
</script>

<template>
    <!-- <div id="header">Header</div> -->
    <header id="header">
        <!-- <LeftSideHeader /> -->
        <!-- <Navbar /> -->
        <div><h1>{ naranyala.github.io }</h1></div>
        <!-- <RightSideHeader /> -->
    </header>
</template>

<style scoped>
#header{
    margin: 0px 10px 10px 10px;
    border: 1px solid gray;
    border-radius: 20px;
    padding: 20px;
    color: white;
    /* background: lightcyan; */
}


</style>