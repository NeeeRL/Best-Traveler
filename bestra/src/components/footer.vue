<template>
    <footer>
        <div id="footer">
            <h1 class="FootName fot"><a href="TopPage.html" class="nav">BEST&nbsp;TRAVELER.</a></h1>
            <ul class="cont">
                <li class="options fot blockes">
                    <a href="TopPage.html" class="na house">ホーム</a>
                </li>
                <li class="options fot blockes">
                    <a href="contact.html" class="na contact">お問い合わせ</a>
                </li>
                <!-- <li class="options fot blockes">
                    <a href="Line.html" class="na line">路線選択</a>
                </li> -->
                <li class="options fot blockes">
                    <a href="Search.html" class="na site">検索</a>
                </li>
                <li class="options fot blockes">
                    <a href="Pri.html" class="na line" style="font-size: 17px;">プライバシーポリシー</a>
                </li>
            </ul>
	        <p>Copyright © 2024 Agroup All Rights Reserved.</p>
        </div>
    </footer>
</template>

<style scoped>
#footer {
    border-top: 1px solid white;
    padding-top: 20px;
    background-color: black;
    padding-bottom: 10px;
}
#footer p {
    color: white;
    margin-top: 40px;
    text-align: center;
}
.FootName {
    text-align: center;
}
.cont {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
}
.FootName {
    font-size: 40px;
}
.options {
    width: 220px;
    font-size: 25px;
    padding-bottom: 5px;
    text-align: center;
    transition:  all 1s 0s ease;
}
.options:hover {
    transform: translateY(-10px);
    border-bottom: 1px solid white;
}
.FootName a {
    display: inline;
    border-bottom: 2px solid white;
    transition: all 1s 0s ease-in;
    text-shadow:1px 1px 0 white, -1px -1px 0 white,
              -1px 1px 0 white, 1px -1px 0 white,
              0px 1px 0  white,  0-1px 0 white,
              -1px 0 0 white, 1px 0 0 white;
    color: black;
}
.FootName a:hover {
    border-bottom: 1px solid white;
    color: white;
    text-shadow: none;
}
/* デフォルトのスタイル.つまり英語用のスタイルと同じにすればいい */
.fot .na {
    font-size: 20px;
    color: white;
    padding: 20px;
}
.cont .pry .na {
    padding: 20px;
    font-size: 18px;
} 

@media screen and (max-width:1180px){
    .cont {
        flex-direction: column;
    }
    .fot .na {
        font-size: 25px;
        padding: 20px;
        margin-bottom: 0;
    }
    .options {
        font-size: 20px;
        margin-top: 0;
        margin-bottom: 10px;
    }
    .FootName a:hover {
        display: inline;
        border-bottom: 2px solid white;
        transition: all 1s 0s ease-in;
        text-shadow:1px 1px 0 white, -1px -1px 0 white,
                  -1px 1px 0 white, 1px -1px 0 white,
                  0px 1px 0  white,  0-1px 0 white,
                  -1px 0 0 white, 1px 0 0 white;
        color: black;
    }
    .blockes a:hover {
        transform: scale(1.0);
    }
    .options:hover {
        transform: translateY(0px);
        border-bottom: none;
    }
    .blockes a {
        max-width: none;
    }
}
@media screen and (max-width: 770px) {

    .cont {
        margin-top: 15px;
    }
}
@media screen and (max-width: 500px) {
    .options {
        font-size: 20px;
        margin-top: 0;
        margin-bottom: 1vh;
        margin-top: 1vh;
    }
}
</style>
