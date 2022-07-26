export const rules = {
  name: [
    { required: true, message: '用户名是必填的内容', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10位字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '密码是必填的内容', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z]\w{5,17}$/,
      message:
        '密码必须是以字母开头，长度在6~18之间，只能包含字母、数字和下划线',
      trigger: 'blur'
    }
  ]
}
