import container from '@infra/container';

const server = container.resolve('server');

server();
