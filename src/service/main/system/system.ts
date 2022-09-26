import rwRequest from '../../index'

export function getPageListData(url: string, queryInfo: any) {
  return rwRequest.post({
    url: url,
    data: queryInfo
  })
}
