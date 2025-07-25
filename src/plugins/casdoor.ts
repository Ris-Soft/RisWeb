import Sdk from 'casdoor-js-sdk';
import { useAppStore } from '@/stores/app';
import router from '@/router';

// 初始化Casdoor SDK配置
export const casdoorConfig = {
  serverUrl: 'https://pass.3r60.top',
  clientId: '4af846898691a1f89ca4',
  appName: 'OfficialWebsite',
  redirectPath: '/callback',
  scope: 'read',
  organizationName: 'organization_kbw1yn',
};

// 使用配置初始化Casdoor SDK
const casdoorSdk = new Sdk(casdoorConfig);



// 登录函数
export const login = () => {
  casdoorSdk.signin_redirect();
};

// 登出函数
export const logout = () => {
  const appStore = useAppStore();
  appStore.clearUser();
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
    const appStore = useAppStore();
    appStore.setToken(token.access_token);
    const parsedToken = casdoorSdk.parseAccessToken(token.access_token);
    console.log('[casdoor] 解析token成功:', parsedToken);
    console.log('[casdoor] 已成功存储access_token');
    router.push('/user');
  } catch (error) {
    console.error('[casdoor] 回调处理异常:', error);
    router.push('/');
  }
};


// 从令牌解析用户信息
export const getUserInfoFromToken = (token: string) => {
  try {

    const parsedToken = casdoorSdk.parseAccessToken(token).payload;
    return parsedToken;
  } catch (error) {
    console.error('Failed to parse user info from token:', error);
    return null;
  }
};


export default casdoorSdk;