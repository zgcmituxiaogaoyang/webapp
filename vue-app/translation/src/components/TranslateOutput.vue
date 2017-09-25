<template>
  <div id="translateOutput">
    <h2>{{translatedText}}</h2>
  </div>
</template>

<script>

export default {
  name: 'translateOutput',
  props:[
    "translatedText"
  ]
}
</script>

<style>
  #translateOutput{
      color:yellowgreen;
      font-size: 20px;
   }
</style>
