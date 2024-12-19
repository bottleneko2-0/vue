import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCardSeriesStore = defineStore("card-series", () => {
  
  const serieslastReleaseTime = ref("");
  const seriesCode = ref("");
  const seriesInfo = ref("");
  const seriesCardList = ref([]);
  const seriesCardListLength = ref(0);

  // リコリス測試用資料
  const seriesTestData = ref("");

  // 獲取指定系列資訊;
  const getTestSeries = async (seriesId) => {
    try {
      const res = await axios.get(`/api/series`);
      // console.log(res.data);
      res.data.find((series) => {
        if (series.id === seriesId) {
          seriesTestData.value = series;
        }
      });
      if (seriesTestData.value.sellAt == undefined) {
        console.log("重新獲取");
        getTestSeries(seriesId);
      } else {
        serieslastReleaseTime.value =
          seriesTestData.value.sellAt[
            seriesTestData.value.sellAt.length - 1
          ];
        seriesCode.value = seriesTestData.value.code.join(",");
      }
    } catch (err) {
      console.log(err, "系列獲取失敗");
    }
  };

  // 獲取指定系列所有卡牌資訊;
  const getSeriesCards = async (seriesId) => {
    try {
      const seriesRes = await axios.get(`http://localhost:3000/api/series`);
      const selectedSeries = seriesRes.data.find((series) => {
        return series.id == seriesId;
      })
      // console.log(selectedSeries);
      seriesInfo.value = selectedSeries;
      // console.log(seriesInfo.value);
      
      const res = await axios.get(`http://localhost:3000/api/series/${seriesId}`);
        // console.log(res.data);
      res.data.forEach((card) => {
        if (card.type === "キャラ") {
          card.typeTranslate = "角色";
        } else if (card.type === "イベント") {
          card.typeTranslate = "事件";
        } else if (card.type === "クライマックス") {
          card.typeTranslate = "名場";
        }
      });
      seriesCardList.value = res.data;
      seriesCardListLength.value = seriesCardList.value.length;
      // console.log(seriesCardList.value);
      // console.log("獲取完卡片");
    } catch (err) {
      console.log(err);
    }
  };

  // 存取最後瀏覽的系列
  const saveLastViewSeries = (seriesId) => {
    if (seriesCardList.value) {
      localStorage.setItem("lastViewSeriesId", seriesId);
    }
  };

  // 獲取最後瀏覽的系列
  const getLastViewSeries = async (seriesId) => {
    if (seriesId) {
      await getSeriesCards(seriesId);
    }else if(seriesCardList.value.length === 0) {
      const lastViewSeriesId = localStorage.getItem("lastViewSeriesId");
      if(lastViewSeriesId){
        await getSeriesCards(lastViewSeriesId);
      }
    }
  };

  return {
    serieslastReleaseTime,
    seriesCode,
    seriesCardList,
    getSeriesCards,
    saveLastViewSeries,
    getLastViewSeries,
    seriesTestData,
    getTestSeries,
    seriesInfo,
    seriesCardListLength
  };
});