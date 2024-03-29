type IFormType = 'input' | 'password' | 'select' | 'datepick'

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  // 针对select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth: string
  itemStyle: any
  colLayout: any
}
