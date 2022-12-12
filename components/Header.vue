<template>
  <div>
    <!-- Navbar -->
    <nav class="relative w-screen bg-gray-100 mx-auto p-3 shadow-lg">
      <!-- Flex container -->
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="pt-2 shadow-lg bg-slate-500 rounded-lg">
          <img
            class="w-16 h-10 gb-gray-100"
            src="~/static/tailwind-css-2.svg"
            alt="" 
          />
        </div>
        <!-- Menu items -->
        <div
          class="hidden md:flex space-x-6 w-50 bg-gradient-to-b from-blue-100 p-4 rounded-lg"
        >
		<ul class="text-md tracking-wide items-center flex gap-x-8">
			<li class="hover:scale-125 duration-300 py-1 hover:text-sky-500 pb-1 rounded-lg">
				<a href="#" class="cursor-pointer">Home</a>
			</li>
			<li class="hover:scale-125 duration-300 py-1 hover:text-teal-400 ">
				<a href="#" class="cursor-pointer">Sobre nós</a>
			</li>
			<li class="hover:scale-125 duration-300 py-1 hover:text-teal-400">
				<a href="#" class="cursor-pointer">Contactos</a>
			</li>
			<li class="hover:scale-125 duration-300 py-1 hover:text-teal-400">
				<a href="#" class="cursor-pointer">Comunidade</a>
			</li>
			<li class="hover:scale-125 duration-300 py-1 hover:text-teal-400">
				<a href="#" class="cursor-pointer">Area</a>
			</li>
			<li class="hover:scale-125 duration-300 py-1 hover:text-teal-400">
				<a href="#" class="cursor-pointer">Equipa da olapa</a>
			</li>

			
		</ul>
        </div>
        <!-- Profile img -->
        <div class="hidden md:block bg-gray-200 rounded-full">
          <img
            class="w-12 h-12"
            src="~/static/img/profile/my-channel.jpeg"
            alt=""
          />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
	name: 'Header'
}
</script>
