<template functional>
  <header class="flex flex-row dark:bg-gray-800 py-6 pl-8">
    <NuxtLink to="/" class="mr-24 dark:text-white dark:hover:text-green-500">
      <h2>Chris Vaillancourt</h2>
    </NuxtLink>
    <nav>
      <ul class="flex flex-row">
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
    </nav>
  </header>
</template>
