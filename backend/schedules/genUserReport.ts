import db from "../model";
import userDataToCSV from "../utils/userDataToCSV";
import path from 'path';
import fs from 'fs';

export async function genUserReport() {
 const User = db.user;

 try {
  const users = await User.findAll();

  const csvContent = userDataToCSV(users);

  const publicDir = 'public';
  if (!fs.existsSync(publicDir)) {
   fs.mkdirSync(publicDir);
  }

  const date = new Date();

  date.setDate(date.getDate() - 1);

  const filename = date.toISOString().split("T")[0] + ".csv"

  const filePath = path.join('public', filename);
  fs.writeFileSync(filePath, csvContent);

  await User.destroy({ where: {}, individualHooks: true });
 } catch (error) {
  console.error(error);
 }
}
