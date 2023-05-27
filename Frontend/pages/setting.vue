<template>
  <section class="bg-white">
    <Header :user="user" />
    <div class="">
      <header class="w-full pt-12 pb-12 border-t-2 bg-red-50">
        <div class="max-w-2xl m-auto">
          <h1 class="leading-3 font-bold text-2xl">設定</h1>
          <br />
          <div class="flex items-center gap-4">
            <img
              src="/icons8-googleのロゴ-48.png"
              class="w-6 rounded-2xl shadow-xl"
            />
            <h2 class="text-sm font-mono text-gray-400">
              {{ user && user.email }}でログイン中
            </h2>
          </div>
        </div>
      </header>
      <div class="pt-6 pb-6 w-full border-t-2 m-auto">
        <div class="mt-6 mb-6 m-auto max-w-2xl">
          <div class="border-d-2 py-8">
            <div class="flex justify-between items-center">
              <img
                src="https://lh3.googleusercontent.com/a/AGNmyxY0O8mvqiZUa5j-koXyxo5Vp4gqrQx05KhN6ljfRw=s96-c"
                alt=""
                class="w-12 h-12 rounded-full"
              />
              <Button
                type="button"
                props="border-2 text-sm max-h-12 w-max px-3 py-3 rounded-2xl bg-white font-bold hover:bg-gray-100 transition-all"
              >
                アイコン画像を変更
              </Button>
            </div>
          </div>
          <div class="border-b-2 py-8 w-11/12 m-auto">
            <div class="flex justify-between items-center">
              <div class="flex flex-col gap-6">
                <h3 class="text-xl font-bold">表示名</h3>
                <p
                  class="text-md font-mono text-gray-500"
                  v-show="displayNameVisible"
                >
                  佐藤樹
                </p>
              </div>
              <Button
                type="button"
                props="border-2 max-h-12 text-sm w-max px-3 py-3 rounded-2xl bg-white font-bold hover:bg-gray-100 transition-all"
                v-show="displayNameVisible"
                @click="displayNameVisible = !displayNameVisible"
              >
                変更する
              </Button>
            </div>
            <div class="mt-6" v-show="!displayNameVisible">
              <Field
                v-model="displayName"
                name="displayName"
                type="text"
                placeholder="表示名"
              />
              <div class="flex justify-between mt-4">
                <div class="w-1/6">
                  <Button
                    type="button"
                    props="bg-gray-200 font-bold rounded-md w-1/2"
                    @click="displayNameVisible = !displayNameVisible"
                    >キャンセル</Button
                  >
                </div>
                <div class="w-1/6">
                  <Button
                    type="submit"
                    :disabled="isEmpty(displayName)"
                    props="rounded-md font-bold bg-green-200 text-white"
                    :class="
                      isEmpty(displayName) ? 'bg-green-200' : 'bg-green-500'
                    "
                    >保存する</Button
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="border-b-2 py-8 w-11/12 m-auto">
            <div class="flex justify-between items-center">
              <div class="flex flex-col gap-6 w-2/3">
                <h3 class="text-xl font-bold">自己紹介</h3>
                <p
                  class="text-sm font-mono text-gray-500"
                  v-show="introductionVisible"
                >
                  {{
                    user && user.description
                      ? user.description
                      : '登録するとあなたのユーザーページなどに表示されます。'
                  }}
                </p>
              </div>
              <Button
                type="button"
                props="border-2 max-h-12 text-sm w-max px-3 py-3 rounded-2xl bg-white font-bold hover:bg-gray-100 transition-all"
                v-show="introductionVisible"
                @click="introductionVisible = !introductionVisible"
              >
                変更する
              </Button>
            </div>
            <div class="mt-6" v-show="!introductionVisible">
              <Field
                v-model="introduction"
                name="introduction"
                type="text"
                placeholder="表示名"
              />
              <div class="flex justify-between mt-4">
                <div class="w-1/6">
                  <Button
                    type="button"
                    props="bg-gray-200 font-bold rounded-md w-1/2"
                    @click="introductionVisible = !introductionVisible"
                    >キャンセル</Button
                  >
                </div>
                <div class="w-1/6">
                  <Button
                    type="submit"
                    :disabled="isEmpty(introduction)"
                    props="rounded-md font-bold text-white"
                    :class="
                      isEmpty(introduction) ? 'bg-green-200' : 'bg-green-500'
                    "
                    >保存する</Button
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="border-b-2 py-8 w-11/12 m-auto">
            <div class="flex justify-between items-center">
              <div class="flex flex-col gap-6 w-2/3">
                <h3 class="text-xl font-bold">性別</h3>
                <p
                  class="text-sm font-mono text-gray-500"
                  v-show="genderVisible"
                >
                  {{
                    user && user.gender
                      ? user.gender
                      : '登録するとあなたのユーザーページなどに表示されます。'
                  }}
                </p>
              </div>
              <Button
                type="button"
                props="border-2 max-h-12 text-sm w-max px-3 py-3 rounded-2xl bg-white font-bold hover:bg-gray-100 transition-all"
                v-show="genderVisible"
                @click="genderVisible = !genderVisible"
              >
                変更する
              </Button>
            </div>
            <div class="mt-6" v-show="!genderVisible">
              <ul
                class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:border-gray-600 dark:text-white"
              >
                <li
                  v-for="gender in genders"
                  :key="gender.name"
                  class="w-full border-gray-200 sm:border-b-0 dark:border-gray-600"
                >
                  <div class="flex items-center pl-3">
                    <Radio
                      v-model="displayGender"
                      :name="gender.name"
                      :displayName="gender.displayText"
                      :modelName="gender.name"
                    />
                  </div>
                </li>
              </ul>
              <div class="flex justify-between mt-4">
                <div class="w-1/6">
                  <Button
                    type="button"
                    props="bg-gray-200 font-bold rounded-md w-1/2"
                    @click="genderVisible = !genderVisible"
                    >キャンセル</Button
                  >
                </div>
                <div class="w-1/6">
                  <Button
                    type="submit"
                    :disabled="isEmpty(gender)"
                    props="rounded-md font-bold bg-green-200 text-white"
                    :class="''"
                    >保存する</Button
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex border-b-2 py-8 justify-between items-center w-11/12 m-auto"
          >
            <div class="flex flex-col gap-6">
              <h3 class="text-xl font-bold">退会</h3>
              <p class="text-sm font-mono text-gray-500">
                退会によりアカウントが削除されると復元はできません。
              </p>
            </div>
            <Button
              type="button"
              props="border-2 max-h-12 text-red-500 text-sm w-max px-3 py-3 rounded-2xl bg-white font-bold border-red-200 hover:bg-gray-200 transition-all"
            >
              退会する
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div>{{ genderUser }}</div>
  </section>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onMounted, ref, Ref, reactive } from 'vue'
import { useUser } from '~/stores/userStore'
import Header from '~/components/Molecules/Header.vue'
import ImageCard from '~/components/Atoms/ImageCard.vue'
import Button from '~/components/Atoms/SubmitButton.vue'
import Field from '~/components/Atoms/Field.vue'
import Radio from '~/components/Atoms/Radio.vue'
import { toastSuccessHandler, toastErrorHandler } from '~/lib/toastHandler'

toastErrorHandler('入力してください')
const user = useUser().user
// if(!user) {
//   useRouter().push('/')
// }
const displayNameVisible = ref(true)
const displayName = ref('')
const introduction = ref('')
const introductionVisible = ref(true)
const genders = reactive([
  { displayText: '男性', name: 'men' },
  { displayText: '女性', name: 'women' },
  { displayText: 'その他', name: 'other' },
])
const genderVisible = ref(true)
const displayGender = ref('')
const isEmpty = (value: string) => value === ''
</script>
