import { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { CheckCircle2, Circle, MoreVertical, Plus } from "lucide-react";

interface Task {
  id: string;
  title: string;
  priority: "low" | "medium" | "high";
  status: "todo" | "done";
  assignee: string;
}

export function TaskManagerDemo() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Design new landing page hero section",
      priority: "high",
      status: "todo",
      assignee: "JD"
    },
    {
      id: "2",
      title: "User testing for checkout flow",
      priority: "medium",
      status: "todo",
      assignee: "SM"
    },
    {
      id: "3",
      title: "Update brand guidelines documentation",
      priority: "low",
      status: "done",
      assignee: "AK"
    },
    {
      id: "4",
      title: "Prototype mobile navigation",
      priority: "medium",
      status: "todo",
      assignee: "JD"
    }
  ]);

  const toggleTaskStatus = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, status: task.status === "todo" ? "done" : "todo" }
        : task
    ));
  };

  const priorityColors = {
    low: "border-l-blue-500",
    medium: "border-l-orange-500",
    high: "border-l-red-500"
  };

  const priorityBadgeColors = {
    low: "bg-blue-100 text-blue-700",
    medium: "bg-orange-100 text-orange-700",
    high: "bg-red-100 text-red-700"
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg">
      <div className="mb-6">
        <h3 className="text-2xl mb-2">My Tasks</h3>
        <p className="text-gray-600">Manage your daily workflow</p>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <Card 
            key={task.id} 
            className={`p-4 border-l-4 ${priorityColors[task.priority]} hover:shadow-md transition-shadow group`}
          >
            <div className="flex items-start gap-3">
              <button
                onClick={() => toggleTaskStatus(task.id)}
                className="mt-0.5 text-gray-400 hover:text-green-500 transition-colors"
              >
                {task.status === "done" ? (
                  <CheckCircle2 className="size-5 text-green-500" />
                ) : (
                  <Circle className="size-5" />
                )}
              </button>

              <div className="flex-1">
                <h4 className={`mb-2 ${task.status === "done" ? "line-through text-gray-400" : ""}`}>
                  {task.title}
                </h4>
                <div className="flex items-center gap-2">
                  <Badge className={priorityBadgeColors[task.priority]} variant="secondary">
                    {task.priority}
                  </Badge>
                  <div className="size-6 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs">
                    {task.assignee}
                  </div>
                </div>
              </div>

              <button className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-gray-600">
                <MoreVertical className="size-5" />
              </button>
            </div>
          </Card>
        ))}
      </div>

      <Button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700">
        <Plus className="size-4 mr-2" />
        Add New Task
      </Button>
    </div>
  );
}
