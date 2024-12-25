<template>
	   <body>
        <header>
            <div id="HeaderItems">
                <div id="container">
						<RouterLink to="/">
	                    <img src="#" id="icons" alt="ホーム画面のアイコン">
							<!--リンクを入れる。ホーム画面への-->
    	                <h1 class="Name no-select"><span class="n">BEST<span class="sp"></span><span class="gyou">&nbsp;</span>TRAVELER.</span><span id="version">&nbsp;v.1.0.0</span></h1>
						</RouterLink>
                </div> 
                
            </div>
        </header>
    </body>
    <!--これらはハンバーガーメニューだけど、これってfixedで固定しているだけだからヘッダーだと思ってくれ-->
    <div id="hamburger-menu">
        <input type="checkbox" id="menu-btn-check">
        <label for="menu-btn-check" class="menu-btn"><span></span></label>
        <!--ここからメニュー-->
        <div id="menu-content">
            <ul>
                <li style="color: white;">
                    <h1 class="menu">メニュー</h1>
                </li>
                <li class="ite blockes">
                    <RouterLink class="house" to="/">ホーム</RouterLink>
                </li>
                <li class="ite blockes">
                    <a href="contact.html" class="contact">お問い合わせ</a>
                </li>
                <!-- <li class="ite blockes">
                    <a href="Line.html" class="line">路線選択</a>
                </li> -->
                <li class="ite blockes">
                    <a href="Search.html" class="site">検索</a>
                </li>
                <li class="ite blockes">
                    <a href="Pri.html" class="site">プライバシーポリシー</a>
                </li>
                <li class="ite blockes">
                    <a href="#">ご意見箱<span id="ToGoOther">※別サイトへ移動</span></a>
                </li>
            </ul>
            <div id="box">
                <select id="mySelect" onchange="redirectToSite()">
                    <option value="" style="display: none;">Language</option>
                    <option value="TopPage.html">日本語</option>
                    <!-- <option value="TopPageEn.html">English</option> -->
                </select>
            </div>
        </div>
        <!--ここまでメニュー-->
    </div>
</template>

<style scoped>
#HeaderItems #container .Name .n {
    text-shadow:1px 1px 0 white, -1px -1px 0 white,
              -1px 1px 0 white, 1px -1px 0 white,
              0px 1px 0  white,  0-1px 0 white,
              -1px 0 0 white, 1px 0 0 white;
    color: black;
    font-size: 50px;
    margin: 0 auto;
    transition: all 1s 0s ease-in;
}
#HeaderItems #container .Name .n:hover {
    color: white;
    text-shadow: none;
}
.Name {
    margin: 0 auto;
}
/*px指定あり*/
header {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    background-color: black;
    width: 100%;
    position: fixed; /* ヘッダーを固定する */
    top: 0; /* 上部から配置の基準位置を決める */
    left: 0; /* 左から配置の基準位置を決める */
    z-index: 70; 
}
#version {
    font-size: 20px;
    color: white;
}
/*px指定あり。浮いたヘッダーの文としてmarginをとる。*/
#menu-content .MENU {
    margin: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: white;
    position: relative;
    padding: 0.5em 1.5em;
    border-top: solid 2px white;
    border-bottom: solid 2px white;
}
#menu-content .MENU:before, #menu-content .MENU:after{
    content: '';
    position: absolute;
    top: -10px;
    width: 2px;
    height: -webkit-calc(100% + 20px);
    height: calc(100% + 20px);
    background-color: white;
}
#menu-content .MENU:before {left: 10px;}
#menu-content .MENU:after {right: 10px;}
#menu-content .MENU {

    padding: 0;
}
/*headerの中身*/
#HeaderItems {
    display: flex;
    justify-content: space-between;
}
#container {
    display: flex;
    align-items: center;
    justify-content: center;
}
/*px指定あり*/
#icons {
    max-width: 80px;
    height: 80px;
    margin-left: 30px;
    margin-right: 15px;
}

/*ボタン。ハンバーガーメニューのこと。*/
.menu-btn {
    position: fixed;
    top: 8px;
    right: 10px;
    height: 60px;
    width: 60px;
    z-index: 90;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    height: 70px;
    width: 70px;
    justify-content: center;
    align-items: center;
    z-index: 100;
    background-color: black;
    border-radius: 50%;
    transition: all 1s;
    cursor: pointer;
    transition: all 0.5 0s ease;
}
/* .menu-btn:hover {
    border: 1px solid white;
} */

.menu-btn span,
.menu-btn span:before,
.menu-btn span:after {
    content: '';
    display: block;
    height: 3px;
    width: 30px;
    border-radius: 3px;
    background-color: white;
    position: absolute;
}
.menu-btn span:before {
    bottom: 8px;
}
.menu-btn span:after {
    top: 8px;
}
.menu-btn span:after {
    top: 8px;
}
#menu-btn-check:checked ~ .menu-btn {
    border: 1px solid black;
}
#menu-btn-check:checked ~ .menu-btn span {
    background-color: black;/*メニューオープン時は真ん中の線を透明にする*/
}
#menu-btn-check:checked ~ .menu-btn span::before {
    bottom: 0;
    transform: rotate(45deg);
}
#menu-btn-check:checked ~ .menu-btn span::after {
    top: 0;
    transform: rotate(-45deg);
}
#menu-btn-check {
    display: none;
}
/*ハンバーガーの内容*/
.menu {
    text-align: center;
    font-size: 60px;
    margin-top: 20px;
    margin-bottom: 10px;

}
#menu-content {
    display:flex;
    flex-direction: column;
    justify-content: space-between;

    width: 50%;
    height: 100%;
    position: fixed;
    overflow-y: auto; /* 垂直方向にスクロール可能にする */
    z-index: 80;
    background-color: black;
}
#menu-content ul {
    padding: 0px 10px 0;
    margin-top: 0;
}
#menu-content ul li {
    margin-bottom: 15px;
    list-style: none;
}
#menu-content ul li a {
    border-bottom: solid 1px white;
    margin-bottom: 0;
    display: block;
    width: 100%;
    font-size: 40px;
    box-sizing: border-box;
    color: white;
    text-decoration: none;
    padding: 9px 15px 10px 0;
    position: relative;
}
#ToGoOther {
    font-size: 20px;
}
/*下のwidthとleftの値を足して１００％にすること*/
#menu-content {
    width: 50%;
    height: 100%;
    position: fixed;
    overflow-x: hidden;
    top: 0px;
    left: 100%;/*leftの値を変更してメニューを画面外へ*/
    z-index: 90;
    background-color: black;
    overflow-y: auto;
    transition: all 0.5s;/*アニメーション設定*/
    text-align: center;
} 
#menu-btn-check:checked ~ #menu-content {
    left: 50%;/*メニューを画面内へ*/
}
.langes {
    border-bottom: 1px solid white;
    padding-bottom: 20px;

}
.langes #siteSelector{
    background-color: black;
    text-align: center;
    color: white;
    border: none;
    font-size: 40px;
}
/* 初期オプション「Language」を非表示にする */
#siteSelector option[value=""] {
    display: none;
}

.blockes a{
    max-width: 100%;
    transition: all 0.5s 0.1s ease;
}
.blockes a:hover{
    transform: scale(1.2);
}
#box select{
    background-color: black;
    color: white;
    text-align: center;
    width: 90%;
    border: 1px solid white;
    font-size: 40px;
    height: 70px;
    margin-bottom: 20px;
    box-shadow: 0px 1px 20px white;
}
#box select:hover {
    cursor: pointer;
    box-shadow: 0px 1px 30px white;/*                                                                                        */

}

@media screen and (max-width: 1000px) {
    #version {
        display: none;
    }
    .menu-btn:hover {
        background-color: black;
    }
    #icons {
        width: 65px;
        height: 65px;
        margin-right: 0;
    }
    .Name {
        font-size: 30px;
    }
    #HeaderItems
 #container .Name .n {
        font-size: 30px;
        margin-left: 10px;
    }
    #HeaderItems
 #container .Name .n:hover {
        text-shadow:1px 1px 0 white, -1px -1px 0 white,
                  -1px 1px 0 white, 1px -1px 0 white,
                  0px 1px 0  white,  0-1px 0 white,
                  -1px 0 0 white, 1px 0 0 white;
        color: black;
        border-bottom: 1px solid white;
    }
    .menu-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        top: 5px;
        right: 0px;
        width: 65px;
        height: 65px;
    }
    .menu-btn:hover {
        background-color: black;
        border: none;
    }
    #menu-content {
        width: 100%;
        
    } 
    #menu-btn-check:checked ~ #menu-content {
        left: 0%;/*メニューを画面内へ*/
    }
    
    #menu-content .MENU {
        font-size: 40px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    #menu-content ul li a {
        font-size: 40px;
    }
    #ToGoOther {
        display: none;
    }
}
@media screen and (max-width: 500px){
    #menu-content ul li a {
        font-size: 30px;
    }
}
</style>
