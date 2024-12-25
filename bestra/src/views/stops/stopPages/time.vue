<template>
    <div id="busStopName">
       <h1 id="Noriba">一関駅前10番のりば</h1>
		<select class="youbi">
			<option class="heijitsu" selected>平日</option>
			<option class="kyujitsu">土日祝日</option>
		</select>
    </div>
    <div id="Box">
        <ul class="time">
            <div class="timeBox">
                <!-- 平日はhei，土日祝日はkyu，どちらも同じならheikyu -->

                <li><a class="forjikoku hei" href="ichihira-ichinoseki-sehara-0640-weekday"><hr class="kudari"><span class="yukisaki"><p class="line ichihira">一関平泉線</p>中尊寺&nbsp;経由<br/>瀬原&nbsp;行</span><span class="jikoku">&nbsp;&nbsp;6:40</span></a></li>
                <li><a class="forjikoku heikyu" href="ichihira-ichinoseki-sehara-0715-allday"><hr class="kudari"><span class="yukisaki"><p class="line ichihira">一関平泉線</p>中尊寺&nbsp;経由<br/>瀬原&nbsp;行</span><span class="jikoku">&nbsp;&nbsp;7:15</span></a></li>
                <li><a class="forjikoku heikyu" href="ichihira-ichinoseki-aeonmaesawa-0750-allday"><hr class="kudari"><span class="yukisaki"><p class="line ichihira">一関平泉線</p>中尊寺&nbsp;経由<br/>イオン前沢&nbsp;行</span><span class="jikoku">&nbsp;&nbsp;7:50</span></a></li>
                <li><a class="forjikoku heikyu" href="ichihira-ichinoseki-sehara-0935-allday"><hr class="kudari"><span class="yukisaki"><p class="line ichihira">一関平泉線</p>中尊寺&nbsp;経由<br/>瀬原&nbsp;行</span><span class="jikoku">&nbsp;&nbsp;9:35</span></a></li>
                <li><a class="forjikoku heikyu" href="ichihira-ichinoseki-sehara-1025-allday"><hr class="kudari"><span class="yukisaki"><p class="line ichihira">一関平泉線</p>中尊寺&nbsp;経由<br/>瀬原&nbsp;行</span><span class="jikoku">10:25</span></a></li>
                <li><a class="forjikoku heikyu" href="ichihira-ichinoseki-aeonmaesawa-1135-allday"><hr class="kudari"><span class="yukisaki"><p class="line ichihira">一関平泉線</p>中尊寺&nbsp;経由<br/>イオン前沢&nbsp;行</span><span class="jikoku">11:35</span></a></li>
                <li><a class="forjikoku heikyu" href="ichihira-ichinoseki-sehara-1235-allday"><hr class="kudari"><span class="yukisaki"><p class="line ichihira">一関平泉線</p>中尊寺&nbsp;経由<br/>瀬原&nbsp;行</span><span class="jikoku">12:35</span></a></li>
                <li><a class="forjikoku heikyu" href="ichihira-ichinoseki-aeonmaesawa-1325-allday"><hr class="kudari"><span class="yukisaki"><p class="line ichihira">一関平泉線</p>中尊寺&nbsp;経由<br/>イオン前沢&nbsp;行</span><span class="jikoku">13:25</span></a></li>
                <li><a class="forjikoku heikyu" href="ichihira-ichinoseki-sehara-1425-allday"><hr class="kudari"><span class="yukisaki"><p class="line ichihira">一関平泉線</p>中尊寺&nbsp;経由<br/>瀬原&nbsp;行</span><span class="jikoku">14:25</span></a></li>
                <li><a class="forjikoku heikyu" href="ichihira-ichinoseki-sehara-1525-allday"><hr class="kudari"><span class="yukisaki"><p class="line ichihira">一関平泉線</p>中尊寺&nbsp;経由<br/>瀬原&nbsp;行</span><span class="jikoku">15:25</span></a></li>
                <li><a class="forjikoku heikyu" href="ichihira-ichinoseki-aeonmaesawa-1625-allday"><hr class="kudari"><span class="yukisaki"><p class="line ichihira">一関平泉線</p>中尊寺&nbsp;経由<br/>イオン前沢&nbsp;行</span><span class="jikoku">16:25</span></a></li>
                <li><a class="forjikoku hei" href="ichihira-ichinoseki-sehara-1725-weekday"><hr class="kudari"><span class="yukisaki"><p class="line ichihira">一関平泉線</p>中尊寺&nbsp;経由<br/>瀬原&nbsp;行</span><span class="jikoku">17:25</span></a></li>
                <li><a class="forjikoku hei" href="ichihira-ichinoseki-sehara-1825-weekday"><hr class="kudari"><span class="yukisaki"><p class="line ichihira">一関平泉線</p>中尊寺&nbsp;経由<br/>瀬原&nbsp;行</span><span class="jikoku">18:25</span></a></li>
            </div>
        </ul>
    </div>
</template>
<style scoped>
.busStopName {
    display: inline-block;
    text-align: center;
}
#Noriba {
    text-align: center;
}
.youbi {
    display: flex;
    text-align: center;
    margin-bottom: 20px;
    height: 40px;
    width: 50%;
    font-weight: bold;
    font-size: 20px;
    background-color: rgb(194, 194, 194);
    color: rgb(0, 0, 0);
    border-radius: 12px;
    margin-right:auto;
    margin-left: auto;
}
#Box {
    overflow-y: auto; /* 垂直方向にスクロール可能にする */
    height: calc(100vh - 300px);
}
.time {
    padding-left: 0;
    display: block;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 85%;
    margin-right: 20px;
    margin-left: 20px;
}
.time li {
    margin-bottom: 20px;
}
.time li a {
    color: white;
    font-size: 60px;
    width: 100%;
    border: 3px solid black;
    transition: all 1s 0s ease;
    background-color: rgb(63, 63, 63);
    border-radius: 4px;   
}
.yukisaki {
	display: inline-block;
	flex: 5;
    font-size: 18px;
    margin: auto; 
    font-weight: bold;
}

.jikoku {
	flex: 4;
    display: flex;
    align-items: center;
    justify-content: center;
}

.line {
    font-size: 20px;
    margin: 0px;
}

.hei {
    display: flex;
}

.heikyu {
    display: flex;
}

/* 上り下りの色を指定 */
.nobori{
    flex: 0.3;
    color: #7ACCAD;
    background-color: #7ACCAD;
    margin: 0;
}

.kudari{
    flex: 0.3;
    color: #CC7A99;
    background-color: #CC7A99;
    margin: 0;
}

.forjikoku {
    /* display: flex; */
    width: 10%;
}


/* 路線ごとの色を指定 */
.ichihira {
    color: rgb(255, 255, 0);
}

.tsukiichi {
    color:rgb(255, 132, 0);
}


</style>
