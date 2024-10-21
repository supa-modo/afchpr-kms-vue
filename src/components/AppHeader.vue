<template>
  <div class="sticky top-0 z-50 bg-white shadow-md">
    <header class="border-b border-gray-200">
      <nav
        class="mx-auto flex max-w-screen-3xl px-6 items-center justify-between gap-x-6 py-1 sm:px-2 lg:py-1"
        aria-label="Global"
      >
        <!-- Logo and Address -->
        <div class="flex text-left items-center w-auto">
          <router-link
            to="/"
            class="flex-none flex-shrink-0 block p-1 rounded-lg"
            title="Home page"
          >
            <img
              class="block xs:hidden w-auto h-16 2xs:h-20 xl:h-24"
              src="@/assets/images/AfCHPRLogo_English-Color.png"
              alt="African Court Logo"
            />
          </router-link>

          <div class="text-gray-500 ml-4 mt-3 hidden md:block">
            <p class="text-xs">
              Phone: +255-27 2970430 <br />
              Mwalimu Julius Nyerere Conservation Centre <br />
              Dodoma Road <br />
              P.O. Box 6274 Arusha, TANZANIA <br />
              E-mail:
              <a
                href="mailto:registrar@african-court.org"
                class="text-blue-600 hover:underline"
              >
                registrar@african-court.org
              </a>
            </p>
          </div>
        </div>

        <!-- Title and Motto (hidden on smaller screens) -->
        <div class="hidden md:block text-center pr-32">
          <h1 class="text-4xl text-customMaroon font-semibold">
            African Court on Human and People's Rights
          </h1>
          <p class="text-base mt-2 text-customMaroon">
            Mahakama ya Afrika &nbsp;&nbsp;&bull;&nbsp;&nbsp; Cour africaine
            &nbsp;&nbsp;&bull;&nbsp;&nbsp; المحكمة الإفريقية
            &nbsp;&nbsp;&bull;&nbsp;&nbsp; Tribunal Africano
            &nbsp;&nbsp;&bull;&nbsp;&nbsp; Corte Africana
          </p>
        </div>

        <div class="flex items-center justify-end gap-4">
          <div
            class="whitespace-nowrap md:mr-10 inline-block mt-8 px-4 py-1.5 text-base font-semibold bg-white text-gray-500 hover:text-customMaroon cursor-pointer"
            title="Admin Login"
          >
            <icon-admin class="inline mr-1 mb-1" size="25" />
            <p>Logged In User</p>
          </div>

          <!-- Hamburger Menu for mobile screens -->
          <button
            @click="toggleNav"
            class="text-customMaroon text-3xl lg:hidden"
            title="Toggle Navigation"
          >
            <p>Menu</p>
            <component :is="isNavOpen ? 'icon-close' : 'icon-menu'" />
          </button>
        </div>
      </nav>

      <!-- Overlay Menu for mobile screens -->
      <aside
        v-if="isNavOpen"
        class="lg:hidden fixed inset-0 bg-black bg-opacity-70 z-30 flex flex-col items-center justify-center"
      >
        <nav class="w-3/4 mt-10 bg-customGoldOp bg-opacity-65 p-6 rounded-lg">
          <div class="text-white text-2xl font-semibold mb-8">
            Logged In User
          </div>
          <nav class="space-y-6">
            <a
              v-for="navItem in navItems"
              :key="navItem"
              href="#"
              class="flex gap-3 text-lg font-bold text-white hover:bg-white hover:text-customMaroon py-3 px-3 rounded"
              @click="handleNavClick(navItem)"
            >
              <component :is="getIconForNav(navItem)" :size="25" />
              {{ navItem }}
            </a>
          </nav>
        </nav>
      </aside>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavOpen: false,
      navItems: [
        "My Files",
        "Public Files",
        "Department Files",
        "Division Files",
        "Unit Files",
        "Settings",
      ],
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    handleNavClick(navItem) {
      this.$emit("nav-clicked", navItem); 
      this.isNavOpen = false;
    },
    getIconForNav(navItem) {
      switch (navItem) {
        case "My Files":
          return "icon-files";
        case "Public Files":
          return "icon-public";
        case "Department Files":
          return "icon-department";
        case "Division Files":
          return "icon-division";
        case "Unit Files":
          return "icon-unit";
        case "Settings":
          return "icon-settings";
        default:
          return null;
      }
    },
  },
};
</script>

<style scoped>
.text-customMaroon {
  color: #900c3f;
}
.bg-customGold {
  background-color: #d4af37;
}
</style>
