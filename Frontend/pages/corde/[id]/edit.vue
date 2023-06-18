<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useFetchCorde } from '~/composable/client/useFetchCorde'
import { Corde } from '~/types/corde'
const route = useRoute();
const id = route.params.id
const corde = ref<Corde>(null)
onMounted(async() => {
  const { data } = useFetchCorde(id)
  corde.value = data
})
</script>