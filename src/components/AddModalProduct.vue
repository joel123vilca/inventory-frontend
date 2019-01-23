<template>
  <el-dialog
    title="Tips"
    :visible="dialogVisible"
    width="30%"
    :before-close="handleClose"
    append-to-body
  >
    <span>This is a message</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false
      //   dialogVisible: true
    };
  }
};
</script>

<style>
</style>
