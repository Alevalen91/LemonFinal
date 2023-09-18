import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('little_lemon_final.db');

export  function createTableProfile(){

db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS profile (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT, email TEXT, phone TEXT, orders INTEGER, offers INTEGER, password INTEGER, newsletter INTEGER)'
  )
})

}

export  function getProfiles() {
console.log('RECUPERO PROFILO')
return new Promise(resolve =>{
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM profile', null,
      (txObj, { rows: { _array } }) => {console.log(_array);resolve(_array[0])},
      (txObj, error) => PromiseRejectionEvent(e)
    )})
  })

}

export  function createProfile(profile){
  db.transaction(tx => {
    tx.executeSql('INSERT INTO profile  (firstname, lastname, email, phone, orders, offers, password, newsletter) VALUES (?,?,?,?,?,?,?,?)'
    , [profile.firstName, profile.lastName, profile.email, profile.phone, profile.orders, profile.offers, profile.password, profile.newsletter ],
      (txObj, resultSet)=> {return resultSet},
      (txObj, error) => console.log('Error', error))
  })
}


export async function truncateProfile() {

  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'delete from  profile'
        );

      },
      function (error) {
        console.log(error.message)
        reject(error.message);
      },

      function () {
        resolve(true);
      
      }
      //  reject,
      // resolve
    );
  })
}





/*  MENU */





export async function createTable() {

  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'create table if not exists menuitems (id integer primary key not null, uuid text, title text, price text, category text);'
        );

      },
      function (error) {
        console.log(error.message)
        reject(error.message);
      },

      function () {
        resolve(true);
      
      }
      //  reject,
      // resolve
    );
  })
}

export async function truncateTable() {

  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'delete from  menuitems'
        );

      },
      function (error) {
        console.log(error.message)
        reject(error.message);
      },

      function () {
        resolve(true);
      
      }
      //  reject,
      // resolve
    );
  })
}

export async function getMenuItems() {
  console.log('inside')
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql('select * from menuitems', null, (_, { rows }) => {
        
        resolve(rows._array);
      });
    });
  });
}


export function saveMenuItems(menuItems) {

  return new Promise((resolve, reject) => {
    for (let items in menuItems) {

      db.transaction(
        (tx) => {
          tx.executeSql(
            'insert into menuitems (uuid, title, price, category ) values (?,?,?,?)', [menuItems[items].id, menuItems[items].title, menuItems[items].price, menuItems[items].category.title]
          );

        },

      );

  }
  
},
function (error) {
  console.log(error.message)
  reject(error.message);
},

function () {

  resolve(true);
  console.log('Created MENU OK');
})

}

export async function filterByQueryAndCategories(query, activeCategories) {
console.log('personal query')
  let string = activeCategories.join('" OR category = "')
  let customString = '';
  query.length > 0 ? customString = `SELECT * from menuitems WHERE (category = "${string}") AND title LIKE  "%${query}%" ;` : customString = `SELECT * from menuitems WHERE category = "${string}";`

  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(customString, [], (_, { rows }) => {
        resolve(rows._array);
        
      });
    });

  });
}
