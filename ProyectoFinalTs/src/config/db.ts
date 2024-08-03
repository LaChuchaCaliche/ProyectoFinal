import { Sequelize } from 'sequelize-typescript';
import { User, Product } from '../models';

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'by9zklrqidsc3qcr74ju-mysql.services.clever-cloud.com',
    username: 'uvdeb2pilorhfwqw',
    password: 'bug3uGJ3kgEtoTFnRsoM',
    database: 'by9zklrqidsc3qcr74ju',
    models: [User, Product], // Añade todos tus modelos aquí
});

export default sequelize;

