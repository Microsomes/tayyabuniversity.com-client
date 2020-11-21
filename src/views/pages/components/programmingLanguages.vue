<template>
    <div>
        <div v-for="(n,i) in programmingList" :key="i">
            {{n}}
        </div>
    </div>
</template>



<script>
export default {
    

    data:function(){
        return {
            programmingList:[
                {
                    name:"Python"
                },
                {
                    name:"Dart/Flutter"
                },
                {
                    name:"JavaScript"
                }
            ]
        }
    }

}
</script>