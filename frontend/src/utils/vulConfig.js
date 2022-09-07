const vulOptions = {
    '短信轰炸': ['SMS_BOMB_ATTACK',],
    '短信验证码重复利用': ['SMS_REPEAT_ATTACK'],
    '短信验证码未绑定': ['SMS_UNBIND_ATTACK', 'INTERCEPT_UNBIND'],
    '短信验证码返回到前端': ['CHECK_FRONT'],
    '短信内容可控': ['SMS_CONTENT_CONTROL'],
    '短信验证码机制可以被绕过': ['SMS_BYPASS'],
    '短信验证码可爆破': ['SMS_BRUTE_FORCE_ATTACK'],
    '图形验证码返回到前端': ['CHECK_FRONT'],
    '验证码机制过于简单': ['SMS_BRUTE_FORCE_ATTACK', 'SEARCH_CAPIC'],
    '验证码长度可控': ['CONTROL_CAPTCHA_ATTACK'],
    '验证码可识别': ['SEARCH_CAPIC'],
    '验证码可重复利用': ['CAPTCHA_REPEAT_ATTACK'],
    '邮件验证码安全': ['INTERCEPT_UNBIND'],
    '无图形验证码功能': ['NO_CAPTCHA_CHECK'],
    '图形验证码机制可以被绕过': ['CAPTCHA_BYPASS', 'SEARCH_CAPIC', 'CONTROL_CAPTCHA_ATTACK'],
    '前端可控的验证码生成机制': ['CONTROL_CAPTCHA_ATTACK'],
    '登录认证可被绕过': ['INTERCEPT_RESPONSE'],
    '更改密码时不需要输入原密码': ['CHANGE_PASSWD'],
    '会话令牌不应写入URL': ['TOKEN_IN_URL'],
    '任意文件下载': ['ARBITRARY_FILE_DOWNLOAD'],
    '文件上传漏洞': ['FILE_UPLOAD'],
    '越权漏洞': ['OVER_PERMISSION'],
    '未授权访问': ['UNAUTHORIZED_ACCESS'],
    '重放': ['LOGIN_REPEAT']
}

export {
    vulOptions,
}