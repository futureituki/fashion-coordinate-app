import { useCustomFetch } from '../useCustomFetch'

export const useFetchSetting = async (body: SettingBody) => {
  const { data, error } = await useCustomFetch('/user/setting', {
    method: 'POST',
    body,
  })
  if (data) {
    return data.value
  }
  if (error.value) {
    // TODO ここでステータスコードごとにトーストメッセージを出したい
    // console.log(error.value.name, error.value.message);
    // window.alert(error.value.message);
    // codeとメッセージは必ず入っているとは限らないので、入っているか必ずチェックを入れる
    // console.log(error.value.data.errors.code, error.value.data.errors.message);
  }
}
