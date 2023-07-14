<template>
  <v-btn
    color="primary"
    min-width="228"
    rel="noopener noreferrer"
    size="x-large"
    target="_blank"
    variant="flat"
    @click="counter.inc()"
  >
    <v-icon icon="mdi-speedometer" size="large" start />

    Count is: {{ counter.count }}
  </v-btn>
</template>

<script lang="ts" setup>
import { useAppStore } from "../store/app";

const counter = useAppStore();
</script>
