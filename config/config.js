export default {
  singular: true,
  routes: [{
    path: '/',
    component: '../layout',
    routes: [
      {
        path: '/',
        component: './index'
      },
      {
        path: 'helloworld',
        component: './helloworld'
      },
      {
        path: 'puzzlecards',
        component: './puzzlecards'
      },
      {
        path: 'cards',
        component: './cards'
      },
      {
        path: '/dashboard',
        routes: [
          { path: '/dashboard/card', component: 'Dashboard/Card' },
          { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
          { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
          { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
        ]
      },
    ]
  }],
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      locale: {
        enable: true,
      },
    }],    
  ],
  proxy: {
    '/dev': {
      target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/3',
      changeOrigin: true,
    },
    },
};
