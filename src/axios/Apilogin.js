//login Api
import {Get,post} from './index';

export const login = (params) => post('/auth/login',params)  //登录
export const loginByCode = (params) => post('/auth/loginByCode',params)  //验证码登录
export const sendVCode = (params) => post('/auth/sendLoginCode',params)  //验证码登录



export const getCode = (params) => post('register/sendCode',params)  //获取验证码
export const getVCode = (params) => post('register/sendVCode',params)  //获取注册验证码 
export const verifyCode = (params) => post('register/verifyCode',params)  //验证注册验证码
export const HandleRegister1 = (params) => post('register/resetPassword',params)  //修改密码




export const HandleRegister = (params) => post('/register/submit',params)  //注册


//首页api
export const indexGetBox = (params) => Get('index/hotBox',params)
export const getBanner =(params)=>Get('index/carousel',params)
export const getNumber =(params)=>Get('index/statistics',params);
export const getMessage =(params)=>Get('index/noticeData',params);  //获取通知



//每日免费接口
export const getDailyFree = (params)=>Get('freeGoods/info',params)
export const GetLuckDraw = (Params) =>Get('freeGoods/luckDraw',Params)

//左侧列表接口
export const getPublicBoxLeftImg = (params) => Get('/index/aside',params)
//兑换商城的接口
export const getFirexchangeMall = (params) => Get('/exchange/search',params)
export const postExchange = (data) =>post('exchange/buyGoods',data)


//ROLL福利的接口
export const getRolldata = (params) => Get('/rolls/list',params)
export const getRollFuli = (id) => Get('rolls/info/'+id)
export const postRollJon =(data)=>post('rolls/join',data);  //参与roll
export const postPassword =(data)=>post('rolls/checkRollPwd',data)  //输入密码参与


//常见问题接口
export const getQuestion =(params) =>Get('')

//csgo开箱页面展示
export const getCsgoBox =(params) => Get('csgo/boxes',params)
export const GetBoxShowing=(id) =>Get('csgo/'+id)



//个人中心页面接口
export const GetPeople = (params) =>Get('userCenter/pack',params)
export const GetProplePrice =(params) =>Get('userCenter/info',params)  //个人中心
export const postGetGood =(data) =>post('userCenter/takeBackGoods',data)  //取回商品
export const postSellGood=(data) =>post('userCenter/sellBackGoods',data)  //出售
export const userCenterCoupons=(data) =>Get('userCenter/coupons',data)  //出售


//提交充值
export const PostPayalipy =(data) =>post('pay/aliPay',data)
export const GetpayqrCode=(id)=>Get('pay/qrCode'+id,)


//推广页面
export const promotionmyInfo =()=>Get('promotion/myInfo',);  //我的推广信息
export const fetchPrize =(data)=>post('promotion/fetchPrize',data);  //领取奖励


//抽奖页面
export const everyDayPrize=(data)=>post('everyDayPrize/open',data)  //点击抽奖
export const everyDayPrizeList=()=>Get('everyDayPrize/list',)  //  //获取抽奖的所有内容
export const allRecord=()=>Get('everyDayPrize/allRecord',)  //综合中奖信息
export const recordAll=()=>Get('everyDayPrize/record',)  //综合中奖信息
export const getCodeNumber=()=>Get('everyDayPrize/list',)  //显示几次抽奖信息


