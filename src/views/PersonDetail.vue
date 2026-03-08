<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { usePeopleStore } from "../stores/people";

const route = useRoute();
const store = usePeopleStore();
const person = ref(null);

console.log("Route param id:", route.params.id);
console.log("Store people:", store.people);
person.value = store.people.find((p) => p.login?.uuid === route.params.id);
console.log(person.value);

const getFullName = () =>
  person.value ? `${person.value.name.first} ${person.value.name.last}` : "";
const loadProfilePic = () => (person.value ? person.value.picture.large : "");
const getEmail = () => (person.value ? person.value.email : "");
const getCountry = () => (person.value ? person.value.location.country : "");
</script>

<template lang="pug">
.section
  .person-detail
    h1.name {{ getFullName() }}
    img.avatar(:src="loadProfilePic()" :alt="getFullName()")
    p.email {{ getEmail() }}
    p.country {{ getCountry() }}
    p.bio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis urna. Praesent ultrices nulla in arcu convallis, vitae congue urna convallis.
    router-link.txt-link.back-btn(to="/")
      i.fa-solid.fa-angle-left
      |  Back to Home

</template>

<style lang="less" scoped>
.person-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  gap: 1rem;
  max-width: 500px;
  margin: 2rem auto;
  text-align: center;

  img.avatar {
    width: 50%;
    height: 50%;
    border-radius: 4px;
    object-fit: cover;
    border: 2px solid #0d4c38;
  }

  h1.name {
    font-size: 1.8rem;
    color: #0d4c38;
  }

  p.email,
  p.country,
  p.bio {
    font-size: 1rem;
    color: #333;
    margin: 0;
  }
}
</style>
