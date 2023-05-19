<template>
    <div class="right-fixed-side">
      <div class="wrapper">
        <div class="wrapper-top">
          <UserDropDown :theme="getHeaderTheme" />
          <AppSearch :class="`${prefixCls}-action__item `" v-if="getShowSearch" />
          <ErrorAction v-if="getUseErrorHandle" :class="`${prefixCls}-action__item error-action`" />
          <Notify v-if="getShowNotice" :class="`${prefixCls}-action__item notify-item`" />
        </div>
        <FullScreen v-if="getShowFullScreen" :class="`${prefixCls}-action__item fullscreen-item`" />
        <SettingDrawer v-if="getShowSetting" :class="`${prefixCls}-action__item`" />
      </div>
    </div>
</template>

<script lang="ts">
  import { UserDropDown, FullScreen, Notify, ErrorAction } from '../header/components';
  import { useHeaderSetting } from '/@/hooks/setting/useHeaderSetting';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { computed, defineComponent, unref } from 'vue';
  import { createAsyncComponent } from '/@/utils/factory/createAsyncComponent';
  import { SettingButtonPositionEnum } from '/@/enums/appEnum';
  import { useRootSetting } from '/@/hooks/setting/useRootSetting';
  import { AppSearch } from '/@/components/Application';

  export default defineComponent({
    components: {
      UserDropDown,
      FullScreen,
      Notify,
      ErrorAction,
      AppSearch,
      SettingDrawer: createAsyncComponent(() => import('/@/layouts/default/setting/index.vue'), {
        loading: true,
      }),
    },
    setup() {
      const {
        getHeaderTheme,
        getShowFullScreen,
        getShowHeader,
        getShowNotice,
        getShowSearch,
      } = useHeaderSetting();
      const { prefixCls } = useDesign('layout-header');

      const { getShowSettingButton, getSettingButtonPosition, getUseErrorHandle } =
        useRootSetting();

      const getShowSetting = computed(() => {
        if (!unref(getShowSettingButton)) {
          return false;
        }
        const settingButtonPosition = unref(getSettingButtonPosition);

        if (settingButtonPosition === SettingButtonPositionEnum.AUTO) {
          return unref(getShowHeader);
        }
        return settingButtonPosition === SettingButtonPositionEnum.HEADER;
      });

      return {
        getHeaderTheme,
        getShowFullScreen,
        prefixCls,
        getShowSetting,
        getShowNotice,
        getShowSearch,
        getUseErrorHandle
      }
    }
  })

</script>

<style scoped lang="less">
  .right-fixed-side {
    position: fixed;
    width: 50px;
    height: 100%;
    top: 0;
    right: 0;
    background-color: var(--sider-dark-bg-color);

    .wrapper {
      display: flex;
      flex-direction: column;
      color: white;
      height: 100%;
      overflow: hidden;

      &-top {
        flex: 1;
      }

      /deep/.vben-layout-header-action__item {
        width: 50px!important;

        .anticon {
          flex: 1!important;
          display: inline-block!important;
        }
      }

      /deep/.ant-badge {
        margin: auto;

        .anticon-bell {
          color: white;
        }
      }
    }
  }
</style>
