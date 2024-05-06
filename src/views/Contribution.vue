<template>
  <Contribution :data="dataArray" />
</template>

<script setup>
import Contribution from "@/components/Contribution.vue";

let currentDate = new Date();

// 创建存储数据的数组
let dataArray = [{
  count: Math.ceil(Math.random() * 40) - 1,
  date: currentDate.toISOString().slice(0, 10),
}];
const week = currentDate.getDay();

// 循环渲染最近一年的数组
for (let i = 0; i <= 365 + week - 3; i++) {
  // 将日期推到前一天
  currentDate.setDate(currentDate.getDate() - 1);

  // 将日期格式化为所需的字符串格式
  let formattedDate = currentDate.toISOString().slice(0, 10);

  if (currentDate.getDate() === 15) {
    dataArray.unshift({
      month: currentDate.toLocaleString('default', { month: 'long' }).toUpperCase(),
    });
  }

  // 将格式化后的日期字符串添加到数组中
  dataArray.unshift({
    count: Math.ceil(Math.random() * 40) - 1,
    date: formattedDate,
  });
}
</script>

<style>
.contributions {
  margin: 60px auto 0;
}
</style>