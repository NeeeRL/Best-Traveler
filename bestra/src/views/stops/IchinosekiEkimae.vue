<script setup>
import Pictures from './stopPages/picture.vue'
import Time from './stopPages/time.vue'
import Comment from './stopPages/comment.vue'
</script>
<template>
    <!--内容上はここから始まる-->
    <div class="MainContainer">
        <div class="left">
			<Time />
        </div>
        <div class="right">
			<Pictures />
			<Comment />
        </div>
    </div>
</template>
<style scoped>

.MainContainer {
    display: flex;
    width: 100%;
    height: 100%; /* 必要に応じて高さを調整。というのも、ここは動的に決めてないため。新たにセンテンスや写真を作りたいときはここをいじる。同文があると思うが、それらよりここの値を大きくすること */
    font-family: "メイリオ";
    /* margin-bottom: 30px; */
}
/* 左側の設定 */

main {
    height: 100%;
}

.left {
    flex: 3; /* 割合をかけ */
    background-color: rgb(240, 240, 240);
    height: 100%; /* 必要に応じて高さを調整。というのも、ここは動的に決めてないため。新たにセンテンスや写真を作りたいときはここをいじる */
}
.left::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
}/*スクロールバーを見えなくする*/
/* 右側の設定 */

.right {
    margin-top: 20px;
    margin-right: 20px;
    flex: 7; /* 割合をかく */
    height: 100%; /* 必要に応じて高さを調整。動的に設定している */
}
.right Pictures {
    width: 100%;
    max-height: 50%;
    object-fit: cover;
    object-position: center;
}

/*これは消してください.というのもcomming_soonのところです*/
.right p {
    font-size: 30px;
}


/* .time li a:hover {
    background-color: rgb(195, 195, 195);
    color: black;
} */
.place {
    text-align: center;
    font-size: 70px;
}

.kyu {
    display: none;
}


@media screen and (max-width: 1180px) {
    /* .time li a:hover {
        background-color: black;
        color: white;
    } */
    .time li a {
        font-size: 60px;
    }
    .left {
        flex: 5;
    }
    .right {
        flex: 5;
        margin-right: 10px;
    }
}
@media screen and (max-width: 1010px) {
    main {
        height: auto;
    }
}

@media screen and (max-width: 710px) {
    /*.sp {
        display: block;
    }*/
    .time li a {
        font-size: 40px;
        padding: 0px 5px 0px;
    }
}


@media screen and (max-width: 670px) {
    /*.sp {
        display: block;
    }*/
    .MainContainer {
		display: block;
     }
     
     .right img {
		max-width: 100%;
      }
    .left {
        flex: 10;
        overflow: hidden;
        height: auto;
	}
    .time li a {
        font-size: 40px;
        padding: 0px 5px 0px;
    }

    .right {
        margin-right: 10px;
        height: 100%;
	}

    #Box{
        overflow-y: hidden;
        height: 100%;
    }
}

</style>
