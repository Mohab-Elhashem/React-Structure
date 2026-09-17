import { FileTree } from './component/common/FileTree';
import { Button } from './component/ui/Button';
import { Card } from './component/ui/Card';
import { Table } from './component/ui/Table';
import { FileTreeData } from './constants/fileTreeData';

export interface User {
  [key: string]: React.ReactNode;
  id: number;
  name: string;
  role: string;
  city: string;
}

const usersColumns: string[] = ['ID', 'Name', 'Role', 'City'];

const usersData: User[] = [
  { id: 1, name: 'Abdulrahman Elshoura', role: 'Frontend Engineer', city: 'Cairo' },
  { id: 2, name: 'Mohab Elsayed', role: 'Frontend Engineer', city: 'Zagazig' },
  { id: 3, name: 'Sarah Parker', role: 'UI/UX Designer', city: 'Alexandria' },
  { id: 4, name: 'Michael Chen', role: 'Product Manager', city: 'Giza' },
  { id: 5, name: 'Emma Watson', role: 'QA Engineer', city: 'Mansoura' },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Assignment 1: Main React Structure */}
        <section className="space-y-4">
          <header className="border-b border-gray-200 pb-4">
            <h1 className="text-3xl font-bold text-gray-900">Assignment 1: Main React Structure</h1>
          </header>
          <div className="p-6 bg-slate-800 rounded-xl shadow-sm">
            <FileTree data={FileTreeData} />
          </div>
        </section>

        {/* Assignment 2: Reusable Components */}
        <section className="space-y-8">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-bold text-gray-900">Assignment 2: Reusable Components</h2>
          </div>

          {/* Button Demonstrations */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">1. Button Components</h3>
            <div className="flex flex-wrap gap-4 items-center bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <Button
                text="Primary Action"
                variant="primary"
                onClick={() => alert('Primary Button Clicked!')}
              />
              <Button
                text="Secondary Action"
                variant="secondary"
                onClick={() => alert('Secondary Button Clicked!')}
              />
              <Button
                text="Delete Item"
                variant="danger"
                onClick={() => alert('Danger Button Clicked!')}
              />
              <Button
                text="Disabled State"
                variant="primary"
                disabled={true}
              />
            </div>
          </section>

          {/* Card Demonstrations */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">2. Card Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                title="React Architecture"
                description="Learn how to structure reusable, modern components using standard React pattern practices."
                image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=80"
              />

              <Card
                title="Tailwind CSS"
                description="Utility-first CSS framework packed with classes that can be composed to build any design."
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-100 text-blue-800">
                    Custom Children Content
                  </span>
                  <Button
                    text="Explore Docs"
                    variant="secondary"
                    onClick={() => alert('Card child button clicked!')}
                  />
                </div>
              </Card>
            </div>
          </section>

          {/* Table Demonstration */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">3. Table Component</h3>
            <Table
              columns={usersColumns}
              data={usersData}
              striped={true}
            />
          </section>
        </section>

      </div>
    </div>
  );
}

export default App;