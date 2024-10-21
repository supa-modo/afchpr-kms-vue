<template>
  <div
    class="relative max-w-full lg:mx-20 mb-14 py-8 px-14 bg-white bg-opacity-80 rounded-2xl shadow-md"
  >
    <!-- Close Button -->
    <button
      @click="handleClose"
      class="absolute top-2 right-4 font-bold text-gray-600 hover:text-red-600 focus:outline-none"
    >
      <span class="text-3xl">&times;</span>
    </button>

    <h2 class="text-3xl font-semibold text-center mb-8 text-customMaroon">
      Upload Your Document
    </h2>

    <!-- Document Details Section -->
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-8 text-left">
      <div>
        <label class="block text-base pl-3 font-semibold text-gray-600"
          >Document Title</label
        >
        <input
          type="text"
          class="mt-2 p-4 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter document title"
        />
      </div>
      <div>
        <label class="block pl-3 text-base font-semibold text-gray-600"
          >Number of Pages</label
        >
        <input
          type="number"
          class="mt-2 p-4 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter number of pages"
        />
      </div>
      <div class="lg:col-span-2">
        <label class="block pl-3 text-base font-semibold text-gray-600"
          >Description</label
        >
        <textarea
          rows="4"
          class="mt-2 p-4 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Provide a brief description"
        ></textarea>
      </div>
    </div>

    <!-- Select Original Language Section -->
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-8 text-left">
      <div>
        <label class="block text-base pl-3 font-semibold text-gray-600"
          >Unit</label
        >
        <select
          class="mt-2 p-4 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option>Select Unit</option>
        </select>
      </div>
      <div>
        <label class="block pl-3 text-base font-semibold text-gray-600"
          >Privacy</label
        >
        <select
          class="mt-2 p-4 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option>Public</option>
          <option>Staff</option>
          <option>Internal</option>
        </select>
      </div>
      <div>
        <label class="block pl-3 text-base font-semibold text-gray-600"
          >Original Language</label
        >
        <select
          class="mt-2 p-4 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option>English</option>
          <option>Swahili</option>
          <option>Portuguese</option>
          <option>Arabic</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </div>
      <!-- Category Section -->
      <div class="mb-4">
        <label class="block pl-3 text-base font-semibold text-gray-600 mb-2"
          >Category</label
        >
        <div class="flex flex-wrap gap-4 mt-6 pl-6 font-semibold">
          <label
            v-for="category in ['Report', 'Advert', 'Memo']"
            :key="category"
            class="inline-flex items-center"
          >
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-blue-600"
            />
            <span class="ml-2 text-sm">{{ category }}</span>
          </label>
        </div>
      </div>
    </div>

    <!-- Tags and Document Type -->
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-8 text-left">
      <div>
        <label class="block pl-3 text-base font-semibold text-gray-600"
          >Tags</label
        >
        <input
          type="text"
          class="mt-2 p-4 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter tags"
        />
      </div>
      <div>
        <label class="block pl-3 text-base font-semibold text-gray-600"
          >Type of Document</label
        >
        <select
          class="mt-2 p-4 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option>Word</option>
          <option>Excel</option>
          <option>PDF</option>
          <option>PPT</option>
        </select>
      </div>
    </div>

    <!-- Language Uploads Section -->
    <h3 class="text-xl font-semibold text-customMaroon mb-6 text-center">
      Upload File in Different Languages
    </h3>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 text-left pl-3"
    >
      <div v-for="(file, index) in selectedFiles" :key="index">
        <label class="block text-base font-semibold text-gray-600">
          Upload {{ languages[index] }}
        </label>
        <input
          type="file"
          class="mt-2 block w-full text-base text-gray-600 p-3 font-semibold border border-customMaroon rounded-lg cursor-pointer shadow-sm"
          @change="handleFileChange(index, $event.target.files[0])"
        />
      </div>
    </div>

    <!-- Author and Contributors -->
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-8 text-left">
      <div>
        <label class="block pl-3 text-base font-semibold text-gray-600"
          >Author</label
        >
        <input
          type="text"
          class="mt-2 p-4 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter author name"
        />
      </div>
      <div>
        <label class="block pl-3 text-base font-semibold text-gray-600"
          >Contributors</label
        >
        <input
          type="text"
          class="mt-2 p-4 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter contributors"
        />
      </div>
    </div>

    <!-- Submit Button -->
    <div class="text-center">
      <button
        type="submit"
        class="py-3 px-8 bg-customMaroon font-semibold text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
      >
        Upload Document
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const selectedFiles = ref(Array(6).fill(null));
    const languages = ref([
      "English",
      "Swahili",
      "Portuguese",
      "Arabic",
      "Spanish",
      "French",
    ]);

    const handleFileChange = (index, file) => {
      selectedFiles.value[index] = file;
    };

    const handleClose = () => {
      router.go(-1);
    };

    return {
      selectedFiles,
      languages,
      handleFileChange,
      handleClose,
    };
  },
};
</script>
