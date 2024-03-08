const ds = require('datascript')

declare module 'datascript' {
  export const db_with: any
  export const db: any
  export const create_conn: any
  export const q: any
  export const pull: any
  export const empty_db: any
  // export const 'datascript.core': any
  // export const 'datascript.parser': any
  // export const 'datascript.transit': any
  // export const 'datascript.transit_format': any
  // export const 'datascript.transit_read': any
}
