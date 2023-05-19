<template>
  <div ref="chartRef" class="wrapper"></div>
</template>
<script lang="ts" setup>
  import { onMounted, ref, Ref, toRefs } from 'vue';
  import { useECharts } from '/@/hooks/web/useECharts';

  const props = defineProps({
    type: {
      type: String,
      default: 'line'
    },
    data: {
      type: Array,
      default: () => ([])
    },
    options: {
      type: Object,
      default: () => ({})
    }
  });
  const chartRef = ref<HTMLDivElement | null>(null);
  const { setOptions, setValue } = useECharts(chartRef as Ref<HTMLDivElement>);

  const { type, data, options } = toRefs(props);

  console.log('查询', type, data);

  onMounted(() => {
    if (JSON.stringify(options.value) === '{}') {
      setValue(type.value, data.value)
    } else {
      setOptions(options.value);
    }
  });
</script>
<style lang="less" scoped>
  .wrapper {
    width: 100%;
    height: 100%;
  }
</style>
