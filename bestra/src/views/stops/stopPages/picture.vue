<script setup>
import '@splidejs/vue-splide/css';
//import "lightbox2/dist/css/lightbox.min.css";
//import lightbox from "lightbox2";
//import "lightbox2/dist/js/lightbox-plus-jquery.min.js";
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
//import VueEasyLightbox from 'vue-easy-lightbox';
//import 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.css';

//const showLightbox = ref(false);

</script>
<template>
    <pictures>
        <!-- ここからメインのスライダー
        <div id="image-slider" class="splide">
            <div class="splide__track">
		        <ul class="splide__list">
		            <li class="splide__slide">
		            <a href="stopImg/osa-hiraizumi.jpg" data-lightbox="image-1">
		                <img src="/stopImg/osa-hiraizumi.jpg" alt="Thumbnail">
		            </a>
		            </li>
		            <li class="splide__slide">
		            <a href="stopImg/osa-hiraizumi.jpg" data-lightbox="image-1">
		                <img src="" alt="Thumbnail">
		            </a>
		            </li>
		            <li class="splide__slide">
		            <a href="stopImg/osa-hiraizumi.jpg" data-lightbox="image-1">
		                <img src="#" alt="Thumbnail">
		            </a>
		            </li>
		            <li class="splide__slide">
		            <a href="stopImg/osa-hiraizumi.jpg" data-lightbox="image-1">
		                <img src="#" alt="Thumbnail">
		            </a>
		            </li>
		        </ul>
            </div>
        </div>
        <!-- ここから下の小さいスライダー…
        <div id="thumbnail-slider" class="splide">
            <div class="splide__track">
		        <ul class="splide__list">
		            <li class="splide__slide">
		                <img src="#" alt="Thumbnail">
		            </li>
		            <li class="splide__slide">
		                <img src="#" alt="Thumbnail">
		            </li>
		            <li class="splide__slide">
		                <img src="#" alt="Thumbnail">
		            </li>
		            <li class="splide__slide">
		                <img src="#" alt="Thumbnail">
		            </li>
		        </ul>
            </div>
        </div>-->
		  <Splide :options="{ rewind: true }" aria-label="お気に入りの写真">
			<SplideSlide>
				<viewer>
			 	 <img src="/stopImg/osa-hiraizumi.jpg" alt="StopB">
				</viewer>
			</SplideSlide>
			<SplideSlide>
				<viewer>
			 	 <img src="/stopImg/osa-ichinoseki.jpg" alt="stopB">
				</viewer>
			</SplideSlide>
		  </Splide>
    </pictures>
</template>
<style scoped>
img {
	width:100%;
}
</style>
