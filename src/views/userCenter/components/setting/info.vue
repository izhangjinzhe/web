<template>
  <form>
    <div class="row">
      <div class="col-md-4 mt-2">
        <input id="email" class="form-control" type="email" placeholder="邮箱" />
      </div>
      <div class="col-md-6 mt-2 d-table-cell">
        <button class="btn btn-primary align-middle">发送验证码</button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mt-2">
        <input id="email" class="form-control" type="email" placeholder="昵称" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mt-2">
        <select class="form-select">
          <option value="1">男</option>
          <option value="2">女</option>
          <option selected >无</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mt-2">
        <input id="email" class="form-control" type="email" placeholder="城市" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 mt-2">
        <textarea rows="4" class="form-control" placeholder="城市" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 mt-2">
        <button class="btn btn-primary">确认修改</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'userCenter'
}
</script>

<style></style>
