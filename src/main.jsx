import * as React from "react";
import *  as reactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import Experience from "./routes/experience";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/experience",
                element: <Experience />

            },
        ],
    },
]);

reactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);