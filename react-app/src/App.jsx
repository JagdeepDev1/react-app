import Facts from "./components/Facts";
import DailyTask from "./components/DailyTask";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddTodo from "./components/AddToDo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-2 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div>
                  <div className="flex space-x-4">
                    <Link
                      className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="/"
                    >
                      Dashboard
                    </Link>
                    <Link
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="/daily-task"
                    >
                      Daily-Tasks
                    </Link>
                    <Link
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="/facts"
                    >
                      Facts
                    </Link>
                    <Link
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="/addtodo"
                    >
                      Add To Do
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/daily-task" element={<DailyTask />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/addtodo" element={<AddTodo />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
