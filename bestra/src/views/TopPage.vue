<template>
    <!--内容上はここから始まる-->
    <div class="welcome">
        <h1>Welcome&nbsp;to&nbsp;<span class="appNameTitle">&quot;BEST&nbsp;TRAVELER.&quot;</span></h1>
    </div>
        <h2>当サイト設立の経緯</h2>
        <p>
            &nbsp;&nbsp;突然ですが、最後にバスに乗ったのはいつですか？<br/>
            &nbsp;&nbsp;近年はドライバー不足などにより、地方での公共交通機関の本数は年々少なくなってきています。<br/>
            &nbsp;&nbsp;しかし、バスがなくなると様々な問題が起こると考えられます。<br/>
            &nbsp;&nbsp;高齢者ドライバーが無理をしてでも自動車を運転せざるを得なくなり、交通事故が起こってしまうかもしれません。<br/>
            &nbsp;&nbsp;観光客が、移動手段がないという理由で観光を諦めるかもしれません。<br/>
            &nbsp;&nbsp;このような問題を解決するために、 BEST TRAVELER. は開発されました。                    
        </p>
    
    <div>
        <h2>当サイト機能のご紹介</h2>
        <div class="kinou">
            <h3>①バス時刻表がどこでも見られる！</h3>
            <p>
                &nbsp;&nbsp;基本的にバス停の時刻表というのは、そのバス停に行かなければ見ることはできませんが、当サイトならいつでもどこでもバス停ごとの時刻表が閲覧可能。<br/>
                &nbsp;&nbsp;前のバス・後のバスの時刻も見ることができるので、外出の計画がたてやすいです。
            </p>
            <h3>②バス停の写真があるから迷わない！</h3>
            <p>
                &nbsp;&nbsp;あなたはバス停の場所で迷ったことはありませんか？当サイトをご利用いただくことで、もうバス停で迷わなくなります！<br/>
                &nbsp;&nbsp;バス停は基本的にのぼりとくだりで2箇所あるため、地図を確認してもわからないことがあります。<br/>
                &nbsp;&nbsp;しかし、当サイトならバス停周辺の写真があるため、目立たないバス停でも見つけやすいです。
            </p>
            <h3>③周辺の施設がわかる！</h3>
            <p>
                &nbsp;&nbsp;バス停に思いの外早く到着してしまったとき、ずっとバス停の前で立っているのは疲れますよね？<br/>
                &nbsp;&nbsp;そんなとき、当サイトでバス停トップページをご覧いただくと、周辺のおすすめスポットを紹介してくれるので、そこで時間を潰せたり、バス停周辺で新しいであいがあったりするかもしれません。
            </p>
        </div>
    </div>
	<RouterLink to="/ichihira/top">
    <div class="jump">stops</div>
	</RouterLink>
</template>
<style scoped>
p,h2,h3 {
    font-family: メイリオ;
}

p {
    padding-bottom: 10px;
}

h2 {
    text-align: center;
    text-decoration:underline;
    text-decoration-color: #6f7dff;
}

.welcome {
    font-weight: bold;
    animation: slideIn 1s ease-out;
    background: linear-gradient(transparent 70%, #99a3ff 70%);
    text-align: center;
    
  }

  span {
    display:inline-block;
  }
  
  @keyframes slideIn {
    0% {
      transform: translateY(200%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

.kinou {
    background: #d5daff88;
    padding: 20px;
    border: 1px solid #99a3ff;
}

.jump {
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    width: 200px;
    margin-top: 50px;
    background:#6f7dff;
    padding: 10px;
    border-radius: 20px;
}


</style>
