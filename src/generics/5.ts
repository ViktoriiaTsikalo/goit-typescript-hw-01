export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type RoleName = Record<UserRole, string>;

const RoleDescription: RoleName = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
