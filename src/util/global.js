/*
 * @Descripttion: 
 * @Author: sunyuanxin
 * @Date: 2020-09-14 09:21:18
 */
import router from '@/router'

/**
 * 附件服务器地址
 */
export const exampUrl = 'http://pms6.sh.unicom.local:10045/';
// export const exampUrl = 'http://10.125.193.13:10048/'; // 天宫地址

/**
 * 手动拼接链接服务器地址
 */
export const baseUrl = process.env.OPEN_OFFICIAL ? 'http://pms6.sh.unicom.local:10047/' : 'http://pms6.sh.unicom.local:10045/';
// export const baseUrl = 'http://10.125.193.13:10048/'; // 天宫地址

/**
 * 访问workflow路径
 */
export const workflowPath = process.env.OPEN_OFFICIAL ? '/workflowzs' : '/workflow';

/**
 * 访问contentManager路径
 */
export const contentManagerPath = process.env.OPEN_OFFICIAL ? '/contentManagerzs' : '/contentManager';

/**
 * @description: 路由跳转打开新页面
 * @param {*} path 路由地址
 * @param {*} query 路由参数，默认{}
 * @return {*}
 */
export const windowOpen = (path, query = {}) => {
  let linkto = router.resolve({
    path,
    query,
  })
  window.open(linkto.href, "_blank");
}
