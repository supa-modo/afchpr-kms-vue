<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 px-4 mb-10"
  >
    <div
      v-for="(document, index) in documents"
      :key="index"
      class="p-4 bg-white bg-opacity-60 rounded-xl shadow hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
      @click="handleClick(document)"
    >
      <!-- File Type Icon -->
      <div class="flex justify-center mb-3">
        <img
          :src="getFileIcon(document.file)"
          alt="Document Icon"
          class="w-20 h-20"
        />
      </div>

      <!-- Document Title -->
      <h3 class="text-base text-center font-bold text-gray-600 line-clamp-3">
        {{ document.title }}
      </h3>

      <!-- Tags -->
      <div
        class="flex justify-center flex-wrap gap-1 pt-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-full"
      >
        <span
          v-for="(tag, idx) in document.tags.slice(0, 3)"
          :key="idx"
          class="bg-blue-100 text-blue-500 text-xs font-semibold px-2 py-[2px] rounded-md"
        >
          {{ tag }}
        </span>
        <span
          v-if="document.tags.length > 3"
          class="text-gray-400 text-xs font-semibold px-2"
        >
          +{{ document.tags.length - 3 }} more
        </span>
      </div>

      <!-- Author and Upload Date -->
      <p class="text-sm text-customMaroon pt-1 font-bold text-center">
        {{ document.author }}
      </p>
      <p class="text-sm text-gray-600 text-center">
        {{ document.uploadDate }}
      </p>
    </div>
  </div>
</template>

<script>
import PdfIcon from "@/assets/images/pdf_icon.png";
import WordIcon from "@/assets/images/word.png";
import ExcelIcon from "@/assets/images/excel.png";
import PptIcon from "@/assets/images/powerpoint.png";
import documentsData from "@/data/documents.json";

export default {
  data() {
    return {
      documents: documentsData, // Directly assign the imported data
    };
  },
  methods: {
    handleClick(document) {
      this.$emit("cardClick", document);
    },
    getFileIcon(fileType) {
      switch (fileType) {
        case "pdf":
          return PdfIcon;
        case "word":
          return WordIcon;
        case "excel":
          return ExcelIcon;
          case "ppt":
        return PptIcon;
        default:
          return PdfIcon;
      }
    },
  },
};
</script>
