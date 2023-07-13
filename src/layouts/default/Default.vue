<template>
  <v-app>
    <v-layout ref="app" class="rounded rounded-md">
      <default-bar />

      <v-navigation-drawer color="grey-darken-2" permanent name="drawer">
        <div class="d-flex justify-center align-center h-100">
          <!-- content here -->
          Navigation content
        </div>
      </v-navigation-drawer>

      <default-view />

      <v-footer app name="footer">
        <!-- content here -->
        Footer content
      </v-footer>
    </v-layout>
  </v-app>
</template>

<script lang="ts" setup>
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
</script>
