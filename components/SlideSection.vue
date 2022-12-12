<template>
  <section class="">
    <div class="w-full bg-blue-200 py-3"></div>
    <div class="relative bg-green-200">
      <ul class="slider">
        <li class="h-[60vh] relative">
          <img
            class="h-full w-full object-cover"
            src="~/assets/img/slide/computers.png"
            alt=""
          />
          <div class="absolute top-0 left-0 h-full w-full flex">
            <h1 class="text-1lg text-white my-auto w-full text-center px-20">
              Some Big meeting 1
            </h1>
          </div>
        </li>
        <li class="h-[60vh] relative hidden">
          <img
            class="h-full w-full object-cover"
            src="~/assets/img/slide/computers-2.png"
            alt=""
          />
		   <div class="absolute top-0 left-0 h-full w-full flex">
          <h1 class="text-1lg text-white my-auto w-full text-center px-20">
            Some Big meeting 2
          </h1>
        </div>
        </li>
        <li class="h-[60vh] relative hidden">
          <img
            class="h-full w-full object-cover"
            src="~/assets/img/slide/computers-3.png"
            alt=""
          />
		   <div class="absolute top-0 left-0 h-full w-full flex">
          <h1 class="text-1lg text-white my-auto w-full text-center px-20">
            Some Big meeting 3
          </h1>
        </div>
        </li>
       
      </ul>
      <div class="absolute px-5 flex h-full w-full top-0 left-0">
        <div class="my-auto w-full flex justify-between">
          <button on-click="prev" class="bg-white p-3 rounded-full bg-opacity-80 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          </button>
          <button on-click="next" class="bg-white p-3 rounded-full bg-opacity-80 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


export default {
	name: 'SlideSection',
};
methods: {
	this.$nextTick(() => {

	})
}



</script>
