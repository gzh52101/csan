<template>
    <div>
       seach
    </div>
</template>
<script>
export default {
    name:"Seach",
    data(){
        return{
            
        }
    },
    created(){
        this.$store.commit('displaySeach',false)
 
    },
    destroyed(){
        this.$store.commit('displaySeach',true)
    }
    
}
</script>

<style scoped>
</style>
