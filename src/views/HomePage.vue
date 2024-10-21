<template>
  <div>
    <AppHeader @nav-clicked="handleNavClick" />
    <div class="lg:flex h-[calc(100vh-7.1rem)] bg-gray-100">
      <!-- Left Navbar -->
      <aside
        class="hidden lg:block w-64 bg-customGold bg-opacity-65 text-customMaroon py-8 px-3"
      >
        <nav class="space-y-3">
          <a
            v-for="navItem in navItems"
            :key="navItem.name"
            href="#"
            :class="[
              'flex gap-3 text-lg font-bold hover:bg-white py-3 px-3 rounded',
              { 'bg-white': activeNav === navItem.name },
            ]"
            @click="handleNavClick(navItem.name)"
          >
            {{ navItem.name }}
          </a>
        </nav>
      </aside>

      <!-- Main Content -->
      <main
        class="relative flex-1 pt-8 px-6"
        :style="{ backgroundImage: 'url(' + bgImage + ')' }"
      >
        <!-- Color Overlay -->
        <div class="absolute inset-0 bg-customGold opacity-85 z-0"></div>

        <div class="relative z-10 h-full flex flex-col">
          <!-- Right Side Header -->
          <div
            class="flex flex-col lg:flex-row justify-between items-center mb-6 flex-shrink-0"
          >
            <div class="flex items-center w-full lg:w-1/5 lg:mt-0">
              <h2 class="text-xl ml-4 font-semibold">
                {{ isUploadScreen ? "Upload New Document" : activeNav }}
              </h2>
            </div>

            <!-- Search and Action Buttons -->
            <div
              v-if="!isUploadScreen"
              class="flex flex-col lg:flex-row w-full lg:w-4/5 mt-3 lg:mt-0 lg:justify-end"
            >
              <div class="relative w-full lg:w-2/5">
                <input
                  type="text"
                  class="border border-customMaroon max-h-11 rounded-xl px-2 py-[10px] pl-14 w-full"
                  placeholder="Search Documents, files..."
                />
              </div>

              <div
                class="flex flex-col lg:flex-row lg:space-x-4 lg:ml-6 mt-2 space-y-2 lg:mt-0 items-center"
              >
                <button
                  class="bg-customMaroon w-full lg:w-auto text-white max-h-11 px-10 rounded-[10px] py-[10px] font-semibold hover:bg-opacity-75"
                  @click="handleUploadClick"
                >
                  Upload New Document
                </button>

                <div class="flex w-full lg:w-auto space-x-3">
                  <button
                    class="bg-customMaroon w-auto max-h-11 text-white px-6 rounded-[10px] py-[10px] font-semibold hover:bg-opacity-75"
                  >
                    Date Uploaded
                  </button>
                  <button
                    class="bg-customMaroon w-auto max-h-11 text-white px-8 rounded-[10px] py-[10px] font-semibold hover:bg-opacity-75"
                  >
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Main Section Content -->
          <div class="flex-1 overflow-y-auto pt-2">
            <DocumentUpload v-if="isUploadScreen" />
            <DocumentTable v-else-if="activeNav === 'My Files'" />
            <DocumentCards v-else @cardClick="handleCardClick" />
          </div>

          <!-- Modal for Document Preview -->
          <!-- <DocumentPreviewModal
            v-if="isModalOpen"
            :documentData="selectedDocument"
            @close="handleCloseModal"
          /> -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
// import DocumentPreviewModal from "@/components/DocumentPreviewModal.vue";
import DocumentUpload from "@/components/DocumentUpload.vue";
import AppHeader from "@/components/AppHeader.vue";
import DocumentCards from "@/components/DocumentCards.vue";
// import DocumentTable from "@/views/MyFiles.vue";

export default {
  components: {
    // DocumentPreviewModal,
    DocumentUpload,
    AppHeader,
    DocumentCards,
    // DocumentTable,
  },
  data() {
    return {
      isModalOpen: false,
      isUploadScreen: false,
      activeNav: "My Files",
      selectedDocument: null,
      bgImage: require("@/assets/images/hammer3.png"),
      navItems: [
        { name: "My Files" },
        { name: "Public Files" },
        { name: "Department Files" },
        { name: "Division Files" },
        { name: "Unit Files" },
        { name: "Settings" },
      ],
    };
  },
  methods: {
    handleNavClick(navItem) {
      this.isUploadScreen = false;
      this.activeNav = navItem;
    },
    handleUploadClick() {
      this.isUploadScreen = true;
    },
    handleCardClick(documentData) {
      this.selectedDocument = documentData;
      this.isModalOpen = true;
    },
    handleCloseModal() {
      this.isModalOpen = false;
      this.selectedDocument = null;
    },
  },
};
</script>
