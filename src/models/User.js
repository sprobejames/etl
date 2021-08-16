/**
 * User class will always have the same
 * structure/properties even the API Sources
 * has different/changed structure
 */
class User {
  id = null;
  fullName = null;
  email = null;
  avatar = null;

  /**
   * Data from API Structure #1
   * @url https://run.mocky.io/v3/f7f2db83-197c-4941-be3e-fffd2ad31d26
   */
  async findAll() {
    const users = await fetch(
      "https://run.mocky.io/v3/f7f2db83-197c-4941-be3e-fffd2ad31d26"
    )
      .then((r) => r.json())
      .then((data) => {
        const list = [];
        data.map((row) => {
          let user = new User();
          user.id = row.id;
          user.fullName = row.name;
          user.email = row.email;
          user.avatar = row.avatar;
          list.push(user);
        });

        return list;
      });

    return users;
  }

  /**
   * Data from API Structure #2
   * @url https://run.mocky.io/v3/43f74332-bd73-44fa-b842-73b7e7a94646
   */
  // async findAll() {
  //   const users = await fetch(
  //     "https://run.mocky.io/v3/43f74332-bd73-44fa-b842-73b7e7a94646"
  //   )
  //     .then((r) => r.json())
  //     .then((data) => {
  //       const list = [];
  //       data.map((row) => {
  //         let user = new User();
  //         user.id = row.id;
  //         user.fullName = `${row.profile.firstName} ${row.profile.lastName}`;
  //         user.email = row.company.email;
  //         user.avatar = row.profile.avatar;
  //         list.push(user);
  //       });

  //       return list;
  //     });

  //   return users;
  // }
}

export default User;
