import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import CardInfo from "../views/CardInfo.vue";
import WorkShopView from "@/views/WorkShopView.vue";
import HeroMemberView from "@/views/HeroMemberView.vue";
import OfficialProductList from "@/views/OfficialProductList.vue";
import CardListbySeries from "@/views/Card List by Series.vue";
// import MainPage from "@/views/MainPage.vue";
import AccountPage from "@/views/AccountPage.vue";
import DailyCard from "../views/DailyCard.vue";
import Faq from "../views/Faq.vue";
import FaqInfo from "../views/FaqInfo.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
// import LoginHomePageView from "@/views/LoginHomepage.vue";
import CardSeries from "@/views/CardSeries.vue";
import Carddeck from "../components/card-deck/Carddeck.vue";
import AddArticle from "../views/AddArticle.vue";
import Social from "../views/Social.vue";
import MyCardView from "../views/MyCardView.vue";
import Findcard from "../components/Mycard/find-card.vue";
import Remitcard from "../components/Mycard/remit-card.vue";
import RemitCardNf from "../components/Mycard/remit-cardnf.vue";
import AuthSuccess from "../views/AuthSuccess.vue";
import MyArticle from "../views/MyArticle.vue";
import Warning from "../components/Mycard/warning.vue";
import Delete from "../components/Mycard/delete.vue";
import deckPage from "../components/card-deck/deck-page.vue";
import AddPostDeck from "../components/card-deck/AddPostDeck.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      // path: card/:id
      path: "/card-info",
      name: "card-info",
      component: CardInfo,
    },
    {
      path: "/workshop",
      name: "workshop",
      component: WorkShopView,
    },
    {
      path: "/hero-member",
      name: "hero-member",
      component: HeroMemberView,
    },
    {

      path: "/products",
      name: "products",
      component: OfficialProductList,
    },
    {
      path: "/series",
      name: "series",
      component: CardListbySeries,
    },
    {
      path: '/daily-card',
      name: 'daily-card',
      component: DailyCard
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      // path: '/faq/:id',
      path: '/faq-info',
      name: 'faq-info',
      component: FaqInfo
    },
    // {
    //   path: "/main-page",
    //   name: "main-page",
    //   component: MainPage,
    // },
    {
      path: "/user",
      name: "user",
      component: AccountPage,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    // {
    //   path: "/login-homepage",
    //   name: "login-homepage",
    //   component: LoginHomePageView,
    // },
    {
      path: "/card-series",
      name: "card-series",
      component: CardSeries
    },
    {
      path: '/social/:post_code', 
      component: Carddeck,        
    },
    {
      path: "/add-article",
      name: "add-article",
      component: AddArticle
    },
    {
      path: "/social",
      name: "social",
      component: Social
    },
    {
      path: "/mycard",
      name: "mycard",
      component: MyCardView
    },
    {
      path: "/findcard",
      name: "findcard",
      component: Findcard,
    },
    {
      path: "/remitcard",
      name: "remitcard",
      component: Remitcard,
    },
    {
      path: "/remitcardnf",
      name: "remitcardnf",
      component: RemitCardNf,
    },
    {
      path: "/deck",
      name: "deck",
      component: MyCardView,
    },
    {
      path: '/auth-success',
      name: 'auth-success',
      component: AuthSuccess
    },
    {
      path: "/social/my",
      name: "my-article",
      component: MyArticle
    },
    {
      path: "/warning",
      name: "warning",
      component: Warning
    },
    {
      path: "/delete",
      name: "delete",
      component: Delete
    },
    {
      path: "/deckPage/:deck_id",
      name: "deckPage",
      component: deckPage
    },
    {
      path: "/add/:deck_id",
      name:"AddPostDeck",
      component:AddPostDeck
    },
  ],
});

export default router;
