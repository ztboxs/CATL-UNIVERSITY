/*
 * @Author: Yilin
 * @LastEditors: Yilin
 * @Description: Do not edit
 * @Date: 2022-09-06 18:49:24
 * @LastEditTime: 2022-10-08 19:22:37
 * @FilePath: \CsuftSpiderFront\config\routes.ts
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: '登录',
        path: '/user/login',
        component: './user/Login',
      },

      {
        component: './404',
      },
    ],
  },

  {
    path: '/welcome',
    name: '首页',
    icon: 'home',
    component: './Welcome',
  },

  {
    path: '/grade',
    name: '学生端',
    icon: 'smile',
    component: './Grade',
    routes: [
      {
        name: '勤工俭学查询及申请',
        path: '/grade/all',
        component: './Grade/Basic',
      },
      {
        name: '学年成绩',
        path: '/grade/year',
        component: './Grade/Year',
      },
      {
        name: '学期成绩',
        path: '/grade/term',
        component: './Grade/Term',
      },
      {
        name: '成绩分析',
        path: '/grade/analysis',
        component: './Grade/Analysis',
      },
      {
        name: '等级考试',
        path: '/grade/level',
        component: './Grade/Level',
      },
    ],
  },

  {
    name: '课表',
    icon: 'table',
    path: '/course',
    component: './Course/index',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: '考试',
    icon: 'table',
    path: '/exam',
    component: './Exam',
  },
  {
    component: './404',
  },
];
