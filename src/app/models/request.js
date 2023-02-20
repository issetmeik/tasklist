import Sequelize, { Model } from 'sequelize';

class Request extends Model {
  static init(sequelize) {
    super.init(
      {
        method: Sequelize.STRING,
        url: Sequelize.STRING,
        body: Sequelize.JSON,
        status: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Request;
