<template>
  <div class="p35" v-loading="loading">
    <div class="text-c">
      <h2>集客固网逾期清单上传</h2>
      <el-upload
        class="upload-demo"
        drag
        :action="$store.state.url+'tgzqnew/sendprocess/uploadNetworkOverdue'"
        :on-success="fileSuccess"
        :on-error="fileError"
        :on-progress="fileProgress"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">
          只能上传xls/xlsx文件，且不超过5Mb&nbsp;&nbsp;<a href="./固网逾期模版.xlsx">数据模板下载</a>
        </div>
      </el-upload>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList: [],
      loading:false
    };
  },
  methods: {
    fileProgress(event, file, fileList){
      console.log(event)
      this.loading=true
    },
    fileSuccess(response, file, fileList) {
      console.log(response,file,fileList)
      let usersize=response.usersize
      let listsize=response.listsize
      this.loading=false
        if(response.code==200){
          this.$alert('共上传'+listsize+'条记录，归属'+usersize+'位员工，预计10分钟完成触发流程，请耐心等待。', '上传成功', {
          confirmButtonText: '确定',
            callback: action => {
              window.opener=null;window.open('','_self');window.close();
            }
        });
        }else{
          this.$alert('上传失败,'+response.message, 'error', {
          confirmButtonText: '确定',
        });
        }
    },
    fileError(err, file, fileList) {
      this.loading=false
       this.$alert('上传失败,请联系管理员', 'error', {
          confirmButtonText: '确定',
        });
        this.$message.error('上传失败');
      console.log(err,file,fileList)
    },
  },
};
</script>
<style>
.upload-demo{
  margin-top: 35px;
}
.text-c {
  text-align: center;
  margin: auto;
  width: 550px;
}
.p35 {
  padding: 35px;
}
.mt-15 {
  margin-top: 15px;
}
</style>