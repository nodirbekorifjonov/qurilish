<script lang="ts" setup></script>

<template>
  <header class="py-3.5">
    <div class="site-container flex items-center justify-between">
      <span class="font-bold uppercase text-2xl text-[#0174ec]">Logo</span>
      <nav>
        <ul class="flex gap-5">
          <li>
            <RouterLink to="/"> Bizning loyihalarimiz </RouterLink>
          </li>
          <li>
            <RouterLink to="/"> Biz haqimizda </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/"
              class="py-2.5 px-4 bg-[#0174ec] border-[1px] border-transparent text-white rounded-md transition-all hover:bg-transparent hover:border-[#0174ec] hover:text-[#0174ec]"
            >
              Ro'yhatdan o'tish
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
