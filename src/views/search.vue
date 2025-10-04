<script>
  import search from '../data/search.json'
  export default {
    data() {
      return {
        keyword: '',
        stopsData: search
      };
    },
    methods: {
      filteredLines(stop) {
        // stop.linesが存在するか確認してからfilterを実行
        if (stop.lines) {
          return stop.lines.filter(line =>
            line.name.includes(this.keyword) ||
            line.nameen.includes(this.keyword) ||
            line.pas.includes(this.keyword) ||
            line.read.some(reading => reading.includes(this.keyword))
          );
        }
        return []; // linesがない場合は空の配列を返す
      }
    }
  };
</script>

<template>
  <div id="search-container">
    <input type="text" v-model="keyword" id="searchInput" placeholder="Search">
    <ul id="itemList">
      <li v-for="stop in stopsData" :key="stop.stops">
        <ul>
          <li v-for="line in filteredLines(stop)" :key="line.id">
            <RouterLink :to="stop.stops + '/' + line.pas" class="rout">
              <p class="en">{{ line.nameen }}</p>
              <p class="ja">{{ line.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </li>
      <li id="noResult" :class="{'search-box-none': keyword === ''}">
        <p style="color: black;">見つかりませんか？スペルをお確かめください。<br/>Can't find it? Check your spelling.</p>
      </li>
    </ul>
  </div>
</template>
    
<style>
.search-box-none {
    display: none;
}
#search-container {
    margin-bottom: 20px;
    max-width: auto;
    text-align: center;
}
#Maincontainer {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
#searchInput {
    width: 50vw;
    padding: 10px;
    border: 4px solid black;
    border-radius: 4px;
    background-color:  rgb(255, 255, 255);
    color: black;
    outline: none;
    font-size: 40px;
}

#itemList {
    list-style-type: none;
    padding: 0;
    min-height: 100vh;
}

.rout{
    background-color: rgb(255, 255, 255);
    color: black;
    width: 30vw;
    padding: 3px;
    border: 3px solid black;
    border-radius: 4px;
    font-size: 30px;
    margin-bottom: 20px;
}
.rout:hover{
    opacity: 0.7;
}


.en {
    padding-top: 5px;
    font-size: 20px;
    text-align: center;
    padding: 0 auto;
    margin: 0 auto;
}
.ja {
    margin-top: 0;
    margin-bottom: 5px;
}






@media screen and (max-width: 1180px) {
	/* 959px以下に適用されるCSS（デカめのタブレット用） */
    .rout {
        width: 70vw;
    }
    .rout:hover{
    opacity: 1;
}
    .rout {
        font-size: 20px;
    }
    #itemList {
        min-height: 100vh;
    }
}
@media screen and (max-width: 710px) {
    .rout {
        font-size: 16px;
    }
}
@media screen and (max-width: 480px) {
	/* 480px以下に適用されるCSS（スマホ用） */
    /*.sp {
        display: block;
    }*/
    .ja {
        font-size: 25px;
    }
}
</style>