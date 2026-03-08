<template lang="pug">
.section
  h1.title Random People Generator

  .btns
    a.fetch-btn.btn(@click="store.fetchPeople" :disabled="store.loading")
      span Fetch New People

    a.add-btn.btn(@click="store.addMorePeople" :disabled="store.loading")
      span Add More People

  .loading(v-if="store.loading")
    span Loading...
    i.fa-solid.fa-spinner.fa-spin

  p.error(v-if="store.error") {{ store.error }}

  .grid
    PersonCard(
      v-for="person in store.people"
      :key="person.login.uuid"
      :person="person"
    )
</template>

<script setup>
import { onMounted } from "vue";
import { usePeopleStore } from "../stores/people";
import PersonCard from "../components/PersonCard.vue";

const store = usePeopleStore();

onMounted(() => {
  if (!store.people || store.people.length === 0) {
    store.fetchPeople();
  }
});
</script>

<style lang="less" scoped>
.title {
  margin-bottom: 1.3rem;
  font-family: Inter, Arial, Helvetica, sans-serif;
  margin-bottom: 1.3rem;
  font-size: 2rem;
  color: #0d4c38;
}

.btns {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 2rem;
}

.btn {
  padding: 1rem 1.2rem;
  border: none;
  overflow: hidden;
  cursor: pointer;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 0;
  position: relative;
  display: inline-block;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  justify-content: space-between;

  span {
    z-index: 1;
    position: relative;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    -webkit-transition: left 0.4s ease;
    transition: left 0.4s ease;
    z-index: 0;
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    &:before {
      left: 0;
    }
  }
  &:active {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background: #e6ecea;
    cursor: not-allowed;
  }

  &.fetch-btn {
    background: #eceaea;

    &:before {
      background: linear-gradient(135deg, #1e481f, #20c228);
    }
    span {
      color: #0d4c38;
    }

    &:hover {
      span {
        color: #fff;
      }
    }
  }

  &.add-btn {
    background: #517853;

    &:before {
      background: linear-gradient(135deg, #628a64, #f4f6f4);
      left: 100%;
    }
    span {
      color: #fff;
    }

    &:hover {
      &:before {
        left: 0;
      }

      span {
        color: #0d4c38;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.8rem;
  }
}

.grid {
  display: grid;
  gap: 1.7rem;
  grid-template-columns: repeat(auto-fill, minmax(28%, 1fr));
  margin: 1.5rem 0;
  padding-right: 3px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(60%, 1fr));
    gap: 1rem;
  }
}

.loading {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  color: #0d4c38;
  font-weight: 500;
  justify-content: center;

  i {
    font-size: 1.1rem;
  }
}

.error {
  color: red;
  margin-bottom: 1rem;
}
</style>
