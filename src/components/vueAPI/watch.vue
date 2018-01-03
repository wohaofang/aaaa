<template>
  <div class="haha">
      {{message}}
  </div>
</template>

<script>
export default {
    name:'haha',
    data(){
        return{
            message:'哈哈',
            a: 1
        }
    },
    methods:{
        aa(){
            this.a+=1
        },
    },
    watch:{
        a(val,oldVal){
            console.log(val,oldVal)
        }
    },
    created(){
        this.aa()
    }
}
</script>

<style>

</style>
