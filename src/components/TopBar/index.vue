<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <router-link class="navbar-brand" tag="a" to="/">
          <span aria-hidden="true" class="glyphicon glyphicon glyphicon-ice-lolly text-primary"></span>
        </router-link>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/word">Word</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#"
               role="button">用户名 <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">个人信息</a></li>
              <li><a href="#">设置</a></li>
              <li class="divider" role="separator"></li>
              <li><a href="#">退</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>
