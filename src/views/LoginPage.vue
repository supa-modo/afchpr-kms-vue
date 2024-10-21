<template>
  <div
    class="relative h-screen w-screen bg-cover bg-center bg-no-repeat overflow-hidden font-inter"
    :style="{
      backgroundImage: `url(${require('@/assets/images/african-court-welcome.jpg')})`,
    }"
  >
    <!-- Left Section -->
    <div
      class="absolute inset-0 bg-customGreen bg-opacity-70 clip-left-section"
    >
      <div class="flex flex-col justify-between h-full">
        <!-- Upper Part - Logo and Organization Name -->
        <div
          class="h-[23%] bg-white bg-opacity-[0.82] flex flex-col items-center justify-center text-center w-8/12 pr-10"
        >
          <img
            src="@/assets/images/AfCHPRLogo AULogoSeal Mockup_English-Color.png"
            alt="AfCHPR Logo"
            class="w-[400px]"
          />
          <p class="mt-3 text-xl font-medium">
            AFRICAN COURT ON HUMAN AND PEOPLE'S RIGHTS
          </p>
          <p class="text-xl font-medium">
            COUR AFRICAINE DES DROITS DE L’HOMME ET DES PEUPLES
          </p>
        </div>
        <!-- Lower Part - Mandate and Mission -->
        <div class="text-white pt-10 pl-10 pb-[12rem]">
          <h2 class="text-3xl text-left text-yellow-500 font-semibold">
            Mandate
          </h2>
          <p class="mt-2 text-left font-semibold pb-4 max-w-4xl">
            The African Court was established to complement the protective
            mandate of the African Commission on Human and Peoples’ Rights (the
            African Commission – often referred to as the Banjul Commission),
            which is a quasi-judicial body charged with monitoring the
            implementation of the African Charter. The African Court applies the
            provisions of the African Charter and other human rights instruments
            ratified by the States concerned.
          </p>
          <h2 class="text-3xl text-left font-semibold pt-14 text-yellow-500">
            Mission
          </h2>
          <p class="mt-2 max-w-3xl text-left font-semibold">
            To complement the protective mandate of the African Commission on
            Human and Peoples’ Rights by strengthening the human rights
            protection system in Africa and ensuring respect for and compliance
            with the African Charter, as well as other international human
            rights instruments, through judicial decisions.
          </p>
          <div class="flex">
            <button
              class="mt-20 py-4 px-14 ml-14 font-semibold text-sm bg-gray-500 text-white rounded-md"
            >
              Browse Public Files
            </button>
            <p class="mt-[6rem] ml-4 text-yellow-500">No login required</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Section -->
    <div
      class="absolute inset-0 bg-customGray bg-opacity-75 clip-right-section"
    >
      <div class="flex flex-col justify-end items-end pt-[14rem] pr-[12rem]">
        <div class="w-full max-w-lg">
          <img
            src="@/assets/images/AfCHPRLogo_English-Color.png"
            alt="AfCHPR Logo-2"
            class="w-[420px]"
          />
          <h2 class="mt-6 text-6xl text-left text-white font-extrabold">
            Login to your <br />
            Account
          </h2>
          <p class="text-white text-left mt-6">
            Enter your login credentials to continue
          </p>
          <div class="relative text-center mt-4 pr-6">
            <font-awesome-icon
              :icon="['fas', 'user']"
              class="absolute left-8 text-2xl top-1/2 transform -translate-y-1/2 text-white text-opacity-80"
            />
            <input
              type="text"
              placeholder="Enter Your Username"
              class="pl-[5rem] py-4 border-2 border-white bg-transparent text-white placeholder-white placeholder-opacity-70 rounded-[1rem] w-full"
            />
          </div>
          <div class="relative mt-4 pr-6">
            <font-awesome-icon
              :icon="['fas', 'key']"
              class="absolute left-8 top-1/2 transform -translate-y-1/2 text-white text-opacity-80"
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              class="pl-20 py-4 border-2 border-white bg-transparent text-white placeholder-white placeholder-opacity-70 rounded-[1rem] w-full"
            />
          </div>

          <p class="mt-4 pr-6 text-right w-full text-yellow-500">
            Forgot Password?
          </p>
          <button
            class="mt-3 py-4 mx-36 font-semibold text-sm bg-customMaroon text-white rounded-xl w-[calc(100%-20rem)]"
            @click="navigateToHome"
          >
            Login
          </button>

          <p class="mt-2 text-white text-center">
            Don’t have an account?
            <router-link to="/create-account" class="text-yellow-500"
              >Create one</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  methods: {
    navigateToHome() {
      this.$router.push({ path: "/home" });
    },
  },
};
</script>

<style scoped>
.clip-left-section {
  clip-path: polygon(0 0, 62% 0, 40% 100%, 0 100%);
}

.clip-right-section {
  clip-path: polygon(62% 0, 100% 0, 100% 100%, 40% 100%);
}
</style>
