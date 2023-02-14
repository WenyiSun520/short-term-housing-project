import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "01",
    creater: "winnieee_sun",
    create_date: "02/01/2023",
    title: "Studio Sublease in U-distrct",
    description:
      "250ft Studio located next to UW campass. Five mins walk to school, 10 mins walk to H-mart. The rent is $1000/month not include utility, internet fee",
    contact: ["425-000-0000", "winnieee.sun@gmail.com"],
    social_media: { type: "instagram", account: "winnieee_sun" },
  },
  {
    id: "02",
    creater: "winnieee_sun",
    create_date: "02/01/2023",
    title: "Studio Sublease in U-distrct",
    description:
      "250ft Studio located next to UW campass. Five mins walk to school, 10 mins walk to H-mart. The rent is $1000/month not include utility, internet fee",
    contact: ["425-000-0000", "winnieee.sun@gmail.com"],
    social_media: { type: "instagram", account: "winnieee_sun" },
  },
];

const rentInfoSlice = createSlice({
  name: "rentsInfo",
  initialState,
  reducers: {},
});

export default rentInfoSlice.reducer;
