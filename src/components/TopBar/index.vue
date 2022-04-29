<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <router-link tag="a" class="navbar-brand fs-6" to="/home/index">首页</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link tag="a" class="nav-link" to="/home/ask">提问</router-link>
        </li>
        <li class="nav-item">
          <router-link tag="a" class="nav-link" to="/home/share">分享</router-link>
        </li>
        <li class="nav-item">
          <router-link tag="a" class="nav-link" to="/home/advice">建议</router-link>
        </li>
        <li class="nav-item me-auto">
        </li>
      </ul>
      <div class="d-flex">
        <input class="form-control me-2" type="search" placeholder="搜索">
        <div class="dropdown">
          <button class="btn dropdown-toggle" href="#" data-bs-toggle="dropdown">
            <i class="bi bi-person-circle me-1"></i>
          </button>
          <ul class="dropdown-menu ">
            <li><a class="dropdown-item" href="#">个人中心</a></li>
            <li><a class="dropdown-item text-danger" href="#">退出</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>
