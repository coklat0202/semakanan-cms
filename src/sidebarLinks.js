export default [
  {
    name: 'Merchants',
    icon: 'ti-star',
    children: [
      {
        name: 'Daftar Merchants',
        path: '/merchants/list'
      },
      {
        name: 'Daftar Merchant Teratas',
        path: '/merchants/top/list'
      },
      {
        name: 'Daftar Merchant Populer',
        path: '/merchants/pop/list'
      },
      {
        name: 'Daftar Merchant Open',
        path: '/merchants/open/list'
      },
      {
        name: 'Daftar Merchant Close',
        path: '/merchants/close/list'
      }
    ]
  },
  {
    name: 'Slider',
    icon: 'ti-image',
    children: [
      {
        name: 'Slider seMakanan',
        path: '/slider/semakanan/list'
      },
      {
        name: 'Slider Home',
        path: '/slider/home/list'
      }
    ]
  },
  {
    name: 'Settings',
    icon: 'ti-settings',
    children: [{
      name: 'Category UKM',
      path: '/settings/category_ukm'
    }],
  },
  {
    name: 'Dashboard',
    icon: 'ti-panel',
    collapsed: false,
    children: [{
      name: 'Overview',
      path: '/admin/overview'
    },
    {
      name: 'Stats',
      path: '/admin/stats'
    }]
  },
  {
    name: 'Components',
    icon: 'ti-package',
    children: [{
      name: 'Buttons',
      path: '/components/buttons'
    },
    {
      name: 'Grid System',
      path: '/components/grid-system'
    },
    {
      name: 'Panels',
      path: '/components/panels'
    },
    {
      name: 'Sweet Alert',
      path: '/components/sweet-alert'
    },
    {
      name: 'Notifications',
      path: '/components/notifications'
    },
    {
      name: 'Icons',
      path: '/components/icons'
    },
    {
      name: 'Typography',
      path: '/components/typography'
    }]
  },
  {
    name: 'Forms',
    icon: 'ti-clipboard',
    children: [{
      name: 'Regular Forms',
      path: '/forms/regular'
    },
    {
      name: 'Extended Forms',
      path: '/forms/extended'
    },
    {
      name: 'Validation Forms',
      path: '/forms/validation'
    },
    {
      name: 'Wizard',
      path: '/forms/wizard'
    }
    ]
  },
  {
    name: 'Table List',
    icon: 'ti-view-list-alt',
    collapsed: true,
    children: [{
      name: 'Regular Tables',
      path: '/table-list/regular'
    },
    {
      name: 'Extended Tables',
      path: '/table-list/extended'
    },
    {
      name: 'Paginated Tables',
      path: '/table-list/paginated'
    }
    ]
  },
  {
    name: 'Maps',
    icon: 'ti-map',
    children: [{
      name: 'Google Maps',
      path: '/maps/google'
    },
    {
      name: 'Full Screen Maps',
      path: '/maps/full-screen'
    },
    {
      name: 'Vector Maps',
      path: '/maps/vector-map'
    }
    ]
  },
  {
    name: 'Charts',
    icon: 'ti-gift',
    path: '/charts'
  },
  {
    name: 'Calendar',
    icon: 'ti-calendar',
    path: '/calendar'
  },
  {
    name: 'Pages',
    icon: 'ti-gift',
    children: [{
      name: 'User Page',
      path: '/pages/user'
    },
    {
      name: 'Timeline Page',
      path: '/pages/timeline'
    },
    {
      name: 'Login Page',
      path: '/login'
    },
    {
      name: 'Register Page',
      path: '/register'
    },
    {
      name: 'Lock Page',
      path: '/lock'
    }
    ]
  }
]
