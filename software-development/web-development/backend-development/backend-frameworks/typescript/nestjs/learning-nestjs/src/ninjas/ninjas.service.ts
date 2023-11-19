import { Injectable } from '@nestjs/common';

const ninjas = [
  {
    id: 1,
    name: 'Ryu',
    rank: 'black',
    type: 'master',
    availability: true,
  },
  {
    id: 2,
    name: 'Crystal',
    rank: 'pink',
    type: 'student',
    availability: false,
  },
  {
    id: 3,
    name: 'Shaun',
    rank: 'orange',
    type: 'student',
    availability: true,
  },
];

@Injectable()
export class NinjasService {
  getNinjas(type?: string) {
    if (type) {
      return ninjas.filter((ninja) => ninja.type === type);
    }
    return ninjas;
  }

  getNinja(id: string) {
    return (
      ninjas.find((ninja) => ninja.id === parseInt(id)) || {
        message: 'Ninja not found',
      }
    );
  }
}
