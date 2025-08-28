# Cloudflare 301重定向配置

## 步骤1：登录Cloudflare
1. 访问 https://dash.cloudflare.com
2. 选择您的域名 `gameslife.space`

## 步骤2：创建重定向规则
1. 进入 **"规则"** → **"重定向规则"**
2. 点击 **"创建重定向规则"**

## 步骤3：配置规则
```
规则名称: www to bare domain redirect
描述: Redirect www.gameslife.space to gameslife.space

字段设置:
- 如果传入请求匹配: 主机名等于 www.gameslife.space
- 则: 重定向到
- 目标URL: https://gameslife.space/$1
- 状态代码: 301 - 永久重定向
- 保留查询字符串: 是
- 保留路径: 是

高级设置:
- 重定向类型: 动态
- 状态: 已启用
```

## 步骤4：测试重定向
访问以下URL测试：
- https://www.gameslife.space → 应该重定向到 https://gameslife.space
- https://www.gameslife.space/fast-food-rush-page.html → 应该重定向到 https://gameslife.space/fast-food-rush-page.html

## 步骤5：验证设置
使用在线工具验证301重定向：
- https://redirect-checker.org/
- https://www.redirect-checker.org/

