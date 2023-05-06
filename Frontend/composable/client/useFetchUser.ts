import { useCustomFetch } from '../useCustomFetch'

export const useFetchMe = async () => {
  const { data, error } = await useCustomFetch('/users/:id')
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
