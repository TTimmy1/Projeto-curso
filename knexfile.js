module.exports = {
    test: {
        client: 'pg',
        version: '9.6',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: '61582515',
            database: 'barriga1',
        },
        migrations: {
            directory: 'src/migrations',
        },
    },
};
