import { PassportSerializer } from '@nestjs/passport';
import { Personnel } from 'src/personnel/entities/personnel.entity';

export class PersonnelSerializer extends PassportSerializer {
  serializeUser(
    personnel: Personnel,
    done: (err: Error, personnel: Record<string, any>) => void,
  ) {
    done(null, {
      sub: personnel.id,
      username: personnel.userName,
      role: personnel.role,
    });
  }

  async deserializeUser(
    payload: Record<string, any>,
    done: (err: Error, personnel: Record<string, any>) => void,
  ) {
    done(null, payload);
  }
}
