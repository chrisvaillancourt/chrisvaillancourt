<template>
  <header
    class="flex flex-row justify-between md:justify-start dark:bg-gray-800 py-6 pl-8 hidden"
  >
    <NuxtLink to="/" class="mr-24 dark:text-white dark:hover:text-green-500">
      <h2>Chris Vaillancourt</h2>
    </NuxtLink>
    <nav>
      <ul class="hidden md:flex md:flex-row">
        <NuxtLink
          to="/latest"
          class="mr-16 dark:text-white dark:hover:text-green-500"
        >
          <li>Latest</li>
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="mr-16 dark:text-white dark:hover:text-green-500"
        >
          <li>About</li>
        </NuxtLink>
        <NuxtLink
          to="/projects"
          class="mr-16 dark:text-white dark:hover:text-green-500"
        >
          <li>Projects</li>
        </NuxtLink>
      </ul>
      <button class="md:hidden mr-8">
        <AppIcon
          :icon="$options.static.icons.mdiMenu"
          title="Navigation Menu"
        />
      </button>
    </nav>
  </header>
</template>
<script>
import { mdiMenu } from '@mdi/js'

export default {
  name: 'AppHeader',
  created() {
    this.$options.static = {
      icons: {
        mdiMenu,
      },
    }
  },
}
</script>
