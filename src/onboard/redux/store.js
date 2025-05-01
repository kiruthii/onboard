import {configureStore} from "@reduxjs/toolkit";
import { studentDetailsSlice } from './slice';
export const store=configureStore({
    reducer:{
        studentDetails:studentDetailsSlice.reducer

    }
})