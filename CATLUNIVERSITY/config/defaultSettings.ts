/*
 * @Author: Yilin
 * @LastEditors: Yilin
 * @Description: Do not edit
 * @Date: 2022-09-06 18:49:24
 * @LastEditTime: 2022-10-07 17:16:37
 * @FilePath: \CsuftSpiderFront\config\defaultSettings.ts
 */
import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  primaryColor: '#1890ff',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  pwa: false,
  logo: '/logo.svg',
  headerHeight: 48,
  splitMenus: true,
  title: 'CATL UNIVERSITY',
};

// {
//   navTheme: 'light',
//   primaryColor: '#1890ff',
//   layout: 'top',
//   contentWidth: 'Fluid',
//   fixedHeader: true,
//   fixSiderbar: true,
//   pwa: false,
//   logo: '/logo.svg',
//   headerHeight: 48,
//   splitMenus: true,
//   title: 'CSUFT SPIDER',
// };
// {
//   "navTheme": "light",
//   "primaryColor": "#1890ff",
//   "layout": "top",
//   "contentWidth": "Fixed",
//   "fixedHeader": true,
//   "fixSiderbar": true,
//   "pwa": false,
//   "logo": "/logo.svg",
//   "headerHeight": 48,
//   "splitMenus": false
// }
export default Settings;
