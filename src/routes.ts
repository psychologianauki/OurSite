export const routes = {
  START: "/home",
  OFFER: "/offer",
  OFFERELEM: (id: string) => `/offet${id}`,
  ABOUTUS: "/aboutus",
  LOGIN: "/login",
  REGISTER: "/register",
  USERPROFILE: (userid: string) => `/profile${userid}`,
  LECTURES: "/lectures",
  CONTACTUS: "/contact",
}
