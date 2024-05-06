<template>
  <div class="contributions">
    <div class="contribution-header">
      <h3>贡献度</h3>
      <a-select ref="select" size="small" v-model:value="year" style="width: 120px" :options="years"
        @change="yearChange"></a-select>
    </div>
    <div class="contribution-box">
      <div class="left-side">
        <div class="box">周一</div>
        <div class="box">周四</div>
        <div class="box">周日</div>
      </div>
      <div class="right-side">
        <div v-for="(item, idx) in data" :key="idx" :class="[countClass(item)]">
          <a-tooltip color="#fff" overlayClassName="tooltip">
            <template #title>
              <span>{{ `${item.count}个贡献：${item.date}` }}</span>
            </template>
            <div class="count"></div>
          </a-tooltip>
          <span class="month-text" v-if="item.month">{{ item.month }}</span>
        </div>
      </div>
    </div>
    <div class="contribution-tip">
      <div class="word">少</div>
      <div class="list">
        <div class="item less"></div>
        <div class="item little"></div>
        <div class="item some"></div>
        <div class="item many"></div>
        <div class="item much"></div>
      </div>
      <div class="word">多</div>
    </div>
    <div class="contribution-describ">
      <p>最近一年贡献：{{ sum }} 次</p>
      <p>最长连续贡献：953 日</p>
      <p>最近连续贡献：953 日</p>
      <div class="text-muted">贡献度的统计数据包括代码提交、创建任务 / Pull Request、合并 Pull Request，其中代码提交的次数需本地配置的 git 邮箱是 Gitee
        帐号已确认绑定的才会被统计。
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  }
})

const year = ref(2024);
const years = reactive([
  {
    value: 2024,
    label: 2024,
  }, {
    value: 2023,
    label: 2023,
  }, {
    value: 2022,
    label: 2022,
  },
]);
const yearChange = (value) => {
  console.log(`selected ${value}`);
};

const countClass = ({ count, month }) => {
  let returnClass = "box";
  if (count > 0 && count < 8) {
    returnClass = "box little";
  } else if (count >= 8 && count < 15) {
    returnClass = "box some";
  } else if (count >= 15 && count < 25) {
    returnClass = "box many";
  } else if (count >= 25) {
    returnClass = "box much";
  }
  if (month) {
    returnClass = "month";
  }
  return returnClass;
}

const sum = computed(() => {
  return props.data.reduce((n, p) => {
    return n + (p.count || 0);
  }, 0)
})
</script>

<style lang="less" scoped>
.contributions {
  width: 864px;
  height: 105px;
  color: #40485b;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Liberation Sans", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, SimSun, "WenQuanYi Zen Hei Sharp", sans-serif;

  .contribution-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-weight: bold;
    }
  }

  .contribution-box {
    display: flex;
    height: 105px;
    margin-top: 20px;

    .left-side {
      width: 32px;
      font-size: 12px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .right-side {
      position: relative;
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;

      .box {
        position: relative;
        height: 15px;
        border: 1px solid #fff;
        background-color: #eeeeee;
        font-size: 12px;
        color: #fff;
        text-align: center;

        .count {
          width: 100%;
          height: 100%;
        }

        &.little {
          background-color: #d6e685;
        }

        &.some {
          background-color: #8cc665;
        }

        &.many {
          background-color: #44a340;
        }

        &.much {
          background-color: #1e6823;
        }
      }

      .month {
        .month-text {
          position: absolute;
          top: 0;
          margin-top: -15px;
          margin-left: -15px;
          min-width: 45px;
          font-size: 12px;
          text-align: center;
          color: #40485b;
        }
      }
    }
  }
}

.contribution-tip {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  font-size: 12px;

  .list {
    display: flex;
    padding: 0 2px;

    .item {
      width: 12px;
      height: 12px;
      margin: 0 1px;
      background-color: #eeeeee;

      &.little {
        background-color: #d6e685;
      }

      &.some {
        background-color: #8cc665;
      }

      &.many {
        background-color: #44a340;
      }

      &.much {
        background-color: #1e6823;
      }
    }
  }
}

.contribution-describ {
  font-size: 14px;
  line-height: 1.4;

  p {
    display: inline-block;
    margin-right: 20px;
  }

  .text-muted {
    margin-top: 10px;
    color: #8c92a4;
  }
}
</style>
<style>
.tooltip .ant-tooltip-content {
  top: 6px !important;
}

.tooltip .ant-tooltip-inner {
  color: #40485b !important;
  font-size: 12px;
}
</style>