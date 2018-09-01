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
      }
    ]
  },
  {
    name: 'Slider',
    icon: 'ti-image',
    children: [
      {
        name: 'Slider',
        path: '/slider/semakanan/list'
      }
    ]
  },
  {
    name: 'Transaksi',
    icon: 'ti-shopping-cart',
    children: [
      {
        name: 'Daftar Transaksi',
        path: '/transaction/list'
      }
    ]
  },
  {
    name: 'History',
    icon: 'ti-menu-alt',
    children: [
      {
        name: 'Daftar History',
        path: '/history/list'
      }
    ]
  },
  {
    name: 'Users',
    icon: 'ti-user',
    children: [
      {
        name: 'Daftar Pengguna',
        path: '/users/list'
      }
    ]
  }
]
