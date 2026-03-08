<template lang="pug">
.card
  .image-wrapper
    img.profile_img(:src="person.picture.large" :alt="fullName")

    .info
      h2.name {{ fullName }}
      .extra
        p.email {{ person.email }}
        router-link.txt-link.details(:to="`/person/${person.login.uuid}`")
          | More details
          i.fa-solid.fa-angle-right
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  person: Object,
});

const fullName = computed(
  () => `${props.person.name.first} ${props.person.name.last}`,
);

const description = computed(
  () =>
    `${props.person.location.city}, ${props.person.location.country} • Age ${props.person.dob.age}`,
);
</script>

<style lang="less" scoped>
.card {
  width: 100%;
  border: 2px solid #0d4c38;
  border-radius: 4px;
  overflow: hidden;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  -webkit-transition: transform 0.3s ease;
  transition: transform 0.3s ease;
  background: white;

  .image-wrapper {
    position: relative;
    width: 100%;
    height: 15rem;
    overflow: hidden;

    .profile_img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
    }

    .name {
      position: absolute;
      bottom: 1rem;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      color: white;
      font-size: 1rem;
      font-weight: 600;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }
  }

  .info {
    position: absolute;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
    padding: 16px;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    .name {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 8px;
      -webkit-transition: transform 0.4s ease;
      transition: transform 0.4s ease;
    }

    .extra {
      opacity: 0;
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
      -webkit-transition: all 0.4s ease;
      transition: all 0.4s ease;
    }

    .email,
    .desc {
      font-size: 14px;
      margin: 4px 0;
    }

    .details {
      display: inline-block;
      margin-top: 8px;
      padding: 6px 14px;
      color: #fff;
      font-weight: 500;
      -webkit-transition: transform 0.2s ease;
      transition: transform 0.2s ease;
    }
  }

  &:hover {
    .profile_img {
      -webkit-filter: blur(4px) brightness(50%);
      filter: blur(4px) brightness(50%);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    .info {
      top: 36%;
      bottom: auto;
      .extra {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }

      .name {
        bottom: 80%; /* move the name upward to top of card */
        font-size: 1.4rem;
      }
    }
  }

  @media (max-width: 768px), (hover: none) {
    .image-wrapper {
      height: auto;

      .name {
        color: #333;
        left: 0;
        -webkit-transform: none;
        transform: none;
        position: relative;
        bottom: auto;
      }
    }
    .info {
      position: relative;
      padding: 0;
      margin: 1rem;
      text-align: left;
      width: auto;

      .extra {
        opacity: 1;
        -webkit-transform: none;
        transform: none;

        p {
          color: #333;
        }

        .details {
          color: #233ae8;
          padding-left: 0;
          margin-top: 0;
        }
      }
    }
  }
}
</style>
