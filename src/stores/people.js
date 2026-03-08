import { defineStore } from "pinia";
import axios from "axios";

export const usePeopleStore = defineStore("people", {
  state: () => ({
    people: JSON.parse(localStorage.getItem("people") || "[]"),
    loading: false,
    error: null,
  }),
  actions: {
    async fetchPeople() {
      this.loading = true;
      this.error = null;
      try {
        const res = await axios.get("https://randomuser.me/api/?results=6");
        this.people = res.data.results;
        localStorage.setItem("people", JSON.stringify(this.people));
      } catch (err) {
        this.error = "Failed to fetch people";
      } finally {
        this.loading = false;
      }
    },
    async addMorePeople() {
      this.loading = true;
      try {
        const res = await axios.get("https://randomuser.me/api/?results=6");
        this.people = [...this.people, ...res.data.results];
        localStorage.setItem("people", JSON.stringify(this.people));
      } catch (err) {
        this.error = "Failed to add people";
      } finally {
        this.loading = false;
      }
    },
  },
});
