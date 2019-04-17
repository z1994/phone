<template>
    <div class="image-view">
        <div class="addbox">
            <input type="file" @click="getImgBase()">
            <div class="addbtn">+</div>
        </div>
        <div class="view">
            <div class="item" v-for="item of imgBase64" :key="item.index">
                <span @click="delImg(index)">x</span>
                <img :src="item">
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name:'imageView',
        data(){
            return{
                imgBase64:[]
            }
        },
        methods:{
            getImgBase(){
                var _this=this;
                var event=event||window.event;
                var file=event.target.files[0];
                var reader=new FileReader();

                reader.onload=function(e){
                    _this.imgBase64.push(e.target.result);
                }
                reader.readAsDataURL(file)
            },
            delImg(index){
                this.imgBase64.splice(index,1)
            }
        }
    }
</script>

<style scoped>

</style>