// AI助手功能
class GameAIHelper {
  constructor() {
    this.gameData = {
      '2048': {
        tips: [
          '保持大数字在角落',
          '避免小数字分散',
          '优先合并相同数字',
          '保持蛇形移动模式'
        ],
        strategy: '2048游戏的核心策略是保持大数字在角落，避免小数字分散。建议采用蛇形移动模式，优先合并相同数字。'
      },
      'Fast Food Rush': {
        tips: [
          '快速点击处理订单',
          '注意食材搭配',
          '优先处理等待时间长的订单',
          '保持工作台整洁'
        ],
        strategy: '快餐冲刺游戏需要快速反应和高效管理。注意食材搭配，优先处理等待时间长的订单，保持工作台整洁。'
      },
      'Cut The Rope': {
        tips: [
          '观察物理运动轨迹',
          '按正确顺序割绳子',
          '收集星星获得高分',
          '注意障碍物位置'
        ],
        strategy: '割绳子游戏需要观察物理运动轨迹，按正确顺序割绳子。注意收集星星获得高分，避开障碍物。'
      }
    };
  }

  // 获取游戏攻略
  getGameTips(gameName) {
    const game = this.gameData[gameName];
    if (!game) {
      return {
        tips: ['游戏攻略正在生成中...'],
        strategy: '暂无攻略信息'
      };
    }
    return game;
  }

  // 智能客服回答
  getCustomerServiceResponse(question) {
    const responses = {
      '怎么玩': '点击游戏卡片即可开始游戏！每个游戏都有独特的玩法，建议先尝试一下。',
      '游戏加载慢': '请检查网络连接，或刷新页面重试。如果问题持续，请联系我们。',
      '游戏无法运行': '请确保您的浏览器支持HTML5，建议使用Chrome或Firefox浏览器。',
      '更多游戏': '我们正在不断添加新游戏，请关注我们的更新！',
      '反馈': '感谢您的反馈！我们会认真考虑您的建议。',
      '联系': '您可以通过页面底部的联系方式联系我们。'
    };

    // 简单的关键词匹配
    for (const [key, response] of Object.entries(responses)) {
      if (question.includes(key)) {
        return response;
      }
    }

    return '抱歉，我没有理解您的问题。请尝试询问游戏玩法、技术支持或反馈建议。';
  }

  // 生成游戏推荐
  getGameRecommendation(userHistory = []) {
    const allGames = ['2048', 'Fast Food Rush', 'Cut The Rope'];
    
    if (userHistory.length === 0) {
      return {
        game: '2048',
        reason: '推荐您尝试2048，这是一个简单但有趣的益智游戏！'
      };
    }

    // 简单的推荐逻辑
    const lastPlayed = userHistory[userHistory.length - 1];
    const recommendations = {
      '2048': { game: 'Fast Food Rush', reason: '如果您喜欢2048的挑战性，试试快餐冲刺的快速反应！' },
      'Fast Food Rush': { game: 'Cut The Rope', reason: '如果您喜欢快餐冲刺的节奏感，割绳子的物理谜题也很棒！' },
      'Cut The Rope': { game: '2048', reason: '如果您喜欢割绳子的策略性，2048的数字合并也很考验思维！' }
    };

    return recommendations[lastPlayed] || { game: '2048', reason: '推荐您尝试2048！' };
  }

  // 多语言支持
  translateContent(content, targetLang = 'zh') {
    const translations = {
      'zh': {
        'Game Tips': '游戏攻略',
        'Strategy': '策略',
        'How to Play': '如何游戏',
        'Customer Service': '客服支持',
        'Game Recommendation': '游戏推荐',
        'Recommended for you': '为您推荐'
      }
    };

    if (targetLang === 'zh' && translations.zh[content]) {
      return translations.zh[content];
    }

    return content;
  }
}

// 导出AI助手
window.GameAIHelper = GameAIHelper; 