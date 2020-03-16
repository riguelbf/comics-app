import MockAdapter from 'axios-mock-adapter';
import request from '../../services/request';

export const axiosMock = new MockAdapter(request);

