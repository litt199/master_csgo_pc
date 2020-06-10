//login Api
import {Get,post} from './index';

//开箱接口
export const GetBasisBox = (accc) => Get('csgo/'+accc)//进入开箱页面
export const GetOpenBox = (params) => post('/openBox/luckDraw',params)//开箱

//个人中心接口
export const ChangeSteamLink = (params) => post('/userCenter/saveTransactionUrl',params)//更改交易链接
export const PersonalBag = (params) => Get('/userCenter/pack',params)//个人背包