export const routes = {
  START: "/home",
  OFFER: "/offer",
  OFFERELEM: (id: string) => `/offet${id}`,
  ABOUTUS: "/about",
  LOGIN: "/login",
  REGISTER: "/register",
  USERPROFILE: (userid: string) => `/profile${userid}`,
  LECTURES: "/lectures",
  CONTACTUS: "/contact",
}
