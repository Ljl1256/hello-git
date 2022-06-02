<template>
    <div :style="{ opacity,fontSize }">宋狗天天给人干</div>
    <div>今天6月2号 在坚持两个月</div>
</template>
<script>
import {cloneDeep} from 'lodash'
export default {
    data() {
        return {
            opacity: 1,
            fontSize:'40px',
            a:{ nick: '宋狗', sex: '变态',father:{nick:'陈名',like:'挨打'} }
        }
    },
    mounted(){
        this.change()
    },
    created(){
        let dd=cloneDeep(this.a)
        console.log(dd);
    },
    methods: {
       change(){
           setInterval(()=>{
               this.opacity=this.opacity-0.01
               this.opacity<=0?this.opacity=1:this.opacity
             
           },20)
       }
}   
}
</script>