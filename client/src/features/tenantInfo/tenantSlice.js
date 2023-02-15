import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "03",
    creater: "winnieee_sun",
    create_date: new Date().toISOString(),
    title: "Want a Studio next to Redmond Microsoft",
    description:
      "I'm student from CA and I have a summer intern at Redmond MS. I'm looking for a studio from 7.15 to 9.15",
    contact: { email: "winnieee.sun@gmail.com", tel: "425-000-0000" },
    social_media: { type: "instagram", account: "winnieee_sun" },
  },
  {
    id: "04",
    creater: "winnieee_sun",
    create_date: new Date().toISOString(),
    title: "Want a Studio next to Redmond Microsoft",
    description:
      "I'm student from CA and I have a summer intern at Redmond MS. I'm looking for a studio from 7.15 to 9.15",
    contact: { email: "winnieee.sun@gmail.com", tel: "425-000-0000" },
    social_media: { type: "instagram", account: "winnieee_sun" },
  },
];

const tenantInfoSlice = createSlice({
  name: "tenantsInfo",
  initialState,
  reducers: {
    tenantInfoAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(creater, title, description, contact, social_media) {
        return {
          payload: {
            id: nanoid(),
            create_date: new Date().toISOString(),
            creater,
            title,
            description,
            contact,
            social_media,
          },
        };
      },
    },
  },
});
export const {tenantInfoAdded} = tenantInfoSlice.actions;
export default tenantInfoSlice.reducer;
