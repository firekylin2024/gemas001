# 域名SEO配置完整检查清单

## ✅ 当前状态检查

### 域名使用情况
- ✅ 主域: `https://gameslife.space/` (正确)
- ✅ 所有内部链接使用裸域 (正确)
- ✅ Canonical链接使用裸域 (正确)
- ✅ 社交媒体标签使用裸域 (正确)

## 🔧 需要完成的操作

### 1. 设置301重定向 (www → 裸域)

#### 选择您的托管服务商：

**如果您使用 Cloudflare:**
1. 登录 https://dash.cloudflare.com
2. 选择域名 `gameslife.space`
3. 进入 **"规则"** → **"重定向规则"**
4. 创建规则：`www.gameslife.space` → `gameslife.space`

**如果您使用 Vercel:**
1. 我已经创建了 `vercel.json` 配置文件
2. 推送代码到GitHub即可自动生效

**如果您使用其他服务商:**
- 请联系您的托管服务商客服
- 要求设置 `www.gameslife.space` 到 `gameslife.space` 的301重定向

### 2. Google Search Console 配置

#### 步骤1: 添加网站属性
1. 访问 https://search.google.com/search-console
2. 点击 **"添加资源"**
3. **只添加**: `https://gameslife.space`
4. **不要添加**: `https://www.gameslife.space`

#### 步骤2: 验证网站所有权
选择 **HTML标签** 验证方法：
1. 复制提供的HTML标签
2. 添加到 `index.html` 的 `<head>` 部分
3. 推送代码到GitHub
4. 回到GSC点击 **"验证"**

#### 步骤3: 提交网站地图
1. 在GSC左侧菜单找到 **"网站地图"**
2. 点击 **"添加新的网站地图"**
3. 输入: `sitemap.xml`
4. 点击 **"提交"**

#### 步骤4: 设置首选域
1. 进入 **"设置"** → **"首选域"**
2. 选择: `https://gameslife.space`
3. 保存设置

### 3. 测试验证

#### 测试301重定向
访问以下URL，确认重定向正常：
- https://www.gameslife.space → 应该重定向到 https://gameslife.space
- https://www.gameslife.space/fast-food-rush-page.html → 应该重定向到 https://gameslife.space/fast-food-rush-page.html

#### 测试工具
- https://redirect-checker.org/
- https://www.redirect-checker.org/

### 4. 监控和维护

#### 定期检查项目
- [ ] 每周检查GSC搜索查询数据
- [ ] 每月检查覆盖率报告
- [ ] 确认301重定向正常工作
- [ ] 监控页面加载速度

#### 更新网站地图
- [ ] 添加新游戏时更新sitemap.xml
- [ ] 重新提交到GSC
- [ ] 更新lastmod时间

## 🎯 预期效果

完成这些操作后：
- ✅ 所有权重集中在裸域 `gameslife.space`
- ✅ 避免重复内容问题
- ✅ 提高SEO效果
- ✅ 统一品牌形象
- ✅ 便于管理和维护

## 📞 需要帮助？

如果在配置过程中遇到问题：
1. 查看相应的配置文档
2. 使用在线工具测试
3. 联系托管服务商客服
4. 在GSC帮助中心查找解决方案
