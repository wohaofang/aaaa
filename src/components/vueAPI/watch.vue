<template>
  <div class="haha">
      {{message}}
      {{MessgaeA}}
      {{bb()}}
      {{now}}
     <slot>安返</slot>
     <p></p>
  </div>
</template>

<script>
export default {
    name:'haha',
    data(){
        return{
            message:'hello',
            a: 1,
        }
    },
    computed:{
        MessgaeA(){
            return this.message.split('').reverse().join('')
        },
        now: function () {
            return Date.now()
        }
    },
    methods:{
        aa(){
            this.a+=1
        },
        bb(){
            return 20
        }
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
