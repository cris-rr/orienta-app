const fakeUser = {
  id: 1,
  name: 'John',
  fullName: 'John Knight',
  email: 'john.mckinley@examplepetstore.com',
  initials: 'JK',
  role: 3
}

const fakeCompanion  = {
  id: 1,
  name: 'Frank',
  fullName: 'Frank Ruiz',
  email: 'john.mckinley@examplepetstore.com',
  initials: 'JM'
}

const users = [
  {
    id: 1,
    name: 'John',
    fullName: 'John Knight',
    email: 'john.mckinley@examplepetstore.com',
    phone: '962888551',
    initials: 'JK',
    sector: 1,
    role: 3
  },
  {
    id: 2,
    name: 'Frank',
    fullName: 'Frank Ruiz',
    email: 'frank.ruiz@gmail.com',
    phone: '962888551',
    initials: 'FR',
    sector: 1,
    role: 1
  },
  {
    id: 3,
    name: 'Andres',
    fullName: 'Andres Flores',
    email: 'andres.flores@gmail.com',
    phone: '962888551',
    initials: 'AF',
    sector: 1,
    role: 1
  },
  {
    id: 4,
    name: 'Martin',
    fullName: 'Martin Caceres',
    email: 'mcaceres@aol.com',
    phone: '962888551',
    initials: 'MC',
    sector: 1,
    role: 1
  },
  {
    id: 5,
    name: 'Cristhians',
    fullName: 'Cristhians Ruiz',
    email: 'cruiz@outlook.com',
    phone: '962888551',
    initials: 'CR',
    sector: 1,
    role: 3
  },

]

const companions =[
  {
    companionCode: '01',
    senior: {
      id: '01',
      fullName:'Pedro Perez',
      phone: '982666784'
    },
    junior: {
      id: '02',
      fullName:'Juan Sancez',
      phone: '953741488'
    },
    sector: 1,
    status: true
  },
  {
    companionCode: '02',
    senior: {
      id: '03',
      fullName:'Jose Gimenez',
      phone: '987451254'
    },
    junior: {
      id: '04',
      fullName:'Andres Rojas',
      phone: '953121211'
    },
    sector: 2,
    status: true
  },
  

]

const familiesAssigned = [
  {
    id: 1,
    name: 'Ruiz Roman',
    phone: '982668447',
    address: 'Av Lima 663. San Miguel',
    sector: 1,
    status: true,
    membersQty: 4
  },
  {
    id: 2,
    name: 'Cancino Bernal',
    phone: '984778457',
    address: 'Maria Rivas Street 205. San Miguel',
    sector: 1,
    status: true,
    membersQty: 5
  },
  {
    id: 3,
    name: 'Correa Perez',
    phone: '666777888',
    address: 'Av Pacifico 180. San Miguel',
    sector: 1,
    status: true,
    membersQty: 2
  },
  {
    id: 4,
    name: 'Hone Penrod',
    phone: '988777123',
    address: 'Padre Urraca Street 56. San Miguel',
    sector: 1,
    status: true,
    membersQty: 2
  },
  {
    id: 5,
    name: 'Avila Rojas',
    phone: '962888551',
    address: 'Libertad Street 311. San Miguel',
    sector: 1,
    status: true,
    membersQty: 2
  },
];

const families = [
  {
    id: 1,
    name: 'Ruiz Roman',
    phone: '982668447',
    address: 'Av Lima 663. San Miguel',
    sector: 1,
    status: true,
    membersQty: 4
  },
  {
    id: 2,
    name: 'Cancino Bernal',
    phone: '984778457',
    address: 'Maria Rivas Street 205. San Miguel',
    sector: 1,
    status: true,
    membersQty: 5
  },
  {
    id: 3,
    name: 'Correa Perez',
    phone: '666777888',
    address: 'Av Pacifico 180. San Miguel',
    sector: 1,
    status: true,
    membersQty: 2
  },
  {
    id: 4,
    name: 'Hone Penrod',
    phone: '988777123',
    address: 'Padre Urraca Street 56. San Miguel',
    sector: 1,
    status: true,
    membersQty: 2
  },
  {
    id: 5,
    name: 'Avila Rojas',
    phone: '962888551',
    address: 'Libertad Street 311. San Miguel',
    sector: 1,
    status: true,
    membersQty: 2
  },
  {
    id: 6,
    name: 'Ruiz Castro',
    phone: '982668447',
    address: 'Av Lima 663. San Miguel',
    sector: 2,
    status: true,
    membersQty: 4
  },
  {
    id: 7,
    name: 'Alvarado Dueñas',
    phone: '984778457',
    address: 'Maria Rivas Street 205. San Miguel',
    sector: 2,
    status: true,
    membersQty: 5
  },
  {
    id: 8,
    name: 'Arevalo Gonzalez',
    phone: '666777888',
    address: 'Av Pacifico 180. San Miguel',
    sector: 2,
    status: true,
    membersQty: 2
  },
  {
    id: 9,
    name: 'Barco Morelos',
    phone: '988777123',
    address: 'Padre Urraca Street 56. San Miguel',
    sector: 2,
    status: true,
    membersQty: 2
  },
  {
    id: 10,
    name: 'Zapata Pernia',
    phone: '962888551',
    address: 'Libertad Street 311. San Miguel',
    sector: 2,
    status: true,
    membersQty: 2
  },
];

export {fakeUser, fakeCompanion, familiesAssigned, companions, families, users}