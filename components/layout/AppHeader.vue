<template functional>
  <div>
    <header class="flex flex-row">
      <NuxtLink to="/" class="mr-24">
        <h2>Chris Vaillancourt</h2>
      </NuxtLink>
      <nav>
        <ul class="flex flex-row">
          <NuxtLink to="/latest" class="mr-16">
            <li>Latest</li>
          </NuxtLink>
          <NuxtLink to="/about" class="mr-16">
            <li>About</li>
          </NuxtLink>
          <NuxtLink to="/projects" class="mr-16">
            <li>Projects</li>
          </NuxtLink>
        </ul>
      </nav>
    </header>
  </div>
</template>
