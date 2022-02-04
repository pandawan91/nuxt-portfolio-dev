<template>
  <div class="wrapper mx-auto px-5 dark:bg-gray-900">
    <hr class="h-px mt-6 border-gray-300 max-w-screen-xl mx-auto">
    <div class="md:py-5">
      <div class="flex flex-col items-center justify-between mt-6 md:mt-0 md:flex-row">
        <div class="logo flex items-center">
          <p class="text-sm text-gray-700 dark:text-gray-200 mx-1">© 2022 {{ $config.devLogo }} Built with ♡  props to aymaneMx </p>
          <a
            :aria-label=$config.baseUrl class="text-sm underline text-gray-700 dark:text-gray-200"
            href="https://github.com/aymaneMx/nuxt-portfolio-dev">Open sourced on Github</a>
        </div>


        <div>
          <Social/>
        </div>
      </div>
      <div class="flex flex-col items-center justify-between mt-6 md:mt-0 md:flex-row"> 
        <div class="logo flex items-center flex-row">
          <nuxt-link class="footer-nav-link" to="/imprint">Impressum</nuxt-link>
          <nuxt-link class="footer-nav-link" to="/privacy">Datenschutz</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.footer-nav-link {
  @apply ml-5 font-medium text-center text-xs text-gray-700 dark:text-gray-200 dark:hover:text-primary hover:text-primary m-auto;
}
</style>