import { useCustomFetch } from '../useCustomFetch'

export const useFetchNewCode = async () => {
    const { data, error } = await useCustomFetch('/codes/new')
    if (data) {
    }
    if (error.value) {
      // TODO ここでステータスコードごとにトーストメッセージを出したい
      // console.log(error.value.name, error.value.message);
      // window.alert(error.value.message);
      // codeとメッセージは必ず入っているとは限らないので、入っているか必ずチェックを入れる
      // console.log(error.value.data.errors.code, error.value.data.errors.message);
    }
  }
export const useFetchPopularCode = async () => {
    const { data, error } = await useCustomFetch('/codes/popular')
    if (data) {
    }
    if (error.value) {
      // TODO ここでステータスコードごとにトーストメッセージを出したい
      // console.log(error.value.name, error.value.message);
      // window.alert(error.value.message);
      // codeとメッセージは必ず入っているとは限らないので、入っているか必ずチェックを入れる
      // console.log(error.value.data.errors.code, error.value.data.errors.message);
    }
  }
}
