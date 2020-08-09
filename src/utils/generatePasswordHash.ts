import bcrypt from "bcrypt";

export default async function (password: string): string {
  const salt = await bcrypt.genSalt(10);
  const password_hash = await bcrypt.hash(password, salt);
  return password_hash;
}
