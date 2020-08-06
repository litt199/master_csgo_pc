//login Api
import {Get,post} from './index';

//开箱接口
export const GetBasisBox = (accc) => Get('csgo/'+accc)//进入开箱页面
export const GetOpenBox = (params) => post('/openBox/luckDraw',params)//开箱

//个人中心接口
export const ChangeSteamLink = (params) => post('/userCenter/saveTransactionUrl',params)//更改交易链接
export const PersonalBag = (params) => Get('/userCenter/pack',params)//个人背包
export const postGetGood1 =(data) =>post('userCenter/batchTakeGoods',data)  //取回商品
export const postSellGood1=(data) =>post('userCenter/batchSellGoods',data)  //出售

//推广活动接口
export const GetRankList = ()=>Get('/promotion/ranking')//活动排行榜
export const GetRankPrize = (params)=>Get('/promotion/list',params)//获取奖品
export const JoinActi = (params)=>post('/promotion/join',params)//参加共享活动
export const GetPrize = (params)=>post('/promotion/fetchRankPrize',params)//领取奖励