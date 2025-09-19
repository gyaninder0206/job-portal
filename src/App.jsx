import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "./components/ui/button"
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/landing'
import Onboarding from './pages/onboarding'
import JobPage from './pages/job-page'
import PostJobs from './pages/post-jobs'
import SavedJobs from './pages/saved-jobs'
import MyJobs from './pages/my-jobs'
import JobListing from './pages/job-listing'
import ProtectedRoute from './components/protected-route'

const router= createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: 
        <ProtectedRoute>
          <Onboarding />
        </ProtectedRoute>
      },
      {
        path: "/job-listing",
        element: 
        <ProtectedRoute>
          <JobListing />
        </ProtectedRoute>
      },
      {
        path: "/job/:id",
        element: 
        <ProtectedRoute>
          <JobPage />
        </ProtectedRoute>
      },
      {
        path: "/post-jobs",
        element: 
        <ProtectedRoute>
          <PostJobs />
        </ProtectedRoute>
      },
      {
        path: "/saved-jobs",
        element: 
        <ProtectedRoute>
          <SavedJobs />
        </ProtectedRoute>
      },
      {
        path: "/my-jobs",
        element: 
        <ProtectedRoute>
          <MyJobs />
        </ProtectedRoute>
      },
    ],
  },
]);
function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
