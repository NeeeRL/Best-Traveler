<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Papa from 'papaparse';



</script>
<template>
<div id="mainTable">    
    <h3>小学生は半額，小学生未満は無料<br/>Half price for elementary school students, free for pre-elementary school students</h3>
    <div class="tables">
        <table>
            <thead>
                <tr>
                    <!-- <th>出発地</th> -->
                    <th>停車バス停</th>
                    <th>停車時刻</th>
                    <th>運賃</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td><!--バス停名--></td>
                        <td><!--出発時-->:<!--出発分 < 10 ? '0' + row.出発分 : row.出発分--></td>
                        <td><!--運賃 ? 運賃 : ''--></td>
                    </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<style scoped>
#mainTable {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* セル内の文字の周りに幅をもたせ,中央寄せ */
table th,
table td {
    padding: 8px;
    text-align: center;
}

/* タイトルの色 */
table th {
    background-color: #6f7dff;
}

/* 表のセルごとのborder */
table,
table th,
table td {
    border: 1px solid black;
    border-collapse: collapse;
}

table {
    width: 50vw;
    font-size: 30px;
    font-family: "游ゴシック体"
}
@media screen and (max-width: 1180px) {
    table {
        font-size: 25px;
        width: 80vw;
    }
}

@media screen and (max-width: 480px) {
	/* 480px以下に適用されるCSS（スマホ用） */
    table {
        font-size: 18px;
        width: 85vw;
    }
}
</style>