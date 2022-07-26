export const rules = {
  num: [
    { required: true, message: '手机号是必填内容', trigger: 'blur' },
    {
      pattern:
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      message: '手机号格式不正确',
      trigger: 'blur'
    }
  ],
  code: [
    { required: true, message: '验证码是必填内容', trigger: 'blur' },
    {
      pattern: /^\d{6}$/,
      message: '验证码格式不正确',
      trigger: 'blur'
    }
  ]
}
