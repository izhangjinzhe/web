<template>
  <div>
    <div class="mb-2">Hi, zhangjinzhe</div>
    <div class="divider"></div>
    <div class="row p-2">
      <div class="col-md-6">
        <div class="card p-2 my-2">
          <h6>我的会员信息</h6>
          <div class="divider mb-2"></div>
          <div>积分经验值：60</div>
          <div>我的会员等级：Lv5</div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card p-2 my-2 mb-2">
          <nav class="nav nav-pills">
            <a class="nav-link active py-1 px-2 h-25 finger">签到</a>
            <a class="nav-link py-1 px-2 h-25 finger">说明</a>
            <a class="nav-link py-1 px-2 h-25 finger">活跃榜</a>
          </nav>
          <div class="text-center p-2">
            <button class="btn btn-danger me-2 btn-sm">今日签到</button>
            <span>可获得5积分</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="mb-2">快捷方式</div>
      <div class="divider"></div>
      <div class="row p-2">
        <div class="col-md-3">
          <div class="card p-2 my-2 text-center hover finger">
            <i class="bi bi-gear"></i>
            <div>修改密码</div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card p-2 my-2 text-center hover finger">
            <i class="bi bi-gear"></i>
            <div>修改密码</div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card p-2 my-2 text-center hover finger">
            <i class="bi bi-gear"></i>
            <div>修改密码</div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card p-2 my-2 text-center hover finger">
            <i class="bi bi-gear"></i>
            <div>修改密码</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userCenter'
}
</script>

<style></style>
