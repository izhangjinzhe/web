<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="true">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand">
          <router-link tag="span" to="/home">
            <span class="glyphicon glyphicon-star finger"></span>
          </router-link>
        </a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link tag="li" to="/ask"><a>提问</a></router-link>
          <router-link tag="li" to="/share"><a>分享</a></router-link>
          <router-link tag="li" to="/advice"><a>建议</a></router-link>
<!--          <router-link tag="li" to="/home/ask"><a>公告</a></router-link>-->
<!--          <router-link tag="li" to="/home/ask"><a>动态</a></router-link>-->
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="nav navbar-nav navbar-form">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="搜索">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">
                  <span class="glyphicon glyphicon-search"></span>
                </button>
              </span>
            </div><!-- /input-group -->
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <span class="glyphicon glyphicon-user"></span><span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">个人中心</a></li>
              <li><a href="#">退出</a></li>
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
