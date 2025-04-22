import { Model } from "sequelize";
import { UserAttributes, UserCreationAttributes } from "../model/user.model";

export default function userDataToCSV(data: Model<UserAttributes, UserCreationAttributes>[]) {
 const header = ["Name", "Phone", "Email", "Laptime", "Created At", "Updated At"];
 const csvRows = [];
 csvRows.push(header.join(','));

 data.forEach((user: any) => {
  const row = `"${user.name}","${user.phone}","${user.email}","-${user.laptime}-","${new Date(user.createdAt).toDateString()}","${new Date(user.updatedAt).toDateString()}"`
  csvRows.push(row);
 })

 return csvRows.join("\n");
}