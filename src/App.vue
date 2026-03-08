<template lang="pug">
router-view
</template>

<style lang="less">
body {
  font-family: Inter, Arial, Helvetica, sans-serif;
}

.section {
  padding: 2rem;
  max-width: 1280px;
  margin: auto;
  text-align: center;
}

.txt-link {
  color: #233ae8;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  -webkit-transition:
    background 0.3s,
    transform 0.2s;
  transition:
    background 0.3s,
    transform 0.2s;

  i {
    font-size: 1rem;
  }

  &:hover {
    color: #0d4c38;
    text-decoration: underline;
  }
}
</style>
