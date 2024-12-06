import { ref, computed } from "vue";
import { defineStore, storeToRefs } from "pinia";
import router from "../router/index";
import { useDeckMakeStore } from "./deck-make";

export const useCardInfoStore = defineStore("card-info", () => {
  const deckMakeStore = useDeckMakeStore();
  const { selectedCards } = storeToRefs(deckMakeStore);

  const cardInfoDisplay = ref(false);
  const cardInfo = ref(null);
  const cardIndex = ref(null);

  const leftDisabled = ref(null);
  const rightDisabled = ref(null);

  const getCardInfoAndShow = (card) => {
    cardInfo.value = card;
    // console.log(cardInfo.value);
    // console.log("成功傳入卡片資訊");
    console.log("成功調用getCardInfoAndShow");
  
    cardInfoDisplay.value = true;
    getCardInfoIndex();
  };

  // 獲取目前CardInfo顯示卡片在牌組製作陣列中的位置
  const getCardInfoIndex = () => {
    cardIndex.value = selectedCards.value.findIndex((card) => {
      return card.id === cardInfo.value.id;
    });
    
    console.log(cardIndex.value);
    if(cardIndex.value == -1){
      setTimeout(() => {
        leftDisabled.value = true;
        console.log("左按鈕被觸發:" + leftDisabled.value);
        rightDisabled.value = true;
        console.log("右按鈕被觸發:" + rightDisabled.value);
      },0)
    }
    
    if(cardIndex.value == 0){
      leftDisabled.value = true;
      rightDisabled.value = false;
    }else if(cardIndex.value === selectedCards.value.length - 1){
      leftDisabled.value = false;
      rightDisabled.value = true;
    }else if(cardIndex.value != 0 && cardIndex.value != selectedCards.value.length - 1){
      leftDisabled.value = false;
      rightDisabled.value = false;
    }
    
  };

  // 切換顯示的卡片
  const changeCardInfoCard = (direction) => {
    getCardInfoIndex();
    if (cardIndex.value != -1) {
        console.log(cardIndex.value + "不等於" + -1);
      if (direction == "left") {
        rightDisabled.value = false;
        if (cardIndex.value > 0) {
          cardInfo.value = selectedCards.value[cardIndex.value - 1];
        }
      } else if (direction == "right") {
        leftDisabled.value = false;
        if (cardIndex.value < selectedCards.value.length - 1) {
          cardInfo.value = selectedCards.value[cardIndex.value + 1];
        }
      }
    }
  };

  return {
    cardInfoDisplay,
    cardInfo,
    getCardInfoAndShow,
    getCardInfoIndex,
    changeCardInfoCard,
    leftDisabled,
    rightDisabled,
  };
});
