import Sdk from 'casdoor-js-sdk';
import { useAppStore } from '@/stores/app';
import router from '@/router';

// 初始化Casdoor SDK
const casdoorSdk = new Sdk({
  serverUrl: 'https://pass.3r60.top',
  clientId: '4af846898691a1f89ca4',
  appName: 'built-in',
  redirectPath: '/callback',
  scope: 'read',
  organizationName: 'organization_kbw1yn',
});



// 登录函数
export const login = () => {
  casdoorSdk.signin_redirect();
};

// 登出函数
export const logout = () => {
  const appStore = useAppStore();
  appStore.user = null;
  localStorage.removeItem('casdoor_user');
  router.push('/');
};

// 处理回调函数
export const handleCallback = async () => {
  const code = new URLSearchParams(window.location.search).get('code');
  console.log('[casdoor] 回调处理开始，code:', code);
  if (!code) {
    console.error('[casdoor] 缺少code参数，跳转首页');
    router.push('/');
    return;
  }
  try {
    console.log('[casdoor] 开始exchangeForAccessToken');
    const token = await casdoorSdk.exchangeForAccessToken({ code });
    console.log('[casdoor] token获取成功:', token);
    const user = await casdoorSdk.getUserInfo(token.access_token);
    console.log('[casdoor] 用户信息获取成功:', user);
    const appStore = useAppStore();
    appStore.setUser(user);
    console.log('[casdoor] 用户信息已存入store并跳转/user');
    router.push('/user');
  } catch (error) {
    console.error('[casdoor] 回调处理异常:', error);
    router.push('/');
  }
};

export default casdoorSdk;