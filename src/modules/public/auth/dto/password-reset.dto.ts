import { IsStrongPassword, Length, ValidateIf } from 'class-validator';
import { IsMatching } from 'src/lib/ismatching.validator';

export class PasswordResetDto {
  @IsStrongPassword({ minLength: 8 }, { message: 'weak password' })
  newPassword: string;

  @ValidateIf((o, _v) => !!o.newPassword && !!o.confirmNewPassword)
  @IsMatching('newPassword', { message: 'passwords do not match' })
  confirmNewPassword: string;

  @Length(6, 6, { message: 'otp must be 6 characters' })
  otp: string;
}
